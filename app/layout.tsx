import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AssetProtection } from "@/components/asset-protection";

export const metadata: Metadata = {
  title: {
    default: "Daniel Ferrena | Field Marketing & Retail Execution",
    template: "%s | Daniel Ferrena",
  },
  description: "Professional portfolio of Daniel Ferrena, an experienced field marketing and retail execution professional representing nationally recognized brands.",
  metadataBase: new URL("https://danielferrena.com"),
  applicationName: "Daniel Ferrena Portfolio",
  authors: [{ name: "Daniel Ferrena" }],
  creator: "Daniel Ferrena",
  publisher: "Daniel Ferrena",
  keywords: ["Daniel Ferrena", "field marketing", "retail execution", "brand advocacy", "sales training", "retail leadership"],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Daniel Ferrena",
    title: "Daniel Ferrena | Field Marketing & Retail Execution",
    description: "Field marketing, retail execution, leadership, and brand advocacy across nationally recognized companies.",
    images: [{ url: "/images/portfolio/daniel-ferrena-headshot.jpg", width: 1663, height: 1118, alt: "Daniel Ferrena" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Ferrena | Field Marketing & Retail Execution",
    description: "Field marketing, retail execution, leadership, and brand advocacy across nationally recognized companies.",
    images: ["/images/portfolio/daniel-ferrena-headshot.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#fbfbfd" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:shadow-lg">Skip to content</a><AssetProtection>{children}</AssetProtection></body></html>;
}
