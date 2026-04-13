import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isProd ? '/new-epag-website' : '',
    assetPrefix: isProd ? '/new-epag-website' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
