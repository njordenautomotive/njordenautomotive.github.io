'use client';
import React from "react";
import { SiteShell } from "@/components/SiteShell";

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">S1 Silent Saloon • V1 Vast SUV • M1 Modern MPV</h1>
        <p className="mt-4 text-white/70">S1: Grand touring serenity. V1: Elegance, elevation, space. M1: Family, function, finesse.</p>
      </section>
    </SiteShell>
  );
}
