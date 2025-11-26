// src/app/api/activities/[id]/participants/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/db'

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params
  const activityId = Number(resolvedParams.id)

  if (isNaN(activityId)) {
    return NextResponse.json(
      { message: 'Invalid activity ID' },
      { status: 400 }
    )
  }

  try {
    const activity = await prisma.sportActivity.findUnique({
      where: { id: activityId },
      select: { userId: true },
    })

    if (!activity) {
      return NextResponse.json(
        { message: 'Activity not found' },
        { status: 404 }
      )
    }

    const participants = await prisma.sportActivityParticipant.findMany({
      where: { activityId },
      include: {
        user: {
          select: {
            id: true,
            username: true
            },
        },
      },
    })

    return NextResponse.json({
      ownerId: activity.userId,
      participants: participants.map(p => ({
        id: p.id,
        userId: p.userId,
        activityId: p.activityId,
        role: p.role || 'participant',
        user: p.user
      })),
    })
  } catch (error) {
    console.error('Error fetching participants:', error)
    return NextResponse.json(
      { message: 'Failed to fetch participants' },
      { status: 500 }
    )
  }
}