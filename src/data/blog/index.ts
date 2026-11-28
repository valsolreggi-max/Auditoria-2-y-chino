import type { Language } from '../../i18n/types';
import type { BlogPost } from './types';
import photoInquilinaBalcon from '../../assets/images/inquilina_balcon_notificacion.webp';
import photoCasaInteriorCocina from '../../assets/images/casa_interior_cocina_1786745865467.webp';

import { es as post2Es } from './posts/propietario-no-quiere-renovar-alquiler/es';
import { en as post2En } from './posts/propietario-no-quiere-renovar-alquiler/en';
import { de as post2De } from './posts/propietario-no-quiere-renovar-alquiler/de';
import { fr as post2Fr } from './posts/propietario-no-quiere-renovar-alquiler/fr';
import { zh as post2Zh } from './posts/propietario-no-quiere-renovar-alquiler/zh';

import { es as post1Es } from './posts/que-revisar-antes-de-comprar/es';
import { en as post1En } from './posts/que-revisar-antes-de-comprar/en';
import { de as post1De } from './posts/que-revisar-antes-de-comprar/de';
import { fr as post1Fr } from './posts/que-revisar-antes-de-comprar/fr';
import { zh as post1Zh } from './posts/que-revisar-antes-de-comprar/zh';

export type { BlogPost, BlogPostContent, BlogBlock, BlogSource } from './types';

/**
 * Lista de artículos del blog, del más reciente al más antiguo.
 * Para publicar un artículo nuevo: crear su carpeta en ./posts con un archivo
 * por idioma y añadirlo al principio de esta lista.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'propietario-no-quiere-renovar-alquiler',
    datePublished: '2026-11-27',
    dateModified: '2026-11-28',
    image: photoInquilinaBalcon,
    imageAlt: {
      es: 'Inquilina pensativa en el balcón con una notificación sobre la mesa',
      en: 'Tenant deep in thought on a balcony with a notice on the table',
      de: 'Nachdenkliche Mieterin auf dem Balkon mit einem Schreiben auf dem Tisch',
      fr: 'Locataire pensive sur son balcon, un courrier posé sur la table',
      zh: '一位租客坐在阳台上沉思，桌上放着一份通知',
    },
    content: { es: post2Es, en: post2En, de: post2De, fr: post2Fr, zh: post2Zh },
  },
  {
    id: 'que-revisar-antes-de-comprar',
    datePublished: '2026-11-23',
    dateModified: '2026-11-23',
    image: photoCasaInteriorCocina,
    imageAlt: {
      es: 'Interior de una casa reformada con cocina abierta en la Costa Dorada',
      en: 'Renovated house interior with an open-plan kitchen on the Costa Dorada',
      de: 'Renoviertes Hausinneres mit offener Küche an der Costa Dorada',
      fr: 'Intérieur de maison rénovée avec cuisine ouverte sur la Costa Dorada',
      zh: '黄金海岸一栋翻新住宅的开放式厨房内景',
    },
    content: { es: post1Es, en: post1En, de: post1De, fr: post1Fr, zh: post1Zh },
  },
];

/** Ruta del listado del blog en un idioma. */
export const getBlogIndexPath = (lang: Language): string => (lang === 'es' ? '/blog' : `/${lang}/blog`);

/** Ruta de un artículo en un idioma (cada idioma tiene su propio slug). */
export const getBlogPostPath = (post: BlogPost, lang: Language): string =>
  `${getBlogIndexPath(lang)}/${post.content[lang].slug}`;

/** Busca un artículo por su slug en cualquier idioma. */
export const findPostBySlug = (slug: string | undefined): BlogPost | undefined =>
  slug ? BLOG_POSTS.find((p) => Object.values(p.content).some((c) => c.slug === slug)) : undefined;

const LOCALES: Record<Language, string> = {
  es: 'es-ES',
  en: 'en-GB',
  de: 'de-DE',
  fr: 'fr-FR',
  zh: 'zh-CN',
};

