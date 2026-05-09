import { useEffect } from 'react'
import styles from './MouseGlow.module.css'

export default function MouseGlow() {
  useEffect(() => {
    const el = document.getElementById('mouse-glow')
    if (!el) return

    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return <div id="mouse-glow" className={styles.glow} aria-hidden />
}
