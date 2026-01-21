import { prisma } from "@/lib/db"
import { notFound } from "next/navigation"
import GroupView from "@/components/GroupView"

export default async function GroupPage({ params }: { params: { id: string } }) {
  // params can be a Promise in some Next.js versions — await it before using
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
              sport: { select: { id: true, name: true } },
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
    <div className="min-h-screen bg-zinc-900">
      <div className="container mx-auto px-6 py-8">
        <GroupView group={safeGroup} />
      </div>
    </div>
  )
}

