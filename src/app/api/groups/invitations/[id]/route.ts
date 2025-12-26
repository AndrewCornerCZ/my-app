import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/db"

export async function PATCH(req: Request, context: { params: any }) {
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const params = await context.params
  const inviteId = Number(params?.id)
  if (Number.isNaN(inviteId)) return NextResponse.json({ error: "Invalid invite id" }, { status: 400 })

  const body = await req.json()
  const action = body?.action as "accept" | "reject" | undefined
  if (!action || (action !== "accept" && action !== "reject")) {
    return NextResponse.json({ error: "action required ('accept'|'reject')" }, { status: 400 })
  }

  try {
    const invite = await prisma.groupInvitation.findUnique({
      where: { id: inviteId },
      include: { group: true },
    })
    if (!invite) return NextResponse.json({ error: "Invitation not found" }, { status: 404 })

    const callerId = Number(session.user.id)
    const isInvitee = callerId === invite.userId
    const isOwner = callerId === invite.group.ownerId

    // only invitee or group owner can act on this invitation
    if (!isInvitee && !isOwner) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    if (action === "accept") {
      // if already member, just mark accepted
      const alreadyMember = await prisma.groupMember.findFirst({
        where: { groupId: invite.groupId, userId: invite.userId },
      })
      if (!alreadyMember) {
        await prisma.groupMember.create({
          data: { groupId: invite.groupId, userId: invite.userId },
        })
      }
      const updated = await prisma.groupInvitation.delete({
        where: { id: inviteId },
      })
      return NextResponse.json(updated)
    } else {
      // reject
      const updated = await prisma.groupInvitation.delete({
        where: { id: inviteId }
      })
      return NextResponse.json(updated)
    }
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}