import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Logo from '../ui/Logo'
import { BUSINESS, NAV_LINKS } from '../../data/config'
import { VEHICLE_CATEGORIES } from '../../data/vehicles'
import { IMPORT_STEPS } from '../../data/content'
import { whatsappLink } from '../../lib/format'

/* Inline brand glyphs (this lucide version ships no brand icons). */
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.2h2.2V5.4h-2.6c-2.5 0-3.9 1.6-3.9 4v1.8H7.6v2.9h2.1v6.5h3v-6.5h2.3l.4-2.9h-2.7V9.6c0-.9.4-1.4 1.3-1.4Z" />
    </svg>
  )
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.5 4h3.4l4.1 5.5L16.9 4h2.4l-6.1 6.9L19.8 20h-3.4l-4.4-5.9L7 20H4.6l6.4-7.3L4.5 4Z" />
    </svg>
  )
}
function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 8.2c-.2-1.4-.9-2.2-2.3-2.4C17.5 5.5 12 5.5 12 5.5s-5.5 0-7.3.3C3.3 6 2.6 6.8 2.4 8.2 2.2 9.6 2.2 12 2.2 12s0 2.4.2 3.8c.2 1.4.9 2.2 2.3 2.4 1.8.3 7.3.3 7.3.3s5.5 0 7.3-.3c1.4-.2 2.1-1 2.3-2.4.2-1.4.2-3.8.2-3.8s0-2.4-.2-3.8ZM10.1 15.1V8.9l5.3 3.1-5.3 3.1Z" />
    </svg>
  )
}
function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
}

function ColumnTitle({ children }) {
  return (
    <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.16em] text-sky">
      {children}
    </h3>
  )
}

export default function Footer() {
  const { contact, socials } = BUSINESS

  return (
    <footer className="relative overflow-hidden bg-midnight text-white/70">
      {/* ambient glow */}
      <div aria-hidden="true" className="glow-blob -top-32 left-1/4 h-96 w-96 bg-electric/20" />
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-40" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed">
              Vehicle sourcing, importation and sales — helping customers in Ghana find and acquire
              quality vehicles from international markets.
            </p>
            <p className="mt-5 font-display text-lg font-extrabold text-white">
              {BUSINESS.slogan}
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.id] || FacebookIcon
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={`${s.label} (link to be added)`}
                    title={`${s.label} — placeholder`}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/8 text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:bg-electric hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <ColumnTitle>Explore</ColumnTitle>
            <ul className="space-y-3 text-[15px]">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/request-car" className="font-semibold text-sky transition-colors hover:text-white">
                  Request a Car
                </Link>
              </li>
            </ul>
          </nav>

          {/* Categories */}
          <nav aria-label="Vehicle categories" className="lg:col-span-2">
            <ColumnTitle>Categories</ColumnTitle>
            <ul className="space-y-3 text-[15px]">
              {VEHICLE_CATEGORIES.map((c) => (
                <li key={c}>
                  <Link to={`/cars?category=${encodeURIComponent(c)}`} className="transition-colors hover:text-white">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-2">
            <ColumnTitle>Importation</ColumnTitle>
            <ul className="space-y-3 text-[15px]">
              {IMPORT_STEPS.map((s) => (
                <li key={s.number}>
                  <Link to="/import-services" className="transition-colors hover:text-white">
                    <span className="mr-1.5 font-semibold text-electric">{s.number}</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <ColumnTitle>Contact</ColumnTitle>
            <ul className="space-y-4 text-[15px]">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                <a href={contact.phoneHref} className="transition-colors hover:text-white">
                  {contact.phoneDisplay}
                  <span className="block text-xs text-white/40">placeholder</span>
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                <a
                  href={whatsappLink(contact.whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {contact.whatsappDisplay}
                  <span className="block text-xs text-white/40">placeholder</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-white">
                  {contact.email}
                  <span className="block text-xs text-white/40">placeholder</span>
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                <span>
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                <span>{contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
          </p>
          <p className="text-white/45">
            Website in development — contact details, inventory and testimonials are placeholders.
          </p>
        </div>
      </div>
    </footer>
  )
}
