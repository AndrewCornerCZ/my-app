'use client'

import React from 'react';
import { usePathname } from 'next/navigation';

const Links=[
    {href:"/profile", text:'Profile'},
    {href:"/", text:'Home'},
    {href:"/friends", text:'Friends'},
];


const Navbar = () => { 
    const pathname = usePathname();
    return (
        <><nav className="bg-neutral-900 border-4 border-neutral-900 border-b-indigo-500 p-3">
        <ul className="flex flex-row justify-between">
            {Links.map((link) => (
             <li key={link.href}>
                <a
                     href={link.href}
                      className={`${pathname === link.href ? 'text-indigo-500' : 'text-white '}`}
                >
                    {link.text}
                </a>   
                </li>                            
            ))}
        </ul>
        </nav></>
    );
}

export default Navbar
