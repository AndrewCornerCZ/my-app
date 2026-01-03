
import { prisma } from '@/lib/db';

interface ShowCommentsProps {
    postId: number;
}

const ShowComments = async ({postId}: ShowCommentsProps) => {
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
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    const users = await prisma.user.findMany({
        where: {
            id: {
                in: comments.map((comment) => comment.authorId)
            }
        }
    });
    const usersMap = new Map<number, string>();
    users.forEach((user) => {
        usersMap.set(user.id, user.username);
    });




    return(
        <div className="flex flex-col items-center gap-4 p-4">
            {comments.map((comment) => (
                <div key={comment.id} className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-white text-lg mb-3 whitespace-pre-line">{comment.text}</p>
                    <a href={`/userprofile/${usersMap.get(comment.authorId)}`} className="text-xs text-zinc-500">By: @{usersMap.get(comment.authorId)}</a>
                    <p className="text-xs text-zinc-500">On: {new Date(comment.createdAt).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
    
}
export default ShowComments;