"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

type Message = {
  id: number;
  content: string;
  senderId: number;
  createdAt: string;
};

export default function ChatClient({
  chatId,
  currentUserId,
  otherUserId,
  otherUsername,
}: {
  chatId: number;
  currentUserId: number;
  otherUserId: number;
  otherUsername: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [skip, setSkip] = useState(0);

  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const socket = io(
      process.env.NEXT_PUBLIC_SOCKET_URL ??
        "https://pleasing-love-production-1ecc.up.railway.app",
      {
        transports: ["websocket"],
        withCredentials: true,
      }
    );

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("🟢 Socket connected:", socket.id);

      socket.emit("join_chat", {
        chatId,
        userId: currentUserId,
      });
    });

    socket.on("receive_message", (message: Message) => {
      setMessages((prev) => {
        if (prev.some((m) => m.id === message.id)) return prev;
        return [...prev, message];
      });
    });

    socket.on("disconnect", () => {
      console.log("🟡 Socket disconnected");
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [chatId, currentUserId]);

  // =========================
  // LOAD OLDER MESSAGES
  // =========================
  const loadMessages = async () => {
    const res = await fetch(
      `/api/chat/messages?chatId=${chatId}&skip=${skip}&take=10`
    );

    const data: Message[] = await res.json();

    if (Array.isArray(data) && data.length > 0) {
      setMessages((prev) => {
        const newMessages = data.filter(
          (msg) => !prev.some((m) => m.id === msg.id)
        );
        return [...newMessages, ...prev];
      });

      setSkip((prev) => prev + data.length);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  // =========================
  // SEND MESSAGE
  // =========================
  const sendMessage = () => {
    if (!text.trim() || !socketRef.current) return;

    const tempMessage: Message = {
      id: Date.now(), // temporary ID
      content: text,
      senderId: currentUserId,
      createdAt: new Date().toISOString(),
    };

    setText("");
    socketRef.current.emit("send_message", {
      chatId,
      senderId: currentUserId,
      receiverId: otherUserId,
      content: tempMessage.content,
    });
  };

  // =========================
  // AUTO SCROLL
  // =========================
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // =========================
  // FORMAT DATETIME
  // =========================
  const formatDateTime = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleString([], {
      dateStyle: "short",
      timeStyle: "short",
    });
  };

  // =========================
  // RENDER
  // =========================
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-gray-900 text-white">
      {/* Header */}
      <div className="p-4 border-b border-zinc-700">
        <h2 className="text-lg font-semibold">@{otherUsername}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.length > 0 && (
          <button
            onClick={loadMessages}
            className="self-center mb-2 px-4 py-1 bg-gray-700 rounded hover:bg-gray-600"
          >
            Load more
          </button>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs p-3 rounded-lg break-words ${
              msg.senderId === currentUserId
                ? "bg-indigo-600 ml-auto"
                : "bg-zinc-700"
            }`}
          >
            <div>{msg.content}</div>
            <div className="text-xs text-gray-400 mt-1 text-right">
              {formatDateTime(msg.createdAt)}
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-zinc-700 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
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
