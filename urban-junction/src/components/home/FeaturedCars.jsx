import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { SampleTag } from '../ui/Badge'
import Button from '../ui/Button'
import CarCard from '../cars/CarCard'
import { VEHICLES } from '../../data/vehicles'

/** Homepage showcase of current (sample) inventory. */
export default function FeaturedCars() {
  const featured = VEHICLES.slice(0, 6)

  return (
    <section id="featured" className="relative bg-white py-24 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-center gap-5">
          <SampleTag>Sample inventory — editable</SampleTag>
          <SectionHeading
            eyebrow="Our Cars"
            title="Vehicles ready for the road"
            subtitle="A curated selection from our current inventory. Every listing shows full specifications, honest condition notes and a one-tap enquiry path."
          />
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((v, i) => (
            <CarCard key={v.slug} vehicle={v} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/cars" variant="dark" size="lg">
            Browse the full inventory
            <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
