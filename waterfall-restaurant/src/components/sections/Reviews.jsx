import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import { CircularTestimonials } from '../ui/CircularTestimonials';
import { reviewsData } from '../../data/reviewsData';
import StarRating from '../ui/StarRating';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-background-dark relative overflow-hidden border-t border-white/10">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <SectionLabel>Guest Reviews</SectionLabel>
          <div className="flex flex-col items-center mt-2 sm:mt-4">
            <span className="text-6xl sm:text-7xl md:text-8xl font-serif text-primary leading-none">4.8</span>
            <div className="mt-2 sm:mt-4 scale-75 sm:scale-100">
              <StarRating rating={5} />
            </div>
            <p className="text-stone-400 mt-4 uppercase tracking-widest text-[10px] sm:text-xs">
              Based on <span className="text-white font-bold">10,742+</span> Google Reviews
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <CircularTestimonials 
            testimonials={reviewsData}
            autoplay={true}
            colors={{
              name: "white",
              designation: "#94a3b8",
              testimony: "#e2e8f0",
              accent: "#D4AF37"
            }}
            fontSizes={{
              name: "clamp(1.5rem, 5vw, 2.5rem)",
              designation: "0.875rem",
              quote: "clamp(1rem, 3vw, 1.5rem)"
            }}
          />
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://www.google.com/maps/place/The+Waterfall+Restaurant/@22.6105,75.811808,15z/data=!4m8!3m7!1s0x3962f96e1aaa360d:0xeaaa6810c9c77e38!8m2!3d22.6105!4d75.811808!9m1!1b1!16s%2Fg%2F11f5y45l56"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-primary/30 text-primary text-sm font-sans tracking-widest uppercase hover:bg-primary hover:text-black transition-all duration-500"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
