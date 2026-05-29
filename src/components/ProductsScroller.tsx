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
    <div className="relative">
      <div
        id={scrollerId}
        className="grid auto-cols-[100%] grid-flow-col grid-rows-1 gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin] sm:auto-cols-[calc((100%-1.25rem)/2)] lg:auto-cols-[calc((100%-2.5rem)/3)] lg:grid-rows-2"
        aria-label="Produtos principais"
      >
        {products.map((product) => (
          <div className="min-w-0" key={product.name}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <ScrollButtons targetId={scrollerId} label="Produtos" />
    </div>
  );
}
