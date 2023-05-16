/** @type {import('next').NextConfig} */
console.log("nextauth_urk", process.env.NEXTAUTH_URL)
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
