import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CarFront, Menu, MessageCircle, X } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { BUSINESS, NAV_LINKS } from '../../data/config'
import { whatsappLink } from '../../lib/format'
import { cx } from '../../lib/format'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile drawer on navigation
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const waHref = whatsappLink(
    BUSINESS.contact.whatsappNumber,
    'Hello Urban Junction! I would like to enquire about your vehicles.',
  )

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'glass shadow-soft' : 'bg-transparent',
      )}
    >
      <nav aria-label="Main" className="container-x flex h-[76px] items-center justify-between gap-4">
        <Logo variant={scrolled ? 'dark' : 'light'} />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cx(
                    'relative rounded-full px-4 py-2 text-[15px] font-semibold transition-colors duration-300',
                    scrolled
                      ? isActive
                        ? 'text-electric'
                        : 'text-ink/75 hover:text-electric'
                      : isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className={cx(
                          'absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full',
                          scrolled ? 'bg-electric' : 'bg-sky',
                        )}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href={waHref} external variant={scrolled ? 'outline' : 'ghostLight'} size="sm" aria-label="Chat with us on WhatsApp">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </Button>
          <Button to="/request-car" size="sm">
            <CarFront className="h-4 w-4" aria-hidden="true" />
            Request a Car
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={cx(
            'grid h-11 w-11 place-items-center rounded-xl transition-colors lg:hidden',
            scrolled ? 'bg-ice text-midnight' : 'glass-dark text-white',
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-midnight/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              className="fixed inset-x-3 top-3 z-50 overflow-hidden rounded-3xl bg-white shadow-lift lg:hidden"
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between px-5 pb-2 pt-5">
                <Logo variant="dark" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-ice text-midnight"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="px-3 py-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        cx(
                          'flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-base font-bold transition-colors',
                          isActive ? 'bg-ice text-electric' : 'text-ink hover:bg-ice',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-1 gap-2.5 border-t border-midnight/8 px-5 py-5">
                <Button to="/request-car" size="md">
                  <CarFront className="h-4 w-4" aria-hidden="true" />
                  Request a Car
                </Button>
                <Button href={waHref} external variant="whatsapp" size="md">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
