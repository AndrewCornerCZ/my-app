'use client'
import React from 'react'

const SettingsButton = () => {
    return (
        <div className="flex justify-end w-full">
            <button 
                className="text-white px-3 py-1 rounded-md transition border-2 border-[#2E2E2E] text-base duration-200" 
                onClick={() => window.location.href = '/settings'}
            >
                Settings
            </button>
        </div>
    )
}

export default SettingsButton