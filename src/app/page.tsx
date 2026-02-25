"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WaitlistProvider } from "@/components/WaitlistModal";
import { ContactProvider } from "@/components/ContactModal";

export default function Home() {
  useScrollReveal();

  return (
    <WaitlistProvider>
      <ContactProvider>
        <Header />
        <main>
          <Hero />
          <Problem />
          <HowItWorks />
          <Features />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </ContactProvider>
    </WaitlistProvider>
  );
}
