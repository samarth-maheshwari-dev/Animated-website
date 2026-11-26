// Prices are null — boss fills these in during handoff meeting.
// isVeg follows FSSAI standard: true = green dot, false = red dot.
import butterChickenImg from '@assets/images/menu/butter-chicken.jpg'
import chickenTikkaImg from '@assets/images/menu/chicken-tikka.jpg'
import fishTikkaImg from '@assets/images/menu/fish-tikka.jpg'
import crispyCornImg from '@assets/images/menu/crispy-corn.jpg'
import chilliPaneerImg from '@assets/images/menu/chilli-paneer.jpg'
import westernSizzlerImg from '@assets/images/menu/western-sizzler.jpg'
import lachhaParathaImg from '@assets/images/menu/lachha-paratha.jpg'
import blueLagoonImg from '@assets/images/menu/blue-lagoon.jpg'
import virginMojitoImg from '@assets/images/menu/virgin-mojito.jpg'

export const MENU_CATEGORIES = [
  'All',
  'Starters',
  'Main Course',
  'Sizzlers',
  'Noodles & Rice',
  'Beverages',
  'Desserts',
]

export const MENU_ITEMS = [
  // ── STARTERS ──
  {
    id: 1, name: 'Crispy Corn',
    category: 'Starters',
    description: 'Golden crispy corn tossed with herbs and spices',
    price: null, isVeg: true, image: crispyCornImg,
  },
  {
    id: 2, name: 'Chicken Tikka',
    category: 'Starters',
    description: 'Tender chicken marinated in classic tandoori spices',
    price: null, isVeg: false, image: chickenTikkaImg,
  },
  {
    id: 3, name: 'Fish Tikka Masala',
    category: 'Starters',
    description: 'Fresh fish in aromatic masala marinade, grilled to order',
    price: null, isVeg: false, image: fishTikkaImg,
  },
  {
    id: 4, name: 'Chilli Paneer',
    category: 'Starters',
    description: 'Crispy paneer cubes tossed in spicy Indo-Chinese sauce',
    price: null, isVeg: true, image: chilliPaneerImg,
  },
  // ── MAIN COURSE ──
  {
    id: 5, name: 'Butter Chicken',
    category: 'Main Course',
    description: 'Slow-cooked chicken in rich tomato-cream gravy',
    price: null, isVeg: false, image: butterChickenImg,
  },
  {
    id: 6, name: 'Paneer Masala',
    category: 'Main Course',
    description: 'Soft paneer cubes simmered in rich tomato-onion gravy',
    price: null, isVeg: true, image: '/paneer-masala.png',
  },
  {
    id: 7, name: 'Lachha Paratha',
    category: 'Main Course',
    description: 'Multi-layered flaky flatbread, served with butter',
    price: null, isVeg: true, image: lachhaParathaImg,
  },
  // ── SIZZLERS ──
  {
    id: 8, name: 'Western Sizzler',
    category: 'Sizzlers',
    description: 'Grilled chicken and vegetables on a smoking iron plate',
    price: null, isVeg: false, image: westernSizzlerImg,
  },
  // ── NOODLES & RICE ──
  {
    id: 9, name: 'Hakka Noodles',
    category: 'Noodles & Rice',
    description: 'Wok-tossed noodles with vegetables and soy sauce',
    price: null, isVeg: true, image: '/sizzler-noodles.png',
  },
  // ── BEVERAGES ──
  {
    id: 10, name: 'Virgin Mojito',
    category: 'Beverages',
    description: 'Fresh mint, lime wedge, and sparkling soda — chilled',
    price: null, isVeg: true, image: virginMojitoImg,
  },
  {
    id: 11, name: 'Blue Lagoon',
    category: 'Beverages',
    description: 'Blue curacao syrup, lemon juice, and sparkling water',
    price: null, isVeg: true, image: blueLagoonImg,
  },
  // ── DESSERTS ──
  {
    id: 12, name: 'Sizzling Brownie',
    category: 'Desserts',
    description: 'Warm chocolate brownie with vanilla ice cream on a sizzler plate',
    price: null, isVeg: true, image: '/brownie-sizzler.png',
  },
]
