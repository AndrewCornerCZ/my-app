'use client';

import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
  createdAt: string | Date;
  authorUsername: string;
}

interface ShowCommentsModalProps {
  comments: Comment[];
  postId: number;
  totalCount: number;
}

const COMMENTS_PER_PAGE = 5;

export default function ShowCommentsModal({ comments, postId, totalCount }: ShowCommentsModalProps) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
  const visible = comments.slice(page * COMMENTS_PER_PAGE, (page + 1) * COMMENTS_PER_PAGE);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => { setOpen(true); setPage(0); }}
        className="flex items-center gap-1.5 text-gray-500 hover:text-teal-400 transition-colors duration-200 text-sm font-medium group"
      >
        <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        <span>{totalCount}</span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-lg bg-gray-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div>
                <h2 className="text-lg font-extrabold tracking-tight text-white">
                  Comments
                  <span className="ml-2 text-sm font-medium text-gray-500">({totalCount})</span>
                </h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors duration-200 text-gray-400 hover:text-white"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Comments list */}
            <div className="px-6 py-4 space-y-3 min-h-[200px]">
              {comments.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">No comments yet. Be the first!</p>
                </div>
              ) : (
                visible.map((comment, i) => (
                  <div
                    key={comment.id}
                    className="bg-white/5 border border-white/8 rounded-2xl px-4 py-3"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <p className="text-white text-sm leading-relaxed mb-2 whitespace-pre-line">{comment.text}</p>
                    <div className="flex items-center justify-between">
                      <a
                        href={`/userprofile/${comment.authorUsername}`}
                        className="text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200"
                      >
                        @{comment.authorUsername}
                      </a>
                      <span className="text-xs text-gray-600">
                        {new Date(comment.createdAt).toLocaleString([], {
                          month: 'short', day: 'numeric',
                          hour: '2-digit', minute: '2-digit'
                        })}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setPage(p => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:border-teal-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                  </svg>
                  Prev
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        page === i
                          ? 'bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow shadow-teal-900/40'
                          : 'bg-white/5 border border-white/10 text-gray-500 hover:text-white hover:border-teal-500/30'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:border-teal-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Next
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}