# NEXUS — Landing Page Premium

## Stack
- React 18 + TypeScript
- Vite 5
- Framer Motion (animaciones)
- React Three Fiber + Three.js (3D)
- Lucide React (iconos)
- CSS Modules (estilos)

## Paleta de Colores
| Token | Hex | Uso |
|-------|-----|-----|
| `--c-void` | `#050818` | Fondo principal |
| `--c-deep` | `#0B0940` | Fondo secundario |
| `--c-primary` | `#3370A6` | Azul primario |
| `--c-steel` | `#5095BF` | Azul medio |
| `--c-sky` | `#60A4BF` | Azul cielo |
| `--c-aqua` | `#84C9D9` | Acento/highlights |

## Instalación y arranque

```bash
npm install
npm run dev
```

El servidor de desarrollo arrancará en `http://localhost:5173`

## Build para producción

```bash
npm run build
npm run preview
```

## Arquitectura

```
src/
├── assets/
├── components/
│   ├── Navbar/        # Navegación fija con blur scroll
│   ├── Hero/          # Hero + R3F esfera de partículas
│   ├── About/         # Sobre mí con avatar animado
│   ├── Services/      # Grid 3×2 de servicios
│   ├── Portfolio/     # Grid de proyectos con hover
│   ├── Testimonials/  # Cards de testimonios
│   ├── CTA/           # Call to action con partículas 3D
│   ├── Footer/        # Footer completo
│   └── UI/            # MouseGlow, SectionLabel
├── hooks/
│   ├── useMouseGlow.ts   # Efecto glow + magnetic buttons
│   └── useScrollReveal.ts
├── styles/
│   └── global.css        # Variables CSS + reset
├── data/
│   └── index.ts          # Todo el contenido del sitio
├── animations/
│   └── variants.ts       # Framer Motion variants
├── App.tsx
└── main.tsx
```

## Personalización

Edita `src/data/index.ts` para cambiar todo el contenido
(servicios, proyectos, testimonios, stats, links de navegación).

Los colores están centralizados en `src/styles/global.css` como variables CSS.
