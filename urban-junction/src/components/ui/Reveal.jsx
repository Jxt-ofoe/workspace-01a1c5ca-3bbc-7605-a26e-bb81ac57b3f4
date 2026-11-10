import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Subtle scroll-reveal wrapper (Apple-style fade + rise).
 * `delay` in seconds staggers grids.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  once = true,
  className,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-70px 0px -70px 0px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}
