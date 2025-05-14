'use client'

import { useState } from 'react';
import ShowComments from './ShowComments';
import { redirect } from 'next/dist/server/api-utils';

interface ShowCommentsProps {
  postId: number;
  comments: number;
}

const ShowCommentsButton: React.FC<ShowCommentsProps> = ({ postId, comments }) => {
  const [isExpanded, setIsExpanded] = useState(false);



  return (
    <div className="relative">
      <button 
        onClick={() => window.location.href = '/Showpost?postId=' + postId} 
        className="text-zinc-400 text-sm flex items-center gap-2"
      >
        Comments
        <span className="bg-zinc-700 px-2 py-0.5 rounded-full text-xs">
          {comments}
        </span>
        {isExpanded && <span className="text-xs">(Hide)</span>}
      </button>
      
      {isExpanded && (
        <div className="absolute top-full left-0 mt-2 w-full z-10">
          <ShowComments postId={postId} />
        </div>
      )}
    </div>
  );
};

export default ShowCommentsButton;