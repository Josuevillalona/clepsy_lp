const quotes = [
  {
    text: "I've tried Screen Time limits but I always click Ignore.",
    persona: "Sarah, 24",
    role: "Marketing Manager",
  },
  {
    text: "I lose hours before I even realize what happened.",
    persona: "Marcus, 21",
    role: "College Student",
  },
  {
    text: "I want something that actually enforces boundaries for me.",
    persona: "Priya, 28",
    role: "Software Engineer",
  },
];

export function SocialProof() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Sound Familiar?
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
            You&apos;re not alone
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((quote, i) => (
            <div
              key={quote.persona}
              className={`reveal reveal-delay-${i + 1} relative rounded-2xl border border-gold/10 bg-surface/30 p-8`}
            >
              <svg
                className="mb-4 h-8 w-8 text-gold/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg leading-relaxed text-cream italic">
                &ldquo;{quote.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-gold/10 pt-4">
                <p className="font-display font-semibold text-cream">
                  {quote.persona}
                </p>
                <p className="text-sm text-cream-muted">{quote.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
