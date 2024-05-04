/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-tpe-01.russel053.com",
      },
    ],
  },
};

module.exports = nextConfig;
