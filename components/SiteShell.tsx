'use client';
import React from "react";

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0a0b0d]">
      <div className="absolute left-1/2 top-[-10%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(93,190,255,0.18),transparent_60%)] blur-2xl" />
      <div className="absolute left-[10%] top-[40%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(180,255,234,0.16),transparent_60%)] blur-2xl" />
      <div className="absolute right-[5%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] blur-2xl" />
      <div className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="animate-float-slow absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40 shadow-[0_0_12px_rgba(52,211,235,0.35)]"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0a0b0d]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Replace this img with your real logo when ready */}
        <a href="/" className="flex items-center gap-3">
          <img src="/images/njorden-logo-white.png" alt="Njorden" className="h-20 w-auto" />
          <span className="sr-only">Njorden Automotive</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="/models" className="text-sm text-white/80 hover:text-white">Models</a>
          <a href="/heritage" className="text-sm text-white/80 hover:text-white">Heritage</a>
          <a href="/sustainability" className="text-sm text-white/80 hover:text-white">Sustainability</a>
          <a href="/newsletter" className="text-sm text-white/80 hover:text-white">Journal</a>
        </nav>

        <div className="flex items-center gap-2">
          <a className="rounded-2xl bg-white/90 text-[#0a0b0d] hover:bg-white px-4 py-2 text-sm" href="/newsletter">
            Join Newsletter
          </a>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/images/njorden-logo-white.png" alt="Njorden" className="h-8 w-auto" />
          <span className="text-sm tracking-wide text-white/70">© {new Date().getFullYear()} Njorden Automotive</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="/heritage" className="hover:text-white">Heritage</a>
          <a href="/sustainability" className="hover:text-white">Sustainability</a>
          <a href="/models" className="hover:text-white">Models</a>
          <a href="/newsletter" className="hover:text-white">Newsletter</a>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#0a0b0d] text-white">
      <Background />
      <Nav />
      <main>{children}</main>
      <Footer />
      <style>{`
        .animate-float-slow { animation: float 14s ease-in-out infinite; }
        @keyframes float { 0%,100%{ transform: translateY(0px) } 50%{ transform: translateY(-16px) } }
      `}</style>
    </div>
  );
}
