import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // This tells Next.js where the root of your monorepo is
    // to stop that yellow warning
  },
};

export default nextConfig;