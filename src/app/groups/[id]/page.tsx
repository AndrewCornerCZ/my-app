import { prisma } from "@/lib/db"
import { notFound } from "next/navigation"
import GroupView from "@/components/GroupView"
import Navbar from "@/components/Navbar"

export default async function GroupPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const id = Number(resolvedParams?.id)
  if (Number.isNaN(id)) return notFound()

  const group = await prisma.group.findUnique({
    where: { id },
    include: {
      owner: { select: { id: true, username: true } },
      members: { include: { user: { select: { id: true, username: true, email: true } } } },
      activities: {
        include: {
          activity: {
            include: {
              user: { select: { id: true, username: true } },
              sport: { select: { id: true, name: true, emoji: true } },
            },
          },
        },
        orderBy: { id: "desc" },
      },
      invitations: { include: { user: { select: { id: true, username: true, email: true } } } },
    },
  })

  if (!group) return notFound()

  const safeGroup = JSON.parse(JSON.stringify(group))

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />

      <Navbar />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <GroupView group={safeGroup} />
      </div>
    </div>
  )
}