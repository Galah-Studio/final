const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: true,  // Force disable PWA
});

const nextConfig = {};

module.exports = withPWA(nextConfig);
