"use client";

import Image from "next/image";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/components/WaitlistModal";

export function Hero() {
  const { open, count } = useWaitlist();

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
              What if every hour you didn&apos;t spend on TikTok became an hour
              of Duolingo? Clepsy trades your scroll time for time that builds
              something real.
            </p>

            <div
              className="mt-8 animate-fade-up opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                onClick={open}
                className="rounded-full bg-gold px-10 py-6 text-lg font-semibold text-midnight hover:bg-gold/90 hover:shadow-[0_0_24px_rgba(244,162,89,0.4)] transition-all duration-300"
              >
                Join Waitlist
              </Button>
            </div>

            {/* Social proof */}
            <div
              className="mt-8 flex items-center gap-3 animate-fade-up opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              <Users className="h-5 w-5 text-gold" />
              <p className="text-sm text-cream-muted">
                <span className="font-semibold text-cream">{count !== null ? count.toLocaleString() : "1,200+"}</span> people on the waitlist
              </p>
            </div>

            <p
              className="mt-4 text-sm text-cream-muted/70 animate-fade-up opacity-0"
              style={{ animationDelay: "0.9s" }}
            >
              Because we couldn&apos;t stop scrolling either.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
