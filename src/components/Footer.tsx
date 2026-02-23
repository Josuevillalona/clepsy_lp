import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <a href="#" className="font-display text-xl font-bold text-gold">
              Clepsy
            </a>
            <p className="mt-1 text-sm text-cream-muted">
              Made with intention
            </p>
          </div>

          <nav className="flex gap-6">
            <a
              href="#"
              className="text-sm text-cream-muted transition-colors hover:text-gold"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-cream-muted transition-colors hover:text-gold"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-cream-muted transition-colors hover:text-gold"
            >
              Contact
            </a>
          </nav>
        </div>

        <Separator className="my-8 bg-gold/10" />

        <p className="text-center text-sm text-cream-muted/60">
          &copy; 2026 Clepsy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
