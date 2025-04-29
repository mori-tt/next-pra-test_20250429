import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import { WORKS_SECTION, BASE_URL } from "@/constants/site";
import dynamic from "next/dynamic";
import {
  works as worksData,
  WorkCategory,
  validCategories,
  categoryTitles,
} from "@/data/works";

const WorksClient = dynamic(() => import("./WorksClient"), {
  ssr: false,
  loading: () => <div>読み込み中...</div>,
});

export const metadata: Metadata = createMetadata({
  title: WORKS_SECTION.title,
  description: WORKS_SECTION.description,
  openGraph: {
    title: WORKS_SECTION.title,
    description: WORKS_SECTION.description,
    url: `${BASE_URL}works`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: WORKS_SECTION.title,
    description: WORKS_SECTION.description,
  },
  canonical: `${BASE_URL}works`,
});

// カテゴリボタン用のオプション
const workCategories = [
  { id: "all", name: "すべて" },
  ...validCategories.map((category) => ({
    id: category,
    name: categoryTitles[category as WorkCategory] || String(category),
  })),
];

export default function WorksPage() {
  const worksArray = Object.values(worksData);

  return <WorksClient initialWorks={worksArray} categories={workCategories} />;
}
