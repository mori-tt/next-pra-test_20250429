/**
 * 静的ページ生成のためのヘルパーユーティリティ
 */
import { CategoryParam, StaticParamsOptions } from "@/types/common";

/**
 * すべてのタイプのパラメータを一括生成する
 * @param options カテゴリ、画像パターン、特別ファイルを含むオプション
 * @returns 生成されたすべてのパラメータ配列
 */
export function generateAllParams(
  options: StaticParamsOptions
): CategoryParam[] {
  const { categories, imagePatterns = [], specialFiles = [] } = options;

  // カテゴリパラメータを生成
  const categoryParams = generateCategoryParams(categories);

  // 画像パラメータを生成（画像パターンが存在する場合）
  const imageParams =
    imagePatterns.length > 0
      ? generateImageParams(categories, imagePatterns)
      : [];

  // 特別ファイルパラメータを生成（特別ファイルが存在する場合）
  const specialParams =
    specialFiles.length > 0 ? generateSpecialFileParams(specialFiles) : [];

  // すべてのパラメータを結合して返す
  return [...categoryParams, ...imageParams, ...specialParams];
}

/**
 * カテゴリパラメータを生成する
 * @param categories 対象のカテゴリリスト
 * @returns カテゴリページのパラメータ配列
 */
export function generateCategoryParams(categories: string[]): CategoryParam[] {
  return categories.map((category) => ({
    category,
  }));
}

/**
 * 画像パスのパラメータを生成する
 * @param categories 対象のカテゴリリスト
 * @param patterns 画像パターンのリスト（例: [".jpg", "-hero.jpg"]）
 * @returns 画像パスのパラメータ配列
 */
export function generateImageParams(
  categories: string[],
  patterns: string[]
): CategoryParam[] {
  const imageParams: CategoryParam[] = [];
  categories.forEach((category) => {
    patterns.forEach((pattern) => {
      imageParams.push({
        category: `${category}${pattern}`,
      });
    });
  });
  return imageParams;
}

/**
 * 特別なファイルのパラメータを生成する
 * @param files 対象のファイル名リスト（例: ["logo.svg"]）
 * @returns 特別なファイルのパラメータ配列
 */
export function generateSpecialFileParams(files: string[]): CategoryParam[] {
  return files.map((file) => ({
    category: file,
  }));
}

/**
 * 画像リクエストかどうかを判定する
 * @param path リクエストパス
 * @returns 画像リクエストならtrue
 */
export function isImageRequest(path: string): boolean {
  return (
    path.endsWith(".jpg") ||
    path.endsWith(".jpeg") ||
    path.endsWith(".png") ||
    path.endsWith(".svg") ||
    path.endsWith(".gif") ||
    path.endsWith(".webp")
  );
}

/**
 * 特殊ファイルかどうかを判定する
 * @param path ファイルパス
 * @param specialFiles 特殊ファイルのリスト
 * @returns 特殊ファイルならtrue
 */
export function isSpecialFile(
  path: string,
  specialFiles: string[] = []
): boolean {
  return specialFiles.includes(path);
}