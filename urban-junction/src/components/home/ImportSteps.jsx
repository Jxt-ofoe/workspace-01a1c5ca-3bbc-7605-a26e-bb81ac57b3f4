import { ArrowRight, Ship } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { IMPORT_STEPS } from '../../data/content'

/** Four-step importation journey on a deep-blue stage. */
export default function ImportSteps() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight py-24 sm:py-28">
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-40" />
      <div aria-hidden="true" className="glow-blob -right-32 top-0 h-[26rem] w-[26rem] bg-electric/20" />
      <div aria-hidden="true" className="glow-blob -left-32 bottom-0 h-[24rem] w-[24rem] bg-royal/25" />

      <div className="container-x relative">
        <SectionHeading
          tone="dark"
          eyebrow="Importation Services"
          title="From your wish list to your driveway"
          subtitle="We handle the searching, the shipping and the paperwork — you handle the choosing. Here is how an importation runs with Urban Junction."
        />

        <ol className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {IMPORT_STEPS.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.1} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl glass-dark p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-electric/40">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-extrabold text-white/10 transition-colors duration-500 group-hover:text-electric/30"
                >
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-extrabold text-white">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-sky/80">{step.body}</p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-electric/0 via-electric/60 to-electric/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-5 text-center">
          <p className="flex items-center gap-2 text-sm font-semibold text-sky/80">
            <Ship className="h-4 w-4" aria-hidden="true" />
            Sourcing from the United States, Canada, Japan, Korea, Germany, the UAE and more.
          </p>
          <Button to="/request-car" size="lg">
            Request an Import
            <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
