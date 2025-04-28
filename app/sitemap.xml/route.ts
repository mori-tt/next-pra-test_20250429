import { services } from "@/data/services";
import { works, validCategories } from "@/data/works";
import { BASE_URL } from "@/constants/site";

/**
 * 動的サイトマップ生成
 *
 * 静的生成に対応したサイトマップを生成します
 * このファイルは自動的に /sitemap.xml エンドポイントを生成します
 *
 * 注意事項:
 * - デプロイ前に constants/site.ts の BASE_URL を実際のドメインに変更してください
 * - サイト構造に変更がある場合は、このファイルの静的ページリストを更新してください
 * - 大規模サイトの場合は、複数のサイトマップファイルに分割することを検討してください
 */

// 静的生成用の設定
export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  // 現在の日付（最終更新日として使用）
  const date = new Date().toISOString().split("T")[0];

  // 静的ページのリスト
  const staticPages = [
    "", // トップページ
    "/about", // 会社概要
    "/services", // サービス一覧
    "/works", // 実績一覧
    "/contact", // お問い合わせ
    "/access", // アクセス
  ];

  // サービスカテゴリページ
  const servicePages = Object.keys(services).map(
    (category) => `/services/${category}`
  );

  // 実績カテゴリページと個別実績ページ
  const worksCategoryPages = validCategories.map(
    (category) => `/works/${category}`
  );

  const worksDetailPages = Object.keys(works).map((slug) => `/works/${slug}`);

  // すべてのページをマージ
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...worksCategoryPages,
    ...worksDetailPages,
  ];

  // XMLの生成
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((path) => {
          // トップページは優先度を高く、それ以外は標準的な優先度を設定
          const priority = path === "" ? "1.0" : "0.8";

          return `
            <url>
              <loc>${BASE_URL}${path}</loc>
              <lastmod>${date}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>`;

  // XMLレスポンスの返却
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}