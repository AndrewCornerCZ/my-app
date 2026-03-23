'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Sport { id: number; name: string, emoji: string }
interface SportRank { id: number; name: string; description?: string }
interface AddSportModalProps {
  userId: number
  userSports: { sportId: number }[]
}

export default function AddSportModal({ userId, userSports }: AddSportModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [sports, setSports] = useState<Sport[]>([])
  const [sportRanks, setSportRanks] = useState<SportRank[]>([])
  const [selectedSportId, setSelectedSportId] = useState('')
  const [selectedRankId, setSelectedRankId] = useState('')
  const [startedAt, setStartedAt] = useState(new Date().toISOString().split('T')[0])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (!isOpen) return
    const fetchData = async () => {
      const [sRes, rRes] = await Promise.all([fetch('/api/sports'), fetch('/api/ranks')])
      if (sRes.ok) {
        const data: Sport[] = await sRes.json()
        const available = data.filter(s => !userSports.map(us => us.sportId).includes(s.id))
        setSports(available)
        if (available.length > 0) setSelectedSportId(String(available[0].id))
      }
      if (rRes.ok) {
        const ranks: SportRank[] = await rRes.json()
        setSportRanks(ranks)
        if (ranks.length > 0) setSelectedRankId(String(ranks[0].id))
      }
    }
    fetchData()
  }, [isOpen, userSports])

  const handleAddSport = async () => {
    if (!selectedSportId || !selectedRankId || !startedAt) { setError('Please fill in all fields.'); return }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/add-sport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, sportId: Number(selectedSportId), sportRankId: Number(selectedRankId), startedAt: new Date(startedAt) }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to add sport.')
      }
      setIsOpen(false); router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally { setLoading(false) }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 lg:px-3 lg:py-2 rounded-lg lg:rounded-xl 
                   bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 
                   transition-all duration-200"
        title="Add Sport"
      >
        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
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
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-0.5">Sports</p>
            <h2 className="text-lg font-extrabold text-white">Add Sport</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="px-6 py-5">
          {sports.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">You've added all available sports!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Sport */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Sport</label>
                <select
                  value={selectedSportId}
                  onChange={e => setSelectedSportId(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                >
                  {sports.map(s => <option key={s.id} value={s.id} className="bg-gray-900">{s.emoji} {s.name}</option>)}
                </select>
              </div>

              {/* Rank */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Rank</label>
                <select
                  value={selectedRankId}
                  onChange={e => setSelectedRankId(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                >
                  {sportRanks.map(r => <option key={r.id} value={r.id} title={r.description ?? ''} className="bg-gray-900">{r.name}</option>)}
                </select>
              </div>

              {/* Started At */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Started At</label>
                <input
                  type="date"
                  value={startedAt}
                  onChange={e => setStartedAt(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="flex gap-3 pt-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white text-sm font-medium transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSport}
                  disabled={loading}
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold hover:brightness-110 disabled:opacity-50 transition-all duration-200"
                >
                  {loading ? 'Adding…' : 'Add Sport'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}