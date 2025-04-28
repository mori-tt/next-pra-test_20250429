/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      // Next.js の画像最適化機能を無効。静的エクスポートを行う場合、画像最適化は使用できないため
      unoptimized: true,
    },
  
    // 404エラーを修正するためのカスタム設定
    trailingSlash: true,
};

module.exports = nextConfig;