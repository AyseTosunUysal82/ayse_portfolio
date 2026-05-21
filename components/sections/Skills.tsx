import {
    BarChart3,
    Brain,
    Database,
    FileBarChart,
    LineChart,
    MessageSquareText,
    PieChart,
    Settings2,
    ShoppingCart,
    Sparkles,
  } from "lucide-react";
  import { Container } from "@/components/ui/Container";
  import { SectionHeading } from "@/components/ui/SectionHeading";
  
  const skillGroups = [
    {
      title: "Technische Skills",
      description:
        "Tools und Methoden, mit denen ich Daten bereinige, strukturiere, analysiere und visualisiere.",
      skills: [
        {
          icon: Database,
          title: "SQL & Datenbanken",
          text: "Joins, Aggregationen, Views, Datenbereinigung, Qualitätschecks und strukturierte Datenmodelle in MySQL.",
        },
        {
          icon: BarChart3,
          title: "Power BI & DAX",
          text: "Datenmodellierung, Power Query, Star-Schema, Measures, KPI-Karten, Filterlogik und interaktive Management-Reports.",
        },
        {
          icon: LineChart,
          title: "Python & pandas",
          text: "ETL und Datenaufbereitung: einlesen, bereinigen, transformieren, aggregieren und für Analysen vorbereiten.",
        },
        {
          icon: PieChart,
          title: "Datenvisualisierung",
          text: "Dashboarding, KPI-Reporting und verständliche Management-Reports aus Analyseergebnissen.",
        },
      ],
    },
    {
      title: "Analytische Skills",
      description:
        "Mein Fokus liegt darauf, aus Rohdaten nachvollziehbare Erkenntnisse und klare Entscheidungsgrundlagen zu entwickeln.",
      skills: [
        {
          icon: Settings2,
          title: "Datenqualität sichern",
          text: "Datenqualität und Quality Checks: plausible Werte, konsistente Kategorien und dokumentierte Bereinigung.",
        },
        {
          icon: Brain,
          title: "Muster erkennen",
          text: "Trends, Abweichungen und Zusammenhänge analysieren, um konkrete Erkenntnisse abzuleiten.",
        },
        {
          icon: FileBarChart,
          title: "Business-Fragen übersetzen",
          text: "Fachliche Fragestellungen in passende Datenmodelle, Kennzahlen und Visualisierungen übertragen.",
        },
        {
          icon: MessageSquareText,
          title: "Ergebnisse erklären",
          text: "Analysen so darstellen, dass sie auch für nicht-technische Zielgruppen verständlich sind.",
        },
      ],
    },
    {
      title: "Business- & Soft Skills",
      description:
        "Durch meine E-Commerce- und Unternehmerinnen-Erfahrung verbinde ich Datenanalyse mit praktischem Geschäftsverständnis.",
      skills: [
        {
          icon: ShoppingCart,
          title: "E-Commerce-Erfahrung",
          text: "Verkaufs-, Produkt- und Bestelldaten, KPI-Reporting sowie Excel/Pivot-Auswertungen im operativen Alltag.",
        },
        {
          icon: Sparkles,
          title: "Unternehmerisches Denken",
          text: "Operative Verantwortung, Priorisierung und Blick auf wirtschaftliche Entscheidungen.",
        },
        {
          icon: Settings2,
          title: "Strukturierte Arbeitsweise",
          text: "GitHub-Projekte, Projektdokumentation und nachvollziehbare Analyse-Schritte mit klarer Struktur.",
        },
        {
          icon: MessageSquareText,
          title: "Kommunikation",
          text: "Analyseergebnisse verständlich formulieren und in einen praktischen Zusammenhang bringen.",
        },
      ],
    },
  ];
  
  export function Skills() {
    return (
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="py-20 sm:py-24"
      >
        <Container>
          <SectionHeading
            id="skills-heading"
            title="Skills"
            subtitle="Meine Schwerpunkte liegen in Datenaufbereitung, Analyse, Reporting und verständlicher Visualisierung – mit technischem Fundament und Business-Blick."
            align="center"
          />
  
          <div className="mt-12 space-y-10">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100 sm:p-8"
              >
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {group.description}
                  </p>
                </div>
  
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {group.skills.map(({ icon: Icon, title, text }) => (
                    <article
                      key={title}
                      className="rounded-xl bg-purple-50/70 p-5 ring-1 ring-purple-100 transition hover:-translate-y-1 hover:bg-purple-50 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm ring-1 ring-purple-100">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
  
                      <h4 className="mt-4 text-base font-bold text-slate-900">
                        {title}
                      </h4>
  
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }