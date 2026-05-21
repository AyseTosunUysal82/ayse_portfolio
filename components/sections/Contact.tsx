"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
} from "@/components/icons/social";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const social = [
  { Icon: IconFacebook, label: "Facebook", href: "#kontakt" },
  { Icon: IconTwitter, label: "Twitter", href: "#kontakt" },
  { Icon: IconLinkedin, label: "LinkedIn", href: "#kontakt" },
  { Icon: IconInstagram, label: "Instagram", href: "#kontakt" },
] as const;

export function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (typeof window !== "undefined") {
      window.alert(
        "Vielen Dank — dieses Formular ist eine Demo und versendet noch keine E-Mails."
      );
    }
    form.reset();
  }

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-24"
    >
      <Container>
        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="contact-heading"
                className="text-3xl font-bold tracking-tight text-slate-900"
              >
                Kontakt
              </h2>
              <p className="mt-4 text-slate-600">
                Schreiben Sie mir zu Datenprojekten, Reporting oder
                Zusammenarbeit — ich melde mich in der Regel innerhalb weniger
                Werktage.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                <strong>Sprachen:</strong> Deutsch (C1-Zertifikat), Englisch
                (gut), Niederländisch (sehr gut), Türkisch (Muttersprache).
              </p>

              <ul className="mt-8 space-y-5 text-slate-700">
                <li className="flex gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-purple-600"
                    aria-hidden
                  />
                  <a
                    href="tel:+4915206440225"
                    className="hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded"
                  >
                    +49 152 06440225
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-purple-600"
                    aria-hidden
                  />
                  <a
                    href="mailto:ayseuysal@gmail.com"
                    className="hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded break-all"
                  >
                    ayseuysal@gmail.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-purple-600"
                    aria-hidden
                  />
                  <span>52349 Düren, Deutschland</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {social.map(({ Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={`${label} — Kontakt`}
                    className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-colors hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            <form className="space-y-5" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Ihr Name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@beispiel.de"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700"
                >
                  Betreff
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Kurz das Anliegen beschreiben"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Ihre Nachricht …"
                  className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                />
              </div>
              <Button type="submit" className="w-full px-8 py-3 sm:w-auto">
                Absenden
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
