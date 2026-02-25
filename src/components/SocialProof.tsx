const swaps = [
  {
    before: "30 min/day on TikTok",
    after: "30 min/day on Kindle",
    result: "52 books a year",
    icon: "📚",
  },
  {
    before: "20 min/day on Instagram",
    after: "20 min/day on Duolingo",
    result: "Conversational in a new language",
    icon: "🌍",
  },
  {
    before: "15 min/day on Twitter",
    after: "15 min/day meditating",
    result: "A daily practice that actually sticks",
    icon: "🧘",
  },
];

export function SocialProof() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Your Time, Compounded
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            Same hours. Different outcome.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream-muted">
            You already spend the time. Clepsy just redirects where it goes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {swaps.map((swap, i) => (
            <div
              key={swap.result}
              className={`reveal reveal-delay-${i + 1} relative rounded-2xl border border-gold/10 bg-surface/30 p-8`}
            >
              <div className="mb-6 text-4xl">{swap.icon}</div>

              {/* Before */}
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream-muted/10 text-xs text-cream-muted">
                  ✕
                </span>
                <p className="text-cream-muted line-through decoration-cream-muted/30">
                  {swap.before}
                </p>
              </div>

              {/* After */}
              <div className="mt-3 flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs text-gold">
                  ✓
                </span>
                <p className="font-semibold text-cream">{swap.after}</p>
              </div>

              {/* Result */}
              <div className="mt-6 border-t border-gold/10 pt-5">
                <p className="font-display text-lg font-bold text-gold">
                  {swap.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
