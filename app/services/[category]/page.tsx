import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";
import { generateAllParams, isImageRequest } from "@/utils/staticPageHelpers";

import {
  services,
  isValidServiceCategory,
} from "@/data/services";

// 静的生成設定
export const dynamic = "force-static";
export const revalidate = false;

// 静的生成のためのパスを生成
export async function generateStaticParams() {
  return generateAllParams({
    categories: Object.keys(services),
    imagePatterns: [".jpg"],
    specialFiles: ["logo.svg"],
  });
}

// パラメータの型定義
type PageProps = {
  params: Promise<{ category: string }>;
};

// ページコンポーネント
export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // 画像リクエストの場合は何も返さない
  if (isImageRequest(category)) {
    return null;
  }

  // 有効なカテゴリかチェック
  if (!isValidServiceCategory(category)) {
    notFound();
  }

  return <CategoryPage category={category} />;
}