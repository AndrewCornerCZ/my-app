import React from "react";
import Navbar from "../../../components/Navbar";
import AddLogoutButton from "@/components/AddLogoutButton";
import AddPostButton from "@/components/AddPostButton";
import PostProfile from "@/components/PostProfile";
import { prisma } from "@/lib/db";

interface ProfileProps {
  params: {
    username: string;
  }
}

export default async function Profile({ params }: ProfileProps) {
  const { username } = params;
  
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    return <div className='text-white'>User not found</div>;
    }

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