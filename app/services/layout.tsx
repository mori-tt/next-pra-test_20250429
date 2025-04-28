import { Metadata } from "next";
import { SERVICES_SECTION, SITE_NAME } from "@/constants/site";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: `${SERVICES_SECTION.title} | ${SITE_NAME}`,
  description: SERVICES_SECTION.description,
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}