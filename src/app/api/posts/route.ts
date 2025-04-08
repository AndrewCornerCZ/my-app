import { Hashtag, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  let Hashtag: Hashtag | null = null;
  try {
    const { text, hashtag, authorId } = await req.json();
    if (!hashtag || !text || !authorId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {
      Hashtag = await prisma.hashtag.findFirst({
        where: {
          text: hashtag,
        },
      });
    } catch (error) {
      console.error("Error finding hashtag:", error);
    }

    if (Hashtag == null) {
      console.log("Hashtag not found, creating new one:", hashtag);
      Hashtag = await prisma.hashtag.create({
        data: {
          text: hashtag,
        },
      });
    }

    if (!Hashtag) {
      throw new Error("Failed to create or retrieve hashtag");
    }

    console.log("Hashtag found:", Hashtag);
    const authorIdInt = parseInt(authorId, 10);
    if (isNaN(authorIdInt)) {
      return NextResponse.json({ error: "Invalid authorId" }, { status: 400 });
    }
    const result = await prisma.$transaction(async (prisma) => {
      const newPost = await prisma.post.create({
        data: {
          text,
          authorId: authorIdInt,
          postHashtags: {
            create: [
              {
                hashtag: {
                  connect: { id: Hashtag!.id }, // Safe to access `id` here
                },
              },
            ],
          },
        },
      });
      return newPost;
    });

    return NextResponse.json({ message: "Post created", post: result }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
