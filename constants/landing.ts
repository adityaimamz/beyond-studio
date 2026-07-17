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
export const bsNavCTA: NavItem = { label: "Konsultasi Gratis", href: "#kontak" };

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  ctaPrimary: NavItem;
  ctaSecondary: NavItem;
}
export const bsHeroContent: HeroContent = {
  badge: "PRICELIST LENGKAP & TRANSPARAN",
  headline: "Solusi Website Custom untuk Bisnis, Skripsi, dan Personal",
  subheadline: "Proses cepat, harga transparan, dan konsultasi gratis sebelum kamu order.",
  ctaPrimary: { label: "Konsultasi via WhatsApp", href: "#kontak" },
  ctaSecondary: { label: "Lihat Paket Harga", href: "#paket-harga" },
};

export interface StatItem { value: string; label: string; }
export interface ValueProp { icon: string; title: string; description: string; }
export const bsKenapaPilihKami = {
  stats: [
    { value: "PLACEHOLDER", label: "Proyek Selesai" },
    { value: "PLACEHOLDER", label: "Klien Puas" },
  ] as StatItem[],
  valueProps: [
    { icon: "Wallet", title: "Harga Terjangkau", description: "Paket disusun agar tetap ramah di kantong tanpa mengorbankan kualitas." },
    { icon: "Settings2", title: "Sesuai Kebutuhan", description: "Setiap website dibuat custom, bukan template generik." },
    { icon: "ListChecks", title: "Proses Jelas", description: "Alur pengerjaan transparan dari konsultasi hingga selesai." },
    { icon: "MessageCircle", title: "Konsultasi Gratis", description: "Diskusikan kebutuhanmu dulu sebelum memutuskan order." },
  ] as ValueProp[],
};

export interface LayananItem { icon: string; title: string; description: string; }
export const bsLayananList: LayananItem[] = [
  { icon: "LayoutTemplate", title: "Landing Page", description: "Halaman tunggal untuk promosi produk atau jasa." },
  { icon: "Building2", title: "Company Profile", description: "Website multi halaman untuk bisnis dan korporat." },
  { icon: "LayoutDashboard", title: "Sistem Informasi", description: "Sistem custom seperti booking, inventaris, absensi, dashboard admin, dan kebutuhan lainnya." },
  { icon: "ShoppingCart", title: "E-Commerce (Toko Online)", description: "Website jualan online dengan payment gateway dan manajemen produk." },
  { icon: "UserCircle", title: "Portofolio Website", description: "Website untuk freelancer atau profesional menampilkan karya dan CV online." },
  { icon: "GraduationCap", title: "Paket Skripsi / Tugas Akhir", description: "Bantuan pengerjaan sistem web atau aplikasi untuk kebutuhan skripsi mahasiswa." },
];

export interface PaketHarga {
  title: string;
  price: string;
  priceUnit?: string;      // e.g. "" for one-time, or omit — Beyond Studio packages are one-time, not "/month" like the old template
  description: string;     // short 1-liner, replaces old plan description
  features: string[];
  ctaLabel: string;
  badge?: string;          // e.g. "Khusus Mahasiswa"
  featured?: boolean;      // true = one package gets a subtle highlight treatment (e.g. Sistem Informasi or E-Commerce), matching how the original 2-plan layout implicitly emphasized the pricier plan
}
export const bsPaketHargaList: PaketHarga[] = [
  { title: "Landing Page", price: "Rp399.000", description: "Halaman tunggal untuk promosi produk atau jasa.", features: ["Free domain .com", "1 halaman panjang", "Mobile friendly", "SEO basic", "Integrasi WhatsApp", "Maintenance 1 bulan"], ctaLabel: "Pilih Paket" },
  { title: "Company Profile", price: "Rp1.299.000", description: "Website multi halaman untuk bisnis dan korporat.", features: ["Free domain .com", "Hosting 1 tahun", "Hingga 5 halaman", "Desain sesuai branding", "Blog/CMS", "Cocok untuk bisnis & korporat"], ctaLabel: "Pilih Paket" },
  { title: "Sistem Informasi", price: "Rp1.999.000", description: "Sistem custom seperti booking, inventaris, absensi, dashboard admin.", features: ["Sistem booking", "Inventaris", "Absensi", "Login multi-role", "Export Excel", "Export PDF", "Dashboard admin", "CRUD data", "Support 1 bulan"], ctaLabel: "Pilih Paket", featured: true },
  { title: "E-Commerce", price: "Rp1.999.000", description: "Website jualan online dengan payment gateway dan manajemen produk.", features: ["Free domain .com", "Hosting 1 tahun", "Payment gateway", "Manajemen produk", "Manajemen stok", "Ongkir otomatis", "Input hingga 30 produk"], ctaLabel: "Pilih Paket" },
  { title: "Portofolio Website", price: "Rp299.000", description: "Website untuk freelancer atau profesional menampilkan karya dan CV online.", features: ["Free domain", "Galeri karya", "CV Online", "Integrasi media sosial", "Cocok untuk freelancer dan profesional"], ctaLabel: "Pilih Paket" },
  { title: "Paket Skripsi / Tugas Akhir", price: "PLACEHOLDER", description: "Bantuan pengerjaan sistem web atau aplikasi untuk kebutuhan skripsi mahasiswa.", features: ["Sistem sesuai judul skripsi", "Konsultasi teknis", "Dokumentasi dasar", "Revisi sesuai kebutuhan akademik"], ctaLabel: "Tanya Detail", badge: "Khusus Mahasiswa" },
];
export const bsPaketHargaHeader = {
  headline: "Paket Harga",
  subheadline: "Pilih paket sesuai kebutuhanmu — transparan, tanpa biaya tersembunyi.",
};

