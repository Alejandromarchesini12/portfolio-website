import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav"
import { TrackProvider } from "@/components/TrackProvider";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

// Runs before paint to apply the saved theme, preventing a light/dark flash.
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'dark') document.documentElement.classList.add('dark');
} catch (e) {}
`;

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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth scroll-pt-20 antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Apply saved theme before paint (no flash). */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* If JS is disabled, the observer can't un-hide reveal-wrapped content,
            so force it all visible. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {/* Ambient accent glow behind the whole site (tied to the --accent token) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_60%),radial-gradient(ellipse_at_bottom_left,color-mix(in_srgb,var(--accent)_7%,transparent),transparent_55%)]"
        />
        <TrackProvider>
          <Nav />
          {children}
        </TrackProvider>
        <ThemeToggle />
      </body>
    </html>
  );
}
