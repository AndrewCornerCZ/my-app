import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/db"

export async function POST(req: Request, context: { params: Promise<{ id: string; actId: string }> }) {
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const params = await context.params
  const groupId = Number(params?.id)
  const activityId = Number(params?.actId)
  const body = await req.json()
  const { attending } = body

  if (Number.isNaN(groupId) || Number.isNaN(activityId)) {
    return NextResponse.json({ error: "Invalid IDs" }, { status: 400 })
  }

  if (attending === undefined || typeof attending !== 'boolean') {
    return NextResponse.json({ error: "attending must be boolean" }, { status: 400 })
  }

  try {
    // check if member of group
    const member = await prisma.groupMember.findFirst({
      where: { groupId, userId: Number(session.user.id) },
    })
    if (!member) return NextResponse.json({ error: "Not a member" }, { status: 403 })
    // upsert attendance
    const attendance = await prisma.activityAttendance.upsert({
      where: { activityId_userId: { activityId, userId: Number(session.user.id) } },
      create: { activityId, userId: Number(session.user.id), attending },
      update: { attending },
    })

    return NextResponse.json(attendance)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}

export async function GET(req: Request, context: { params: Promise<{ id: string; actId: string }> }) {
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const params = await context.params
  const groupId = Number(params?.id)
  const activityId = Number(params?.actId)
  if (Number.isNaN(groupId) || Number.isNaN(activityId)) {
    return NextResponse.json({ error: "Invalid IDs" }, { status: 400 })
  } 
  try {
    const attendanceRecords = await prisma.activityAttendance.findMany({
      where: { activityId },
      include: { user: true },
    })

    return NextResponse.json(attendanceRecords)
  }
  catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to fetch attendance" }, { status: 500 })
  }
}