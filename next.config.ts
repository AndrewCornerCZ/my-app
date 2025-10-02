import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // přidej sem svůj host
  },
};

export default nextConfig;
