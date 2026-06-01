import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { contact } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

type ProductCardProps = {
  name: string;
  description: string;
  benefit?: string;
  icon: LucideIcon;
  image?: string;
};

export function ProductCard({ name, description, benefit, icon: Icon, image }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-soft transition hover:-translate-y-1 hover:border-sunshine-400">
      {image ? (
        <Image
          src={image}
          alt={`Foto de ${name} da Sol De Cheiro`}
          width={720}
          height={520}
          className="aspect-[4/3] w-full bg-cream object-contain"
        />
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-sunshine-100 text-ink">
          <Icon aria-hidden="true" className="h-12 w-12" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sunshine-100 px-3 py-2 text-ink">
          <span className="text-sm font-black leading-tight">R$ 19,99</span>
          <Icon aria-hidden="true" className="sr-only" />
        </div>
        <h3 className="mt-5 text-xl font-black text-ink">{name}</h3>
        <p className="mt-3 leading-7 text-ink/70">{description}</p>
        {benefit ? (
          <p className="mt-4 rounded-lg bg-cream p-4 text-sm font-semibold leading-6 text-ink">
            {benefit}
          </p>
        ) : null}
        <ButtonLink href={contact.whatsapp} icon={MessageCircle} variant="secondary" className="mt-auto w-full pt-3">
          Comprar agora
        </ButtonLink>
      </div>
    </article>
  );
}
