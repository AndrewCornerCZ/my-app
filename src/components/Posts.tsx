import React from 'react';
import { useSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';
import { getServerSession }  from 'next-auth';

const prisma = new PrismaClient();
const session = await getSession();
const posts = await prisma.post.findMany({
  where: {
    authorId: session?.user.id as number,
  },
});

const Posts = () => {
    return (
            <div className="flex flex-col items-left justify-center font-[18px] m-[20px]">
            {posts.map((post) => (
                <div key={post.id} className="border border-indigo-500 rounded-lg p-2 m-2">
                    <h3 className='text-indigo-500'>{session?.user.name}</h3>
                    <p className='text-indigo-500'>{post.text}</p>
                    <p className='text-indigo-100 text-[15px]'>#{post.hashtag}</p>
                </div>
            ))}
            </div>
    );
};

export default Posts;