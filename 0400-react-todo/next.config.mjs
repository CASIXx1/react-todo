/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  output: 'export',
  assetPrefix: isProd ? 'https://casixx1.github.io' : undefined,
}

