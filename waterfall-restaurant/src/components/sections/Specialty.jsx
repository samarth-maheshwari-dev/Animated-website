import React from 'react';
import { motion } from 'framer-motion';
import { DestinationCard } from '../ui/card-21';
import SectionLabel from '../ui/SectionLabel';
import midnightBBQImg from '../../assets/images/ambiance/Midnight BBQ.png';
import forestPlatterImg from '../../assets/images/ambiance/FOREST PLATTER.png';
import waterfallMistImg from '../../assets/images/ambiance/waterfall-sunset-real.jpg';
import { WHATSAPP_BASE } from '@data/eventsData';

const SPECIALTIES = [
  {
    index: "01",
    title: "Live Table BBQ",
    desc: "Freshly marinated skewers & grills served hot right at your table.",
    image: midnightBBQImg,
    whatsappMsg: "Hi! I want to enquire about the Live Table BBQ at The Waterfall Restaurant, Indore.",
  },
  {
    index: "02",
    title: "In-Water Waterfall Seating",
    desc: "Dine with your feet in cool shallow water right beside the cascading falls.",
    image: waterfallMistImg,
    whatsappMsg: "Hi! I want to enquire about Waterfall Seating at The Waterfall Restaurant, Indore.",
  },
  {
    index: "03",
    title: "Signature Platters",
    desc: "Generous multi-cuisine platters crafted for groups, families, and celebrations.",
    image: forestPlatterImg,
    whatsappMsg: "Hi! I want to know more about Signature Platters at The Waterfall Restaurant, Indore.",
  },
];

const Specialty = () => {
  return (
    <section id="specialty" className="py-24 bg-background-dark relative overflow-hidden border-t border-white/10">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <SectionLabel>SIGNATURE EXPERIENCES</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-3">
              What Sets Us <span className="text-primary">Apart</span>
            </h2>
          </div>
          <p className="text-stone-400 max-w-md text-sm sm:text-base leading-relaxed">
            Open-air seating in shallow water, live grills, and poolside dining — designed for evenings you don't rush.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {SPECIALTIES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`w-full h-[360px] sm:h-[400px] md:h-[440px] ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <DestinationCard
                imageUrl={item.image}
                location={item.title}
                flag={item.index}
                stats={item.desc}
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(item.whatsappMsg)}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialty;

