import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import TextType from "@/components/ui/TextType";

const btnClass =
  "inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2";

export function Hero() {
  return (
    <section
      id="start"
      aria-labelledby="hero-heading"
      className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p
              id="hero-heading"
              className="m-0 text-4xl font-normal leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-6xl"
            >
<TextType
  as="span"
  text="Hallo, ich bin Ayse Tosun."
  typingSpeed={55}
  pauseDuration={2000}
  deletingSpeed={30}
  loop={false}
  showCursor
  cursorCharacter="|"
  cursorClassName="text-purple-500 font-light"
  startOnVisible
  className="text-inherit"
/>
</p>

<p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
  <strong>Data Analystin</strong> mit Bachelor in{" "}
  <strong>ICT</strong> (NL), E-Commerce-Erfahrung und abgeschlossener Data-Analyst-Weiterbildung in <strong>SQL</strong>, <strong>Python</strong>,{" "}
  <strong>Power BI</strong> und <strong>Reporting</strong>. Ich bereite Daten so
  auf, dass daraus klare Entscheidungen entstehen.
</p>

<div className="mt-8 flex flex-wrap gap-4">
  <Link href="#portfolio" className={btnClass}>
    Meine Projekte ansehen
  </Link>

  <Link
    href="#kontakt"
    className="inline-flex items-center justify-center rounded-full border border-purple-200 px-6 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
  >
    Mit mir in Kontakt treten
  </Link>
</div>
<dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
  <div className="rounded-xl bg-purple-50 px-4 py-4 text-center sm:text-left">
    <dd className="text-lg font-bold text-slate-900">4+</dd>
    <dt className="mt-1 text-sm font-medium text-slate-600">
      Jahre E-Commerce-Daten &amp; KPI
    </dt>
  </div>

  <div className="rounded-xl bg-purple-50 px-4 py-4 text-center sm:text-left">
    <dd className="text-lg font-bold text-slate-900">6 Monate</dd>
    <dt className="mt-1 text-sm font-medium text-slate-600">
      Data-Analyst-Weiterbildung
      <br />
    </dt>
  </div>

  <div className="rounded-xl bg-purple-50 px-4 py-4 text-center sm:text-left">
    <dd className="text-lg font-bold text-slate-900">4</dd>
    <dt className="mt-1 text-sm font-medium text-slate-600">
      Sprachen (u. a. Deutsch C1)
    </dt>
  </div>
</dl>
          </div>

          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <div
              aria-hidden
              className="absolute inset-6 rounded-full bg-gradient-to-tr from-purple-500/40 via-pink-300/30 to-purple-400/20 blur-3xl"
            />
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-100">
              <Image
                src="/hero_img.png"
                alt="Porträt Ayse Tosun"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
