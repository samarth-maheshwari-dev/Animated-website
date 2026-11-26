import * as React from "react";
import { cn } from "@/lib/utils"; // Your utility for merging class names
import { ArrowRight } from "lucide-react";

const DestinationCard = React.forwardRef(
  ({ className, imageUrl, location, flag, stats, href, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full h-full rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 ease-out bg-stone-950"
          aria-label={`Enquire about ${location}`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url('${imageUrl}')` }}
          />

          {/* Clean Dark Editorial Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/15" />

          {/* Content */}
          <div className="relative flex flex-col justify-between h-full p-6 sm:p-7 text-white">
            <span className="font-body text-xs tracking-[0.25em] text-primary/90 font-medium">
              {flag}
            </span>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
                {location}
              </h3>
              <p className="text-sm text-stone-300 mt-2 leading-relaxed">{stats}</p>

              <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 text-primary">
                <span className="text-xs font-body tracking-[0.2em] uppercase font-semibold">Enquire on WhatsApp</span>
                <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
