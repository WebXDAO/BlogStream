const removeImports = require('next-remove-imports')()
module.exports = removeImports({
  reactStrictMode: true,
  images: {
    domains: ['ipfs.moralis.io']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })
    return config
  }
})
