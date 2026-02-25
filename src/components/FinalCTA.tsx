"use client";

import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/components/WaitlistModal";

export function FinalCTA() {
  const { open, count } = useWaitlist();

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold/20 via-gold/10 to-brown/10 p-12 text-center md:p-20">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px] pointer-events-none" />

          <div className="relative">
            <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
              For people who are tired of saying &ldquo;I&apos;ll stop tomorrow.&rdquo;
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-cream-muted">
              You already have the time. Join {count !== null ? `${count.toLocaleString()}` : "1,200+"} people who are ready to
              stop saying &ldquo;tomorrow&rdquo; and start redirecting it.
            </p>

            <Button
              onClick={open}
              className="mt-8 rounded-full bg-gold px-10 py-6 text-lg font-semibold text-midnight hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(244,162,89,0.4)]"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
