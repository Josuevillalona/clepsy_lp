const features = [
  {
    title: "Can't Be Cheated",
    description:
      "Powered by the same API iOS uses. No \"Ignore for today\" button. No workaround. That's the whole point.",
    icon: "🔒",
  },
  {
    title: "Tracks Automatically",
    description:
      "Open Kindle at lunch, close it 15 minutes later. 15 minutes of TikTok just appeared in your balance. No buttons, no manual timers.",
    icon: "🧠",
  },
  {
    title: "Clean Slate Every Morning",
    description:
      "At midnight, your balance resets to zero. Every morning is a fresh start. What will you build today?",
    icon: "🌅",
  },
  {
    title: "Streaks That Mean Something",
    description:
      "Your Kindle streak is longer than most people's gym streak. Clepsy throws confetti — you earned it.",
    icon: "🏆",
  },
  {
    title: "A Buddy, Not a Cop",
    description:
      "Clepsy waits patiently, cheers you on, and celebrates your wins. No shame, no lectures — just someone in your corner.",
    icon: "🤝",
  },
  {
    title: "Your Data Stays Yours",
    description:
      "Everything lives on your device. No cloud tracking, no selling your habits. Your hours are your business.",
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
            20 min of reading. 20 min of Instagram.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream-muted">
            Not another screen time reminder you&apos;ll ignore. A system you
            can&apos;t cheat — and won&apos;t want to.
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
