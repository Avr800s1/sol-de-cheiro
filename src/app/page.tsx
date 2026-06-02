import Image from "next/image";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CustomKitBuilder } from "@/components/CustomKitBuilder";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InfoCard } from "@/components/InfoCard";
import { ProductsScroller } from "@/components/ProductsScroller";
import { SectionHeader } from "@/components/SectionHeader";
import {
  benefits,
  comparison,
  contact,
  faqs,
  monthlyHighlight,
  products,
  recommendations,
  socialLinks,
  steps,
  trustHighlights
} from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="relative scroll-mt-28 overflow-hidden py-14 sm:py-16 lg:py-9">
          <div className="section-shell lg:hidden">
            <p className="mb-4 inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-clay shadow-soft">
              <Sparkles aria-hidden="true" className="h-4 w-4 text-sunshine-500" />
              {monthlyHighlight.eyebrow}
            </p>

            <h1 className="font-display text-[2rem] font-black leading-tight text-ink">
              {monthlyHighlight.name}
            </h1>

            <p className="mt-4 text-base leading-7 text-ink/70">
              {monthlyHighlight.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {monthlyHighlight.tags.map((tag) => (
                <span
                  className="rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-black text-ink shadow-soft"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative mx-auto mt-7 max-w-[320px]">
              <div className="absolute left-3 top-3 z-10 rounded-lg bg-ink px-3 py-2 text-white shadow-soft">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sunshine-300">
                  {monthlyHighlight.badge}
                </p>
                <p className="mt-1 max-w-40 text-xs leading-4 text-white/80">{monthlyHighlight.note}</p>
              </div>
              <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-soft">
                <Image
                  src={monthlyHighlight.image}
                  alt={`Foto do destaque do mês: ${monthlyHighlight.name}`}
                  width={480}
                  height={640}
                  priority
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              <ButtonLink href={contact.whatsapp} icon={MessageCircle} className="w-full">
                Comprar pelo WhatsApp
              </ButtonLink>
              <ButtonLink href="#produtos" icon={ArrowDown} variant="secondary" className="w-full">
                Ver produtos
              </ButtonLink>
            </div>

          </div>

          <div className="section-shell hidden items-center gap-10 lg:grid lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-bold text-clay shadow-soft">
                <Sparkles aria-hidden="true" className="h-4 w-4 text-sunshine-500" />
                {monthlyHighlight.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-[4rem] xl:text-[4.4rem]">
                {monthlyHighlight.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
                {monthlyHighlight.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {monthlyHighlight.tags.map((tag) => (
                  <span
                    className="rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-black text-ink shadow-soft"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={contact.whatsapp} icon={MessageCircle} className="sm:min-w-56">
                  Comprar pelo WhatsApp
                </ButtonLink>
                <ButtonLink href="#produtos" icon={ArrowDown} variant="secondary" className="sm:min-w-44">
                  Ver produtos
                </ButtonLink>
              </div>

            </div>

            <div className="relative">
              <div className="absolute -left-4 top-8 z-10 rounded-lg bg-ink px-4 py-3 text-white shadow-soft sm:left-0">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sunshine-300">
                  {monthlyHighlight.badge}
                </p>
                <p className="mt-1 text-sm text-white/80">{monthlyHighlight.note}</p>
              </div>
              <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-soft">
                <Image
                  src={monthlyHighlight.image}
                  alt={`Foto do destaque do mês: ${monthlyHighlight.name}`}
                  width={480}
                  height={640}
                  priority
                  className="aspect-[3/4] h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="produtos" className="scroll-mt-28 bg-white pb-6 pt-16 sm:pb-8 sm:pt-20">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Produtos principais"
              title="Escolha o sabonete que combina com a sua rotina"
              description="Opções artesanais com fragrâncias acolhedoras, visual delicado e ingredientes selecionados para uma experiência de autocuidado mais prazerosa."
              align="center"
            />
            <div className="mt-10">
              <ProductsScroller products={products} />
            </div>
          </div>
        </section>

        <section id="kits" className="scroll-mt-28 pb-16 pt-6 sm:pb-20 sm:pt-8">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Kits"
              title="Monte um kit artesanal do seu jeito"
              description="Escolha os produtos, ajuste as quantidades e envie sua seleção diretamente para a Sol De Cheiro pelo WhatsApp."
              align="center"
            />
            <div className="mt-10">
              <CustomKitBuilder />
            </div>
          </div>
        </section>

        <section id="beneficios" className="scroll-mt-28 bg-ink py-16 text-white sm:py-20">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Benefícios"
              title="Feito à mão, pensado para cuidar de você"
              align="center"
              tone="dark"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <InfoCard key={benefit.title} {...benefit} tone="dark" />
              ))}
            </div>
          </div>
        </section>

        <section id="como-comprar" className="scroll-mt-28 bg-white py-16 sm:py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Como comprar"
                title="Seu sabonete artesanal em poucos passos"
                description="A compra acontece de forma simples pelo WhatsApp, com atendimento direto para combinar produto, disponibilidade e entrega."
              />
              <ol className="mt-8 grid gap-4">
                {steps.map((step, index) => (
                  <li className="flex gap-4 rounded-lg border border-black/10 bg-cream p-4" key={step}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sunshine-400 text-sm font-black text-ink">
                      {index + 1}
                    </span>
                    <p className="self-center font-bold text-ink">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-lg bg-ink p-6 text-white shadow-soft sm:p-8">
              <MessageCircle aria-hidden="true" className="h-10 w-10 text-sunshine-300" />
              <h3 className="mt-5 font-display text-3xl font-black">Atendimento direto e acolhedor</h3>
              <p className="mt-4 leading-8 text-white/75">
                Tire dúvidas, consulte valores, escolha fragrâncias e combine a melhor forma de receber seus sabonetes.
              </p>
              <ButtonLink href={contact.whatsapp} icon={MessageCircle} className="mt-7 w-full">
                Falar no WhatsApp
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="section-shell">
            <div className="rounded-lg border border-black/10 bg-cream p-6 shadow-soft sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Redes sociais</p>
                <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-4xl">
                  Acompanhe a Sol De Cheiro
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-ink/70">
                  Acompanhe nossas novidades, receitas, bastidores e produtos disponíveis nas redes sociais.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-sunshine-400"
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon aria-hidden="true" className="h-4 w-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Comparativo"
              title="VOCE ACHA QUE SUA PELE MERECE ISSO ?"
              description="Uma visão simples para entender por que os sabonetes Sol De Cheiro são uma escolha mais verdadeira para o seu autocuidado."
              align="center"
            />
            <div className="mt-10 overflow-hidden rounded-lg border border-black/10 bg-white shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead className="bg-ink text-white">
                    <tr>
                      <th className="p-4 text-sm font-black">Característica</th>
                      <th className="p-4 text-sm font-black">Sabonete comum</th>
                      <th className="p-4 text-sm font-black">Sabonete artesanal Sol De Cheiro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr className="border-t border-black/10" key={row.feature}>
                        <td className="p-4 font-black text-ink">{row.feature}</td>
                        <td className="p-4 text-ink/65">{row.common}</td>
                        <td className="p-4 font-semibold text-ink">{row.handmade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="section-shell">
            <SectionHeader
              title="Conheça um pouco da Sol De Cheiro"
              align="center"
              tone="dark"
            />
            <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
              {recommendations.map((item) => (
                <article
                  className="overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-soft"
                  key={item.title}
                >
                  <div className="relative aspect-[3/4] bg-black">
                    <video
                      className="h-full w-full object-cover"
                      controls
                      preload="metadata"
                      aria-label={item.title}
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-black text-white">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-28 bg-white py-16 sm:py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeader
              eyebrow="FAQ"
              title="Perguntas frequentes"
              description="Respostas rápidas para ajudar você a escolher e comprar com tranquilidade."
            />
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <details className="group rounded-lg border border-black/10 bg-cream p-5 shadow-soft" key={faq.question}>
                  <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-left text-base font-black text-ink">
                    {faq.question}
                    <span className="text-2xl leading-none text-clay transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 leading-7 text-ink/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
