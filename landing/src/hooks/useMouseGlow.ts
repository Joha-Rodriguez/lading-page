import { useEffect, useRef } from 'react'

export function useMouseGlow(selector = '.mouse-glow') {
  useEffect(() => {
    const el = document.querySelector(selector) as HTMLElement | null
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.setProperty('--mx', `${e.clientX}px`)
      el.style.setProperty('--my', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [selector])
}

export function useMagneticButton(ref: React.RefObject<HTMLElement>, strength = 0.3) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * strength
      const dy = (e.clientY - cy) * strength
      el.style.transform = `translate(${dx}px, ${dy}px)`
    }

    const onLeave = () => {
      el.style.transform = 'translate(0, 0)'
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    }

    const onEnter = () => {
      el.style.transition = 'transform 0.15s ease-out'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mouseenter', onEnter)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mouseenter', onEnter)
    }
  }, [ref, strength])
}
