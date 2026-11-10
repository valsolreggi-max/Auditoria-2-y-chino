import React from 'react';
import { EditorialContactSection } from '../components/public/EditorialContactSection';
import { SEOHead } from '../components/SEOHead';
import { useLanguage, getLocalizedPath } from '../i18n';

export const ContactoPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const seoData = {
    es: {
      title: 'Contacto Directo — Valeria Reishi | Golden Coast Property Advisory',
      description: 'Póngase en contacto con Valeria Reishi para una consulta confidencial sobre compra, venta o alquiler en Costa Dorada y Garraf. Teléfono, WhatsApp y formulario.',
    },
    en: {
      title: 'Direct Contact — Valeria Reishi | Golden Coast Property Advisory',
      description: 'Contact Valeria Reishi for a confidential consultation on buying, selling, or leasing in Costa Dorada and Garraf. Phone, WhatsApp, and private inquiry form.',
    },
    de: {
      title: 'Direkter Kontakt — Valeria Reishi | Golden Coast Property Advisory',
      description: 'Kontaktieren Sie Valeria Reishi für eine vertrauliche Beratung zum Kauf, Verkauf oder zur Miete an der Costa Dorada und im Garraf. Telefon, WhatsApp und Formular.',
    },
    fr: {
      title: 'Contact Direct — Valeria Reishi | Golden Coast Property Advisory',
      description: 'Contactez Valeria Reishi pour un entretien confidentiel sur l’achat, la vente ou la location sur la Costa Dorada et le Garraf. Téléphone, WhatsApp et formulaire.',
    },
    zh: {
      title: '直接联系 — Valeria Reishi | Golden Coast Property Advisory 私人置业顾问',
      description: '预约 Valeria Reishi 私密专属咨询：关于西班牙黄金海岸及加拉夫核心地段房产买卖、长租投资与安家规划。电话、WhatsApp 与加密咨询表格。',
    },
  }[currentLanguage];

  return (
    <div>
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        canonicalPath={getLocalizedPath('/contacto', currentLanguage)}
      />
      <EditorialContactSection />
    </div>
  );
};
