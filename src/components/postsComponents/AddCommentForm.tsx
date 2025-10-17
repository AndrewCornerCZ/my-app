'use client';
import React, { useState, useEffect } from 'react';
import { getSession} from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Session } from 'next-auth';

interface AddCommentFormProps {
    postId: number;
}

export default function AddCommentForm  (postId: AddCommentFormProps){
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const [session, setSession] = useState<Session | null>(null);
    console.log(postId.postId);

    useEffect(() => {
        const fetchSession = async () => {
            const sess = await getSession();
            setSession(sess);
        };
        fetchSession();
    }, []);
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
            const res = await fetch("../api/comment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({text, authorId: session?.user.id, postId: Number(postId.postId) }),
            });
            if (!res.ok) {
                console.log("Error adding comment:", res.statusText);
            } else {
                setError("");
                redirect("/");
            }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write your comment..."
                    className="border border-gray-300 rounded-md p-2"
                    required
                />
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                    Add Comment
                </button>
            </form>
        </div>
    );
};
