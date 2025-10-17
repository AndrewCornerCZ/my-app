'use client'

import { useState } from 'react'

interface LikeButtonProps {
  postId: number
  initialLikes: number
  liked: boolean
}

const LikeButton = ({ postId, initialLikes, liked }: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes)
  const [isLoading, setIsLoading] = useState(false)
  const [isLiked, setIsLiked] = useState(liked)

  const handleLike = async () => {
    try {
      setIsLoading(true)
      const res = await fetch('../api/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId }),
      })

      if (res.ok) {
        const data = await res.json()
        if(data.like == true){
        setLikes(data.likes)
        setIsLiked(true)
        }
        else{
          setLikes(data.likes)
          setIsLiked(false)
        }
      }


    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className={`flex items-center gap-2 ${
        isLiked ? 'text-pink-500' : 'text-zinc-400 hover:text-pink-500'
      } transition-colors disabled:opacity-50`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>{likes}</span>
    </button>
  )
}

export default LikeButton