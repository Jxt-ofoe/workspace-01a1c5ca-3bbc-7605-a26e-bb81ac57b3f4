import { Link } from 'react-router-dom'
import { cx } from '../../lib/format'

/**
 * Urban Junction brand lockup: gradient "junction" mark + wordmark.
 * variant: 'light' (for dark backgrounds) | 'dark' (for light backgrounds)
 */
export default function Logo({ variant = 'dark', className, compact = false }) {
  const light = variant === 'light'
  return (
    <Link
      to="/"
      aria-label="Urban Junction — home"
      className={cx('group inline-flex items-center gap-2.5', className)}
    >
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric via-royal to-deep shadow-glow transition-transform duration-300 group-hover:scale-105"
      >
        <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none">
          <path
            d="M32 52V32M32 32 18 14M32 32l14-18"
            stroke="#fff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="18" cy="12" r="4" fill="#63A9E8" />
          <circle cx="46" cy="12" r="4" fill="#fff" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span
            className={cx(
              'block font-display text-[17px] font-extrabold tracking-tight',
              light ? 'text-white' : 'text-ink',
            )}
          >
            Urban Junction
          </span>
          <span
            className={cx(
              'mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em]',
              light ? 'text-sky' : 'text-electric',
            )}
          >
            Drive Better. Live Bigger.
          </span>
        </span>
      )}
    </Link>
  )
}
