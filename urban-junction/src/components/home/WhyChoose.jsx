import {
  Globe2,
  HeartHandshake,
  MessagesSquare,
  Route,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { WHY_CHOOSE } from '../../data/content'

const ICONS = {
  shield: ShieldCheck,
  globe: Globe2,
  message: MessagesSquare,
  heart: HeartHandshake,
  route: Route,
  spark: Sparkles,
}

/** Six reasons to choose Urban Junction. */
export default function WhyChoose() {
  return (
    <section className="relative bg-ice/60 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Urban Junction"
          title="Built around the way you buy a car"
          subtitle="No pressure, no opacity. Just a clear, well-supported path from first enquiry to key handover."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = ICONS[item.icon] || Sparkles
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.09} className="h-full">
                <div className="group h-full rounded-3xl bg-white p-7 ring-1 ring-midnight/8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-royal text-white shadow-glow transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate-body">{item.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
