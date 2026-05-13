import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // eslint: {
  //   dirs: ["pages", "utils"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  // },
  eslint: {
    dirs: ["components", "app", "lib", "slices"],
  },
};

export default nextConfig;
