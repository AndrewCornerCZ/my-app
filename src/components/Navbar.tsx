"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import Link from "next/link";
import Image from "next/image";

const SIDEBAR_WIDTH_PX = 240;

const NAV_LINKS = [
  {
    href: "/",
    text: "Home",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
      </svg>
    ),
  },
  {
    href: "/search",
    text: "Search",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>
    ),
  },
  {
    href: "/friends",
    text: "Friends",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
      </svg>
    ),
  },
  {
    href: "/Map",
    text: "Map",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    ),
  },
  {
    href: "/groups",
    text: "Groups",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
      </svg>
    ),
  },
  {
    href: "/AddPost",
    text: "Add Post",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
      </svg>
    ),
    accent: true,
  },
];

export default function Navbar() {
  const [session, setSession] = useState<Session | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getSession().then(setSession);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.paddingLeft = "0";
    } else {
      document.body.style.paddingLeft = `${SIDEBAR_WIDTH_PX}px`;
    }
    
    return () => { 
      document.body.style.paddingLeft = ""; 
    };
  }, [isMobile]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Header */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-40 h-16 bg-gray-950/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4">
          <Link href="/" className="flex items-center justify-center">
            <img src="/assety/BEFIT_Logo.png" alt="BeFit" className="h-10 w-10 object-contain" />
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full flex flex-col bg-gray-950 border-r border-white/10
          transition-all duration-300 ease-in-out
          ${isMobile 
            ? `w-64 ${isOpen ? "translate-x-0" : "-translate-x-full"} pt-16` 
            : `w-60`
          }
        `}
        style={!isMobile ? { width: SIDEBAR_WIDTH_PX } : undefined}
        aria-label="Sidebar"
      >
        <div className="pointer-events-none absolute -top-16 -left-16 w-48 h-48 rounded-full bg-teal-700 opacity-20 blur-3xl" />

        {/* Logo - Hidden on mobile (shown in header) */}
        {!isMobile && (
          <div className="relative z-10 flex items-center justify-center px-4 py-6 border-b border-white/10">
            <Link href="/" className="flex items-center justify-center">
              <img src="/assety/BEFIT_Logo.png" alt="BeFit" className="h-16 w-16 object-contain" />
            </Link>
          </div>
        )}

        {/* Nav links */}
        <nav className="relative z-10 flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  link.accent
                    ? isActive
                      ? "bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-lg shadow-teal-900/40"
                      : "bg-gradient-to-r from-teal-400/10 to-teal-600/10 border border-teal-500/20 text-teal-300 hover:from-teal-400/20 hover:to-teal-600/20 hover:border-teal-500/40"
                    : isActive
                    ? "bg-teal-500/15 border border-teal-500/30 text-teal-300"
                    : "text-gray-500 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <span className={`flex-shrink-0 transition-colors duration-200 ${
                  isActive ? (link.accent ? "text-white" : "text-teal-400") : "text-gray-600 group-hover:text-gray-300"
                }`}>
                  {link.icon}
                </span>
                <span>{link.text}</span>
                {isActive && !link.accent && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User profile */}
        <div className="relative z-10 border-t border-white/10 p-3">
          {session?.user ? (
            <Link
              href={`/userprofile/${session.user.name}`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200 group"
            >
              <div className="relative w-9 h-9 flex-shrink-0">
                {session.user.image ? (
                  <Image
                    src={session.user.image as string}
                    alt={`${session.user.name}'s profile`}
                    fill
                    className="rounded-xl object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-700 rounded-xl flex items-center justify-center shadow shadow-teal-900/40">
                    <span className="text-sm text-white font-extrabold">
                      {session.user.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-teal-400 border-2 border-gray-950 rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold truncate group-hover:text-teal-300 transition-colors duration-200">
                  {session.user.name}
                </p>
                <p className="text-gray-600 text-xs truncate">View profile</p>
              </div>
              <svg className="w-3.5 h-3.5 text-gray-700 group-hover:text-teal-500 transition-colors duration-200 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          ) : (
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold hover:brightness-110 transition-all duration-200"
            >
              Sign in
            </Link>
          )}
        </div>
      </aside>

      {/* Mobile spacer */}
      {isMobile && <div className="h-16" />}
    </>
  );
}