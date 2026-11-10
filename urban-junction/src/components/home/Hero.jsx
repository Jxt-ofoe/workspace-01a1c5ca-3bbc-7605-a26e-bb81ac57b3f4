import { motion } from 'framer-motion'
import { ArrowRight, CarFront, ChevronDown, ShieldCheck } from 'lucide-react'
import Button from '../ui/Button'
import { BUSINESS } from '../../data/config'
import heroCar from '../../assets/images/hero-car.jpg'

const EASE = [0.22, 1, 0.36, 1]

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
})

/**
 * Homepage hero — premium blue treatment with flagship vehicle photography.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-midnight pt-[76px]">
      {/* Vehicle photography */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={heroCar}
          alt="Luxury SUV in deep blue night lighting"
          className="h-full w-full object-cover object-center"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
        />
        {/* Blue gradient treatment */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/70" />
        <div aria-hidden="true" className="glow-blob -left-24 top-1/3 h-[28rem] w-[28rem] bg-electric/25" />
        <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-30" />
      </div>

      <div className="container-x relative py-24">
        <div className="max-w-2xl">
          <motion.p
            {...fadeUp(0.15)}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sky"
          >
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Trusted vehicle importation · Ghana
          </motion.p>

          <motion.h1
            {...fadeUp(0.28)}
            className="font-display text-[2.6rem] font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Your Dream Car,
            <br />
            <span className="text-gradient">Our Junction.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.42)} className="mt-7 max-w-xl text-lg leading-relaxed text-sky/90 sm:text-xl">
            {BUSINESS.heroSubline}
          </motion.p>

          <motion.div {...fadeUp(0.56)} className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button to="/cars" size="lg">
              Explore Our Cars
              <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
            </Button>
            <Button to="/request-car" variant="ghostLight" size="lg">
              <CarFront className="h-4.5 w-4.5" aria-hidden="true" />
              Request a Car
            </Button>
          </motion.div>

          {/* Quiet trust strip */}
          <motion.dl
            {...fadeUp(0.72)}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/12 pt-7"
          >
            {[
              ['Sourcing', 'International markets'],
              ['Process', 'Updates at every step'],
              ['Service', 'Personal & transparent'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70">{k}</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white/90">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#featured"
        aria-label="Scroll to featured vehicles"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-6 w-6" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
