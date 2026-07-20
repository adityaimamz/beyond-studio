"use client";

import { GrainGradient } from "@paper-design/shaders-react";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { WordsReveal } from "@/components/common";

const WHATSAPP_NUMBER = "6281234567890";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const shouldReduceMotion = useReducedMotion();

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = `Halo Beyond Studio! Saya ${form.name || "seseorang"}.\n\nKontak: ${form.contact || "-"}\n\nKebutuhan: ${form.message || "-"}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-white py-20 text-black antialiased [font-synthesis:none] sm:py-24 lg:py-32 dark:bg-black dark:text-white" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <motion.div
          className="flex min-h-[560px] items-start rounded-3xl border border-black/10 bg-white px-6 py-12 sm:px-10 dark:border-white/10 dark:bg-[#0a0a0a] lg:min-h-[640px] lg:px-14 lg:py-16"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto w-full max-w-[520px]">
            <div>
              <div className="mb-6 w-fit rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                  Hubungi Kami
              </div>
              <WordsReveal
                as="h2"
                className="text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl dark:text-white"
                text="Mulai Proyekmu, Tanpa Basa-basi."
                step={0.04}
                duration={0.6}
              />
              <WordsReveal
                as="p"
                className="mt-5 max-w-[420px] text-base leading-relaxed text-black/60 dark:text-white/60 sm:text-lg"
                text="Isi form singkat ini, kami balas langsung lewat WhatsApp biasanya dalam hitungan menit, bukan hari."
                step={0.02}
                delay={0.3}
                duration={0.5}
              />
            </div>

            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="contact-name" className="text-[10px] font-bold tracking-widest uppercase text-black/50 dark:text-white/50">
                    Nama
                </label>
                <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Nama kamu"
                    className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3.5 text-sm text-black placeholder:text-black/30 outline-none transition-colors focus:bg-black/5 focus:border-black/30 dark:border-white/10 dark:text-white dark:placeholder:text-white/30 dark:focus:bg-white/5 dark:focus:border-white/30"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="contact-contact" className="text-[10px] font-bold tracking-widest uppercase text-black/50 dark:text-white/50">
                    Kontak
                </label>
                <input
                    id="contact-contact"
                    type="text"
                    required
                    value={form.contact}
                    onChange={handleChange("contact")}
                    placeholder="Nomor WhatsApp atau email"
                    className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3.5 text-sm text-black placeholder:text-black/30 outline-none transition-colors focus:bg-black/5 focus:border-black/30 dark:border-white/10 dark:text-white dark:placeholder:text-white/30 dark:focus:bg-white/5 dark:focus:border-white/30"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="contact-message" className="text-[10px] font-bold tracking-widest uppercase text-black/50 dark:text-white/50">
                    Kebutuhan
                </label>
                <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder="Ceritakan singkat proyekmu, website apa, kapan targetnya?"
                    className="w-full min-h-[120px] resize-none rounded-xl border border-black/10 bg-transparent p-4 text-sm text-black placeholder:text-black/30 outline-none transition-colors focus:bg-black/5 focus:border-black/30 dark:border-white/10 dark:text-white dark:placeholder:text-white/30 dark:focus:bg-white/5 dark:focus:border-white/30"
                />
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 text-[15px] font-semibold text-primary-foreground transition duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-primary-hover active:scale-[0.97]"
              >
                Kirim via WhatsApp
                <MessageCircle className="size-4" />
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="relative flex min-h-[420px] overflow-hidden rounded-3xl bg-black p-8 text-white sm:p-12 lg:min-h-[640px]"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <GrainGradient
            speed={1}
            scale={1}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.5}
            intensity={0.5}
            noise={0.25}
            shape="corners"
            frame={2854.5}
            colors={["#FFFFFF", "#3B82F6", "#3B82F6", "#FFFFFF"]}
            colorBack="#00000000"
            className="absolute inset-0 bg-black"
          />

          <div className="relative z-10 flex h-full w-full flex-col justify-between">
            <WordsReveal
              as="h2"
              className="max-w-[620px] pt-0 text-5xl font-medium tracking-[-0.05em] text-white sm:text-6xl lg:pt-16 lg:text-[64px] lg:leading-[0.98] xl:text-[70px]"
              text="Think fast, Build faster"
              step={0.05}
              duration={0.55}
            />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;