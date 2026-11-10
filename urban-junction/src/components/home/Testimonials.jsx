import { Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { TESTIMONIALS, TESTIMONIAL_DISCLAIMER } from '../../data/testimonials'

/**
 * Testimonial cards. All entries are labelled design placeholders —
 * see src/data/testimonials.js.
 */
export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ice/60 py-24 sm:py-28">
      <div aria-hidden="true" className="glow-blob -left-40 top-10 h-96 w-96 bg-sky/25" />
      <div className="container-x relative">
        <div className="flex flex-col items-center gap-5">
          <span className="rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-deep ring-1 ring-inset ring-royal/20">
            Placeholder content
          </span>
          <SectionHeading
            eyebrow="Testimonials"
            title="What customers will say about us"
            subtitle="This section is reserved for verified customer feedback. The cards below are design placeholders only."
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1} className="h-full">
              <figure className="relative flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-midnight/8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <Quote className="h-7 w-7 text-electric/30" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-body">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-midnight/6 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-royal to-deep font-display text-sm font-extrabold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-extrabold text-ink">{t.name}</span>
                    <span className="block text-xs text-slate-body">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-slate-400">
          {TESTIMONIAL_DISCLAIMER}
        </p>
      </div>
    </section>
  )
}
