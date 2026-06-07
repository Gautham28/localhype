import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Barlow_Condensed,
  Inter,
} from "next/font/google";
import { ContactModalProvider } from "@/components/landing/contact-modal";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LocalHype — Local Word-of-Mouth, at Scale",
  description:
    "Connect local businesses with community members to drive authentic word-of-mouth marketing through Instagram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
