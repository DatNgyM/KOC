/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cf.shopee.vn', pathname: '/**' },
      { protocol: 'https', hostname: 'shopee.vn', pathname: '/**' },
    ],
  },
}

module.exports = nextConfig

