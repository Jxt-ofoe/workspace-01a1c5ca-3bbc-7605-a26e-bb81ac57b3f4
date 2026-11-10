import { Compass, Home } from 'lucide-react'
import useSeo from '../lib/useSeo'
import Button from '../components/ui/Button'

export default function NotFound() {
  useSeo({ title: 'Page not found' })
  return (
    <section className="relative isolate overflow-hidden bg-midnight py-40 text-center">
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-40" />
      <div aria-hidden="true" className="glow-blob left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 bg-electric/20" />
      <div className="container-x relative">
        <p className="font-display text-7xl font-extrabold text-white/10 sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
          This road doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sky/80">
          The page you are looking for may have moved. Let&apos;s get you back to the junction.
        </p>
        <div className="mt-9 flex justify-center gap-3">
          <Button to="/">
            <Home className="h-4 w-4" aria-hidden="true" />
            Back home
          </Button>
          <Button to="/cars" variant="ghostLight">
            <Compass className="h-4 w-4" aria-hidden="true" />
            Browse cars
          </Button>
        </div>
      </div>
    </section>
  )
}
