'use client'
import React from 'react'

const SettingsButton = () => {
    return (
        <div className="flex justify-end w-full">
            <button 
                className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-800 transition duration-200" 
                onClick={() => window.location.href = '/settings'}
            >
                Settings
            </button>
        </div>
    )
}

export default SettingsButton