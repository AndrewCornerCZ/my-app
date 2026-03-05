import Image from 'next/image';
import { getServerSession } from 'next-auth/next';
import { options } from '../../app/api/auth/[...nextauth]/options';
import { prisma } from '@/lib/db';

import LikeButton from './LikeButton';
import AddCommentButton from './AddCommentButton';
import ShowComments from './ShowCommentsButton';
import { Hashtag, Post, PostComment, PostHashtag, UserLike } from '../../../prisma/generated/prisma/client';

const Posts = async () => {
  const session = await getServerSession(options);

  if (!session?.user?.id) {
    return <div className="text-white">Not authenticated</div>;
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      following: true,
      sports: { include: { sport: true } },
    },
  });

  if (!user) return <div className="text-white">User not found</div>;

  const posts = await prisma.post.findMany({
    include: {
      userLikes: true,
      PostComment: true,
      postHashtags: { include: { hashtag: true } },
    },
    take: 200,
  });

  const authorIds = [...new Set(posts.map(p => p.authorId))];
  const authors = await prisma.user.findMany({
    where: { id: { in: authorIds } },
    select: { id: true, username: true, image: true },
  });
  const authorMap = new Map(authors.map(a => [a.id, a]));

  const followingIds = new Set(user.following.map(f => f.followingId));
  const userSports = new Set(user.sports.map(s => s.sport.name.toLowerCase()));

  const userPosts = await prisma.post.findMany({
    where: { authorId: user.id },
    include: { postHashtags: { include: { hashtag: true } } },
  });

  const usedHashtags = new Map<string, number>();
  userPosts.forEach(post => {
    post.postHashtags.forEach(ph => {
      const tag = ph.hashtag.text.toLowerCase();
      usedHashtags.set(tag, (usedHashtags.get(tag) ?? 0) + 1);
    });
  });

  type PostWithRelations = Post & {
    userLikes: UserLike[];
    PostComment: PostComment[];
    postHashtags: (PostHashtag & { hashtag: Hashtag })[];
  };

  function calculatePostScore(post: PostWithRelations): number {
    let score = 0;
    if (followingIds.has(post.authorId)) score += 50;
    score += post.userLikes.length;
    score += post.PostComment.length;
    post.userLikes.forEach((like) => {
      user?.following.forEach((follow) => {
        if (follow.followingId === like.userId) score += 10;
      });
      if (like.userId === session?.user.id) score -= 100;
    });
    post.postHashtags.forEach((ph) => {
      const tag = ph.hashtag.text.toLowerCase();
      if (usedHashtags.has(tag)) score += 20 * (usedHashtags.get(tag) ?? 1);
      if (userSports.has(tag)) score += 20;
    });
    if (post.authorId === session?.user.id) score -= 100;
    const hoursOld = (Date.now() - new Date(post.created_at).getTime()) / 36e5;
    if (hoursOld < 1) score += 30;
    else if (hoursOld < 6) score += 20;
    else if (hoursOld < 24) score += 10;
    else if (hoursOld > 72) score -= hoursOld - 72;
    return score;
  }

  const feed = posts
    .map(post => ({ post, score: calculatePostScore(post) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 30)
    .map(item => item.post);

  const likedPosts = await prisma.userLike.findMany({ where: { userId: user.id } });
  const likedPostIds = new Set(likedPosts.map(lp => lp.postId));

  // Helper: relative time
  function relativeTime(date: Date): string {
    const diff = (Date.now() - new Date(date).getTime()) / 1000;
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {feed.map(post => {
        const author = authorMap.get(post.authorId);

        return (
          <div
            key={post.id}
            className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-3xl p-5 shadow-xl backdrop-blur-sm transition-all duration-200"
          >
            {/* Author row */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                {author?.image ? (
                  <Image
                    src={author.image}
                    alt="profile"
                    fill
                    className="rounded-full object-cover ring-2 ring-white/10"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-700 rounded-full flex items-center justify-center ring-2 ring-white/10 shadow shadow-teal-900/40">
                    <span className="text-white font-bold text-sm">
                      {author?.username?.[0]?.toUpperCase() ?? '?'}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <a
                  href={`/userprofile/${author?.username}`}
                  className="text-white font-semibold text-sm hover:text-teal-300 transition-colors duration-200"
                >
                  @{author?.username}
                </a>
                <span className="text-gray-600 text-xs">{relativeTime(post.created_at)}</span>
              </div>
            </div>

            {/* Post text */}
            <p className="text-gray-100 text-sm leading-relaxed mb-4 whitespace-pre-line">
              {post.text}
            </p>

            {/* Hashtags */}
            {post.postHashtags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.postHashtags.map(ph => (
                  <a
                    key={ph.hashtag.id}
                    href={`/searchresults?searchTerm=${ph.hashtag.text}&filter=hashtags`}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 hover:bg-teal-500/20 hover:border-teal-400/40 transition-all duration-200"
                  >
                    #{ph.hashtag.text}
                  </a>
                ))}
              </div>
            )}

            {/* Divider */}
            <div className="h-px bg-white/5 mb-3" />

            {/* Actions */}
            <div className="flex items-center gap-4">
              <LikeButton
                postId={post.id}
                initialLikes={post.userLikes.length}
                liked={likedPostIds.has(post.id)}
              />
              <ShowComments
                postId={post.id}
                comments={post.PostComment.length}
              />
              <AddCommentButton postId={post.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;