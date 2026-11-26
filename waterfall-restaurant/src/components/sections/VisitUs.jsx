import { MapPin, Clock, Phone, Navigation, Instagram, ExternalLink } from 'lucide-react'
import { WHATSAPP_BOOKING_URL, INSTAGRAM_URL, GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED_URL } from '@data/eventsData'
import SectionLabel from '@components/ui/SectionLabel'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function VisitUs() {
  const mapRef = useScrollReveal({ x: -50, duration: 0.9 })
  const infoRef = useScrollReveal({ x: 50, duration: 0.9 })
  const rowsRef = useScrollReveal({ y: 20, stagger: 0.1, duration: 0.6 })

  return (
    <section id="visit" className="bg-background-dark py-24 relative z-10 overflow-hidden border-t border-primary/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <SectionLabel>FIND US</SectionLabel>
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
            Visit the <span className="text-primary">Waterfall</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map Embed Column — clickable overlay opens real Google Maps listing */}
          <div ref={mapRef} className="rounded-3xl overflow-hidden shadow-premium border border-primary/20 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] relative group scroll-reveal">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Waterfall Restaurant Indore — Google Maps"
              className="absolute inset-0"
            />
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open The Waterfall Restaurant Indore in Google Maps"
              className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 bg-background-dark/90 hover:bg-primary text-white hover:text-background-dark border border-primary/40 px-3.5 py-2 rounded-full text-xs font-body font-semibold backdrop-blur-md transition-all duration-300 shadow-lg"
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Contact Info Column */}
          <div ref={infoRef} className="bg-stone-900 rounded-3xl p-6 sm:p-8 shadow-premium border border-primary/10 h-full scroll-reveal">
            <div ref={rowsRef}>
              {/* Address */}
              <div className="flex items-start gap-4 sm:gap-5 py-5 border-b border-primary/10">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary border border-primary/20">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display text-white text-lg font-bold mb-1">Address</h4>
                  <p className="font-body text-stone-400 text-sm leading-relaxed">
                    Near MITM College / Medicaps University,<br />
                    Indore, Madhya Pradesh 453331
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 sm:gap-5 py-5 border-b border-primary/10">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary border border-primary/20">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-display text-white text-lg font-bold mb-1">Hours</h4>
                  <p className="font-body text-stone-400 text-sm leading-relaxed">
                    11:00 AM – 11:30 PM • Open 7 days<br />
                    <span className="text-stone-500 text-xs">Thu till 11:00 PM · Sun till 11:45 PM</span>
                  </p>
                </div>
              </div>

              {/* Contact & Social */}
              <div className="flex items-start gap-4 sm:gap-5 py-5 border-b border-primary/10">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary border border-primary/20">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display text-white text-lg font-bold mb-1">Booking & Enquiries</h4>
                  <p className="font-body text-stone-400 text-sm leading-relaxed">
                    Call: <a href="tel:+917000359623" className="text-primary font-bold hover:underline transition-all">070003 59623</a>
                  </p>
                  <p className="font-body text-stone-400 text-sm leading-relaxed mt-1">
                    WhatsApp: <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline transition-all">Chat on WhatsApp</a>
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 sm:gap-5 py-5">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary border border-primary/20">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="font-display text-white text-lg font-bold mb-1">Instagram</h4>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-primary font-semibold text-sm hover:underline transition-all inline-flex items-center gap-1.5"
                  >
                    @the_waterfall_restaurant
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Directions Button */}
              <div className="mt-6">
                <a 
                  href={GOOGLE_MAPS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-3 group py-4 h-auto shadow-lg shadow-primary/10"
                >
                  <Navigation size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span className="uppercase tracking-[0.2em] text-xs font-bold">Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
