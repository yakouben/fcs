import type { NextConfig } from "next";
import path from "node:path";

// Loader path from orchids-visual-edits - use direct resolve to get the actual file
const loaderPath = require.resolve('orchids-visual-edits/loader.js');

const nextConfig: NextConfig = {
  // Export statique pour hébergement OVH Object Storage
  output: 'export',
  distDir: 'out',

  // Trailing slash important pour le mapping CDN / Object Storage
  trailingSlash: true,

  images: {
    // Images non optimisées en mode static export
    unoptimized: true,
    qualities: [60, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },

  // SEO
  generateEtags: true,
  poweredByHeader: false,

  // Optimisations
  reactStrictMode: true,

  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [loaderPath]
      }
    }
  }
} as NextConfig;

export default nextConfig;
