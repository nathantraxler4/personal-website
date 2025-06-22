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
  title: "Sarah's Personal Website | Designer & Writer",
  description: "Personal portfolio of Sarah, a designer and writer based in Portland. Creating thoughtful experiences through design and storytelling.",
  keywords: ["designer", "writer", "portfolio", "blog", "Portland"],
  authors: [{ name: "Sarah" }],
  creator: "Sarah",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Sarah's Personal Website",
    description: "Designer and writer based in Portland",
    siteName: "Sarah's Personal Website",
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
