"use client";

import { useState } from "react";
import { ShieldCheck, Activity, RotateCcw, SlidersHorizontal } from "lucide-react";

const features = [
  {
    title: "The Answer Is Always No",
    description:
      "Try to open a blocked app and Clepsy steps in — reminding you why you blocked it and nudging you toward something better.",
    icon: ShieldCheck,
    large: true,
  },
  {
    title: "Tracks Without You Thinking",
    description:
      "Use an app, close it. The time counts. No start buttons, no manual tracking.",
    icon: Activity,
    large: false,
  },
  {
    title: "Fresh Start Every Day",
    description:
      "Your balance resets at midnight. No rollover, no debt. Just a new day.",
    icon: RotateCcw,
    large: false,
  },
  {
    title: "Your Rules, Your Apps",
    description:
      "Pick which apps to block, which ones count as productive, and how much time you need. Set goals that match your life, not someone else's idea of productivity.",
    icon: SlidersHorizontal,
    large: true,
  },
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-24">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gold/[0.04] blur-[150px] md:blur-[250px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Features
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            Built for people with zero willpower and <span className="text-gold">big plans.</span>
          </h2>
        </div>

        {/* Horizontal row */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              onClick={() => setActiveFeature(activeFeature === i ? null : i)}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl border border-gold/10 bg-white/[0.03] backdrop-blur-sm p-8 transition-all duration-300 hover:border-gold/25 hover:bg-white/[0.06] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(244,162,89,0.08)] cursor-pointer`}
            >
              <div className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300 group-hover:bg-gold/20 group-hover:border-gold/30 ${activeFeature === i ? "bg-gold/20 border-gold/30" : "border-gold/20 bg-gold/10"}`}>
                <feature.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-cream text-center">
                {feature.title}
              </h3>
              <p className={`mt-2 leading-relaxed text-cream-muted text-center transition-[filter] duration-300 group-hover:blur-none ${activeFeature === i ? "blur-none" : "blur-[6px]"}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
