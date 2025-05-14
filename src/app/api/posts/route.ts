import { NextResponse } from "next/server";
import { Hashtag } from "../../../../prisma/generated/prisma/client";
import {prisma} from "@/lib/db";

export async function POST(req: Request) {
  let Hashtag: Hashtag | null = null;

    const { text, hashtag, authorId } = await req.json();
    if (!hashtag || !text || !authorId) {
      return NextResponse.json({ error: "Missing required fields", hashtag, text, authorId }, { status: 400 });
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


    console.log("Hashtag found:", Hashtag);
    if (isNaN(authorId as number)) {
      return NextResponse.json({ error: authorId}, { status: 400 });
    }
    const result = await prisma.$transaction(async (prisma) => {
      const newPost = await prisma.post.create({
        data: {
          text,
          authorId: authorId as number,
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