export interface PortfolioItem { name: string; category: string; thumbnail: string; }
export const bsPortfolioList: PortfolioItem[] = [
  { name: "PLACEHOLDER — Contoh Company Profile", category: "Company Profile", thumbnail: "PLACEHOLDER" },
  { name: "PLACEHOLDER — Contoh Toko Online", category: "E-Commerce", thumbnail: "PLACEHOLDER" },
  { name: "PLACEHOLDER — Contoh Sistem Booking", category: "Sistem Informasi", thumbnail: "PLACEHOLDER" },
  { name: "PLACEHOLDER — Contoh Sistem Skripsi", category: "Skripsi", thumbnail: "PLACEHOLDER" },
  { name: "PLACEHOLDER — Contoh Landing Page", category: "Landing Page", thumbnail: "PLACEHOLDER" },
  { name: "PLACEHOLDER — Contoh Portofolio Personal", category: "Portofolio", thumbnail: "PLACEHOLDER" },
];

export interface AlurStep { step: number; title: string; description: string; }
export const bsAlurPengerjaanSteps: AlurStep[] = [
  { step: 1, title: "Konsultasi", description: "Diskusi kebutuhan melalui WhatsApp atau formulir." },
  { step: 2, title: "Penawaran & Kesepakatan", description: "Pemilihan paket, kesepakatan harga, timeline." },
  { step: 3, title: "Pengerjaan", description: "Pengembangan sesuai kebutuhan, update progres secara berkala." },
  { step: 4, title: "Selesai & Live", description: "Website/sistem siap digunakan, dukungan setelah pengerjaan." },
];

export interface Testimoni {
  name: string;
  category: string;
  quote: string;
  quoteParts?: [string, string, string]; // only for the featured testimonial — 3 sentences shown with decreasing opacity, matching the old "Announcement" paragraph fade treatment
  featured?: boolean;
}
export const bsTestimoniList: Testimoni[] = [
  {
    name: "PLACEHOLDER Nama",
    category: "Pemilik UMKM",
    quote: "PLACEHOLDER — testimoni asli menyusul.",
    featured: true,
    quoteParts: [
      "PLACEHOLDER — kalimat pembuka testimoni tentang pengalaman awal menggunakan jasa Beyond Studio.",
      "PLACEHOLDER — kalimat elaborasi tentang proses pengerjaan dan komunikasi selama project berlangsung.",
      "PLACEHOLDER — kalimat penutup tentang hasil akhir dan dampaknya ke bisnis.",
    ],
  },
  { name: "PLACEHOLDER Nama", category: "Mahasiswa Teknik Informatika", quote: "PLACEHOLDER — testimoni asli menyusul." },
  { name: "PLACEHOLDER Nama", category: "Freelancer", quote: "PLACEHOLDER — testimoni asli menyusul." },
  { name: "PLACEHOLDER Nama", category: "Profesional", quote: "PLACEHOLDER — testimoni asli menyusul." },
];
export const bsTestimoniHeader = {
  headline: "Apa Kata Klien Kami",
  subheadline: "Cerita nyata dari UMKM, mahasiswa, freelancer, dan profesional yang sudah menggunakan layanan Beyond Studio.",
  cta: { label: "Konsultasi Gratis", href: "#kontak" },  // replaces old "I want to learn more"
};

