"use client";

import { Fragment, useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

function CountUp({ end, suffix = "", start = false }: { end: number; suffix?: string; start?: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (start && !started.current) {
      started.current = true;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) { setCount(end); clearInterval(timer); }
        else setCount(Math.floor(current));
      }, 1500 / steps);
      return () => clearInterval(timer);
    }
  }, [start, end]);

  return <span>{count}{suffix}</span>;
}

const stats = [
  { value: 81,  suffix: "%",    label: "of Gen Z doomscroll regularly",        color: "text-teal"   },
  { value: 3.5, suffix: " hrs", label: "lost per week to mindless scrolling",  color: "text-orange" },
  { value: 4,   suffix: "x",    label: "more likely to miss deadlines",        color: "text-gold"   },
];

const words = ["We're", "losing", "time", "we'll", "never", "get", "back"];

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlighted, setHighlighted] = useState(0);

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

  return (
    <section>
      <div ref={containerRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center px-6 py-24">

          <h2 className="text-center font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
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

          <p
            className="mx-auto mt-8 max-w-2xl text-center text-lg text-cream-muted"
            style={{ opacity: allHighlighted ? 1 : 0, transition: "opacity 0.5s ease" }}
          >
            Social media is designed to keep you scrolling. These aren&apos;t
            your numbers — they&apos;re everyone&apos;s.
          </p>

          <div className="mt-16 grid w-full max-w-6xl gap-6 md:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-gold/10 bg-surface/50 p-8 text-center transition-all hover:border-gold/30 hover:bg-surface/80"
                style={{
                  opacity: allHighlighted ? 1 : 0,
                  transform: allHighlighted ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${0.2 + i * 0.15}s, transform 0.6s ease ${0.2 + i * 0.15}s`,
                }}
              >
                <p className={`font-display text-5xl font-bold ${stat.color}`}>
                  {stat.value % 1 !== 0
                    ? <>{stat.value}{stat.suffix}</>
                    : <CountUp end={stat.value} suffix={stat.suffix} start={allHighlighted} />
                  }
                </p>
                <p className="mt-3 text-cream-muted">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
