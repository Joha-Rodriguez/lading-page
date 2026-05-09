import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionLabel from '@/components/UI/SectionLabel'
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '@/animations/variants'
import styles from './About.module.css'

const SKILLS = [
  'React / Next.js / TypeScript',
  'Node.js / API REST / GraphQL',
  'AWS / Vercel / Docker',
  'Figma / Motion Design',
  'Three.js / WebGL / GSAP',
  'PostgreSQL / MongoDB / Redis',
]

const TIMELINE = [
  { year: '2016', event: 'Inicios en el sector financiero — Análisis y Resultados' },
  { year: '2019', event: 'Liderazgo de Equipos de Alto Rendimiento' },
  { year: '2021', event: 'Gestión Estratégica de Proyectos Fintech' },
  { year: '2023', event: 'Consultoría en Innovación y Estrategia Digital' },
  { year: '2026', event: 'Hoy — Liderando con el ejemplo' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`${styles.orb}`} />
      <div className={styles.inner}>
        {/* Left */}
        <motion.div
          className={styles.left}
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              <img src="/johanna.png" alt="Johanna Rodríguez" className={styles.avatarImg} />
            </div>
            <div className={styles.avatarRing} />
            <div className={styles.avatarRing2} />
            {/* Floating tags */}
            <div className={`${styles.floatTag} ${styles.tag1}`}>React Expert</div>
            <div className={`${styles.floatTag} ${styles.tag2}`}>10 años XP</div>
            <div className={`${styles.floatTag} ${styles.tag3}`}>47+ proyectos</div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className={styles.right}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel label="Sobre mí" />

          <motion.h2 className={styles.heading} variants={fadeUp}>
            Ingeniería con
            <br />
            <span className={styles.accent}>alma de diseñador.</span>
          </motion.h2>

          <motion.p className={styles.body} variants={fadeUp}>
            Soy una líder estratégica con 10 años transformando ideas complejas
            en productos digitales de clase mundial. Mi obsesión es el detalle:
            desde la arquitectura estratégica hasta la experiencia final que genera
            valor real para el usuario.
          </motion.p>

          <motion.p className={styles.body} variants={fadeUp}>
            Trabajo con organizaciones ambiciosas y empresas que entienden que la
            innovación y el diseño son ventajas competitivas fundamentales en el
            mercado actual.
          </motion.p>

          {/* Skills */}
          <motion.div className={styles.skills} variants={staggerContainer}>
            {SKILLS.map((s) => (
              <motion.div key={s} className={styles.skill} variants={fadeUp}>
                <CheckCircle2 size={13} color="var(--c-aqua)" />
                <span>{s}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div className={styles.timeline} variants={staggerContainer}>
            {TIMELINE.map((t, i) => (
              <motion.div key={t.year} className={styles.timelineItem} variants={fadeUp}>
                <span className={styles.year}>{t.year}</span>
                <div className={`${styles.dot} ${i === TIMELINE.length - 1 ? styles.dotActive : ''}`} />
                <span className={styles.event}>{t.event}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
