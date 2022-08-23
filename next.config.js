/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
