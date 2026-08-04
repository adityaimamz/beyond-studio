"use client";

import type * as React from "react";
import { useInView } from "@/hooks/use-in-view";
import Link from "next/link";
import { Instagram, Music2, MessageCircle } from "lucide-react";
import { bsNavItems, bsKontakContent, bsFooterContent } from "@/constants/landing";

const ease = "cubic-bezier(0.22,1,0.36,1)";

function fadeUp(inView: boolean, delay: number, distance = 20): React.CSSProperties {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : `translateY(${distance}px)`,
    transition: `opacity 700ms ${ease} ${delay}ms, transform 700ms ${ease} ${delay}ms`,
  };
}

function fadeRight(inView: boolean, delay: number): React.CSSProperties {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-20px)",
    transition: `opacity 700ms ${ease} ${delay}ms, transform 700ms ${ease} ${delay}ms`,
  };
}

export function Footer() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0 });

  const d = {
    description: 0,
    contactRow: 200,
    contactStep: 120,
    logo: 700,
    col1Title: 800,
    col1Step: 100,
    col2Title: 1300,
    col2Step: 100,
    legal: 2000,
    legalStep: 120,
  };

  return (
    <footer ref={ref} className="relative w-full overflow-hidden bg-background pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="flex flex-wrap justify-between gap-20 mt-28">
        {/* LEFT: headline + description */}
        <div className="max-w-xl">
          <div 
            className="flex items-center gap-3 mb-6" 
            style={fadeUp(inView, Math.max(0, d.description - 100), 30)}
          >
            <div className="relative w-[40px] h-[40px] shrink-0">
              <img
                src="/images/logo-dark.png"
                alt="Beyond Studio Logo"
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 dark:opacity-100"
              />
              <img
                src="/images/logo-light.png"
                alt="Beyond Studio Logo"
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 dark:opacity-0"
              />
            </div>
            <span className="font-display text-xl font-bold text-foreground">Beyond Studio</span>
          </div>
          <p
            className="text-foreground font-display text-3xl leading-tight tracking-tight font-bold"
            style={fadeUp(inView, d.description, 30)}
          >
            {bsFooterContent.headline}
          </p>
          <p
            className="mt-6 text-muted-foreground text-base max-w-md"
            style={fadeUp(inView, d.contactRow)}
          >
            {bsFooterContent.description}
          </p>
        </div>

        {/* RIGHT: two columns */}
        <div className="flex gap-24 flex-wrap">
          <div>
            <h3
              className="text-muted-foreground text-sm uppercase tracking-wider opacity-50 font-semibold"
              style={fadeUp(inView, d.col1Title)}
            >
              Navigasi
            </h3>
            <ul className="list-none mt-7 flex flex-col gap-6">
              {bsNavItems.map((item, i) => (
                <li key={item.label} style={fadeUp(inView, d.col1Title + d.col1Step * (i + 1))}>
                  <Link href={item.href || "#"} className="text-foreground/70 hover:text-foreground text-base transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-muted-foreground text-sm uppercase tracking-wider opacity-50 font-semibold"
              style={fadeUp(inView, d.col2Title)}
            >
              Hubungi Kami
            </h3>
            <div className="mt-7 flex gap-3">
              <a
                href={`https://wa.me/${bsKontakContent.whatsappNumberPlaceholder}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex w-11 h-11 justify-center items-center rounded-full bg-foreground/10 hover:bg-foreground/20 transition-[background-color,transform] duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:scale-[1.08] hover:-rotate-6 active:scale-[0.95] group"
                style={fadeUp(inView, d.col2Title + d.col2Step)}
              >
                <MessageCircle size={18} className="text-foreground/70 group-hover:text-foreground transition-colors" />
              </a>
              <a
                href={bsKontakContent.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex w-11 h-11 justify-center items-center rounded-full bg-foreground/10 hover:bg-foreground/20 transition-[background-color,transform] duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:scale-[1.08] hover:-rotate-6 active:scale-[0.95] group"
                style={fadeUp(inView, d.col2Title + d.col2Step * 2)}
              >
                <Instagram size={18} className="text-foreground/70 group-hover:text-foreground transition-colors" />
              </a>
              <a
                href={bsKontakContent.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex w-11 h-11 justify-center items-center rounded-full bg-foreground/10 hover:bg-foreground/20 transition-[background-color,transform] duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:scale-[1.08] hover:-rotate-6 active:scale-[0.95] group"
                style={fadeUp(inView, d.col2Title + d.col2Step * 3)}
              >
                <Music2 size={18} className="text-foreground/70 group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giant faded watermark wordmark */}
      <div style={fadeUp(inView, d.logo, 30)} className="mt-16 select-none pointer-events-none">
        <span
          className="block font-display font-bold text-foreground opacity-35 dark:opacity-[0.08] transition-opacity duration-300"
          style={{
            fontSize: "clamp(60px, 12vw, 180px)",
            lineHeight: 1,
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 100%)",
            maskImage: "linear-gradient(to top, transparent 0%, black 100%)",
          }}
        >
          Beyond Studio
        </span>
      </div>

      {/* Bottom legal row */}
      <div className="-mt-12 flex items-center justify-end gap-5 flex-wrap">
        <span
          className="text-foreground/50 font-display text-base mr-auto md:mr-12"
          style={fadeRight(inView, d.legal)}
        >
          {bsKontakContent.footerCopyright}
        </span>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
