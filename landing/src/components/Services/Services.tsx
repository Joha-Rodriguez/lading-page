import { motion } from 'framer-motion'
import { Target, Users, BarChart3 } from 'lucide-react'
import SectionLabel from '@/components/UI/SectionLabel'
import { SERVICES } from '@/data'
import { staggerContainer, fadeUp } from '@/animations/variants'
import styles from './Services.module.css'

const ICON_MAP: Record<string, React.ReactNode> = {
  Target: <Target size={22} />,
  Users: <Users size={22} />,
  BarChart3: <BarChart3 size={22} />,
}

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.orb} />
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <SectionLabel label="Servicios" align="center" />
          <motion.h2 className={styles.heading} variants={fadeUp}>
            Lo que puedo hacer
            <br />
            <span className={styles.accent}>por tu negocio.</span>
          </motion.h2>
          <motion.p className={styles.sub} variants={fadeUp}>
            Soluciones end-to-end para equipos que quieren mover rápido
            sin sacrificar calidad ni escalabilidad.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.id}
              className={styles.card}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className={styles.iconWrap}>{ICON_MAP[s.icon]}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
              <div className={styles.tags}>
                {s.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
