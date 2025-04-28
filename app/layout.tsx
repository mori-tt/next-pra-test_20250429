import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from "next";
import { SITE_BASE_INFO } from "@/constants/site";

export const metadata: Metadata = {
  title: `${SITE_BASE_INFO.title} | ${SITE_BASE_INFO.description}`,
  description: SITE_BASE_INFO.fullDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
