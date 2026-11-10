import { Compass, Handshake, LineChart } from 'lucide-react'
import useSeo from '../lib/useSeo'
import CTABanner from '../components/home/CTABanner'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { ABOUT_PARAGRAPHS, ABOUT_VALUES } from '../data/content'
import { BUSINESS } from '../data/config'
import showroom from '../assets/images/about-showroom.jpg'

const PRINCIPLES = [
  {
    icon: Compass,
    title: 'Guidance first',
    body: 'We start every conversation by understanding the job your vehicle must do and the budget it must fit.',
  },
  {
    icon: LineChart,
    title: 'Clarity always',
    body: 'Pricing conversations, condition notes and timelines are explained in plain language — before you commit.',
  },
  {
    icon: Handshake,
    title: 'Partnership beyond delivery',
    body: 'Our relationship does not end at handover. We remain a call away for advice on your next vehicle too.',
  },
]

export default function About() {
  useSeo({
    title: 'About Us',
    description:
      'Urban Junction is a vehicle sourcing, importation and sales business helping customers in Ghana find and acquire quality vehicles from international markets.',
  })

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-midnight pb-20 pt-36 sm:pt-40">
        <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-40" />
        <div aria-hidden="true" className="glow-blob -right-24 -top-24 h-96 w-96 bg-electric/25" />
        <div className="container-x relative">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sky">
            About Us
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            The junction between you and <span className="text-gradient">the world&apos;s best cars.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-display text-lg font-bold text-sky">{BUSINESS.slogan}</p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={showroom}
                alt="Modern vehicle showroom interior"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-electric">
              <span aria-hidden="true" className="h-px w-6 bg-electric/60" />
              Who we are
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              A simpler, more honest way to buy a car
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-body sm:text-base">
              {ABOUT_PARAGRAPHS.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <dl className="mt-8 grid gap-5 sm:grid-cols-3">
              {ABOUT_VALUES.map((v) => (
                <div key={v.title} className="rounded-2xl bg-ice/70 p-4 ring-1 ring-inset ring-royal/10">
                  <dt className="font-display text-sm font-extrabold text-deep">{v.title}</dt>
                  <dd className="mt-1 text-[13px] leading-snug text-slate-body">{v.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-ice/60 py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="Three principles behind every deal"
            subtitle="They are simple to say and deliberate to practise — on every enquiry, every quotation, every handover."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="h-full">
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-midnight/8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-royal text-white shadow-glow">
                    <p.icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-ink">{p.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate-body">{p.body}</p>
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
