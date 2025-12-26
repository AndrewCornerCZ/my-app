'use client'

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CreateGroupForm({ onSuccess, onCancel }: { onSuccess?: () => void; onCancel?: () => void }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [sports, setSports] = useState<any[]>([])
  
  const [form, setForm] = useState({
    name: "",
    description: "",
    sportId: "",
  })

  useEffect(() => {
    async function loadSports() {
      try {
        const res = await fetch('/api/sports')
        if (!res.ok) return
        const json = await res.json()
        setSports(json || [])
      } catch (e) {
        console.error(e)
      }
    }
    loadSports()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim()) return alert("Group name is required")
    if (!form.sportId) return alert("Select a sport")
    console.log('Submitting form with sport ID:', form);
    setLoading(true)
    try {
      const res = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          description: form.description || null,
          sportId: Number(form.sportId),
        }),
      })
      
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err?.error || 'Failed to create group')
      }
      
      const json = await res.json()
      alert('Group created!')
      
      // callback if in modal
      if (onSuccess) {
        onSuccess()
      } else {
        // redirect if standalone
        router.push(`/groups/${json.id}`)
      }
    } catch (err: any) {
      console.error(err)
      alert(err.message || 'Failed to create group')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Group Name */}
      <div>
        <label className="block text-white text-sm font-semibold mb-2">Group Name *</label>
        <input
          required
          type="text"
          placeholder="e.g., Football Club"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 bg-zinc-700 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-white text-sm font-semibold mb-2">Description</label>
        <textarea
          placeholder="Describe your group (optional)"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          className="w-full p-3 bg-zinc-700 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={3}
        />
      </div>

      {/* Sport Selection */}
      <div>
        <label className="block text-white text-sm font-semibold mb-2">Sport *</label>
        <select
          required
          value={form.sportId}
          onChange={e => setForm({ ...form, sportId: e.target.value })}
          className="w-full p-3 bg-zinc-700 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select a sport</option>
          {sports.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 bg-gray-600 rounded text-white hover:bg-gray-700 disabled:opacity-50"
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 px-4 py-2 bg-emerald-600 rounded text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Group"}
        </button>
      </div>
    </form>
  )
}