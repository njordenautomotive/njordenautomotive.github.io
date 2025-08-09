'use client';
import "./globals.css";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Njorden Automotive — Hydrogen. Heritage. Harmony.",
  description: "Scandinavian hydrogen luxury. Silence in motion.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[#0a0b0d] text-white antialiased">{children}</body>
    </html>
  );
}
