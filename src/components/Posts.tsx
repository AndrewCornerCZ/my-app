import React from 'react';
import { useSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';
import { getServerSession }  from 'next-auth';

const prisma = new PrismaClient();
const session = await getSession();

const posts = await prisma.post.findMany({
  where: {
    authorId: session?.user?.id,
  }, 
  orderBy: {
    created_at: 'desc',
  },
});
const username = session?.user?.name;
const Posts = () => {
    return (
      console.log("Session:", session),
      console.log("Session user ID:", session?.user.id),
            <div className="flex flex-col items-left justify-center font-[18px] m-[20px]">
            {posts.map((post) => (
                <div key={post.id} className="bg-zinc-900 border border-indigo-500 rounded-lg p-2 m-2">
                    <h3 className='text-indigo-500'>{username}</h3>
                    <p className='text-indigo-500'>{post.text}</p>
                    <p className='text-indigo-100 text-[15px]'>#{}</p>
                    <p className='text-indigo-100 text-[15px]'> {new Date(post.created_at).toLocaleDateString()}</p>
                    <p className="text-indigo-100 text-[15px]">
            {new Date(post.created_at).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} {/* Zobrazení času */}
          </p>
                </div>
            ))}
            </div>
    );
};

export default Posts;