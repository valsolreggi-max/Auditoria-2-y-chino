import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './App';
import type { Language } from './i18n/types';
import { BLOG_POSTS, BLOG_UI, getBlogIndexPath, getBlogPostPath } from './data/blog';

export function render(url: string): string {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <AppRoutes />
    </MemoryRouter>
  );
}

const DOMAIN = 'https://www.goldencoastpropertyadvisory.com';
const LANGS: Language[] = ['es', 'en', 'de', 'fr', 'zh'];
const HREFLANG: Record<Language, string> = { es: 'es', en: 'en', de: 'de', fr: 'fr', zh: 'zh-Hans' };

export interface BlogPrerenderPage {
  /** URL que se renderiza. */
  url: string;
  lang: Language;
  title: string;
  description: string;
  /** Ruta canónica (sin dominio). */
  canonicalPath: string;
  /** hreflang → ruta (sin dominio), incluido x-default. */
  alternates: Record<string, string>;
  ogType: 'website' | 'article';
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

/** Páginas del blog que el script de prerender debe generar como HTML estático. */
export function getBlogPrerenderPages(): BlogPrerenderPage[] {
  const pages: BlogPrerenderPage[] = [];

  // Listado del blog
  const indexAlternates: Record<string, string> = { 'x-default': getBlogIndexPath('es') };
  for (const l of LANGS) indexAlternates[HREFLANG[l]] = getBlogIndexPath(l);

  for (const lang of LANGS) {
    const base = {
      lang,
      title: BLOG_UI[lang].seoTitle,
      description: BLOG_UI[lang].seoDescription,
      canonicalPath: getBlogIndexPath(lang),
      alternates: indexAlternates,
      ogType: 'website' as const,
    };
    pages.push({ ...base, url: getBlogIndexPath(lang) });
    if (lang === 'es') pages.push({ ...base, url: '/es/blog' });
  }

  // Artículos
  for (const post of BLOG_POSTS) {
    const alternates: Record<string, string> = { 'x-default': getBlogPostPath(post, 'es') };
    for (const l of LANGS) alternates[HREFLANG[l]] = getBlogPostPath(post, l);

    for (const lang of LANGS) {
      const c = post.content[lang];
      const canonicalPath = getBlogPostPath(post, lang);
      const page: BlogPrerenderPage = {
        url: canonicalPath,
        lang,
        title: c.seoTitle,
        description: c.metaDescription,
        canonicalPath,
        alternates,
        ogType: 'article',
        ogImage: `${DOMAIN}${post.image}`,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: c.title,
          description: c.metaDescription,
          inLanguage: HREFLANG[lang],
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          mainEntityOfPage: `${DOMAIN}${canonicalPath}`,
          image: `${DOMAIN}${post.image}`,
          author: { '@type': 'Person', name: 'Valeria Reggi', jobTitle: c.authorRole, url: `${DOMAIN}/sobre-mi` },
          publisher: { '@type': 'Organization', name: 'Golden Coast Property Advisory', url: DOMAIN },
        },
      };
      pages.push(page);
      if (lang === 'es') pages.push({ ...page, url: `/es/blog/${c.slug}` });
    }
  }

  return pages;
}
