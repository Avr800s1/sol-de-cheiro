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
  const scrollerId = "products-scroller";

  return (
    <div className="relative overflow-hidden px-0 sm:px-16">
      <div
        id={scrollerId}
        className="no-scrollbar grid auto-cols-[100%] snap-x snap-mandatory grid-flow-col grid-rows-1 gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 sm:auto-cols-[calc((100%_-_1.25rem)/2)] lg:auto-cols-[calc((100%_-_2.5rem)/3)] lg:grid-rows-2"
        aria-label="Produtos principais"
      >
        {products.map((product) => (
          <div className="min-w-0 snap-start" key={product.name}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <ScrollButtons targetId={scrollerId} label="Produtos" />
    </div>
  );
}
