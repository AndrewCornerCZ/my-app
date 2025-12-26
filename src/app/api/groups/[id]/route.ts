import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/db'


export async function GET(req: Request, context: { params: any }) {
    const params = await context.params
  const groupId = Number(params?.id)
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const members = await prisma.groupMember.findMany({
        where: { groupId: groupId },
        include: { user: true },
    })

    const activities = await prisma.groupActivity.findMany({
        where: { groupId: groupId },
    })

    const invitations = await prisma.groupInvitation.findMany({
        where: { groupId: groupId},
    })
    console.log(members, activities, invitations);
    return NextResponse.json({ members, activities, invitations}, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}