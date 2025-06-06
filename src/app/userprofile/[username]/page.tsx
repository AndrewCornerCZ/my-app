import React from "react";
import Navbar from "../../../components/Navbar";
import AddLogoutButton from "@/components/AddLogoutButton";
import AddPostButton from "@/components/AddPostButton";
import PostProfile from "@/components/PostProfile";
import { prisma } from "@/lib/db";
import FollowButton from "@/components/FollowButton";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

interface ProfileProps {
  params: {
    username: string;
  }
}

export default async function Profile({ params }: ProfileProps) {
  const session = await getServerSession(options);
  
  // Fetch user and check if they're being followed in parallel
  const [user, currentUser] = await Promise.all([
    prisma.user.findUnique({
      where: {
        username: params.username,
      },
      include: {
        followers: true,
        following: true,
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
        <div className="bg-zinc-800 rounded-lg p-6 mb-8 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white font-bold">
                {user.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">@{user.username}</h1>
            </div>
                      <FollowButton 
              userId={user.id} 
              initialFollowState={!!isFollowing}
            />
          </div>
          <div className="text-gray-400 display-flex flex-col">
            <p className="mb-2">Followers: {user.followers.length}</p>
            <p>Following: {user.following.length}</p>
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