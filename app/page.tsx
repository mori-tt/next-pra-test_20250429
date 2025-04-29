import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import { SITE_BASE_INFO } from "@/constants/site";

export const metadata: Metadata = createMetadata({
  title: SITE_BASE_INFO.title,
  description: SITE_BASE_INFO.fullDescription,
  openGraph: {
    title: SITE_BASE_INFO.title,
    description: SITE_BASE_INFO.fullDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_BASE_INFO.title,
    description: SITE_BASE_INFO.fullDescription,
  },
});

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
}
