"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { MeetClepsy } from "@/components/MeetClepsy";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WaitlistProvider } from "@/components/WaitlistModal";

export default function Home() {
  useScrollReveal();

  return (
    <WaitlistProvider>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <MeetClepsy />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </WaitlistProvider>
  );
}
