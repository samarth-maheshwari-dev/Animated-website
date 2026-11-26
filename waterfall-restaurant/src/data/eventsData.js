export const WHATSAPP_NUMBER = '917000359623'
export const WHATSAPP_BASE   = `https://wa.me/${WHATSAPP_NUMBER}`
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
