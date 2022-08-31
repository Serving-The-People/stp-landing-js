/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      util: require.resolve("assert/"),
      url: require.resolve("url/"),
      os: require.resolve("os-browserify/browser"),
      https: require.resolve("https-browserify"),
      http: require.resolve("stream-http"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
    };

    return config;
  },
};

module.exports = nextConfig;
