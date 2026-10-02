import type { Metadata, Viewport } from "next";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import "@fontsource/public-sans/800.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE, SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE.name} | ${SITE.fullName}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  icons: { icon: SITE.logo.src },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SITE.fullName,
    description: SITE.description,
    images: [{ url: SITE.logo.src, alt: SITE.logo.alt }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A2342",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
