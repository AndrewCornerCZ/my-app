import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/db'

export async function GET() {
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const invitations = await prisma.groupInvitation.findMany({
      where: {
        userId: Number(session.user.id),
        status: 'pending',
      },
      include: {
        group: { select: { id: true, name: true, owner: { select: { username: true } } } },
      },
    })
    return NextResponse.json(invitations)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}