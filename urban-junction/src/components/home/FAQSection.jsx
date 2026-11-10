import { HelpCircle } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { FAQS } from '../../data/faqs'

/** Frequently asked questions with expandable accordion. */
export default function FAQSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-electric">
            <span aria-hidden="true" className="h-px w-6 bg-electric/60" />
            FAQ
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Questions, answered clearly
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-slate-body sm:text-base">
            Everything customers usually ask before requesting or importing a vehicle. Something
            else on your mind? We reply quickly on WhatsApp and email.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" variant="outline" size="sm">
              <HelpCircle className="h-4 w-4" aria-hidden="true" />
              Ask a question
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion items={FAQS} />
        </Reveal>
      </div>
    </section>
  )
}
