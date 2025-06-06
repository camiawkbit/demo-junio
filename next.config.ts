import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mi-home',
        permanent: false
      }
    ];
  }
};

export default nextConfig;
