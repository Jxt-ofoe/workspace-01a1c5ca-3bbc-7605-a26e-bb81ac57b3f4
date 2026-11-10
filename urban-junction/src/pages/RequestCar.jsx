import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CarFront, Send } from 'lucide-react'
import useSeo from '../lib/useSeo'
import { SelectInput, TextInput, TextArea } from '../components/ui/Field'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import SuccessPanel from '../components/ui/SuccessPanel'
import { BUSINESS } from '../data/config'
import { IMPORT_COUNTRIES, VEHICLE_CATEGORIES, uniqueMakes, uniqueYears } from '../data/vehicles'
import { formatGHS, whatsappLink } from '../lib/format'
import { clean, required, validateEmail, validatePhone } from '../lib/validate'

const BUDGET_BANDS = [
  { value: 'under-300000', label: `Under ${formatGHS(300000)}` },
  { value: '300000-600000', label: `${formatGHS(300000)} – ${formatGHS(600000)}` },
  { value: '600000-1000000', label: `${formatGHS(600000)} – ${formatGHS(1000000)}` },
  { value: '1000000-1500000', label: `${formatGHS(1000000)} – ${formatGHS(1500000)}` },
  { value: 'above-1500000', label: `Above ${formatGHS(1500000)}` },
]

const YEAR_OPTIONS = (() => {
  const current = new Date().getFullYear()
  const out = []
  for (let y = current + 1; y >= 2005; y -= 1) out.push(String(y))
  return out
})()

