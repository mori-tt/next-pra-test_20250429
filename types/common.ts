/**
 * 共通の型定義
 */

/**
 * メタデータ関連の型定義
 */
export interface PageMetadata {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: {
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }[];
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    images?: string[];
  };
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
  keywords?: string[];
}

/**
 * カテゴリパラメータの型定義
 */
export type CategoryParam = {
  category: string;
};

/**
 * 静的生成パラメータのオプション
 */
export interface StaticParamsOptions {
  categories: string[];
  imagePatterns?: string[];
  specialFiles?: string[];
}