"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is Clepsy?",
    answer:
      "Clepsy is an iOS app that blocks the apps you waste time on and only unlocks them after you spend time on apps that are actually good for you. The name comes from Clepsydra — an ancient Greek water clock. Time flows in, time flows out. Same idea, different century.",
  },
  {
    question: "Can I cheat it?",
    answer:
      "No. Your iPhone enforces the blocks — not Clepsy. There's no snooze button, no \"just 5 more minutes.\" That's the whole point.",
  },
  {
    question: "Can I change my apps later?",
    answer:
      "Yes. You can update which apps are blocked and which ones count as productive anytime.",
  },
  {
    question: "What about Android?",
    answer:
      "Clepsy is launching on iOS first. Android is on the way — join the waitlist and we'll keep you posted.",
  },
  {
    question: "What about my data?",
    answer:
      "Clepsy never sees your raw screen time data — your iPhone keeps that private. Your usage data is encrypted on your device, and we don't sell your habits.",
  },
  {
    question: "When is it launching?",
    answer:
      "We're targeting 2026 on iOS. Join the waitlist for free early access.",
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
