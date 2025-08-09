'use client';
import React from "react";
import { SiteShell } from "@/components/SiteShell";

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Born of the North</h1>
        <p className="mt-4 text-white/70">Njorden is a study in quiet power. Forms drawn from fjords, forests, and winter light.</p>
      </section>
    </SiteShell>
  );
}
