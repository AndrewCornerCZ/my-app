import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/db"

export async function DELETE(req: Request, context: { params: Promise<{ id: string, userId: string }> }) {
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const params = await context.params
  const groupId = Number(params?.id)
  const userId = Number(params?.userId)

  if (Number.isNaN(groupId) || Number.isNaN(userId)) {
    return NextResponse.json({ error: "Invalid IDs" }, { status: 400 })
  }

  try {
    const group = await prisma.group.findUnique({ where: { id: groupId } })
    if (!group) return NextResponse.json({ error: "Group not found" }, { status: 404 })

    const callerId = Number(session.user.id)
    
    // owner can remove any member, user can remove themselves
    if (callerId !== group.ownerId && callerId !== userId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // delete member
    await prisma.groupMember.deleteMany({
      where: { groupId, userId },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}