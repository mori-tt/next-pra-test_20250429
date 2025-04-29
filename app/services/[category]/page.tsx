import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";
import { generateAllParams, isImageRequest } from "@/utils/staticPageHelpers";
import {
  services,
  isValidServiceCategory,
  ServiceCategory,
} from "@/data/services";
import { SITE_NAME } from "@/constants/site";
import { createMetadata } from "@/utils/metadata";
import { BASE_URL } from "@/constants/site";

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

  // 有効なカテゴリかチェック
  if (!isValidServiceCategory(category)) {
    return createMetadata(
      {
        title: "サービスが見つかりません",
        description: "お探しのサービスは存在しません。",
      },
      SITE_NAME
    );
  }

  const serviceData = services[category as ServiceCategory];
  const title = serviceData.title;
  const description = `DESIGN STUDIOの${title}サービスについてご紹介します。${serviceData.description}`;
  const pageUrl = `${BASE_URL}services/${category}`;

  return createMetadata(
    {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        url: pageUrl,
        type: "article",
        images: serviceData.image ? [{ url: serviceData.image }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: serviceData.image ? [serviceData.image] : undefined,
      },
      canonical: pageUrl,
    },
    SITE_NAME
  );
}

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
