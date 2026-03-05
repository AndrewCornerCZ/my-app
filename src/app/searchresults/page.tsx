import React from "react";
import { prisma } from '@/lib/db';
import GeneratePost from "@/components/postsComponents/GeneratePost";
import Navbar from "@/components/Navbar";
import Link from 'next/link';

export default async function SearchResultPage({
  searchParams,
}: {
  searchParams: Promise<{ searchTerm: string; filter: string }>;
}) {
  const { searchTerm, filter } = await searchParams;

  // Shared layout wrapper
  const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <Navbar />
      {/* Background blobs */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />
      <div className="relative z-10 flex flex-col items-center px-4 pt-28 pb-16">
        {children}
      </div>
    </div>
  );

  // Shared header
  const Header = () => (
    <div className="w-full max-w-2xl mb-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">
        {filter === 'users' ? 'Users' : 'Hashtags'}
      </p>
      <h1 className="text-3xl font-extrabold tracking-tight">
        Results for{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
          &ldquo;{searchTerm}&rdquo;
        </span>
      </h1>
    </div>
  );

  // No results state
  const Empty = () => (
    <Layout>
      <Header />
      <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-3xl p-12 flex flex-col items-center text-center backdrop-blur-md shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <p className="text-lg font-semibold text-white mb-1">No results found</p>
        <p className="text-sm text-gray-500 mb-6">Try a different search term or filter.</p>
        <Link
          href="/search"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold hover:brightness-110 transition-all duration-200 shadow-lg shadow-teal-900/40"
        >
          Back to Search
        </Link>
      </div>
    </Layout>
  );

  try {
    if (filter === 'users') {
      const users = await prisma.user.findMany({
        where: { username: { contains: searchTerm, mode: 'insensitive' } },
      });

      if (users.length === 0) return <Empty />;

      return (
        <Layout>
          <Header />
          <ul className="w-full max-w-2xl space-y-3">
            {users.map((user) => (
              <li key={user.id}>
                <Link
                  href={`/userprofile/${user.username}`}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-teal-500/40 hover:bg-white/8 rounded-2xl px-5 py-4 transition-all duration-200 group shadow-sm"
                >
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center flex-shrink-0 shadow shadow-teal-900/40">
                    <span className="text-white font-bold text-sm uppercase">
                      {user.username?.charAt(0) ?? '?'}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm group-hover:text-teal-300 transition-colors duration-200">
                      @{user.username}
                    </span>
                    <span className="text-gray-600 text-xs">View profile</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-teal-400 ml-auto transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </Layout>
      );
    }

    if (filter === 'hashtags') {
      const posts = await prisma.post.findMany({
        where: {
          postHashtags: {
            some: {
              hashtag: { text: { contains: searchTerm, mode: 'insensitive' } },
            },
          },
        },
        orderBy: { created_at: 'desc' },
      });

      if (posts.length === 0) return <Empty />;

      return (
        <Layout>
          <Header />
          <ul className="w-full max-w-2xl space-y-4">
            {posts.map((post) => (
              <li key={post.id}>
                <GeneratePost searchpostId={post.id} />
              </li>
            ))}
          </ul>
        </Layout>
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        <div className="bg-white/5 border border-red-500/20 rounded-2xl p-8 text-center max-w-sm">
          <p className="text-red-400 font-semibold mb-2">Something went wrong</p>
          <p className="text-gray-500 text-sm">Please try again later.</p>
        </div>
      </div>
    );
  }
}