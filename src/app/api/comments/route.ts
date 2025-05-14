import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const postId = searchParams.get('postId');

        if (!postId) {
            return NextResponse.json(
                { error: "Post ID is required" },
                { status: 400 }
            );
        }

        const comments = await prisma.comment.findMany({
            where: {
                PostComment: {
                    some: {
                        postId: Number(postId)
                    }
                }
            },
            include: {
                PostComment: true
            }
        });

        return NextResponse.json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        return NextResponse.json(
            { error: "Failed to fetch comments" },
            { status: 500 }
        );
    }
}