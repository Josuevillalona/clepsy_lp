"use client";

import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useWaitlist } from "@/components/WaitlistModal";

export function FinalCTA() {
  const { open, count } = useWaitlist();

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold/20 via-gold/10 to-brown/10 p-12 text-center md:p-14">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px] pointer-events-none" />

          <div className="relative">
            <h2 className="font-display text-5xl font-bold text-cream md:text-6xl">
              You already know.
            </h2>
            <p className="mt-4 text-lg text-cream-muted">
              Don&apos;t say &ldquo;tomorrow&rdquo; once more.
            </p>

            <Button
              onClick={open}
              className="mt-10 rounded-full bg-gold px-10 py-6 text-lg font-semibold text-midnight hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(244,162,89,0.4)]"
            >
              Join Waitlist
            </Button>

            {count !== null && (
              <p className="mt-6 text-sm text-cream-muted">
                <AnimatedCounter value={count} className="font-semibold text-cream" /> people already did.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
