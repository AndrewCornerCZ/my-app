import { Server } from "socket.io";
import { prisma } from "@/lib/db";

const io = new Server(3001, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", (userId: number) => {
    socket.join(`user-${userId}`);
  });

  socket.on("send_message", async ({ senderId, receiverId, content, chatId }) => {
    const message = await prisma.message.create({
      data: { senderId, receiverId, content, chatId }
    });

    io.to(`user-${senderId}`).emit("receive_message", message);
    io.to(`user-${receiverId}`).emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

console.log("🟢 Socket server running on port 3001");
