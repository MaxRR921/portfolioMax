/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true, // Keep this if using MDX
  },
  pageExtensions: ["ts", "tsx", "mdx"], // Ensures MDX pages are recognized
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
