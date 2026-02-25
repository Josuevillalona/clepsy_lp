import Image from "next/image";
import { ShieldBan, Timer, LockOpen } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Block",
    description:
      "Pick the apps you lose time on — TikTok, Instagram, YouTube. Clepsy locks them until you decide otherwise.",
    icon: ShieldBan,
  },
  {
    number: "02",
    title: "Redirect",
    description:
      "Open Duolingo, Kindle, a workout app — the apps that align with who you're trying to become. That time gets tracked automatically.",
    icon: Timer,
  },
  {
    number: "03",
    title: "Repeat",
    description:
      "Earned minutes unlock your blocked apps. When they run out, the cycle starts over. The more you redirect, the less you'll want to go back.",
    icon: LockOpen,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-20">

          {/* Left: Content */}
          <div>
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                How It Works
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                <span className="text-cream">Block.</span> <span className="text-cream">Redirect.</span> <span className="text-gold">Repeat.</span>
              </h2>
            </div>

            <div className="mt-12 space-y-5">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${i + 1} group relative rounded-2xl border border-gold/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:border-gold/25 hover:bg-white/[0.06] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(244,162,89,0.08)]`}
                >
                  <div className="flex gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20 group-hover:border-gold/30">
                        <step.icon className="h-5 w-5 text-gold" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-xs font-bold tracking-wider text-cream">
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
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="hidden md:flex items-center justify-center reveal mt-15">
            <Image
              src="/app_block_mock.png"
              alt="Clepsy blocking Instagram — showing earned time balance"
              width={400}
              height={800}
              className="max-h-[85vh] w-auto object-contain"
              style={{
                maskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
