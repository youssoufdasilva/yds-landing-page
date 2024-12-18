/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/yds-landing-page" : "",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
