import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension:/\.mdx?$/,
  options:{
    remarkPlugins:[],
    rehypePlugins:[]
  }
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', "md",'mdx', 'ts', 'tsx'],
  experimental:{
    mdxRs:true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
    ],
  },
};

export default withMDX(nextConfig);
