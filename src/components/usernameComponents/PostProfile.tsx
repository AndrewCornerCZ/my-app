
import React from 'react';

import LikeButton from '../postsComponents/LikeButton';
import {Hashtag } from '../../../prisma/generated/prisma/client';
import {prisma} from "@/lib/db";
import AddCommentButton from '../postsComponents/AddCommentButton';
import ShowComments from '../postsComponents/ShowCommentsButton';

interface PostProfileProps {
  id: number;
}

 const PostProfile = async (id: PostProfileProps) => {
  const commentsmap = new Map<number, number>();
  const user = await prisma.user.findFirst({
    where: {
      id: Number(id.id),
    },
  });
  
  if (!user) {
    return <div className='text-white'>User not found</div>;
  }

const posts = await prisma.post.findMany({
  where: {
    authorId: user.id
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
const likedPosts = await prisma.userLike.findMany({
  where: {
    userId: user.id,
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



const username = user?.username;

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full max-w-xl bg-zinc-900 border border-zinc-700 rounded-xl p-5 shadow-md"
        >
          {/* Username */}
          <div className="flex items-center gap-2 mb-2">
            <a href={`/userprofile/${username}`} className="text-white font-semibold">@{username}</a>
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
            <LikeButton postId={post.id} initialLikes={post.likes} liked={likedPosts.some(likedPost => likedPost.postId === post.id)}/>
            <ShowComments 
              postId={post.id}
              comments={commentsmap.get(post.id) || 0} // Get the count from the Map or default to 0
            />
            <AddCommentButton postId={post.id} />
        </div>
      ))}
    </div>
  );
};
 }

export default PostProfile;