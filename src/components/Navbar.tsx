"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import Link from "next/link";

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
        { href: "/search", text: "Search" },
        { href: "/friends", text: "Friends" },
        { href: "/Map", text: "Map" },
        { href: "/groups", text: "Groups" },
    ];

    return (
        <>
            {/* static left sidebar (smaller, no top header) */}
            <aside
                className="fixed top-0 left-0 z-50 h-full w-56 bg-zinc-900 border-r border-zinc-800"
                aria-label="Sidebar"
            >
                <div className="px-4 py-3 border-b border-zinc-800">
                    <Link href="/" className="text-white font-semibold text-lg">
                        SportTracker
                    </Link>
                </div>

                <nav className="px-3 py-4 space-y-1">
                    {Links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block px-3 py-2 rounded text-sm ${
                                pathname === link.href ? "text-indigo-400" : "text-white"
                            } hover:text-indigo-300`}
                        >
                            {link.text}
                        </Link>
                    ))}

                    {session?.user && (
                        <div className="mt-4 border-t border-zinc-800 pt-3 text-xs text-gray-300 px-3">
                            <div className="font-medium text-white truncate">{session.user.name}</div>
                            <div className="text-xs text-gray-400 truncate">{session.user.email}</div>
                        </div>
                    )}
                </nav>
            </aside>
        </>
    );
}
