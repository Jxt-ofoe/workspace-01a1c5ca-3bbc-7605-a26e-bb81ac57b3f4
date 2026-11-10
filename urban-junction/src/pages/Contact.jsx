import { useState } from 'react'
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import useSeo from '../lib/useSeo'
import { TextInput, TextArea } from '../components/ui/Field'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import SuccessPanel from '../components/ui/SuccessPanel'
import { BUSINESS, WHATSAPP_DEFAULT_MESSAGE } from '../data/config'
import { whatsappLink } from '../lib/format'
import { clean, required, validateEmail, validatePhone } from '../lib/validate'

const INITIAL = { fullName: '', phone: '', email: '', subject: '', message: '' }

function InfoRow({ icon: Icon, label, value, href, external, note }) {
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ice text-electric ring-1 ring-inset ring-royal/15">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-deep/70">{label}</span>
        <span className="mt-0.5 block font-display text-[15px] font-bold text-ink">{value}</span>
        {note && <span className="mt-0.5 block text-xs text-slate-400">{note}</span>}
      </span>
    </>
  )
  const classes = 'flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-ice/60'
  return href ? (
    <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {inner}
    </a>
  ) : (
    <div className={classes}>{inner}</div>
  )
}

export default function Contact() {
  useSeo({
    title: 'Contact',
    description:
      'Contact Urban Junction by form, phone, email or WhatsApp. Placeholders are used for contact details until the business confirms them.',
  })

  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const { contact } = BUSINESS
  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))

  function handleSubmit(e) {
    e.preventDefault()
    const next = clean({
      fullName: required(values.fullName, 'Full name'),
      phone: validatePhone(values.phone),
      email: validateEmail(values.email),
      subject: required(values.subject, 'Subject'),
      message: required(values.message, 'Message'),
    })
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  const waSummary = whatsappLink(
    contact.whatsappNumber,
    `Hello Urban Junction! My name is ${values.fullName || '(name)'}. ${values.subject ? `Subject: ${values.subject}. ` : ''}${values.message || WHATSAPP_DEFAULT_MESSAGE}`,
  )

  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-midnight pb-16 pt-36 sm:pb-20 sm:pt-40">
        <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-40" />
        <div aria-hidden="true" className="glow-blob -left-24 -top-24 h-96 w-96 bg-electric/25" />
        <div className="container-x relative">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sky">
            Contact
          </p>
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Let&apos;s talk cars.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-sky/85 sm:text-lg">
            Questions, quotations or a specific vehicle in mind — send a message and we will get
            back to you promptly.
          </p>
        </div>
      </section>

      <section className="bg-ice/50 py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          {/* Info column */}
          <Reveal>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-midnight/8 shadow-soft sm:p-8">
              <h2 className="font-display text-xl font-extrabold text-ink">Contact details</h2>
              <p className="mt-2 text-sm text-slate-body">
                Details below are development placeholders until the business confirms official
                contact information.
              </p>
              <div className="mt-6 space-y-1.5">
                <InfoRow icon={Phone} label="Phone" value={contact.phoneDisplay} href={contact.phoneHref} note="Placeholder" />
                <InfoRow
                  icon={MessageCircle}
                  label="WhatsApp"
                  value={contact.whatsappDisplay}
                  href={whatsappLink(contact.whatsappNumber, WHATSAPP_DEFAULT_MESSAGE)}
                  external
                  note="Placeholder number"
                />
                <InfoRow icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} note="Placeholder" />
                <InfoRow icon={MapPin} label="Location" value={`${contact.addressLine1}, ${contact.addressLine2}`} />
                <InfoRow icon={Clock} label="Business hours" value={contact.hours} />
              </div>
              <div className="mt-6 border-t border-midnight/6 pt-6">
                <Button href={whatsappLink(contact.whatsappNumber, WHATSAPP_DEFAULT_MESSAGE)} external variant="whatsapp" className="w-full">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1}>
            {submitted ? (
              <SuccessPanel
                title="Message received"
                message="Thank you for contacting Urban Junction. Our team will respond to your enquiry as soon as possible during business hours."
                whatsappHref={waSummary}
                onReset={() => {
                  setValues(INITIAL)
                  setSubmitted(false)
                }}
              />
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl bg-white p-6 ring-1 ring-midnight/8 shadow-soft sm:p-8"
              >
                <h2 className="font-display text-xl font-extrabold text-ink">Send us a message</h2>
                <p className="mt-2 text-sm text-slate-body">
                  Fields marked <span className="font-semibold text-electric">*</span> are required.
                </p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <TextInput
                    id="fullName"
                    label="Full name"
                    required
                    placeholder="e.g. Ama Serwaa"
                    autoComplete="name"
                    value={values.fullName}
                    onChange={set('fullName')}
                    error={errors.fullName}
                  />
                  <TextInput
                    id="phone"
                    label="Phone number"
                    required
                    type="tel"
                    placeholder="+233 24 000 0000"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={set('phone')}
                    error={errors.phone}
                  />
                  <TextInput
                    id="email"
                    label="Email address"
                    required
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={values.email}
                    onChange={set('email')}
                    error={errors.email}
                  />
                  <TextInput
                    id="subject"
                    label="Subject"
                    required
                    placeholder="e.g. Quotation for a 2021 SUV"
                    value={values.subject}
                    onChange={set('subject')}
                    error={errors.subject}
                  />
                  <TextArea
                    id="message"
                    label="Message"
                    required
                    className="sm:col-span-2"
                    placeholder="Tell us what you need — a specific vehicle, a quotation, or general advice."
                    value={values.message}
                    onChange={set('message')}
                    error={errors.message}
                  />
                </div>
                <div className="mt-7">
                  <Button as="button" type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send message
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
