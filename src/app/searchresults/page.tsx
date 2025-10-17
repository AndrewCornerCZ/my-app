import React from "react";
import { prisma } from '@/lib/db';
import GeneratePost from "@/components/postsComponents/GeneratePost";
import Navbar from "@/components/Navbar";
import Link from 'next/link';

export default async function SearchResultPage({
  searchParams,
}: {
  searchParams: { searchTerm: string; filter: string }
}) {
  const { searchTerm, filter } = searchParams;

  try {
    if (filter === 'users') {
      const users = await prisma.user.findMany({
        where: {
          username: { contains: searchTerm, mode: 'insensitive' }
        }
      });

      if (users.length === 0) {
        return (
          <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
              <h1 className="text-3xl font-bold mb-4">No results</h1>
            </div>
          </div>
        );
      }

      return (
        <div>
          <Navbar />
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-4">Search Results</h1>
            <p className="text-lg">Search Term: {searchTerm}</p>
            <p className="text-lg">Filter: {filter}</p>
            <ul className="mt-4">
              {users.map((user) => (
                <li key={user.id} className="bg-zinc-800 p-4 rounded-lg mb-2">
                  <Link href={`/userprofile/${user.username}`}>@{user.username}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    if (filter === 'hashtags') {
      const posts = await prisma.post.findMany({
        where: {
          postHashtags: {
            some: {
              hashtag: { text: { contains: searchTerm, mode: 'insensitive' } }
            }
          }
        },
        orderBy: { created_at: 'desc' },
      });

      if (posts.length === 0) {
        return (
          <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
              <h1 className="text-3xl font-bold mb-4">No results</h1>
            </div>
          </div>
        );
      }

      return (
        <div>
          <Navbar />
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-4">Search Results</h1>
            <p className="text-lg">Search Term: {searchTerm}</p>
            <p className="text-lg">Filter: {filter}</p>
            <ul className="mt-4 w-full max-w-2xl space-y-4">
              {posts.map((post) => (
                <li key={post.id}>
                  <GeneratePost searchpostId={post.id} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data.</div>;
  }
}
