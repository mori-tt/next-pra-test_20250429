"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { services as servicesData } from "@/data/services";

export default function ServicesPage() {
  // servicesオブジェクトを配列に変換
  const servicesArray = Object.values(servicesData);
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">サービス</h1>
            <p className="text-lg text-neutral-600">
              私たちは、デザインの力でビジネスの成長をサポートします。
              クライアント様の課題解決と目標達成に向けて、最適なソリューションを提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesArray.map((service) => (
              <div key={service.title} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 flex-grow">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features &&
                        service.features.slice(0, 2).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-neutral-700 text-sm"
                          >
                            <Check size={16} className="mr-2" />
                            {feature}
                          </li>
                        ))}
                    </ul>
                    <div className="mt-auto">
                      <Link href={`/services/${service.category}`}>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-black hover:text-neutral-700"
                        >
                          詳細を見る
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">お問い合わせはこちら</h2>
          <p className="text-lg mb-8 text-neutral-600 max-w-3xl mx-auto">
            プロジェクトのご相談やお見積りは、お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button className="bg-black hover:bg-neutral-800">
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}