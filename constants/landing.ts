export interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Product", active: true },
  { label: "Our story", active: false },
  { label: "Pricing", active: false },
  { label: "Career", active: false },
];

export interface PricingFeature {
  label: string;
  dim?: boolean;
}

export interface PricingPlanData {
  price: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  ctaClass: string;
}

export const pricingPlans: PricingPlanData[] = [
  {
    price: "$20",
    description: "Upgrade to unlock additional features for a more comprehensive and freedom designs",
    features: [
      { label: "Up to 5 Design System LITE" },
      { label: "Standard components" },
      { label: "Animated titles, captions, B-roll" },
      { label: "AI Co-Producer™", dim: true },
    ],
    cta: "Get Started",
    ctaClass: "bg-neutral-900 text-white",
  },
  {
    price: "59",
    description: "Elevate your design game with advanced tools and exclusive features.",
    features: [
      { label: "Unlimited Design System LITE" },
      { label: "Pro components" },
      { label: "Animated titles, captions, B-roll" },
      { label: "AI Co-Producer™" },
    ],
    cta: "Send Message",
    ctaClass: "bg-transparent text-stone-950 border border-stone-950/50",
  },
];

// BEYOND STUDIO CONTENT
export const bsNavItems: NavItem[] = [
  { label: "Layanan", href: "#layanan" },
  { label: "Paket Harga", href: "#paket-harga" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];
export const bsNavCTA: NavItem = { label: "Konsultasi Gratis", href: "#contact" };

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  ctaPrimary: NavItem;
  ctaSecondary: NavItem;
}
export const bsHeroContent: HeroContent = {
  badge: "DAFTAR HARGA LENGKAP & TRANSPARAN",
  headline: "Website Custom untuk Bisnis, Skripsi, dan Proyek Pribadi",
  subheadline: "Proses cepat, harga transparan, konsultasi gratis sebelum anda memutuskan.",
  ctaPrimary: { label: "Konsultasi via WhatsApp", href: "#contact" },
  ctaSecondary: { label: "Cek Paket Harga", href: "#paket-harga" },
};

export interface StatItem { value: string; label: string; }
export interface ValueProp { icon: string; title: string; description: string; }
export const bsKenapaPilihKami = {
  stats: [
    { value: "80+", label: "Proyek Selesai" },
    { value: "98%", label: "Klien Puas" },
  ] as StatItem[],
  valueProps: [
    { icon: "Wallet", title: "Harga Terjangkau", description: "Paket dirancang pas di budget, tanpa mengorbankan kualitas hasil." },
    { icon: "Settings2", title: "Sesuai Kebutuhan", description: "Setiap website dibangun custom, bukan dari template generik." },
    { icon: "ListChecks", title: "Proses Jelas", description: "Tahapan kerja transparan, dari konsultasi awal sampai website live." },
    { icon: "MessageCircle", title: "Konsultasi Gratis", description: "Ceritakan kebutuhanmu dulu - gratis - sebelum memutuskan order." },
  ] as ValueProp[],
};

export interface LayananItem { icon: string; title: string; description: string; }
export const bsLayananList: LayananItem[] = [
  { icon: "Building2", title: "Business Website", description: "Website profesional untuk memperkenalkan bisnis, jasa, atau personal branding. Cocok untuk: Company Profile, Landing Page, Website Jasa, UMKM, dan Personal Branding." },
  { icon: "ShoppingCart", title: "E-Commerce", description: "Website toko online lengkap untuk menjual produk secara profesional. Cocok untuk: Fashion, Kuliner, Grosir, dan Toko Online." },
  { icon: "LayoutDashboard", title: "Web Application", description: "Aplikasi web custom sesuai kebutuhan bisnis. Cocok untuk: Dashboard, Sistem Informasi, Booking, Inventory, POS, ERP, HRIS, CRM, LMS, Portal, dan Platform Digital." },
  { icon: "UserCircle", title: "Portfolio Website", description: "Website personal untuk freelancer dan profesional. Cocok untuk: Programmer, Designer, Photographer, Freelancer, dan CV Online." },
  { icon: "GraduationCap", title: "Academic Project", description: "Pembuatan aplikasi web untuk kebutuhan akademik. Cocok untuk: Skripsi, Tugas Akhir, Prototype, dan Penelitian." },
  { icon: "LayoutTemplate", title: "Custom Solution", description: "Untuk kebutuhan yang tidak masuk kategori paket lainnya. Contoh: AI Integration, Automation, API Development, dan lain-lain." },
];

