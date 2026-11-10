import { cx } from '../../lib/format'

const CONTROL =
  'w-full rounded-2xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 ' +
  'transition-all duration-200 outline-none focus:border-electric focus:ring-4 focus:ring-electric/15 ' +
  'disabled:bg-slate-50'

function Label({ htmlFor, children, required }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
      {children}
      {required && (
        <span className="ml-0.5 text-electric" aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
}

function ErrorText({ id, children }) {
  if (!children) return null
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6M12 16h.01" strokeLinecap="round" />
      </svg>
      {children}
    </p>
  )
}

export function TextInput({ id, label, required, error, className, ...rest }) {
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        name={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cx(CONTROL, error ? 'border-red-400' : 'border-midnight/12')}
        {...rest}
      />
      <ErrorText id={`${id}-error`}>{error}</ErrorText>
    </div>
  )
}

export function SelectInput({ id, label, required, error, options, placeholder, className, ...rest }) {
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <div className="relative">
        <select
          id={id}
          name={id}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cx(CONTROL, 'appearance-none pr-10', error ? 'border-red-400' : 'border-midnight/12')}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => {
            const value = typeof opt === 'string' ? opt : opt.value
            const text = typeof opt === 'string' ? opt : opt.label
            return (
              <option key={value} value={value}>
                {text}
              </option>
            )
          })}
        </select>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <ErrorText id={`${id}-error`}>{error}</ErrorText>
    </div>
  )
}

export function TextArea({ id, label, required, error, className, rows = 5, ...rest }) {
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cx(CONTROL, 'resize-y', error ? 'border-red-400' : 'border-midnight/12')}
        {...rest}
      />
      <ErrorText id={`${id}-error`}>{error}</ErrorText>
    </div>
  )
}
