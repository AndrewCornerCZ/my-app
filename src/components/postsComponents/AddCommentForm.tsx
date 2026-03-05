'use client';
import React, { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Session } from 'next-auth';

interface AddCommentFormProps {
  postId: number;
}

export default function AddCommentForm({ postId }: AddCommentFormProps) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const sess = await getSession();
      setSession(sess);
    };
    fetchSession();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('../api/comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, authorId: session?.user.id, postId: Number(postId) }),
    });
    setLoading(false);
    if (!res.ok) {
      setError('Something went wrong. Please try again.');
    } else {
      setError('');
      redirect('/');
    }
  };

  return (
    <div className="mt-4 pt-4 border-t border-white/10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          rows={3}
          required
          className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm resize-none outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
        />
        {error && (
          <p className="text-red-400 text-xs px-1">{error}</p>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading || !text.trim()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-teal-900/40 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200"
          >
            {loading ? (
              <>
                <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Posting...
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                Post Comment
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}