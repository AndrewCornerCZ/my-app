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

  const filterLabel: Record<string, string> = {
    users: 'Users',
    hashtags: 'Hashtags',
    groups: 'Groups',
  };

  // Shared layout wrapper
  const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <Navbar />
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />
      <div className="relative z-10 flex flex-col items-center px-4 pt-28 pb-16">
        {children}
      </div>
    </div>
  );

  const Header = () => (
    <div className="w-full max-w-2xl mb-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">
        {filterLabel[filter] ?? filter}
      </p>
      <h1 className="text-3xl font-extrabold tracking-tight">
        Results for{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
          &ldquo;{searchTerm}&rdquo;
        </span>
      </h1>
    </div>
  );

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
    // ── USERS ──
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

    // ── HASHTAGS ──
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

    // ── GROUPS ──
    if (filter === 'groups') {
      const groups = await prisma.group.findMany({
        where: {
          name: { contains: searchTerm, mode: 'insensitive' },
          isPublic: true
        },
        include: {
          owner: { select: { username: true } },
          members: { select: { userId: true } },
          sport: { select: { name: true } },
        },
        orderBy: { name: 'asc' },
      });

      if (groups.length === 0) return <Empty />;

      return (
        <Layout>
          <Header />
          <ul className="w-full max-w-2xl space-y-3">
            {groups.map((group) => (
              <li key={group.id}>
                <Link
                  href={`/groups/${group.id}`}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-teal-500/40 rounded-2xl px-5 py-4 transition-all duration-200 group shadow-sm"
                >
                  {/* Group avatar */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-700/20 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-white font-semibold text-sm group-hover:text-teal-300 transition-colors duration-200 truncate">
                        {group.name}
                      </span>
                      {group.sport && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 flex-shrink-0">
                          {group.sport.name}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span>by @{group.owner.username}</span>
                      <span>·</span>
                      <span>{group.members.length} {group.members.length === 1 ? 'member' : 'members'}</span>
                    </div>
                    {group.description && (
                      <p className="text-xs text-gray-500 mt-1 truncate">{group.description}</p>
                    )}
                  </div>

                  <svg className="w-4 h-4 text-gray-600 group-hover:text-teal-400 flex-shrink-0 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </Link>
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