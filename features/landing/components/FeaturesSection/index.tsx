"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { typeUrl, imagePlusUrl, squareUrl, threeDotUrl, womanAsset } from "@/constants/assets";
import { WordsReveal, CountUp } from "@/components/common";

function ListItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl ${active
          ? "bg-white/5 bg-gradient-to-r from-[#999999]/20 via-transparent to-transparent border border-white/10 border-r-transparent border-b-transparent"
          : "border border-transparent"
        }`}
    >
      <div
        className={`size-8 rounded-md flex items-center justify-center ${active ? "bg-white/80" : "bg-white/5 border border-white/10"
          }`}
      >
        <img
          src={icon}
          alt=""
          width={16}
          height={16}
          style={active ? { filter: "invert(1)" } : undefined}
        />
      </div>
      <span className={`text-sm text-neutral-100 ${active ? "" : "opacity-60"}`}>{label}</span>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between mb-[80px] gap-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-10 w-full md:max-w-[690px]"
      >
        <WordsReveal
          as="h2"
          className="text-4xl leading-tight text-neutral-100 font-normal"
          text="Create space for tools that matters. now create designs from scratch to stunning design with code in few seconds"
        />
        <div className="flex items-center gap-4">
          <button className="bg-white text-black rounded-xl px-5 py-4 text-[15px] font-medium hover:bg-neutral-200 transition-colors cursor-pointer">
            Join beta now
          </button>
          <span className="md:hidden text-base text-neutral-500">Make things fast</span>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="hidden md:block text-xl text-neutral-500 text-right shrink-0"
      >
        Make things fast
      </motion.p>
    </div>
  );
}

function FeatureCards() {
  const cardAnim = (delay: number) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });
  const [countActive, setCountActive] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
      {/* Card 1 */}
      <motion.div
        {...cardAnim(0.1)}
        className="relative h-[520px] rounded-3xl overflow-hidden bg-neutral-950 flex flex-col items-center text-center pt-12 px-6"
        style={{ backgroundImage: "radial-gradient(ellipse at 31% -7%, rgba(255,255,255,0.05), transparent)" }}
      >
        <WordsReveal as="h3" className="text-4xl text-neutral-100 leading-tight" text="A assistant to create your design" delay={0.2} />
        <WordsReveal as="p" className="mt-6 text-base opacity-40 text-neutral-100 max-w-[320px]" text="Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard" delay={0.5} step={0.04} duration={0.6} />
        <motion.div
          className="absolute bottom-0 left-5 right-5 bg-white/5 border border-white/5 rounded-t-2xl p-3 pt-[30px] flex flex-col gap-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delayChildren: 0.5, staggerChildren: 0.15 } },
          }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          {[
            { icon: typeUrl, label: "Headlines", active: true },
            { icon: imagePlusUrl, label: "Images and fill" },
            { icon: squareUrl, label: "Tools" },
          ].map((it) => (
            <motion.div
              key={it.label}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ListItem icon={it.icon} label={it.label} active={it.active} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        {...cardAnim(0.3)}
        className="relative h-[520px] rounded-3xl overflow-hidden bg-neutral-900 flex flex-col items-center text-center pt-12 px-6"
      >
        <WordsReveal as="h3" className="text-4xl text-neutral-100 leading-tight" text="AI helps to generate images free" delay={0.4} />
        <WordsReveal as="p" className="mt-6 text-base opacity-40 text-neutral-100 max-w-[340px]" text="With endless, all it takes to create professional-grade images is a browser and a story to tell no experience required." delay={0.7} step={0.04} duration={0.6} />
        <motion.div
          className="mt-4 flex justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ staggerChildren: 0.12, delayChildren: 1.0 }}
        >
          {["V1.0", "v2.0", "Remaster"].map((t) => (
            <motion.span
              key={t}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/10 text-neutral-100 text-xs opacity-40 rounded-md px-2 py-1"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="absolute bottom-0 w-1/2 left-1/2 h-[240px]"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          style={{ x: "-50%" }}
        >
          <img src={womanAsset.url} alt="" className="w-full h-full object-cover object-top rounded-t-2xl" />
          <button className="absolute top-10 -right-6 bg-white text-black text-sm font-medium rounded-lg px-3 py-1.5 shadow-lg cursor-pointer">
            Regenerate
          </button>
        </motion.div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        {...cardAnim(0.5)}
        onViewportEnter={() => setCountActive(true)}
        className="relative h-[520px] rounded-3xl overflow-hidden"
        style={{ backgroundColor: "#D0C9B9" }}
      >
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            <WordsReveal as="p" className="text-2xl opacity-40 text-neutral-900" text="Get audience" delay={0.6} step={0.08} />
            <WordsReveal
              as="h3"
              className="mt-1 text-neutral-900 leading-tight text-[36px] font-normal [font-family:'Inter_Tight',sans-serif]"
              text="Our search engine optimazation"
              delay={0.85}
              step={0.07}
            />
          </div>
          <img src={threeDotUrl} alt="" className="mt-3 shrink-0" />
        </div>
        <motion.div
          className="absolute bottom-[80px] left-0 w-full h-[180px] px-6 flex items-end justify-between gap-2 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.7 }}
        >
          {["33%", "16%", "72%", "36%", "88%", "22%"].map((h, i) => (
            <motion.div
              key={i}
              className="relative w-full flex items-end"
              style={{ height: h }}
              variants={{ hidden: {}, visible: {} }}
            >
              <motion.div
                className="relative w-full h-full flex flex-col"
                variants={{
                  hidden: { y: "100%" },
                  visible: { y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
              >
                <div className="w-full h-1.5 bg-black shrink-0 z-20" />
                <div className="relative w-full flex-1 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 w-full z-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(-45deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 8px, rgba(0,0,0,0.12) 8px, rgba(0,0,0,0.12) 16px)",
                      backgroundSize: "22.63px 22.63px",
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "22.63px 0px"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black z-10"
                    variants={{
                      hidden: { y: "0%" },
                      visible: { y: "-100%", transition: { duration: 0.4, delay: 0.4, ease: "easeOut" } },
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-[80px] flex items-end pb-4 px-6 gap-2">
          <span className="text-4xl text-neutral-900 leading-none">
            <CountUp end={27000} duration={3200} active={countActive} />
          </span>
          <span className="text-base text-neutral-900/80 leading-none pb-1">new visitors</span>
        </div>
      </motion.div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="px-[20px] pt-[120px] pb-[120px]">
      <SectionHeader />
      <FeatureCards />
    </section>
  );
}
export default FeaturesSection;
