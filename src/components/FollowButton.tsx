'use client'

import { useState } from 'react'
import {prisma} from "@/lib/db";


interface FollowProps {
    userId: number
    initialFollowState: boolean
}

const FollowButton = ({ userId, initialFollowState }: FollowProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isFollow, setIsFollow] = useState(initialFollowState)


    const handleFollow = async () => {
        try {
            setIsLoading(true)
            const res = await fetch('../api/follow', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId }),
            })

            if (res.ok) {
                const data = await res.json()
                setIsFollow(data.follow)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex justify-self-end">
            <button
                onClick={handleFollow}
                disabled={isLoading}
                className={`
                    px-6 py-2 rounded-full font-medium
                    ${isFollow 
                        ? 'bg-zinc-700 text-white hover:bg-zinc-600' 
                        : 'bg-indigo-600 text-white hover:bg-indigo-500'
                    }
                    transition-all duration-200 ease-in-out
                    transform hover:scale-105
                    flex items-center gap-2
                    disabled:opacity-50 disabled:cursor-not-allowed
                    shadow-lg hover:shadow-xl
                `}
            >
                {isLoading ? (
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                ) : (
                    <>
                        {isFollow ? 'Following' : 'Follow'}
                        <span className={`text-xl ${isFollow ? 'hidden' : 'block'}`}>
                            +
                        </span>
                    </>
                )}
            </button>
        </div>
    )
}

export default FollowButton