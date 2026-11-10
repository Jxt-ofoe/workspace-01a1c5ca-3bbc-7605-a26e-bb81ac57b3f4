import { ArrowRight, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { BUSINESS, WHATSAPP_DEFAULT_MESSAGE } from '../../data/config'
import { whatsappLink } from '../../lib/format'

/** Full-width conversion banner before the footer. */
export default function CTABanner() {
  return (
    <section className="bg-white pb-24 sm:pb-28">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-deep via-royal to-electric px-8 py-16 text-center shadow-lift sm:px-14 sm:py-20">
            <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-30" />
            <div aria-hidden="true" className="glow-blob -top-24 right-0 h-72 w-72 bg-sky/40" />

            <h2 className="relative font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Ready to drive better?
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Tell us the car you want — or browse what is already here. Either way, your journey
              starts at the junction.
            </p>
            <div className="relative mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button to="/request-car" variant="light" size="lg">
                Request a Car
                <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
              </Button>
              <Button
                href={whatsappLink(BUSINESS.contact.whatsappNumber, WHATSAPP_DEFAULT_MESSAGE)}
                external
                variant="whatsapp"
                size="lg"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
                WhatsApp us now
              </Button>
            </div>
            <p className="relative mt-6 text-xs text-white/60">
              {BUSINESS.slogan}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
