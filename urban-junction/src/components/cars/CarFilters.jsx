import { RotateCcw, Search, SlidersHorizontal } from 'lucide-react'
import { SelectInput, TextInput } from '../ui/Field'
import {
  FUELS,
  TRANSMISSIONS,
  VEHICLE_CATEGORIES,
  priceBounds,
  uniqueMakes,
  uniqueYears,
} from '../../data/vehicles'
import { formatGHSCompact } from '../../lib/format'

const PRICE_STEPS = [
  { value: '', label: 'Any price' },
  { value: '0-400000', label: `Under ${formatGHSCompact(400000)}` },
  { value: '400000-700000', label: `${formatGHSCompact(400000)} – ${formatGHSCompact(700000)}` },
  { value: '700000-1100000', label: `${formatGHSCompact(700000)} – ${formatGHSCompact(1100000)}` },
  { value: '1100000-999999999', label: `Above ${formatGHSCompact(1100000)}` },
]

/**
 * Search + filter bar for the inventory grid.
 * `filters` / `onChange` are controlled from the Cars page.
 */
export default function CarFilters({ filters, onChange, resultCount }) {
  const bounds = priceBounds()
  const set = (key) => (e) => onChange({ ...filters, [key]: e.target.value })

  const isFiltered =
    filters.search ||
    filters.make ||
    filters.category ||
    filters.year ||
    filters.price ||
    filters.transmission ||
    filters.fuel

  return (
    <div className="rounded-3xl bg-white p-5 ring-1 ring-midnight/8 shadow-soft sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-ink">
          <SlidersHorizontal className="h-4 w-4 text-electric" aria-hidden="true" />
          Search &amp; filter inventory
        </p>
        <p className="text-sm text-slate-body" aria-live="polite">
          <span className="font-bold text-electric">{resultCount}</span>{' '}
          {resultCount === 1 ? 'vehicle' : 'vehicles'} found
        </p>
      </div>

      <div className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-4">
        {/* Search */}
        <div className="relative md:col-span-2 xl:col-span-4">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            id="car-search"
            value={filters.search}
            onChange={set('search')}
            placeholder="Search by make, model or keyword…"
            aria-label="Search vehicles"
            className="w-full rounded-2xl border border-midnight/12 bg-white py-3 pl-11 pr-4 text-[15px] text-ink placeholder:text-slate-400 outline-none transition-all focus:border-electric focus:ring-4 focus:ring-electric/15"
          />
        </div>

        <SelectInput
          id="filter-make"
          label="Make"
          value={filters.make}
          onChange={set('make')}
          placeholder="All makes"
          options={uniqueMakes()}
        />
        <SelectInput
          id="filter-category"
          label="Category"
          value={filters.category}
          onChange={set('category')}
          placeholder="All categories"
          options={VEHICLE_CATEGORIES}
        />
        <SelectInput
          id="filter-year"
          label="Manufacturing year"
          value={filters.year}
          onChange={set('year')}
          placeholder="Any year"
          options={uniqueYears().map(String)}
        />
        <SelectInput
          id="filter-price"
          label="Price range"
          value={filters.price}
          onChange={set('price')}
          options={PRICE_STEPS.filter((p) => p.value !== '')}
          placeholder={PRICE_STEPS[0].label}
        />
        <SelectInput
          id="filter-transmission"
          label="Transmission"
          value={filters.transmission}
          onChange={set('transmission')}
          placeholder="Any transmission"
          options={TRANSMISSIONS}
        />
        <SelectInput
          id="filter-fuel"
          label="Fuel type"
          value={filters.fuel}
          onChange={set('fuel')}
          placeholder="Any fuel type"
          options={FUELS}
        />
        <div className="flex items-end">
          <button
            type="button"
            onClick={() =>
              onChange({ search: '', make: '', category: '', year: '', price: '', transmission: '', fuel: '' })
            }
            disabled={!isFiltered}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-midnight/12 px-4 py-3 text-sm font-semibold text-midnight transition-all hover:border-electric/50 hover:bg-ice disabled:opacity-40 disabled:hover:border-midnight/12 disabled:hover:bg-transparent"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reset filters
          </button>
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-400">
        Sample inventory range: {formatGHSCompact(bounds.min)} – {formatGHSCompact(bounds.max)}.
        Listings are placeholders until real stock is added.
      </p>
    </div>
  )
}
