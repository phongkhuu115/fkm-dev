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
  webpack(config) {
    const assetRule = config.module.rules.find(
      (rule: any) => rule?.test?.test?.('.svg')
    );
    if (assetRule) {
      assetRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        { loader: '@svgr/webpack', options: svgrOptions },
      ],
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
};

export default nextConfig;
