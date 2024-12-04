/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: { domains: ["file.server.insboon.com"] },
  experimental: {
    // appDir: true,
    webpackBuildWorker: true,
    esmExternals: "loose", // required to make Konva & react-konva work
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make Konva & react-konva work
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/nppfs.servlet.do",
        destination: "https://key-server.insboon.com/nppfs.servlet.do", // Adjust the target URL as needed
      },
      {
        source: "/pluginfree/decrypt",
        destination: "https://key-server.insboon.com/pluginfree/decrypt", // Adjust the target URL as needed
      },
      // {
      //   source: "",
      //   destination: "http://localhost:8080", // Adjust the target URL as needed
      // },
    ];
  },
  // trailingSlash: true,
};

module.exports = nextConfig;
