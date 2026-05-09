import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionLabel from '@/components/UI/SectionLabel'
import { TESTIMONIALS } from '@/data'
import { staggerContainer, fadeUp } from '@/animations/variants'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.orb} />
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <SectionLabel label="Testimonios" align="center" />
          <motion.h2 className={styles.heading} variants={fadeUp}>
            Lo que dicen quienes
            <br />
            <span className={styles.accent}>ya trabajaron conmigo.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              className={styles.card}
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <Quote size={24} className={styles.quoteIcon} />
              <p className={styles.text}>{t.text}</p>
              <div className={styles.footer}>
                <div className={styles.avatarCircle}>{t.avatar}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={12} fill="var(--c-aqua)" color="var(--c-aqua)" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
