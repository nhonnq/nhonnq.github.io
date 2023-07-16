/** @type {import('next').NextConfig} */

const repo = 'nhonnq.github.io'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    distDir: 'build'
}

module.exports = nextConfig
