/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ⚡️ ปิด LightningCSS เพื่อให้ใช้ PostCSS ปกติแทน
    optimizeCss: false,
  },
  compiler: {
    // 🔧 ย้ำให้แน่ใจว่า Next.js ไม่ใช้ LightningCSS
    lightningcss: false,
  },
  // 🧩 ปรับ root path สำหรับ workspace warning (optional)
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;
