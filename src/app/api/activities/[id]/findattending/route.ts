import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(  req: Request,
  { params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params
  const id = Number(resolvedParams.id)

  try {

    const Participation = await prisma.sportActivityParticipant.findMany({
      where: {
        userId : id,
      }
    })
    const participatiedactivities = await prisma.sportActivity.findMany({
      where: {
        id: { in: Participation.map(p => p.activityId) },
      },
      include: {
        sport: true,
        participants: true,
        user: {
          select: {
            id: true,
            username: true
          }
        }
      }
    })
    return NextResponse.json(participatiedactivities)
  }
  catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}