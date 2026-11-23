import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage, getCanonicalPath } from '../i18n';
import { SEOHead } from '../components/SEOHead';
import { BLOG_POSTS, BLOG_UI, formatBlogDate, getBlogPostPath } from '../data/blog';

export const BlogPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const ui = BLOG_UI[currentLanguage];

  return (
    <div className="pt-24 sm:pt-28 bg-[#FBF9F3]">
      <SEOHead
        title={ui.seoTitle}
        description={ui.seoDescription}
        canonicalPath={getCanonicalPath('/blog', currentLanguage)}
      />

      <div className="bg-[#F5F2EA] border-b border-[#E8E2D5] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.24em] uppercase block mb-4">
            {ui.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-tight mb-4">
            {ui.indexTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#4A463F] font-sans max-w-2xl mx-auto leading-relaxed">
            {ui.indexSubtitle}
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 grid gap-10">
          {BLOG_POSTS.map((post) => {
            const c = post.content[currentLanguage];
            const href = getBlogPostPath(post, currentLanguage);
            return (
              <article
                key={post.id}
                className="grid md:grid-cols-2 bg-[#F5F2EA] border border-[#E8E2D5] overflow-hidden"
              >
                <Link to={href} className="block aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt[currentLanguage]}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                  />
                </Link>
                <div className="p-7 sm:p-10 flex flex-col justify-center gap-4">
                  <p className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em]">
                    <time dateTime={post.datePublished}>{formatBlogDate(post.datePublished, currentLanguage)}</time>
                    <span className="mx-2 text-[#C9C1AE]">·</span>
                    {c.readingTime}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#24211D] leading-snug">
                    <Link to={href} className="hover:text-[#6F8A5A] transition-colors">
                      {c.title}
                    </Link>
                  </h2>
                  <p className="text-[#4A463F] font-sans leading-relaxed">{c.excerpt}</p>
                  <Link
                    to={href}
                    className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#24211D] hover:text-[#8FA777] transition-colors"
                  >
                    {ui.readMore}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
