import React from 'react';

import {prisma} from "@/lib/db";
import AddCommentButton from './AddCommentButton';
import LikeButton from './LikeButton';
import { getServerSession } from 'next-auth/next';
import { options } from '../../app/api/auth/[...nextauth]/options';


interface GeneratePostProps {
    searchpostId: number;
}

 export default async function GeneratePost({searchpostId}: GeneratePostProps){
    const session = await getServerSession(options)

const post = await prisma.post.findUnique({
where : {
    id: searchpostId
    },
    include: {
      postHashtags: {
        include: {
          hashtag: true,
        },
      },
      userLikes: {
        where: {
          userId: session?.user.id,
        },
      }
    }
});
const user = await prisma.user.findUnique({
    where: {
        id: post?.authorId,
    },
    });
if (!post) {
    return <div className='text-white'>Post not found</div>;
  }



  return (
    <div className="flex flex-col items-center gap-4 p-4">
    <div className="w-full max-w-xl bg-zinc-900 border border-zinc-700 rounded-xl p-5 shadow-md">
        {/* Username */}
        <div className="flex items-center gap-2 mb-2">
            <a href={`/userprofile/${user?.username}`} className="text-white font-semibold">@{user?.username}</a>
        </div>

        {/* Post text */}
        <p className="text-white text-lg mb-3 whitespace-pre-line">
            {post.text}
        </p>

        {/* Hashtags */}
        <div className="flex flex-wrap gap-2 mb-3">
            {post.postHashtags.map(({ hashtag }) => (
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
                liked={post.userLikes.map((like) => like.postId).includes(post.id)}
            />
            <AddCommentButton postId={post.id} />
        </div>
    </div>
</div>
  );
};
 