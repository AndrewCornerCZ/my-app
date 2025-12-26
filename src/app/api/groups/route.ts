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
      data: {
        name,
        description,
        ownerId: Number(session.user.id),
        sportId,
      },
    })
    return NextResponse.json(group, { status: 201 })
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

    // nejdříve získat, koho už sleduju
    const followinguser = await prisma.user.findMany({
      where: {
        followers: {
          some: { followerId: userId },
        },
      },
    })

    const followingIds = followinguser.map(u => u.id)
    const excludeOwnerIds = [userId, ...followingIds] // vyřadit své i přátelské skupiny

    // veřejné skupiny, které nejsou moje a nejsou od lidí, které sleduju
    const groupsall = await prisma.group.findMany({
      where: {
        isPublic: true,
        ownerId: { notIn: excludeOwnerIds },
      },
      include: {
        owner: { select: { id: true, username: true } },
        _count: { select: { members: true } },
      },
    })

    const mygroups = await prisma.group.findMany({
      where: { ownerId: userId },
      include: {
        owner: { select: { id: true, username: true } },
        _count: { select: { members: true } },
      },
    })

    const friendsgroups = await prisma.group.findMany({
      where: {
        ownerId: { in: followingIds },
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