import React from 'react';
import { useLanguage } from '../../i18n';

const TEXT: Record<string, { error: string; email: string }> = {
  es: { error: 'No hemos podido enviar tu consulta. Escríbenos directamente:', email: 'Correo' },
  en: { error: 'We could not send your enquiry. Please contact us directly:', email: 'Email' },
  fr: { error: "Nous n'avons pas pu envoyer votre demande. Contactez-nous directement :", email: 'E-mail' },
  de: { error: 'Ihre Anfrage konnte nicht gesendet werden. Bitte kontaktieren Sie uns direkt:', email: 'E-Mail' },
  zh: { error: '您的咨询未能发送。请直接联系我们：', email: '电子邮件' },
};

// Si el envío falla, lo escrito no se pierde: se puede mandar por WhatsApp o correo.
export const SendErrorNotice: React.FC<{ message: string }> = ({ message }) => {
  const { language } = useLanguage();
  const t = TEXT[language] || TEXT.es;
  const body = encodeURIComponent(message);
  return (
    <div role="alert" className="p-3.5 bg-[#F5F2EA] border border-amber-300 text-amber-900 text-xs font-sans space-y-2">
      <p>{t.error}</p>
      <p className="flex gap-4 font-semibold underline">
        <a href={`https://wa.me/34645695194?text=${body}`} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href={`mailto:valeria@goldencoastpropertyadvisory.com?subject=Golden%20Coast&body=${body}`}>
          {t.email}
        </a>
      </p>
    </div>
  );
};
