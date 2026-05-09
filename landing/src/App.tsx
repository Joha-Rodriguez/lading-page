import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import MouseGlow from './components/UI/MouseGlow'

const About = lazy(() => import('./components/About/About'))
const Services = lazy(() => import('./components/Services/Services'))
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'))
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'))
const CTA = lazy(() => import('./components/CTA/CTA'))
const Footer = lazy(() => import('./components/Footer/Footer'))

const Fallback = () => (
  <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #3370A6', borderTopColor: 'transparent', animation: 'spin 0.8s linear infinite' }} />
  </div>
)

export default function App() {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Fallback />}>
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
