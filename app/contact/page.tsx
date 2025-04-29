import { Button } from "@/components/ui/button";
import { MapPin, Phone, Twitter, Instagram, Linkedin } from "lucide-react";
import { CONTACT_FORM_URL, CONTACT_SECTION, BASE_URL } from "@/constants/site";
import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";

const contactInfo = [
  {
    icon: <MapPin className="text-black" />,
    title: "所在地",
    content: (
      <>
        〒150-0002
        <br />
        東京都渋谷区渋谷＊＊＊＊＊
        <br />
        ＊＊＊ビル3F
      </>
    ),
  },
  {
    icon: <Phone className="text-black" />,
    title: "お電話",
    content: (
      <>
        03-1234-5678
        <br />
        ※平日9:00-18:00
      </>
    ),
  },
];

export const metadata: Metadata = createMetadata({
  title: CONTACT_SECTION.title,
  description: CONTACT_SECTION.description,
  openGraph: {
    title: CONTACT_SECTION.title,
    description: CONTACT_SECTION.description,
    url: `${BASE_URL}contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: CONTACT_SECTION.title,
    description: CONTACT_SECTION.description,
  },
  canonical: `${BASE_URL}contact`,
});

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
            <p className="text-lg text-neutral-600">
              プロジェクトについてのご相談やお見積もり依頼は、お気軽にお問い合わせください。
              専門スタッフが丁寧にご対応いたします。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 bg-black text-white">
                <h2 className="text-xl font-semibold mb-6">DESIGN STUDIO</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex">
                      <div className="text-white mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-medium mb-2">{info.title}</h3>
                        <div className="text-white/80">{info.content}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-medium mt-8 mb-4">ソーシャルメディア</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-white/80 hover:text-white">
                    <Twitter size={20} className="text-white" />
                  </a>
                  <a href="#" className="text-white/80 hover:text-white">
                    <Instagram size={20} className="text-white" />
                  </a>
                  <a href="#" className="text-white/80 hover:text-white">
                    <Linkedin size={20} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold mb-6 text-center">
                  お問い合わせフォーム
                </h2>
                <p className="text-neutral-600 mb-6 text-center">
                  下記のボタンをクリックし、お問い合わせフォームからご連絡ください。
                  <br />
                  24時間以内に担当者からご連絡いたします。
                </p>
                <a
                  href={CONTACT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md"
                >
                  <Button className="w-full bg-black hover:bg-neutral-800">
                    お問い合わせフォームを開く
                  </Button>
                </a>

                <div className="mt-8 text-sm text-neutral-500 text-center">
                  ※フォームが開かない場合は、お電話またはメールにてご連絡ください。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">よくあるご質問</h2>
            <div className="space-y-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  見積もりは無料ですか？
                </h3>
                <p className="text-neutral-600">
                  はい、お見積もりは無料で承っております。プロジェクトの規模や内容に応じて、詳細なお見積もりをご提案いたします。
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  納期はどのくらいかかりますか？
                </h3>
                <p className="text-neutral-600">
                  プロジェクトの内容や規模によって異なりますが、一般的なウェブサイト制作は約4〜8週間、ロゴデザインは約2〜3週間程度です。詳細はお問い合わせください。
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  対応エリアはどこまでですか？
                </h3>
                <p className="text-neutral-600">
                  オンラインでの打ち合わせも可能なため、日本全国どこからでもご依頼いただけます。海外のお客様にも対応しております。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
