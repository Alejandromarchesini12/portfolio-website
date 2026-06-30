import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav"
import { TrackProvider } from "@/components/TrackProvider";
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
  title: "Alejandro Marchesini | Portfolio",
  description: "Software engineer and data scientist building ML pipelines, full-stack web, and mobile apps. B.S. Computer Science, Biola University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth scroll-pt-20 antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TrackProvider>
          <Nav />
          {children}
        </TrackProvider>
      </body>
    </html>
  );
}
