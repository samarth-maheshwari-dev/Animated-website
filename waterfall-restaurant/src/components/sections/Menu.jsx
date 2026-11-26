import { useState } from 'react'
import { CardStack } from '@components/ui/card-stack'
import SectionLabel from '@components/ui/SectionLabel'
import { useScrollReveal } from '@hooks/useScrollReveal'
import { WHATSAPP_BASE } from '@data/eventsData'
import butterChickenImg from '@assets/images/menu/butter-chicken.jpg'
import chickenTikkaImg from '@assets/images/menu/chicken-tikka.jpg'
import fishTikkaImg from '@assets/images/menu/fish-tikka.jpg'
import crispyCornImg from '@assets/images/menu/crispy-corn.jpg'
import chilliPaneerImg from '@assets/images/menu/chilli-paneer.jpg'
import westernSizzlerImg from '@assets/images/menu/western-sizzler.jpg'
import lachhaParathaImg from '@assets/images/menu/lachha-paratha.jpg'
import blueLagoonImg from '@assets/images/menu/blue-lagoon.jpg'
import virginMojitoImg from '@assets/images/menu/virgin-mojito.jpg'

// Menu items — 12 real dishes from The Waterfall Restaurant
const curatedItems = [
  {
    id: "butter-chicken",
    title: "Signature Butter Chicken",
    description: "Slow-cooked farm-fresh chicken resting in a velvety rich tomato-cream gravy, finished with fenugreek and butter.",
    tag: "Main Course",
    isVeg: false,
    imageSrc: butterChickenImg
  },
  {
    id: "chicken-tikka",
    title: "Chicken Tikka",
    description: "Tender chicken marinated in classic tandoori spices, skewered and grilled over open coals for a smoky char.",
    tag: "Starters",
    isVeg: false,
    imageSrc: chickenTikkaImg
  },
  {
    id: "fish-tikka",
    title: "Charcoal Fish Tikka Masala",
    description: "Fresh catch of the day marinated in robust aromatic masala and grilled perfectly to order over glowing coals.",
    tag: "Starters",
    isVeg: false,
    imageSrc: fishTikkaImg
  },
  {
    id: "crispy-corn",
    title: "Golden Crispy Corn",
    description: "Sweet corn kernels dusted and fried until golden, then tossed with wok-charred peppers, herbs, and spices.",
    tag: "Starters",
    isVeg: true,
    imageSrc: crispyCornImg
  },
  {
    id: "chilli-paneer",
    title: "Wok-Tossed Chilli Paneer",
    description: "Crispy paneer cubes tossed in a fiery, sweet, and tangy Indo-Chinese sauce with bell peppers and spring onions.",
    tag: "Starters",
    isVeg: true,
    imageSrc: chilliPaneerImg
  },
  {
    id: "western-sizzler",
    title: "The Western Sizzler",
    description: "A theatrical smoking iron plate featuring charred grilled chicken, wok-tossed vegetables, and house gravy.",
    tag: "Sizzlers",
    isVeg: false,
    imageSrc: westernSizzlerImg
  },
  {
    id: "lachha-paratha",
    title: "Lachha Paratha",
    description: "Multi-layered flaky flatbread, freshly rolled and cooked on the tawa with a generous brush of butter.",
    tag: "Main Course",
    isVeg: true,
    imageSrc: lachhaParathaImg
  },
  {
    id: "hakka-noodles",
    title: "Veg Hakka Noodles",
    description: "Wok-tossed noodles with crisp vegetables and soy sauce — smoky, savory, and deeply satisfying.",
    tag: "Noodles & Rice",
    isVeg: true,
    imageSrc: "/sizzler-noodles.png"
  },
  {
    id: "blue-lagoon",
    title: "Blue Lagoon",
    description: "Blue curacao syrup, fresh lime juice, and sparkling water — a tropical sip that matches the pool vibes.",
    tag: "Beverages",
    isVeg: true,
    imageSrc: blueLagoonImg
  },
  {
    id: "virgin-mojito",
    title: "Mint Overload Virgin Mojito",
    description: "A refreshing blend of muddled fresh mint, lime wedges, and sparkling soda — served ice cold.",
    tag: "Beverages",
    isVeg: true,
    imageSrc: virginMojitoImg
  },
  {
    id: "sizzling-brownie",
    title: "Volcanic Sizzling Brownie",
    description: "A warm dark chocolate brownie topped with cold vanilla ice cream, served sizzling on a hot iron plate.",
    tag: "Desserts",
    isVeg: true,
    imageSrc: "/brownie-sizzler.png"
  },
  {
    id: "paneer-masala",
    title: "Paneer Masala",
    description: "Soft paneer cubes simmered in a rich, aromatic tomato-onion gravy with whole spices and cream.",
    tag: "Main Course",
    isVeg: true,
    imageSrc: "/paneer-masala.png"
  },
];

export default function Menu() {
  const sectionRef = useScrollReveal()

  return (
    <section id="menu" ref={sectionRef} className="bg-background-dark py-24 relative z-10 overflow-hidden scroll-reveal">
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <SectionLabel>EXPLORE THE MENU</SectionLabel>
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold mt-4">
            Curated <span className="text-primary">Delicacies</span>
          </h2>
          <p className="text-stone-500 mt-6 max-w-2xl text-base sm:text-lg mx-auto">
            Swipe through our chefs' hand-picked favorites — 12 signature dishes from The Waterfall.
          </p>
        </div>

        {/* Card Stack Menu Presentation */}
        <div className="max-w-4xl mx-auto">
          <CardStack 
            items={curatedItems} 
            loop={true} 
            autoAdvance={true} 
            showDots={true}
          />
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-20 flex flex-col items-center justify-center gap-4">
          <a
            href={`${WHATSAPP_BASE}?text=Hi! I'd like to know more about the menu at The Waterfall Restaurant, Indore.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 rounded-full border border-primary text-xs font-sans tracking-[0.2em] uppercase text-primary hover:bg-primary hover:text-black transition-all duration-500"
          >
            WhatsApp for Full Menu
          </a>
          <p className="font-body text-stone-500 text-sm italic">
            * Prices confirmed at the restaurant. Subject to taxes & availability.
          </p>
        </div>
      </div>
    </section>
  )
}
