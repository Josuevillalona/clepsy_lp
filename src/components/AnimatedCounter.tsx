"use client";

import { useEffect, useRef } from "react";
import { useSpring, useTransform, useMotionValue, useReducedMotion } from "framer-motion";

function AnimatedDigit({
  digit,
  animate,
  className,
}: {
  digit: number;
  animate: boolean;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(digit);
  const spring = useSpring(motionValue, {
    stiffness: 80,
    damping: 18,
    mass: 0.6,
  });
  const display = useTransform(spring, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      // On first render, jump to value instantly (no animation)
      isFirstRender.current = false;
      motionValue.jump(digit);
      return;
    }
    if (animate) {
      motionValue.set(digit);
    } else {
      motionValue.jump(digit);
    }
  }, [digit, animate, motionValue]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return unsubscribe;
  }, [display]);

  if (shouldReduceMotion) {
    return <span className={className}>{digit}</span>;
  }

  return <span ref={ref} className={className}>{digit}</span>;
}

interface AnimatedCounterProps {
  value: number | null;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const prevValue = useRef<number | null>(null);
  const shouldAnimate = prevValue.current !== null && value !== prevValue.current;

  useEffect(() => {
    if (value !== null) {
      prevValue.current = value;
    }
  }, [value]);

  if (value === null) {
    return null;
  }

  const formatted = value.toLocaleString();
  const parts = formatted.split("");

  return (
    <span className={className}>
      {parts.map((char, i) => {
        if (!/\d/.test(char)) {
          return <span key={`sep-${i}`}>{char}</span>;
        }
        return (
          <AnimatedDigit
            key={`digit-${i}`}
            digit={parseInt(char)}
            animate={shouldAnimate}
            className="inline-block tabular-nums"
          />
        );
      })}
    </span>
  );
}
