import { bsFaqList } from "@/constants/landing";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Beyond Studio",
    "url": "https://www.beyondstudio.site",
    "logo": "https://www.beyondstudio.site/images/logo-light.png",
    "image": "https://www.beyondstudio.site/images/logo-light.png",
    "description": "Beyond Studio melayani pembuatan website custom profesional untuk bisnis, portofolio, dan pengerjaan skripsi/tugas akhir mahasiswa.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "priceRange": "Rp299.000 - Rp1.999.000"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Beyond Studio",
    "url": "https://www.beyondstudio.site",
    "inLanguage": "id-ID"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": bsFaqList.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default JsonLd;
