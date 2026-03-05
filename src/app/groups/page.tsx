import Navbar from "@/components/Navbar"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"
import GroupsClient from "@/components/GroupsClient"

export default async function GroupsPage() {
  const session = await getServerSession(options)
  if (!session) redirect("/login")

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />

      <Navbar />

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">Community</p>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
              Groups
            </span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Join or create groups to connect with others</p>
        </div>

        <GroupsClient />
      </div>
    </div>
  )
}