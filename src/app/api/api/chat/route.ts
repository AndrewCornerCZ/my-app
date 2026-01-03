import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const session = await getServerSession(options);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { receiverId, content, chatid } = await req.json();

  const sender = await prisma.user.findUnique({
    where: { email: session.user.email }
  });

  if (!sender) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const message = await prisma.message.create({
    data: {
      chatId: chatid,
      senderId: sender.id,
      receiverId,
      content
    }
  });

  return NextResponse.json(message);
}
