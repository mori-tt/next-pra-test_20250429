/**
 * 共通の型定義
 */

/**
 * メタデータ関連の型定義
 */
export interface PageMetadata {
    title: string;
    description: string;
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