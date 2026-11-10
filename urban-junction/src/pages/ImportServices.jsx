import {
  ArrowRight,
  ClipboardCheck,
  Container,
  FileCheck2,
  Search,
  Truck,
} from 'lucide-react'
import useSeo from '../lib/useSeo'
import ImportSteps from '../components/home/ImportSteps'
import CTABanner from '../components/home/CTABanner'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import shipping from '../assets/images/import-shipping.jpg'

const INCLUDED = [
  {
    icon: Search,
    title: 'Market searching',
    body: 'We scan trusted international markets and verified sellers for vehicles that match your brief.',
  },
  {
    icon: ClipboardCheck,
    title: 'Condition checks',
    body: 'Vehicle history and condition information is reviewed and shared with you before purchase.',
  },
  {
    icon: FileCheck2,
    title: 'Documentation',
    body: 'Purchase, export and import paperwork is coordinated on your behalf, step by step.',
  },
  {
    icon: Container,
    title: 'Shipping logistics',
    body: 'Booking, routing and freight arrangements are handled end to end, with updates throughout.',
  },
  {
    icon: Truck,
    title: 'Clearance & delivery',
    body: 'We support port clearance and arrange delivery so your vehicle reaches you ready for the road.',
  },
]

export default function ImportServices() {
  useSeo({
    title: 'Import Services',
    description:
      'Urban Junction sources, ships and delivers imported vehicles to customers in Ghana — with clear updates from sourcing to handover.',
  })

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[62vh] items-center overflow-hidden bg-midnight pb-20 pt-36 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <img
            src={shipping}
            alt="Vehicle carrier ship loaded with cars at a port"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/60" />
        </div>
        <div className="container-x relative">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sky">
            Importation Services
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Import your exact car, <span className="text-gradient">without the guesswork.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sky/90 sm:text-lg">
            Tell us what you want and we source it from international markets — then manage
            shipping, clearance and delivery while keeping you informed at every step.
          </p>
          <div className="mt-9">
            <Button to="/request-car" size="lg">
              Request an Import
              <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Four steps */}
      <ImportSteps />

      {/* What's included */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we handle"
            title="Every part of the journey, covered"
            subtitle="Importation is many small jobs done well. These are the ones we take off your plate."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.09} className="h-full">
                <div className="group h-full rounded-3xl bg-ice/60 p-7 ring-1 ring-inset ring-royal/10 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-electric shadow-soft ring-1 ring-inset ring-royal/10 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-electric group-hover:to-royal group-hover:text-white">
                    <item.icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate-body">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
