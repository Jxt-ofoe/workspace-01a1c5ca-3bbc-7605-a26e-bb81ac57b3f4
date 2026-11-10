import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { BUSINESS, WHATSAPP_DEFAULT_MESSAGE } from '../../data/config'
import { whatsappLink } from '../../lib/format'

/**
 * Floating WhatsApp button — stays visible while browsing.
 * Uses the configurable placeholder number from src/data/config.js.
 */
export default function WhatsAppFab() {
  return (
    <motion.a
      href={whatsappLink(BUSINESS.contact.whatsappNumber, WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Urban Junction on WhatsApp"
      className="group fixed bottom-6 right-5 z-50 sm:right-8"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgb(37_211_102/0.45)] transition-shadow group-hover:shadow-[0_16px_40px_rgb(37_211_102/0.55)]">
        {/* soft pulse ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.6s]"
        />
        <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} aria-hidden="true" />
      </span>
      <span
        className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-midnight px-3.5 py-2 text-xs font-semibold text-white opacity-0 shadow-lift transition-all duration-300 group-hover:opacity-100"
      >
        Chat with us
      </span>
    </motion.a>
  )
}