export const formatBlogDate = (isoDate: string, lang: Language): string =>
  new Date(`${isoDate}T12:00:00Z`).toLocaleDateString(LOCALES[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

/** Textos fijos de las páginas del blog en cada idioma. */
export const BLOG_UI: Record<
  Language,
  {
    eyebrow: string;
    indexTitle: string;
    indexSubtitle: string;
    seoTitle: string;
    seoDescription: string;
    readMore: string;
    backToBlog: string;
    by: string;
    published: string;
  }
> = {
  es: {
    eyebrow: 'Blog',
    indexTitle: 'Comprar, vender y alquilar con criterio',
    indexSubtitle:
      'Guías prácticas de una perito judicial inmobiliaria sobre la Costa Dorada y el Garraf, siempre basadas en fuentes oficiales.',
    seoTitle: 'Blog Inmobiliario Costa Dorada & Garraf | Golden Coast Property Advisory',
    seoDescription:
      'Guías prácticas sobre compra, venta y alquiler de viviendas en la Costa Dorada y el Garraf, escritas por una perito judicial inmobiliaria y basadas en fuentes oficiales.',
    readMore: 'Leer el artículo',
    backToBlog: 'Volver al blog',
    by: 'Por',
    published: 'Publicado el',
  },
  en: {
    eyebrow: 'Blog',
    indexTitle: 'Buying, selling and renting with insight',
    indexSubtitle:
      'Practical guides on the Costa Dorada and Garraf from a holder of the Spanish “Perito Judicial Inmobiliario” qualification (real estate expert), always based on official sources.',
    seoTitle: 'Spain Property Blog: Costa Dorada & Garraf | Golden Coast Property Advisory',
    seoDescription:
      'Practical guides to buying, selling and renting property on the Costa Dorada and Garraf, written by a holder of the Spanish “Perito Judicial Inmobiliario” qualification (real estate expert) and based on official sources.',
    readMore: 'Read the article',
    backToBlog: 'Back to the blog',
    by: 'By',
    published: 'Published on',
  },
  de: {
    eyebrow: 'Blog',
    indexTitle: 'Kaufen, verkaufen und vermieten mit Sachverstand',
    indexSubtitle:
      'Praxisnahe Ratgeber von einer Maklerin mit der spanischen Qualifikation „Perito Judicial Inmobiliario“ zur Costa Dorada und zum Garraf – stets auf Basis offizieller Quellen.',
    seoTitle: 'Immobilien-Blog Costa Dorada & Garraf | Golden Coast Property Advisory',
    seoDescription:
      'Praxisnahe Ratgeber zu Kauf, Verkauf und Vermietung von Immobilien an der Costa Dorada und im Garraf – von einer Maklerin mit der spanischen Qualifikation „Perito Judicial Inmobiliario“, auf Basis offizieller Quellen.',
    readMore: 'Artikel lesen',
    backToBlog: 'Zurück zum Blog',
    by: 'Von',
    published: 'Veröffentlicht am',
  },
  fr: {
    eyebrow: 'Blog',
    indexTitle: 'Acheter, vendre et louer en connaissance de cause',
    indexSubtitle:
      'Des guides pratiques sur la Costa Dorada et le Garraf, rédigés par une titulaire de la qualification espagnole « Perito Judicial Inmobiliario » et fondés sur des sources officielles.',
    seoTitle: 'Blog Immobilier Costa Dorada & Garraf | Golden Coast Property Advisory',
    seoDescription:
      'Guides pratiques sur l’achat, la vente et la location immobilière sur la Costa Dorada et le Garraf, rédigés par une titulaire de la qualification espagnole « Perito Judicial Inmobiliario » et fondés sur des sources officielles.',
    readMore: 'Lire l’article',
    backToBlog: 'Retour au blog',
    by: 'Par',
    published: 'Publié le',
  },
  zh: {
    eyebrow: '博客',
    indexTitle: '买房、卖房与出租，心中有数',
    indexSubtitle: '由持有西班牙房产鉴定资格的经纪人撰写的黄金海岸与加拉夫实用指南，所有信息均以官方来源为依据。',
    seoTitle: '西班牙房产博客：黄金海岸与加拉夫 | Golden Coast Property Advisory',
    seoDescription:
      '西班牙黄金海岸与加拉夫地区买房、卖房和出租的实用指南，由持有西班牙房产鉴定资格的经纪人撰写，所有信息均以官方来源为依据。',
    readMore: '阅读全文',
    backToBlog: '返回博客',
    by: '作者',
    published: '发布于',
  },
};
