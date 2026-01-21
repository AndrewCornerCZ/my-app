"use client";

type Props = {
  otherUserId: number;
};

export default function StartChatButton({ otherUserId }: Props) {
  const startChat = async () => {
    const res = await fetch("/api/chat/get-or-create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otherUserId }),
    });

    if (!res.ok) return;

    const data = await res.json();
    window.location.href = `/chat/${data.chatId}`;
  };

  return (
    <button
      onClick={startChat}
      className="text-sm text-blue-400 hover:underline"
    >
      Open chat →
    </button>
  );
}
