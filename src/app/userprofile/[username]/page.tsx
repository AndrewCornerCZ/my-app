import React from "react"
import Navbar from "../../../components/Navbar"
import SettingsButton from "@/components/usernameComponents/SettingsButton"
import PostProfile from "@/components/usernameComponents/PostProfile"
import { prisma } from "@/lib/db"
import FollowButton from "@/components/usernameComponents/FollowButton"
import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options"
import Image from 'next/image'
import ManageSportsModal from '@/components/usernameComponents/ManageSportsModal'
import ProfileImageUploader from "@/components/usernameComponents/ProfileImageUploader"
import AddSportModal from '@/components/usernameComponents/AddSportModal'
import AddActivityModal from "@/components/usernameComponents/AddActivityModal"
import ActivityCalendar from '@/components/usernameComponents/ActivityCalendar'

export default async function Profile({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params
  const session = await getServerSession(options)
  const decodedUsername = decodeURIComponent(username)

  if (!decodedUsername || !username) return <div className="text-white">Invalid username</div>

  const [user, currentUser] = await Promise.all([
    prisma.user.findUnique({
      where: { username: decodedUsername },
      include: {
        followers: true,
        following: true,
        activities: {
          include: {
            sport: true,
            user: { select: { id: true, username: true } },
          },
        },
        sports: {
          include: { sport: true, sportrank: true },
        },
      },
    }),
    session?.user?.email
      ? prisma.user.findUnique({ where: { email: session.user.email } })
      : null,
  ])

  if (!user) return <div className="text-white">User not found</div>

  const serializedActivities = user.activities.map(a => ({
    ...a,
    date: a.date instanceof Date ? a.date.toISOString() : String(a.date),
    latitude: a.latitude ?? null,
    longitude: a.longitude ?? null,
  }))

  const isFollowing = currentUser
    ? await prisma.userFollow.findFirst({
        where: { AND: [{ followerId: currentUser.id }, { followingId: user.id }] },
      })
    : null

  const isOwner = session?.user?.name === decodedUsername

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />

      <Navbar />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── LEFT: Profile + Posts ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Profile header */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                {/* Avatar + name */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={`${user.username}'s profile`}
                        fill
                        className="rounded-2xl object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-900/40">
                        <span className="text-2xl text-white font-extrabold">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    {isOwner && (
                      <div className="absolute -bottom-1 -right-1">
                        <ProfileImageUploader userId={user.id} />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-0.5">Profile</p>
                    <h1 className="text-xl font-extrabold text-white tracking-tight">@{user.username}</h1>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 flex-wrap justify-end">
                  {isOwner ? (
                    <>
                      <SettingsButton />
                      <ManageSportsModal userSports={user.sports} />
                      <AddSportModal userId={user.id} userSports={user.sports} />
                    </>
                  ) : (
                    <FollowButton userId={user.id} initialFollowState={!!isFollowing} />
                  )}
                </div>
              </div>

              {/* Bio + Stats */}
              <div className="space-y-3">
                {user.bio && (
                  <p className="text-gray-400 text-sm leading-relaxed">{user.bio}</p>
                )}
                <div className="flex items-center gap-4 text-sm">
                  <span>
                    <span className="text-teal-400 font-bold">{user.followers.length}</span>
                    <span className="text-gray-500 ml-1">Followers</span>
                  </span>
                  <span className="text-gray-700">·</span>
                  <span>
                    <span className="text-teal-400 font-bold">{user.following.length}</span>
                    <span className="text-gray-500 ml-1">Following</span>
                  </span>
                  <span className="text-gray-700">·</span>
                  <span>
                    <span className="text-teal-400 font-bold">{user.activities.length}</span>
                    <span className="text-gray-500 ml-1">Activities</span>
                  </span>
                </div>
              </div>

              {/* Sports chips */}
              {user.sports.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2.5">Sports</p>
                  <div className="flex flex-wrap gap-2">
                    {user.sports.map(us => (
                      <span
                        key={us.sportId}
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: (us.color || '#14b8a6') + '33', border: `1.5px solid ${us.color || '#14b8a6'}`, color: us.color || '#14b8a6' }}
                      >
                        {us.sport.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Posts */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-3">Posts</p>
              <PostProfile id={user.id} />
            </div>
          </div>

          {/* ── RIGHT: Calendar ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-0.5">Schedule</p>
                    <h2 className="text-sm font-bold text-white">Activity Calendar</h2>
                  </div>
                  {isOwner && user.sports.length > 0 && (
                    <AddActivityModal userSports={user.sports} />
                  )}
                </div>
                <ActivityCalendar
                  initialActivities={serializedActivities}
                  userSports={user.sports}
                  userId={user.id}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}