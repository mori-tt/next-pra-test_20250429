"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { WorkCategory, WorkInfo } from "@/data/works";

// WorkList コンポーネントを分離して必要に応じて読み込む
const WorkList = ({ works }: { works: WorkInfo[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {works.map((work) => (
        <Link
          href={`/works/${work.slug}`}
          key={work.slug}
          className="group block overflow-hidden rounded-lg border hover:shadow-md transition-shadow"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={work.image}
              alt={work.title}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 text-sm text-neutral-500">
              {work.categoriesjp.join(" · ")}
            </div>
            <h3 className="text-lg font-medium">{work.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

type CategoryOption = {
  id: string;
  name: string;
};

type WorksClientProps = {
  initialWorks: WorkInfo[];
  categories: CategoryOption[];
};

export default function WorksClient({
  initialWorks,
  categories,
}: WorksClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    WorkCategory | "all"
  >("all");

  // selectedCategoryに基づいてワークをフィルタリング（複数カテゴリ対応）
  const filteredWorks =
    selectedCategory === "all"
      ? initialWorks
      : initialWorks.filter((work) =>
          work.categories.includes(selectedCategory)
        );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">実績</h1>
        <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
          これまでに手がけた様々なプロジェクトをご紹介します。
          各プロジェクトの詳細については、サムネイルをクリックしてください。
        </p>
      </div>

      {/* カテゴリフィルター */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() =>
              setSelectedCategory(category.id as WorkCategory | "all")
            }
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category.id
                ? "bg-black text-white"
                : "bg-neutral-100 hover:bg-neutral-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <Suspense
        fallback={<div className="mt-8 text-center">読み込み中...</div>}
      >
        <WorkList works={filteredWorks} />
      </Suspense>
    </div>
  );
}
