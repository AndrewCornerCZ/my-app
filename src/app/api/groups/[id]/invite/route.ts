import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/db'

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // params can be a Promise in latest Next — await it
  const params = await (context.params ?? {})
  const groupId = Number(params.id)
  if (Number.isNaN(groupId)) return NextResponse.json({ error: 'Invalid group id' }, { status: 400 })

  const body = await req.json()
  const { userId: bodyUserId, email } = body ?? {}

  try {
    const group = await prisma.group.findUnique({ where: { id: groupId } })
    if (!group) return NextResponse.json({ error: 'Group not found' }, { status: 404 })

    const callerId = Number(session.user.id)
    // owner -> can invite by userId or email
    if (callerId === group.ownerId) {
      let targetUserId: number | null = null

      if (bodyUserId != null) {
        targetUserId = Number(bodyUserId)
      } else if (email) {
        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) return NextResponse.json({ error: 'User with that email not found' }, { status: 404 })
        targetUserId = user.id
      } else {
        return NextResponse.json({ error: 'userId or email required' }, { status: 400 })
      }

      // check already member
      const existingMember = await prisma.groupMember.findFirst({
        where: { groupId, userId: targetUserId },
      })
      if (existingMember) return NextResponse.json({ error: 'User is already a member' }, { status: 400 })

      // check existing pending invitation
      const existingInvite = await prisma.groupInvitation.findFirst({
        where: { groupId, userId: targetUserId },
      })
      if (existingInvite) return NextResponse.json({ error: 'Invitation already pending' }, { status: 400 })

      const invite = await prisma.groupInvitation.create({
        data: { groupId, userId: targetUserId, status: 'pending' },
      })
      return NextResponse.json(invite, { status: 201 })
    }

    // non-owner -> request join (creates a pending invitation for the user who requested)
    const requesterId = callerId
    // if already member
    const alreadyMember = await prisma.groupMember.findFirst({
      where: { groupId, userId: requesterId },
    })
    if (alreadyMember) return NextResponse.json({ error: 'Already a member' }, { status: 400 })

    const alreadyRequested = await prisma.groupInvitation.findFirst({
      where: { groupId, userId: requesterId },
    })
    if (alreadyRequested) return NextResponse.json({ error: 'Request already pending' }, { status: 400 })

    const requestInvite = await prisma.groupInvitation.create({
      data: { groupId, userId: requesterId, status: 'pending' },
    })
    return NextResponse.json(requestInvite, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}