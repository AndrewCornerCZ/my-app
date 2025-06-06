import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
    try {
    const {text, authorId, postId} = await req.json();
    console.log("Received data:", {text, authorId, postId});
    if (!text || !authorId) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

        const result = await prisma.$transaction(async (tx) => {
            const comment = await tx.comment.create({
                data: {
                    text,
                    authorId: authorId,
                }
            });
            return comment;
        });
        await prisma.postComment.create(
            {
                data: {
                    postId: postId,
                    commentId: result.id,
                }
            }
        )
    
    return NextResponse.json(result, { status: 201 });
    }
    catch (error) {
        console.error("Error in POST /api/comment:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}