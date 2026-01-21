import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function POST(req: Request) {
  const session = await getServerSession(options);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { otherUserId } = await req.json();
  console.log("Other User ID:", otherUserId);

  const currentUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!currentUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // 1️⃣ Najít existující 1:1 chat
  const existingChat = await prisma.chat.findFirst({
    where: {
      participants: {
        every: {
          userId: {
            in: [currentUser.id, otherUserId],
          },
        },
      },
    },
    include: {
      participants: true,
    },
  });

  if (existingChat) {
    return NextResponse.json({ chatId: existingChat.id });
  }

  // 2️⃣ Vytvořit nový chat
  const newChat = await prisma.chat.create({
    data: {
      participants: {
        create: [
          { userId: currentUser.id },
          { userId: otherUserId },
        ],
      },
    },
  });

  return NextResponse.json({ chatId: newChat.id });
}
