'use client';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filter, setFilter] = React.useState('users');
    const [focused, setFocused] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams({ searchTerm, filter });
        window.location.href = `/searchresults?${params.toString()}`;
    };

    const filters = [
        {
            value: 'users',
            label: 'Users',
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
            ),
        },
        {
            value: 'hashtags',
            label: 'Hashtags',
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/>
                    <line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>
                </svg>
            ),
        },
        {
            value: 'groups',
            label: 'Groups',
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
            <Navbar />

            <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
            <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-24">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-center">
                    Find your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                        community
                    </span>
                </h1>
                <p className="text-gray-500 text-sm mb-10">Discover users, topics and groups</p>

                <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
                    <form onSubmit={handleSubmit}>

                        {/* Search input */}
                        <div className="relative mb-4">
                            <svg
                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${focused ? 'text-teal-400' : 'text-gray-600'}`}
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                            >
                                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                            <input
                                type="text"
                                placeholder="Search for someone, topic or group..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                            />
                        </div>

                        {/* Filter pills */}
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Search in</p>
                        <div className="flex gap-2 mb-6">
                            {filters.map(f => (
                                <button
                                    key={f.value}
                                    type="button"
                                    onClick={() => setFilter(f.value)}
                                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-xs font-medium transition-all duration-200 ${
                                        filter === f.value
                                            ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                                            : 'bg-transparent border-white/10 text-gray-500 hover:border-teal-700/40 hover:text-gray-300'
                                    }`}
                                >
                                    {f.icon}
                                    {f.label}
                                </button>
                            ))}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-teal-900/40 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}