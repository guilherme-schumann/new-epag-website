import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/new-epag-website",
    images: {
          unoptimized: true,
    },
};

export default nextConfig;
