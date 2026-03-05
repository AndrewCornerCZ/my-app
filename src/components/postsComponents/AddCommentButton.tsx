'use client'
import React from 'react'

interface AddCommentButtonProps {
  postId: number
}

const AddCommentButton = ({ postId }: AddCommentButtonProps) => {
  return (
    <button
      onClick={() => window.location.href = '/AddComment?postId=' + postId}
      className="flex items-center gap-1.5 text-gray-500 hover:text-teal-400 transition-colors duration-200 text-sm font-medium group"
    >
      <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
      </svg>
      Comment
    </button>
  )
}

export default AddCommentButton