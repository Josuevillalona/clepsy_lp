"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/components/WaitlistModal";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { open } = useWaitlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-midnight/90 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-bold text-gold">
          Clepsy
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-cream-muted transition-colors hover:text-gold"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-cream-muted transition-colors hover:text-gold"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="text-sm text-cream-muted transition-colors hover:text-gold"
          >
            FAQ
          </a>
        </nav>

        <Button
          onClick={open}
          className="rounded-full bg-gold px-6 font-semibold text-midnight hover:bg-gold/90"
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
}
