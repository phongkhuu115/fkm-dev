import type { NextConfig } from "next";

const svgrOptions = {
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupIds: false, // keep original IDs so CSS targets work
          },
        },
      },
      { name: 'removeViewBox', active: false },
    ],
  },
  titleProp: true,
  typescript: true,
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Webpack fallback (used if not running with Turbopack)
  webpack(config, { dev: isDev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /svgr/, // only use svgr to load svg if path ends with *.svg?svgr
      use: ["@svgr/webpack"],
    });

    // Re-add default nextjs loader for svg
    config.module.rules.push({
      test: /\.svg$/i,
      loader: "next-image-loader",
      issuer: { not: /\.(css|scss|sass)$/ },
      dependency: { not: ["url"] },
      resourceQuery: { not: [/svgr/] }, // Ignore this rule if the path ends with *.svg?svgr
      options: { isServer, isDev, basePath: "", assetPrefix: "" },
    });

    return config;
  },
  // Turbopack config (dev/build with --turbopack)
  turbopack: {
    rules: {
      // @ts-ignore
      '*.svg': {
        loaders: [
          { loader: '@svgr/webpack', options: svgrOptions },
        ],
        as: '*.js',
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
