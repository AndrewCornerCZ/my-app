import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/db'

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params
  const id = Number(resolvedParams.id)

  if (isNaN(id)) {
    return NextResponse.json(
      { message: 'Invalid activity ID' },
      { status: 400 }
    )
  }

  try {
    const activity = await prisma.sportActivity.findUnique({
      where: { id },
    })

    if (!activity) {
      return NextResponse.json(
        { message: 'Activity not found' },
        { status: 404 }
      )
    }

    const session = await getServerSession(options)
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const userId = Number(session.user.id)
    const ownerId = Number(activity.userId)

    // Check if user is blocked or already a participant
    const existingParticipant = await prisma.sportActivityParticipant.findFirst({
      where: {
        activityId: id,
        userId: userId,
      },
    })

    if (existingParticipant) {
      // Check if blocked
      if (existingParticipant.role === 'blocked') {
        return NextResponse.json(
          { message: 'You are blocked from this activity' },
          { status: 403 }
        )
      }

      // Check if already a participant
      return NextResponse.json(
        { message: 'You are already a participant of this activity' },
        { status: 400 }
      )
    }

    const publicity = activity.publicity ?? 'private'

    // Check publicity settings
    if (publicity === 'public') {
      return NextResponse.json({ allowed: true })
    }

    if (publicity === 'private') {
      return NextResponse.json(
        { message: 'This activity is private' },
        { status: 403 }
      )
    }

    // Check mutual follow for friends-only activities
    if (publicity === 'friends-only') {
      const follows1 = await prisma.userFollow.findFirst({
        where: { followerId: userId, followingId: ownerId },
      })
      const follows2 = await prisma.userFollow.findFirst({
        where: { followerId: ownerId, followingId: userId },
      })

      if (follows1 && follows2) {
        return NextResponse.json({ allowed: true })
      }

      return NextResponse.json(
        { message: 'Only mutually followed users can join this activity' },
        { status: 403 }
      )
    }

    return NextResponse.json(
      { message: 'Unable to determine access permissions' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Error checking join permissions:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}