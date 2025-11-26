import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/db'

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Await params if using Next.js 15+
  const resolvedParams = await params
  const activityId = Number(resolvedParams.id)

  // Validate the id conversion
  if (isNaN(activityId)) {
    return NextResponse.json(
      { message: 'Invalid activity ID' },
      { status: 400 }
    )
  }

  const session = await getServerSession(options)
  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const viewerId = Number(session.user.id)

  try {
    // Reuse can-join logic server-side: fetch privacy and check
    const activity = await prisma.sportActivity.findUnique({
      where: { id: activityId }
    })

    if (!activity) {
      return NextResponse.json(
        { message: 'Activity not found' },
        { status: 404 }
      )
    }

    // Check if user is trying to join their own activity
    if (Number(activity.userId) === viewerId) {
      return NextResponse.json(
        { message: 'Cannot join your own activity' },
        { status: 400 }
      )
    }

    const publicity = activity.publicity ?? 'private'

    if (publicity === 'private') {
      return NextResponse.json(
        { message: 'This activity is private' },
        { status: 403 }
      )
    }

    if (publicity === 'friends-only') {
      const follows1 = await prisma.userFollow.findFirst({
        where: { followerId: viewerId, followingId: activity.userId },
      })
      const follows2 = await prisma.userFollow.findFirst({
        where: { followerId: activity.userId, followingId: viewerId },
      })

      if (!(follows1 && follows2)) {
        return NextResponse.json(
          { message: 'Only mutually followed users can join this activity' },
          { status: 403 }
        )
      }
    }

    // Create participation record (adjust model name and fields to your schema)
    const participant = await prisma.sportActivityParticipant.create({
      data: {
        activityId: activityId,
        userId: viewerId,
        role: 'participant',
        // Add any other required fields your schema expects (e.g., role, status)
      },
    })

    return NextResponse.json(
      { message: 'Successfully joined activity', participantId: participant.id },
      { status: 201 }
    )
  } catch (err) {
    console.error('Error joining activity:', err)

    // Check if it's a unique constraint error (already joined)
    if (err instanceof Error && err.message.includes('Unique constraint')) {
      return NextResponse.json(
        { message: 'You have already joined this activity' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Failed to join activity' },
      { status: 500 }
    )
  }
}