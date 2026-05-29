import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
  tone?: "light" | "dark";
};

export function InfoCard({ title, text, icon: Icon, tone = "light" }: InfoCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={`rounded-lg p-5 ${
        isDark
          ? "border border-white/10 bg-white/5 text-white"
          : "border border-black/10 bg-white text-ink shadow-soft"
      }`}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-lg ${
          isDark ? "bg-sunshine-400 text-ink" : "bg-sunshine-100 text-ink"
        }`}
      >
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-black">{title}</h3>
      <p className={`mt-2 leading-7 ${isDark ? "text-white/75" : "text-ink/70"}`}>{text}</p>
    </article>
  );
}
