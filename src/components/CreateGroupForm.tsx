'use client'

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CreateGroupForm({ onSuccess, onCancel }: { onSuccess?: () => void; onCancel?: () => void }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [sports, setSports] = useState<{ id: number; name: string; emoji: string }[]>([])

  const [form, setForm] = useState({ name: "", description: "", sportId: "" })

  useEffect(() => {
    async function loadSports() {
      try {
        const res = await fetch('/api/sports')
        if (!res.ok) return
        const json = await res.json()
        setSports(json || [])
      } catch (e) { console.error(e) }
    }
    loadSports()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim()) return alert("Group name is required")
    if (!form.sportId) return alert("Select a sport")
    setLoading(true)
    try {
      const res = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, description: form.description || null, sportId: Number(form.sportId) }),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err?.error || 'Failed to create group')
      }
      const json = await res.json()
      if (onSuccess) onSuccess()
      else router.push(`/groups/${json.id}`)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to create group')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Group Name */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Group Name *</label>
        <input
          required
          type="text"
          placeholder="e.g., Morning Runners"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Description</label>
        <textarea
          placeholder="Describe your group (optional)"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 resize-none"
          rows={3}
        />
      </div>

      {/* Sport */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Sport *</label>
        <select
          required
          value={form.sportId}
          onChange={e => setForm({ ...form, sportId: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
        >
          <option value="" className="bg-gray-900">Select a sport</option>
          {sports.map(s => (
            <option key={s.id} value={s.id} className="bg-gray-900">{s.emoji} {s.name}</option>
          ))}
        </select>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-sm font-medium disabled:opacity-50 transition-all duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-teal-900/40 hover:brightness-110 disabled:opacity-50 transition-all duration-200"
        >
          {loading ? "Creating..." : "Create Group"}
        </button>
      </div>
    </form>
  )
}