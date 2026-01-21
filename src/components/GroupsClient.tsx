'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import CreateGroupForm from './CreateGroupForm'

interface Group {
  id: number
  name: string
  description?: string
  ownerId: number
  isPublic: boolean
  owner: { id: number; username: string }
  _count: { members: number }
}

interface Invitation {
  id: number
  status: string
  group: { id: number; name: string; owner: { username: string } }
}

export default function GroupsClient() {
  const { data: session } = useSession()
  const [groups, setGroups] = useState<Group[]>([])
  const [friendsgroups, setFriendsgroups] = useState<Group[]>([])
  const [mygroups, setMygroups] = useState<Group[]>([])
  const [invitations, setInvitations] = useState<Invitation[]>([])
  const [showCreateModal, setShowCreateModal] = useState(false)

  useEffect(() => {
    fetchGroups()
    fetchInvitations()
  }, [])

  const fetchGroups = async () => {
    const res = await fetch('/api/groups')
    const data = await res.json()
    setGroups(data.groupsall || [])
    setMygroups(data.mygroups || [])
    setFriendsgroups(data.friendsgroups || [])
  }

  const fetchInvitations = async () => {
    if (!session?.user?.id) return
    const res = await fetch('/api/me/invitations')
    const data = await res.json()
    setInvitations(data || [])
  }

  const handleRequestJoin = async (groupId: number) => {
    try {
      const res = await fetch(`/api/groups/${groupId}/invite`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: session?.user?.id }),
      })
      if (!res.ok) throw new Error('Request failed')
      await fetchGroups()
      alert('Request sent to group owner!')
    } catch (e) {
      console.error(e)
      alert('Failed to send request')
    }
  }

  const handleInvitationResponse = async (invitationId: number, action: 'accept' | 'reject') => {
    try {
      const res = await fetch(`/api/groups/invitations/${invitationId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error || 'Failed')
      }
      await fetchInvitations()
      await fetchGroups()
    } catch (e) {
      console.error(e)
      alert('Action failed')
    }
  }

  const GroupCard = ({ group, actions }: { group: Group; actions?: React.ReactNode }) => (
    <div className="bg-zinc-800 rounded-lg shadow-md p-4 min-h-[120px] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-white truncate">{group.name}</h3>
          <span className="text-xs text-gray-400">👥 {group._count?.members ?? 0}</span>
        </div>
        {group.description && <p className="text-sm text-gray-300 mb-2 line-clamp-2">{group.description}</p>}
        <p className="text-xs text-gray-400">Owner: <span className="text-white">{group.owner?.username}</span></p>
      </div>

      {actions && <div className="mt-3 flex gap-2">{actions}</div>}
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Pending Invitations */}
      {invitations.length > 0 && (
        <div className="bg-blue-900 p-6 rounded-lg">
          <p className="text-white font-bold text-lg mb-4">📨 Pending Invitations ({invitations.length})</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {invitations.map(inv => (
              <div key={inv.id} className="bg-zinc-800 p-4 rounded flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{inv.group.name}</p>
                  <p className="text-xs text-gray-400">Invited by {inv.group.owner.username}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleInvitationResponse(inv.id, 'accept')}
                    className="px-3 py-1 bg-emerald-600 rounded text-white text-sm"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleInvitationResponse(inv.id, 'reject')}
                    className="px-3 py-1 bg-red-600 rounded text-white text-sm"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create Group Button */}
      {session?.user?.id && (
        <div className="flex justify-start">
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-emerald-600 rounded text-white font-semibold hover:bg-emerald-700 transition"
          >
            ➕ Create Group
          </button>
        </div>
      )}

      {/* Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex items-center justify-between bg-zinc-800 p-6 border-b border-zinc-700">
              <h2 className="flex justify-start text-2xl font-bold text-white">Create New Group</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <CreateGroupForm
                onSuccess={() => {
                  setShowCreateModal(false)
                  fetchGroups()
                }}
                onCancel={() => setShowCreateModal(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Sections as grids of cards */}
      <section>
        <h2 className="text-white font-bold text-xl mb-4">🏘️ Your Groups</h2>
        {mygroups.length === 0 ? (
          <p className="text-gray-400 mb-4">You don&apos;t own any groups yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mygroups.map(group => (
              <GroupCard
                key={group.id}
                group={group}
                actions={
                  <>
                    <a href={`/groups/${group.id}`} className="flex-1 text-center px-3 py-2 bg-zinc-600 rounded text-white text-sm hover:bg-zinc-500">Manage</a>
                    <a href={`/groups/${group.id}`} className="px-3 py-2 bg-indigo-600 rounded text-white text-sm">Open</a>
                  </>
                }
              />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-white font-bold text-xl mb-4">🏘️ Friends&apos; Groups</h2>
        {friendsgroups.length === 0 ? (
          <p className="text-gray-400 mb-4">No groups from people you follow.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {friendsgroups.map(group => (
              <GroupCard
                key={group.id}
                group={group}
                actions={
                  <>
                    <a href={`/groups/${group.id}`} className="flex-1 text-center px-3 py-2 bg-zinc-600 rounded text-white text-sm hover:bg-zinc-500">View</a>
                    {session?.user?.id !== group.ownerId && (
                      <button onClick={() => handleRequestJoin(group.id)} className="px-3 py-2 bg-blue-600 rounded text-white text-sm">Request Join</button>
                    )}
                  </>
                }
              />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-white font-bold text-xl mb-4">🏘️ All Public Groups</h2>
        {groups.length === 0 ? (
          <p className="text-gray-400">No public groups found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map(group => (
              <GroupCard
                key={group.id}
                group={group}
                actions={
                  <>
                    <a href={`/groups/${group.id}`} className="flex-1 text-center px-3 py-2 bg-zinc-600 rounded text-white text-sm hover:bg-zinc-500">View</a>
                    {session?.user?.id !== group.ownerId && (
                      <button onClick={() => handleRequestJoin(group.id)} className="px-3 py-2 bg-blue-600 rounded text-white text-sm">Request Join</button>
                    )}
                  </>
                }
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}