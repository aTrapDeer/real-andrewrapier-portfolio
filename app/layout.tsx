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
  title: "Andrew Rapier — Web Developer & Designer",
  description:
    "Expert web developer specializing in high-converting websites for construction, SaaS, and e-commerce. Increase your conversions with strategic design and development.",
  openGraph: {
    title: "Andrew Rapier — Web Developer & Designer",
    description:
      "Expert web developer specializing in high-converting websites for construction, SaaS, and e-commerce.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Rapier — Web Developer & Designer",
    description:
      "Expert web developer specializing in high-converting websites for construction, SaaS, and e-commerce.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
