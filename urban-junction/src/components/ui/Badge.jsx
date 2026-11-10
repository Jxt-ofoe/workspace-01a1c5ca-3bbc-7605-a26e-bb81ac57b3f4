import { cx } from '../../lib/format'

const STATUS_STYLES = {
  Available: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  Reserved: 'bg-amber-50 text-amber-700 ring-amber-600/25',
  'In Transit': 'bg-sky-50 text-royal ring-royal/25',
  Sold: 'bg-slate-100 text-slate-500 ring-slate-400/25',
}

const DOT = {
  Available: 'bg-emerald-500',
  Reserved: 'bg-amber-500',
  'In Transit': 'bg-electric',
  Sold: 'bg-slate-400',
}

/** Availability / informational pill. */
export function StatusBadge({ status, className }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset',
        STATUS_STYLES[status] || 'bg-slate-100 text-slate-600 ring-slate-400/25',
        className,
      )}
    >
      <span aria-hidden="true" className={cx('h-1.5 w-1.5 rounded-full', DOT[status] || 'bg-slate-400')} />
      {status}
    </span>
  )
}

/** Neutral pill, e.g. category chips. */
export function Pill({ children, active, className, ...rest }) {
  return (
    <button
      type="button"
      className={cx(
        'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 whitespace-nowrap',
        active
          ? 'bg-midnight text-white shadow-soft'
          : 'bg-white text-slate-body ring-1 ring-inset ring-midnight/10 hover:bg-ice hover:text-midnight',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

/** Marks development-only sample content. */
export function SampleTag({ className, children = 'Sample inventory' }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full bg-ice px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-deep ring-1 ring-inset ring-royal/20',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8h.01M12 11v5" strokeLinecap="round" />
      </svg>
      {children}
    </span>
  )
}
