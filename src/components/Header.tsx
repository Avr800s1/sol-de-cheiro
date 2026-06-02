"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { contact, navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-cream/90 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4 py-3">
        <a className="focus-ring flex items-center gap-3 rounded-lg" href="/#inicio" aria-label="Sol De Cheiro - Início">
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

        <ButtonLink href={contact.whatsapp} icon={MessageCircle} className="hidden sm:inline-flex">
          Comprar pelo WhatsApp
        </ButtonLink>

        <button
          className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white text-ink lg:hidden"
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      <nav className="hidden border-t border-black/5 bg-white/60 lg:block" aria-label="Menu principal">
        <div className="section-shell flex items-center justify-center gap-6 py-3 text-sm font-semibold text-ink/75">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-lg transition hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {isMenuOpen ? (
        <nav className="section-shell grid grid-cols-2 gap-2 pb-3 text-sm font-semibold text-ink/70 lg:hidden" aria-label="Menu principal mobile">
          {navItems.map((item) => (
            <a
              className="focus-ring flex min-h-11 items-center rounded-lg border border-black/10 bg-white px-3 py-2 transition hover:border-sunshine-400 hover:text-ink"
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
