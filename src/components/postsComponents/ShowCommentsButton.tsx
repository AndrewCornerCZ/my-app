import { prisma } from '@/lib/db';
import ShowCommentsModal from './ShowCommentsModal';

interface ShowCommentsProps {
  postId: number;
  comments: number; // count shown on button before opening
}

const ShowComments = async ({ postId, comments: commentCount }: ShowCommentsProps) => {
  const comments = await prisma.comment.findMany({
    where: {
      PostComment: {
        some: { postId: Number(postId) },
      },
    },
    include: { PostComment: true },
    orderBy: { createdAt: 'desc' },
  });

  const users = await prisma.user.findMany({
    where: { id: { in: comments.map((c) => c.authorId) } },
  });

  const usersMap = new Map<number, string>();
  users.forEach((user) => usersMap.set(user.id, user.username));

  const serialized = comments.map((c) => ({
    id: c.id,
    text: c.text,
    createdAt: c.createdAt.toISOString(),
    authorUsername: usersMap.get(c.authorId) ?? 'unknown',
  }));

  return (
    <ShowCommentsModal
      comments={serialized}
      postId={postId}
      totalCount={commentCount}
    />
  );
};

export default ShowComments;