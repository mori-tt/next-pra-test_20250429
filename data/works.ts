/**
 * プロジェクトカテゴリの型定義
 */
export type WorkCategory =
  | "web-design"
  | "branding"
  | "ui-ux"
  | "graphic"
  | "motion"
  | "natural-food-branding"
  | "green-app-ui"
  | "able-corp-website"
  | "urban-style-branding"
  | "tech-innovation-website"
  | "health-app-ux";

/**
 * プロジェクト詳細の型定義
 */
export interface ProjectDetail {
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  clientFeedback?: string;
  technologies: string[];
  projectImages: {
    url: string;
    caption: string;
  }[];
}

/**
 * 作品情報の型定義
 */
export interface WorkInfo {
  slug: string;
  title: string;
  categories: WorkCategory[];
  categoriesjp: string[];
  image: string;
  description: string;
  year: string;
  client: string;
  details: ProjectDetail;
}

/**
 * カテゴリとタイトルのマッピング
 */
export const categoryTitles: Partial<Record<WorkCategory, string>> = {
  "web-design": "Webデザイン",
  branding: "ブランディング",
  "ui-ux": "UI/UXデザイン",
  graphic: "グラフィックデザイン",
  motion: "モーションデザイン",
};

/**
 * 有効なカテゴリリスト
 */
export const validCategories: WorkCategory[] = [
  "web-design",
  "branding",
  "ui-ux",
  "graphic",
  "motion",
];

/**
 * 有効なカテゴリかチェックする関数
 * @param category チェック対象のカテゴリ
 * @returns 有効なカテゴリであればtrue
 */
export function isValidWorkCategory(
  category: string
): category is WorkCategory {
  return validCategories.includes(category as WorkCategory);
}

/**
 * 作品データ
 */