export interface PaketHarga {
  title: string;
  price: string;
  priceUnit?: string;      // e.g. "" for one-time, or omit   Beyond Studio packages are one-time, not "/month" like the old template
  description: string;     // short 1-liner, replaces old plan description
  features: string[];
  ctaLabel: string;
  badge?: string;          // e.g. "Khusus Mahasiswa"
  featured?: boolean;      // true = one package gets a subtle highlight treatment (e.g. Sistem Informasi or E-Commerce), matching how the original 2-plan layout implicitly emphasized the pricier plan
}
export const bsPaketHargaList: PaketHarga[] = [
  {
    title: "Business Website",
    price: "Mulai dari Rp500.000",
    description: "Website profesional untuk memperkenalkan bisnis, jasa, atau personal branding. Cocok untuk Company Profile, Landing Page, dan UMKM.",
    features: [
      "Belum termasuk domain",
      "Hosting 1 tahun",
      "Hingga 5 halaman",
      "Responsive Mobile",
      "SEO Dasar",
      "Form Kontak & WhatsApp",
      "Google Maps",
      "Integrasi Social Media",
      "After Go Live Support",
    ],
    ctaLabel: "Pilih Paket",
  },
  {
    title: "E-Commerce",
    price: "Mulai dari Rp1.500.000",
    description: "Website toko online lengkap untuk menjual produk secara profesional. Cocok untuk Fashion, Kuliner, Grosir, dll.",
    features: [
      "Belum termasuk domain",
      "Hosting 1 tahun",
      "Katalog Produk",
      "Manajemen Produk",
      "Manajemen Stok",
      "Keranjang Belanja",
      "Checkout",
      "Payment Gateway (opsional)",
      "Ongkir Otomatis",
      "Dashboard Admin",
      "Input hingga 50 produk",
      "After Go Live Support",
    ],
    ctaLabel: "Pilih Paket",
  },
  {
    title: "Web Application",
    price: "Mulai dari Rp1.500.000",
    description: "Aplikasi web custom sesuai kebutuhan bisnis. Harga menyesuaikan kompleksitas fitur.",
    features: [
      "Analisis kebutuhan",
      "UI/UX Custom",
      "Login Multi Role",
      "Dashboard Admin",
      "CRUD Data",
      "Export PDF & Excel",
      "Responsive",
      "Dokumentasi API (jika diperlukan)",
      "After Go Live Support",
    ],
    ctaLabel: "Pilih Paket",
    featured: true,
    badge: "Populer",
  },
  {
    title: "Portfolio Website",
    price: "Mulai dari Rp350.000",
    description: "Website personal untuk freelancer dan profesional. Cocok untuk Programmer, Designer, Photographer, dll.",
    features: [
      "Home",
      "About",
      "Portfolio",
      "Contact",
      "Responsive",
      "SEO Dasar",
      "Integrasi Media Sosial",
      "Domain & Hosting",
      "After Go Live Support",
    ],
    ctaLabel: "Pilih Paket",
  },
  {
    title: "Academic Project",
    price: "Mulai dari Rp1.000.000",
    description: "Pembuatan aplikasi web untuk kebutuhan akademik. Cocok untuk Skripsi, Tugas Akhir, Penelitian.",
    features: [
      "Sistem sesuai judul",
      "Dokumentasi dasar",
      "Konsultasi",
      "Revisi sesuai kesepakatan",
      "Source Code",
      "Support setelah selesai",
    ],
    ctaLabel: "Tanya Detail",
    badge: "Khusus Mahasiswa",
  },
  {
    title: "Custom Solution",
    price: "Custom",
    description: "Untuk kebutuhan khusus seperti AI Integration, Automation, API Development, Dashboard Analytics, dll.",
    features: [
      "Konsultasi Gratis",
      "Analisis Kebutuhan",
      "Estimasi Waktu",
      "Penawaran Harga Khusus",
    ],
    ctaLabel: "Hubungi Kami",
  },
];
export const bsPaketHargaHeader = {
  headline: "Paket Harga",
  subheadline: "Pilih paket sesuai kebutuhanmu - transparan, tanpa biaya tersembunyi.",
};

export interface PortfolioItem { name: string; category: string; thumbnail: string; }
export const bsPortfolioList: PortfolioItem[] = [
  { name: "PLACEHOLDER - Contoh Company Profile", category: "Company Profile", thumbnail: "PLACEHOLDER" },
  { name: "PLACEHOLDER - Contoh Toko Online", category: "E-Commerce", thumbnail: "PLACEHOLDER" },
  { name: "PLACEHOLDER - Contoh Sistem Booking", category: "Sistem Informasi", thumbnail: "PLACEHOLDER" },
  { name: "PLACEHOLDER - Contoh Sistem Skripsi", category: "Skripsi", thumbnail: "PLACEHOLDER" },
  { name: "PLACEHOLDER - Contoh Landing Page", category: "Landing Page", thumbnail: "PLACEHOLDER" },
  { name: "PLACEHOLDER - Contoh Portofolio Personal", category: "Portofolio", thumbnail: "PLACEHOLDER" },
];

export interface AlurStep { step: number; title: string; description: string; }
export const bsAlurPengerjaanSteps: AlurStep[] = [
  { step: 1, title: "Konsultasi", description: "Diskusi kebutuhan lewat WhatsApp atau formulir." },
  { step: 2, title: "Penawaran & Kesepakatan", description: "Pilih paket yang cocok, sepakati harga dan timeline pengerjaan." },
  { step: 3, title: "Pengerjaan", description: "Website dikembangkan sesuai kebutuhan, dengan update progres berkala." },
  { step: 4, title: "Selesai & Live", description: "Website atau sistem siap dipakai, plus dukungan setelah live." },
];

export interface Testimoni {
  name: string;
  category: string;
  quote: string;
  quoteParts?: string[];
  featured?: boolean;
  image?: string;
}
export const bsTestimoniList: Testimoni[] = [
  {
    name: "Dian, Pemilik Toko Kue \"Dian's Bakery\"",
    category: "Pemilik UMKM",
    quote: "Awalnya cuma mau bikin landing page buat jualan online, tapi dikasih masukan juga soal alur pemesanan yang lebih gampang buat pelanggan. Prosesnya jelas dari awal, harga juga sudah disepakati di depan.",
    featured: true,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    quoteParts: [
      "Awalnya cuma mau bikin landing page buat jualan online, tapi dikasih masukan juga soal alur pemesanan yang lebih gampang buat pelanggan.",
      "Prosesnya jelas dari awal, harga juga sudah disepakati di depan.",
      "",
    ],
  },
  { name: "Fajar", category: "Mahasiswa Teknik Informatika", quote: "Sistem informasi buat skripsi jadi sesuai judul yang diajukan ke dosen. Bagian yang bikin tenang, ada sesi konsultasi teknis pas ada bagian yang belum saya pahami waktu sidang.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Salsa", category: "Freelance Graphic Designer", quote: "Portofolio online-nya bikin gampang kirim link ke calon klien, dibanding kirim PDF CV satu-satu. Tampilannya juga rapi, sesuai sama gaya kerja saya sebagai desainer.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Bapak Hendra", category: "Manajer Operasional PT Karya Sejahtera", quote: "Company profile-nya jadi lebih representatif buat perusahaan kami. Timeline pengerjaan sesuai yang dijanjikan di awal, dan komunikasinya enak - nggak perlu nunggu lama tiap kali ada revisi kecil.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Reza", category: "Founder Startup", quote: "Pengerjaan super cepat dan hasilnya jauh di atas ekspektasi. Sangat merekomendasikan Beyond Studio untuk kebutuhan website custom.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Amelia", category: "Digital Marketer", quote: "Website yang dibuat tidak hanya cantik, tapi juga dioptimasi untuk SEO. Trafik organik kami naik signifikan dalam sebulan.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Dimas", category: "Pemilik Restoran", quote: "Sistem booking yang dibuat sangat membantu operasional restoran kami. Tidak ada lagi double booking dan pelanggan lebih puas.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Kiki", category: "Content Creator", quote: "Sangat responsif dan komunikatif. Seluruh masukan saya didengarkan dan diimplementasikan dengan sangat baik.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Rizky", category: "Agen Properti", quote: "Website portofolio yang bersih dan profesional. Klien saya sekarang lebih mudah melihat daftar properti yang saya tawarkan.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150" },
];
export const bsTestimoniHeader = {
  headline: "Apa Kata Klien Kami",
  subheadline: "Cerita nyata dari UMKM, mahasiswa, freelancer, dan profesional yang sudah pakai layanan Beyond Studio.",
  cta: { label: "Konsultasi Gratis", href: "#contact" },  // replaces old "I want to learn more"
};

