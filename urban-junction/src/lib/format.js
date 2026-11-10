/**
 * Small formatting + link helpers shared across the site.
 */

/** Format a number as Ghana cedis, e.g. 1150000 -> "GHS 1,150,000" */
export function formatGHS(amount) {
  return `GHS ${Number(amount).toLocaleString('en-GH', { maximumFractionDigits: 0 })}`
}

/** Compact price for tight spaces, e.g. "GHS 1.15M" */
export function formatGHSCompact(amount) {
  const n = Number(amount)
  if (n >= 1_000_000) return `GHS ${(n / 1_000_000).toFixed(2).replace(/\.00$/, '')}M`
  if (n >= 1_000) return `GHS ${Math.round(n / 1_000)}K`
  return formatGHS(n)
}

/** Format mileage, e.g. 42000 -> "42,000 km" */
export function formatMileage(km) {
  return `${Number(km).toLocaleString('en-GH')} km`
}

/**
 * Build a WhatsApp deep link. The number lives in src/data/config.js and is a
 * clearly-marked placeholder until the business supplies its official line.
 */
export function whatsappLink(number, message) {
  const digits = String(number).replace(/\D/g, '')
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${digits}${text}`
}

/** Join class names, skipping falsy values. */
export function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}
