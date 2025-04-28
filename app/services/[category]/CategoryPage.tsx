"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  services,
  ServiceCategory,
  iconComponents,
  isValidServiceCategory,
} from "@/data/services";

type CategoryPageProps = {
  category: string;
};

export default function CategoryPage({ category }: CategoryPageProps) {
  // カテゴリが有効かチェック
  if (!isValidServiceCategory(category)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">サービスが見つかりません</h1>
          <Link href="/services" className="mt-4 inline-block">
            <Button>サービス一覧に戻る</Button>
          </Link>
        </div>
      </div>
    );
  }

  // 有効なカテゴリの場合、サービス情報を取得
  const service = services[category as ServiceCategory];

  // アイコン名からコンポーネントを取得する関数
  const getIconComponent = (iconName: string) => {
    const IconComponent =
      iconComponents[iconName as keyof typeof iconComponents];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 flex flex-col md:flex-row items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-50 to-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,#f0f0f0,transparent)]"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#e0e0e0,transparent)]"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-neutral-700 mb-8">
                {service.description}
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-black hover:bg-neutral-800 text-white">
                  お問い合わせ
                </Button>
              </Link>
            </div>

            {/* サービスに合わせた画像を表示（モバイルでも表示） */}
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="p-6 bg-neutral-50 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold mb-4">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">メリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">制作プロセス</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="relative p-6 bg-neutral-50 rounded-lg"
              >
                <div className="flex justify-center items-center text-4xl my-8">
                  {getIconComponent(step.icon)}
                </div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4 text-center">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">使用技術</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech) => (
              <div
                key={tech}
                className="px-6 py-2 bg-white rounded-full shadow-md"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お問い合わせはこちら
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            プロジェクトのご相談やお見積りは、お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-100"
            >
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}