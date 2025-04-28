import { Metadata } from "next";
import { PageMetadata } from "@/types/common";
import { BASE_URL, SITE_NAME } from "@/constants/site";

/*
 * メタデータを生成する汎用関数
 * @param options メタデータのオプション
 * @param baseTitle サイトのベースタイトル（省略時はSITE_NAMEを使用）
 * @param separator タイトルの区切り文字（省略時は " | "）
 * @returns 生成されたメタデータ
 */
export function createMetadata(
  options: PageMetadata,
  baseTitle?: string,
  separator: string = " | "
): Metadata {
  const { title, description, ...restOptions } = options;
  const baseSiteTitle = baseTitle || SITE_NAME;

  // タイトルが空でなく、baseTitleが指定されている場合は結合
  const fullTitle = baseTitle ? `${title}${separator}${baseSiteTitle}` : title;

  // 基本メタデータ
  const metadata: Metadata = {
    title: fullTitle,
    description,
    ...restOptions,
  };

  // Open Graph設定がない場合はデフォルト設定
  if (!options.openGraph) {
    metadata.openGraph = {
      title: fullTitle,
      description,
      siteName: baseSiteTitle,
      url: BASE_URL,
      type: "website",
    };
  }

  // Twitter Card設定がない場合はデフォルト設定
  if (!options.twitter) {
    metadata.twitter = {
      card: "summary_large_image",
      title: fullTitle,
      description,
    };
  }

  // canonicalがない場合はデフォルト設定
  if (!options.canonical && !options.alternates?.canonical) {
    metadata.alternates = {
      ...(options.alternates || {}),
      canonical: BASE_URL,
    };
  }

  return metadata;
}