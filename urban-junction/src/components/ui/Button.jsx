import { Link } from 'react-router-dom'
import { cx } from '../../lib/format'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric ' +
  'disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap'

const SIZES = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[15px] px-6 py-3',
  lg: 'text-base px-8 py-4',
}

const VARIANTS = {
  primary:
    'text-white bg-gradient-to-r from-electric to-royal shadow-glow hover:shadow-lift hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0',
  dark: 'text-white bg-midnight hover:bg-deep shadow-soft hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0',
  outline:
    'text-midnight bg-white/0 border border-midnight/15 hover:border-electric/50 hover:bg-ice hover:-translate-y-0.5 active:translate-y-0',
  light:
    'text-midnight bg-white shadow-soft hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0',
  ghostLight:
    'text-white border border-white/25 bg-white/5 backdrop-blur-md hover:bg-white/15 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0',
  whatsapp:
    'text-white bg-[#1FAF54] hover:bg-[#189a48] shadow-[0_10px_30px_rgb(31_175_84/0.35)] hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'text-electric hover:bg-ice',
}

/**
 * Unified button. Renders as react-router Link, anchor or button.
 *   <Button to="/cars">…</Button>
 *   <Button href="https://…" external>…</Button>
 *   <Button onClick={fn}>…</Button>
 */
export default function Button({
  as = 'button',
  to,
  href,
  external,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}) {
  const classes = cx(BASE, SIZES[size], VARIANTS[variant], className)

  if (as === 'link' || to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
