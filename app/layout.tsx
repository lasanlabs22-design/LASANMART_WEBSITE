import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lasan Mart — Your Business. Our Marketplace.",
  description:
    "Tell us what marketing you need — hoardings, social media, influencers, websites — and our team handles the rest. Built for businesses across Andhra Pradesh.",
  openGraph: {
    title: "Lasan Mart — Your Business. Our Marketplace.",
    description:
      "Online and offline marketing, handled end to end. Post what you need and our team takes it from there.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
