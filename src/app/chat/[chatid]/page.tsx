import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import ChatClient from "@/components/ChatClient";

export default async function ChatPage({ params }: { params: { chatid: number } }) {
  const session = await getServerSession(options);
  if (!session) redirect("/login");


  return (
    <>
      <Navbar />
      <ChatClient
        chatid={Number(params.chatid)}
        currentUserId={session.user.id}
      />
    </>
  );
}
