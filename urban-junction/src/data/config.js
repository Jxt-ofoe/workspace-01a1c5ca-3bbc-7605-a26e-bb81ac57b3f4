/**
 * ============================================================================
 *  URBAN JUNCTION — SITE CONFIGURATION  (EDIT ME)
 * ============================================================================
 *  Every business detail below is a PLACEHOLDER for development.
 *  Replace the values with the company's real contact details before launch.
 *  Nothing here is confirmed business information.
 * ============================================================================
 */

export const BUSINESS = {
  name: 'Urban Junction',
  legalName: 'Urban Junction',
  slogan: 'Drive Better. Live Bigger.',
  heroHeadline: 'Your Dream Car, Our Junction.',
  heroSubline:
    'Import, buy and drive the best cars from around the world with trust, transparency and top-notch service.',

  /* --- PLACEHOLDER CONTACT DETAILS (do not publish as real) ------------- */
  contact: {
    phoneDisplay: '+233 00 000 0000', // PLACEHOLDER — replace with official phone
    phoneHref: 'tel:+233000000000', // PLACEHOLDER
    whatsappNumber: '233000000000', // PLACEHOLDER — official WhatsApp number, digits only, country code first
    whatsappDisplay: '+233 00 000 0000', // PLACEHOLDER
    email: 'hello@urbanjunction.example', // PLACEHOLDER
    addressLine1: 'Showroom address to be confirmed', // PLACEHOLDER
    addressLine2: 'Accra, Ghana', // PLACEHOLDER
    hours: 'Mon – Sat: 9:00am – 6:00pm (placeholder)', // PLACEHOLDER
  },

  /* --- PLACEHOLDER SOCIAL LINKS (replace with real profiles) ----------- */
  socials: [
    { id: 'facebook', label: 'Facebook', href: '#' },
    { id: 'instagram', label: 'Instagram', href: '#' },
    { id: 'x', label: 'X (Twitter)', href: '#' },
    { id: 'tiktok', label: 'TikTok', href: '#' },
    { id: 'youtube', label: 'YouTube', href: '#' },
  ],

  /** Flags the UI so placeholder contact info is visibly marked in dev. */
  isPlaceholderContact: true,
}

/** Default message used by floating / card WhatsApp buttons. */
export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello Urban Junction! I found your website and I would like to enquire about a vehicle.'

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Our Cars', to: '/cars' },
  { label: 'Import Services', to: '/import-services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
