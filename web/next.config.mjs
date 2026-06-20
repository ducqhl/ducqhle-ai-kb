/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → host anywhere (also fine on Vercel). `npm run dev` still works.
  output: "export",
  images: { unoptimized: true },
  // Trailing slash keeps relative asset paths happy on plain static hosts.
  trailingSlash: true,
};

export default nextConfig;
