/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // If your GitHub Pages site is served from a subdirectory
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Required for GitHub Pages
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
