import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'img.mbras.com.br',
      port: '',
      pathname: '/**',
    },
  ],
}
}


export default nextConfig;
