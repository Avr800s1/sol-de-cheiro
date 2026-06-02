import Image from "next/image";
import { BookOpen, CheckCircle2, MessageCircle, Sparkles, Users } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contact } from "@/data/site";

const whatsappLink = `${contact.whatsapp}?text=${encodeURIComponent(
  "Olá! Gostaria de receber mais informações sobre o curso de saboaria artesanal para iniciantes da Sol De Cheiro."
)}`;

const topics = [
  "Videoaulas detalhadas para acompanhar cada etapa",
  "Lista de fornecedores para facilitar suas compras",
  "Receitas de produtos que têm boa procura",
  "Aula com profissionais químicos para explicar dúvidas importantes",
  "Grupo vitalício para dúvidas e troca de informações"
];

export default function CursosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="overflow-hidden py-14 sm:py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-bold text-clay shadow-soft">
                <Sparkles aria-hidden="true" className="h-4 w-4 text-sunshine-500" />
                Curso para iniciantes
              </p>
              <h1 className="mt-5 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
                Comece do zero na saboaria artesanal e crie uma nova fonte de renda
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
                Um curso pensado para quem ainda não sabe nada sobre saboaria artesanal, mas deseja aprender passo a
                passo e começar a produzir para vender. Você não precisa ter experiência anterior.
              </p>
              <a
                className="focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-sunshine-400 px-5 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-sunshine-300"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                <span>Quero começar do zero</span>
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-soft">
              <Image
                src="/produtos/acafrao.jpg"
                alt="Sabonetes artesanais Sol De Cheiro"
                width={721}
                height={960}
                priority
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-clay">Conteúdo</p>
              <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-4xl">
                Tudo o que você precisa para dar os primeiros passos
              </h2>
              <p className="mt-4 leading-8 text-ink/70">
                As aulas foram organizadas para iniciantes absolutos. Você aprende com explicações claras, recebe
                materiais de apoio e encontra caminhos mais simples para iniciar sua produção artesanal.
              </p>
            </div>
            <ul className="grid gap-3">
              {topics.map((topic) => (
                <li className="flex items-center gap-3 rounded-lg border border-black/10 bg-cream p-4 font-bold text-ink" key={topic}>
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-clay" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="section-shell grid gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-white/15 bg-white/5 p-6">
              <BookOpen aria-hidden="true" className="h-7 w-7 text-sunshine-300" />
              <h2 className="mt-5 text-xl font-black">Aulas detalhadas para iniciantes</h2>
              <p className="mt-3 leading-7 text-white/70">
                Aprenda no seu ritmo com videoaulas que mostram o processo com clareza, desde os primeiros passos.
              </p>
            </article>
            <article className="rounded-lg border border-white/15 bg-white/5 p-6">
              <Users aria-hidden="true" className="h-7 w-7 text-sunshine-300" />
              <h2 className="mt-5 text-xl font-black">Acompanhamento vitalício</h2>
              <p className="mt-3 leading-7 text-white/70">
                Continue aprendendo no grupo de dúvidas e trocas de informações mesmo depois de concluir as aulas.
              </p>
            </article>
          </div>
        </section>

        <section className="py-16 text-center sm:py-20">
          <div className="section-shell">
            <h2 className="font-display text-3xl font-black text-ink sm:text-4xl">
              Quer começar sua renda extra com produtos artesanais?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-ink/70">
              Fale com a Sol De Cheiro e receba informações sobre o curso para iniciantes.
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
