'use client'

import React from 'react';
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const AddLogoutButton = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({ redirect: false });
        router.push('/login');
    }

    return (
        <button 
            onClick={handleSignOut}
            className="bg-red-500 text-white p-2 m-2 fixed right-0 bottom-0 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-800"
        >
            Logout
        </button>
    );
}

export default AddLogoutButton