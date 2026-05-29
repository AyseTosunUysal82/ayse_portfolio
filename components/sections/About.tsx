import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ABOUT_IMAGE } from "@/lib/content";

const hireClass =
  "inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2";

export function About() {
  return (
    <section
      id="ueber-mich"
      aria-labelledby="about-heading"
      className="relative z-10 mt-12 px-6 pb-20 sm:mt-16 sm:pb-24 lg:mt-20"
    >
      <Container>
        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-100">
                <Image
                  src="/ayse_business_profile.png"
                  alt="Ayse Tosun Business Profile"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2
                id="about-heading"
                className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Data Analystin mit ICT-Hintergrund
              </h2>

              <div className="mt-5 rounded-2xl bg-purple-50 px-5 py-4 ring-1 ring-purple-100">
                <p className="text-base leading-relaxed text-slate-700">
                  <strong>Profil auf einen Blick:</strong> Ich verbinde
                  technisches Datenverständnis mit praktischer Business-Erfahrung
                  aus E-Commerce, Reporting und Prozessoptimierung. Dadurch
                  betrachte ich Daten nicht nur als Zahlen, sondern als
                  Grundlage für bessere Entscheidungen, klare KPIs und
                  verständliche Analysen.
                </p>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Mein beruflicher Weg war nicht klassisch linear, aber genau
                dadurch bringe ich eine besondere Kombination mit: technisches
                Grundverständnis, operative Business-Erfahrung und den Blick
                dafür, welche Fragen Daten im Alltag wirklich beantworten
                müssen.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Als Mitgründerin eines E-Commerce-Unternehmens habe ich über
                mehrere Jahre mit{" "}
                <strong>Verkaufs-, Produkt- und Bestelldaten</strong>{" "}
                gearbeitet, Kennzahlen beobachtet und Prozesse verbessert. Ich
                habe eine sechsmonatige{" "}
                <strong>Data-Analyst-Weiterbildung bei DataSmart Point</strong>{" "}
                mit Fokus auf <strong>SQL</strong>, <strong>Python</strong>,{" "}
                <strong>Power BI</strong>, Datenvisualisierung und Reporting
                abgeschlossen.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Mich interessiert besonders, wie aus Rohdaten strukturierte
                Informationen werden: durch saubere Datenmodelle,
                nachvollziehbare Analysen und verständliche Dashboards. Mein
                Ziel ist der Einstieg als{" "}
                <strong>Junior Data Analystin</strong> oder{" "}
                <strong>BI Analystin</strong>, wo ich technische Analyse mit
                Business-Verständnis verbinden kann.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#kontakt" className={hireClass}>
                  Kontakt
                </Link>

                <a
                  href="/Ayse_Tosun_Lebenslauf_30_05_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Lebenslauf herunterladen
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}