import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '@/components/UI/SectionLabel'
import { PROJECTS } from '@/data'
import { staggerContainer, fadeUp } from '@/animations/variants'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <SectionLabel label="Portfolio" />
          <motion.h2 className={styles.heading} variants={fadeUp}>
            Proyectos que
            <br />
            <span className={styles.accent}>hablan por sí solos.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.id}
              className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}
              variants={fadeUp}
              onHoverStart={() => setHovered(p.id)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ scale: 1.01 }}
            >
              {/* Background visual */}
              <div
                className={styles.cardBg}
                style={{
                  background: `radial-gradient(ellipse at 30% 40%, ${p.color}22 0%, transparent 65%)`,
                }}
              />

              {/* Noise grid */}
              <div className={styles.cardGrid} />

              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>{p.category}</span>
                  <span className={styles.year}>{p.year}</span>
                </div>

                <div className={styles.cardBottom}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.description}</p>
                </div>

                <AnimatePresence>
                  {hovered === p.id && (
                    <motion.div
                      className={styles.cardArrow}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#cta" className={styles.ctaBtn}>
            Ver todos los proyectos
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
