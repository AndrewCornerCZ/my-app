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

export async function PATCH(req: Request,{ params }: { params: Promise<{ id: string; userId: string }> }
) {
  try {
  const session = await getServerSession(options)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const { id, userId } = await params
    const groupId = Number(id)
    const targetUserId = Number(userId)
    const currentUserId = Number(session.user.id)
    const { role } = await req.json()
 
    // Validace role
    if (!['member', 'admin'].includes(role)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
    }
 
    // Najdi skupinu
    const group = await prisma.group.findUnique({
      where: { id: groupId },
      include: { members: { include: { user: true } } }
    })
 
    if (!group) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 })
    }
 
    // Ověř, že se jedná o člena skupiny
    const targetMember = group.members.find(m => Number(m.user.id) === targetUserId)
    if (!targetMember) {
      return NextResponse.json({ error: 'User is not a member' }, { status: 400 })
    }
 
    // Ověř, že requester je owner nebo admin
    const requesterMember = group.members.find(m => Number(m.user.id) === currentUserId)
    const isOwner = currentUserId === group.ownerId
    const isAdmin = requesterMember?.role === 'admin'
 
    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: 'Forbidden - only owner/admin can manage roles' }, { status: 403 })
    }
 
    // Zabrání demotovat/promovat ownera
    if (targetUserId === group.ownerId) {
      return NextResponse.json({ error: 'Cannot change owner role' }, { status: 403 })
    }
 
    // Zabrání admin aby si sám dal admin práva (pouze owner)
    if (!isOwner && isAdmin && role === 'admin') {
      return NextResponse.json({ error: 'Only owner can promote to admin' }, { status: 403 })
    }
 
    // Uprav roli v DB
    const updatedMember = await prisma.groupMember.update({
      where: { id: targetMember.id },
      data: { role },
      include: { user: true }
    })
 
    return NextResponse.json(updatedMember, { status: 200 })
 
  } catch (error) {
    console.error('PATCH /api/groups/[id]/members/[userId]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}