import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import { cx } from '../../lib/format'

/**
 * Vehicle image gallery. Renders every image in `images`; when a listing has
 * only one photo the thumbnail rail is hidden automatically. Real inventory
 * can supply as many photos as needed and they will appear here.
 */
export default function CarGallery({ images, alt }) {
  const [active, setActive] = useState(0)
  const safe = images?.length ? images : []
  const current = safe[Math.min(active, safe.length - 1)]

  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl bg-ice ring-1 ring-midnight/8 shadow-soft">
        <div className="aspect-[16/10] w-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={current}
              alt={`${alt} — photo ${active + 1} of ${safe.length}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-midnight/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          <Camera className="h-3.5 w-3.5" aria-hidden="true" />
          {active + 1} / {safe.length}
        </span>
      </div>

      {safe.length > 1 && (
        <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pb-1" role="tablist" aria-label="Vehicle photos">
          {safe.map((src, i) => (
            <button
              key={src + i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`View photo ${i + 1}`}
              onClick={() => setActive(i)}
              className={cx(
                'relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl ring-2 transition-all duration-300',
                i === active ? 'ring-electric shadow-glow' : 'ring-transparent opacity-70 hover:opacity-100',
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
