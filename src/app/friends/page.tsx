import Navbar from "../../components/Navbar";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import StartChatButton from "@/components/StartChatButton";
import Image from 'next/image';

export default async function Friends() {
  const session = await getServerSession(options);
  if (!session) redirect("/login");

  const currentUser = await prisma.user.findUnique({
    where: { email: session.user?.email as string },
  });

  if (!currentUser) redirect("/login");

  const mutualFollows = await prisma.user.findMany({
    where: {
      AND: [
        { followers: { some: { followerId: currentUser.id } } },
        { following: { some: { followingId: currentUser.id } } },
      ],
    },
  });

  const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />
      <Navbar />
      <div className="relative z-10 flex flex-col items-center px-4 pt-28 pb-16">
        {children}
      </div>
    </div>
  );

  if (mutualFollows.length === 0) {
    return (
      <Layout>
        <div className="w-full max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-2">Friends</p>
          <h1 className="text-3xl font-extrabold tracking-tight mb-8">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
              Squad
            </span>
          </h1>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 flex flex-col items-center backdrop-blur-md shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
              </svg>
            </div>
            <p className="text-white font-semibold mb-1">No friends yet</p>
            <p className="text-gray-500 text-sm text-center">
              When you and another user follow each other, they&apos;ll appear here.
            </p>
            <a
              href="/search"
              className="mt-6 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold hover:brightness-110 transition-all duration-200 shadow-lg shadow-teal-900/40"
            >
              Find people to follow
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
              Friends
            </span>
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            {mutualFollows.length} mutual {mutualFollows.length === 1 ? "connection" : "connections"}
          </p>
        </div>

        {/* Friends list */}
        <ul className="space-y-3">
          {mutualFollows.map((user) => (
            <li key={user.id}>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-teal-500/30 rounded-2xl px-4 py-3.5 transition-all duration-200 group">

                {/* Avatar */}
                <div className="relative w-11 h-11 flex-shrink-0">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.username}
                      fill
                      className="rounded-full object-cover ring-2 ring-white/10 shadow shadow-teal-900/40"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-700 rounded-full flex items-center justify-center ring-2 ring-white/10 shadow shadow-teal-900/40">
                      <span className="text-white font-bold text-sm">
                        {user.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name */}
                <div className="flex flex-col flex-1 min-w-0">
                  <a
                    href={`/userprofile/${user.username}`}
                    className="text-white font-semibold text-sm hover:text-teal-300 transition-colors duration-200 truncate"
                  >
                    @{user.username}
                  </a>
                  <a
                    href={`/userprofile/${user.username}`}
                    className="text-gray-600 text-xs hover:text-teal-500 transition-colors duration-200"
                  >
                    View profile →
                  </a>
                </div>

                {/* Chat button */}
                <StartChatButton otherUserId={user.id} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}