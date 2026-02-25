"use client";

import { createContext, useContext, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWaitlistCount } from "@/hooks/useWaitlistCount";

interface WaitlistContextValue {
  open: () => void;
  count: number | null;
}

const WaitlistContext = createContext<WaitlistContextValue>({
  open: () => {},
  count: null,
});

export function useWaitlist() {
  return useContext(WaitlistContext);
}

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { count, refetch } = useWaitlistCount();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setSubmitted(true);
      // Show success for 1.5s, close modal, then refetch so
      // the counter animates from old → new in plain view
      setTimeout(() => {
        setModalOpen(false);
        setTimeout(() => refetch(), 300);
      }, 1500);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <WaitlistContext.Provider value={{ open: () => setModalOpen(true), count }}>
      {children}

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/80 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative mx-4 w-full max-w-md rounded-3xl border border-gold/20 bg-surface p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-5 top-5 text-cream-muted hover:text-cream transition-colors"
            >
              ✕
            </button>

            <div className="text-center">
              <Image src="/app_icon.png" alt="Clepsy" width={80} height={80} className="rounded-2xl mx-auto" />
              <h2 className="mt-4 font-display text-2xl font-bold text-cream">
                Coming Soon
              </h2>
              <p className="mt-2 text-cream-muted">
                Clepsy is almost ready. Drop your email and we&apos;ll let you know the moment it launches.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  className="rounded-full border-gold/20 bg-white/5 px-5 py-3 text-cream placeholder:text-cream-muted/50 focus:border-gold"
                />
                {error && (
                  <p className="text-sm text-red-400 text-center">{error}</p>
                )}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-gold px-8 py-3 font-semibold text-midnight hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(244,162,89,0.4)] disabled:opacity-50"
                >
                  {submitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            ) : (
              <div className="mt-6 rounded-2xl border border-teal/30 bg-teal/10 p-5 text-center">
                <p className="font-display text-lg font-semibold text-teal">You&apos;re on the list!</p>
                <p className="mt-1 text-sm text-cream-muted">We&apos;ll reach out when Clepsy is ready.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </WaitlistContext.Provider>
  );
}
