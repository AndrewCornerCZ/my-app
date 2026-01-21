'use client'

import React, { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import dynamic from "next/dynamic"

// dynamic Map preview (ke kompatibilitě se SSR)
const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false })

// react-leaflet used directly for the picker (client only)
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

type Participant = {
  id?: number
  attending?: boolean
  user?: {
    id?: number | string
    username?: string
    email?: string
  }
}

type Activity = {
  id: number
  sport?: { name: string }
  user?: { username: string }
  date?: string
  starttime?: string
  endtime?: string
  description?: string
  latitude?: number
  longitude?: number
}

type GroupActivity = {
  id: number
  activity: Activity
}

type GroupMember = {
  id: number
  user: {
    id: number | string
    username: string
  }
}

type GroupInvitation = {
  id: number
  status: string
  user?: {
    id: number | string
    username?: string
    email?: string
  }
}

type GroupData = {
  id: number | string
  name: string
  description?: string
  ownerId: number
  sportId: number
  owner?: { username: string }
  members?: GroupMember[]
  activities?: GroupActivity[]
  invitations?: GroupInvitation[]
}

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

function MapClickHandler({ onClick }: { onClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng.lat, e.latlng.lng)
    },
  })
  return null
}

function MapPicker({ lat, lng, onChange, zoom = 13 }: { lat?: number; lng?: number; onChange: (lat: number, lng: number) => void; zoom?: number }) {
  const center: [number, number] = [lat ?? 50.08, lng ?? 14.44]

  return (
    <div className="h-48 w-full rounded overflow-hidden">
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapClickHandler onClick={onChange} />
        {lat !== undefined && lng !== undefined && <Marker position={[lat, lng]} icon={markerIcon} />}
      </MapContainer>
    </div>
  )
}

