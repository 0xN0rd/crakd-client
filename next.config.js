const { ModuleKind } = require('typescript')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: [
      'img.icons8.com',
      'i.imgur.com',
    ],
  },
};
