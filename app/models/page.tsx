'use client';
import React from "react";
import { SiteShell } from "@/components/SiteShell";

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Concepts: S1 • V1 • M1</h1>
        <p className="mt-4 text-white/70">Three design directions. One philosophy of flow.</p>
      </section>
    </SiteShell>
  );
}
