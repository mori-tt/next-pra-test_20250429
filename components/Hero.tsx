import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* コンテンツを中央揃えで配置 */}
        <div className="relative">
          {/* デザイン要素 - 背景として配置 */}
          <div className="absolute inset-0 w-full">
            {/* モバイル用デザイン要素 */}
            <div className="lg:hidden">
              <div className="relative w-full max-w-md h-[250px] mx-auto">
                <div className="absolute top-0 right-0 w-40 h-40 bg-black/5 rounded-2xl transform rotate-6 shadow-lg"></div>
                <div className="absolute top-8 right-12 md:top-16 w-32 h-32 bg-black/10 rounded-2xl transform -rotate-12"></div>
                <div className="absolute top-16 right-4 md:top-32 w-44 h-44 bg-neutral-200/50 rounded-2xl transform rotate-45"></div>
                <div className="absolute top-6 right-10 md:top-12 w-36 h-36  border-2 border-black/20 rounded-2xl"></div>
              </div>
            </div>

            {/* デスクトップ用デザイン要素 */}
            <div className="hidden lg:block absolute right-0 2xl:right-30  top-0 w-1/2 h-full">
              <div className="relative w-full h-[500px]">
                <div className="absolute top-0 right-0 w-72 h-72 bg-black/5 rounded-2xl transform rotate-6 shadow-lg"></div>
                <div className="absolute top-20 right-32 w-64 h-64 bg-black/10 rounded-2xl transform -rotate-12"></div>
                <div className="absolute top-40 right-12 w-80 h-80 bg-neutral-200/50 rounded-2xl transform rotate-45"></div>
                <div className="absolute top-16 right-20 w-80 h-80 border-2 border-black/20 rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* テキストコンテンツ - デザイン要素の上に表示 */}
          <div className="relative z-10 pt-32 lg:pt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center 2xl:max-w-7xl 2xl:mx-auto">
              <div className="max-w-xl mx-auto lg:mx-0 2xl:mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-center lg:text-left 2xl:text-center">
                  デザインの力で
                  <br />
                  <span className="text-black">ビジネスに革新</span>を
                </h1>
                <p className="text-lg text-neutral-700 mb-6 md:mb-8 text-center lg:text-left 2xl:text-center">
                  私たちは単なるデザイン会社ではありません。ブランドの価値を高め、
                  ユーザー体験を向上させ、ビジネスの成長を加速させるパートナーです。
                </p>
                <div className="flex flex-row gap-4 mb-8 justify-center lg:justify-start 2xl:justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white"
                    >
                      お問い合わせ
                    </Button>
                  </Link>
                  <Link href="/works">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto border-black text-black hover:bg-neutral-100"
                    >
                      実績を見る
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                {/* 右側のスペースを確保 */}
              </div>
            </div>
          </div>
        </div>

        {/* スクロールアイコン */}
        <div className="flex justify-center mt-8">
          <div className="animate-bounce">
            <ChevronDown size={30} className="text-neutral-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;