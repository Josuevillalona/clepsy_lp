"use client";

import { createContext, useContext, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WaitlistContext = createContext<{ open: () => void }>({ open: () => {} });

export function useWaitlist() {
  return useContext(WaitlistContext);
}

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <WaitlistContext.Provider value={{ open: () => setModalOpen(true) }}>
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
                  className="rounded-full border-gold/20 bg-white/5 px-5 py-3 text-cream placeholder:text-cream-muted/50 focus:border-gold"
                />
                <Button
                  type="submit"
                  className="rounded-full bg-gold px-8 py-3 font-semibold text-midnight hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(244,162,89,0.4)]"
                >
                  Join Waitlist
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