export interface FAQItem { question: string; answer: string; }
export const bsFaqList: FAQItem[] = [
  { question: "Berapa lama pengerjaan website?", answer: "Waktu pengerjaan disepakati di tahap penawaran, tergantung kompleksitas paket yang anda pilih." },
  { question: "Apakah bisa konsultasi dulu sebelum bayar?", answer: "Bisa. Konsultasi kebutuhan awal lewat WhatsApp atau formulir sepenuhnya gratis, sebelum ada kesepakatan apa pun." },
  { question: "Apakah paket skripsi termasuk bimbingan teknis ke dosen?", answer: "Paket skripsi mencakup konsultasi teknis pengerjaan sistem, bukan pendampingan langsung ke dosen pembimbing." },
  { question: "Apa bedanya Sistem Informasi biasa dengan Paket Skripsi?", answer: "Sistem Informasi biasa ditujukan untuk kebutuhan bisnis operasional, sedangkan Paket Skripsi disesuaikan dengan judul dan kebutuhan akademik anda." },
  { question: "Apakah ada garansi revisi?", answer: "Revisi tersedia sesuai ketentuan masing-masing paket dan kesepakatan di awal." },
  { question: "Apakah harga sudah termasuk domain dan hosting?", answer: "Sebagian paket sudah termasuk free domain dan/atau hosting - detailnya tercantum di fitur tiap paket." },
];

export const bsKontakContent = {
  formCategories: ["Business Website", "E-Commerce", "Web Application", "Portfolio Website", "Academic Project", "Custom Solution"],
  whatsappNumberPlaceholder: "6281927070239",
  social: { instagram: "PLACEHOLDER_IG_URL", tiktok: "PLACEHOLDER_TIKTOK_URL" },
  footerCopyright: "Beyond Studio   2026",
};

export const bsFooterContent = {
  headline: "Siap Bangun Website anda?",
  description: "Kami bikin website profesional, sistem informasi custom, dan bantu pengerjaan skripsi - dengan proses transparan, pengerjaan cepat, dan revisi sesuai kesepakatan.",
};

export interface CraftsmanshipContent {
  headline: string;
  subheadline: string;
  ctaPrimary: NavItem;    // scrolls to Alur Pengerjaan section
  ctaSecondary: NavItem;  // WhatsApp technical consultation
  techBadge: string;      // small pill shown top-right of the code mockup, replacing old "Export code"
  codeSnippet: string[];  // array of lines, typed one-by-one via existing Typewriter component
}
export const bsCraftsmanshipContent: CraftsmanshipContent = {
  headline: "Dibangun Developer Profesional, Sesuai Kebutuhanmu",
  subheadline: "Setiap website dibangun dengan kode yang bersih dan terstruktur, sehingga lebih mudah dirawat, dikembangkan, dan siap mendukung kebutuhanmu setelah website live.",
  ctaPrimary: { label: "Lihat Alur Pengerjaan", href: "#alur-pengerjaan" },
  ctaSecondary: { label: "Konsultasi Teknis", href: "#contact" },
  techBadge: "Next.js",
  codeSnippet: [
    "export function BookingForm() {",
    "  const [date, setDate] = useState<Date>();",
    "",
    "  return (",
    "    <Card>",
    "      <DatePicker value={date} onChange={setDate} />",
    "      <Button>Booking Sekarang</Button>",
    "    </Card>",
    "  );",
    "}",
  ],
};

