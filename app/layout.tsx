import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientAnalytics from "@/components/ClientAnalytics";
import { SITE_BASE_INFO, ANALYTICS, BASE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_BASE_INFO.title}`,
    default: SITE_BASE_INFO.title,
  },
  description: SITE_BASE_INFO.fullDescription,
  // Add Google Search Console verification
  verification: ANALYTICS.VERIFICATION_CODE
    ? { google: ANALYTICS.VERIFICATION_CODE }
    : undefined,
  openGraph: {
    type: "website",
    siteName: SITE_BASE_INFO.title,
    title: SITE_BASE_INFO.title,
    description: SITE_BASE_INFO.fullDescription,
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_BASE_INFO.title,
    description: SITE_BASE_INFO.fullDescription,
  },
  alternates: {
    canonical: BASE_URL,
  },
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased min-h-screen flex flex-col">
        {/* Google Analytics コンポーネント - クライアントコンポーネント経由でロード */}
        {ANALYTICS.MEASUREMENT_ID && (
          <ClientAnalytics measurementId={ANALYTICS.MEASUREMENT_ID} />
        )}
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