export default function GroupView({ group }: { group: GroupData }) {
  const { data: session } = useSession()
  const [members, setMembers] = useState(group.members ?? [])
  const [activities, setActivities] = useState(group.activities ?? [])
  const [invitations, setInvitations] = useState(group.invitations ?? [])
  const [loading, setLoading] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<GroupActivity | null>(null)
  const [mapLocation, setMapLocation] = useState<{ lat: number; lng: number } | null>(null)

  // nový stav pro účastníky a info, zda jsem odpověděl
  const [participants, setParticipants] = useState<Participant[]>([])
  const [userAttending, setUserAttending] = useState<boolean | null>(null)

  // activity form: removed manual lat/lng fields
  const [activityForm, setActivityForm] = useState({
    sportId: "", // kept for backward compatibility but we'll use selectedSport
    date: "",
    starttime: "",
    endtime: "",
    description: "",
  })

  // sports list + group selected sport
  const [sport, setSport] = useState<string>("")
  const [selectedSport, setSelectedSport] = useState<number | null>(group?.sportId ?? null)
  // invite form (owner)
  const isOwner = session?.user?.id && Number(session.user.id) === group.ownerId
  const isMember = session?.user?.id && members.some((m: GroupMember) => Number(m.user.id) === Number(session.user.id))

useEffect(() => {
  async function loadSport() {
    try {
      const res = await fetch('/api/sport/' + group.sportId)
      if (!res.ok) return
      const json = await res.json()
      setSport(json || [])
    } catch (e) {
      console.error(e)
    }
  }
  loadSport()
}, [group.sportId])
  
  async function refresh() {
    try {
      const res = await fetch(`/api/groups/${group.id}`)
      if (!res.ok) return
      const json = await res.json()
      setMembers(json.members || [])
      setActivities(json.activities || [])
      setInvitations(json.invitations || [])
      // sync selectedSport with server value if present
      if (json.sportId) setSelectedSport(json.sportId)
    } catch (e) {
      console.error(e)
    }
  }

  // Get user location for map default
  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setMapLocation({ lat: latitude, lng: longitude })
        },
        () => {
          alert("Could not get your location")
        }
      )
    } else {
      alert("Geolocation not supported")
    }
  }

  async function createActivity(e?: React.FormEvent) {
    e?.preventDefault()
    if (!isMember && !isOwner) return alert("Only members can create activities")
    if (!selectedSport) return alert("Vyber sport pro skupinu")
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/${group.id}/activities`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sportId: Number(selectedSport), // use group-selected sport
          date: activityForm.date,
          starttime: activityForm.starttime,
          endtime: activityForm.endtime,
          description: activityForm.description,
          latitude: mapLocation ? Number(mapLocation.lat) : null,
          longitude: mapLocation ? Number(mapLocation.lng) : null,
        }),
      })
      if (!res.ok) throw new Error("Failed")
      setActivityForm({ sportId: "", date: "", starttime: "", endtime: "", description: "" })
      setMapLocation(null)
      await refresh()
      alert("Activity created!")
    } catch (err) {
      console.error(err)
      alert("Chyba při vytváření aktivity")
    } finally {
      setLoading(false)
    }
  }

  // accept / reject invitation (owner or invitee)
  async function handleInvitationResponse(inviteId: number, action: 'accept' | 'reject') {
    if (!session?.user?.id) return alert("Přihlas se")
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/invitations/${inviteId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error || 'Failed')
      }
      await refresh()
      if (action === 'accept') alert('Invitation accepted')
      else alert('Invitation rejected')
    } catch (err) {
      console.error(err)
      alert('Action failed')
    } finally {
      setLoading(false)
    }
  }

  async function removeMember(userId: number, username: string) {
    if (!isOwner) return
    if (!confirm(`Remove ${username} from group?`)) return
    
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/${group.id}/members/${userId}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed")
      await refresh()
      alert("Member removed")
    } catch (err) {
      console.error(err)
      alert("Failed to remove member")
    } finally {
      setLoading(false)
    }
  }

  async function leaveGroup() {
    if (!session?.user?.id) return
    if (!confirm("Leave group?")) return
    
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/${group.id}/members/${session.user.id}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed")
      alert("Left group")
      window.location.href = "/groups"
    } catch (err) {
      console.error(err)
      alert("Failed to leave group")
    } finally {
      setLoading(false)
    }
  }

  // načte účastníky aktivity (opravena cesta -> attendance)
  async function loadParticipants(activityId: number) {
    try {
      const res = await fetch(`/api/groups/${group.id}/activities/${activityId}/attendance`, { method: "GET" })
      if (!res.ok) throw new Error("Failed to load participants")
      const json = await res.json()
      console.log(json);
      return json || []
    }
    catch (err) {
      console.error(err)
      return []
    }
  }

  async function respondToActivity(activityId: number, attending: boolean) {
    if (!session?.user?.id) return alert("Sign in first")
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/${group.id}/activities/${activityId}/attendance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attending }),
      })
      if (!res.ok) throw new Error("Failed")
      await refresh()
      // refresh participants in case detail is open
      if (selectedActivity && selectedActivity.activity?.id === activityId) {
        const parts = await loadParticipants(activityId)
        console.log(parts);
        setParticipants(parts)
        setParticipants(parts)
          const me = parts.find(
          (p: Participant) =>
          Number(p.user?.id) === Number(session?.user?.id)
        )
        console.log(me.attending);
        setUserAttending(me.attending)
      }
      alert(attending ? "You're going!" : "You're not going")
    } catch (err) {
      console.error(err)
      alert("Failed to update attendance")
    } finally {
      setLoading(false)
    }
  }

  // když se vybere aktivita, natáhnout účastníky a nastavit userAttending
  useEffect(() => {
    let mounted = true
    async function load() {
      if (!selectedActivity) {
        setParticipants([])
        setUserAttending(null)
        return
      }
      setLoading(true)
      try {
        const activityId = selectedActivity.activity?.id ?? selectedActivity.id
        const parts = await loadParticipants(activityId)
        console.log (parts);
        if (!mounted) return
        setParticipants(parts)
          const me = parts.find(
          (p: Participant) =>
          Number(p.user?.id) === Number(session?.user?.id)
        )
        setUserAttending(me.attending)
      } catch (e) {
        console.error(e)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [selectedActivity, session?.user?.id])


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/groups" className="text-indigo-400 hover:text-indigo-300 text-sm">← Back to groups</Link>
        <div />
      </div>

      <div className="bg-zinc-800 rounded-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white">{group.name}</h1>
            <p className="text-sm text-gray-400 mt-1">Owner: <span className="text-white">{group.owner?.username}</span></p>

            {/* Sport selection */}
            <div className="mt-3 flex items-center gap-3">
              <label className="text-xs text-gray-400">Group sport: {sport}</label>
            </div>

            {group.description && <p className="text-sm text-gray-300 mt-2">{group.description}</p>}
          </div>

          <div className="flex gap-2">
            {isOwner ? (
              <span className="px-4 py-2 bg-emerald-600 text-white rounded">👑 Owner</span>
            ) : isMember ? (
              <button onClick={leaveGroup} disabled={loading} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50">Leave</button>
            ) : (
              <button onClick={async () => {
                setLoading(true)
                try {
                  await fetch(`/api/groups/${group.id}/invite`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId: session?.user?.id }),
                  })
                  alert("Request sent to owner")
                  await refresh()
                } catch {
                  alert("Failed to send request")
                } finally {
                  setLoading(false)
                }
              }} disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">Request Join</button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left sidebar - Members & Invitations */}
        <div className="lg:col-span-1 space-y-4">
          {/* Members */}
          <div className="bg-zinc-800 rounded-lg p-4">
            <h3 className="text-white font-bold mb-3">👥 Members ({members.length})</h3>
            <div className="space-y-2">
              {members.length === 0 && <div className="text-gray-400 text-sm">No members yet</div>}
              {members.map((m) => (
                <div key={m.id} className="flex items-center justify-between bg-zinc-700 p-2 rounded">
                  <div className="text-white text-sm font-medium">{m.user?.username}</div>
                  {Number(m.user.id) === group.ownerId && (
                    <span className="text-xs bg-yellow-500 px-2 py-1 rounded text-black">Owner</span>
                  )}
                  {isOwner && Number(m.user.id) !== group.ownerId && (
                    <button
                      onClick={() => removeMember(Number(m.user.id), m.user.username)}
                      disabled={loading}
                      className="text-xs text-red-400 hover:text-red-300"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>


          {/* Invitations list with accept/reject (owner and invitee can act) */}
        
          {isOwner && (
            <div className="bg-zinc-700 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-3">Invitations</h3>
              <div className="space-y-2">
              {invitations.length > 0 && (
                <p className="text-xs text-gray-400 mt-2">⏳ {invitations.filter((i: GroupInvitation) => i.status === 'pending').length} pending invitation(s)</p>
              )}
                {invitations.map((inv: GroupInvitation) => {
                  if (inv.status === 'pending') {
                    const isForMe = Number(inv.user?.id) === Number(session?.user?.id)
                    const canAct = isForMe || isOwner
                    return (
                      <div key={inv.id} className="flex items-center justify-between bg-zinc-800 p-2 rounded">
                        <div>
                          <div className="text-sm text-white">{inv.user?.username ?? inv.user?.email}</div>
                          <div className="text-xs text-gray-400">Status: {inv.status}</div>
                        </div>
                        {canAct ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleInvitationResponse(inv.id, 'accept')}
                              disabled={loading}
                              className="px-3 py-1 bg-emerald-600 rounded text-white text-sm"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleInvitationResponse(inv.id, 'reject')}
                              disabled={loading}
                              className="px-3 py-1 bg-red-600 rounded text-white text-sm"
                            >
                              Reject
                            </button>
                          </div>
                        ) : (
                          <div className="text-xs text-gray-400">Waiting</div>
                        )}
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right content - Activities */}
        <div className="lg:col-span-3 space-y-4">
          {/* Selected activity detail with map */}
          {selectedActivity && (
            <div className="bg-zinc-800 rounded-lg p-4">
              <button onClick={() => { setSelectedActivity(null); setParticipants([]); setUserAttending(null) }} className="text-indigo-400 hover:text-indigo-300 text-sm mb-3">← Back to list</button>
              <h3 className="text-white font-bold mb-3">
                {selectedActivity.activity.sport?.name} - {selectedActivity.activity.user?.username}
              </h3>
              <div className="mb-4">
                <p className="text-sm text-gray-300 mb-2">
                  📅 {selectedActivity.activity.date?.slice(0, 10)} | ⏰ {selectedActivity.activity.starttime} – {selectedActivity.activity.endtime}
                </p>
                {selectedActivity.activity.description && (
                  <p className="text-sm text-gray-300 mb-4">{selectedActivity.activity.description}</p>
                )}
              </div>

              {/* Map */}
              {selectedActivity.activity.latitude && selectedActivity.activity.longitude && (
                <div className="mb-4 h-64 rounded overflow-hidden">
                  <MapComponent
                    latitude={selectedActivity.activity.latitude}
                    longitude={selectedActivity.activity.longitude}
                    zoom={14}
                  />
                </div>
              )}

              {/* Participants list */}
              <div className="mb-4 bg-zinc-700 p-3 rounded">
                <h4 className="text-white font-semibold mb-2">Participants ({participants.filter(p => p.attending).length})</h4>
                {participants.length === 0 && <div className="text-gray-400 text-sm">Nikdo zatím nejde</div>}
                <div className="space-y-2">
                  {participants.map((p: Participant) => {
                    const isMe = session?.user?.id && Number(p.user?.id) === Number(session.user.id)
                    return (
                      p.attending === true && 
                      <div key={p.id ?? p.user?.id} className={`flex items-center justify-between p-2 rounded ${isMe ? 'bg-zinc-600' : 'bg-zinc-800'}`}>
                        <div>
                          <div className="text-sm text-white">{p.user?.username ?? p.user?.email}</div>
                        </div>
                        {isMe && <span className="text-xs bg-indigo-500 px-2 py-1 rounded text-white">You</span>}
                      </div>
                      
                    )
                  })}
                </div>

                {/* If I already responded, ukázat status */}
                {userAttending !== null && (
                  <div className="mt-3 text-xs">
                    {userAttending == true ? (
                      <span className="text-emerald-400">✅ Odpověděl(a) jsi, že jde&scaron;</span>
                    ) : userAttending == false ? (
                      <span className="text-red-400">❌ Odpověděl(a) jsi, že nejde&scaron;</span>
                    ) : (
                      <span className="text-gray-400">ℹ️ Neodpověděl(a) jsi, že jde&scaron;</span>
                    )}
                  </div>
                )}
              </div>

              {/* Attendance buttons */}
              {isMember && (
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => respondToActivity(selectedActivity.activity.id, true)}
                    disabled={loading}
                    className="flex-1 px-4 py-2 bg-emerald-600 rounded text-white hover:bg-emerald-700 disabled:opacity-50"
                  >
                    ✅ I&apos;m Going
                  </button>
                  <button
                    onClick={() => respondToActivity(selectedActivity.activity.id, false)}
                    disabled={loading}
                    className="flex-1 px-4 py-2 bg-red-600 rounded text-white hover:bg-red-700 disabled:opacity-50"
                  >
                    ❌ Not Going
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Activities list */}
          {!selectedActivity && (
            <div className="bg-zinc-800 rounded-lg p-4">
              <h3 className="text-white font-bold mb-3">🏃 Activities ({activities.length})</h3>
              {activities.length === 0 && <div className="text-gray-400 text-sm">No activities yet</div>}
              <div className="space-y-3">
                {activities.map((ga: GroupActivity) => (
                  <div
                    key={ga.id}
                    onClick={() => setSelectedActivity(ga)}
                    className="bg-zinc-700 p-3 rounded cursor-pointer hover:bg-zinc-600 transition"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-indigo-400">{ga.activity.sport?.name ?? "Sport"}</span>
                          <span className="text-xs text-gray-400">by {ga.activity.user?.username ?? "User"}</span>
                        </div>
                        <div className="text-xs text-gray-400">
                          📅 {ga.activity.date?.slice(0, 10)} | ⏰ {ga.activity.starttime} – {ga.activity.endtime}
                        </div>
                        {ga.activity.description && (
                          <div className="text-xs text-gray-300 mt-2 italic line-clamp-1">{ga.activity.description}</div>
                        )}
                      </div>
                      <span className="text-xs text-indigo-400 ml-2">View →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Create activity form with map picker */}
          {!selectedActivity && (isOwner || isMember) && (
            <div className="bg-zinc-800 rounded-lg p-4">
              <h3 className="text-white font-bold mb-3">➕ Create Activity</h3>
              <form onSubmit={createActivity} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    required
                    type="date"
                    value={activityForm.date}
                    onChange={e => setActivityForm({ ...activityForm, date: e.target.value })}
                    className="p-2 bg-zinc-700 rounded text-white text-sm"
                  />
                  <input
                    required
                    placeholder="Start time (e.g., 10:00)"
                    value={activityForm.starttime}
                    onChange={e => setActivityForm({ ...activityForm, starttime: e.target.value })}
                    className="p-2 bg-zinc-700 rounded text-white text-sm"
                  />
                  <input
                    required
                    placeholder="End time (e.g., 11:00)"
                    value={activityForm.endtime}
                    onChange={e => setActivityForm({ ...activityForm, endtime: e.target.value })}
                    className="p-2 bg-zinc-700 rounded text-white text-sm"
                  />
                </div>

                {/* Location picker */}
                <div className="bg-zinc-700 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-white text-sm font-semibold">📍 Location (klikni na mapu)</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={getCurrentLocation}
                        className="text-xs bg-indigo-600 px-2 py-1 rounded text-white hover:bg-indigo-700"
                      >
                        Use My Location
                      </button>
                      <button
                        type="button"
                        onClick={() => setMapLocation(null)}
                        className="text-xs bg-gray-600 px-2 py-1 rounded text-white hover:bg-gray-500"
                      >
                        Clear
                      </button>
                    </div>
                  </div>

                  {/* Map picker (click to set) */}
                  <MapPicker
                    lat={mapLocation?.lat}
                    lng={mapLocation?.lng}
                    onChange={(lat, lng) => setMapLocation({ lat, lng })}
                    zoom={13}
                  />

                  <div className="mt-2 text-xs text-gray-400">
                    {mapLocation ? `Vybráno: ${mapLocation.lat.toFixed(5)}, ${mapLocation.lng.toFixed(5)}` : 'Žádná pozice není vybraná.'}
                  </div>
                </div>

                <textarea
                  placeholder="Description (optional)"
                  value={activityForm.description}
                  onChange={e => setActivityForm({ ...activityForm, description: e.target.value })}
                  className="w-full p-2 bg-zinc-700 rounded text-white text-sm"
                  rows={2}
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-emerald-600 rounded text-white hover:bg-emerald-700 disabled:opacity-50"
                  >
                    {loading ? "Creating..." : "Create Activity"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
