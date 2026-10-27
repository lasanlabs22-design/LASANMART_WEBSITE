import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
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

// Only for the "Powered by Lasan Labs" signature, as in Lasan People and Lasan Grow
const signature = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lasan Mart — Your whole marketing team, in one app",
  description:
    "30 marketing services on your phone, from Instagram reels and Google ads to hoardings and events. Pick one, and our Tirupati team calls you back with a plan and a price.",
  openGraph: {
    title: "Lasan Mart — Your whole marketing team, in one app",
    description:
      "Pick a service in the app, tell us what you need, and our team does the rest. Free to use; you only pay for work you approve.",
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
      <body
        className={`${display.variable} ${body.variable} ${signature.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
