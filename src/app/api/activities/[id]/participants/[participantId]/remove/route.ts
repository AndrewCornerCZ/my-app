// src/app/api/activities/[id]/participants/[participantId]/remove/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/db'

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string; participantId: string }> }
) {
  const resolvedParams = await params
  const activityId = Number(resolvedParams.id)
  const participantId = Number(resolvedParams.participantId)

  if (isNaN(activityId) || isNaN(participantId)) {
    return NextResponse.json(
      { message: 'Invalid IDs' },
      { status: 400 }
    )
  }

  const session = await getServerSession(options)
  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const sessionUserId = Number(session.user.id)

  try {
    const activity = await prisma.sportActivity.findUnique({
      where: { id: activityId },
      select: { userId: true },
    })

    if (!activity || activity.userId !== sessionUserId) {
      return NextResponse.json(
        { message: 'Only activity owner can remove participants' },
        { status: 403 }
      )
    }

    // Verify participant exists in this activity
    const participant = await prisma.sportActivityParticipant.findUnique({
      where: { id: participantId },
    })

    if (!participant || participant.activityId !== activityId) {
      return NextResponse.json(
        { message: 'Participant not found in this activity' },
        { status: 404 }
      )
    }

    await prisma.sportActivityParticipant.delete({
      where: { id: participantId },
    })

    return NextResponse.json(
      { message: 'Participant removed' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error removing participant:', error)
    return NextResponse.json(
      { message: 'Failed to remove participant' },
      { status: 500 }
    )
  }
}