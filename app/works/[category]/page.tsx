
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";
import { generateAllParams, isImageRequest } from "@/utils/staticPageHelpers";
import {
  validCategories,
  isValidWorkCategory,
  categoryTitles,
  works,
} from "@/data/works";
// import { SITE_NAME, SPECIAL_PAGES } from "@/constants/site";
// import {
//   createDetailMetadata,
//   createCategoryMetadata,
//   createSpecialMetadata,
//   createImageRequestMetadata,
// } from "@/utils/metadata";

// 静的生成の設定
export const dynamic = "force-static";
export const revalidate = false;

// パラメータの型
type PageProps = {
  params: Promise<{ category: string }>;
};

// 静的パス生成
export function generateStaticParams() {
  // 作品のslug一覧を取得
  const slugs = Object.keys(works);

  // すべての有効なカテゴリとslugをパラメータとして生成
  return generateAllParams({
    categories: [...validCategories, ...slugs],
    imagePatterns: ["opengraph-image", "twitter-image", "icon"],
    specialFiles: ["not-found"],
  });
}

// ページコンポーネント
export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // 画像リクエストの場合は空のdivを返す
  if (isImageRequest(category)) {
    return <div />;
  }

  // スラッグがworksオブジェクトに存在する場合またはカテゴリが有効な場合はCategoryPageを表示
  if (works[category] || isValidWorkCategory(category)) {
    return <CategoryPage category={category} />;
  }

  // それ以外の場合は404ページを表示
  return notFound();
}