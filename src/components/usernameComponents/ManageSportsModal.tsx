'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface SportRank {
  id: number
  name: string
  description?: string
}

interface UserSport {
  userId: number
  sportId: number
  sport: { name: string }
  sportRankId: number
  startedAt: Date
  color?: string | null
}

interface ManageSportsModalProps {
  userSports: UserSport[]
}

const SPORT_EMOJIS: Record<string, string> = {
  running: '🏃', cycling: '🚴', swimming: '🏊', football: '⚽', basketball: '🏀',
  tennis: '🎾', volleyball: '🏐', hiking: '🥾', yoga: '🧘', gym: '🏋️',
  climbing: '🧗', skiing: '⛷️',
}
function getSportEmoji(name: string) {
  return SPORT_EMOJIS[name?.toLowerCase()] ?? '🏅'
}

export default function ManageSportsModal({ userSports }: ManageSportsModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState<'list' | 'edit'>('list')
  const [selectedSport, setSelectedSport] = useState<UserSport | null>(null)
  const [sportRanks, setSportRanks] = useState<SportRank[]>([])
  const [selectedRankId, setSelectedRankId] = useState('')
  const [startedAt, setStartedAt] = useState('')
  const [color, setColor] = useState('#14b8a6')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSelectSport = (sport: UserSport) => {
    setSelectedSport(sport)
    setSelectedRankId(String(sport.sportRankId))
    setStartedAt(new Date(sport.startedAt).toISOString().split('T')[0])
    setColor(sport.color || '#14b8a6')
    setView('edit')
  }

  const handleBackToList = () => { setSelectedSport(null); setError(''); setView('list') }

  useEffect(() => {
    if (view === 'edit') {
      fetch('/api/ranks').then(r => r.ok ? r.json() : []).then(setSportRanks)
    }
  }, [view])

  const handleUpdate = async () => {
    if (!selectedSport) return
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/user-sport', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: selectedSport.userId, sportId: selectedSport.sportId,
          sportRankId: Number(selectedRankId), startedAt: new Date(startedAt), color,
        }),
      })
      if (!res.ok) throw new Error('Failed to update sport.')
      setIsOpen(false); router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally { setLoading(false) }
  }

  const handleDelete = async () => {
    if (!selectedSport || !confirm(`Delete ${selectedSport.sport.name}?`)) return
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/user-sport', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: selectedSport.userId, sportId: selectedSport.sportId }),
      })
      if (!res.ok) throw new Error('Failed to delete sport.')
      setIsOpen(false); router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally { setLoading(false) }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => { setView('list'); setIsOpen(true) }}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-sm font-medium transition-all duration-200"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"/>
        </svg>
        Manage Sports
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-md bg-gray-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-0.5">
              {view === 'list' ? 'Sports' : selectedSport?.sport.name}
            </p>
            <h2 className="text-lg font-extrabold text-white">
              {view === 'list' ? 'Manage Sports' : 'Edit Sport'}
            </h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="px-6 py-5">
          {/* List view */}
          {view === 'list' && (
            <div className="space-y-2">
              {userSports.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 text-sm">No sports added yet</p>
                </div>
              ) : (
                userSports.map(us => (
                  <button
                    key={us.sportId}
                    onClick={() => handleSelectSport(us)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 hover:border-teal-500/30 rounded-xl transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-base" style={{ backgroundColor: us.color || '#14b8a6' + '33', border: `1.5px solid ${us.color || '#14b8a6'}` }}>
                        {getSportEmoji(us.sport.name)}
                      </div>
                      <span className="text-white text-sm font-medium group-hover:text-teal-300 transition-colors duration-200">{us.sport.name}</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-teal-400 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                ))
              )}
            </div>
          )}

          {/* Edit view */}
          {view === 'edit' && selectedSport && (
            <div className="space-y-4">
              {/* Rank */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Rank</label>
                <select
                  value={selectedRankId}
                  onChange={e => setSelectedRankId(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                >
                  {sportRanks.map(rank => (
                    <option key={rank.id} value={rank.id} className="bg-gray-900">{rank.name}</option>
                  ))}
                </select>
              </div>

              {/* Started at */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Started At</label>
                <input
                  type="date"
                  value={startedAt}
                  onChange={e => setStartedAt(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                />
              </div>

              {/* Color */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    className="w-12 h-10 rounded-xl bg-white/5 border border-white/10 cursor-pointer p-1"
                  />
                  <span className="text-gray-400 text-sm font-mono">{color}</span>
                  <div className="w-6 h-6 rounded-full ml-auto" style={{ backgroundColor: color }} />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleDelete}
                  disabled={loading}
                  className="px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-sm font-medium disabled:opacity-50 transition-all duration-200"
                >
                  Delete
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={handleBackToList}
                    className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white text-sm font-medium transition-all duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleUpdate}
                    disabled={loading}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold hover:brightness-110 disabled:opacity-50 transition-all duration-200"
                  >
                    {loading ? 'Saving…' : 'Save'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}