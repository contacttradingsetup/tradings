import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tradings",
    template: "%s | Tradings",
  },
  description: "Professional Trading Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-dark">
      <body
        className={`${inter.variable} bg-[var(--background)] text-[var(--text)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}