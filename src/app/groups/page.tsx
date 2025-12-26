import Navbar from "@/components/Navbar"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"
import GroupsClient from "@/components/GroupsClient"

export default async function GroupsPage() {
  const session = await getServerSession(options)
  if (!session) {
    redirect("/login")
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-2">Groups</h1>
          <p className="text-zinc-400 mb-8">Join or create groups to connect with others</p>
          
          <GroupsClient />
        </div>
      </div>
    </div>
  )
}