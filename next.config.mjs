/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // If your GitHub Pages site is served from a subdirectory
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Required for GitHub Pages
  images: {
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

module.exports = nextConfig;
