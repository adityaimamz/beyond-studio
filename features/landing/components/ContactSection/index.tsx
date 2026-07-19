"use client";

import type * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCheck } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Badge } from "@/components/ui";

// TODO: ganti dengan nomor WhatsApp bisnis asli (format 62xxxxxxxxxx, tanpa "+" atau "0" di depan)
const WHATSAPP_NUMBER = "6281234567890";

const palettes = {
    dark: {
        sectionBg: "bg-black",
        heading: "text-white",
        sub: "text-neutral-400",
        label: "text-neutral-400",
        inputBg: "bg-white/5",
        inputBorder: "border-white/10",
        inputFocus: "focus:border-primary-hover/70",
        inputText: "text-neutral-100",
        placeholder: "placeholder:text-neutral-500",
        cardBg: "bg-neutral-900/60",
        cardBorder: "border-white/10",
        divider: "bg-white/10",
        monoLabel: "text-white/40",
        valueText: "text-neutral-100",
        eyebrow: "text-primary-hover font-medium",
        bubbleInBg: "bg-white/[0.06]",
        bubbleInBorder: "border-white/10",
        bubbleInText: "text-neutral-300",
        timestamp: "text-neutral-500",
    },
    light: {
        sectionBg: "bg-slate-50",
        heading: "text-neutral-900",
        sub: "text-neutral-600",
        label: "text-neutral-500",
        inputBg: "bg-white",
        inputBorder: "border-neutral-200",
        inputFocus: "focus:border-primary/70",
        inputText: "text-neutral-900",
        placeholder: "placeholder:text-neutral-400",
        cardBg: "bg-white",
        cardBorder: "border-neutral-200/80",
        divider: "bg-neutral-200",
        monoLabel: "text-neutral-400",
        valueText: "text-neutral-900",
        eyebrow: "text-primary font-semibold",
        bubbleInBg: "bg-neutral-100",
        bubbleInBorder: "border-neutral-200",
        bubbleInText: "text-neutral-700",
        timestamp: "text-neutral-400",
    },
} as const;

const ACCENT = "#3B82F6";

