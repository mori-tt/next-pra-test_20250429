import {
    Globe,
    Palette,
    Award,
    PenTool,
    Film,
    MessageSquare,
    Users,
    ClipboardEdit,
    Layers,
    Clapperboard,
    Play,
    MonitorSmartphone,
    Sparkle,
    Monitor,
    Volume2,
  } from "lucide-react";
  
  /**
   * サービスカテゴリの型定義
   */
  export type ServiceCategory = "web" | "branding" | "ui" | "graphic" | "motion";
  
  /**
   * アイコン名の型定義
   */
  export type IconName =
    | "Globe"
    | "Palette"
    | "Award"
    | "PenTool"
    | "Film"
    | "MessageSquare"
    | "Users"
    | "ClipboardEdit"
    | "Layers"
    | "Clapperboard"
    | "Play"
    | "MonitorSmartphone"
    | "Sparkle"
    | "Monitor"
    | "Volume2";
  
  /**
   * サービス情報の型定義
   */
  export interface ServiceInfo {
    title: string;
    category: ServiceCategory;
    description: string;
    image: string;
    features: string[];
    process: {
      title: string;
      icon: IconName;
      description: string;
    }[];
    benefits: {
      title: string;
      description: string;
    }[];
    technologies: string[];
    icon: IconName;
  }
  
  /**
   * サービスデータのマッピング
   */
  export const services: Record<ServiceCategory, ServiceInfo> = {
    web: {
      title: "Webデザイン",
      category: "web",
      description: "企業のブランド価値を高めるWebサイトの企画から制作まで",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["レスポンシブデザイン", "SEO対策", "高速な読み込み速度"],
      process: [
        {
          title: "要件定義と調査",
          icon: "ClipboardEdit",
          description:
            "プロジェクトの目標、ターゲットユーザー、技術要件を明確にし、競合分析を行います。",
        },
        {
          title: "ワイヤーフレーム・プロトタイプ作成",
          icon: "PenTool",
          description:
            "サイト構造とユーザーフローを視覚化し、インタラクティブなプロトタイプで体験を検証します。",
        },
        {
          title: "ビジュアルデザイン",
          icon: "Palette",
          description:
            "ブランドアイデンティティに沿ったデザインシステムを構築し、魅力的なビジュアルに落とし込みます。",
        },
        {
          title: "フィードバックと修正",
          icon: "MessageSquare",
          description:
            "クライアントからのフィードバックを反映し、デザインを改善します。必要に応じてA/Bテストも実施します。",
        },
      ],
      benefits: [
        {
          title: "ブランド価値の向上",
          description: "魅力的なWebサイトで、企業のブランド価値を高めます。",
        },
        {
          title: "ユーザー体験の改善",
          description: "使いやすく、直感的なインターフェースを提供します。",
        },
        {
          title: "ビジネス成長の促進",
          description:
            "効果的なWebマーケティングで、ビジネスの成長をサポートします。",
        },
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
      icon: "Globe",
    },
    branding: {
      title: "ブランディング",
      category: "branding",
      description: "企業のブランド価値を高める戦略立案と実行",
      image:
        "https://images.unsplash.com/photo-1531329466522-1075f0e4f23a?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["ブランドアイデンティティ設計", "ブランドガイドライン作成"],
      process: [
        {
          title: "ブランド戦略とリサーチ",
          icon: "ClipboardEdit",
          description:
            "市場分析、競合調査、ターゲットオーディエンスの理解を通じて、ブランドの方向性を定義します。",
        },
        {
          title: "コンセプト開発",
          icon: "Sparkle",
          description:
            "ブランドストーリー、コアバリュー、パーソナリティを開発し、独自のポジショニングを確立します。",
        },
        {
          title: "ビジュアルアイデンティティ制作",
          icon: "Palette",
          description:
            "ロゴ、カラースキーム、タイポグラフィなど、ブランドの視覚的要素をデザインします。",
        },
        {
          title: "ブランドガイドライン作成",
          icon: "MessageSquare",
          description:
            "ブランドの一貫性を保つための包括的なガイドラインを作成し、適用例を示します。",
        },
      ],
      benefits: [
        {
          title: "ブランド認知度の向上",
          description: "効果的なブランド戦略で、認知度を高めます。",
        },
        {
          title: "顧客ロイヤリティの向上",
          description: "強力なブランドで、顧客との関係を強化します。",
        },
        {
          title: "市場競争力の強化",
          description: "差別化されたブランドで、競争優位性を確立します。",
        },
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Miro", "Brand Guidelines"],
      icon: "Award",
    },
    ui: {
      title: "UI/UXデザイン",
      category: "ui",
      description: "ユーザー体験を重視したインターフェースデザイン",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "ワイヤーフレーム作成",
        "プロトタイプ制作",
        "ユーザビリティテスト",
      ],
      process: [
        {
          title: "ユーザーリサーチ",
          icon: "ClipboardEdit",
          description:
            "ユーザーの行動パターン、ニーズ、課題を理解するために調査を実施します。",
        },
        {
          title: "情報設計とワイヤーフレーム",
          icon: "Layers",
          description:
            "ユーザーフローを設計し、低解像度のワイヤーフレームで構造を視覚化します。",
        },
        {
          title: "UIデザイン",
          icon: "MonitorSmartphone",
          description:
            "視覚的要素やインタラクションを設計し、一貫性のあるUIシステムを構築します。",
        },
        {
          title: "ユーザーテスト",
          icon: "Users",
          description:
            "実際のユーザーにプロトタイプを試してもらい、フィードバックを収集して改善点を特定します。",
        },
      ],
      benefits: [
        {
          title: "ユーザー満足度の向上",
          description: "使いやすく、魅力的なインターフェースを提供します。",
        },
        {
          title: "コンバージョン率の改善",
          description: "効果的なUI/UXで、目標達成率を高めます。",
        },
        {
          title: "開発効率の向上",
          description: "明確な設計で、開発プロセスを効率化します。",
        },
      ],
      technologies: ["Figma", "Adobe XD", "InVision", "Maze", "Hotjar"],
      icon: "Palette",
    },
    graphic: {
      title: "グラフィックデザイン",
      category: "graphic",
      description: "ブランドの視覚的表現を制作",
      image:
        "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["パンフレットデザイン", "ポスター制作", "パッケージデザイン"],
      process: [
        {
          title: "デザイン調査",
          icon: "ClipboardEdit",
          description:
            "目的、ターゲット、競合分析を通じて、効果的なデザイン方向性を決定します。",
        },
        {
          title: "コンセプト開発",
          icon: "Sparkle",
          description:
            "複数のデザインコンセプトをスケッチし、クライアントと方向性を確認します。",
        },
        {
          title: "デザイン制作",
          icon: "Monitor",
          description:
            "選択されたコンセプトをもとに、詳細なデザインを制作し、素材を整理します。",
        },
        {
          title: "修正とファイナライズ",
          icon: "MessageSquare",
          description:
            "クライアントのフィードバックを反映し、最終的なデザインを完成させます。",
        },
      ],
      benefits: [
        {
          title: "ブランドの一貫性",
          description:
            "すべての視覚的要素で一貫したブランドイメージを構築します。",
        },
        {
          title: "メッセージの明確化",
          description: "視覚的に情報を整理し、メッセージを明確に伝えます。",
        },
        {
          title: "記憶に残る印象",
          description: "独自のビジュアルで、長期的な印象を残します。",
        },
      ],
      technologies: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Affinity Designer",
      ],
      icon: "PenTool",
    },
    motion: {
      title: "モーションデザイン",
      category: "motion",
      description: "動きのあるビジュアルで魅力的なコンテンツを制作",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=2330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "アニメーションロゴ",
        "プロモーションビデオ",
        "インタラクティブコンテンツ",
      ],
      process: [
        {
          title: "コンセプト策定",
          icon: "ClipboardEdit",
          description:
            "目的、メッセージ、ターゲットを明確にし、ムードボードやコンセプトスケッチを作成します。",
        },
        {
          title: "ストーリーボード作成",
          icon: "Clapperboard",
          description:
            "シーンごとの流れや動きを視覚化し、全体の構成を計画します。",
        },
        {
          title: "アニメーション制作",
          icon: "Play",
          description:
            "キーフレームを設定し、動きのタイミングやイージングを調整しながらアニメーションを制作します。",
        },
        {
          title: "サウンドと効果の追加",
          icon: "Volume2",
          description:
            "音楽やサウンドエフェクトを追加し、視覚効果と組み合わせて完成度を高めます。",
        },
      ],
      benefits: [
        {
          title: "注目度の向上",
          description: "動きのあるコンテンツで、ユーザーの注目を集めます。",
        },
        {
          title: "複雑な情報の伝達",
          description: "アニメーションで、複雑な情報をわかりやすく伝えます。",
        },
        {
          title: "エンゲージメントの向上",
          description: "インタラクティブな要素で、ユーザーの関与を高めます。",
        },
      ],
      technologies: [
        "Adobe After Effects",
        "Cinema 4D",
        "Blender",
        "Lottie",
        "GSAP",
      ],
      icon: "Film",
    },
  };
  
  /**
   * 有効なカテゴリかチェックする関数
   * @param category チェック対象のカテゴリ
   * @returns 有効なカテゴリであればtrue
   */
  export function isValidServiceCategory(
    category: string
  ): category is ServiceCategory {
    return Object.keys(services).includes(category);
  }
  
  /**
   * アイコンコンポーネントのマッピング
   */
  export const iconComponents = {
    Globe,
    Palette,
    Award,
    PenTool,
    Film,
    MessageSquare,
    Users,
    ClipboardEdit,
    Layers,
    Clapperboard,
    Play,
    MonitorSmartphone,
    Sparkle,
    Monitor,
    Volume2,
  };