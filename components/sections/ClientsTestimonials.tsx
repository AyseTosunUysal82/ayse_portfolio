"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { INDUSTRY_TAGS, TESTIMONIALS } from "@/lib/content";

export function ClientsTestimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section
      aria-labelledby="clients-heading"
      className="py-20 sm:py-24"
    >
      <Container>
        <h2
          id="clients-heading"
          className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Vertrauen &amp; Zusammenarbeit
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
          {INDUSTRY_TAGS.map((tag) => (
            <div
              key={tag}
              className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-600"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <Quote
            className="mx-auto h-12 w-12 text-purple-600"
            aria-hidden
            strokeWidth={1.5}
          />
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl">
            {t.quote}
          </blockquote>

          <div
            className="mt-8 flex justify-center gap-2"
            role="tablist"
            aria-label="Referenzen"
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={String(i)}
                type="button"
                role="tab"
                aria-label={`Referenz ${i + 1}`}
                aria-selected={active === i}
                className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 ${
                  active === i ? "bg-purple-600" : "bg-slate-300"
                }`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
