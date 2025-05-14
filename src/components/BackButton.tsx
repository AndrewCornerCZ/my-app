'use client'

import React from "react";

const BackButton = () => {
    return (
        <button className="bg-blue-500 text-white p-2 m-2 fixed left-0 bottom-0 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-800" onClick={() => window.history.back()}>
            Back
        </button>
    );
}
export default BackButton;