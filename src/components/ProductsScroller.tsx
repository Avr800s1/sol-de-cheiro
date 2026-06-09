import type { LucideIcon } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ScrollButtons } from "./ScrollButtons";

type Product = {
  name: string;
  description: string;
  benefit?: string;
  icon: LucideIcon;
  image?: string;
};

type ProductsScrollerProps = {
  products: Product[];
};

export function ProductsScroller({ products }: ProductsScrollerProps) {
  const rows = [
    {
      id: "products-scroller-top",
      label: "Produtos da fileira superior",
      products: products.filter((_, index) => index % 2 === 0)
    },
    {
      id: "products-scroller-bottom",
      label: "Produtos da fileira inferior",
      products: products.filter((_, index) => index % 2 === 1)
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden sm:hidden">
        <div
          id="products-scroller-mobile"
          className="no-scrollbar grid auto-cols-[100%] snap-x snap-mandatory grid-flow-col gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-2"
          aria-label="Todos os produtos"
        >
          {products.map((product) => (
            <div className="min-w-0 snap-start" key={product.name}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <ScrollButtons targetId="products-scroller-mobile" label="Produtos" />
      </div>

      <div className="hidden space-y-5 sm:block">
        {rows.map((row) => (
          <div className="relative overflow-hidden px-16" key={row.id}>
            <div
              id={row.id}
              className="no-scrollbar grid auto-cols-[calc((100%_-_1.25rem)/2)] snap-x snap-mandatory grid-flow-col gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 lg:auto-cols-[calc((100%_-_2.5rem)/3)]"
              aria-label={row.label}
            >
              {row.products.map((product) => (
                <div className="min-w-0 snap-start" key={product.name}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            <ScrollButtons targetId={row.id} label={row.label} />
          </div>
        ))}
      </div>
    </>
  );
}
