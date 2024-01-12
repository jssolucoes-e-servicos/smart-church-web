/** @type {import('next').NextConfig} */
 const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/app",
        permanent: false,
      },
    ];
  },
}; 

module.exports = nextConfig;