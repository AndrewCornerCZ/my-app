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
    // connect to websocket
    const socket = io(
      process.env.NEXT_PUBLIC_WS_URL,
      { transports: ["websocket"], withCredentials: true }
    );

    socketRef.current = socket;

    // if connect thern socket get data about current chat
    socket.on("connect", () => {
      socket.emit("join_chat", { chatId, userId: currentUserId });
    });

    // listen if websocket emit new message
    socket.on("receive_message", (message: Message) => {
      setMessages((prev) => {
        if (prev.some((m) => m.id === message.id)) return prev;
        return [...prev, message];
      });
    });


    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [chatId, currentUserId]);

  const loadMessages = async () => {
    const res = await fetch(
      `/api/chat/messages?chatId=${chatId}&skip=${skip}&take=10`
    );
    const data: Message[] = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      setMessages((prev) => {
        const newMessages = data.filter((msg) => !prev.some((m) => m.id === msg.id));
        return [...newMessages, ...prev];
      });
      setSkip((prev) => prev + data.length);
    }
  };

  useEffect(() => { loadMessages(); }, []);

  const sendMessage = () => {
    if (!text.trim() || !socketRef.current) return;
    setText("");
    socketRef.current.emit("send_message", {
      chatId,
      senderId: currentUserId,
      receiverId: otherUserId,
      content: text.trim(),
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatDateTime = (iso: string) => {
    const date = new Date(iso);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / 86400000);
    if (diffDays === 0) return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    if (diffDays === 1) return `Yesterday ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    return date.toLocaleString([], { dateStyle: "short", timeStyle: "short" });
  };

  // Group messages by date
  const groupedMessages: { date: string; messages: Message[] }[] = [];
  messages.forEach((msg) => {
    const dateStr = new Date(msg.createdAt).toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
    const last = groupedMessages[groupedMessages.length - 1];
    if (last && last.date === dateStr) {
      last.messages.push(msg);
    } else {
      groupedMessages.push({ date: dateStr, messages: [msg] });
    }
  });

  return (
    <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">

      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/3">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-700 rounded-full flex items-center justify-center ring-2 ring-white/10 shadow shadow-teal-900/40 flex-shrink-0">
            <span className="text-white font-bold text-sm">
              {otherUsername?.[0]?.toUpperCase() ?? '?'}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <a
            href={`/userprofile/${otherUsername}`}
            className="text-white font-semibold text-sm hover:text-teal-300 transition-colors duration-200"
          >
            @{otherUsername}
          </a>
        </div>

        {/* Back button */}
        <a
          href="/friends"
          className="ml-auto w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors duration-200 text-gray-400 hover:text-white"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </a>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">

        {/* Load more */}
        {messages.length > 0 && (
          <button
            onClick={loadMessages}
            className="self-center mb-4 px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-500 text-xs font-medium hover:text-white hover:border-teal-500/30 transition-all duration-200"
          >
            Load older messages
          </button>
        )}

        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center flex-1 text-center py-16">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
            <p className="text-gray-500 text-sm">No messages yet.</p>
            <p className="text-gray-600 text-xs mt-1">Say hi to @{otherUsername}!</p>
          </div>
        )}

        {groupedMessages.map((group) => (
          <div key={group.date}>
            {/* Date separator */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-xs text-gray-600 font-medium">{group.date}</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <div className="flex flex-col gap-1.5">
              {group.messages.map((msg, i) => {
                const isMe = msg.senderId === currentUserId;
                const prevMsg = group.messages[i - 1];
                const isFirst = !prevMsg || prevMsg.senderId !== msg.senderId;

                return (
                  <div
                    key={msg.id}
                    className={`flex ${isMe ? 'justify-end' : 'justify-start'} ${isFirst ? 'mt-2' : 'mt-0.5'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-sm px-4 py-2.5 break-words shadow-sm ${
                        isMe
                          ? 'bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-2xl rounded-br-sm'
                          : 'bg-white/8 border border-white/10 text-gray-100 rounded-2xl rounded-bl-sm'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                      <p className={`text-xs mt-1 ${isMe ? 'text-teal-200/70 text-right' : 'text-gray-500'}`}>
                        {formatDateTime(msg.createdAt)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-4 border-t border-white/10 bg-white/3">
        <div className="flex items-center gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            placeholder={`Message @${otherUsername}...`}
            className="flex-1 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
          />
          <button
            onClick={sendMessage}
            disabled={!text.trim()}
            className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-teal-900/40 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200 flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}