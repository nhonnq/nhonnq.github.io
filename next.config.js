/** @type {import('next').NextConfig} */

const repo = 'https://github.com/nhonnq/nhonnq.github.io'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath
}

module.exports = nextConfig
