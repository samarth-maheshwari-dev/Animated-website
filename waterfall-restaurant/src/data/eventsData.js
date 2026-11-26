export const WHATSAPP_NUMBER = '917000359623'
export const WHATSAPP_BASE   = `https://wa.me/${WHATSAPP_NUMBER}`
export const WHATSAPP_BOOKING_URL = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hi! I would like to reserve a table at The Waterfall Restaurant, Indore.')}`
export const INSTAGRAM_URL   = 'https://www.instagram.com/the_waterfall_restaurant/'
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/The+Waterfall+Restaurant+Indore/@22.6182403,75.8010383,17z/data=!3m1!4b1!4m6!3m5!1s0x3962f9072272d8c3:0x8f0eb02c506070a0!8m2!3d22.6182403!4d75.8010383!16s%2Fg%2F11j8wthl5y'
export const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/The+Waterfall+Restaurant+Indore/@22.6182403,75.8010383,17z/data=!4m16!1m9!3m8!1s0x3962f9072272d8c3:0x8f0eb02c506070a0!2sThe+Waterfall+Restaurant+Indore!8m2!3d22.6182403!4d75.8010383!9m1!1b1!16s%2Fg%2F11j8wthl5y!3m5!1s0x3962f9072272d8c3:0x8f0eb02c506070a0!8m2!3d22.6182403!4d75.8010383!16s%2Fg%2F11j8wthl5y'
export const GOOGLE_DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=22.6182403,75.8010383'
export const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9527300376126!2d75.8010383!3d22.618240300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f9072272d8c3%3A0x8f0eb02c506070a0!2sThe%20Waterfall%20Restaurant%20Indore!5e0!3m2!1sen!2sin!4v1795695374439!5m2!1sen!2sin'
import corporateImg from '@assets/images/ambiance/evening-poolside-real.jpg'
import birthdayImg from '@assets/images/ambiance/birthday-real.jpg'
import poolsideImg from '@assets/images/ambiance/poolside-evening.jpg'

export const EVENTS = [
  {
    id: 1,
    emoji: '🎂',
    title: 'Birthday & Anniversary',
    image: birthdayImg,
    subtitle: 'We set the scene. You bring the love.',
    description:
      'Celebrate your birthday or anniversary with candlelit tables beside the waterfall, warm ambient lighting, and custom table arrangements on prior request.',
    whatsappMessage:
      'Hi! I want to enquire about a Birthday/Anniversary dinner table at The Waterfall Restaurant, Indore.',
  },
  {
    id: 2,
    emoji: '💼',
    title: 'Corporate Dinners',
    image: corporateImg,
    subtitle: 'Refined dining for your team & clients.',
    description:
      'Host team dinners and client evenings in our open-air waterfall dining space with comfortable group seating and a multi-cuisine menu.',
    whatsappMessage:
      'Hi! I want to enquire about group/corporate dinner seating at The Waterfall Restaurant, Indore.',
  },
  {
    id: 3,
    emoji: '🌙',
    title: 'Poolside Special Evening',
    image: poolsideImg,
    subtitle: 'Poolside Dining · Evening Ambiance',
    description:
      'Dine beside the illuminated pool with warm evening lighting, floating tray service, and freshly grilled dishes straight to your table.',
    whatsappMessage:
      'Hi! I want to enquire about Poolside Evening dining at The Waterfall Restaurant, Indore.',
  },
]
