import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_ITEMS } from "@/lib/content";

const primaryBtnClass =
  "inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2";

const projects = [
  {
    title: "BA-Beschäftigungsstatistik CSV → MySQL",
    category: "SQL · Datenmodellierung",
    image: PORTFOLIO_ITEMS[0]?.image,
    impact: "Reproduzierbarer Datenprozess von CSV-Staging bis KPI-Views.",
    summary:
      "CSV der Bundesagentur für Arbeit in ein analysefähiges MySQL-Datenmodell überführt — mit Staging, Cleaning, Normalisierung, Dimension, Qualitätschecks und KPI-Views.",
    tools: "MySQL · SQL · Datenmodellierung · Views · Qualitätschecks",
    focus: "Import, Cleaning, Normalisierung, KPI-Views",
    mehrwert:
      "Analysefähige Datenbasis für Reporting und Bundesländer-Vergleiche",
    githubUrl:
      "https://github.com/AyseTosunUysal82/data-analytics-portfolio/tree/main/SQL",
  },
  {
    title: "Hotel Demand & Revenue Analysis mit Power BI",
    category: "Power BI · Business Intelligence",
    image: PORTFOLIO_ITEMS[1]?.image,
    impact:
      "Management-Report mit Umsatz-, Storno- und Segmentanalyse.",
    summary:
      "Star-Schema aufgebaut, DAX-Kennzahlen entwickelt und einen vierseitigen Management-Report erstellt — Fokus: Umsatzentwicklung, Stornoquote, Segmentanalyse und Risiko-Rendite.",
    tools: "Power BI · Power Query · DAX · Star-Schema · Datenmodellierung",
    focus: "Umsatz, Stornoquote, Segmente, Management-Storytelling",
    mehrwert:
      "Datenbasierte Bewertung von Chancen, Risiken und KPIs für Entscheider",
    githubUrl:
      "https://github.com/AyseTosunUysal82/data-analytics-portfolio/tree/main/PowerBI",
  },
  {
    title: "Sonderpädagogische Förderung in Deutschland mit Python",
    category: "Python · Datenanalyse",
    image: PORTFOLIO_ITEMS[2]?.image,
    impact:
      "Zeitreihenanalyse offizieller Destatis-Daten mit methodischer Einordnung.",
    summary:
      "Destatis-Daten mit pandas bereinigt, aggregiert und visualisiert — Entwicklungen über mehrere Schuljahre, inkl. dokumentierter Grenzen bei Rundung und Vergleichbarkeit.",
    tools: "Python · pandas · Matplotlib · Jupyter · CSV",
    focus: "Bereinigung, Aggregation, Zeitreihen, Visualisierung",
    mehrwert:
      "Nachvollziehbare Muster in Förderquoten und Förderschwerpunkten",
    githubUrl:
      "https://github.com/AyseTosunUysal82/data-analytics-portfolio/tree/main/Python/Projekt_Schueler_sonderped_Foerderung",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="portfolio-heading"
          title="Portfolio-Projekte"
          subtitle="Ausgewählte Projekte aus SQL, Power BI und Python – mit Fokus auf Datenqualität, Analyse, Reporting und verständliche Ergebnisse."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {project.image && (
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 p-3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              )}

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-snug text-purple-700">
                  {project.impact}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {project.summary}
                </p>

                <dl className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
                  <div>
                    <dt className="font-semibold text-slate-900">Tools</dt>
                    <dd className="mt-0.5">{project.tools}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Fokus</dt>
                    <dd className="mt-0.5">{project.focus}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Mehrwert</dt>
                    <dd className="mt-0.5">{project.mehrwert}</dd>
                  </div>
                </dl>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-purple-600 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                >
                  Projekt auf GitHub ansehen
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="#kontakt" className={primaryBtnClass}>
            Kontakt aufnehmen
          </Link>
        </div>
      </Container>
    </section>
  );
}