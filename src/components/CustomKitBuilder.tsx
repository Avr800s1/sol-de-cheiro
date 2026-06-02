"use client";

import { MessageCircle, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { contact, customKitItems } from "@/data/site";

export function CustomKitBuilder() {
  const quantities = customKitItems.map(() => 0);

  return <CustomKitForm initialQuantities={quantities} />;
}

function CustomKitForm({ initialQuantities }: { initialQuantities: number[] }) {
  const [quantities, setQuantities] = useState(initialQuantities);

  const total = customKitItems.reduce((sum, item, index) => sum + item.price * quantities[index], 0);
  const hasItems = quantities.some((quantity) => quantity > 0);

  function updateQuantity(index: number, amount: number) {
    setQuantities((current) =>
      current.map((quantity, itemIndex) => (itemIndex === index ? Math.max(0, quantity + amount) : quantity))
    );
  }

  function createWhatsAppLink() {
    const selectedItems = customKitItems
      .map((item, index) => ({ ...item, quantity: quantities[index] }))
      .filter((item) => item.quantity > 0)
      .map((item) => `- ${item.quantity}x ${item.name}: ${formatCurrency(item.price * item.quantity)}`)
      .join("\n");
    const message = hasItems
      ? `Olá! Gostaria de montar este kit personalizado:\n\n${selectedItems}\n\nTotal estimado: ${formatCurrency(total)}`
      : "Olá! Gostaria de montar um kit personalizado.";

    return `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
  }

  return (
    <article className="mx-auto max-w-3xl rounded-lg border border-black/10 bg-white p-5 shadow-soft sm:p-7">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sunshine-100 text-ink">
          <ShoppingBag aria-hidden="true" className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-xl font-black text-ink sm:text-2xl">Monte seu kit personalizado</h3>
          <p className="mt-2 leading-7 text-ink/70">
            Escolha os produtos e quantidades de acordo com a sua preferência.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {customKitItems.map((item, index) => (
          <div
            className="flex flex-col gap-3 rounded-lg border border-black/10 bg-cream p-4 sm:flex-row sm:items-center sm:justify-between"
            key={item.name}
          >
            <div>
              <h4 className="font-black text-ink">{item.name}</h4>
              <p className="mt-1 text-sm font-bold text-clay">{formatCurrency(item.price)}</p>
            </div>
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <button
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-ink transition hover:border-sunshine-400 hover:bg-sunshine-100"
                type="button"
                onClick={() => updateQuantity(index, -1)}
                aria-label={`Remover ${item.name}`}
              >
                <Minus aria-hidden="true" className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-lg font-black text-ink" aria-label={`Quantidade de ${item.name}`}>
                {quantities[index]}
              </span>
              <button
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg bg-sunshine-400 text-ink transition hover:bg-sunshine-300"
                type="button"
                onClick={() => updateQuantity(index, 1)}
                aria-label={`Adicionar ${item.name}`}
              >
                <Plus aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 rounded-lg bg-ink p-4 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-sunshine-300">Valor do kit</p>
          <p className="mt-1 text-2xl font-black">{formatCurrency(total)}</p>
        </div>
        <a
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-sunshine-400 px-5 py-3 text-sm font-bold text-ink transition hover:bg-sunshine-300"
          href={createWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
        >
          <span>Comprar agora</span>
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}
