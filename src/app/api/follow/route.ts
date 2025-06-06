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

    const { userId } = await req.json();
    
    if (!userId) {
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

    //zjistí jestli uživatel již dal follow
    const existingFollow = await prisma.userFollow.findFirst({
      where: {
        AND: [
          { followerId: authorId.id as number }, // ID uživatele, který dává follow
          { followingId: userId as number } // ID uživatele, kterému se dává follow
        ]
      }
    });

    if( !existingFollow && authorId.id !== userId) {//pokud ne
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const result = await prisma.$transaction(async (tx) => { //vytvoří like
        await tx.userFollow.create({
          data: {
            followerId: authorId.id as number,
            followingId: userId as number
          }
        });
        //zvýší počet like u postu
        const updatedUserFollower = await tx.user.update({
          where: { id: authorId.id as number },
          data: { followingCount: { increment: 1 } }
        });
        const updatedUserFollowing = await tx.user.update({
          where: { id: userId as number },
          data: { followersCount: { increment: 1 } }
        });
        return updatedUserFollower;
      });

    return NextResponse.json({follow:true  });
  }
  else {
    //pokud uživatel již dal like, tak se like odstraní
    await prisma.$transaction(async (tx) => {
      await tx.userFollow.deleteMany({
        where: {
          AND: [
            { followerId: authorId.id as number }, // ID uživatele, který dává follow
            { followingId: userId as number }
          ]
        }
      })
    });
    const updatedUserFollower = await prisma.post.update({
      where: { id: authorId.id as number},
      data: { likes: { decrement: 1 } }
    });
    const updatedUserFollowing = await prisma.user.update({
      where: { id: userId as number },
      data: { followersCount: { decrement: 1 } }
   });
    return NextResponse.json({ follow:false });
    }
  } catch (error) {
    console.error('Error processing like:', error);
    return NextResponse.json(
      { error: "Failed to update like count" }, 
      { status: 500 }
    );
  }
}