'use client'

import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import Navbar from '@/components/Navbar'
import AddLogoutButton from '@/components/usernameComponents/AddLogoutButton'

interface FormData {
  username: string
  currentPassword: string
  newPassword: string
  confirmPassword: string
  bio: string
}

interface PasswordInputProps {
  id: 'currentPassword' | 'newPassword' | 'confirmPassword'
  label: string
  field: 'current' | 'new' | 'confirm'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  showPassword: boolean
  onToggleVisibility: () => void
}

const PasswordInput = ({
  id,
  label,
  field,
  value,
  onChange,
  showPassword,
  onToggleVisibility,
}: PasswordInputProps) => (
  <div>
    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
      {label}
    </label>
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 pr-11 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
      />
      <button
        type="button"
        onClick={onToggleVisibility}
        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-teal-400 transition-colors duration-200"
      >
        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  </div>
)

export default function SettingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    bio: '',
  })
  const [showPasswords, setShowPasswords] = useState({ current: false, new: false, confirm: false })
  const [showPasswordSection, setShowPasswordSection] = useState(false)

  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        username: session.user.name || '',
        bio: session.user.bio || '',
      }))
    }
  }, [session])

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login')
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-700 animate-pulse" />
      </div>
    )
  }
  if (!session) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value } as FormData))
  }

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      const response = await fetch('/api/settings/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username || undefined,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword || undefined,
          bio: formData.bio || undefined,
        }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Something went wrong')
      setSuccess(data.message)
      if (data.shouldLogout) await signOut({ redirect: true, callbackUrl: '/login' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
        <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
        <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center px-4 pt-28 pb-16">
          <div className="w-full max-w-lg">

            {/* Header */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">Account</p>
              <h1 className="text-2xl font-extrabold tracking-tight">
                Settings
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Profile section */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Profile</p>

                {/* Username */}
                <div>
                  <label htmlFor="username" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    minLength={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                  />
                </div>

                {/* Bio */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="bio" className="block text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Bio
                    </label>
                    <span className={`text-xs ${formData.bio.length > 140 ? 'text-yellow-500' : 'text-gray-600'}`}>
                      {formData.bio.length}/160
                    </span>
                  </div>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    maxLength={160}
                    rows={3}
                    placeholder="Tell people a little about yourself..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Security section */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Security</p>

                <PasswordInput 
                  id="currentPassword" 
                  label="Current Password" 
                  field="current"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  showPassword={showPasswords.current}
                  onToggleVisibility={() => togglePasswordVisibility('current')}
                />

                {/* Toggle change password */}
                <button
                  type="button"
                  onClick={() => setShowPasswordSection(!showPasswordSection)}
                  className={`w-full py-2.5 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                    showPasswordSection
                      ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {showPasswordSection ? 'Hide Password Change' : 'Change Password'}
                </button>

                {showPasswordSection && (
                  <div className="space-y-4 pt-2 border-t border-white/10">
                    <PasswordInput 
                      id="newPassword" 
                      label="New Password" 
                      field="new"
                      value={formData.newPassword}
                      onChange={handleChange}
                      showPassword={showPasswords.new}
                      onToggleVisibility={() => togglePasswordVisibility('new')}
                    />
                    <PasswordInput 
                      id="confirmPassword" 
                      label="Confirm New Password" 
                      field="confirm"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      showPassword={showPasswords.confirm}
                      onToggleVisibility={() => togglePasswordVisibility('confirm')}
                    />
                  </div>
                )}
              </div>

              {/* Feedback */}
              {error && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
                  </svg>
                  {error}
                </div>
              )}
              {success && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {success}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold text-sm shadow-lg shadow-teal-900/40 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Saving...
                  </>
                ) : 'Save Changes'}
              </button>
            </form>
            <AddLogoutButton />
          </div>
        </div>
      </div>
    </>
  )
}