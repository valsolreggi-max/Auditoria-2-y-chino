import React from 'react';
import { EditorialHeroSection } from '../components/public/EditorialHeroSection';
import { HomeServicesSummary } from '../components/public/HomeServicesSummary';
import { HomeTerritorySummary } from '../components/public/HomeTerritorySummary';
import { HomeAboutSummary } from '../components/public/HomeAboutSummary';
import { HomeTestimonialFeatured } from '../components/public/HomeTestimonialFeatured';
import { HomeContactCta } from '../components/public/HomeContactCta';
import { useConsultation } from '../components/ConsultationContext';
import { useLanguage, getCanonicalPath } from '../i18n';
import { SEOHead } from '../components/SEOHead';

export const HomePage: React.FC = () => {
  const { openConsultation } = useConsultation();
  const { language } = useLanguage();

  const titles: Record<string, string> = {
    es: 'Asesoría Inmobiliaria Costa Dorada & Garraf | Golden Coast Property Advisory',
    en: 'Costa Dorada & Garraf Real Estate Advisory | Golden Coast Property Advisory',
    de: 'Immobilienberatung Costa Dorada & Garraf | Golden Coast Property Advisory',
    fr: 'Conseil Immobilier Costa Dorada & Garraf | Golden Coast Property Advisory',
    zh: '西班牙加拉夫与黄金海岸房产咨询 | Golden Coast Property Advisory',
  };

  const descriptions: Record<string, string> = {
    es: 'Asesoría inmobiliaria boutique en Costa Dorada y Garraf por Valeria Reishi, API colegiada y Perito Judicial Inmobiliario. Acompañamiento honesto e integral en compraventa, inversión y relocation.',
    en: 'Boutique real estate advisory in Costa Dorada and Garraf by Valeria Reishi, certified API agent and Judicial Appraiser. Tailored guidance for property purchase, sales and relocation.',
    de: 'Boutique-Immobilienberatung an der Costa Dorada und im Garraf durch Valeria Reishi, staatlich geprüfte Maklerin (API) und gerichtliche Immobiliensachverständige.',
    fr: 'Conseil immobilier boutique sur la Costa Dorada et le Garraf par Valeria Reishi, agente agréée API et experte judiciaire immobilière.',
    zh: '加拉夫海滨与黄金海岸精品房地产咨询，由西班牙官方注册经纪人（API）兼司法指定不动产估价师 Valeria Reishi 主理，为您提供客观、独立且高度私密的海外置业与资产伴护。',
  };

  return (
    <>
      <SEOHead
        title={titles[language] || titles.es}
        description={descriptions[language] || descriptions.es}
        canonicalPath={getCanonicalPath('/', language)}
      />

      {/* 1. Presentación (Hero) */}
      <EditorialHeroSection onOpenConsultation={(type) => openConsultation(type)} />

      {/* 2. Resumen de Servicios (con referencia breve a Relocation y enlace a /servicios) */}
      <HomeServicesSummary />

      {/* 3. Resumen de Zonas (Costa Dorada & Garraf con enlace a /zonas) */}
      <HomeTerritorySummary />

      {/* 4. Resumen de Sobre mí (Valeria, trayectoria y acreditaciones con enlace a /sobre-mi) */}
      <HomeAboutSummary />

      {/* 5. Un testimonio destacado (Diana, Nick & familia con enlace a /testimonios) */}
      <HomeTestimonialFeatured />

      {/* 6. CTA de contacto (enlace a /contacto y consulta directa) */}
      <HomeContactCta />
    </>
  );
};
