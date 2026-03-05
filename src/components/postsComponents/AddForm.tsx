'use client';
import React, { useState, useEffect, useRef } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Session } from 'next-auth';
import Navbar from '@/components/Navbar';

export default function AddForm() {
  const [hashtag, setHashtag] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const submittingRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const sess = await getSession();
      setSession(sess);
    };
    fetchSession();
  }, []);

  // Parse hashtags from input — split by space, filter empty
  const parsedTags = hashtag
    .split(' ')
    .map(t => t.trim())
    .filter(t => t.length > 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setLoading(true);

    try {
      const res = await fetch('../api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, hashtag, authorId: session?.user.id }),
      });

      if (!res.ok) {
        setError('Something went wrong. Please try again.');
        submittingRef.current = false;
      } else {
        setError('');
        router.push('/');
      }
    } catch {
      setError('Something went wrong. Please try again.');
      submittingRef.current = false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />

      <Navbar />

      <div className="relative z-10 flex items-center justify-center px-4 pt-28 pb-16">
        <div className="w-full max-w-lg">

          {/* Back */}
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-teal-400 text-sm mb-6 transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
            Back
          </button>

          {/* Header */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">Share</p>
            <h1 className="text-2xl font-extrabold tracking-tight">
              New{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                Post
              </span>
            </h1>
          </div>

          {/* Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Hashtag field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Hashtags
                  </label>
                  <span className="text-xs text-gray-600">
                    {parsedTags.length > 0 ? `${parsedTags.length} tag${parsedTags.length > 1 ? 's' : ''}` : ''}
                  </span>
                </div>

                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-teal-500 text-sm font-bold">#</span>
                  <input
                    type="text"
                    value={hashtag}
                    onChange={(e) => setHashtag(e.target.value)}
                    placeholder="running fitness my_post..."
                    className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                  />
                </div>

                {/* Hint */}
                <div className="flex items-start gap-1.5 mt-2 px-0.5">
                  <svg className="w-3 h-3 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
                  </svg>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Separate tags with a <kbd className="px-1 py-0.5 rounded bg-white/10 text-gray-400 text-xs font-mono">space</kbd>.
                    For multi-word tags use <kbd className="px-1 py-0.5 rounded bg-white/10 text-gray-400 text-xs font-mono">_</kbd> e.g. <span className="text-teal-600">my_post</span>
                  </p>
                </div>

                {/* Live tag preview */}
                {parsedTags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {parsedTags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400"
                      >
                        <span className="text-teal-600 font-bold">#</span>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  Content
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="What's on your mind?"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 resize-none"
                />
                <p className="text-right text-xs text-gray-600 mt-1">{text.length} chars</p>
              </div>

              {error && <p className="text-red-400 text-xs px-1">{error}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !text.trim()}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-teal-900/40 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Posting...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    Post
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}