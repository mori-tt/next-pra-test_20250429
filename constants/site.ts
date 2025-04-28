/**
 * サイト全体の共通定数
 */

/**
 * サイト名
 */
export const SITE_NAME: string = "DESIGN STUDIO";

/**
 * サイトのベースURL
 * 環境変数から取得し、なければデフォルト値を使用
 */
// NEXT_PUBLIC_BASE_URLは未設定の場合はデフォルト値を使用
export const BASE_URL: string =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://mori-tt.github.io/corporate-design/";

/**
 * サイトの基本情報
 */
export const SITE_BASE_INFO = {
  title: SITE_NAME,
  description: "モダンでクリエイティブなデザイン会社",
  fullDescription:
    "最先端のデザインで企業の成長をサポートするデザイン会社。Webデザイン、UIデザイン、ブランディングなど幅広いサービスを提供しています。",
};

/**
 * サービスセクション
 */
export const SERVICES_SECTION = {
  title: "サービス",
  description:
    "DESIGN STUDIOが提供するサービスのご紹介。Webデザイン、UIデザイン、ブランディング、マーケティングなど幅広いデザインサービスで企業の成長をサポートします。",
};

/**
 * 実績セクション
 */
export const WORKS_SECTION = {
  title: "実績",
  description:
    "DESIGN STUDIOの実績紹介。様々な業種・業界のクライアント様と協力し、ビジネスの成長と成功を支援してきた実績をご紹介します。",
};

/**
 * 会社情報セクション
 */
export const COMPANY_SECTION = {
  title: "会社情報",
  description:
    "DESIGN STUDIOの会社情報。私たちの理念やミッション、ビジョンをご紹介します。",
};

/**
 * アクセスセクション
 */
export const ACCESS_SECTION = {
  title: "アクセス",
  description:
    "DESIGN STUDIOへのアクセス方法。渋谷駅から徒歩5分の好立地にオフィスを構えています。お気軽にお越しください。",
};

/**
 * お問い合わせセクション
 */
export const CONTACT_SECTION = {
  title: "お問い合わせ",
  description:
    "DESIGN STUDIOへのお問い合わせ。プロジェクトのご相談や見積もりのご依頼など、お気軽にお問い合わせください。",
};

/**
 * 特殊ページ
 */
export const SPECIAL_PAGES = {
  notFound: {
    title: "Not Found",
    description: "ページが見つかりませんでした。",
  },
};

