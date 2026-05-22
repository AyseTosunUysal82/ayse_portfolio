import { Award, Download, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const primaryBtnClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2";

const certificates = [
  {
    icon: Award,
    title: "Data Analyst Weiterbildung",
    label: "Abgeschlossen · 6 Monate Vollzeit intensiv",
    text: "Praxisnahe Weiterbildung mit Fokus auf SQL, Python, Power BI, Datenmodellierung, KPI-Analyse, Reporting und Datenvisualisierung. Die Weiterbildung wurde durch konkrete Analyseprojekte und dokumentierte Umsetzungsschritte ergänzt.",
    badges: ["SQL", "Python", "Power BI", "DAX", "Reporting", "Datenvisualisierung"],
    buttonText: "Zertifikat ansehen",
    href: "/Ayse-Tosun-5e00.pdf",
  },
  {
    icon: GraduationCap,
    title: "Bachelor / HBO Informationstechnologie",
    label: "Haagse Hogeschool · Den Haag",
    text: "Studium der Informationstechnologie mit technischem Fundament in IT, Systemverständnis und analytischem Denken. Dieser Hintergrund bildet die Grundlage für meinen heutigen Einstieg in Data Analytics und Business Intelligence.",
    badges: ["ICT", "IT-Grundlagen", "Analytisches Denken", "Datenverständnis", "Business IT"],
    buttonText: "Diplom ansehen",
    href: "/Ayse-Tosun-803f.pdf",
  },
];

export function Certificates() {
  return (
    <section
      id="zertifikate"
      aria-labelledby="certificates-heading"
      className="py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="certificates-heading"
          title="Zertifikate & Abschluss"
          subtitle="Formale Qualifikation und aktuelle Spezialisierung: ICT-Bachelor, abgeschlossene Data-Analyst-Weiterbildung und praxisnahe Projekte mit SQL, Python und Power BI."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {certificates.map(
            ({ icon: Icon, title, label, text, badges, buttonText, href }) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 ring-1 ring-purple-100">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-purple-600">
                  {label}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                  {title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {text}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <li key={badge}>
                      <span className="inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 ring-1 ring-purple-100">
                        {badge}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${primaryBtnClass} mt-8 w-full sm:w-auto`}
                >
                  <Download className="h-4 w-4" aria-hidden />
                  {buttonText}
                </a>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
