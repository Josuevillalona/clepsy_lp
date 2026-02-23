"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/components/WaitlistModal";

export function Hero() {
  const { open } = useWaitlist();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl w-full px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">

          {/* Left: Phone mockup */}
          <div className="hidden md:flex items-end justify-center relative animate-fade-in">
            <Image
              src="/onboarding_mock1.png"
              alt="Clepsy onboarding screen"
              width={400}
              height={800}
              priority
              className="max-h-[80vh] w-auto object-contain"
              style={{
                maskImage: "linear-gradient(to bottom, black 30%, transparent 85%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 85%)",
              }}
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-start">
            <h1
              className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-cream md:text-7xl animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Take back<br />your{" "}
              <span className="text-gold">time.</span>
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed text-cream-muted animate-fade-up opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              Clepsy blocks social media until you earn screen time through productive apps. No more doomscrolling on autopilot.
            </p>

            <div
              className="mt-8 animate-fade-up opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                onClick={open}
                className="rounded-full bg-gold px-10 py-6 text-lg font-semibold text-midnight hover:bg-gold/90 hover:shadow-[0_0_24px_rgba(244,162,89,0.4)] transition-all duration-300"
              >
                Download App
              </Button>
            </div>

            {/* Stats */}
            <div
              className="mt-10 flex gap-8 border-t border-gold/10 pt-8 w-full animate-fade-up opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              <div>
                <p className="font-display text-2xl font-bold text-gold">64%</p>
                <p className="mt-0.5 text-sm text-cream-muted">of Americans<br />doomscroll daily</p>
              </div>
              <div className="w-px bg-gold/15" />
              <div>
                <p className="font-display text-2xl font-bold text-gold">3.5 hrs</p>
                <p className="mt-0.5 text-sm text-cream-muted">lost per week to<br />mindless scrolling</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
