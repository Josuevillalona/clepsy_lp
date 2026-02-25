import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Block",
    description:
      "Pick the apps that steal your hours — TikTok, Instagram, YouTube. Clepsy locks them using the same API iOS uses. No \"Ignore for today\" button. That's the point.",
    icon: "🚫",
  },
  {
    number: "02",
    title: "Earn",
    description:
      "Open Kindle at lunch. Close it 20 minutes later. 20 minutes of Instagram just appeared in your balance. No buttons, no timers — it just works.",
    icon: "⏱️",
  },
  {
    number: "03",
    title: "Unlock",
    description:
      "Spend your earned minutes guilt-free. When time's up, the lock comes back. After a week, you might not want the scroll time back.",
    icon: "🔓",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">

          {/* Left: Content */}
          <div>
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                How It Works
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
                Block. Earn. Scroll&nbsp;guilt&#8209;free.
              </h2>
            </div>

            <div className="mt-12 space-y-10">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${i + 1} flex gap-5`}
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-surface/50 text-2xl">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs font-bold tracking-wider text-gold/40">
                        {step.number}
                      </span>
                      <h3 className="font-display text-xl font-bold text-cream">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 leading-relaxed text-cream-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex items-center justify-center reveal">
            <Image
              src="/app_block_mock.png"
              alt="Clepsy blocking Instagram — showing earned time balance"
              width={300}
              height={600}
              className="w-full max-w-[280px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)] md:max-w-[320px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
