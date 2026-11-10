import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Cog, Fuel, Gauge, MessageCircle } from 'lucide-react'
import { StatusBadge } from '../ui/Badge'
import { BUSINESS } from '../../data/config'
import { formatGHS, formatMileage, whatsappLink } from '../../lib/format'

function Spec({ icon: Icon, children }) {
  return (
    <span className="flex items-center gap-1.5 text-[13px] text-slate-body">
      <Icon className="h-3.5 w-3.5 text-royal" aria-hidden="true" />
      {children}
    </span>
  )
}

/**
 * Professional inventory card. Every card carries a View Details button and a
 * WhatsApp enquiry shortcut.
 */
export default function CarCard({ vehicle, index = 0 }) {
  const waHref = whatsappLink(
    BUSINESS.contact.whatsappNumber,
    `Hello Urban Junction! I am interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} listed on your website. Is it still available?`,
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-midnight/8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-electric/30"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ice">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute left-4 top-4">
          <StatusBadge status={vehicle.status} />
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-midnight/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {vehicle.category}
        </div>
        {/* price ribbon */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/85 to-transparent px-5 pb-3.5 pt-10">
          <p className="font-display text-xl font-extrabold text-white">{formatGHS(vehicle.priceGHS)}</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-extrabold leading-snug text-ink">
              {vehicle.make} {vehicle.model}
            </h3>
            <p className="mt-0.5 text-sm text-slate-body">
              {vehicle.trim} · {vehicle.exteriorColor}
            </p>
          </div>
          <span className="mt-0.5 inline-flex items-center gap-1.5 rounded-full bg-ice px-2.5 py-1 text-xs font-bold text-deep">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {vehicle.year}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-midnight/6 pt-4">
          <Spec icon={Cog}>{vehicle.transmission}</Spec>
          <Spec icon={Fuel}>{vehicle.fuel}</Spec>
          <Spec icon={Gauge}>{formatMileage(vehicle.mileageKm)}</Spec>
        </div>

        <div className="mt-5 flex items-center gap-2.5 pt-1">
          <Link
            to={`/cars/${vehicle.slug}`}
            className="flex-1 rounded-full bg-midnight px-5 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-electric hover:shadow-glow"
          >
            View Details
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about the ${vehicle.year} ${vehicle.make} ${vehicle.model} on WhatsApp`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#25D366]/10 text-[#128C4B] ring-1 ring-inset ring-[#25D366]/30 transition-all duration-300 hover:bg-[#25D366] hover:text-white"
          >
            <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
