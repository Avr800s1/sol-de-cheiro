import Image from "next/image";
import { CheckCircle2, Handshake, MessageCircle, PackageCheck, Sparkles, Store } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contact } from "@/data/site";

const whatsappLink = `${contact.whatsapp}?text=${encodeURIComponent(
  "Olá! Gostaria de saber como posso me tornar um revendedor Sol De Cheiro."
)}`;

const benefits = [
  "Produtos artesanais com apresentação cuidadosa",
  "Variedade de sabonetes, geleias de banho e kits",
  "Opções interessantes para presentes e autocuidado",
  "Atendimento direto para tirar dúvidas",
  "Informações sobre disponibilidade e condições pelo WhatsApp"
];

export default function RevendedorPage() {
  return (
    <>
      <Header />
      <main>
        <section className="overflow-hidden py-14 sm:py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-bold text-clay shadow-soft">
                <Sparkles aria-hidden="true" className="h-4 w-4 text-sunshine-500" />
                Revenda Sol De Cheiro
              </p>
              <h1 className="mt-5 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
                Leve o cuidado artesanal da Sol De Cheiro para mais pessoas
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
                Faça parte da rede de revendedores Sol De Cheiro e apresente produtos artesanais delicados, cheirosos
                e preparados com carinho para seus clientes.
              </p>
              <a
                className="focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-sunshine-400 px-5 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-sunshine-300"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                <span>Quero ser revendedor</span>
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-soft">
              <Image
                src="/sol-de-cheiro-hero.png"
                alt="Produtos artesanais Sol De Cheiro"
                width={1774}
                height={887}
                priority
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-clay">Parceria</p>
              <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-4xl">
                Uma oportunidade para começar com apoio
              </h2>
              <p className="mt-4 leading-8 text-ink/70">
                A proposta é aproximar produtos artesanais de novos clientes por meio de pessoas que valorizam cuidado,
                beleza e atendimento acolhedor.
              </p>
            </div>
            <ul className="grid gap-3">
              {benefits.map((benefit) => (
                <li className="flex items-center gap-3 rounded-lg border border-black/10 bg-cream p-4 font-bold text-ink" key={benefit}>
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-clay" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="section-shell">
            <div className="grid gap-5 md:grid-cols-3">
              <article className="rounded-lg border border-white/15 bg-white/5 p-6">
                <Store aria-hidden="true" className="h-7 w-7 text-sunshine-300" />
                <h2 className="mt-5 text-xl font-black">Produtos atrativos</h2>
                <p className="mt-3 leading-7 text-white/70">
                  Opções artesanais para oferecer em sua região e apresentar aos seus clientes.
                </p>
              </article>
              <article className="rounded-lg border border-white/15 bg-white/5 p-6">
                <PackageCheck aria-hidden="true" className="h-7 w-7 text-sunshine-300" />
                <h2 className="mt-5 text-xl font-black">Variedade de escolhas</h2>
                <p className="mt-3 leading-7 text-white/70">
                  Sabonetes, geleias de banho e produtos que podem compor uma seleção especial.
                </p>
              </article>
              <article className="rounded-lg border border-white/15 bg-white/5 p-6">
                <Handshake aria-hidden="true" className="h-7 w-7 text-sunshine-300" />
                <h2 className="mt-5 text-xl font-black">Contato próximo</h2>
                <p className="mt-3 leading-7 text-white/70">
                  Converse diretamente com a Sol De Cheiro para conhecer condições e disponibilidade.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 text-center sm:py-20">
          <div className="section-shell">
            <h2 className="font-display text-3xl font-black text-ink sm:text-4xl">Vamos conversar sobre revenda?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-ink/70">
              Envie uma mensagem para receber mais informações e conhecer as possibilidades.
            </p>
            <a
              className="focus-ring mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-sunshine-400 px-5 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-sunshine-300"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <span>Falar pelo WhatsApp</span>
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
