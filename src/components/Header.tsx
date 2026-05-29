import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { contact, navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-cream/90 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4 py-3">
        <a className="focus-ring flex items-center gap-3 rounded-lg" href="#inicio" aria-label="Sol De Cheiro - Início">
          <Image
            src="/logo-sol-de-cheiro.png"
            alt="Logo Sol De Cheiro"
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
          <span className="font-display text-xl font-black leading-none sm:text-2xl">
            Sol De Cheiro
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-ink/75 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-lg transition hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink href={contact.whatsapp} icon={MessageCircle} className="hidden sm:inline-flex">
          Comprar pelo WhatsApp
        </ButtonLink>
      </div>

      <nav
        className="section-shell flex gap-3 overflow-x-auto pb-3 text-sm font-semibold text-ink/70 lg:hidden"
        aria-label="Menu principal mobile"
      >
        {navItems.map((item) => (
          <a
            className="focus-ring shrink-0 rounded-lg border border-black/10 bg-white px-3 py-2 transition hover:border-sunshine-400 hover:text-ink"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
