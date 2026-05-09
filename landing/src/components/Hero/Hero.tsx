import { lazy, Suspense, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { useMagneticButton } from '@/hooks/useMouseGlow'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { STATS } from '@/data'
import styles from './Hero.module.css'

const Scene3D = lazy(() => import('./Scene3D'))

export default function Hero() {
  const ctaRef = useRef<HTMLAnchorElement>(null)
  useMagneticButton(ctaRef as React.RefObject<HTMLElement>, 0.3)

  return (
    <section id="hero" className={styles.hero}>
      {/* Ambient background orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      {/* Grid overlay */}
      <div className={styles.grid} aria-hidden />

      <div className={styles.inner}>
        {/* Left: copy */}
        <motion.div
          className={styles.copy}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={fadeUp}>
            <Sparkles size={12} />
            <span>Disponible para proyectos 2025</span>
          </motion.div>

          <motion.h1 className={styles.headline} variants={fadeUp}>
            Johanna Marcela
            <br />
            <span className={styles.gradientText}>Rodríguez González</span>
          </motion.h1>

          <motion.p className={styles.sub} variants={fadeUp}>
            No se lidera con el cargo. Se lidera con el ejemplo — Y eso lo aprendí
            gestionando personas y resultados al mismo tiempo durante 10 años en
            el sector financiero.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeUp}>
            <a ref={ctaRef} href="#portfolio" className={styles.btnPrimary}>
              Ver mi trabajo
            </a>
            <a href="#about" className={styles.btnGhost}>
              Sobre mí
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div className={styles.stats} variants={staggerContainer}>
            {STATS.map((s) => (
              <motion.div key={s.label} className={styles.stat} variants={fadeUp}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D */}
        <motion.div
          className={styles.canvas}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow} />
            <img 
              src="/johanna.png" 
              alt="Johanna Marcela Rodríguez González" 
              className={styles.profileImage}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} color="var(--c-muted)" />
        </motion.div>
      </motion.div>
    </section>
  )
}
