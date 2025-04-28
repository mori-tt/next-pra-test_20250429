// NODE_ENV は、開発中であれば "development"、本番環境なら "production" が設定
// isProd には本番環境の場合 true、それ以外の場合は false が入る
const isProd = process.env.NODE_ENV === "production";

// ローカルプレビュー用変数 - .env.local で LOCAL_PREVIEW=true にするとbasePath と assetPrefix が適用されなくなる
const isLocalPreview = process.env.LOCAL_PREVIEW === "true";

// 静的生成用の設定
const nextConfig = {
  output: "export",
  // ローカルプレビュー時はベースパスを空にする
  basePath: isProd && !isLocalPreview ? "/corporate-site_design" : "",
  assetPrefix: isProd && !isLocalPreview ? "/corporate-site_design/" : "",
  images: {
    // Next.js の画像最適化機能を無効。静的エクスポートを行う場合、画像最適化は使用できないため
    unoptimized: true,
  },

  // 404エラーを修正するためのカスタム設定
  trailingSlash: true,
};

module.exports = nextConfig;
