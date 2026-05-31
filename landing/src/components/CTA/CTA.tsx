import { useRef, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { useMagneticButton } from '@/hooks/useMouseGlow'
import { staggerContainer, fadeUp } from '@/animations/variants'
import styles from './CTA.module.css'

const CTAScene = lazy(() => import('./CTAScene'))

export default function CTA() {
  const btnRef = useRef<HTMLAnchorElement>(null)
  useMagneticButton(btnRef as React.RefObject<HTMLElement>, 0.35)

  return (
    <section id="cta" className={styles.section}>
      {/* 3D subtle bg */}
      <div className={styles.canvasWrap} aria-hidden>
        <Suspense fallback={null}>
          <CTAScene />
        </Suspense>
      </div>

      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.inner}>
        <motion.div
          className={styles.card}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className={styles.eyebrow} variants={fadeUp}>
            ¿Tienes un proyecto en mente?
          </motion.p>
          <motion.h2 className={styles.heading} variants={fadeUp}>
            Construyamos algo
            <br />
            <span className={styles.accent}>extraordinario.</span>
          </motion.h2>
          <motion.p className={styles.sub} variants={fadeUp}>
            Respondo en menos de 24 horas. Sin reuniones innecesarias,
            directo al grano y con resultados que importan.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeUp}>
            <a ref={btnRef} href="mailto:contacto@johannarodriguez.dev" className={styles.btnPrimary}>
              <Mail size={16} />
              contacto@johannarodriguez.dev
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div className={styles.social} variants={fadeUp}>
            <a href="https://github.com/Joha-Rodriguez" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/joha-rodriguez-co/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://x.com/Joharodriguezco" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X (Twitter)">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com/joha.rodriguez.co" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
