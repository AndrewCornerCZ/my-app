"use client";git config --list --show-origin
import { prisma } from "@/lib/db";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

type Message = {
  id: number;
  content: string;
  senderId: number;
  createdAt: string;
};

export default async function ChatClient({
    chatid,
    currentUserId,
}: {
    chatid: number;
    currentUserId: number;
}) {

const chat = await prisma.chat.findUnique({
  where: { id: chatid },
  include: {
    participants: {
      include: {
        user: true,
      },
    },
  },
});

if (!chat) return null;

    const otherUser = chat.participants.find(
    user => user.id !== currentUserId
    );
    if (!otherUser) {
  throw new Error("Other user not found in chat");
    }


  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket = io("http://localhost:3001");

    socket.emit("join", currentUserId);

    socket.on("receive_message", (message: Message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [currentUserId]);

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("send_message", {
      senderId: currentUserId,
      receiverId: otherUser.id,
      content: text
    });

    setText("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-gray-900 text-white">
      {/* Header */}
      <div className="p-4 border-b border-zinc-700">
        <h2 className="text-lg font-semibold">@{otherUser.user.username}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`max-w-xs p-3 rounded-lg ${
              msg.senderId === currentUserId
                ? "bg-indigo-600 ml-auto"
                : "bg-zinc-700"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-zinc-700 flex gap-2">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          className="flex-1 bg-zinc-800 rounded px-3 py-2 outline-none"
          placeholder="Write a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
