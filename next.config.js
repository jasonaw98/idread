
/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development'
})
const nextConfig = {
  reactStrictMode: true,
    images: {
        domains: ['img.icons8.com', 'i.dailymail.co.uk'],
      },
}

module.exports = withPWA(nextConfig)
