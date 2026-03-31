import React from 'react';
import Image from 'next/image';
import LikeButton from '../postsComponents/LikeButton';
import { Hashtag } from '../../../prisma/generated/prisma/client';
import { prisma } from '@/lib/db';
import AddCommentButton from '../postsComponents/AddCommentButton';
import ShowComments from '../postsComponents/ShowCommentsButton';

interface PostProfileProps {
  id: number;
}

function relativeTime(date: Date): string {
  const diff = (Date.now() - new Date(date).getTime()) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

const PostProfile = async ({ id }: PostProfileProps) => {
  const user = await prisma.user.findFirst({
    where: { id: Number(id) },
  });

  if (!user) {
    return <div className="text-gray-500 text-sm">User not found</div>;
  }

  const posts = await prisma.post.findMany({
    where: { authorId: user.id },
    orderBy: { created_at: 'desc' },
  });

  // Hashtags map
  const hashtagsmap = new Map<number, Hashtag[]>();
  for (const post of posts) {
    const hashtags = await prisma.postHashtag.findMany({
      where: { postId: post.id },
      include: { hashtag: true },
    });
    hashtagsmap.set(post.id, hashtags.map((ph) => ph.hashtag));
  }

  // Liked posts
  const likedPosts = await prisma.userLike.findMany({
    where: { userId: user.id },
  });
  const likedPostIds = new Set(likedPosts.map((lp) => lp.postId));

  // Comments count map
  const commentsmap = new Map<number, number>();
  for (const post of posts) {
    const count = await prisma.postComment.count({
      where: { postId: post.id },
    });
    commentsmap.set(post.id, count);
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-3xl p-5 shadow-xl backdrop-blur-sm transition-all duration-200"
        >
          {/* Author row */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex-shrink-0">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={`${user.username}'s profile`}
                  fill
                  className="rounded-full object-cover ring-2 ring-white/10 shadow shadow-teal-900/40"
                />
              ) : (
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-700 rounded-full flex items-center justify-center ring-2 ring-white/10 shadow shadow-teal-900/40">
                  <span className="text-white font-bold text-sm">
                    {user.username?.[0]?.toUpperCase() ?? '?'}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <a
                href={`/userprofile/${user.username}`}
                className="text-white font-semibold text-sm hover:text-teal-300 transition-colors duration-200"
              >
                @{user.username}
              </a>
              <span className="text-gray-600 text-xs">{relativeTime(post.created_at)}</span>
            </div>
          </div>

          {/* Post text */}
          <p className="text-gray-100 text-sm leading-relaxed mb-4 whitespace-pre-line">
            {post.text}
          </p>

          {/* Hashtags */}
          {(hashtagsmap.get(post.id)?.length ?? 0) > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {hashtagsmap.get(post.id)?.map((hashtag) => (
                <a
                  key={hashtag.id}
                  href={`/searchresults?searchTerm=${hashtag.text}&filter=hashtags`}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 hover:bg-teal-500/20 hover:border-teal-400/40 transition-all duration-200"
                >
                  #{hashtag.text}
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
              initialLikes={post.likes}
              liked={likedPostIds.has(post.id)}
            />
            <ShowComments
              postId={post.id}
              comments={commentsmap.get(post.id) ?? 0}
            />
            <AddCommentButton postId={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostProfile;