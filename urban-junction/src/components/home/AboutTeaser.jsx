import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { ABOUT_PARAGRAPHS, ABOUT_VALUES } from '../../data/content'
import { BUSINESS } from '../../data/config'
import showroom from '../../assets/images/about-showroom.jpg'

/** About preview with showroom photography. */
export default function AboutTeaser() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={showroom}
              alt="Modern vehicle showroom interior"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>
          {/* floating slogan card */}
          <div className="glass absolute -bottom-8 left-6 right-6 rounded-3xl p-6 shadow-lift sm:left-10 sm:right-auto sm:max-w-xs">
            <p className="font-display text-lg font-extrabold text-ink">{BUSINESS.slogan}</p>
            <p className="mt-1.5 text-sm text-slate-body">
              The standard behind every sourcing conversation and every handover.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-electric">
            <span aria-hidden="true" className="h-px w-6 bg-electric/60" />
            About Us
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Your junction to the world&apos;s car markets
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-body sm:text-base">
            <p>{ABOUT_PARAGRAPHS[0]}</p>
            <p>{ABOUT_PARAGRAPHS[1]}</p>
          </div>

          <dl className="mt-8 grid gap-5 sm:grid-cols-3">
            {ABOUT_VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-ice/70 p-4 ring-1 ring-inset ring-royal/10">
                <dt className="font-display text-sm font-extrabold text-deep">{v.title}</dt>
                <dd className="mt-1 text-[13px] leading-snug text-slate-body">{v.body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9">
            <Button to="/about" variant="outline">
              More about Urban Junction
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
