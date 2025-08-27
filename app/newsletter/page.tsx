'use client';
import React from "react";
import { SiteShell } from "@/components/SiteShell";

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Newsletter</h1>
        <p className="mt-4 text-white/70">Stay updated with Njorden Automotive. Enter your email to subscribe to our newsletter for the latest news and insights.</p>
      </section>
    </SiteShell>
  );
}