export interface LayananCard {
  id: string;
  title: string;
  description: string;
  size: "large" | "small";
  style: "dark" | "beige";
  icon?: string;          // lucide-react icon name, used for small dark cards
  badge?: string;         // e.g. "Khusus Mahasiswa"
  mockupImage?: string;       // key into layananMockups, resolved in component
  floatingStat?: { value: string; label: string; trend?: string }; // trend e.g. "+18%"
  chips: string[];        // "Cocok untuk" tags, revealed on hover (shown statically on the wide "custom" card)
  gridArea: "web" | "folio" | "shop" | "biz" | "academic" | "custom";
}
export const bsLayananCards: LayananCard[] = [
  { id: "web-application", title: "Web Application", description: "Aplikasi web yang dibangun dari alur kerja kamu, bukan dari template. Data rapi, akses per peran, laporan langsung jadi.", size: "large", style: "dark", mockupImage: "sistemInformasi", floatingStat: { value: "Custom", label: "Sesuai Kebutuhan" }, chips: ["Dashboard", "Sistem Informasi", "Booking", "Inventory", "POS", "ERP", "HRIS", "+3 lainnya"], gridArea: "web" },
  { id: "portfolio", title: "Portfolio Website", description: "Satu halaman yang bikin klien percaya sebelum kamu mulai bicara. Rapi di desktop, enak dibaca di HP.", size: "large", style: "dark", floatingStat: { value: "80+", label: "Profesional Sudah Pakai" }, chips: ["Programmer", "Designer", "Photographer", "Freelancer", "CV Online"], gridArea: "folio" },
  { id: "e-commerce", title: "E-Commerce", description: "Toko online yang siap jualan hari itu juga: katalog, checkout, dan laporan penjualan.", size: "small", style: "beige", icon: "ShoppingCart", floatingStat: { value: "50", label: "Katalog Produk" }, chips: ["Fashion", "Kuliner", "Grosir", "Toko Online"], gridArea: "shop" },
  { id: "business-website", title: "Business Website", description: "Wajah bisnis kamu di internet. Cepat dibuka, kredibel, gampang ditemukan di Google.", size: "small", style: "dark", icon: "Building2", mockupImage: "companyProfile", floatingStat: { value: "5", label: "Halaman" }, chips: ["Company Profile", "Landing Page", "Website Jasa", "UMKM"], gridArea: "biz" },
  { id: "academic-project", title: "Academic Project", description: "Aplikasi web untuk skripsi dan penelitian, lengkap dengan dokumentasi yang siap diuji.", size: "small", style: "dark", icon: "GraduationCap", badge: "Khusus Mahasiswa", mockupImage: "paketSkripsi", floatingStat: { value: "50+", label: "Mahasiswa Terbantu" }, chips: ["Skripsi", "Tugas Akhir", "Prototype", "Penelitian"], gridArea: "academic" },
  { id: "custom-solution", title: "Custom Solution", description: "Kebutuhan yang tidak masuk kotak mana pun. Ceritakan masalahnya, kami rancang dan bangun dari nol.", size: "small", style: "dark", icon: "LayoutTemplate", mockupImage: "landingPage", floatingStat: { value: "Konsultasi", label: "Gratis" }, chips: ["AI Integration", "Automation", "API Development", "Dashboard Analytics", "Maintenance", "Integrasi Payment"], gridArea: "custom" },
];
export const bsLayananHeader = {
  eyebrow: "Layanan",
  headline: "Enam layanan, satu cara kerja yang sama rapinya.",
  subheadline: "Dari dashboard internal sampai skripsi. Pilih yang paling dekat dengan kebutuhan kamu.",
};

