import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ERP·AI CLI - AI-Powered ERP Assistant",
  description:
    "Command-line interface for ERP·AI. Query your ERP data using natural language.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ERP·AI CLI",
    description: "AI-powered assistant for your ERP data",
    type: "website",
    images: [
      {
        url: "https://app.erp.ai/-/social-preview-updated.png",
        width: 1200,
        height: 800,
        alt: "ERP·AI CLI",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
