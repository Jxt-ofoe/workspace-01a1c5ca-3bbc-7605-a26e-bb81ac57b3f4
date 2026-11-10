import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle, RotateCcw } from 'lucide-react'
import Button from './Button'

/**
 * Confirmation panel shown after a valid form submission.
 * Because the site has no backend yet, it also offers a WhatsApp hand-off so a
 * real enquiry can still reach the business immediately.
 */
export default function SuccessPanel({ title, message, whatsappHref, onReset, resetLabel = 'Send another' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl bg-white p-8 text-center ring-1 ring-midnight/8 shadow-lift sm:p-12"
      role="status"
      aria-live="polite"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
        className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60"
      >
        <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
      </motion.span>
      <h2 className="mt-6 font-display text-2xl font-extrabold text-ink sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-body">{message}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {whatsappHref && (
          <Button href={whatsappHref} external variant="whatsapp">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Continue on WhatsApp
          </Button>
        )}
        {onReset && (
          <Button onClick={onReset} variant="outline">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {resetLabel}
          </Button>
        )}
      </div>
      <p className="mt-6 text-xs text-slate-400">
        Demo mode: submissions are validated in the browser and not yet sent to a server.
      </p>
    </motion.div>
  )
}
