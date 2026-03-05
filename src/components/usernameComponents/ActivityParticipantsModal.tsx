'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface Participant {
  id: number
  activityId: number
  userId: number
  role: string
  user: { id: number; username: string; image: string }
}

interface ActivityParticipantsModalProps {
  activityId: number
  ownerId: number
  isOpen: boolean
  onClose: () => void
}

export default function ActivityParticipantsModal({ activityId, ownerId, isOpen, onClose }: ActivityParticipantsModalProps) {
  const { data: session } = useSession()
  const [participants, setParticipants] = useState<Participant[]>([])
  const [loading, setLoading] = useState(false)
  const [actionLoading, setActionLoading] = useState<Record<number, string>>({})

  const isOwner = Number(session?.user?.id) === ownerId

  useEffect(() => {
    if (!isOpen) return
    fetchParticipants()
  }, [isOpen, activityId])

  const fetchParticipants = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/activities/${activityId}/participants`)
      if (res.ok) {
        const data = await res.json()
        setParticipants(data.participants)
      }
    } catch (error) { console.error(error) }
    finally { setLoading(false) }
  }

  const handlePromote = async (participantId: number) => {
    setActionLoading(prev => ({ ...prev, [participantId]: 'promote' }))
    try {
      const res = await fetch(`/api/activities/${activityId}/participants/${participantId}/promote`, { method: 'POST' })
      if (res.ok) setParticipants(prev => prev.map(p => p.id === participantId ? { ...p, role: 'co-owner' } : p))
    } catch (e) { console.error(e) }
    finally { setActionLoading(prev => ({ ...prev, [participantId]: '' })) }
  }

  const handleRemove = async (participantId: number) => {
    if (!confirm('Remove this participant?')) return
    setActionLoading(prev => ({ ...prev, [participantId]: 'remove' }))
    try {
      const res = await fetch(`/api/activities/${activityId}/participants/${participantId}/remove`, { method: 'DELETE' })
      if (res.ok) setParticipants(prev => prev.filter(p => p.id !== participantId))
    } catch (e) { console.error(e) }
    finally { setActionLoading(prev => ({ ...prev, [participantId]: '' })) }
  }

  const handleBlock = async (participantId: number) => {
    if (!confirm('Block this user and remove them?')) return
    setActionLoading(prev => ({ ...prev, [participantId]: 'block' }))
    try {
      const res = await fetch(`/api/activities/${activityId}/participants/${participantId}/block`, { method: 'POST' })
      if (res.ok) setParticipants(prev => prev.filter(p => p.id !== participantId))
    } catch (e) { console.error(e) }
    finally { setActionLoading(prev => ({ ...prev, [participantId]: '' })) }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-lg bg-gray-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 flex-shrink-0">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-0.5">Activity</p>
            <h2 className="text-lg font-extrabold text-white">
              Participants <span className="text-gray-500 font-normal text-base">({participants.length})</span>
            </h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-6 py-4">
          {loading ? (
            <div className="flex items-center justify-center py-10">
              <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-700 animate-pulse" />
            </div>
          ) : participants.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600 text-sm">No participants yet</p>
            </div>
          ) : (
            <div className="space-y-2">
              {participants.map(participant => (
                <div key={participant.id} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    {participant.user.image ? (
                      <img src={participant.user.image} alt={participant.user.username} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{participant.user.username[0]?.toUpperCase()}</span>
                      </div>
                    )}
                    <div>
                      <p className="text-white text-sm font-medium">{participant.user.username}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        participant.role === 'owner'
                          ? 'bg-teal-500/15 border border-teal-500/30 text-teal-300'
                          : participant.role === 'co-owner'
                          ? 'bg-yellow-500/15 border border-yellow-500/30 text-yellow-300'
                          : 'bg-white/5 border border-white/10 text-gray-400'
                      }`}>
                        {participant.role}
                      </span>
                    </div>
                  </div>

                  {isOwner && participant.role !== 'owner' && (
                    <div className="flex gap-1.5">
                      {participant.role !== 'co-owner' && (
                        <button
                          onClick={() => handlePromote(participant.id)}
                          disabled={actionLoading[participant.id] === 'promote'}
                          title="Promote to co-owner"
                          className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/20 flex items-center justify-center text-xs disabled:opacity-50 transition-all duration-200"
                        >
                          {actionLoading[participant.id] === 'promote' ? '…' : '👑'}
                        </button>
                      )}
                      <button
                        onClick={() => handleRemove(participant.id)}
                        disabled={actionLoading[participant.id] === 'remove'}
                        title="Remove"
                        className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 flex items-center justify-center disabled:opacity-50 transition-all duration-200"
                      >
                        {actionLoading[participant.id] === 'remove' ? (
                          <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                        ) : (
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                        )}
                      </button>
                      <button
                        onClick={() => handleBlock(participant.id)}
                        disabled={actionLoading[participant.id] === 'block'}
                        title="Block user"
                        className="w-8 h-8 rounded-lg bg-red-900/20 border border-red-900/30 text-red-500 hover:bg-red-900/30 flex items-center justify-center text-xs disabled:opacity-50 transition-all duration-200"
                      >
                        {actionLoading[participant.id] === 'block' ? '…' : '⛔'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}