import type { Metadata, Viewport } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

// Load Lora font with various weights and styles
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9f7f2",
};

export const metadata: Metadata = {
  title: "Nathan Traxler's Personal Website | Software Engineer",
  description: "Personal portfolio of Nathan Traxler, a software engineer based in San Francisco.",
  keywords: ["software engineer", "portfolio", "blog", "San Francisco"],
  authors: [{ name: "Nathan Traxler" }],
  creator: "Nathan Traxler",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://yourwebsite.com",
    title: "Nathan Traxler's Personal Website",
    description: "Software Engineer and AI Enthusiast based in San Francisco",
    siteName: "Nathan Traxler's Personal Website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} font-sans`}>
      <body className="min-h-screen bg-[var(--color-bg-light)] text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
