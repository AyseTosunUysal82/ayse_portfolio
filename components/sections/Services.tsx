import Link from "next/link";
import { BarChart3, Code2, Database } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/lib/content";

const primaryBtnClass =
  "inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2";

const icons = [Database, BarChart3, Code2] as const;

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2
              id="services-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Was ich mache
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Ich kombiniere Methoden aus Datenaufbereitung, KPI-Reporting und
              Visualisierung — mit Fokus auf nachvollziehbare Ergebnisse für
              Teams und Stakeholder.
            </p>
            <div className="mt-8">
              <Link href="#portfolio" className={primaryBtnClass}>
                Alle anzeigen
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {SERVICES.map((service, i) => {
              const Icon = icons[i];
              return (
                <article
                  key={service.title}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100 sm:flex-row sm:items-start"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      href="#kontakt"
                      className="mt-3 inline-block text-sm font-semibold text-purple-600 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded"
                    >
                      Mehr erfahren
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
