import Navbar from "@/components/Navbar";
import { prisma } from "@/lib/db";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ChatClient from "@/components/ChatClient";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ chatid: string }>;
}) {
  const { chatid } = await params;
  const session = await getServerSession(options);
  if (!session) redirect("/login");

  const chatId = Number(chatid);
  if (isNaN(chatId)) redirect("/friends");

  const currentUser = await prisma.user.findUnique({
    where: { email: session.user!.email! },
  });

  if (!currentUser) redirect("/login");

  const chat = await prisma.chat.findUnique({
    where: { id: chatId },
    include: {
      participants: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!chat) redirect("/friends");

  const otherUser = chat.participants.find(
    (p) => p.userId !== currentUser.id
  );

  if (!otherUser) redirect("/friends");

  return (
    <>
      <Navbar />
      <ChatClient
        chatId={chat.id}
        currentUserId={currentUser.id}
        otherUsername={otherUser.user.username}
        otherUserId={otherUser.userId}
      />
    </>
  );
}
