import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import {prisma} from "@/lib/db";


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

    //zjistí jestli uživatel již dal like
    const existingLike = await prisma.userLike.findFirst({
      where: {
        AND: [
          { postId: postId },
          { userId: authorId.id as number }
        ]
      }
    });

    
    if (!existingLike) { //pokud ne
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const result = await prisma.$transaction(async (tx) => { //vytvoří like
        await tx.userLike.create({
          data: {
            userId: authorId.id as number,
            postId: postId
          }
        });
        //zvýší počet like u postu
        const updatedPost = await tx.post.update({
          where: { id: postId },
          data: { likes: { increment: 1 } }
        });
  
        return updatedPost;
      });

    return NextResponse.json({ likes: result.likes, like:true  });
  }
  else {
    //pokud uživatel již dal like, tak se like odstraní
    const deleteLike = await prisma.$transaction(async (tx) => {
      await tx.userLike.deleteMany({
        where: {
          AND: [
            { postId: postId },
            { userId: authorId.id as number }
          ]
        }
      })
    });
    const result = await prisma.post.update({
      where: { id: postId },
      data: { likes: { decrement: 1 } }
    });
      return NextResponse.json({ likes: result.likes, like:false });
    }
  } catch (error) {
    console.error('Error processing like:', error);
    return NextResponse.json(
      { error: "Failed to update like count" }, 
      { status: 500 }
    );
  }
}