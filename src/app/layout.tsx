import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pratham.example.com"),
  title: {
    default: "PRATHAM Cancer Institute — Precision care. Human strength.",
    template: "%s · PRATHAM Cancer Institute",
  },
  description:
    "PRATHAM Cancer Institute pairs compassionate specialists with precision oncology and coordinated support at every step of your cancer care journey. (Fictional demo site.)",
  keywords: [
    "cancer care",
    "oncology",
    "precision oncology",
    "second opinion",
    "PRATHAM",
  ],
  openGraph: {
    title: "PRATHAM Cancer Institute",
    description: "Precision care. Human strength.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#123D52",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen bg-warm-white font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