export const works: Record<string, WorkInfo> = {
  "natural-food-branding": {
    title: "ナチュラルフードブランディング",
    slug: "natural-food-branding",
    description: "オーガニック食品ブランドのブランディングとパッケージデザイン",
    image:
      "https://images.unsplash.com/photo-1555530001-acee1750bdcc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["branding", "graphic"],
    categoriesjp: ["ブランディング", "グラフィックデザイン"],
    year: "2022",
    client: "Natural Foods, Inc.",
    details: {
      overview:
        "新しいオーガニック食品ブランドの立ち上げに伴い、ブランドアイデンティティとパッケージデザインを一貫して開発しました。健康と環境に配慮したブランド価値を視覚的に表現し、競合他社との差別化を図りました。",
      challenge:
        "競合が多いオーガニック食品市場で、独自性を持ちながらも消費者に親しみやすいブランドイメージを構築する必要がありました。また、環境への配慮を重視する企業理念を、パッケージデザインにも反映させることが課題でした。",
      solution:
        "自然由来の色調と手描き風のイラストを組み合わせた、温かみのあるビジュアルアイデンティティを創出しました。パッケージには再生可能素材を使用し、ミニマルでありながらも製品の鮮度と品質を伝えるデザインを採用しました。",
      results:
        "ブランド認知度が目標を30%上回り、SNSでの言及数も競合他社を上回る結果となりました。環境に配慮したパッケージデザインは、業界誌でも取り上げられ、ブランドの差別化に大きく貢献しました。",
      clientFeedback:
        "私たちのブランド理念を完璧に理解し、それを視覚的に表現してくれました。市場投入後の顧客反応も非常に良く、ブランドへの信頼構築に大きく貢献しています。",
      technologies: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
        "Sustainable Packaging Design",
      ],
      projectImages: [
        {
          url: "https://images.unsplash.com/photo-1555530001-acee1750bdcc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "ブランドロゴデザイン",
        },
        {
          url: "https://images.unsplash.com/photo-1555530001-acee1750bdcc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "パッケージデザイン",
        },
        {
          url: "https://images.unsplash.com/photo-1555530001-acee1750bdcc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "ブランドガイドライン",
        },
      ],
    },
  },
  "green-app-ui": {
    title: "グリーンアプリUI",
    slug: "green-app-ui",
    description: "環境配慮型アプリケーションのUIデザイン",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["ui-ux", "graphic"],
    categoriesjp: ["UI/UXデザイン", "グラフィックデザイン"],
    year: "2023",
    client: "Green Solutions Co., Ltd.",
    details: {
      overview:
        "環境保全活動やエコフレンドリーな生活を支援するモバイルアプリケーションのUIデザインを担当しました。ユーザーが環境に配慮した選択をしやすくなるよう、直感的で魅力的なインターフェースを設計しました。",
      challenge:
        "環境問題という複雑なテーマを、誰にでも使いやすく、かつ継続的に利用したくなるアプリにすることが課題でした。多機能でありながらも情報過多にならない、バランスの取れたUIの実現が求められました。",
      solution:
        "自然をモチーフにした色調と有機的な形状を取り入れながらも、モダンでクリーンなデザイン言語を採用しました。ユーザーの環境貢献度を視覚的に表現するダッシュボードを中心に、段階的に情報を表示するUI構造を設計しました。",
      results:
        "アプリのユーザー獲得目標を20%上回り、アプリストアでの評価も4.8/5.0を達成しました。特にユーザー継続率が業界平均を30%上回り、プロジェクトの大きな成功要因となりました。",
      clientFeedback:
        "複雑な機能を直感的に使えるUIに落とし込んでくれたことで、ユーザーからの高評価を得ることができました。美しいだけでなく、本当に使いやすいデザインを提供してくれました。",
      technologies: ["Figma", "Protopie", "Adobe Illustrator", "User Testing"],
      projectImages: [
        {
          url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "アプリホーム画面",
        },
        {
          url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "活動トラッキング機能",
        },
        {
          url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "コミュニティページ",
        },
      ],
    },
  },
  "able-corp-website": {
    title: "エイブルコーポレーションウェブサイト",
    slug: "able-corp-website",
    description: "企業ウェブサイトのリニューアルデザイン",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["web-design", "ui-ux"],
    categoriesjp: ["Webデザイン", "UI/UXデザイン"],
    year: "2023",
    client: "Able Corporation",
    details: {
      overview:
        "テクノロジー企業のコーポレートサイトを全面リニューアルしました。ブランドイメージの刷新に合わせて、最新のウェブデザイントレンドを取り入れながらも、企業の信頼性と革新性を表現したデザインを実現しました。",
      challenge:
        "古いウェブサイトからの大幅な改善が求められる中、ブランドの歴史と信頼性を保ちながらも、先進的なイメージを構築することが課題でした。また、複雑な製品情報を分かりやすく伝えつつ、問い合わせ転換率の向上も目標とされました。",
      solution:
        "ミニマリズムを基調としたデザインに、動きのあるインタラクションと大胆なタイポグラフィを組み合わせました。製品情報はビジュアルを中心に階層的に構成し、ユーザーの関心に応じて詳細情報にアクセスできる構造を設計しました。",
      results:
        "サイトのセッション時間が40%増加し、ページごとの離脱率は25%減少しました。問い合わせ数は前年比60%増となり、特に新規顧客からの問い合わせが大幅に増加しました。",
      clientFeedback:
        "新しいウェブサイトは私たちの期待をはるかに超えるものでした。デザインの美しさだけでなく、ビジネス目標の達成に直接貢献する結果を出してくれました。",
      technologies: ["Next.js", "Figma", "GSAP Animation", "Responsive Design"],
      projectImages: [
        {
          url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "トップページ",
        },
        {
          url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "製品紹介ページ",
        },
        {
          url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "お問い合わせページ",
        },
      ],
    },
  },
  "urban-style-branding": {
    title: "アーバンスタイルブランディング",
    slug: "urban-style-branding",
    description: "都市型ライフスタイルブランドのブランディング",
    image:
      "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["branding", "graphic"],
    categoriesjp: ["ブランディング", "グラフィックデザイン"],
    year: "2022",
    client: "URBAN Co.",
    details: {
      overview:
        "若者向けの都市型ライフスタイルブランドのブランディングを担当しました。現代の都市生活者のニーズに応える製品ラインナップに合わせて、洗練されたブランドアイデンティティを構築しました。",
      challenge:
        "若年層の消費者に強く訴求しながらも、一過性のトレンドに左右されない持続可能なブランドイメージの構築が課題でした。また、オンラインとオフラインの両方で一貫したブランド体験を提供する必要がありました。",
      solution:
        "モノクロを基調としながらもアクセントカラーを効果的に使用し、都市のエネルギーとミニマルな美学を融合させたデザイン言語を開発しました。すべての接点で一貫したブランドメッセージを伝えるためのガイドラインを作成しました。",
      results:
        "ブランドローンチ後3ヶ月で目標認知度を達成し、SNSでのフォロワー数は予測の2倍に達しました。ターゲット層からの反応が特に良く、ブランドコミュニティの形成に成功しました。",
      clientFeedback:
        "私たちのビジョンを完璧に理解し、それを現代的でありながらも独自性のあるブランドアイデンティティに変換してくれました。市場での反応も非常に良好です。",
      technologies: [
        "Adobe Creative Suite",
        "Brand Strategy",
        "Typography Design",
        "Social Media Templates",
      ],
      projectImages: [
        {
          url: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "ブランドロゴ展開",
        },
        {
          url: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "プロモーション素材",
        },
        {
          url: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "パッケージデザイン",
        },
      ],
    },
  },
  "tech-innovation-website": {
    title: "テックイノベーションウェブサイト",
    slug: "tech-innovation-website",
    description: "テクノロジー企業のウェブサイトデザイン",
    image:
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["web-design", "ui-ux"],
    categoriesjp: ["Webデザイン", "UI/UXデザイン"],
    year: "2022",
    client: "Tech Innovation Inc.",
    details: {
      overview:
        "革新的なテクノロジー製品を提供する企業のウェブサイトをデザインしました。複雑な技術情報を分かりやすく伝えながらも、視覚的に魅力的なサイトを構築しました。",
      challenge:
        "高度な技術情報を非専門家にも理解しやすく伝えること、そして革新的な企業イメージを視覚的に表現することが課題でした。また、グローバル展開に対応できる柔軟なデザインシステムの構築も求められました。",
      solution:
        "データの可視化と分かりやすいインフォグラフィックスを活用し、複雑な情報を直感的に理解できるようデザインしました。また、モダンなレイアウトとインタラクションを採用し、革新的な企業イメージを強化しました。",
      results:
        "サイトの平均滞在時間が60%増加し、コンバージョン率は前年比35%向上しました。特に技術詳細ページの閲覧数が大幅に増加し、ユーザーの理解度向上に貢献しました。",
      clientFeedback:
        "私たちの複雑な製品を見事に分かりやすく伝えるサイトを作ってくれました。デザインの美しさと情報の明確さの両方を実現したことに大変満足しています。",
      technologies: [
        "React.js",
        "Three.js",
        "Data Visualization",
        "Responsive Web Design",
      ],
      projectImages: [
        {
          url: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "ホームページデザイン",
        },
        {
          url: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "製品詳細ページ",
        },
        {
          url: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "テクノロジー説明セクション",
        },
      ],
    },
  },
  "health-app-ux": {
    title: "ヘルスアプリUX",
    slug: "health-app-ux",
    description: "ヘルスケアアプリケーションのUXデザイン",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    categories: ["ui-ux", "graphic"],
    categoriesjp: ["UI/UXデザイン", "グラフィックデザイン"],
    year: "2021",
    client: "Health+ Inc.",
    details: {
      overview:
        "健康管理とフィットネストラッキングのためのアプリケーションのUXデザインを全面的に改善しました。ユーザビリティテストに基づいた改善を行い、より使いやすく効果的なアプリを実現しました。",
      challenge:
        "既存ユーザーの習慣を大きく変えることなく、使いやすさと機能性を向上させることが課題でした。また、多様なユーザー層に対応できる、包括的かつ直感的なインターフェースが求められました。",
      solution:
        "広範なユーザビリティテストを実施し、ユーザーの行動パターンを詳細に分析しました。その結果に基づき、ナビゲーション構造を簡素化し、最も利用頻度の高い機能へのアクセスを最適化しました。",
      results:
        "アプリの使用頻度が25%向上し、継続率は40%改善しました。アプリストアでの評価も3.2から4.7に上昇し、ユーザーからの肯定的なフィードバックが大幅に増加しました。",
      clientFeedback:
        "ユーザー中心のアプローチで、私たちのアプリに新しい命を吹き込んでくれました。数値で測れる成果も出ていますが、何よりユーザーからの前向きなコメントが増えたことに満足しています。",
      technologies: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Figma",
      ],
      projectImages: [
        {
          url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
          caption: "UIデザイン改善前後の比較",
        },
        {
          url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
          caption: "ユーザーフロー最適化",
        },
        {
          url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
          caption: "フィードバック実装プロセス",
        },
      ],
    },
  },
};