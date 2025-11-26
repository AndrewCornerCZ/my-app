import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/db'

export async function POST(
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
    // Check if user is owner of activity
    const activity = await prisma.sportActivity.findUnique({
      where: { id: activityId },
      select: { userId: true },
    })

    if (!activity || activity.userId !== sessionUserId) {
      return NextResponse.json(
        { message: 'Only activity owner can block participants' },
        { status: 403 }
      )
    }

    // Get participant to block
    const participant = await prisma.sportActivityParticipant.findUnique({
      where: { id: participantId },
      select: { userId: true },
    })

    if (!participant) {
      return NextResponse.json(
        { message: 'Participant not found' },
        { status: 404 }
      )
    }

    // Create block record
    await prisma.sportActivityParticipant.update({
        where: { id: participantId },
      data: {
        role: 'blocked',
      },
    })

    return NextResponse.json(
      { message: 'Participant blocked and removed' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error blocking participant:', error)
    return NextResponse.json(
      { message: 'Failed to block participant' },
      { status: 500 }
    )
  }
}