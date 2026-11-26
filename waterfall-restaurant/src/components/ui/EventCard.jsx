import { WHATSAPP_NUMBER } from '@data/eventsData'
import aboutDay from '@assets/images/ambiance/about-day-waterfall.png'

export default function EventCard({ event }) {
  // Use specific event image if provided, else use day waterfall for Poolside (id: 3)
  const bgImage = event.image || (event.id === 3 ? aboutDay : null)
  
  return (
    <div className="relative group overflow-hidden rounded-2xl min-h-[440px] border border-primary/15 hover:border-primary/50 transition-all duration-500 ease-out cursor-default shadow-premium">
      {/* Background Layer */}
      {bgImage ? (
        <img 
          src={bgImage} 
          alt={event.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-90"
          loading="lazy"
          decoding="async"
          width={600}
          height={800}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-background-dark to-background-dark" />
      )}

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/75 to-background-dark/20 z-10 transition-opacity duration-500" />

      {/* Content Block */}
      <div className="absolute inset-0 z-20 p-7 sm:p-8 flex flex-col justify-end">
        <h3 className="font-display text-white text-2xl font-bold mb-1.5">
          {event.title}
        </h3>
        <p className="font-accent italic text-primary text-lg mb-3">
          {event.subtitle}
        </p>
        <p className="font-body text-stone-300 text-sm leading-relaxed mb-6 line-clamp-3">
          {event.description}
        </p>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(event.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full shadow-none transition-all duration-300"
          aria-label={`Book ${event.title} via WhatsApp`}
        >
          WhatsApp to Enquire
        </a>
      </div>

      {/* Gold Glow Hover */}
      <div className="absolute inset-0 glow-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  )
}
