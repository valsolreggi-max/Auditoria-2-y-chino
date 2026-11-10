import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Compass, Home, Phone } from 'lucide-react';
import { useLanguage, getLocalizedPath } from '../i18n';

export const NotFoundPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const labels = {
    es: {
      title: '404 — Página no encontrada | Golden Coast Property Advisory',
      desc: 'La página que busca no existe o ha sido trasladada. Regrese al inicio o explore nuestra asesoría inmobiliaria en Costa Dorada y Garraf.',
      badge: 'Error 404 · Dirección no encontrada',
      heading: 'Esta propiedad en la web no está disponible',
      text: 'La dirección que ha introducido no existe o ha cambiado de lugar. Le invitamos a regresar a la página principal o consultar directamente nuestras secciones y vías de contacto.',
      backHome: 'Volver al Inicio',
      contact: 'Contactar con Valeria',
      quickRoutes: 'Rutas directas',
      services: 'Servicios & Asesoría',
      zones: 'Costa Dorada & Garraf',
      about: 'Sobre mí (Valeria Reishi)',
      faq: 'Preguntas Frecuentes',
    },
    en: {
      title: '404 — Page Not Found | Golden Coast Property Advisory',
      desc: 'The page you are looking for does not exist or has been moved. Return to home or explore our real estate advisory in Costa Dorada and Garraf.',
      badge: 'Error 404 · Page Not Found',
      heading: 'This online property is not available',
      text: 'The address you entered does not exist or has moved. We invite you to return to the home page or contact Valeria directly.',
      backHome: 'Back to Home',
      contact: 'Contact Valeria',
      quickRoutes: 'Quick navigation',
      services: 'Services & Advisory',
      zones: 'Costa Dorada & Garraf',
      about: 'About Me (Valeria Reishi)',
      faq: 'Frequently Asked Questions',
    },
    de: {
      title: '404 — Seite nicht gefunden | Golden Coast Property Advisory',
      desc: 'Die gewünschte Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite zurück.',
      badge: 'Fehler 404 · Seite nicht gefunden',
      heading: 'Diese Webadresse ist nicht verfügbar',
      text: 'Die von Ihnen aufgerufene Adresse existiert nicht oder wurde verschoben. Kehren Sie zur Startseite zurück oder nehmen Sie direkt Kontakt auf.',
      backHome: 'Zur Startseite',
      contact: 'Kontakt zu Valeria',
      quickRoutes: 'Direktlinks',
      services: 'Dienstleistungen',
      zones: 'Costa Dorada & Garraf',
      about: 'Über mich (Valeria Reishi)',
      faq: 'Häufig gestellte Fragen',
    },
    fr: {
      title: '404 — Page non trouvée | Golden Coast Property Advisory',
      desc: 'La page que vous recherchez n’existe pas ou a été déplacée. Revenez à l’accueil.',
      badge: 'Erreur 404 · Page introuvable',
      heading: 'Cette page n’est pas disponible',
      text: 'L’adresse que vous avez saisie n’existe pas ou a été déplacée. Nous vous invitons à revenir à la page d’accueil ou à contacter Valeria.',
      backHome: 'Retour à l’Accueil',
      contact: 'Contacter Valeria',
      quickRoutes: 'Accès direct',
      services: 'Services & Conseil',
      zones: 'Costa Dorada & Garraf',
      about: 'À propos (Valeria Reishi)',
      faq: 'Foire Aux Questions',
    },
    zh: {
      title: '404 — 页面未找到 | Golden Coast Property Advisory',
      desc: '您访问的页面不存在或已被移除。请返回首页或直接咨询 Valeria Reishi。',
      badge: '404 错误 · 网址未找到',
      heading: '该网络页面暂未开放或已迁移',
      text: '您输入的网址不存在或已被调整。我们诚邀您返回首页，或浏览主要服务版块及直接与 Valeria 取得联系。',
      backHome: '返回首页',
      contact: '联系顾问 Valeria',
      quickRoutes: '快捷导航',
      services: '专属顾问服务',
      zones: '黄金海岸与加拉夫',
      about: '关于 Valeria Reishi',
      faq: '常见问题解答',
    },
  }[currentLanguage];

  return (
    <>
      <SEOHead
        title={labels.title}
        description={labels.desc}
        canonicalPath={getLocalizedPath('/404', currentLanguage)}
        noindex={true}
      />

      <section className="min-h-[75vh] flex items-center justify-center bg-[#F5F2EA] py-24 px-6 sm:px-10 border-b border-[#E8E2D5]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#EFECE3] border border-[#E8E2D5] text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.22em] mb-6">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{labels.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211D] leading-tight tracking-tight mb-6">
            {labels.heading}
          </h1>

          {/* Explanation */}
          <p className="text-base sm:text-lg text-[#5A554E] font-sans font-light leading-relaxed max-w-xl mx-auto mb-10">
            {labels.text}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to={getLocalizedPath('/', currentLanguage)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#24211D] text-[#F5F2EA] font-sans text-sm font-medium tracking-wide hover:bg-[#38342E] transition-colors duration-200"
            >
              <Home className="w-4 h-4 text-[#D4AF37]" />
              <span>{labels.backHome}</span>
            </Link>

            <Link
              to={getLocalizedPath('/contacto', currentLanguage)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#FAF8F5] border border-[#24211D]/20 text-[#24211D] font-sans text-sm font-medium tracking-wide hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>{labels.contact}</span>
            </Link>
          </div>

          {/* Quick links */}
          <div className="pt-8 border-t border-[#E8E2D5]/80 text-xs font-sans text-[#7A746B]">
            <span className="uppercase tracking-[0.18em] block mb-3 text-[#24211D]/60 font-semibold">
              {labels.quickRoutes}
            </span>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to={getLocalizedPath('/servicios', currentLanguage)} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">
                {labels.services}
              </Link>
              <span className="text-[#D4AF37]">·</span>
              <Link to={getLocalizedPath('/zonas', currentLanguage)} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">
                {labels.zones}
              </Link>
              <span className="text-[#D4AF37]">·</span>
              <Link to={getLocalizedPath('/sobre-mi', currentLanguage)} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">
                {labels.about}
              </Link>
              <span className="text-[#D4AF37]">·</span>
              <Link to={getLocalizedPath('/faq', currentLanguage)} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">
                {labels.faq}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
