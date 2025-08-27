'use client';
import React from "react";
import { SiteShell } from "@/components/SiteShell";

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Rooted in Nordic Craft</h1>
        <p className="mt-4 text-white/70">
          Our heritage traces back to artisans who shaped metal and wood in
          harmony with the North's rugged terrain. Njorden honors this legacy by
          blending timeless craftsmanship with modern engineering.
        </p>
      </section>
    </SiteShell>
  );
}
