"use client";

import { useState } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { WordsReveal } from "@/components/common";
import { bsKontakContent } from "@/constants/landing";
import { useInView } from "@/hooks/use-in-view";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", category: "", message: "" });
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { ref: gradientPanelRef, inView: gradientPanelInView } = useInView<HTMLDivElement>({
    threshold: 0,
    once: false,
  });

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.category) {
      alert("Silakan pilih Kategori Layanan terlebih dahulu.");
      return;
    }
    const text = `Halo Beyond Studio! Saya ${form.name || "seseorang"}.\n\nKategori: ${form.category}\n\nKebutuhan: ${form.message || "-"}`;
    const url = `https://wa.me/${bsKontakContent.whatsappNumberPlaceholder}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-white py-20 text-black antialiased [font-synthesis:none] sm:py-24 lg:py-32 dark:bg-black dark:text-white" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <motion.div
            className="flex min-h-[560px] items-start rounded-3xl border border-black/10 bg-white px-6 py-12 sm:px-10 dark:border-white/10 dark:bg-[#0a0a0a] lg:min-h-[640px] lg:px-14 lg:py-16 [transform:translateZ(0)] [will-change:transform]"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mx-auto w-full max-w-[520px]">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 w-fit rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                  Hubungi Kami
                </div>
                <WordsReveal
                  as="h2"
                  className="text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl dark:text-white text-center"
                  text="Mulai Proyekmu, Tanpa Basa-basi."
                  step={0.04}
                  duration={0.6}
                />
                <WordsReveal
                  as="p"
                  className="mt-5 max-w-[420px] text-base leading-relaxed text-black/60 dark:text-white/60 sm:text-lg text-center"
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
                    placeholder="Nama anda"
                    className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3.5 text-sm text-black placeholder:text-black/30 outline-none transition-colors focus:bg-black/5 focus:border-black/30 dark:border-white/10 dark:text-white dark:placeholder:text-white/30 dark:focus:bg-white/5 dark:focus:border-white/30"
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label htmlFor="contact-category" className="text-[10px] font-bold tracking-widest uppercase text-black/50 dark:text-white/50">
                    Kategori Layanan
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                      className={`flex w-full items-center justify-between rounded-xl border border-black/10 bg-transparent px-4 py-3.5 text-sm outline-none transition-colors hover:bg-black/5 focus:border-black/30 focus:bg-black/5 dark:border-white/10 dark:hover:bg-white/5 dark:focus:border-white/30 dark:focus:bg-white/5 ${form.category === "" ? "text-black/30 dark:text-white/30" : "text-black dark:text-white"}`}
                    >
                      {form.category || "Pilih Kategori"}
                      <ChevronDown className={`size-4 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isCategoryOpen && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setIsCategoryOpen(false)} />
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute left-0 top-full z-20 mt-2 w-full overflow-hidden rounded-xl border border-black/10 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-[#0a0a0a]"
                        >
                          {bsKontakContent.formCategories.map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => {
                                setForm((prev) => ({ ...prev, category: cat }));
                                setIsCategoryOpen(false);
                              }}
                              className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/5 ${form.category === cat ? "bg-black/5 font-medium text-black dark:bg-white/5 dark:text-white" : "text-black/70 dark:text-white/70"}`}
                            >
                              {cat}
                            </button>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </div>
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
                  className="flow-hover before:bg-primary-foreground hover:text-primary mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 text-[15px] font-semibold text-primary-foreground ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
                >
                  Kirim via WhatsApp
                  <MessageCircle className="size-4" />
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            ref={gradientPanelRef}
            className="relative flex min-h-[420px] overflow-hidden rounded-3xl bg-black p-8 text-white sm:p-12 lg:min-h-[640px] [transform:translateZ(0)] [will-change:transform]"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-black overflow-hidden [transform:translateZ(0)]">
              <div className="absolute -inset-[50%] opacity-40 bg-[radial-gradient(circle_at_20%_20%,#3B82F6_0%,transparent_50%),radial-gradient(circle_at_80%_80%,#FFFFFF_0%,transparent_40%),radial-gradient(circle_at_50%_100%,#1E40AF_0%,transparent_60%)] transition-opacity duration-1000 [transform:translateZ(0)] [will-change:transform]" />
            </div>

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