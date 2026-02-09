import React from 'react';
import Image from 'next/image';
import { getServerSession } from 'next-auth/next';
import { options } from '../../app/api/auth/[...nextauth]/options';
import { prisma } from '@/lib/db';

import LikeButton from './LikeButton';
import AddCommentButton from './AddCommentButton';
import ShowComments from './ShowCommentsButton';
import { comment } from 'postcss';
import { Console } from 'console';

const Posts = async () => {
  const session = await getServerSession(options);

  if (!session?.user?.id) {
    return <div className="text-white">Not authenticated</div>;
  }

  // =========================
  // USER
  // =========================
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      following: true,
      sports: {
        include: { sport: true },
      },
    },
  });

  if (!user) {
    return <div className="text-white">User not found</div>;
  }

  // =========================
  // POSTS
  // =========================
  const posts = await prisma.post.findMany({
    include: {
      userLikes: true,
      PostComment: true,
      postHashtags: {
        include: { hashtag: true },
      },
    },
    take: 200,
  });
  // =========================
  // AUTOŘI POSTŮ (MAPA)
  // =========================
  const authorIds = [...new Set(posts.map(p => p.authorId))];

  const authors = await prisma.user.findMany({
    where: {
      id: { in: authorIds },
    },
    select: {
      id: true,
      username: true,
      image: true,
    },
  });

  const authorMap = new Map(
    authors.map(author => [author.id, author])
  );

  // =========================
  // FOLLOWING IDS
  // =========================
  const followingIds = new Set(
    user.following.map(f => f.followingId)
  );

  // =========================
  // USER SPORTY
  // =========================
  const userSports = new Set(
    user.sports.map(s => s.sport.name.toLowerCase())
  );

  // =========================
  // HASHTAGY, KTERÉ USER POUŽÍVÁ
  // =========================
  const userPosts = await prisma.post.findMany({
    where: { authorId: user.id },
    include: {
      postHashtags: {
        include: { hashtag: true },
      },
    },
  });

  const usedHashtags = new Map<string, number>();

  userPosts.forEach(post => {
    post.postHashtags.forEach(ph => {
      const tag = ph.hashtag.text.toLowerCase();
      usedHashtags.set(tag, (usedHashtags.get(tag) ?? 0) + 1);
    });
  });

  // =========================
  // SCORING
  // =========================
  function calculatePostScore(post: any): number {
    let score = 0;

    if (followingIds.has(post.authorId)) {
      score += 50;
    }
    
    score += post.userLikes.length * 2;
    score += post.PostComment.length * 3;

    post.userLikes.forEach((like: any) => {
      user?.following.forEach((follow) => {
        if (follow.followingId === like.userId) {
          score += 10;
        }
      if (like.userId === session?.user.id) {
        score -= 20;
      }
      });
    });

    post.postHashtags.forEach((ph: any) => {
      const tag = ph.hashtag.text.toLowerCase();
      if (usedHashtags.has(tag)) {
        score += 15 * (usedHashtags.get(tag) ?? 1);
      }
    });

    post.postHashtags.forEach((ph: any) => {
      if (userSports.has(ph.hashtag.text.toLowerCase())) {
        score += 20;
      }
    });

    if (post.authorId === session?.user.id) {
      score -= 20;
    }
    const hoursOld =
      (Date.now() - new Date(post.created_at).getTime()) / 36e5;

    if (hoursOld < 1) score += 30;
    else if (hoursOld < 6) score += 20;
    else if (hoursOld < 24) score += 10;
    else if (hoursOld > 72) score -= 10;
    return score;
  }

  // =========================
  // FEED
  // =========================
  const feed = posts
    .map(post => ({
      post,
      score: calculatePostScore(post),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 30)
    .map(item => item.post);

    for (const post of feed) {
      console.log(`Post ID: ${post.id}, Score: ${calculatePostScore(post)}`);
    }
  // =========================
  // LIKED POSTS
  // =========================
  const likedPosts = await prisma.userLike.findMany({
    where: { userId: user.id },
  });

  const likedPostIds = new Set(likedPosts.map(lp => lp.postId));

  // =========================
  // RENDER
  // =========================
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {feed.map(post => {
        const author = authorMap.get(post.authorId);

        return (
          <div
            key={post.id}
            className="w-full max-w-xl bg-zinc-900 border border-zinc-700 rounded-xl p-5 shadow-md"
          >
            {/* AUTHOR */}
            <div className="flex items-center gap-2 mb-2">
              <div className="relative w-10 h-10">
                {author?.image ? (
                  <Image
                    src={author.image}
                    alt="profile"
                    fill
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {author?.username?.[0]?.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <a
                href={`/userprofile/${author?.username}`}
                className="text-white font-semibold"
              >
                @{author?.username}
              </a>
            </div>

            {/* TEXT */}
            <p className="text-white text-lg mb-3 whitespace-pre-line">
              {post.text}
            </p>

            {/* HASHTAGS */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.postHashtags.map(ph => (
                <a
                  key={ph.hashtag.id}
                  href={`/searchresults?searchTerm=${ph.hashtag.text}&filter=hashtags`}
                  className="text-indigo-400 hover:underline"
                >
                  #{ph.hashtag.text}
                </a>
              ))}
            </div>

            {/* TIME */}
            <div className="text-zinc-400 text-sm flex gap-2">
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
              <span>•</span>
              <span>
                {new Date(post.created_at).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-4 mt-3">
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
