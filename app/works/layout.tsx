import { Metadata } from "next";
import { WORKS_SECTION, SITE_NAME, BASE_URL } from "@/constants/site";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: WORKS_SECTION.title,
  description: WORKS_SECTION.description,
  openGraph: {
    title: WORKS_SECTION.title,
    description: WORKS_SECTION.description,
    url: `${BASE_URL}works`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: WORKS_SECTION.title,
    description: WORKS_SECTION.description,
  },
  canonical: `${BASE_URL}works`,
});
export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
