import { motion } from 'framer-motion'
import styles from './SectionLabel.module.css'

interface Props {
  label: string
  align?: 'left' | 'center'
}

export default function SectionLabel({ label, align = 'left' }: Props) {
  return (
    <motion.div
      className={styles.wrapper}
      style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}
      initial={{ opacity: 0, x: align === 'center' ? 0 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <span className={styles.line} />
      <span className={styles.text}>{label}</span>
      <span className={styles.line} />
    </motion.div>
  )
}
