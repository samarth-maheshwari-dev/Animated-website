import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVid from '@assets/videos/hero-background.mp4'
import heroNight from '@assets/images/ambiance/hero-night-waterfall.png'
import { WHATSAPP_BASE } from '@data/eventsData'

export default function Hero() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const title = "Dine Where the Water Falls"
  const titleWords = title.split(" ")

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-background-dark py-24 sm:py-0"
    >
      {/* Background Video with Parallax */}
      <div ref={bgRef} className="absolute top-[-15%] left-0 w-full h-[130%] gpu-accelerated bg-[#0A0A0A]" style={{ willChange: 'transform' }}>
        <video
          src={heroVid}
          poster={heroNight}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Immediate background color to prevent white flash */}
      <div className="absolute inset-0 bg-[#0A1A1A] -z-10" aria-hidden="true" />

      {/* Hero Content - Editorial & Grounded */}
      <div className="section-container relative z-20 pt-20">
        <div className="max-w-3xl">
          {/* Minimal Eyebrow */}
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-primary/90 mb-6"
          >
            Est. 2020 · Caps Town, Indore · 4.8★ on Google (10,742+ Reviews)
          </motion.p>

          {/* Headline */}
          <h1 className="font-display text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
            {title}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="font-body text-stone-300 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Open-air dining beside a real cascading waterfall, live table-side grill, and poolside seating near Medicaps University.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              Reserve a Table
            </a>
            <a href="#menu" className="btn-outline w-full sm:w-auto">
              Explore Menu
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/50 to-background-dark/20 pointer-events-none" />
    </section>
  )
}
