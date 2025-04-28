import { Button } from "./ui/button";
import { MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">お問い合わせ</h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-neutral-600">
            プロジェクトについてのご相談やお見積もり依頼は、お気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 bg-black text-white">
              <h3 className="text-xl font-semibold mb-4">DESIGN STUDIO</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium">所在地</p>
                    <address className="not-italic mt-1">
                      〒150-0002
                      <br />
                      東京都渋谷区******
                      <br />
                      ****ビル 5F
                    </address>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-3 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium">電話番号</p>
                    <p className="mt-1">03-xxxx-xxxx</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-8 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-6 text-center">
                お問い合わせフォーム
              </h3>
              <p className="text-neutral-600 mb-6 text-center">
                下記のボタンをクリックし、お問い合わせフォームにてご連絡ください。
              </p>
              <a
                href="https://forms.gle/exampleFormLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-black hover:bg-neutral-800">
                  お問い合わせフォームを開く
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;