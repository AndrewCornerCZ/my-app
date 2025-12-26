import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { prisma } from "@/lib/db"

export async function PATCH(req: Request, context: { params: any }) {
  const session = await getServerSession(options)
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const params = await context.params
  const groupId = Number(params?.id)
  if (Number.isNaN(groupId)) return NextResponse.json({ error: "Invalid group id" }, { status: 400 })

  const body = await req.json()
  const sportId = Number(body?.sportId)
  if (Number.isNaN(sportId)) return NextResponse.json({ error: "Invalid sportId" }, { status: 400 })

  try {
    const group = await prisma.group.findUnique({ where: { id: groupId } })
    if (!group) return NextResponse.json({ error: "Group not found" }, { status: 404 })

    const callerId = Number(session.user.id)
    if (callerId !== group.ownerId) return NextResponse.json({ error: "Forbidden" }, { status: 403 })

    // update group's sportId (requires group model to have sportId field)
    const updated = await prisma.group.update({
      where: { id: groupId },
      data: { sportId },
    })

    return NextResponse.json(updated)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}