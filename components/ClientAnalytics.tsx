"use client";

import dynamic from "next/dynamic";
import { useEffect, memo } from "react";

// GoogleAnalyticsを動的インポート（パフォーマンス最適化）
const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), {
  ssr: false,
  loading: () => null, // 読み込み中は何も表示しない
});

/**
 * Analytics実装のためのクライアントコンポーネント
 * - サーバーコンポーネントからAnalyticsを呼び出すためのブリッジとして機能
 * - 開発時のコンソールエラーを適切にフィルタリング
 *
 * @param {string} measurementId - Google Analytics測定ID
 */
function ClientAnalytics({ measurementId }: { measurementId: string }) {
  // 開発環境でのRSC関連の不要なエラーを抑制
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    // console.error をオーバーライドして特定のエラーをフィルタリング
    const originalConsoleError = console.error;
    console.error = (...args) => {
      // RSC関連のエラーの場合はスキップ
      const errorText = args.join(" ");
      if (
        errorText.includes("_rsc") ||
        errorText.includes(".txt?") ||
        errorText.includes("Failed to load resource: 404") ||
        errorText.includes("WebSocketClient.js")
      ) {
        return;
      }
      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  if (!measurementId) return null;

  return <GoogleAnalytics measurementId={measurementId} />;
}

// パフォーマンス最適化のためmemoを使用
export default memo(ClientAnalytics);
