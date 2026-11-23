import type { Language } from '../../i18n/types';

/**
 * Bloques de contenido de un artículo.
 * En los textos se puede usar **negrita** y [texto del enlace](https://url).
 */
export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; label?: string; text: string };

export interface BlogSource {
  label: string;
  url: string;
}

export interface BlogPostContent {
  /** Parte final de la URL en este idioma (sin acentos ni espacios). */
  slug: string;
  title: string;
  subtitle: string;
  /** Título que aparece en Google (unos 60 caracteres). */
  seoTitle: string;
  /** Texto que aparece en Google bajo el título (unos 155 caracteres). */
  metaDescription: string;
  /** Resumen corto para la tarjeta del listado del blog. */
  excerpt: string;
  authorRole: string;
  readingTime: string;
  updatedLabel: string;
  blocks: BlogBlock[];
  summaryTitle: string;
  summary: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  sourcesTitle: string;
  sources: BlogSource[];
  disclaimer: string;
}

export interface BlogPost {
  id: string;
  /** Fecha de publicación, formato AAAA-MM-DD. */
  datePublished: string;
  /** Fecha de la última actualización, formato AAAA-MM-DD. */
  dateModified: string;
  image: string;
  imageAlt: Record<Language, string>;
  content: Record<Language, BlogPostContent>;
}
