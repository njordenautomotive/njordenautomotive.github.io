'use client';
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Mountain, Wind, Newspaper, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteShell } from "@/components/SiteShell";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const pop = { hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur">{children}</span>
);
const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Models />
      <Journal />
    </SiteShell>
  );
}

function Hero() {
  return (
    <div className="relative">
      <Section className="pt-16 pb-20 sm:pt-24 sm:pb-24">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="flex flex-col items-center text-center">
          <Badge>Hydrogen • Heritage • Harmony</Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">Silence in Motion.</h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">Scandinavian luxury meets hydrogen innovation. Crafted for flow, built for the North. This is the beginning of Njorden.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button className="rounded-2xl bg-cyan-300 text-[#07303a] hover:bg-cyan-200">Explore Concepts <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <a className="rounded-2xl border border-white/30 bg-white/0 text-white hover:bg-white/10 px-4 py-2 text-sm" href="/heritage">Follow Our Journey</a>
          </div>
        </motion.div>
        <motion.div variants={pop} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-2">
          <div className="aspect-[16/8] w-full overflow-hidden rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
            <div className="flex h-full w-full items-center justify-center">
              <div className="mx-auto w-[88%] rounded-[48px] border border-white/10 bg-[#0c0d10] p-6 shadow-2xl">
                <div className="aspect-[21/9] w-full rounded-[36px] bg-[url('/images/hero-car.jpg')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <Pillar icon={<Droplets className="h-5 w-5" />} title="Hydrogen" desc="Clean energy architecture designed around fuel cells and recyclable materials." />
          <Pillar icon={<Mountain className="h-5 w-5" />} title="Heritage" desc="Nordic craft, minimalism, and timeless forms—quiet confidence in every line." />
          <Pillar icon={<Wind className="h-5 w-5" />} title="Harmony" desc="Aerodynamics, acoustics, and comfort tuned for long-range serenity." />
        </div>
      </Section>
    </div>
  );
}

function Pillar({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <Card className="rounded-2xl border-white/10 bg-white/5">
        <CardContent className="flex items-start gap-4 p-6">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-white">{icon}</div>
          <div>
            <h3 className="text-white">{title}</h3>
            <p className="mt-1 text-sm text-white/70">{desc}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Models() {
  return (
    <Section className="py-20">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
        <Badge>Concept Range</Badge>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">S1 • V1 • M1</h2>
        <p className="mt-3 text-white/70">Three design directions. One philosophy of flow. Crafted for the North, refined for the world.</p>
      </motion.div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <ModelCard code="S1" title="Silent Saloon" note="Grand touring serenity" img="/images/s1.jpg" />
        <ModelCard code="V1" title="Vast SUV" note="Elegance, elevation, space" img="/images/v1.jpg" />
        <ModelCard code="M1" title="Modern MPV" note="Family, function, finesse" img="/images/m1.jpg" />
      </div>
    </Section>
  );
}

function ModelCard({ code, title, note, img }: { code: string; title: string; note: string; img: string }) {
  return (
    <motion.div variants={pop} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="aspect-[4/3] w-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="text-lg font-semibold tracking-wide text-white">{code} — {title}</h3>
          <p className="text-sm text-white/70">{note}</p>
        </div>
        <a className="rounded-xl bg-white/90 text-[#0a0b0d] hover:bg-white px-3 py-2 text-sm" href="/models">Details</a>
      </div>
    </motion.div>
  );
}

function Journal() {
  return (
    <Section className="py-20">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Badge>Journal</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Building in the Open</h2>
          <p className="mt-3 text-white/70">Follow design notes, engineering experiments, and roadmaps. From first sketches to wind tunnel studies.</p>
          <div className="mt-6 space-y-3">
            {[
              { title: "Design language: silence, line, light", date: "Aug 2025" },
              { title: "Hydrogen range targets & packaging", date: "Aug 2025" },
              { title: "Material palette: Nordic minimalism", date: "Jul 2025" },
            ].map((p, i) => (
              <a key={i} href="#" className="block rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-white">{p.title}</h3>
                </div>
                <p className="mt-1 text-xs text-white/60">{p.date}</p>
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div variants={pop} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Join the Newsletter</h3>
          <p className="mt-1 text-sm text-white/70">Get early looks at S1, V1, and M1. No noise, just progress.</p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row" action="#" method="post">
            <input type="email" required placeholder="you@domain.com" className="h-11 flex-1 rounded-xl border border-white/15 bg-[#0e1013] px-4 text-white placeholder-white/40 outline-none ring-0 focus:border-cyan-300/50" />
            <button type="submit" className="h-11 rounded-xl bg-cyan-300 text-[#0a0b0d] hover:bg-cyan-200 px-4">Subscribe</button>
          </form>
          <p className="mt-2 text-xs text-white/50">By subscribing, you agree to our updates. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </Section>
  );
}
