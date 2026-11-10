/** Tiny form-validation helpers shared by the contact & request forms. */

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim())

export const isPhone = (v) => /^\+?[0-9\s()-]{9,20}$/.test(String(v).trim())

export function required(value, label = 'This field') {
  return String(value ?? '').trim() ? '' : `${label} is required.`
}

export function validateEmail(value, label = 'Email address') {
  if (!String(value ?? '').trim()) return `${label} is required.`
  return isEmail(value) ? '' : 'Please enter a valid email address.'
}

export function validatePhone(value, label = 'Phone number') {
  if (!String(value ?? '').trim()) return `${label} is required.`
  return isPhone(value) ? '' : 'Please enter a valid phone number (e.g. +233 24 000 0000).'
}

/** Returns an errors object containing only failed fields. */
export function clean(errors) {
  return Object.fromEntries(Object.entries(errors).filter(([, v]) => v))
}
