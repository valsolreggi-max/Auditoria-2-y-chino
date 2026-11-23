import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';
import { SEOHead } from '../components/SEOHead';
import { useConsultation } from '../components/ConsultationContext';
import { RichText } from '../components/blog/RichText';
import { NotFoundPage } from './NotFoundPage';
import {
  BLOG_UI,
  findPostBySlug,
  formatBlogDate,
  getBlogIndexPath,
  getBlogPostPath,
  type BlogBlock,
} from '../data/blog';

const DOMAIN = 'https://www.goldencoastpropertyadvisory.com';
const AUTHOR_NAME = 'Valeria Reggi';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const { currentLanguage } = useLanguage();
  const { openConsultation } = useConsultation();
  const post = findPostBySlug(slug);

  if (!post) return <NotFoundPage />;

  const c = post.content[currentLanguage];
  const ui = BLOG_UI[currentLanguage];
  const canonicalPath = getBlogPostPath(post, currentLanguage);

  // Si se llega con el slug de otro idioma (p. ej. al cambiar de idioma), se redirige al slug correcto.
  if (slug !== c.slug) return <Navigate to={canonicalPath} replace />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: c.title,
    description: c.metaDescription,
    inLanguage: currentLanguage === 'zh' ? 'zh-Hans' : currentLanguage,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: `${DOMAIN}${canonicalPath}`,
    image: `${DOMAIN}${post.image}`,
    author: { '@type': 'Person', name: AUTHOR_NAME, jobTitle: c.authorRole, url: `${DOMAIN}/sobre-mi` },
    publisher: { '@type': 'Organization', name: 'Golden Coast Property Advisory', url: DOMAIN },
  };

  return (
    <div className="pt-24 sm:pt-28 bg-[#FBF9F3]">
      <SEOHead
        title={c.seoTitle}
        description={c.metaDescription}
        canonicalPath={canonicalPath}
        type="article"
        ogImage={`${DOMAIN}${post.image}`}
        jsonLd={jsonLd}
      />

      <article>
        {/* Cabecera */}
        <header className="bg-[#F5F2EA] border-b border-[#E8E2D5] pt-12 sm:pt-16 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <Link
              to={getBlogIndexPath(currentLanguage)}
              className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#5C574E] hover:text-[#8FA777] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {ui.backToBlog}
            </Link>
            <p className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] mb-4">
              {ui.eyebrow}
              <span className="mx-2 text-[#C9C1AE]">·</span>
              {c.readingTime}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-[#24211D] leading-tight mb-5">
              {c.title}
            </h1>
            <p className="text-lg sm:text-xl text-[#4A463F] font-sans leading-relaxed mb-8">{c.subtitle}</p>
            <div className="pt-6 border-t border-[#E8E2D5] text-sm font-sans text-[#5C574E] space-y-1">
              <p>
                {ui.by} <span className="font-semibold text-[#24211D]">{AUTHOR_NAME}</span> · {c.authorRole}
              </p>
              <p>
                {ui.published}{' '}
                <time dateTime={post.datePublished}>{formatBlogDate(post.datePublished, currentLanguage)}</time>
                <span className="mx-2 text-[#C9C1AE]">·</span>
                {c.updatedLabel}
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 sm:px-10 -mt-px">
          <img
            src={post.image}
            alt={post.imageAlt[currentLanguage]}
            className="w-full aspect-[16/9] object-cover border border-[#E8E2D5] mt-10 sm:mt-14"
          />
        </div>

        {/* Cuerpo */}
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12 sm:py-16 text-[#4A463F] font-sans text-base sm:text-[1.0625rem] leading-relaxed space-y-6">
          {c.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* Resumen */}
          <aside className="mt-12 p-6 sm:p-8 bg-[#F5F2EA] border border-[#E8E2D5] border-l-2 border-l-[#D4AF37]">
            <p className="font-serif text-xl sm:text-2xl text-[#24211D] mb-4">{c.summaryTitle}</p>
            <ul className="space-y-3">
              {c.summary.map((item, i) => (
                <li key={i} className="pl-4 border-l-2 border-[#8FA777]">
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Llamada a la acción */}
        <section className="py-16 sm:py-20 bg-[#F5F2EA] border-y border-[#E8E2D5]">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#24211D]">{c.ctaTitle}</h2>
            <p className="text-base text-[#4A463F] leading-relaxed font-sans">{c.ctaText}</p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openConsultation('general')}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] transition-colors cursor-pointer"
              >
                <span>{c.ctaButton}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Fuentes y aviso */}
        <footer className="max-w-3xl mx-auto px-6 sm:px-10 py-12 sm:py-16 font-sans text-sm text-[#5C574E] space-y-6">
          <div>
            <p className="font-serif text-lg text-[#24211D] mb-3">{c.sourcesTitle}</p>
            <ul className="space-y-2 list-disc pl-5 marker:text-[#D4AF37]">
              {c.sources.map((s) => (
                <li key={s.url + s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 decoration-[#D4AF37]/60 hover:text-[#24211D]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="pt-6 border-t border-[#E8E2D5] italic">{c.disclaimer}</p>
        </footer>
      </article>
    </div>
  );
};

const Block: React.FC<{ block: BlogBlock }> = ({ block }) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="pt-6 text-2xl sm:text-3xl font-serif text-[#24211D] leading-snug border-t border-[#E8E2D5] !mt-12">
          {block.text}
        </h2>
      );
    case 'h3':
      return <h3 className="pt-2 text-xl sm:text-2xl font-serif text-[#24211D] leading-snug">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="pl-4 border-l-2 border-[#D4AF37]">
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div className="p-5 sm:p-6 bg-[#F5F2EA] border border-[#E8E2D5] border-l-2 border-l-[#8FA777]">
          {block.label && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6F8A5A] mb-2">{block.label}</p>
          )}
          <p className="text-[#24211D]">
            <RichText text={block.text} />
          </p>
        </div>
      );
    case 'p':
    default:
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
  }
};
