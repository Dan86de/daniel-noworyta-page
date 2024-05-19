import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    publicRuntimeConfig: {
        modifiedDate: new Date().toISOString(),
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pliki.poprawnykod.pl',
                pathname: '/consultation_review_images/**',
            },
        ],
    },
}

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
    },
})

export default withMDX(nextConfig)