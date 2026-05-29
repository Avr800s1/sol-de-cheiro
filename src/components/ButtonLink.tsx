import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  icon?: LucideIcon;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowRight,
  className = ""
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-sunshine-400 text-ink shadow-glow hover:-translate-y-0.5 hover:bg-sunshine-300",
    secondary:
      "border border-ink/15 bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:border-ink/35",
    dark: "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-black"
  };

  return (
    <a
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <Icon aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