export default function RequestCar() {
  useSeo({
    title: 'Request a Car',
    description:
      'Tell Urban Junction the vehicle you want — make, model, year, category, budget and preferred import country — and we will source it for you.',
  })

  const [searchParams] = useSearchParams()
  const [values, setValues] = useState({
    fullName: '',
    phone: '',
    email: '',
    make: searchParams.get('make') || '',
    model: searchParams.get('model') || '',
    year: '',
    category: '',
    budget: '',
    country: '',
    requirements: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))

  function handleSubmit(e) {
    e.preventDefault()
    const next = clean({
      fullName: required(values.fullName, 'Full name'),
      phone: validatePhone(values.phone),
      email: validateEmail(values.email),
      make: required(values.make, 'Preferred vehicle make'),
      model: required(values.model, 'Preferred model'),
      year: required(values.year, 'Preferred manufacturing year'),
      category: required(values.category, 'Vehicle category'),
      budget: required(values.budget, 'Budget'),
    })
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  const summary =
    `Hello Urban Junction! I would like to request a vehicle.%0A` +
    `Make: ${values.make || '-'}%0AModel: ${values.model || '-'}%0AYear: ${values.year || '-'}%0A` +
    `Category: ${values.category || '-'}%0ABudget: ${values.budget || '-'}%0A` +
    `Preferred import country: ${values.country || '-'}%0AAdditional requirements: ${values.requirements || '-'}`
  const waHref = whatsappLink(BUSINESS.contact.whatsappNumber, summary)

  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-midnight pb-16 pt-36 sm:pb-20 sm:pt-40">
        <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-40" />
        <div aria-hidden="true" className="glow-blob -right-24 -top-24 h-96 w-96 bg-electric/25" />
        <div className="container-x relative">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sky">
            Request a Car
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Describe it. We&apos;ll <span className="text-gradient">find it.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-sky/85 sm:text-lg">
            Share your preferred vehicle and budget and our sourcing team will get to work across
            international markets on your behalf.
          </p>
        </div>
      </section>

      <section className="bg-ice/50 py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <Reveal>
            {submitted ? (
              <SuccessPanel
                title="Request submitted"
                message={`Thank you, ${values.fullName.split(' ')[0]}. Your request for a ${values.year} ${values.make} ${values.model} has been recorded. Our sourcing team will contact you shortly to confirm details and next steps.`}
                whatsappHref={waHref}
                onReset={() => {
                  setValues({
                    fullName: '',
                    phone: '',
                    email: '',
                    make: '',
                    model: '',
                    year: '',
                    category: '',
                    budget: '',
                    country: '',
                    requirements: '',
                  })
                  setSubmitted(false)
                }}
                resetLabel="Submit another request"
              />
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl bg-white p-6 ring-1 ring-midnight/8 shadow-soft sm:p-10"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-royal text-white shadow-glow">
                    <CarFront className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-ink">Vehicle request form</h2>
                    <p className="text-sm text-slate-body">
                      Fields marked <span className="font-semibold text-electric">*</span> are required.
                    </p>
                  </div>
                </div>

                <fieldset className="mt-8">
                  <legend className="mb-4 font-display text-sm font-extrabold uppercase tracking-[0.14em] text-deep">
                    Your details
                  </legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextInput
                      id="fullName"
                      label="Full name"
                      required
                      autoComplete="name"
                      placeholder="e.g. Kwame Mensah"
                      value={values.fullName}
                      onChange={set('fullName')}
                      error={errors.fullName}
                    />
                    <TextInput
                      id="phone"
                      label="Phone number"
                      required
                      type="tel"
                      autoComplete="tel"
                      placeholder="+233 24 000 0000"
                      value={values.phone}
                      onChange={set('phone')}
                      error={errors.phone}
                    />
                    <TextInput
                      id="email"
                      label="Email address"
                      required
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="sm:col-span-2"
                      value={values.email}
                      onChange={set('email')}
                      error={errors.email}
                    />
                  </div>
                </fieldset>

                <fieldset className="mt-9 border-t border-midnight/6 pt-8">
                  <legend className="mb-4 font-display text-sm font-extrabold uppercase tracking-[0.14em] text-deep">
                    The vehicle you want
                  </legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectInput
                      id="make"
                      label="Preferred vehicle make"
                      required
                      placeholder="Select a make"
                      options={[...new Set([...uniqueMakes(), 'Toyota', 'Honda', 'Ford', 'Hyundai', 'Kia', 'Lexus', 'Mercedes-Benz', 'BMW', 'Nissan', 'Mazda', 'Land Rover'])].sort()}
                      value={values.make}
                      onChange={set('make')}
                      error={errors.make}
                    />
                    <TextInput
                      id="model"
                      label="Preferred model"
                      required
                      placeholder="e.g. RAV4, Accord, X5"
                      value={values.model}
                      onChange={set('model')}
                      error={errors.model}
                    />
                    <SelectInput
                      id="year"
                      label="Preferred manufacturing year"
                      required
                      placeholder="Select a year"
                      options={YEAR_OPTIONS}
                      value={values.year}
                      onChange={set('year')}
                      error={errors.year}
                    />
                    <SelectInput
                      id="category"
                      label="Vehicle category"
                      required
                      placeholder="Select a category"
                      options={VEHICLE_CATEGORIES}
                      value={values.category}
                      onChange={set('category')}
                      error={errors.category}
                    />
                    <SelectInput
                      id="budget"
                      label="Budget in Ghana cedis"
                      required
                      placeholder="Select a budget band"
                      options={BUDGET_BANDS}
                      value={values.budget}
                      onChange={set('budget')}
                      error={errors.budget}
                    />
                    <SelectInput
                      id="country"
                      label="Preferred import country"
                      placeholder="No preference"
                      options={IMPORT_COUNTRIES}
                      value={values.country}
                      onChange={set('country')}
                    />
                    <TextArea
                      id="requirements"
                      label="Additional requirements"
                      rows={4}
                      className="sm:col-span-2"
                      placeholder="Colour, trim, features, seating, fuel preference, delivery city — anything that matters to you."
                      value={values.requirements}
                      onChange={set('requirements')}
                    />
                  </div>
                </fieldset>

                <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <p className="text-xs text-slate-400">
                    Demo mode: this form validates in the browser; server submission arrives with
                    the backend integration.
                  </p>
                  <Button as="button" type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Submit Request
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
