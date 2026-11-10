import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import useSeo from '../lib/useSeo'
import CarCard from '../components/cars/CarCard'
import CarFilters from '../components/cars/CarFilters'
import { SampleTag } from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { VEHICLES } from '../data/vehicles'

const EMPTY = {
  search: '',
  make: '',
  category: '',
  year: '',
  price: '',
  transmission: '',
  fuel: '',
}

function inPriceRange(price, range) {
  if (!range) return true
  const [min, max] = range.split('-').map(Number)
  return price >= min && price <= max
}

export default function Cars() {
  useSeo({
    title: 'Our Cars',
    description:
      'Browse Urban Junction inventory of imported SUVs, crossovers, sedans and pickups in Ghana. Filter by make, category, year, price and transmission.',
  })

  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState(EMPTY)

  // Allow deep links e.g. /cars?category=SUV (used by footer links)
  useEffect(() => {
    const category = searchParams.get('category')
    if (category) setFilters((f) => ({ ...f, category }))
  }, [searchParams])

  const results = useMemo(() => {
    const q = filters.search.trim().toLowerCase()
    return VEHICLES.filter((v) => {
      const haystack = `${v.make} ${v.model} ${v.trim} ${v.category} ${v.year} ${v.fuel} ${v.transmission}`.toLowerCase()
      return (
        (!q || haystack.includes(q)) &&
        (!filters.make || v.make === filters.make) &&
        (!filters.category || v.category === filters.category) &&
        (!filters.year || String(v.year) === filters.year) &&
        (!filters.transmission || v.transmission === filters.transmission) &&
        (!filters.fuel || v.fuel === filters.fuel) &&
        inPriceRange(v.priceGHS, filters.price)
      )
    })
  }, [filters])

  return (
    <>
      {/* Page header */}
      <section className="relative isolate overflow-hidden bg-midnight pb-16 pt-36 sm:pb-20 sm:pt-40">
        <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-40" />
        <div aria-hidden="true" className="glow-blob -right-24 -top-24 h-96 w-96 bg-electric/25" />
        <div className="container-x relative">
          <SampleTag className="mb-5">Sample inventory — editable</SampleTag>
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Our Cars
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-sky/85 sm:text-lg">
            Browse the current inventory. Filter by make, category, year, price and transmission —
            then view full specifications or enquire in one tap.
          </p>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="relative bg-ice/50 py-14 sm:py-16">
        <div className="container-x">
          <Reveal>
            <CarFilters filters={filters} onChange={setFilters} resultCount={results.length} />
          </Reveal>

          {results.length > 0 ? (
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((v, i) => (
                <CarCard key={v.slug} vehicle={v} index={i} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl bg-white px-8 py-20 text-center ring-1 ring-midnight/8 shadow-soft">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ice text-royal">
                <SearchX className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-extrabold text-ink">
                No vehicles match those filters
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] text-slate-body">
                Try widening your search — or tell us exactly what you want and we will source it
                from international markets for you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button onClick={() => setFilters(EMPTY)} variant="outline">
                  Clear all filters
                </Button>
                <Button to="/request-car">Request this vehicle instead</Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
