import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auralith.uk"),

  title: {
    default: "Auralith | Personal Growth, Guidance & Self-Development",
    template: "%s | Auralith",
  },

  description:
    "Auralith helps you understand what is holding you back, clarify your goals, and take meaningful action through guided self-development, structured programmes, and practical support.",

  keywords: [
    "personal development",
    "self development",
    "personal growth",
    "life guidance",
    "goal setting",
    "self discipline",
    "confidence",
    "career development",
    "study skills",
    "habit building",
    "productivity",
    "stress management",
    "life improvement",
    "Auralith",
  ],

  authors: [
    {
      name: "Auralith",
      url: "https://auralith.uk",
    },
  ],

  creator: "Auralith",
  publisher: "Auralith",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://auralith.uk",
    siteName: "Auralith",
    title: "Auralith | Personal Growth, Guidance & Self-Development",
    description:
      "Understand what is holding you back, clarify where you want to go, and take meaningful action with Auralith.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Auralith | Personal Growth, Guidance & Self-Development",
    description:
      "Understand what is holding you back, clarify where you want to go, and take meaningful action with Auralith.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "personal development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
