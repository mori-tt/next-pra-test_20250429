import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";
import { generateAllParams, isImageRequest } from "@/utils/staticPageHelpers";
import {
  validCategories,
  isValidWorkCategory,
  categoryTitles,
  works,
} from "@/data/works";
import { SITE_NAME, SPECIAL_PAGES, BASE_URL } from "@/constants/site";
import { createMetadata } from "@/utils/metadata";

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

// メタデータ生成
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // 画像リクエストの場合はデフォルトのメタデータを返す
  if (isImageRequest(category)) {
    return createMetadata({
      title: SITE_NAME,
      description: `${SITE_NAME}のイメージ`,
    });
  }

  // スラッグがworksオブジェクトに存在する場合、その作品のメタデータを返す
  if (works[category]) {
    const work = works[category];
    const title = work.title;
    const description = work.description;
    const pageUrl = `${BASE_URL}works/${category}`;

    return createMetadata(
      {
        title: title,
        description: description,
        openGraph: {
          title: title,
          description: description,
          url: pageUrl,
          type: "article",
          images: work.image ? [{ url: work.image }] : undefined,
        },
        twitter: {
          card: "summary_large_image",
          title: title,
          description: description,
          images: work.image ? [work.image] : undefined,
        },
        canonical: pageUrl,
      },
      SITE_NAME
    );
  }

  // 有効なカテゴリの場合はメタデータを返す
  if (isValidWorkCategory(category)) {
    const categoryTitle = categoryTitles[category] || category;
    const description = `${categoryTitle}に関する実績とプロジェクト事例をご紹介します。`;
    const pageUrl = `${BASE_URL}works/${category}`;

    return createMetadata(
      {
        title: categoryTitle,
        description: description,
        openGraph: {
          title: categoryTitle,
          description: description,
          url: pageUrl,
          type: "website",
        },
        twitter: {
          card: "summary_large_image",
          title: categoryTitle,
          description: description,
        },
        canonical: pageUrl,
      },
      SITE_NAME
    );
  }

  // 特殊ファイル（not-found等）の場合もメタデータを返す
  if (category === "not-found") {
    return createMetadata(
      {
        title: SPECIAL_PAGES.notFound.title,
        description: SPECIAL_PAGES.notFound.description,
      },
      SITE_NAME
    );
  }

  // 無効なカテゴリの場合はデフォルトを返す
  return createMetadata(
    {
      title: "Works",
      description: "私たちの実績とプロジェクト事例をご紹介します。",
    },
    SITE_NAME
  );
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
