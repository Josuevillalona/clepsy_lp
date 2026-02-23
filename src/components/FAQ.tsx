"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Clepsy?",
    answer:
      "Clepsy is an iOS app that blocks social media apps until you earn screen time by using productive apps. Think of it as a time-trading system — invest in yourself first, then enjoy guilt-free scroll time.",
  },
  {
    question: "How does time-trading work?",
    answer:
      "You choose which apps to block (like TikTok, Instagram) and which apps count as productive (like Kindle, Duolingo). For every minute spent on productive apps, you earn a minute of social media time. The ratio is customizable.",
  },
  {
    question: "Which apps can I block?",
    answer:
      "Any social media or entertainment app on your iPhone — TikTok, Instagram, Twitter/X, YouTube, Reddit, Snapchat, and more. You choose what goes on your block list.",
  },
  {
    question: "Which productive apps count?",
    answer:
      "Reading apps (Kindle, Apple Books), language learning (Duolingo), meditation (Headspace, Calm), fitness apps, educational platforms, and more. You can customize your productive app list.",
  },
  {
    question: "When is Clepsy launching?",
    answer:
      "We're targeting a 2026 launch on iOS. Join the waitlist to be the first to know and get early access.",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. All your usage data stays on your device. We don't track your browsing, sell your data, or store anything in the cloud. Your habits are your business.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
            Questions & answers
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3 reveal reveal-delay-1">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-gold/10 bg-surface/30 px-6 data-[state=open]:border-gold/30"
            >
              <AccordionTrigger className="font-display text-left font-semibold text-cream hover:text-gold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-cream-muted leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
