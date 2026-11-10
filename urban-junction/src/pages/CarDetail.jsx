import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Calendar,
  CarFront,
  Check,
  Cog,
  Fuel,
  Gauge,
  MessageCircle,
  Palette,
  ShieldCheck,
  Waypoints,
} from 'lucide-react'
import useSeo from '../lib/useSeo'
import CarGallery from '../components/cars/CarGallery'
import CarCard from '../components/cars/CarCard'
import { StatusBadge, SampleTag } from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { BUSINESS } from '../data/config'
import { getVehicle, relatedVehicles } from '../data/vehicles'
import { formatGHS, formatMileage, whatsappLink } from '../lib/format'

// Lucide has "Armchair"; use a simple inline seat glyph for clarity
function SeatIconSafe(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M6 11V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5" strokeLinecap="round" />
      <path d="M4 13a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" strokeLinecap="round" />
      <path d="M7 18v3M17 18v3" strokeLinecap="round" />
    </svg>
  )
}

function SpecTile({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-ice/70 p-4 ring-1 ring-inset ring-royal/10">
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-deep/70">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </p>
      <p className="mt-1.5 font-display text-[15px] font-extrabold text-ink">{value}</p>
    </div>
  )
}

export default function CarDetail() {
  const { slug } = useParams()
  const vehicle = getVehicle(slug)

  useSeo({
    title: vehicle ? `${vehicle.year} ${vehicle.make} ${vehicle.model}` : 'Vehicle not found',
    description: vehicle
      ? `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim} — ${formatGHS(vehicle.priceGHS)}. ${vehicle.mileageKm.toLocaleString()} km, ${vehicle.transmission}, ${vehicle.fuel}. Enquire with Urban Junction.`
      : 'This vehicle listing could not be found.',
  })

  if (!vehicle) {
    return (
      <section className="bg-white pb-24 pt-40 text-center">
        <div className="container-x">
          <h1 className="font-display text-4xl font-extrabold text-ink">Vehicle not found</h1>
          <p className="mx-auto mt-4 max-w-md text-slate-body">
            This listing may have been sold or removed. Browse the current inventory instead.
          </p>
          <div className="mt-8">
            <Button to="/cars">
              <CarFront className="h-4 w-4" aria-hidden="true" />
              Back to Our Cars
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const waHref = whatsappLink(
    BUSINESS.contact.whatsappNumber,
    `Hello Urban Junction! I am interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.trim}) listed at ${formatGHS(vehicle.priceGHS)}. Please share more details.`,
  )
  const related = relatedVehicles(vehicle.slug)

  return (
    <>
      {/* Header band */}
      <section className="relative isolate overflow-hidden bg-midnight pb-10 pt-32 sm:pt-36">
        <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-40" />
        <div aria-hidden="true" className="glow-blob -left-24 -top-24 h-80 w-80 bg-electric/25" />
        <div className="container-x relative">
          <Link
            to="/cars"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Our Cars
          </Link>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <StatusBadge status={vehicle.status} />
                <SampleTag>Sample listing</SampleTag>
              </div>
              <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <p className="mt-2 text-base text-sky/80">
                {vehicle.trim} · {vehicle.category}
              </p>
            </div>
            <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              {formatGHS(vehicle.priceGHS)}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-ice/50 py-14 sm:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
          <Reveal>
            <CarGallery images={vehicle.images} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} />

            {/* Description */}
            <div className="mt-8 rounded-3xl bg-white p-7 ring-1 ring-midnight/8 shadow-soft sm:p-8">
              <h2 className="font-display text-xl font-extrabold text-ink">About this vehicle</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-body sm:text-base">
                {vehicle.description}
              </p>

              <h3 className="mt-8 font-display text-lg font-extrabold text-ink">Key features</h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {vehicle.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-slate-body">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.1}>
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-3xl bg-white p-6 ring-1 ring-midnight/8 shadow-soft sm:p-7">
                <h2 className="font-display text-lg font-extrabold text-ink">Specifications</h2>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <SpecTile icon={Calendar} label="Year" value={vehicle.year} />
                  <SpecTile icon={Gauge} label="Mileage" value={formatMileage(vehicle.mileageKm)} />
                  <SpecTile icon={Cog} label="Transmission" value={vehicle.transmission} />
                  <SpecTile icon={Fuel} label="Fuel" value={vehicle.fuel} />
                  <SpecTile icon={Palette} label="Exterior" value={vehicle.exteriorColor} />
                  <SpecTile icon={SeatIconSafe} label="Seats" value={vehicle.seats} />
                  <SpecTile icon={Waypoints} label="Drivetrain" value={vehicle.drivetrain} />
                  <SpecTile icon={ShieldCheck} label="Category" value={vehicle.category} />
                </div>
                <dl className="mt-5 space-y-2 border-t border-midnight/6 pt-5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-body">Engine</dt>
                    <dd className="font-semibold text-ink">{vehicle.engine}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-body">Interior</dt>
                    <dd className="font-semibold text-ink">{vehicle.interiorColor}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl bg-white p-6 ring-1 ring-midnight/8 shadow-soft sm:p-7">
                <h2 className="font-display text-lg font-extrabold text-ink">Enquire about this car</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">
                  Ask about availability, inspection reports, pricing and delivery — we respond
                  promptly during business hours.
                </p>
                <div className="mt-5 grid gap-3">
                  <Button
                    to={`/request-car?make=${encodeURIComponent(vehicle.make)}&model=${encodeURIComponent(vehicle.model)}`}
                    size="md"
                  >
                    <CarFront className="h-4 w-4" aria-hidden="true" />
                    Enquire / Request this car
                  </Button>
                  <Button href={waHref} external variant="whatsapp" size="md">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp enquiry
                  </Button>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-400">
                  Sample listing: price and availability are illustrative placeholders, not
                  confirmed stock information.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white py-20 sm:py-24">
          <div className="container-x">
            <Reveal className="mb-10 flex items-end justify-between gap-6">
              <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                You may also like
              </h2>
              <Button to="/cars" variant="ghost" size="sm">
                View all
              </Button>
            </Reveal>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((v, i) => (
                <CarCard key={v.slug} vehicle={v} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
