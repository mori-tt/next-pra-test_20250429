import { Metadata } from "next";
import { WORKS_SECTION, SITE_NAME } from "@/constants/site";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: `${WORKS_SECTION.title} | ${SITE_NAME}`,
  description: WORKS_SECTION.description,
});
export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}