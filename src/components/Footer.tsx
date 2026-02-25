import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useContact } from "@/components/ContactModal";

export function Footer() {
  const { open: openContact } = useContact();

  return (
    <footer className="border-t border-gold/10 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#" className="font-display text-xl font-bold text-gold">
            Clepsy
          </a>

          <div className="flex items-center gap-8">
            <nav className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-cream-muted transition-colors hover:text-gold"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-cream-muted transition-colors hover:text-gold"
              >
                Terms
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openContact();
                }}
                className="text-sm text-cream-muted transition-colors hover:text-gold"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-gold/10" />

        <p className="text-center text-sm text-cream-muted/60">
          &copy; 2026 Clepsy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
