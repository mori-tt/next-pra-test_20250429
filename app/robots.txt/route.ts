import { BASE_URL } from "@/constants/site";

/**
 * robots.txt生成
 *
 * 静的生成に対応したrobots.txtを生成します
 * このファイルは自動的に /robots.txt エンドポイントを生成します
 *
 * 注意事項:
 * - デプロイ前に constants/site.ts の BASE_URL を実際のドメインに変更してください
 * - サイトの特定のパスをクロールから除外したい場合は、Disallow ディレクティブを追加してください
 */

// 静的生成用の設定
export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const robotsTxt = `# robots.txt generated for ${BASE_URL}
# デプロイ前に BASE_URL を実際のドメインに変更してください

# すべてのロボットに適用
User-agent: *
Allow: /

# クロール除外ディレクトリの例（必要に応じて設定）
# Disallow: /admin/
# Disallow: /private/

# ホスト
Host: ${BASE_URL}

# サイトマップ
Sitemap: ${BASE_URL}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}