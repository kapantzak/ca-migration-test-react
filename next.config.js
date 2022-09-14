/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `${process.env.FALLBACK_URL}/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
