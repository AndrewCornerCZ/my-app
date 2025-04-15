import { Hashtag, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  let Hashtag: Hashtag | null = null;

    const { text, hashtag, authorEmail } = await req.json();
    if (!hashtag || !text || !authorEmail) {
      return NextResponse.json({ error: "Missing required fields", hashtag, text, authorEmail }, { status: 400 });
    }
    const HashtagsMap = new Map<string, Hashtag>();
    const hashtagsplitted = hashtag.split(" ").map((tag: string) => tag.trim());
    console.log("Hashtags splitted:", hashtagsplitted);
    for (const hashtagparts of hashtagsplitted) {
      try {
        Hashtag = await prisma.hashtag.findFirst({
          where: {
            text: hashtagparts,
          },
        });
      } catch (error) {
        console.error("Error finding hashtag:", error);
      }
  
      if (Hashtag == null) {
        console.log("Hashtag not found, creating new one:", hashtag);
        Hashtag = await prisma.hashtag.create({
          data: {
            text: hashtagparts,
          },
        });
      }
  
      if (!Hashtag) {
        throw new Error("Failed to create or retrieve hashtag");
      }
      HashtagsMap.set(Hashtag.text, Hashtag);
    }


    const authorId = await prisma.user.findUnique({
      where: {
        email: authorEmail
      }
    });

    console.log("Hashtag found:", Hashtag);
    if (isNaN(authorId?.id as number)) {
      return NextResponse.json({ error: "Invalid authorId" }, { status: 400 });
    }
    const result = await prisma.$transaction(async (prisma) => {
      const newPost = await prisma.post.create({
        data: {
          text,
          authorId: authorId?.id as number,
          postHashtags: {
            create: Array.from(HashtagsMap.values())
              .filter((hashtag): hashtag is Hashtag => hashtag !== null)
              .map((hashtag) => ({
                hashtag: {
                  connect: { id: hashtag.id }
                }
              }))
          },
        },
      });
      return newPost;
    });

    return NextResponse.json({ message: "Post created", post: result }, { status: 201 });

}
