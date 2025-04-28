import Link from "next/link";
import { Button } from "./ui/button";
import { Globe, Palette, Award, PenTool, Film } from "lucide-react";

const ServiceCard = ({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-4 text-black group-hover:bg-black group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link href={href}>
        <Button
          variant="link"
          className="p-0 h-auto text-black hover:text-neutral-700"
        >
          詳細を見る &rarr;
        </Button>
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">サービス</h2>
          <p className="text-lg text-neutral-600">
            クライアントのビジョンを実現するための包括的なデザインサービスを提供しています。
            私たちの専門知識とクリエイティブな思考で、あらゆるプロジェクトを成功に導きます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Webデザイン"
            description="魅力的で使いやすいWebサイトで、訪問者を顧客に変える効果的なデザインを提供します。"
            icon={<Globe size={24} />}
            href="/services/web"
          />
          <ServiceCard
            title="UI/UXデザイン"
            description="ユーザーのニーズを理解し、直感的で美しいインターフェースを設計します。"
            icon={<Palette size={24} />}
            href="/services/ui"
          />
          <ServiceCard
            title="ブランディング"
            description="強力なブランドアイデンティティを構築し、競合から際立つための戦略を提供します。"
            icon={<Award size={24} />}
            href="/services/branding"
          />
          <ServiceCard
            title="グラフィックデザイン"
            description="デザインの視覚的な要素を作成し、ブランドのイメージを固める専門家です。"
            icon={<PenTool size={24} />}
            href="/services/graphic"
          />
          <ServiceCard
            title="モーションデザイン"
            description="モーショングラフィックを使用して、ブランドのイメージを固める専門家です。"
            icon={<Film size={24} />}
            href="/services/motion"
          />
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-neutral-100"
            >
              すべてのサービスを見る
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;