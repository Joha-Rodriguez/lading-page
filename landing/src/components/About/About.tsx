import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionLabel from '@/components/UI/SectionLabel'
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '@/animations/variants'
import styles from './About.module.css'

const SKILLS = [
  'Gestión del Cambio',
  'Cultura Organizacional',
  'Desarrollo de Talentos',
  'Liderazgo Ejemplar',
  'Coaching y Mentoring',
  'Resolución de Conflictos',
]

const TIMELINE = [
  { year: '2016', event: 'Inicios en el sector financiero — Gestión y Operaciones' },
  { year: '2019', event: 'Liderazgo de Equipos de Alto Rendimiento' },
  { year: '2021', event: 'Gestión Estratégica del Talento Humano' },
  { year: '2023', event: 'Consultoría y Facilitación de Aprendizaje' },
  { year: '2026', event: 'Hoy — Acompañamiento profesional y liderazgo' },
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
              <img src={`${import.meta.env.BASE_URL}johanna.png`} alt="Johanna Rodríguez" className={styles.avatarImg} />
            </div>
            <div className={styles.avatarRing} />
            <div className={styles.avatarRing2} />
            {/* Floating tags */}
            <div className={`${styles.floatTag} ${styles.tag1}`}>Gestión Humana</div>
            <div className={`${styles.floatTag} ${styles.tag2}`}>10 años XP</div>
            <div className={`${styles.floatTag} ${styles.tag3}`}>Desarrollo de Talento</div>
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
            Impulsando el
            <br />
            <span className={styles.accent}>potencial humano.</span>
          </motion.h2>

          <motion.p className={styles.subHeading} variants={fadeUp} style={{ color: 'var(--c-aqua)', fontWeight: 500, fontSize: '1.15rem', marginBottom: '16px' }}>
            Porque detrás de cada gran resultado existe una persona que decidió crecer.
          </motion.p>

          <motion.p className={styles.body} variants={fadeUp}>
            Mi misión es acompañar a personas y organizaciones en la construcción de entornos donde el talento, el liderazgo y el bienestar se conviertan en motores de transformación. Creo en el desarrollo integral como la base para alcanzar objetivos sostenibles y generar impacto positivo en la vida de las personas y en los resultados de las organizaciones.
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
