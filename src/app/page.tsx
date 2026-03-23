import React from "react";
import Posts from "@/components/postsComponents/Posts";
import Navbar from "@/components/Navbar";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />

      <Navbar />

      {/* Main content */}
      <div className="relative z-10 w-full">
        {/* Mobile padding */}
        <div className="w-full max-w-2xl mx-auto px-4 lg:px-0 pt-4 lg:pt-8 pb-8">
          <Posts />
        </div>
      </div>
    </div>
  );
}