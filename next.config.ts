/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/PitchArN.github.io",
  images: {
    unoptimized: true, // necessary for `next export` to work with images
  },
};

module.exports = nextConfig;
