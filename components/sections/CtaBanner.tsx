import Link from "next/link";
import { BGPattern } from "@/components/ui/BGPattern";
import { Container } from "@/components/ui/Container";

const ctaBtnClass =
  "inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-slate-900 py-16 sm:py-20"
    >
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={32}
        fill="rgba(255,255,255,0.08)"
      />

      <Container className="relative z-10 text-center">
        <h2
          id="cta-heading"
          className="mx-auto max-w-3xl text-2xl font-bold leading-snug text-white sm:text-3xl"
        >
          Sie suchen eine motivierte Junior Data Analystin mit SQL-, Power-BI-
          und Python-Projekterfahrung?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Ich bringe technischen Hintergrund (ICT), praktische Business-Erfahrung
          aus dem E-Commerce und hohe Lernbereitschaft mit — für den Einstieg in
          Data Analytics und Business Intelligence. Gerne stelle ich Projekte und
          Motivation in einem Gespräch vor.
        </p>

        <div className="mt-8 flex justify-center">
          <Link href="#kontakt" className={ctaBtnClass}>
            Kontakt aufnehmen
          </Link>
        </div>
      </Container>
    </section>
  );
}