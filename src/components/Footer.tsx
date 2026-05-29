import Image from "next/image";
import { contact, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-sol-de-cheiro.png"
              alt="Logo Sol De Cheiro"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <p className="font-display text-2xl font-black">Sol De Cheiro</p>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
            Saboaria artesanal feita com carinho, ingredientes selecionados e fragrâncias especiais.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="focus-ring rounded-lg bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-sunshine-400" href={contact.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                className="focus-ring flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-sunshine-400 hover:text-white"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                {link.label.replace("Instagram ", "").replace("Facebook ", "")}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
