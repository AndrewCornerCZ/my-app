import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { text, hashtag, authorId } = await req.json();
    console.log("text", text);
    console.log("hashtag", hashtag);
    console.log("authorId", authorId);
    if (!hashtag || !text || !authorId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const authorIdInt = parseInt(authorId, 10);
    if (isNaN(authorIdInt)) {
      return NextResponse.json({ error: "Invalid authorId" }, { status: 400 });
    }
    const result = await prisma.$transaction(async (prisma) => {
    const newPost = await prisma.post.create({
      data: {
        text,
        hashtag,
        authorId: authorIdInt
      },
    });
    return newPost;
  });
    return NextResponse.json({ message: "Post created", post: result }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating post:", error.message || error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}