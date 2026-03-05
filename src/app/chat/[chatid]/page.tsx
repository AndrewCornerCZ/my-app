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
        include: { user: true },
      },
    },
  });

  if (!chat) redirect("/friends");

  const otherUser = chat.participants.find((p) => p.userId !== currentUser.id);
  if (!otherUser) redirect("/friends");

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />

      <Navbar />

      <div className="relative z-10 flex justify-center px-4 pt-20 pb-4 h-screen">
        <div className="w-full max-w-2xl flex flex-col h-full">
          <ChatClient
            chatId={chat.id}
            currentUserId={currentUser.id}
            otherUsername={otherUser.user.username}
            otherUserId={otherUser.userId}
          />
        </div>
      </div>
    </div>
  );
}