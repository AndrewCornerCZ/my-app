'use client'

import React from 'react';
import { signOut } from 'next-auth/react'

const AddLogoutButton = () => {
    return (
        <button className="bg-red-500 text-white p-2 m-2 absolute right-0 bottom-0 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-800" onClick={() => signOut()}>
            Logout
        </button>
    );
}

export default AddLogoutButton