import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Block",
    description:
      "Choose your vice apps — TikTok, Instagram, Twitter, YouTube. Clepsy locks them down using iOS-enforced restrictions.",
    icon: "🚫",
  },
  {
    number: "02",
    title: "Earn",
    description:
      "Use productive apps like Kindle, Duolingo, or meditation apps. Every minute you invest earns you screen time.",
    icon: "⏱️",
  },
  {
    number: "03",
    title: "Unlock",
    description:
      "Spend your earned minutes on your terms, guilt-free. When time's up, Clepsy locks things back down.",
    icon: "🔓",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            How It Works
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
            Three simple steps
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} relative rounded-2xl border border-gold/10 bg-surface/30 p-8 transition-all hover:border-gold/30`}
            >
              <div className="mb-4 text-4xl">{step.icon}</div>
              <span className="font-display text-sm font-bold text-gold/50">
                {step.number}
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-cream">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-cream-muted">
                {step.description}
              </p>
              {/* Connector line on desktop */}
              {i < 2 && (
                <div className="absolute top-1/2 -right-4 hidden h-px w-8 bg-gold/20 md:block" />
              )}
            </div>
          ))}
        </div>

        {/* App in action */}
        <div className="mt-20 flex flex-col items-center reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-12">
            See It In Action
          </p>
          <Image
            src="/app_block_mock.png"
            alt="Clepsy blocking Instagram screen"
            width={300}
            height={600}
            className="drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)]"
          />
        </div>

      </div>
    </section>
  );
}