export interface FAQItem { question: string; answer: string; }
export const bsFaqList: FAQItem[] = [
  { question: "Berapa lama pengerjaan website?", answer: "Estimasi waktu pengerjaan disepakati saat tahap penawaran, tergantung kompleksitas paket yang dipilih." },
  { question: "Apakah bisa konsultasi dulu sebelum bayar?", answer: "Bisa. Konsultasi kebutuhan awal via WhatsApp atau formulir sepenuhnya gratis sebelum ada kesepakatan." },
  { question: "Apakah paket skripsi termasuk bimbingan teknis ke dosen?", answer: "Paket skripsi mencakup konsultasi teknis pengerjaan sistem, bukan pendampingan langsung ke dosen pembimbing." },
  { question: "Apa bedanya Sistem Informasi biasa dengan Paket Skripsi?", answer: "Sistem Informasi biasa ditujukan untuk kebutuhan bisnis operasional, sedangkan Paket Skripsi disesuaikan dengan judul dan kebutuhan akademik mahasiswa." },
  { question: "Apakah ada garansi revisi?", answer: "Revisi tersedia sesuai ketentuan masing-masing paket dan kesepakatan di awal pengerjaan." },
  { question: "Apakah harga sudah termasuk domain dan hosting?", answer: "Sebagian paket sudah termasuk free domain dan/atau hosting — detail lengkap tercantum pada fitur tiap paket." },
];

export const bsKontakContent = {
  formCategories: ["UMKM/Bisnis", "Skripsi", "Personal/Freelancer"],
  whatsappNumberPlaceholder: "6281927070239",
  social: { instagram: "PLACEHOLDER_IG_URL", tiktok: "PLACEHOLDER_TIKTOK_URL" },
  footerCopyright: "Beyond Studio — 2026",
};

export const bsFooterContent = {
  headline: "Wujudkan Website Impianmu Bersama Beyond Studio",
  description: "Solusi pembuatan website profesional, sistem informasi custom, dan pengerjaan proyek tugas akhir/skripsi mahasiswa dengan proses transparan, pengerjaan cepat, dan garansi revisi sesuai kesepakatan.",
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
  headline: "Ditulis Developer Profesional, Bukan Sekadar Template",
  subheadline: "Setiap project dikerjakan manual dengan kode bersih dan terstruktur, sehingga mudah dikembangkan atau ditambah fitur di kemudian hari.",
  ctaPrimary: { label: "Lihat Alur Pengerjaan", href: "#alur-pengerjaan" },
  ctaSecondary: { label: "Konsultasi Teknis", href: "#kontak" },
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
  gridArea: "step" | "account" | "trusted" | "loan" | "deals" | "track";
}
export const bsLayananCards: LayananCard[] = [
  { id: "sistem-informasi", title: "Sistem Informasi", description: "Sistem custom seperti booking, inventaris, absensi, dashboard admin, dan kebutuhan lainnya.", size: "large", style: "dark", mockupImage: "sistemInformasi", floatingStat: { value: "142", label: "Booking Bulan Ini", trend: "+18%" }, gridArea: "step" },
  { id: "portofolio", title: "Portofolio Website", description: "Website untuk freelancer atau profesional menampilkan karya dan CV online.", size: "large", style: "dark", floatingStat: { value: "80+", label: "Freelancer Sudah Pakai" }, gridArea: "account" },
  { id: "landing-page", title: "Landing Page", description: "Halaman tunggal untuk promosi produk atau jasa.", size: "small", style: "dark", icon: "LayoutTemplate", mockupImage: "landingPage", floatingStat: { value: "3 Hari", label: "Live" }, gridArea: "deals" },
  { id: "company-profile", title: "Company Profile", description: "Website multi halaman untuk bisnis dan korporat.", size: "small", style: "dark", icon: "Building2", mockupImage: "companyProfile", floatingStat: { value: "5", label: "Halaman" }, gridArea: "loan" },
  { id: "e-commerce", title: "E-Commerce (Toko Online)", description: "Website jualan online dengan payment gateway dan manajemen produk.", size: "small", style: "beige", icon: "ShoppingCart", floatingStat: { value: "1,250", label: "Pesanan/Bulan", trend: "+9.87%" }, gridArea: "trusted" },
  { id: "paket-skripsi", title: "Paket Skripsi / Tugas Akhir", description: "Bantuan pengerjaan sistem web atau aplikasi untuk kebutuhan skripsi mahasiswa.", size: "small", style: "dark", icon: "GraduationCap", badge: "Khusus Mahasiswa", mockupImage: "paketSkripsi", floatingStat: { value: "50+", label: "Mahasiswa Terbantu" }, gridArea: "track" },
];
export const bsLayananHeader = {
  eyebrow: "Make things fast",           // reuse existing top-right small label pattern
  headline: "6 Layanan untuk Setiap Kebutuhan Websitemu",
  cta: { label: "Konsultasi Gratis", href: "#kontak" },  // replaces "Join beta now"
};

