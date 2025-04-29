import { Metadata } from "next";
import { SERVICES_SECTION, SITE_NAME, BASE_URL } from "@/constants/site";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: SERVICES_SECTION.title,
  description: SERVICES_SECTION.description,
  openGraph: {
    title: SERVICES_SECTION.title,
    description: SERVICES_SECTION.description,
    url: `${BASE_URL}services`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SERVICES_SECTION.title,
    description: SERVICES_SECTION.description,
  },
  canonical: `${BASE_URL}services`,
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
