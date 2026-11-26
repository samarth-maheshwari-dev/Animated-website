import React from 'react'
import { ZoomParallax } from '@components/ui/zoom-parallax'
import { cn } from '@/lib/utils'
import heroNight from '@assets/images/ambiance/hero-night-waterfall.png'
import aboutDay from '@assets/images/ambiance/about-day-waterfall.png'
import midnightBBQ from '@assets/images/ambiance/Midnight BBQ.png'
import waterfallMist from '@assets/images/ambiance/Waterfall mist.png'
import forestPlatter from '@assets/images/ambiance/FOREST PLATTER.png'
import birthdayEvent from '@assets/images/ambiance/birthday-event.png'
import corporateDinners from '@assets/images/ambiance/corporate-dinners.png'

// Gallery images — real waterfall restaurant ambiance & signature experience photos
export default function Gallery() {

  const images = [
    {
      src: heroNight,
      alt: 'Night Lit Waterfall — The Waterfall Restaurant Indore',
    },
    {
      src: aboutDay,
      alt: 'Daytime Waterfall Seating',
    },
    {
      src: midnightBBQ,
      alt: 'Midnight BBQ Live Table Grill',
    },
    {
      src: waterfallMist,
      alt: 'Waterfall Mist Dining Experience',
    },
    {
      src: forestPlatter,
      alt: 'Forest Platter Signature Dish',
    },
    {
      src: birthdayEvent,
      alt: 'Birthday & Anniversary Cabana Setup',
    },
    {
      src: corporateDinners,
      alt: 'Corporate Dinner & Group Seating',
    },
  ];

  return (
    <section id="gallery" className="bg-background-dark min-h-screen w-full relative z-10 border-y border-primary/5">
      <div className="relative flex h-[30vh] md:h-[40vh] items-center justify-center overflow-hidden">
        {/* Radial spotlight effect */}
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_60%)]',
            'blur-[40px]',
          )}
        />
        <div className="text-center z-10 px-4">
          <p className="font-body text-primary text-xs tracking-widest uppercase mb-4">Our Ambiance & Food</p>
          <h2 className="font-display text-white text-3xl md:text-5xl font-bold">
            Immerse In The <span className="text-primary italic">Experience</span>
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
            From the cascading waterfall to the sizzling iron plates — every moment is a memory.
          </p>
        </div>
      </div>
      
      {/* Framer Motion Zoom Parallax */}
      <ZoomParallax images={images} />
      
      {/* Spacing for scroll buffer after parallax */}
      <div className="h-[20vh] bg-background-dark" />
    </section>
  )
}
