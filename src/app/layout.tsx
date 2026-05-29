import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sol De Cheiro | Saboaria artesanal e cuidados naturais",
  description:
    "Sabonetes artesanais feitos com carinho, ingredientes selecionados e aromas especiais para uma rotina de autocuidado mais delicada.",
  openGraph: {
    title: "Sol De Cheiro",
    description:
      "Saboaria artesanal, produtos naturais e cuidados com a pele em uma experiência acolhedora e perfumada.",
    images: ["/sol-de-cheiro-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
