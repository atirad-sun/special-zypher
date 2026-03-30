import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#00675b",
};

export const metadata: Metadata = {
  title: {
    template: "%s | ONE EIGHT X",
    default: "ONE EIGHT X - Software Development & Digital Solutions",
  },
  description:
    "We help forward-thinking companies launch fast, scalable, and secure digital products. Web Development, Mobile Apps, and Cloud Infrastructure.",
  keywords: [
    "Software Development",
    "React",
    "Next.js",
    "Thailand",
    "Web Development",
    "Mobile App",
  ],
  authors: [{ name: "ONE EIGHT X Team" }],
  openGraph: {
    title: "ONE EIGHT X - Software Development & Digital Solutions",
    description:
      "Building digital experiences that matter. Trusted by top companies in Thailand.",
    url: "https://oneeightx.com",
    siteName: "ONE EIGHT X",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define the schema for your company
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ONE EIGHT X",
    url: "https://oneeightx.com",
    logo: "https://www.oneeightx.com/asset/logo.svg",
    description:
      "We help forward-thinking companies launch fast, scalable, and secure digital products.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+66-80-221-8181",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.facebook.com/oneeightx",
      "https://www.linkedin.com/company/oneeightx",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable} font-[family-name:var(--font-body)] flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Navbar />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-N0FZQC018G" />
    </html>
  );
}
