import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const session = await getServerSession(options);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { postId } = await req.json();
    
    if (!postId) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
    }

    const authorId = await prisma.user.findUnique({
      where: {
        email: session.user.email as string
      }
    });
    if (!authorId) {
      return NextResponse.json({ error: "Author not found" }, { status: 404 });
    }

    const existingLike = await prisma.userLike.findFirst({
      where: {
        AND: [
          { postId: postId },
          { userId: authorId.id as number }
        ]
      }
    });

    
    if (!existingLike) {
      const result = await prisma.$transaction(async (tx) => {
        await tx.userLike.create({
          data: {
            userId: authorId.id as number,
            postId: postId
          }
        });
  
        const updatedPost = await tx.post.update({
          where: { id: postId },
          data: { likes: { increment: 1 } }
        });
  
        return updatedPost;
      });

    return NextResponse.json({ likes: result.likes });
  }
  } catch (error) {
    console.error('Error processing like:', error);
    return NextResponse.json(
      { error: "Failed to update like count" }, 
      { status: 500 }
    );
  }
}