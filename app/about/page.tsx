import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Users,
  Lightbulb,
  Star,
  Clock,
  Heart,
  MapPin,
  Train,
  Phone,
  Target,
  Eye,
  Sparkles,
} from "lucide-react";

const teamMembers = [
  {
    name: "田中 健太",
    position: "代表取締役 / クリエイティブディレクター",
    bio: "UI/UXデザインとブランド戦略の専門家。10年以上の経験を持ち、数々の企業のブランド価値向上に貢献。",
    image:
      "https://images.unsplash.com/photo-1574852859542-1b41217a7815?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "佐藤 美咲",
    position: "アートディレクター",
    bio: "デジタルとプリントの両方に精通したデザイナー。洗練された美的感覚で、プロジェクトに新しい視点をもたらします。",
    image:
      "https://plus.unsplash.com/premium_photo-1661662822053-399798abee3f?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "鈴木 大輔",
    position: "シニアWebデザイナー",
    bio: "最新のWebデザイントレンドに精通し、ユーザー体験を最優先としたデザインを得意とします。",
    image:
      "https://images.unsplash.com/photo-1579389082289-3d6922d506c4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "伊藤 由美",
    position: "UIデザイナー",
    bio: "ユーザビリティとアクセシビリティを重視したUI設計が強み。使いやすさと美しさを両立したデザインを追求します。",
    image:
      "https://images.unsplash.com/photo-1550682290-d071c75759f9?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const companyInfo = [
  { label: "会社名", value: "株式会社 DESIGN STUDIO" },
  { label: "設立", value: "2015年4月" },
  { label: "代表者", value: "田中 健太" },
  { label: "所在地", value: "東京都渋谷区******" },
  {
    label: "事業内容",
    value: "Webデザイン、ブランディング、UI/UXデザイン、グラフィックデザイン",
  },
  { label: "従業員数", value: "7名（2025年3月現在）" },
];

const historyItems = [
  { year: "2015年", event: "東京都渋谷区にて「DESIGN STUDIO」を創業" },
  { year: "2016年", event: "法人化し「株式会社 DESIGN STUDIO」へ移行" },
  { year: "2018年", event: "事業拡大に伴い、現オフィスへ移転" },
  {
    year: "2019年",
    event: "デザインアワードにて「Best Digital Agency」を受賞",
  },
  { year: "2021年", event: "UI/UXデザイン部門を強化、チーム拡大" },
  { year: "2023年", event: "年間100プロジェクト達成の節目を迎える" },
];

export default function AboutPage() {
  const values = [
    {
      title: "創造性",
      description:
        "常に新しいアイデアを追求し、クライアントのビジネスに最適な解決策を生み出します。",
      icon: <Lightbulb size={24} className="text-black" />,
    },
    {
      title: "協力",
      description:
        "クライアントとの密接な連携を大切にし、共に目標達成に向けて取り組みます。",
      icon: <Users size={24} className="text-black" />,
    },
    {
      title: "品質へのこだわり",
      description:
        "妥協のない品質を追求し、細部まで完璧に作り上げることを信念としています。",
      icon: <Star size={24} className="text-black" />,
    },
    {
      title: "誠実さ",
      description:
        "透明性のあるコミュニケーションと誠実な対応で、信頼関係を築きます。",
      icon: <Heart size={24} className="text-black" />,
    },
    {
      title: "効率性",
      description:
        "プロジェクトを効率的に進行し、期限と予算内での最高品質の成果を提供します。",
      icon: <Clock size={24} className="text-black" />,
    },
    {
      title: "結果志向",
      description:
        "デザインの美しさだけでなく、クライアントのビジネス目標達成に貢献します。",
      icon: <Target size={24} className="text-black" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">私たちについて</h1>
            <p className="text-lg text-neutral-600">
              クリエイティブな発想と確かな技術で、お客様のビジョンを実現します。
              DESIGN STUDIOの企業理念と歩みをご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">企業理念</h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              私たちDESIGN
              STUDIOは、「デザインの力でビジネスの可能性を広げる」という理念のもと、
              クライアント様のビジネス成長を支援するパートナーとして活動しています。
            </p>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              単なる見た目の美しさだけでなく、使いやすさや目的達成のための戦略的なデザインを提供することで、
              真の価値を生み出すデザインを追求しています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4 flex justify-center">
                  <Target size={40} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">ミッション</h3>
                <p className="text-neutral-600">
                  デザインを通じて、社会に新しい価値を創造する
                </p>
              </div>
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4 flex justify-center">
                  <Eye size={40} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">ビジョン</h3>
                <p className="text-neutral-600">
                  常に革新的で、人々の生活を豊かにするデザインを追求する
                </p>
              </div>
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4 flex justify-center">
                  <Sparkles size={40} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">バリュー</h3>
                <p className="text-neutral-600">
                  創造性、誠実さ、協調性を大切にする企業文化
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            私たちの価値観
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-neutral-50 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            チームメンバー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-neutral-500 mb-3">
                    {member.position}
                  </p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">会社概要</h2>
              <div className="space-y-4">
                {companyInfo.map((item, index) => (
                  <div key={index} className="border-b border-neutral-200 pb-4">
                    <h3 className="text-sm text-neutral-500 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">沿革</h2>
              <div className="space-y-6">
                {historyItems.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="w-24 flex-shrink-0 font-medium">
                      {item.year}
                    </div>
                    <div className="flex-grow border-l-2 border-neutral-200 pl-6 pb-6 relative">
                      <div className="absolute w-3 h-3 bg-black rounded-full -left-[7px] top-2"></div>
                      <p className="text-lg">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">オフィス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video relative rounded-xl overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661908983395-2482128f7905?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="DESIGN STUDIOオフィス"
                className="absolute w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">クリエイティブな空間</h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                私たちのオフィスは、クリエイティビティを刺激する開放的な空間となっています。
                チームメンバーが最高のパフォーマンスを発揮できるよう、快適な環境づくりを重視しています。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 flex-shrink-0" />
                  <p>東京都渋谷区******</p>
                </div>
                <div className="flex items-start">
                  <Train size={24} className="mr-4 flex-shrink-0" />
                  <p>渋谷駅から徒歩5分</p>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="mr-4 flex-shrink-0" />
                  <p>03-xxxx-xxxx（平日 10:00-19:00）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お問い合わせはこちら
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            プロジェクトに関するご相談や弊社についてのお問い合わせは、
            お気軽にご連絡ください。
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
    </>
  );
}