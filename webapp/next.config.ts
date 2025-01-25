import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/cars/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: process.env.VERCEL_URL || "de-cars.vercel.app",
        port: "",
        pathname: "/cars/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
