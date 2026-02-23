import Image from "next/image";

const expressions = [
  {
    emoji: "😌",
    name: "Patient",
    description: "Waiting calmly while you scroll — no judgment, just presence.",
  },
  {
    emoji: "😊",
    name: "Encouraging",
    description: "Cheering you on as you earn time with productive apps.",
  },
  {
    emoji: "🎉",
    name: "Celebrating",
    description: "Throwing confetti when you hit streaks and milestones.",
  },
];

export function MeetClepsy() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* App icon */}
          <div className="reveal flex items-center justify-center">
            <div className="relative">
              <Image
                src="/app_icon.png"
                alt="Clepsy app icon"
                width={400}
                height={400}
                className="rounded-3xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Meet Your Buddy
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-cream">
              Meet Clepsy
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream-muted">
              From <span className="italic text-gold">clepsydra</span> — ancient
              Greek for &ldquo;water thief,&rdquo; the world&apos;s first clock.
              Clepsy is your accountability buddy, not a nagging cop.
            </p>

            <div className="mt-8 space-y-4">
              {expressions.map((expr) => (
                <div
                  key={expr.name}
                  className="flex items-start gap-4 rounded-xl border border-gold/10 bg-surface/30 p-4 transition-colors hover:border-gold/20"
                >
                  <span className="text-2xl">{expr.emoji}</span>
                  <div>
                    <p className="font-display font-semibold text-cream">
                      {expr.name}
                    </p>
                    <p className="text-sm text-cream-muted">
                      {expr.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
