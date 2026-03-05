import Navbar from "../components/Navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";
import AddPostButton from "../components/postsComponents/AddPostButton";
import Posts from "../components/postsComponents/Posts";

export default async function HomePage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <Navbar />

      {/* Background blobs */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center px-4 pt-28 pb-24">

        {/* Feed header */}
        <div className="w-full max-w-2xl mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">
              Welcome back, {session.user?.name ?? 'there'} 👋
            </p>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                Feed
              </span>
            </h1>
          </div>
          <AddPostButton />
        </div>

        {/* Divider */}
        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Posts */}
        <div className="w-full max-w-2xl space-y-4">
          <Posts />
        </div>

      </div>
    </div>
  );
}