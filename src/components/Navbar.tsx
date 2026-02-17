"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import Link from "next/link";
import Image from 'next/image';

const SIDEBAR_WIDTH_PX = 224; // smaller width (w-56)

export default function Navbar() {
    const [session, setSession] = useState<Session | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const fetchSession = async () => {
            const sess = await getSession();
            setSession(sess);
        };
        fetchSession();
    }, []);

    // ensure content is not covered by the static sidebar
    useEffect(() => {
        document.body.style.paddingLeft = `${SIDEBAR_WIDTH_PX}px`;
        return () => {
            document.body.style.paddingLeft = "";
        };
    }, []);

    const Links = [
        { href: `/userprofile/${session?.user?.name || ""}`, text: "Profile" },
        { href: "/", text: "Home" },
        { href: "/AddPost", text: "Add Post" },
        { href: "/search", text: "Search" },
        { href: "/friends", text: "Friends" },
        { href: "/Map", text: "Map" },
        { href: "/groups", text: "Groups" },
    ];

    return (
        <>
            {/* static left sidebar (smaller, no top header) */}
            <aside
                className="fixed top-0 left-0 z-50 h-full w-56 bg-[#1E1E1E] border-r border-gray-800 flex flex-col"
                aria-label="Sidebar"
            >
                <div className="px-4 py-6 flex items-center justify-center">
                    <Link href="/" className="text-white font-semibold text-lg">
                        <img src="/assety/BEFIT_Logo.png" alt="Logo" className="h-[97px] w-[97px] inline-block border-white-800" />
                    </Link>
                </div>

                <nav className="px-4 py-6 space-y-3 flex-1">
                    {Links.filter(link => link.text !== "Add Post" && link.text !== "Profile").map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center px-4 py-3 rounded-lg text-[20px] font-medium transition-colors ${
                                pathname === link.href 
                                  ? "bg-teal-600 text-white" 
                                  : "text-gray-300 hover:bg-gray-800"
                            }`}
                        >
                            {link.text === "Home" && <span className="mr-3">🏠</span>}
                            {link.text === "Add post" && <span className="mr-3">+</span>}
                            {link.text === "Search" && <span className="mr-3">🔍</span>}
                            {link.text === "Friends" && <span className="mr-3">👥</span>}
                            {link.text === "Groups" && <span className="mr-3">👫</span>}
                            {link.text === "Map" && <span className="mr-3">🗺️</span>}
                            {link.text}
                        </Link>
                    ))}
                </nav>

                {session?.user && (
                    <a href={`/userprofile/${session?.user?.name}`} className="border-t border-zinc-800 px-4 py-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="relative w-12 h-12 flex-shrink-0">
                          {session.user.image ? (
                            <Image
                              src={session.user.image as string}
                              alt={`${session.user.name}'s profile`}
                              fill
                              className="rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                              <span className="text-xl text-white font-bold">
                                {session.user.name?.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          )}
                        </div>
                        <span className="font-medium text-white truncate">{session.user.name}</span>
                    </a>
                )}
            </aside>
        </>
    );
}
