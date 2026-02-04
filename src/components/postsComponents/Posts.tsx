import React from 'react';
import Image from 'next/image';

import { getServerSession } from 'next-auth/next';
import { options } from '../../app/api/auth/[...nextauth]/options';
import LikeButton from './LikeButton';
import {Hashtag } from '../../../prisma/generated/prisma/client';
import {prisma} from "@/lib/db";
import AddCommentButton from './AddCommentButton';
import ShowComments from './ShowCommentsButton';

 const Posts = async () => {
  const session = await getServerSession(options)

const posts = await prisma.post.findMany({
  orderBy: {
    created_at: 'desc',
  }
});

const hashtagsmap = new Map<number, Hashtag[]>();
const usernamesmap = new Map<number, string[]>();
const userimagesmap = new Map<number, string>();
const commentsmap = new Map<number, number>();

for (const post of posts) {
  const hashtags = await prisma.postHashtag.findMany({
    where: {
      postId: post.id,
    },
    include: {
      hashtag: true,
    }
  });
  hashtagsmap.set(post.id, hashtags.map((postHashtag) => postHashtag.hashtag));

  const usernames = await prisma.user.findMany({
    where: {
      id: post.authorId 
    }
  });
    usernamesmap.set(post.id, usernames.map((user) => user.username));
    userimagesmap.set(post.id, usernames[0]?.image || '');
}
const likedPosts = await prisma.userLike.findMany({
  where: {
    userId: session?.user.id,
  },
});
const likedPostsBoolean = new Map<number, boolean>();
for (const post of posts) {
for (const likedPost of likedPosts) {
  if (post.id === likedPost.postId) {
    likedPostsBoolean.set(post.id, true);
  } else {
    likedPostsBoolean.set(post.id, false);
  }
}

for (const post of posts) {
  const comments = await prisma.postComment.findMany({
    where: {
      postId: post.id,
    },
  });
  commentsmap.set(post.id, comments.length);
}

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {posts.map((post) => (
        
        <div
          key={post.id}
          className="w-full max-w-xl bg-zinc-900 border border-zinc-700 rounded-xl p-5 shadow-md"
        >
          {/* Username */}
          <div className="flex items-center gap-2 mb-2">
            <div className="relative w-10 h-10 flex-shrink-0">
              {userimagesmap.get(post.id) ? (
                <Image
                  src={userimagesmap.get(post.id)!}
                  alt={`${usernamesmap.get(post.id)}'s profile`}
                  fill
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-lg text-white font-bold">
                    {usernamesmap.get(post.id)?.[0]?.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <a href={`/userprofile/${usernamesmap.get(post.id)}`} className="text-white font-semibold">@{usernamesmap.get(post.id)}</a>
          </div>
        
          {/* Post text */}
          <p className="text-white text-lg mb-3 whitespace-pre-line">
            {post.text}
          </p>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {hashtagsmap.get(post.id)?.map((hashtag) => (
              <a href={`/searchresults?searchTerm=${hashtag.text}&filter=hashtags`}
                key={hashtag.id}
                className="text-indigo-400 hover:underline cursor-pointer"
              >
                #{hashtag.text}
              </a>
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
          <div className="flex items-center gap-4 mt-3">
            <LikeButton 
              postId={post.id} 
              initialLikes={post.likes} 
              liked={likedPosts.some(likedPost => likedPost.postId === post.id)}
            />
            <ShowComments 
              postId={post.id}
              comments={commentsmap.get(post.id) || 0} // Get the count from the Map or default to 0
            />
            <AddCommentButton postId={post.id } />
          </div>

        </div>

        
      )
      )}
    </div>
  );
};
 }

export default Posts;