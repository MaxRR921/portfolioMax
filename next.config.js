/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables best practices
  experimental: {
    appDir: true, // Ensures App Router is used
    mdxRs: true, // Enables MDX support
  },
  pageExtensions: ["ts", "tsx", "mdx"], // Ensures MDX works
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
