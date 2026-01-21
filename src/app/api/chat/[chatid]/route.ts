import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ chatid: string }> }
) {
  const resolvedParams = await params
  const session = await getServerSession(options);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const chat = await prisma.chat.findFirst({
    where: {
        id: Number(resolvedParams.chatid),
        participants: {
            some: {
                id: Number(session.user.id)
            }
        }
    }
  });

  const messages = await prisma.message.findMany({
    where: {
        chatId: chat?.id,
    },
    orderBy: {
      createdAt: "asc"
    }
  });

  return NextResponse.json({ chat, messages });
}
