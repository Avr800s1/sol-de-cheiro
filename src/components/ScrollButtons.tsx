"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type ScrollButtonsProps = {
  targetId: string;
  label: string;
};

export function ScrollButtons({ targetId, label }: ScrollButtonsProps) {
  function scroll(direction: "left" | "right") {
    const scroller = document.getElementById(targetId);

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: direction === "right" ? scroller.clientWidth : -scroller.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <>
      <button
        className="focus-ring absolute left-0 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-lg bg-ink text-white shadow-soft transition hover:-translate-y-[calc(50%+2px)] hover:bg-black sm:flex"
        type="button"
        onClick={() => scroll("left")}
        aria-label={`${label} anteriores`}
      >
        <ChevronLeft aria-hidden="true" className="h-8 w-8" />
      </button>

      <button
        className="focus-ring absolute right-0 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-lg bg-sunshine-400 text-ink shadow-glow transition hover:-translate-y-[calc(50%+2px)] hover:bg-sunshine-300 sm:flex"
        type="button"
        onClick={() => scroll("right")}
        aria-label={`Ver mais ${label.toLowerCase()}`}
      >
        <ChevronRight aria-hidden="true" className="h-8 w-8" />
      </button>

      <div className="mt-3 flex justify-center gap-3 sm:hidden">
        <button
          className="focus-ring flex h-14 w-14 items-center justify-center rounded-lg bg-ink text-white"
          type="button"
          onClick={() => scroll("left")}
          aria-label={`${label} anteriores`}
        >
          <ChevronLeft aria-hidden="true" className="h-7 w-7" />
        </button>
        <button
          className="focus-ring flex h-14 w-14 items-center justify-center rounded-lg bg-sunshine-400 text-ink"
          type="button"
          onClick={() => scroll("right")}
          aria-label={`Ver mais ${label.toLowerCase()}`}
        >
          <ChevronRight aria-hidden="true" className="h-7 w-7" />
        </button>
      </div>
    </>
  );
}
