import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cx } from '../../lib/format'

/**
 * Accessible expandable accordion. One panel open at a time.
 * items: [{ q, a }]
 */
export default function Accordion({ items, className }) {
  const [open, setOpen] = useState(0)

  return (
    <div className={cx('divide-y divide-midnight/8 rounded-3xl bg-white ring-1 ring-midnight/8 shadow-soft', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `faq-panel-${i}`
        const buttonId = `faq-button-${i}`
        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
              >
                <span className="font-display text-base font-bold text-ink sm:text-lg">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={cx(
                    'grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300',
                    isOpen ? 'rotate-45 bg-electric text-white' : 'bg-ice text-deep',
                  )}
                >
                  <Plus className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-slate-body sm:px-8 sm:text-base">
                    {item.a}
                  </p>
                </motion.div>
            )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
