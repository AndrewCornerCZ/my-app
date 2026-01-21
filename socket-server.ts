import { Server } from "socket.io";
import http from "http";
import { prisma } from "@/lib/db";

// HTTP server
const httpServer = http.createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Next.js klient
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Uživatelská "room" podle userId
  socket.on("join", (userId: number) => {
    socket.join(`user-${userId}`);
    console.log(`User ${userId} joined their room`);
  });

  // Odeslání zprávy
  socket.on("send_message", async ({ senderId, receiverId, content, chatId }) => {
    try {
      // Uloží zprávu do DB
      const message = await prisma.message.create({
        data: { senderId, receiverId, content, chatId }
      });

      // Pošle zprávu zpět oběma uživatelům
      io.to(`user-${senderId}`).emit("receive_message", message);
      io.to(`user-${receiverId}`).emit("receive_message", message);

      console.log(`Message sent from ${senderId} to ${receiverId}: ${content}`);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

httpServer.listen(3001, () => {
  console.log("🟢 Socket server running on port 3001");
});
