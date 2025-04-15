'use client';
import React, { useState, useEffect } from 'react';
import { getSession} from 'next-auth/react';
import { redirect } from 'next/navigation';


export default function AddForm  (){
    const [hashtag, setHashtag] = useState("");
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const [session, setSession] = useState<any>(null);

    useEffect(() => {
        const fetchSession = async () => {
            const sess = await getSession();
            setSession(sess);
        };
        fetchSession();
    }, []);
    console.log(session?.user.email);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

            
            const res = await fetch("../api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text, hashtag, authorEmail: session?.user.email }),
            });

            if (!res.ok) {

            } else {
                setError("");
                redirect("/");
            }
    };

    return (
        <div className="flex flex-col items-left justify-center font-[18px] m-[20px]">
            <form className="flex flex-col items-left justify-center font-[18px] m-[20px]" onSubmit={handleSubmit}>
                <label className="text-indigo-500">Theme</label>
                <input
                    className="border border-indigo-500 rounded-lg p-2 m-2"
                    value={hashtag}
                    onChange={(e) => setHashtag(e.target.value)}
                />
                <label className="text-indigo-500">Content</label>
                <textarea
                    className="border border-indigo-500 rounded-lg p-2 m-2"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="bg-indigo-500 text-white p-2 m-2" type="submit">Submit</button>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
};
