import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/db"

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const params = await context.params
  const groupId = Number(params?.id)
  if (Number.isNaN(groupId)) return NextResponse.json({ error: "Invalid group id" }, { status: 400 })

  const body = await req.json()
  const { sportId, date, starttime, endtime, description, latitude, longitude } = body

  if (!sportId || !date || !starttime || !endtime) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }
    console.log(groupId, sportId, date, starttime, endtime, description, latitude, longitude);
  try {
    // Použijem transaction s tx (můžeme použít tx pro obě operace tak, aby byly atomické)
    const result = await prisma.$transaction(async (tx) => {
      const activity = await tx.sportActivity.create({
        data: {
          user: { connect: { id: Number(session.user.id) } },   // connect místo userId
          sport: { connect: { id: Number(sportId) } },          // connect místo sportId
          date: new Date(date),
          starttime,
          endtime,
          description: description || null,
          latitude: latitude ? Number(latitude) : null,
          longitude: longitude ? Number(longitude) : null,
        },
        include: {
          user: true,
          sport: true,
        },
      })

      const groupActivity = await tx.groupActivity.create({
        data: {
          groupId,
          activityId: activity.id,
        },
      })

      return { activity, groupActivity }
    })

    return NextResponse.json(result)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to create activity" }, { status: 500 })
  }
}
