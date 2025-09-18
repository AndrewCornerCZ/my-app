import React from "react";
import Navbar from "../../../components/Navbar";
import AddLogoutButton from "@/components/AddLogoutButton";
import AddPostButton from "@/components/AddPostButton";
import SettingsButton from "@/components/SettingsButton";
import PostProfile from "@/components/PostProfile";
import { prisma } from "@/lib/db";
import FollowButton from "@/components/FollowButton";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Image from 'next/image'

interface ProfileProps {
  params: {
    username: string;
  }
}

export default async function Profile({ params }: ProfileProps) {
  const session = await getServerSession(options);
  const username = await decodeURIComponent(params.username);
  if (!username) {
    return <div className='text-white'>Invalid username</div>;
  }
  
 
  // Fetch user and check if they're being followed in parallel
  const [user, currentUser] = await Promise.all([
    prisma.user.findUnique({
      where: {
        username: username,
      },
      include: {
        followers: true,
        following: true, // Add this line to include bio
      }
    }),
    session?.user?.email ? prisma.user.findUnique({
      where: {
        email: session.user.email
      }
    }) : null
  ]);

  if (!user) {
    return <div className='text-white'>User not found</div>;
  }

  // Check if current user is following this profile
  const isFollowing = currentUser ? await prisma.userFollow.findFirst({
    where: {
      AND: [
        { followerId: currentUser.id },
        { followingId: user.id }
      ]
    }
  }) : null;

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-zinc-800 rounded-lg p-6 mb-8 shadow-xl relative">
          {/* Add settings button to top right corner */}
          {session?.user?.name === username && (
            <div className="absolute top-4 right-4">
              <SettingsButton />
            </div>
          )}
          
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={`${user.username}'s profile`}
                  fill
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">
                    {user.username.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              {session?.user?.name === username && (
                <label htmlFor="profile-image" className="absolute -bottom-2 -right-2 bg-indigo-600 rounded-full p-1 cursor-pointer hover:bg-indigo-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </label>
              )}
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white mb-1">@{user.username}</h1>
              {session?.user?.name !== username && (
                <FollowButton 
                  userId={user.id} 
                  initialFollowState={!!isFollowing}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {user.bio && (
              <div className="text-gray-300 bg-zinc-700/50 rounded-lg p-4">
                <p className="text-sm">{user.bio}</p>
              </div>
            )}
            <div className="text-gray-400 display-flex flex-col">
              <p className="mb-2">Followers: {user.followers.length}</p>
              <p>Following: {user.following.length}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 border-b border-zinc-700 pb-2">
            Posts
          </h2>
          <PostProfile id={user.id} />
        </div>

        <div className="flex gap-4">
          <AddPostButton />
          <AddLogoutButton />
        </div>
      </div>
    </div>
  );
}