export function ContactSection() {
    const { theme } = useTheme();
    const isLight = theme === "light";
    const palette = palettes[isLight ? "light" : "dark"];

    const [form, setForm] = useState({ name: "", contact: "", message: "" });

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
        <section className={`${palette.sectionBg} py-24 md:py-32 transition-colors duration-500`} id="contact">
            <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
                {/* Left   headline + form */}
                <motion.div
                    className="lg:col-span-7 flex flex-col gap-9 items-center text-center lg:items-start lg:text-left"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex flex-col gap-5 items-center lg:items-start">
                        <Badge className="w-fit uppercase tracking-wider">
                            Hubungi Kami
                        </Badge>
                        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-[1.1] ${palette.heading}`}>
                            Mulai Proyekmu,
                            <br />
                            Tanpa Basa-basi.
                        </h2>
                        <p className={`text-lg md:text-xl leading-relaxed max-w-[48ch] ${palette.sub}`}>
                            Isi form singkat ini, kami balas langsung lewat WhatsApp   biasanya dalam hitungan menit, bukan hari.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[520px] w-full text-left mx-auto lg:mx-0">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-name" className={`text-[11px] font-medium tracking-[0.05em] uppercase ${palette.label}`}>
                                Nama
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange("name")}
                                placeholder="Nama kamu"
                                className={`w-full rounded-xl border ${palette.inputBorder} ${palette.inputBg} ${palette.inputText} ${palette.placeholder} px-4 py-3 text-sm outline-none transition-colors duration-200 ${palette.inputFocus}`}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-contact" className={`text-[11px] font-medium tracking-[0.05em] uppercase ${palette.label}`}>
                                Kontak
                            </label>
                            <input
                                id="contact-contact"
                                type="text"
                                required
                                value={form.contact}
                                onChange={handleChange("contact")}
                                placeholder="Nomor WhatsApp atau email"
                                className={`w-full rounded-xl border ${palette.inputBorder} ${palette.inputBg} ${palette.inputText} ${palette.placeholder} px-4 py-3 text-sm outline-none transition-colors duration-200 ${palette.inputFocus}`}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-message" className={`text-[11px] font-medium tracking-[0.05em] uppercase ${palette.label}`}>
                                Kebutuhan
                            </label>
                            <textarea
                                id="contact-message"
                                required
                                rows={3}
                                value={form.message}
                                onChange={handleChange("message")}
                                placeholder="Ceritakan singkat proyekmu   website apa, kapan targetnya?"
                                className={`w-full resize-none rounded-xl border ${palette.inputBorder} ${palette.inputBg} ${palette.inputText} ${palette.placeholder} px-4 py-3 text-sm outline-none transition-colors duration-200 ${palette.inputFocus}`}
                            />
                        </div>

                        <button
                            type="submit"
                            className="group inline-flex w-fit items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 mt-1 mx-auto lg:mx-0"
                            style={{ backgroundColor: "#25D366" }}
                        >
                            Kirim via WhatsApp
                            <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </form>
                </motion.div>

                {/* Right   availability card */}
                <motion.div
                    className="hidden lg:flex lg:col-span-5 justify-end items-center"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                >
                    <div className={`rounded-2xl border ${palette.cardBorder} ${palette.cardBg} p-7 md:p-8 flex flex-col gap-6 w-full max-w-[500px] transition-colors duration-500`}>
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className={`text-sm font-medium ${palette.valueText}`}>Terbuka untuk proyek baru</span>
                        </div>

                        <div className={`h-px w-full ${palette.divider}`} />

                        {/* Chat preview   shows what a real reply actually looks like, instead of just claiming a response time */}
                        <div className="flex flex-col gap-3 py-1">
                            <motion.div
                                className={`self-start max-w-[82%] rounded-2xl rounded-bl-md border ${palette.bubbleInBorder} ${palette.bubbleInBg} px-4 py-2.5`}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                            >
                                <p className={`text-[13px] leading-snug ${palette.bubbleInText}`}>
                                    Halo, mau tanya soal harga paket landing page 🙌
                                </p>
                            </motion.div>

                            <motion.div
                                className="self-start flex items-center gap-1.5 rounded-full px-3 py-2"
                                style={{ backgroundColor: ACCENT }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: [0, 1, 1, 0] }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.1, delay: 0.85, times: [0, 0.25, 0.75, 1], ease: "easeInOut" }}
                            >
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        className="size-1.5 rounded-full bg-white/80"
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
                                    />
                                ))}
                            </motion.div>

                            <motion.div
                                className="self-end flex flex-col items-end gap-1.5 max-w-[82%]"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.4, delay: 1.95, ease: "easeOut" }}
                            >
                                <Badge className="bg-primary text-primary-foreground border-transparent rounded-tr-md rounded-tl-md rounded-bl-md px-2 py-0.5 text-[10px] font-medium shadow-none hover:bg-primary">
                                    Beyond Team
                                </Badge>
                                <div className="rounded-2xl rounded-br-md px-4 py-2.5" style={{ backgroundColor: ACCENT }}>
                                    <p className="text-[13px] leading-snug text-white">
                                        Halo! Boleh, aku bantu jelasin detailnya sekarang ya 👍
                                    </p>
                                </div>
                                <span className={`inline-flex items-center gap-1 text-[11px] ${palette.timestamp}`}>
                                    2 menit lalu <CheckCheck className="size-3" style={{ color: ACCENT }} />
                                </span>
                            </motion.div>
                        </div>

                        <div className={`h-px w-full ${palette.divider}`} />

                        <div className="flex items-center justify-between gap-4">
                            <div className="flex flex-col gap-0.5">
                                <span className={`text-[11px] font-medium tracking-[0.05em] uppercase ${palette.monoLabel}`}>
                                    Waktu respon
                                </span>
                                <span className={`text-2xl md:text-3xl font-semibold font-display leading-none ${palette.valueText}`}>
                                    ~1 jam
                                </span>
                            </div>
                            <p className={`text-xs text-right leading-snug max-w-[16ch] ${palette.sub}`}>
                                rata-rata balasan pertama dari tim kami
                            </p>
                        </div>

                        <div className={`h-px w-full ${palette.divider}`} />

                        <div className="flex flex-col gap-3.5">
                            <span className={`text-[11px] font-medium tracking-[0.05em] uppercase ${palette.monoLabel}`}>
                                Tahap Selanjutnya
                            </span>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 size-1.5 rounded-full shrink-0 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                    <p className={`text-[13px] leading-relaxed ${palette.sub}`}>
                                        <strong className={`font-medium ${palette.valueText}`}>Konsultasi Gratis.</strong> Ceritakan kebutuhanmu tanpa komitmen apa pun.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 size-1.5 rounded-full shrink-0 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                    <p className={`text-[13px] leading-relaxed ${palette.sub}`}>
                                        <strong className={`font-medium ${palette.valueText}`}>Estimasi Transparan.</strong> Dapatkan rincian harga & timeline dalam 24 jam.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ContactSection;