const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  output: 'export',
  assetPrefix: isProd ? 'https://casixx1.github.io/0400-react-todo/' : undefined,
}
