<div align="center">
<h1>🚀 Beyond Studio</h1>
<p><strong>Landing Page Jasa Pembuatan Website Custom Profesional</strong></p>
<p>Website showcase untuk layanan pembuatan website, sistem informasi, dan bantuan skripsi - dibangun dengan Next.js 15, React 19, dan Tailwind CSS 4</p>
</div>

---

## 📋 Overview

**Beyond Studio** adalah landing page modern untuk jasa pembuatan website custom yang melayani berbagai segmen:

- 🏢 **UMKM/Bisnis** - Company profile, e-commerce, sistem informasi
- 🎓 **Mahasiswa** - Bantuan sistem skripsi/tugas akhir
- 💼 **Freelancer** - Website portofolio profesional
- 👨‍💼 **Profesional** - Landing page & personal branding

---

## 🛠️ Tech Stack

### Core
- **Next.js 15.4.9** - React framework dengan App Router
- **React 19.2.1** - UI library
- **TypeScript 5.9.3** - Type safety

### Styling & Animation
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Framer Motion 12.42.2** - Smooth animations & transitions
- **Lucide React** - Modern icon library
- **class-variance-authority** - Component variants management

### Features
- 🎨 Dark/Light mode dengan smooth transitions
- ✨ Scroll-triggered animations
- 📱 Fully responsive design
- ♿ WCAG AA accessibility compliant
- 🚀 Optimized performance (Lighthouse > 90 target)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm atau bun

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/beyond-studio.git
   cd beyond-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` dan tambahkan Gemini API key (opsional, untuk fitur AI di masa depan):
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) di browser

5. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Project Structure

```
beyond-studio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout dengan theme provider
│   ├── page.tsx           # Homepage dengan semua sections
│   └── globals.css        # Global styles & CSS variables
│
├── components/
│   ├── common/            # Reusable animated components
│   ├── layout/            # Navbar & Footer
│   ├── providers/         # Theme provider (dark/light mode)
│   └── ui/                # UI component library
│
├── features/
│   └── landing/           # Landing page sections & logic
│       ├── components/    # Hero, Layanan, Stats, Pricing, etc.
│       └── hooks/         # Custom hooks
│
├── constants/
│   ├── landing.ts         # ⭐ Single source of truth untuk semua konten
│   └── assets.ts          # Asset URLs & references
│
├── hooks/                 # Global custom hooks
├── lib/                   # Utilities
└── public/                # Static assets (images, mockups)
```

---

## 📄 Landing Page Sections

Urutan section di halaman:

1. **Hero Section** - Value proposition dengan CTA WhatsApp
2. **Layanan Section** - 6 layanan cards (bento grid layout)
3. **Craftsmanship Section** - Code snippet dengan typewriter effect
4. **Portfolio Section** - 4 project showcase dengan sticky scroll (desktop)
5. **Stats Section** - Kenapa pilih kami (4 value props + statistik)
6. **Pill Tags Section** - Tech stack showcase
7. **Paket Harga Section** - 6 paket pricing transparan
8. **Testimoni Section** - 9 testimoni klien dengan aurora gradient
9. **FAQ Section** - 6 pertanyaan umum (shared aurora background)
10. **Footer** - Form kontak dengan kategori layanan

---

## 🎨 Design System

### Color Palette
- **Light Mode:** White background, dark text, blue primary
- **Dark Mode:** Black background, white text, lighter blue primary

### Typography
- **Font:** Inter Tight, Inter, system-ui
- **Weights:** 400, 500, 600, 700

### Animation Principles
- 500ms smooth transitions untuk theme switching
- Entrance animations dengan stagger effect
- Scroll-triggered animations via Intersection Observer
- Respects `prefers-reduced-motion`

📚 **Dokumentasi lengkap:** Lihat `.agents/design.md`

---

## 🎭 Content Management

Semua konten landing page dikontrol dari satu file:

📝 **`constants/landing.ts`** - Edit file ini untuk update:
- Semua text & copy
- Pricing & packages
- Testimoni
- FAQ
- Contact info

**Cara update konten:**
1. Edit `constants/landing.ts`
2. Save file
3. Refresh browser (hot reload otomatis di dev mode)
4. No need to touch components!

---

## ⚠️ TODO Before Production

### ⚡ High Priority - Replace Dummy Data

- [ ] **Portfolio Section** (4 projects)
  - Replace dummy screenshots di `/public/images/portfolio/`
  - Update project titles & descriptions dengan data asli
  - Create `placeholder.png` untuk fallback

- [ ] **Testimoni Section** (9 testimonials)
  - Ganti semua testimoni dummy dengan kutipan asli
  - Minta izin klien sebelum pakai nama/foto
  - Update avatar images (currently Unsplash placeholders)

- [ ] **Stats Section** (2 statistics)
  - "80+ Proyek Selesai" → Angka asli
  - "98% Klien Puas" → Angka asli

- [ ] **Pricing Section** (1 package)
  - "Paket Skripsi Rp1.499.000" → Harga final yang sudah ditetapkan

### 🔧 Configuration

- [ ] Update WhatsApp number di `constants/landing.ts`
- [ ] Update Instagram & TikTok URLs (currently placeholders)
- [ ] Verify tech stack badge (currently "Next.js")

### 🚀 Pre-Launch

- [ ] Setup backend untuk form handling
- [ ] Implement analytics (GA4, Facebook Pixel)
- [ ] SEO optimization (meta tags, structured data)
- [ ] Lighthouse audit (target > 90 score)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing

---

## 📊 Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Create optimized build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run clean        # Clean Next.js cache
```

---

## 📚 Documentation

Dokumentasi lengkap tersedia di folder `.agents/`:

- 📘 **`agent.md`** - Complete project documentation
- 🎨 **`design.md`** - Design system & component specs
- ✍️ **`copywriting.md`** - Copywriting guide & rationale
- 🖼️ **`PORTFOLIO_IMPLEMENTATION.md`** - Portfolio section guide

---

## 🧪 Testing Checklist

### Functionality
- [ ] Navigation links scroll to correct sections
- [ ] WhatsApp CTA opens chat with correct number
- [ ] Form kontak sends data correctly
- [ ] Theme toggle works (dark/light mode)
- [ ] All hover states functional

### Responsive
- [ ] Mobile (< 768px) - Layout stacks properly
- [ ] Tablet (768px - 1024px) - 2 column grid
- [ ] Desktop (> 1024px) - Full bento grid
- [ ] No horizontal scroll

### Performance
- [ ] Lighthouse Score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] No layout shift (CLS < 0.1)

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 License

This project is private and proprietary to Beyond Studio.

---

## 📞 Contact & Support

- **WhatsApp:** [6281927070239](https://wa.me/6281927070239) (placeholder - update!)
- **Instagram:** Coming soon
- **TikTok:** Coming soon

---

## 🌟 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

<div align="center">
<p><strong>Beyond Studio © 2026</strong></p>
<p>Dibangun Developer Profesional, Sesuai Kebutuhanmu</p>
</div>
