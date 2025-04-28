import { Suspense, lazy } from "react";
import { Metadata } from "next";
import { ACCESS_SECTION, SITE_NAME } from "@/constants/site";
import { createMetadata } from "@/utils/metadata";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// GoogleMapWrapperを動的にインポート
const GoogleMapWrapper = lazy(() => import("./GoogleMapWrapper"));

export const metadata: Metadata = createMetadata({
  title: `${ACCESS_SECTION.title} | ${SITE_NAME}`,
  description: ACCESS_SECTION.description,
});

export default function AccessPage() {
  return (
    <>
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">アクセス</h1>
            <p className="text-lg text-neutral-600">
              最寄り駅や所在地の情報をご案内します。
              お気軽にお立ち寄りください。
            </p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md mb-12">
            <Suspense
              fallback={
                <div className="h-[400px] flex items-center justify-center">
                  地図を読み込み中...
                </div>
              }
            >
              <div className="h-[400px] w-full">
                <GoogleMapWrapper />
              </div>
            </Suspense>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">所在地</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">住所</p>
                  <p className="text-neutral-600">
                    〒150-0002
                    <br />
                    東京都渋谷区渋谷＊＊＊＊＊
                    <br />
                    ＊＊＊ビル1F
                  </p>
                </div>
                <div>
                  <p className="font-medium">営業時間</p>
                  <p className="text-neutral-600">
                    月曜日〜金曜日: 9:00 - 18:00
                    <br />
                    土日祝日: 休業
                  </p>
                </div>
                <div>
                  <p className="font-medium">電話番号</p>
                  <p className="text-neutral-600">03-1234-****</p>
                </div>
                <div>
                  <p className="font-medium">メールアドレス</p>
                  <p className="text-neutral-600">
                    info@designstudio.example.com
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">交通アクセス</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">JR線</p>
                  <p className="text-neutral-600">
                    渋谷駅より徒歩5分
                    <br />
                    ハチ公口を出て、スクランブル交差点を渡り右手方向
                  </p>
                </div>
                <div>
                  <p className="font-medium">東京メトロ</p>
                  <p className="text-neutral-600">
                    表参道駅より徒歩10分
                    <br />
                    A4出口より青山通りを渋谷方面へ
                  </p>
                </div>
                <div>
                  <p className="font-medium">車でお越しの方</p>
                  <p className="text-neutral-600">
                    近隣にコインパーキングあり
                    <br />
                    ※駐車場の用意はございません
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">
              よくあるご質問
            </h2>
            <div className="space-y-6">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">
                  訪問の際に予約は必要ですか？
                </h3>
                <p className="text-neutral-600">
                  はい、弊社へのご訪問は事前予約制となっております。お電話またはメールフォームよりご連絡ください。
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">
                  最寄りのランチスポットはありますか？
                </h3>
                <p className="text-neutral-600">
                  当オフィス周辺には様々なジャンルのレストランやカフェがございます。ご希望に応じてスタッフがご案内いたします。
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">
                  リモートでの打ち合わせは可能ですか？
                </h3>
                <p className="text-neutral-600">
                  はい、Zoom、Google
                  Meet、Teamsなど各種オンラインツールに対応しております。移動が難しい場合は、ぜひリモート面談をご利用ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="border-t pt-12 text-center">
              <h2 className="text-2xl font-bold mb-6">お問い合わせ</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
                ご訪問前に事前のご連絡をいただけますと、スムーズにご案内できます。
                お問い合わせやご質問は、下記のボタンからお気軽にご連絡ください。
              </p>
              <Link href="/contact">
                <Button className="bg-black hover:bg-neutral-800">
                  お問い合わせフォーム
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}