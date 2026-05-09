import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data'
import { useMagneticButton } from '@/hooks/useMouseGlow'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const ctaRef = useRef<HTMLAnchorElement>(null)
  useMagneticButton(ctaRef as React.RefObject<HTMLElement>, 0.25)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoMark}>JR</span>
          <span className={styles.logoText}>JOHANNA</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.links} aria-label="Navegación principal">
          {NAV_LINKS.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className={styles.link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          ref={ctaRef}
          href="#cta"
          className={styles.cta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Hablemos
        </motion.a>

        {/* Mobile toggle */}
        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#cta" className={styles.mobileCta} onClick={() => setOpen(false)}>
              Hablemos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
