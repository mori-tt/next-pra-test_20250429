"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { works } from "@/data/works";

type CategoryPageProps = {
  category: string;
};

export default function CategoryPage({ category }: CategoryPageProps) {
  // カテゴリに対応する作品詳細を取得
  const work = works[category];

  // 作品が存在しない場合
  if (!work) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">作品情報が見つかりません</h1>
          <Link href="/works" className="mt-4 inline-block">
            <Button>作品一覧に戻る</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 pt-24 md:pt-32 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-sm text-neutral-500 uppercase tracking-wider">
              {work.client} | {work.year}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {work.title}
            </h1>
            <p className="text-xl text-neutral-700 mb-10">{work.description}</p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <img
              src={work.image}
              alt={work.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">プロジェクト概要</h2>
              <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
                {work.details.overview}
              </p>

              <h2 className="text-2xl font-bold mb-6">課題</h2>
              <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
                {work.details.challenge}
              </p>

              <h2 className="text-2xl font-bold mb-6">ソリューション</h2>
              <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
                {work.details.solution}
              </p>

              <h2 className="text-2xl font-bold mb-6">結果</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {work.details.results}
              </p>
            </div>

            <div>
              <div className="bg-neutral-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6">プロジェクト情報</h3>

                <div className="mb-6">
                  <h4 className="text-sm text-neutral-500 mb-2">
                    クライアント
                  </h4>
                  <p className="font-medium">{work.client}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm text-neutral-500 mb-2">年度</h4>
                  <p className="font-medium">{work.year}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm text-neutral-500 mb-2">カテゴリー</h4>
                  <p className="font-medium">{work.categoriesjp.join(" · ")}</p>
                </div>

                <div>
                  <h4 className="text-sm text-neutral-500 mb-2">使用技術</h4>
                  <ul className="space-y-1">
                    {work.details.technologies.map((tech, index) => (
                      <li key={index} className="font-medium">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {work.details.clientFeedback && (
                <div className="mt-8 bg-black text-white p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-6">クライアントの声</h3>
                  <p className="italic leading-relaxed">
                    &ldquo;{work.details.clientFeedback}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            プロジェクトギャラリー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {work.details.projectImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl">
                <div className="relative aspect-video w-full">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-neutral-700">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">次のプロジェクト</h2>
          <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
            他のプロジェクトやお問い合わせはこちらから
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/works">
              <Button variant="outline" className="min-w-[160px]">
                実績一覧
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-neutral-800 min-w-[160px]">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}