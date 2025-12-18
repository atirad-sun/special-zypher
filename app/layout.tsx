import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css"; // This connects the CSS file above
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#00675b",
};

export const metadata: Metadata = {
  title: {
    template: "%s | ONE EIGHT X", // %s will be replaced by specific page titles
    default: "ONE EIGHT X - Software Development & Digital Solutions", // Default home title
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
    url: "https://oneeightx.com", // Update this when you have a real domain
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
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ONE EIGHT X',
    url: 'https://oneeightx.com',
    logo: 'https://www.oneeightx.com/asset/logo.svg', // Replace with your actual logo URL
    description: 'We help forward-thinking companies launch fast, scalable, and secure digital products.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangkok',
      addressCountry: 'TH',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+66-80-221-8181', // Optional: Your business phone
      contactType: 'customer service',
    },
    sameAs: [
      'https://www.facebook.com/oneeightx', // Add your social links here
      'https://www.linkedin.com/company/oneeightx',
    ],
  }

  return (
    <html lang="en">
      <body className={font.className}>
        {/* Add the JSON-LD script here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-N0FZQC018G" />
    </html>
  );
}
