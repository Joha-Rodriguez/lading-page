import { motion } from 'framer-motion'
import { Briefcase, TrendingUp, ShieldCheck, GraduationCap, HeartHandshake } from 'lucide-react'
import SectionLabel from '@/components/UI/SectionLabel'
import { staggerContainer, fadeUp } from '@/animations/variants'
import styles from './Authority.module.css'

const AUTHORITY_PILLARS = [
  {
    id: '01',
    title: 'Experiencia en gestión humana',
    subtitle: 'Dirección y Desarrollo Estratégico',
    icon: <Briefcase size={22} />,
    description: 'Diseño e implementación de políticas de desarrollo organizacional, cultura corporativa y bienestar integral alineadas con los objetivos clave de negocio.'
  },
  {
    id: '02',
    title: 'Desarrollo de talento',
    subtitle: 'Programas de Crecimiento y Sucesión',
    icon: <TrendingUp size={22} />,
    description: 'Estructuración de planes de carrera, evaluación objetiva de competencias y diseño de itinerarios formativos para potenciar el talento de alto valor.'
  },
  {
    id: '03',
    title: 'Liderazgo de equipos',
    subtitle: 'Cultura de Alto Rendimiento',
    icon: <ShieldCheck size={22} />,
    description: 'Dirección y mentoría de equipos bajo una cultura orientada a resultados medibles y excelencia operativa, liderando desde el ejemplo diario.'
  },
  {
    id: '04',
    title: 'Procesos de formación',
    subtitle: 'Capacitación y Cierre de Brechas',
    icon: <GraduationCap size={22} />,
    description: 'Concepción y despliegue de planes educativos organizacionales que conectan las necesidades operativas de la empresa con metodologías de aprendizaje activo.'
  },
  {
    id: '05',
    title: 'Acompañamiento profesional',
    subtitle: 'Coaching y Mentoring Ejecutivo',
    icon: <HeartHandshake size={22} />,
    description: 'Procesos personalizados de mentoring y coaching estratégico para mandos medios y líderes emergentes, fortaleciendo sus habilidades y resiliencia.'
  }
]

export default function Authority() {
  return (
    <section id="authority" className={styles.section}>
      <div className={styles.orb} />
      <div className={styles.inner}>
        {/* Split Left Column: Heading and intro */}
        <motion.div 
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionLabel label="Pilares de Autoridad" />
          <motion.h2 className={styles.heading} variants={fadeUp}>
            Liderando con el ejemplo y
            <br />
            <span className={styles.accent}>gestionando personas.</span>
          </motion.h2>
          <motion.p className={styles.sub} variants={fadeUp}>
            Mi trayectoria de 10 años en el sector financiero me ha enseñado que el verdadero crecimiento empresarial nace cuando el desarrollo humano se alinea con la eficiencia operativa.
          </motion.p>
        </motion.div>

        {/* Split Right Column: Card stack */}
        <motion.div 
          className={styles.right}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {AUTHORITY_PILLARS.map((pillar) => (
            <motion.div 
              key={pillar.id}
              className={styles.card}
              variants={fadeUp}
              whileHover={{ x: 8, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>
                  {pillar.icon}
                </div>
                <div className={styles.titleArea}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.cardTitle}>{pillar.title}</h3>
                    <span className={styles.index}>{pillar.id}</span>
                  </div>
                  <span className={styles.subtitle}>{pillar.subtitle}</span>
                </div>
              </div>
              <p className={styles.description}>{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
