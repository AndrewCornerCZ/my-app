'use client'
import React from 'react'

interface AddCommentButtonProps {
    postId: number;
}

const AddCommentButton = ({postId}:AddCommentButtonProps) => {
    return (
        <div className="flex justify-end w-full">
            <button 
                className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-800 transition duration-200" 
                onClick={() => window.location.href = '/AddComment?postId=' + postId}
            >
                Add Comment
            </button>
        </div>
    )
}

export default AddCommentButton
