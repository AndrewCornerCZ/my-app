'use client';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filter, setFilter] = React.useState('users');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams({
            searchTerm,
            filter,
        });
        window.location.href = `/searchresults?${params.toString()}`;
    };

    return (
        <div>
        <Navbar/>
        <form onSubmit={handleSubmit} method="get">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-4">Search</h1>
        <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex items-center mt-4">
            <label className="mr-2">Filter by:</label>
            <select className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => setFilter(e.target.value)}>
                <option value="users">Users</option>
                <option value="hashtags">Hashtags</option>
            </select>
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition duration-200">
            Search
        </button>
        </div>
        </form>
        </div>
    );
}
