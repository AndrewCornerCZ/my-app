"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

import Link from "next/link";

const Navbar = () => {
    const [session, setSession] = useState<Session | null>(null);
    const pathname = usePathname();
    useEffect(() => {
        const fetchSession = async () => {
            const sess = await getSession();
            setSession(sess);
        };
        fetchSession();
    }, []);
  const Links = [
    { href: `/userprofile/${session?.user?.name || ""}`, text: "Profile" },
    { href: "/", text: "Home" },
    { href: "/search", text: "Search" },
    { href: "/friends", text: "Friends" },
  ];

  return (
    <nav className="bg-zinc-900 border-4 border-neutral-900 border-b-indigo-500 p-3">
      <ul className="flex flex-row justify-between">
        {Links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-indigo-500"
                  : "text-white"
              } hover:text-indigo-400 transition-colors`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
