"use client";

import React from 'react';
import { motion } from "framer-motion";
import { bsTestimoniList, bsTestimoniHeader, Testimoni } from '@/constants/landing';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useInView } from '@/hooks/use-in-view';

const firstColumn = bsTestimoniList.slice(0, 3);
const secondColumn = bsTestimoniList.slice(3, 6);
const thirdColumn = bsTestimoniList.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimoni[];
  duration?: number;
}) => {
  // Marquee jalan lewat CSS animation (bukan motion/RAF) supaya bisa di-pause
  // murah lewat `animation-play-state` begitu kolom keluar viewport - mencegah
  // 3 kolom x ~6 kartu ini terus-menerus repaint/composite saat user scroll.
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0, once: false });

  return (
    <div ref={ref} className={props.className}>
      <ul
        style={{
          animationDuration: `${props.duration || 10}s`,
          animationPlayState: inView ? "running" : "paused",
        }}
        className="marquee-column flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0 [transform:translateZ(0)] [will-change:transform]"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ quote, image, name, category }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-black/5 max-w-xs w-full bg-white dark:bg-neutral-900 transition-[transform,background-color,border-color,box-shadow,ring-color] duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30 [transform:translateZ(0)] [will-change:transform]" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal m-0 transition-colors duration-300">
                      {quote}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-100 dark:ring-neutral-800 group-hover:ring-primary/30 transition-shadow duration-300 ease-in-out"
                      />
                      <div className="flex flex-col min-w-0">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900 dark:text-white transition-colors duration-300 truncate max-w-[150px]">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-neutral-500 dark:text-neutral-500 mt-0.5 transition-colors duration-300 truncate max-w-[150px]">
                          {category}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </ul>
    </div>
  );
};

export const TestimonialV2 = ({ transparent = false }: { transparent?: boolean }) => {
  const { theme } = useTheme();

  return (
    <section 
      id="testimoni"
      aria-labelledby="testimonials-heading"
      className={`${transparent ? 'bg-transparent' : 'bg-slate-50 dark:bg-black'} pb-8 pt-24 relative overflow-visible transition-colors duration-500 z-10`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 transition-colors">
              Testimoni
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-neutral-900 dark:text-white transition-colors">
            {bsTestimoniHeader.headline}
          </h2>
          <p className="text-center mt-5 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-sm transition-colors">
            {bsTestimoniHeader.subheadline}
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
      {!transparent && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-72 md:h-96"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(ellipse 85% 120% at 8% 100%, rgba(15, 23, 42, 0.05), transparent 68%)"
                : "radial-gradient(ellipse 85% 120% at 8% 100%, rgba(226, 232, 240, 0.11), transparent 68%)",
          }}
          aria-hidden
        />
      )}
    </section>
  );
};
