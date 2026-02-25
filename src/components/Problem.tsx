"use client";

import { Fragment, useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/components/WaitlistModal";

/* ── CountUp (reused for animated numbers) ── */
function CountUp({ end, suffix = "", start = false, decimals = 0 }: { end: number; suffix?: string; start?: boolean; decimals?: number }) {
  const [display, setDisplay] = useState("0");
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!start) { setDisplay("0"); return; }
    if (animRef.current) clearInterval(animRef.current);
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    animRef.current = setInterval(() => {
      current += increment;
      if (current >= end) {
        setDisplay(decimals > 0 ? end.toFixed(decimals) : String(Math.round(end)));
        if (animRef.current) clearInterval(animRef.current);
      } else {
        setDisplay(decimals > 0 ? current.toFixed(decimals) : String(Math.floor(current)));
      }
    }, 1500 / steps);
    return () => { if (animRef.current) clearInterval(animRef.current); };
  }, [start, end, decimals]);

  return <span>{display}{suffix}</span>;
}

/* ── Presets ── */
const presets = [
  { label: "1h", value: 1 },
  { label: "2h", value: 2 },
  { label: "3h", value: 3 },
  { label: "4h", value: 4 },
  { label: "5h+", value: 5.5 },
];

/* ── Compute the gut-punch number ── */
function compute(dailyHours: number) {
  const yearlyHours = dailyHours * 365;
  const weeks = Math.round((yearlyHours / 24) * 10) / 10; // full 24h days → weeks
  return { yearlyHours: Math.round(yearlyHours), weeks };
}

/* ── What-if line adapts to input ── */
function getWhatIfLine(hours: number) {
  const yearly = Math.round(hours * 365);
  const books = Math.round(yearly / 5);
  if (hours <= 1) return `That's enough to read ${books} books, or learn to play guitar from scratch.`;
  if (hours <= 2) return `That's enough to read ${books} books, become conversational in Spanish, and still have hours left over.`;
  if (hours <= 3) return `That's enough to read ${books} books, learn a language, and build a daily meditation habit — all of it.`;
  if (hours <= 4) return `That's a part-time job. ${books} books. A new language. A side project. Pick any two — you'd still have time left.`;
  return `${books} books. A new language. A meditation practice. A side project. You could do all of them and still not use it all.`;
}

/* ── Scroll-highlight words ── */
const words = ["You", "already", "have", "the", "time."];

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlighted, setHighlighted] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const { open } = useWaitlist();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const wordIndex = useTransform(scrollYProgress, [0, 0.6], [0, words.length]);

  useMotionValueEvent(wordIndex, "change", (latest) => {
    const count = Math.min(words.length, Math.ceil(latest));
    setHighlighted(count);
  });

  const allHighlighted = highlighted >= words.length;

  const stats = selected ? compute(selected) : null;

  return (
    <section>
      <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
        <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center px-6 py-24">

          {/* Scroll-highlight headline */}
          <h2 className="text-center font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {words.map((word, i) => (
              <Fragment key={i}>
                <span
                  style={{
                    color: i < highlighted ? "#F4A259" : "#F9F6F0",
                    transition: "color 0.3s ease",
                  }}
                >
                  {word}
                </span>
                {i < words.length - 1 && "\u00A0"}
              </Fragment>
            ))}
          </h2>

          {/* Subtitle + calculator prompt */}
          <div
            style={{ opacity: allHighlighted ? 1 : 0, transition: "opacity 0.5s ease" }}
            className="w-full px-4 md:px-0"
          >
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-cream-muted">
              Check your Screen Time right now. How many hours a day do you spend on social media?
            </p>

            {/* Preset buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {presets.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setSelected(preset.value)}
                  className={`rounded-full px-6 py-3 text-lg font-semibold transition-all duration-150 border ${selected === preset.value
                    ? "bg-gold text-midnight border-gold shadow-[0_0_24px_rgba(244,162,89,0.3)]"
                    : "bg-surface/30 text-cream border-gold/10 hover:border-gold/30 hover:bg-surface/60"
                    }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Results */}
            <AnimatePresence mode="wait">
              {stats && selected !== null && (
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-12 text-center"
                >
                  {/* The gut punch */}
                  <p className="font-display text-5xl font-bold text-gold sm:text-7xl md:text-8xl">
                    <CountUp end={stats.weeks} suffix="" start={true} decimals={1} /> weeks
                  </p>
                  <p className="mt-3 text-xl text-cream-muted">
                    of your life. Every year. Just scrolling.
                  </p>

                  {/* What it could become */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mx-auto mt-8 max-w-2xl px-4 md:px-0 text-lg text-cream"
                  >
                    {getWhatIfLine(selected)}
                  </motion.p>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="mt-8"
                  >
                    <Button
                      onClick={open}
                      className="rounded-full bg-gold px-10 py-6 text-lg font-semibold text-midnight hover:bg-gold/90 hover:shadow-[0_0_24px_rgba(244,162,89,0.4)] transition-all duration-300"
                    >
                      Start Redirecting Your Time
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
