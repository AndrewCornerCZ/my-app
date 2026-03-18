import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const { name, description } = body
  const sportRaw = body.sportId ?? body.sportid
  if (!name) return NextResponse.json({ error: 'Name required' }, { status: 400 })
  if (sportRaw == null) return NextResponse.json({ error: 'sportId required' }, { status: 400 })
  const sportId = Number(sportRaw)
  if (Number.isNaN(sportId)) return NextResponse.json({ error: 'Invalid sportId' }, { status: 400 })

  try {
    const group = await prisma.group.create({
      data: { name, description, ownerId: Number(session.user.id), sportId },
    })
    const groupMember = await prisma.groupMember.create({
      data: { groupId: group.id, userId: Number(session.user.id) },
    })
    return NextResponse.json({ group, groupMember }, { status: 201 })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to create group' }, { status: 500 })
  }
}

export async function GET() {
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const userId = Number(session.user.id)

    // Koho sleduji
    const followingUsers = await prisma.user.findMany({
      where: { followers: { some: { followerId: userId } } },
    })
    const followingIds = followingUsers.map(u => u.id)

    // Moje skupiny = vlastním NEBO jsem členem
    const mygroups = await prisma.group.findMany({
      where: {
        OR: [
          { ownerId: userId },
          { members: { some: { userId } } },
        ],
      },
      include: {
        owner: { select: { id: true, username: true } },
        _count: { select: { members: true } },
      },
    })

    const mygroupIds = mygroups.map(g => g.id)

    // Skupiny přátel = přítel je owner NEBO member (a já tam ještě nejsem)
    const friendsgroups = followingIds.length > 0
      ? await prisma.group.findMany({
          where: {
            id: { notIn: mygroupIds },
            OR: [
              { ownerId: { in: followingIds } },
              { members: { some: { userId: { in: followingIds } } } },
            ],
          },
          include: {
            owner: { select: { id: true, username: true } },
            _count: { select: { members: true } },
          },
        })
      : []

    const friendsgroupIds = friendsgroups.map(g => g.id)

    // Všechny veřejné skupiny (které nemám ani nejsou od/v přátel)
    const groupsall = await prisma.group.findMany({
      where: {
        isPublic: true,
        id: { notIn: [...mygroupIds, ...friendsgroupIds] },
      },
      include: {
        owner: { select: { id: true, username: true } },
        _count: { select: { members: true } },
      },
    })

    return NextResponse.json({ groupsall, mygroups, friendsgroups }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}