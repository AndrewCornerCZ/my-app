'use client'

import React from 'react';

const AddPostButton = () => {
    return (
        <button className="bg-indigo-500 rounded-full text-white p-2 m-2 absolute left-0 bottom-0" onClick={() => window.location.href = '/AddPost'}>
            + Add Post
            
        </button>
    );
}

export default AddPostButton