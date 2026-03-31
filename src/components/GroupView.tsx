'use client'

import React, { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import dynamic from "next/dynamic"
import Image from 'next/image'
import 'leaflet/dist/leaflet.css'

const MapPicker = dynamic(() => import("@/components/MapPicker"), { ssr: false })
const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false })

type Participant = {
  id?: number
  attending?: boolean
  user?: {image: string, id?: number | string; username?: string; email?: string }
}
type Activity = {
  id: number
  sport?: { name: string, emoji: string }
  user?: { username: string }
  date?: string
  starttime?: string
  endtime?: string
  description?: string
  latitude?: number
  longitude?: number
}
type GroupActivity = { id: number; activity: Activity }
type GroupMember = { id: number; user: { id: number | string; username: string; role?: string; image: string } }
type GroupInvitation = { id: number; status: string; user?: { id: number | string; username?: string; email?: string, image: string } }
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

// Small reusable card wrapper
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-5 ${className}`}>
      {children}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-3">{children}</p>
}

export default function GroupView({ group }: { group: GroupData }) {
  const { data: session } = useSession()
  const [members, setMembers] = useState(group.members ?? [])
  const [activities, setActivities] = useState(group.activities ?? [])
  const [invitations, setInvitations] = useState(group.invitations ?? [])
  const [loading, setLoading] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<GroupActivity | null>(null)
  const [mapLocation, setMapLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [participants, setParticipants] = useState<Participant[]>([])
  const [userAttending, setUserAttending] = useState<boolean | null>(null)
  const [sport, setSport] = useState<string>("")
  const [selectedSport] = useState<number | null>(group?.sportId ?? null)
  const [activityForm, setActivityForm] = useState({ sportId: "", date: "", starttime: "", endtime: "", description: "" })

  const isOwner = session?.user?.id && Number(session.user.id) === group.ownerId
  const isAdmin = session?.user?.id && members.some((m: GroupMember) => 
    Number(m.user.id) === Number(session.user.id) && m.user.role === "admin"
  )
  const isMember = session?.user?.id && members.some((m: GroupMember) => Number(m.user.id) === Number(session.user.id))
  const canManageRoles = isOwner || isAdmin

  useEffect(() => {
    async function loadSport() {
      try {
        const res = await fetch('/api/sport/' + group.sportId)
        if (!res.ok) return
        const json = await res.json()
        setSport(json || [])
      } catch (e) { console.error(e) }
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

    } catch (e) { console.error(e) }
  }
  async function createActivity(e?: React.FormEvent) {
    e?.preventDefault()
    if (!isMember && !isOwner) return alert("Only members can create activities")
    if (!selectedSport) return alert("Select a sport for the group")
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/${group.id}/activities`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sportId: Number(selectedSport),
          date: activityForm.date, starttime: activityForm.starttime, endtime: activityForm.endtime,
          description: activityForm.description,
          latitude: mapLocation ? Number(mapLocation.lat) : null,
          longitude: mapLocation ? Number(mapLocation.lng) : null,
        }),
      })
      if (!res.ok) throw new Error("Failed")
      setActivityForm({ sportId: "", date: "", starttime: "", endtime: "", description: "" })
      setMapLocation(null)
      await refresh()
    } catch (err) { console.error(err); alert("Error creating activity") }
    finally { setLoading(false) }
  }

  async function handleInvitationResponse(inviteId: number, action: 'accept' | 'reject') {
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/invitations/${inviteId}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      })
      if (!res.ok) throw new Error('Failed')
      await refresh()
    } catch (err) { console.error(err); alert('Action failed') }
    finally { setLoading(false) }
  }

  async function updateMemberRole(userId: number, username: string, newRole: string) {
    if (!canManageRoles) return
    // Owner se nemůže demotovat/promote
    if (Number(userId) === group.ownerId) {
      alert("Cannot change the owner's role")
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/${group.id}/members/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole })
      })
      if (!res.ok) throw new Error("Failed")
      await refresh()
    } catch (err) { console.error(err); alert("Failed to update role") }
    finally { setLoading(false) }
  }

  async function removeMember(userId: number, username: string) {
    if (!canManageRoles) return
    // Owner se nemůže sám smazat
    if (Number(userId) === group.ownerId) {
      alert("Cannot remove the owner")
      return
    }
    if (!confirm(`Remove ${username} from group?`)) return
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/${group.id}/members/${userId}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed")
      await refresh()
    } catch (err) { console.error(err); alert("Failed to remove member") }
    finally { setLoading(false) }
  }

  async function leaveGroup() {
    if (!session?.user?.id || !confirm("Leave group?")) return
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/${group.id}/members/${session.user.id}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed")
      window.location.href = "/groups"
    } catch (err) { console.error(err); alert("Failed to leave group") }
    finally { setLoading(false) }
  }

  async function loadParticipants(activityId: number) {
    try {
      const res = await fetch(`/api/groups/${group.id}/activities/${activityId}/attendance`)
      if (!res.ok) throw new Error("Failed")
      return await res.json() || []
    } catch (err) { console.error(err); return [] }
  }
  async function respondToActivity(activityId: number, attending: boolean) {
    if (!session?.user?.id) return alert("Sign in first")
    setLoading(true)
    try {
      const res = await fetch(`/api/groups/${group.id}/activities/${activityId}/attendance`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attending }),
      })
      if (!res.ok) throw new Error("Failed")
      await refresh()
      if (selectedActivity?.activity?.id === activityId) {
        const parts = await loadParticipants(activityId)
        setParticipants(parts)
        const me = parts.find((p: Participant) => Number(p.user?.id) === Number(session?.user?.id))
        setUserAttending(me?.attending ?? null)
      }
    } catch (err) { console.error(err); alert("Failed to update attendance") }
    finally { setLoading(false) }
  }

  useEffect(() => {
    let mounted = true
    async function load() {
      if (!selectedActivity) { setParticipants([]); setUserAttending(null); return }
      setLoading(true)
      try {
        const parts = await loadParticipants(selectedActivity.activity?.id ?? selectedActivity.id)
        if (!mounted) return
        setParticipants(parts)
        const me = parts.find((p: Participant) => Number(p.user?.id) === Number(session?.user?.id))
        setUserAttending(me?.attending ?? null)
      } catch (e) { console.error(e) }
      finally { if (mounted) setLoading(false) }
    }
    load()
    return () => { mounted = false }
  }, [selectedActivity, session?.user?.id])
  return (
    <div className="space-y-4 lg:space-y-6">

      {/* Back */}
      <Link href="/groups" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-teal-400 text-sm transition-colors duration-200">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
        Back to groups
      </Link>

      {/* Group header */}
      <Card>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">{sport}</p>
            <h1 className="text-xl lg:text-2xl font-extrabold tracking-tight text-white mb-1">{group.name}</h1>
            <p className="text-xs lg:text-sm text-gray-500">
              Owner: <span className="text-gray-300">@{group.owner?.username}</span>
            </p>
            {group.description && (
              <p className="text-xs lg:text-sm text-gray-400 mt-2">{group.description}</p>
            )}
          </div>

          <div className="flex-shrink-0">
            {isOwner ? (
              <span className="flex items-center gap-1.5 px-3 py-2 lg:px-3.5 lg:py-2 rounded-lg lg:rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs lg:text-sm font-medium whitespace-nowrap">
                👑 Owner
              </span>
            ) : isAdmin ? (
              <span className="flex items-center gap-1.5 px-3 py-2 lg:px-3.5 lg:py-2 rounded-lg lg:rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs lg:text-sm font-medium whitespace-nowrap">
                🛡️ Admin
              </span>
            ) : isMember ? (
              <button onClick={leaveGroup} disabled={loading}
                className="px-3 py-2 lg:px-3.5 lg:py-2 rounded-lg lg:rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs lg:text-sm font-medium hover:bg-red-500/20 disabled:opacity-50 transition-all duration-200">
                Leave
              </button>
            ) : (
              <button onClick={async () => {
                setLoading(true)
                try {
                  await fetch(`/api/groups/${group.id}/invite`, {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId: session?.user?.id }),
                  })
                  await refresh()
                } catch { alert("Failed to send request") }
                finally { setLoading(false) }
              }} disabled={loading}
                className="px-3 py-2 lg:px-3.5 lg:py-2 rounded-lg lg:rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-xs lg:text-sm font-semibold hover:brightness-110 disabled:opacity-50 transition-all duration-200 whitespace-nowrap">
                Request Join
              </button>
            )}
          </div>
        </div>
      </Card>

      {/* Mobile: Sidebar before content */}
      {/* Desktop: Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-5">

        {/* Left sidebar - On mobile appears first due to HTML order */}
        <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">

          {/* Members */}
          <Card>
            <SectionTitle>Members ({members.length})</SectionTitle>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {members.length === 0 && <p className="text-gray-600 text-xs lg:text-sm">No members yet</p>}
              {members.map((m) => {
                const isOwnerMember = Number(m.user.id) === group.ownerId
                const role = m.user.role || "member"
                const isCurrentUser = session?.user?.id && Number(m.user.id) === Number(session.user.id)
                
                return (
                  <div key={m.id} className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      {/* Avatar with image support */}
                      <div className="relative w-6 h-6 lg:w-7 lg:h-7 flex-shrink-0">
                        {m.user.image ? (
                          <Image
                            src={m.user.image}
                            alt={m.user.username}
                            fill
                            className="rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-700 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{m.user?.username?.[0]?.toUpperCase()}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <a href={`/userprofile/${m.user.username}`} className="text-white text-xs lg:text-sm truncate">{m.user?.username}</a>
                          {isCurrentUser && (
                            <span className="text-xs text-gray-500">(you)</span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 capitalize">{role}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                      {/* Role badge */}
                      {isOwnerMember ? (
                        <span className="text-xs bg-teal-500/15 border border-teal-500/30 text-teal-300 px-1.5 py-0.5 rounded whitespace-nowrap hidden sm:inline-block">Owner</span>
                      ) : role === "admin" ? (
                        <span className="text-xs bg-purple-500/15 border border-purple-500/30 text-purple-300 px-1.5 py-0.5 rounded whitespace-nowrap hidden sm:inline-block">Admin</span>
                      ) : null}

                      {/* Manage button (owner/admin can manage others) */}
                      {canManageRoles && !isOwnerMember && (
                        <div className="relative group">
                          <button className="text-xs text-gray-400 hover:text-teal-300 transition-colors px-1.5 py-0.5">
                            ⚙️
                          </button>
                          <div className="absolute right-0 mt-1 w-32 bg-gray-900 border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-10">
                            {role === "member" ? (
                              <button onClick={() => updateMemberRole(Number(m.user.id), m.user.username, "admin")}
                                className="w-full text-left px-3 py-2 text-xs text-teal-300 hover:bg-teal-500/20 transition-colors">
                                Make Admin
                              </button>
                            ) : (
                              <button onClick={() => updateMemberRole(Number(m.user.id), m.user.username, "member")}
                                className="w-full text-left px-3 py-2 text-xs text-purple-300 hover:bg-purple-500/20 transition-colors">
                                Remove Admin
                              </button>
                            )}
                            <button onClick={() => removeMember(Number(m.user.id), m.user.username)}
                              className="w-full text-left px-3 py-2 text-xs text-red-400 hover:bg-red-500/20 transition-colors border-t border-white/10">
                              Remove
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Simple remove for members own action */}
                      {!canManageRoles && isCurrentUser && !isOwnerMember && (
                        <button onClick={leaveGroup} disabled={loading}
                          className="text-xs text-red-400 hover:text-red-300 transition-colors">Leave</button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>

          {/* Invitations (owner/admin only) */}
          {canManageRoles && (
            <Card>
              <SectionTitle>Invitations</SectionTitle>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {invitations.filter(i => i.status === 'pending').length === 0 && (
                  <p className="text-gray-600 text-xs lg:text-sm">No pending invitations</p>
                )}
                {invitations.map((inv: GroupInvitation) => {
                  if (inv.status !== 'pending') return null
                  return (
                    <div key={inv.id} className="bg-white/5 border border-white/10 rounded-lg p-2 lg:p-3">
                      <p className="text-white text-xs lg:text-sm font-medium mb-0.5">{inv.user?.username ?? inv.user?.email}</p>
                      <p className="text-xs text-gray-600 mb-1.5">Pending</p>
                      <div className="flex gap-2">
                        <button onClick={() => handleInvitationResponse(inv.id, 'accept')} disabled={loading}
                          className="flex-1 py-1 lg:py-1.5 rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-medium hover:bg-teal-500/30 transition-all duration-200">
                          Accept
                        </button>
                        <button onClick={() => handleInvitationResponse(inv.id, 'reject')} disabled={loading}
                          className="flex-1 py-1 lg:py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/20 transition-all duration-200">
                          Reject
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>
          )}
        </div>

        {/* Right content */}
        <div className="lg:col-span-3 space-y-4 order-1 lg:order-2">

          {/* Activity detail */}
          {selectedActivity && (
            <Card>
              <button onClick={() => { setSelectedActivity(null); setParticipants([]); setUserAttending(null) }}
                className="inline-flex items-center gap-1.5 text-gray-500 hover:text-teal-400 text-sm mb-4 transition-colors duration-200">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
                Back to activities
              </button>

              <SectionTitle>{selectedActivity.activity.sport?.emoji} {selectedActivity.activity.sport?.name}</SectionTitle>
              <h3 className="text-white font-bold text-base lg:text-lg mb-3">
                by @{selectedActivity.activity.user?.username}
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs lg:text-sm text-gray-400 mb-3">
                <span>📅 {selectedActivity.activity.date?.slice(0, 10)}</span>
                <span className="hidden sm:inline">•</span>
                <span>⏰ {selectedActivity.activity.starttime}–{selectedActivity.activity.endtime}</span>
              </div>

              {selectedActivity.activity.description && (
                <p className="text-gray-400 text-xs lg:text-sm mb-4">{selectedActivity.activity.description}</p>
              )}

              {selectedActivity.activity.latitude && selectedActivity.activity.longitude && (
                <div className="mb-4 h-48 lg:h-56 rounded-xl overflow-hidden border border-white/10">
                  <MapComponent key={`${selectedActivity.activity.latitude}-${selectedActivity.activity.longitude}`} latitude={selectedActivity.activity.latitude} longitude={selectedActivity.activity.longitude} zoom={14} />
                </div>
              )}

              {/* Participants */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 lg:p-4 mb-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-3">
                  Going ({participants.filter(p => p.attending).length})
                </p>
                {participants.filter(p => p.attending).length === 0 && (
                  <p className="text-gray-600 text-xs lg:text-sm">Nobody is going yet</p>
                )}
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {participants.map((p: Participant) => {
                    if (!p.attending) return null
                    const isMe = session?.user?.id && Number(p.user?.id) === Number(session.user.id)
                    return (
                      <div key={p.id ?? p.user?.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="relative w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0">
                            {/* Note: participants might not have image data, adjust as needed */}
                            <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-700 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{(p.user?.username ?? '?')[0]?.toUpperCase()}</span>
                            </div>
                          </div>
                          <span className="text-white text-xs lg:text-sm truncate">{p.user?.username ?? p.user?.email}</span>
                        </div>
                        {isMe && <span className="text-xs bg-teal-500/15 border border-teal-500/30 text-teal-300 px-2 py-0.5 rounded-lg whitespace-nowrap flex-shrink-0">You</span>}
                      </div>
                    )
                  })}
                </div>

                {userAttending !== null && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    {userAttending
                      ? <span className="text-teal-400 text-xs">✅ You&apos;re going</span>
                      : <span className="text-red-400 text-xs">❌ You&apos;re not going</span>}
                  </div>
                )}
              </div>

              {isMember && (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button onClick={() => respondToActivity(selectedActivity.activity.id, true)} disabled={loading}
                    className="flex-1 py-2 lg:py-2.5 rounded-lg lg:rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs lg:text-sm font-semibold hover:bg-teal-500/25 disabled:opacity-50 transition-all duration-200">
                    ✅ I&apos;m Going
                  </button>
                  <button onClick={() => respondToActivity(selectedActivity.activity.id, false)} disabled={loading}
                    className="flex-1 py-2 lg:py-2.5 rounded-lg lg:rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs lg:text-sm font-semibold hover:bg-red-500/20 disabled:opacity-50 transition-all duration-200">
                    ❌ Not Going
                  </button>
                </div>
              )}
            </Card>
          )}

          {/* Activities list */}
          {!selectedActivity && isMember && (
            <Card>
              <SectionTitle>Activities ({activities.length})</SectionTitle>
              {activities.length === 0 && <p className="text-gray-600 text-xs lg:text-sm">No activities yet</p>}
              <div className="space-y-2 lg:space-y-3 max-h-96 overflow-y-auto">
                {activities.map((ga: GroupActivity) => {
                  if (!ga?.activity) return null
                  return (
                    <button key={ga.id} onClick={() => setSelectedActivity(ga)}
                      className="w-full text-left bg-white/5 border border-white/10 hover:border-teal-500/30 rounded-lg lg:rounded-xl p-3 lg:p-4 transition-all duration-200 group/act">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold text-xs lg:text-sm group-hover/act:text-teal-300 transition-colors duration-200">
                            {ga.activity.sport?.emoji} {ga.activity.sport?.name ?? "Activity"}
                          </p>
                          <p className="text-gray-500 text-xs mt-0.5">by @{ga.activity.user?.username ?? "User"}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1.5 text-xs text-gray-500">
                            <span>📅 {ga.activity.date?.slice(0, 10)}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>⏰ {ga.activity.starttime}–{ga.activity.endtime}</span>
                          </div>
                          {ga.activity.description && (
                            <p className="text-gray-600 text-xs mt-1.5 line-clamp-1">{ga.activity.description}</p>
                          )}
                        </div>
                        <svg className="w-4 h-4 text-gray-600 group-hover/act:text-teal-400 transition-colors duration-200 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </button>
                  )
                })}
              </div>
            </Card>
           )}

          {/* Create activity form */}
          {!selectedActivity && (isOwner || isAdmin) && (
            <Card>
              <SectionTitle>Create Activity</SectionTitle>
              <form onSubmit={createActivity} className="space-y-2 lg:space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input required type="date" value={activityForm.date}
                    onChange={e => setActivityForm({ ...activityForm, date: e.target.value })}
                    className="px-3 py-2 lg:py-2.5 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl text-white text-xs lg:text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200" />
                  <input required placeholder="Start (10:00)" value={activityForm.starttime}
                    onChange={e => setActivityForm({ ...activityForm, starttime: e.target.value })}
                    className="px-3 py-2 lg:py-2.5 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl text-white text-xs lg:text-sm placeholder-gray-600 outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200" />
                  <input required placeholder="End (11:00)" value={activityForm.endtime}
                    onChange={e => setActivityForm({ ...activityForm, endtime: e.target.value })}
                    className="px-3 py-2 lg:py-2.5 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl text-white text-xs lg:text-sm placeholder-gray-600 outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200" />
                </div>

                {/* Location picker - Dynamically loaded */}
                {!selectedActivity && (
                  <MapPicker lat={mapLocation?.lat} lng={mapLocation?.lng} onChange={(lat, lng) => setMapLocation({ lat, lng })} zoom={13} />
                )}

                <textarea placeholder="Description (optional)" value={activityForm.description}
                  onChange={e => setActivityForm({ ...activityForm, description: e.target.value })}
                  className="w-full px-3 py-2 lg:py-2.5 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl text-white text-xs lg:text-sm placeholder-gray-600 outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 resize-none"
                  rows={2} />

                <div className="flex justify-end pt-1">
                  <button type="submit" disabled={loading}
                    className="px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg lg:rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-xs lg:text-sm font-semibold shadow-lg shadow-teal-900/40 hover:brightness-110 disabled:opacity-50 transition-all duration-200">
                    {loading ? "Creating..." : "Create Activity"}
                  </button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}