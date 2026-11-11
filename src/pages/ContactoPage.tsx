import React from 'react';
import { EditorialContactSection } from '../components/public/EditorialContactSection';
import { SEOHead } from '../components/SEOHead';
import { useLanguage, getCanonicalPath } from '../i18n';

export const ContactoPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const seoData = {
    es: {
      title: 'Contacto Directo — Valeria Reggi | Golden Coast Property Advisory',
      description: 'Póngase en contacto con Valeria Reggi para una consulta confidencial sobre compra, venta o alquiler en Costa Dorada y Garraf. Teléfono, WhatsApp y formulario.',
    },
    en: {
      title: 'Direct Contact — Valeria Reggi | Golden Coast Property Advisory',
      description: 'Contact Valeria Reggi for a confidential consultation on buying, selling, or leasing in Costa Dorada and Garraf. Phone, WhatsApp, and private inquiry form.',
    },
    de: {
      title: 'Direkter Kontakt — Valeria Reggi | Golden Coast Property Advisory',
      description: 'Kontaktieren Sie Valeria Reggi für eine vertrauliche Beratung zum Kauf, Verkauf oder zur Miete an der Costa Dorada und im Garraf. Telefon, WhatsApp und Formular.',
    },
    fr: {
      title: 'Contact Direct — Valeria Reggi | Golden Coast Property Advisory',
      description: 'Contactez Valeria Reggi pour un entretien confidentiel sur l’achat, la vente ou la location sur la Costa Dorada et le Garraf. Téléphone, WhatsApp et formulaire.',
    },
    zh: {
      title: '直接联系 — Valeria Reggi | Golden Coast Property Advisory 私人置业顾问',
      description: '预约 Valeria Reggi 私密专属咨询：关于西班牙黄金海岸及加拉夫核心地段房产买卖、长租投资与安家规划。电话、WhatsApp 与加密咨询表格。',
    },
  }[currentLanguage];

  return (
    <div>
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        canonicalPath={getCanonicalPath('/contacto', currentLanguage)}
      />
      <EditorialContactSection />
    </div>
  );
};
