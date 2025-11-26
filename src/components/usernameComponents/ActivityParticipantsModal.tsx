'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface Participant {
  id: number
  activityId: number
  userId: number
  role: string
  user: {
    id: number
    username: string
    image: string
  }
}

interface ActivityParticipantsModalProps {
  activityId: number
  ownerId: number
  isOpen: boolean
  onClose: () => void
}

export default function ActivityParticipantsModal({
  activityId,
  ownerId,
  isOpen,
  onClose,
}: ActivityParticipantsModalProps) {
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
    } catch (error) {
      console.error('Error fetching participants:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePromote = async (participantId: number) => {
    setActionLoading(prev => ({ ...prev, [participantId]: 'promote' }))
    try {
      const res = await fetch(
        `/api/activities/${activityId}/participants/${participantId}/promote`,
        { method: 'POST' }
      )
      if (res.ok) {
        setParticipants(prev =>
          prev.map(p =>
            p.id === participantId ? { ...p, role: 'co-owner' } : p
          )
        )
      } else {
        // optional: show error toast / message
        const json = await res.json().catch(() => ({}))
        console.error('Promote failed:', json?.message)
      }
    } catch (error) {
      console.error('Error promoting participant:', error)
    } finally {
      setActionLoading(prev => ({ ...prev, [participantId]: '' }))
    }
  }

  const handleRemove = async (participantId: number) => {
    if (!confirm('Remove this participant from the activity?')) return

    setActionLoading(prev => ({ ...prev, [participantId]: 'remove' }))
    try {
      const res = await fetch(
        `/api/activities/${activityId}/participants/${participantId}/remove`,
        { method: 'DELETE' }
      )
      if (res.ok) {
        setParticipants(prev => prev.filter(p => p.id !== participantId))
      }
    } catch (error) {
      console.error('Error removing participant:', error)
    } finally {
      setActionLoading(prev => ({ ...prev, [participantId]: '' }))
    }
  }

  const handleBlock = async (participantId: number) => {
    if (!confirm('Block this user and remove them from activity?')) return

    setActionLoading(prev => ({ ...prev, [participantId]: 'block' }))
    try {
      const res = await fetch(
        `/api/activities/${activityId}/participants/${participantId}/block`,
        { method: 'POST' }
      )
      if (res.ok) {
        setParticipants(prev => prev.filter(p => p.id !== participantId))
      }
    } catch (error) {
      console.error('Error blocking participant:', error)
    } finally {
      setActionLoading(prev => ({ ...prev, [participantId]: '' }))
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[60] p-4"
      onClick={onClose}
    >
      <div
        className="bg-zinc-800 p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">
            Participants ({participants.length})
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        {loading ? (
          <p className="text-gray-400">Loading participants...</p>
        ) : participants.length === 0 ? (
          <p className="text-gray-400">No participants yet</p>
        ) : (
          <div className="space-y-3">
            {participants.map(participant => (
              <div
                key={participant.id}
                className="bg-zinc-900 p-4 rounded flex items-center justify-between"
              >
                <div className="flex items-center gap-3 flex-1">
                  {participant.user.image && (
                    <img
                      src={participant.user.image}
                      alt={participant.user.username}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div className="flex-1">
                    <p className="text-white font-medium">
                      {participant.user.username}
                    </p>
                    <div className="flex gap-2 mt-1">
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          participant.role === 'owner'
                            ? 'bg-yellow-900 text-yellow-200'
                            : 'bg-blue-900 text-blue-200'
                        }`}
                      >
                        {participant.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Only show actions if current user is owner */}
                {isOwner && (
                  <div className="flex gap-2 ml-4">
                    {/* Promote button (only shown when not already co-owner/owner) */}
                    {participant.role !== 'co-owner' && participant.role !== 'owner' && (
                      <button
                        onClick={() => handlePromote(participant.id)}
                        disabled={actionLoading[participant.id] === 'promote'}
                        className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded disabled:opacity-50"
                        title="Promote to co-owner"
                      >
                        {actionLoading[participant.id] === 'promote' ? '...' : '👑'}
                      </button>
                    )}

                    <button
                      onClick={() => handleRemove(participant.id)}
                      disabled={actionLoading[participant.id] === 'remove'}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded disabled:opacity-50"
                      title="Remove from activity"
                    >
                      {actionLoading[participant.id] === 'remove' ? '...' : '✕'}
                    </button>
                    <button
                      onClick={() => handleBlock(participant.id)}
                      disabled={actionLoading[participant.id] === 'block'}
                      className="px-3 py-1 bg-red-900 hover:bg-red-950 text-white text-sm rounded disabled:opacity-50"
                      title="Block user"
                    >
                      {actionLoading[participant.id] === 'block' ? '...' : '⛔'}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
