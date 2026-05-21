import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const engagementItems = [
  {
    title: "RurAktiv Düren",
    category: "Aktuelle Initiative",
    date: "Aktuell",
    image: "/ruraktiv.png",
    excerpt:
      "Mit Dr. Baran Uluca: Austausch, Begegnung und persönliche Entwicklung für junge Erwachsene und Frauen in Düren.",
    link: "https://www.instagram.com/ruraktiv.dueren?igsh=dDVuaml3Y2d0c3ps",
    linkText: "RurAktiv auf Instagram",
  },
  {
    title: "Ideal Bildungsverein",
    category: "Bildung & Integration",
    date: "2018–2021",
    image: "/ideal_bild.jpg",
    excerpt:
      "Deutsch-Einstiegskurse für Neuzuwanderer, MIA-Projekte mit migrantischen Frauen und organisierte Veranstaltungen.",
    link: "https://idealbv.de",
    linkText: "Ideal BV",
  },
  {
    title: "GFH Herne",
    category: "Engagement",
    date: "2012–2014",
    image: "/GFH.jpg",
    excerpt:
      "Gründungs- und Aufbauphase hauptverantwortlich mitgestaltet — Organisation, Verantwortung und Umsetzung aus der Idee.",
    link: "https://gfherne.de",
    linkText: "GFH Herne",
  },
  {
    title: "Ergänzung zum Data-Profil",
    category: "Arbeitsweise",
    date: "Profil",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "Kommunikation, Struktur und Zielgruppenorientierung — komplexe Inhalte verständlich machen, wie in Reporting und Analyse.",
    link: "#kontakt",
    linkText: "Kontakt",
  },
];

export function Engagement() {
  return (
    <section
      id="engagement"
      aria-labelledby="engagement-heading"
      className="py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="engagement-heading"
          title="Engagement"
          subtitle="Ausgewählte Erfahrungen aus Vereinsgründung, Bildungsarbeit und Initiativen – mit Fokus auf Verantwortung, Organisation, Kommunikation und Projektaufbau."
          align="center"
        />

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-500">
          Ergänzt mein Data-Analytics-Profil — mein Schwerpunkt bleiben SQL-,
          Power-BI- und Python-Projekte.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {engagementItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.category} · {item.date}
                </p>

                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.excerpt}
                </p>

                <Link
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-block text-sm font-semibold text-purple-600 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                >
                  {item.linkText}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl bg-purple-50 p-5 ring-1 ring-purple-100">
            <h4 className="text-sm font-bold text-slate-900">Übertragbar</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Verantwortung, klare Kommunikation und verlässliche
              Projektumsetzung.
            </p>
          </div>

          <div className="rounded-xl bg-purple-50 p-5 ring-1 ring-purple-100">
            <h4 className="text-sm font-bold text-slate-900">Aufgebaut</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Vereinsstrukturen, Bildungsangebote, Austauschformate und
              Netzwerke vor Ort.
            </p>
          </div>

          <div className="rounded-xl bg-purple-50 p-5 ring-1 ring-purple-100">
            <h4 className="text-sm font-bold text-slate-900">Für Data Analytics</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Struktur, Zielgruppenorientierung und verständliche Aufbereitung
              komplexer Inhalte.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
