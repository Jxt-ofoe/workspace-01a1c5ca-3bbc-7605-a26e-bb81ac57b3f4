import { cx } from '../../lib/format'
import Reveal from './Reveal'

/**
 * Consistent section header: eyebrow label, display title, supporting line.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
  className,
}) {
  const dark = tone === 'dark'
  return (
    <Reveal
      className={cx(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cx(
            'mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]',
            dark ? 'text-sky' : 'text-electric',
          )}
        >
          <span
            aria-hidden="true"
            className={cx('h-px w-6', dark ? 'bg-sky/70' : 'bg-electric/60')}
          />
          {eyebrow}
          {align === 'center' && (
            <span aria-hidden="true" className={cx('h-px w-6', dark ? 'bg-sky/70' : 'bg-electric/60')} />
          )}
        </p>
      )}
      <h2
        className={cx(
          'text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.75rem]',
          dark && 'text-white',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cx(
            'mt-5 text-base leading-relaxed sm:text-lg',
            dark ? 'text-sky/85' : 'text-slate-body',
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
