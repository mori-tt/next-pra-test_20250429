import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">私たちについて</h3>
            <p className="text-sm text-neutral-600">
              私たちDESIGN
              STUDIOは、「デザインの力でビジネスの可能性を広げる」という理念のもと、
              クライアント様のビジネス成長を支援するパートナーとして活動しています。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web" className="text-sm hover:text-black">
                  Webデザイン
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="text-sm hover:text-black"
                >
                  ブランディング
                </Link>
              </li>
              <li>
                <Link href="/services/ui" className="text-sm hover:text-black">
                  UI/UXデザイン
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic"
                  className="text-sm hover:text-black"
                >
                  グラフィックデザイン
                </Link>
              </li>
              <li>
                <Link
                  href="/services/motion"
                  className="text-sm hover:text-black"
                >
                  モーションデザイン
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-black">
                  私たちについて
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-sm hover:text-black">
                  実績
                </Link>
              </li>
              <li>
                <Link href="/access" className="text-sm hover:text-black">
                  アクセス
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-black">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">DESIGN STUDIO</h4>
            <address className="text-sm text-neutral-600 not-italic">
              〒150-0002
              <br />
              東京都渋谷区渋谷＊＊＊＊＊
              <br />
              ＊＊＊ビル1F
              <br />
              <a
                href="tel:+81-3-1234-5678"
                className="hover:text-black mt-2 inline-block"
              >
                03-1234-****
              </a>
            </address>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500 text-center">
            © {new Date().getFullYear()} DESIGN STUDIO. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/" className="text-neutral-500 hover:text-black">
              <Twitter size={20} />
            </Link>
            <Link href="/" className="text-neutral-500 hover:text-black">
              <Instagram size={20} />
            </Link>
            <Link href="/" className="text-neutral-500 hover:text-black">
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;