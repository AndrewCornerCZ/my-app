'use client';
import React from 'react';

interface Props {
  userId: number;
}

export default function ProfileImageUploader({ userId }: Props) {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('userId', userId.toString());

    const res = await fetch('/api/username', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      window.location.reload();
    }
  };

  return (
    <>
      <label
        htmlFor="profile-image"
        className="absolute -bottom-2 -right-2 bg-indigo-600 rounded-full p-1 cursor-pointer hover:bg-indigo-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </label>
      <input
        id="profile-image"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />
    </>
  );
}
