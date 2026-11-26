import { Waves, Flame, Umbrella } from 'lucide-react'
import { useScrollReveal } from '@hooks/useScrollReveal'
import SectionLabel from '@components/ui/SectionLabel'
import aboutDay from '@assets/images/ambiance/about-day-waterfall.png'

const USP_ITEMS = [
  {
    icon: Waves,
    title: 'Waterfall Seating',
    text: 'Tables set directly in shallow water right in front of our cascading waterfall.',
  },
  {
    icon: Flame,
    title: 'Live Table-Side Grill',
    text: 'Freshly marinated starters and smoky BBQ served hot at your table.',
  },
  {
    icon: Umbrella,
    title: 'Poolside Evenings',
    text: 'Open-air poolside seating with floating tray dining after sunset.',
  },
]

export default function About() {
  const leftColRef  = useScrollReveal({ y: 24, duration: 0.7 })
  const rightColRef = useScrollReveal({ y: 24, duration: 0.7 })

  return (
    <section id="about" className="bg-background-dark py-24 lg:py-32 relative z-10 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Editorial Column */}
          <div ref={leftColRef} className="lg:col-span-6 scroll-reveal">
            <SectionLabel>OUR STORY</SectionLabel>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold leading-[1.1] mt-3 mb-6">
              More Than a <span className="text-primary">Restaurant</span>
            </h2>
            <p className="font-body text-stone-300 text-base md:text-lg leading-relaxed max-w-xl mb-10">
              Established in 2020 near Medicaps University in Caps Town, The Waterfall Restaurant brings open-air dining right into the water — whether you're sitting with your feet in the shallow waterfall pool or enjoying an evening meal beside the swimming pool.
            </p>

            {/* Clean Architectural Feature List (no cramped emoji boxes) */}
            <div className="divide-y divide-white/10 border-y border-white/10">
              {USP_ITEMS.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="py-5 flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-stone-900 border border-white/10 flex items-center justify-center shrink-0 text-primary group-hover:border-primary/40 transition-colors">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-white text-lg font-semibold leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-body text-stone-400 text-sm leading-relaxed mt-1">
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Real Photo Column */}
          <div ref={rightColRef} className="lg:col-span-6 scroll-reveal">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-stone-900">
              <img
                src={aboutDay}
                alt="The Waterfall Restaurant Indore — daytime waterfall pool seating"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
              <div className="px-5 py-3.5 bg-stone-950/90 border-t border-white/10 flex items-center justify-between text-xs font-body text-stone-400">
                <span>Caps Town, Rau · Indore</span>
                <span className="text-primary font-medium">Open 11:00 AM – 11:30 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
