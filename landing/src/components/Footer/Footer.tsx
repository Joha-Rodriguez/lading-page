import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>JR</span>
              <span className={styles.logoText}>JOHANNA</span>
            </div>
            <p className={styles.tagline}>
              Innovación digital estratégica.
              <br />
              Bogotá, Colombia — Remoto mundial.
            </p>
          </div>
          <nav className={styles.nav}>
            <span className={styles.navTitle}>Navegación</span>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className={styles.contact}>
            <span className={styles.navTitle}>Contacto</span>
            <a href="mailto:contacto@johannarodriguez.dev" className={styles.link}>contacto@johannarodriguez.dev</a>
            <a href="tel:+573001234567" className={styles.link}>+57 300 123 4567</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Johanna Rodríguez. Todos los derechos reservados.
          </p>
          <p className={styles.copy}>
            Diseñado y desarrollado con precisión.
          </p>
        </div>
      </div>
    </footer>
  )
}
