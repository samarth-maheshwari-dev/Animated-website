import { EVENTS } from '@data/eventsData'
import EventCard from '@components/ui/EventCard'
import SectionLabel from '@components/ui/SectionLabel'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function Events() {
  const sectionRef = useScrollReveal({ stagger: 0.12, y: 30 })

  return (
    <section id="events" className="bg-background-dark py-24 relative z-10 overflow-hidden border-t border-white/10 scroll-reveal">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <SectionLabel>GATHERINGS & CELEBRATIONS</SectionLabel>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold mt-3">
              Events & Special <span className="text-primary">Dining</span>
            </h2>
          </div>
          <p className="text-stone-400 max-w-md text-sm sm:text-base leading-relaxed">
            Birthdays, anniversaries, team dinners, or relaxed poolside evenings — message us directly to reserve a table.
          </p>
        </div>

        {/* 3-col Grid */}
        <div 
          ref={sectionRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
