
import React from 'react';
import { Hashtag, PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { options } from '../app/api/auth/[...nextauth]/options';
import LikeButton from './LikeButton';



 const Posts = async () => {
  const prisma = new PrismaClient();
  const session = await getServerSession(options)
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email as string,
    },
  });
const posts = await prisma.post.findMany({
  where: {
    authorId: user?.id
  }, 
  orderBy: {
    created_at: 'desc',
  },
});
const hashtagsmap = new Map<number, Hashtag[]>();
for (const post of posts) {
  const hashtags = await prisma.postHashtag.findMany({
    where: {
      postId: post.id,
    },
    include: {
      hashtag: true,
    },
  });
  hashtagsmap.set(post.id, hashtags.map((postHashtag) => postHashtag.hashtag));
}

const username = session?.user?.name;

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full max-w-xl bg-zinc-900 border border-zinc-700 rounded-xl p-5 shadow-md"
        >
          {/* Username */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-semibold">@{username}</span>
          </div>

          {/* Post text */}
          <p className="text-white text-lg mb-3 whitespace-pre-line">
            {post.text}
          </p>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {hashtagsmap.get(post.id)?.map((hashtag) => (
              <span
                key={hashtag.id}
                className="text-indigo-400 hover:underline cursor-pointer"
              >
                #{hashtag.text}
              </span>
            ))}
          </div>

          {/* Date and time */}
          <div className="text-zinc-400 text-sm flex gap-2">
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
            <span>•</span>
            <span>
              {new Date(post.created_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <LikeButton postId={post.id} initialLikes={post.likes}/>
        </div>
      ))}
    </div>
  );
};

export default Posts;