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

  useEffect(() => { fetchGroups(); fetchInvitations() }, [])

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
    } catch (e) { console.error(e); alert('Failed to send request') }
  }

  const handleInvitationResponse = async (invitationId: number, action: 'accept' | 'reject') => {
    try {
      const res = await fetch(`/api/groups/invitations/${invitationId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      })
      if (!res.ok) throw new Error('Failed')
      await fetchInvitations(); await fetchGroups()
    } catch (e) { console.error(e); alert('Action failed') }
  }

  const GroupCard = ({ group, actions }: { group: Group; actions?: React.ReactNode }) => (
    <div className="bg-white/5 border border-white/10 hover:border-teal-500/30 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 group/card">
      <div>
        <div className="flex items-start justify-between mb-2 gap-2">
          <h3 className="text-white font-bold text-base truncate group-hover/card:text-teal-300 transition-colors duration-200">
            {group.name}
          </h3>
          <span className="flex items-center gap-1 text-xs text-gray-500 bg-white/5 border border-white/10 px-2 py-1 rounded-lg flex-shrink-0">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
            </svg>
            {group._count?.members ?? 0}
          </span>
        </div>
        {group.description && (
          <p className="text-gray-500 text-xs mb-3 line-clamp-2">{group.description}</p>
        )}
        <p className="text-xs text-gray-600">
          by <span className="text-gray-400">@{group.owner?.username}</span>
        </p>
      </div>
      {actions && <div className="mt-4 flex gap-2">{actions}</div>}
    </div>
  )

  const SectionEmpty = ({ text }: { text: string }) => (
    <div className="bg-white/5 border border-white/10 border-dashed rounded-2xl p-8 text-center">
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  )

  return (
    <div className="space-y-10">

      {/* Pending Invitations */}
      {invitations.length > 0 && (
        <div className="bg-teal-500/10 border border-teal-500/20 rounded-2xl p-5">
          <p className="text-teal-300 font-bold text-sm mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
            </svg>
            Pending Invitations ({invitations.length})
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {invitations.map(inv => (
              <div key={inv.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-white font-semibold text-sm">{inv.group.name}</p>
                  <p className="text-xs text-gray-500">Invited by @{inv.group.owner.username}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button onClick={() => handleInvitationResponse(inv.id, 'accept')}
                    className="px-3 py-1.5 bg-teal-500/20 border border-teal-500/40 rounded-lg text-teal-300 text-xs font-medium hover:bg-teal-500/30 transition-all duration-200">
                    Accept
                  </button>
                  <button onClick={() => handleInvitationResponse(inv.id, 'reject')}
                    className="px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-medium hover:bg-red-500/20 transition-all duration-200">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create button */}
      {session?.user?.id && (
        <div className="flex justify-start">
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-teal-900/40 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
            Create Group
          </button>
        </div>
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowCreateModal(false)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-lg bg-gray-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-0.5">New</p>
                <h2 className="text-lg font-extrabold text-white">Create Group</h2>
              </div>
              <button onClick={() => setShowCreateModal(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="px-6 py-5">
              <CreateGroupForm onSuccess={() => { setShowCreateModal(false); fetchGroups() }} onCancel={() => setShowCreateModal(false)} />
            </div>
          </div>
        </div>
      )}

      {/* My Groups */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Owned</p>
          <h2 className="text-white font-bold text-lg">Your Groups</h2>
          <span className="text-xs text-gray-600 bg-white/5 border border-white/10 px-2 py-0.5 rounded-lg">{mygroups.length}</span>
        </div>
        {mygroups.length === 0 ? <SectionEmpty text="You don't own any groups yet." /> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mygroups.map(group => (
              <GroupCard key={group.id} group={group} actions={
                <>
                  <a href={`/groups/${group.id}`} className="flex-1 text-center px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-xs font-medium transition-all duration-200">Manage</a>
                  <a href={`/groups/${group.id}`} className="px-3 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-xs font-semibold hover:brightness-110 transition-all duration-200">Open</a>
                </>
              } />
            ))}
          </div>
        )}
      </section>

      {/* Friends' Groups */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Network</p>
          <h2 className="text-white font-bold text-lg">Friends&apos; Groups</h2>
          <span className="text-xs text-gray-600 bg-white/5 border border-white/10 px-2 py-0.5 rounded-lg">{friendsgroups.length}</span>
        </div>
        {friendsgroups.length === 0 ? <SectionEmpty text="No groups from people you follow." /> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {friendsgroups.map(group => (
              <GroupCard key={group.id} group={group} actions={
                <>
                  <a href={`/groups/${group.id}`} className="flex-1 text-center px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-xs font-medium transition-all duration-200">View</a>
                  {session?.user?.id !== group.ownerId && (
                    <button onClick={() => handleRequestJoin(group.id)} className="px-3 py-2 rounded-xl bg-white/5 border border-teal-500/30 text-teal-400 text-xs font-medium hover:bg-teal-500/10 transition-all duration-200">Join</button>
                  )}
                </>
              } />
            ))}
          </div>
        )}
      </section>

      {/* All Public Groups */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Discover</p>
          <h2 className="text-white font-bold text-lg">All Public Groups</h2>
          <span className="text-xs text-gray-600 bg-white/5 border border-white/10 px-2 py-0.5 rounded-lg">{groups.length}</span>
        </div>
        {groups.length === 0 ? <SectionEmpty text="No public groups found." /> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups.map(group => (
              <GroupCard key={group.id} group={group} actions={
                <>
                  <a href={`/groups/${group.id}`} className="flex-1 text-center px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-xs font-medium transition-all duration-200">View</a>
                  {session?.user?.id !== group.ownerId && (
                    <button onClick={() => handleRequestJoin(group.id)} className="px-3 py-2 rounded-xl bg-white/5 border border-teal-500/30 text-teal-400 text-xs font-medium hover:bg-teal-500/10 transition-all duration-200">Join</button>
                  )}
                </>
              } />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}