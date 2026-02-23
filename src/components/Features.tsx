const features = [
  {
    title: "iOS-Enforced Blocking",
    description:
      "Real restrictions you can't bypass with a tap. Powered by Apple's Screen Time API.",
    icon: "🔒",
  },
  {
    title: "Smart Time Tracking",
    description:
      "Automatic background monitoring. No manual timers — Clepsy knows when you're being productive.",
    icon: "🧠",
  },
  {
    title: "Daily Fresh Start",
    description:
      "Every midnight, your slate resets. New day, new opportunity to earn your screen time.",
    icon: "🌅",
  },
  {
    title: "Streaks & Milestones",
    description:
      "Positive reinforcement through streaks, badges, and celebrations. Not shame — motivation.",
    icon: "🏆",
  },
  {
    title: "Your Accountability Buddy",
    description:
      "Meet Clepsy — a friendly mascot that reacts to your progress with patience, encouragement, and celebration.",
    icon: "🤝",
  },
  {
    title: "Privacy First",
    description:
      "All data stays on your device. No cloud tracking, no selling your habits. Just you and your goals.",
    icon: "🛡️",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Features
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
            Built for real change
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream-muted">
            Not another screen time reminder you&apos;ll ignore. Clepsy creates
            real boundaries with real rewards.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-gold/10 bg-surface/30 p-7 transition-all hover:border-gold/30 hover:bg-surface/60`}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="font-display text-lg font-bold text-cream">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
