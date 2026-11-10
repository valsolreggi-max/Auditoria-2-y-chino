import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const DOMAIN = 'https://www.goldencoastpropertyadvisory.com';
const OG_IMAGE = `${DOMAIN}/og-image.jpg`;

const LANGUAGES = ['es', 'en', 'de', 'fr', 'zh'];

const LANG_CONFIG = {
  es: {
    htmlLang: 'es',
    ogLocale: 'es_ES',
    hreflang: 'es',
    titles: {
      '/': 'Golden Coast Property Advisory | Asesoría Inmobiliaria Costa Dorada & Garraf',
      '/servicios': 'Servicios de Asesoría Inmobiliaria | Propietarios, Compradores y Relocation',
      '/zonas': 'Zonas Costa Dorada & Garraf | Sitges, Vilanova, Cubelles, Cunit y Calafell',
      '/sobre-mi': 'Sobre Mí — Valeria Reishi | Agente de la Propiedad Inmobiliaria (API)',
      '/testimonios': 'Testimonios & Casos de Éxito | Golden Coast Property Advisory',
      '/faq': 'Preguntas Frecuentes Inmobiliarias | Golden Coast Property Advisory',
      '/contacto': 'Contacto Directo — Valeria Reishi | Golden Coast Property Advisory',
      '/404': '404 — Página no encontrada | Golden Coast Property Advisory',
    },
    descriptions: {
      '/': 'Asesoría inmobiliaria boutique en Costa Dorada y Garraf por Valeria Reishi, API colegiada y Perito Judicial Inmobiliario. Acompañamiento honesto e integral en compraventa, inversión y relocation.',
      '/servicios': 'Servicios inmobiliarios de alto nivel en Costa Dorada y Garraf: acompañamiento a propietarios, compradores e inversores con asesoría legal y técnica por API colegiada.',
      '/zonas': 'Guía inmobiliaria de la Costa Dorada y el Garraf: Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell y Calafell. Estilo de vida, conectividad y asesoramiento local.',
      '/sobre-mi': 'Conozca la trayectoria de Valeria Reishi: perito judicial inmobiliario, API colegiada y especialista en LAU con más de 7 años acompañando a familias e inversores en la Costa Dorada y Garraf.',
      '/testimonios': 'Experiencias reales de compradores, vendedores e inversores nacionales e internacionales acompañados por Valeria Reishi en la Costa Dorada y Garraf.',
      '/faq': 'Respuestas claras a dudas frecuentes sobre honorarios, proceso de compraventa, documentación, LAU y acompañamiento en Costa Dorada y Garraf.',
      '/contacto': 'Póngase en contacto con Valeria Reishi para una consulta confidencial sobre compra, venta o alquiler en Costa Dorada y Garraf. Teléfono, WhatsApp y formulario.',
      '/404': 'La página que busca no existe o ha sido trasladada. Regrese al inicio o explore nuestra asesoría inmobiliaria en Costa Dorada y Garraf.',
    },
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    hreflang: 'en',
    titles: {
      '/': 'Golden Coast Property Advisory | Costa Dorada & Garraf Real Estate Advisory',
      '/servicios': 'Boutique Real Estate Services | Property Sales, Buyers & Relocation in Spain',
      '/zonas': 'Costa Dorada & Garraf Areas | Sitges, Vilanova, Cubelles, Cunit & Calafell',
      '/sobre-mi': 'About Valeria Reishi | Certified Real Estate Agent (API) & Judicial Appraiser',
      '/testimonios': 'Client Stories & Success Cases | Golden Coast Property Advisory',
      '/faq': 'Real Estate FAQs in Spain | Purchase Process, LAU Rental Laws & Buyer Advisory',
      '/contacto': 'Contact Valeria Reishi | Confidential Real Estate Consultation in Spain',
      '/404': '404 — Page Not Found | Golden Coast Property Advisory',
    },
    descriptions: {
      '/': 'Boutique real estate advisory in Costa Dorada and Garraf by Valeria Reishi, certified API agent and Judicial Appraiser. Tailored guidance for property purchase, sales and relocation.',
      '/servicios': 'High-end real estate advisory services: exclusive buyer representation, property sales and seamless relocation with legal and judicial oversight in Catalonia.',
      '/zonas': 'Coastal guide to Garraf & Costa Dorada: Sitges, Vilanova i la Geltrú, Cubelles, Cunit and Calafell. Mediterranean lifestyle and prime residential opportunities.',
      '/sobre-mi': 'Meet Valeria Reishi: certified Spanish real estate agent (API), judicial property appraiser and rental law specialist serving international clients for over 7 years.',
      '/testimonios': 'Real testimonials from international buyers, sellers, and expatriate families who trusted Valeria Reishi for their real estate journey in Spain.',
      '/faq': 'Clear answers to common questions about buying property in Spain, advisory fees, Golden Coast services, and Catalonia rental regulations.',
      '/contacto': 'Get in touch with Valeria Reishi for a direct, confidential real estate consultation in Costa Dorada and Garraf. Phone, WhatsApp, and form.',
      '/404': 'The page you are looking for does not exist. Return home to explore our real estate advisory services.',
    },
  },
  de: {
    htmlLang: 'de',
    ogLocale: 'de_DE',
    hreflang: 'de',
    titles: {
      '/': 'Golden Coast Property Advisory | Immobilienberatung Costa Dorada & Garraf',
      '/servicios': 'Exklusive Immobiliendienstleistungen | Verkauf, Suchmandat & Relocation',
      '/zonas': 'Regionen Costa Dorada & Garraf | Sitges, Vilanova, Cubelles, Cunit & Calafell',
      '/sobre-mi': 'Über Valeria Reishi | Staatlich geprüfte Maklerin (API) & Gerichtsgutachterin',
      '/testimonios': 'Kundenerfahrungen & Erfolgsgeschichten | Golden Coast Property Advisory',
      '/faq': 'Immobilien-FAQ Spanien | Kaufprozess, Mietrecht LAU & Suchmandat',
      '/contacto': 'Direkter Kontakt zu Valeria Reishi | Diskrete Immobilienberatung Spanien',
      '/404': '404 — Seite nicht gefunden | Golden Coast Property Advisory',
    },
    descriptions: {
      '/': 'Boutique-Immobilienberatung an der Costa Dorada und im Garraf durch Valeria Reishi, staatlich geprüfte Maklerin (API) und gerichtliche Immobiliensachverständige.',
      '/servicios': 'Maßgeschneiderte Immobiliendienstleistungen: exklusive Käufervertretung, werthaltiger Verkauf und Relocation mit fundierter rechtlicher Absicherung in Spanien.',
      '/zonas': 'Entdecken Sie die Küstenorte zwischen Garraf und Costa Dorada: Sitges, Vilanova, Cubelles, Cunit und Calafell. Mediterranes Lebensgefühl und Wohnwerte.',
      '/sobre-mi': 'Lernen Sie Valeria Reishi kennen: juristisch fundierte Immobilienexpertin, API-Maklerin und Gerichtssachverständige mit über 7 Jahren Erfahrung.',
      '/testimonios': 'Authentische Erfahrungsberichte internationaler Käufer, Eigentümer und Investoren, die Valeria Reishi an der Costa Dorada vertraut haben.',
      '/faq': 'Präzise Antworten auf Fragen zu Kaufabwicklung in Spanien, Honoraren, spanischem Mietrecht (LAU) und Rundumbetreuung.',
      '/contacto': 'Kontaktieren Sie Valeria Reishi für ein vertrauliches Beratungsgespräch rund um Kauf, Verkauf oder Vermietung an der Costa Dorada.',
      '/404': 'Die gewünschte Seite existiert nicht. Kehren Sie zur Startseite zurück oder erkunden Sie unsere Immobilienberatung.',
    },
  },
  fr: {
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    hreflang: 'fr',
    titles: {
      '/': 'Golden Coast Property Advisory | Conseil Immobilier Costa Dorada & Garraf',
      '/servicios': 'Services Immobiliers Sur Mesure | Vente, Chasseur Immobilier & Relocation',
      '/zonas': 'Régions Costa Dorada & Garraf | Sitges, Vilanova, Cubelles, Cunit & Calafell',
      '/sobre-mi': 'À Propos de Valeria Reishi | Agente Immobilière Certifiée (API) & Experte Judiciaire',
      '/testimonios': 'Témoignages & Retours d’Expérience | Golden Coast Property Advisory',
      '/faq': 'Foire Aux Questions Immobilières | Achat en Espagne, Droit Locatif LAU & Chasseur',
      '/contacto': 'Contact Direct — Valeria Reishi | Consultation Immobilière en Espagne',
      '/404': '404 — Page Non Trouvée | Golden Coast Property Advisory',
    },
    descriptions: {
      '/': 'Conseil immobilier boutique sur la Costa Dorada et le Garraf par Valeria Reishi, agente agréée API et experte judiciaire immobilière.',
      '/servicios': 'Services immobiliers haut de gamme : représentation exclusive d’acquéreurs, vente valorisée et accompagnement à la réinstallation en Espagne.',
      '/zonas': 'Guide de la côte entre le Garraf et la Costa Dorada : Sitges, Vilanova i la Geltrú, Cubelles, Cunit et Calafell. Douceur de vivre méditerranéenne.',
      '/sobre-mi': 'Découvrez le parcours de Valeria Reishi : juriste en droit locatif, agente API et experte judiciaire immobilière depuis plus de 7 ans.',
      '/testimonios': 'Témoignages réels de propriétaires et d’acheteurs internationaux accompagnés en toute sérénité par Valeria Reishi en Catalogne.',
      '/faq': 'Réponses claires aux questions sur l’achat immobilier en Espagne, les honoraires, la législation locative et les démarches d’installation.',
      '/contacto': 'Prenez contact avec Valeria Reishi pour un entretien confidentiel sur l’achat, la vente ou la location sur la Costa Dorada et le Garraf.',
      '/404': 'La page recherchée n’existe pas. Revenez à l’accueil pour découvrir nos conseils immobiliers.',
    },
  },
  zh: {
    htmlLang: 'zh-Hans',
    ogLocale: 'zh_CN',
    hreflang: 'zh-Hans',
    titles: {
      '/': 'Golden Coast 黄金海岸房产咨询 | 西班牙加拉夫与黄金海岸精品置业顾问',
      '/servicios': '专业置业顾问服务 | 西班牙住宅出售、专属买手与移居全案规划',
      '/zonas': '加拉夫与黄金海岸区域指南 | 锡切斯、维拉诺瓦、库尼特与卡拉费尔',
      '/sobre-mi': '关于创始人 Valeria Reishi | 官方注册经纪人 (API) 与司法指定房产估价师',
      '/testimonios': '客户真实口碑与案例 | Golden Coast Property Advisory',
      '/faq': '西班牙购房与租赁常见问题 | 法律合规、税费流程与买手指南',
      '/contacto': '联系咨询 · 一对一私密沟通 | Golden Coast Property Advisory',
      '/404': '404 页面未找到 | Golden Coast Property Advisory',
    },
    descriptions: {
      '/': '加拉夫海滨与黄金海岸精品房地产咨询，由西班牙官方注册经纪人（API）兼司法指定不动产估价师 Valeria Reishi 主理，为您提供客观、独立且高度私密的海外置业与资产伴护。',
      '/servicios': '全权代表买方利益的专属房产买手（Personal Shopper）、高价值住宅出售、中短期与度假租赁托管及西班牙移居落地（Relocation）全案规划。',
      '/zonas': '深度解析加拉夫与黄金海岸精选宜居小镇：锡切斯（Sitges）、维拉诺瓦、库贝列斯、库尼特与卡拉费尔，涵盖学区、交通通勤与地中海生活方式。',
      '/sobre-mi': '了解 Valeria Reishi 的专业执业历程：深耕西班牙房地产法务、城市租赁法（LAU）合规与司法鉴定评估逾7年，始终以严谨态度守护客户资产。',
      '/testimonios': '聆听来自欧洲多国及海外高净值客户的真实心声：从跨国买房到长达5年的资产托管，见证经得起岁月检验的持久信任。',
      '/faq': '清晰解答外国人在西班牙买房的税费预算、产权尽职调查、加泰罗尼亚租金限额令法案及孩子国际学校入学等核心问题。',
      '/contacto': '直接预约与 Valeria Reishi 进行一对一专属保密沟通。支持微信、WhatsApp、电话及高清视讯会议。',
      '/404': '您访问的页面不存在或已被移除。欢迎返回首页探索我们的西班牙置业服务。',
    },
  },
};

const BASE_ROUTES = [
  '/',
  '/servicios',
  '/zonas',
  '/sobre-mi',
  '/testimonios',
  '/faq',
  '/contacto',
];

// Helper to construct hreflang alternate tags
function generateHreflangTags(baseRoute) {
  const cleanRoute = baseRoute === '/' ? '' : baseRoute;
  const tags = [];

  // Default / canonical Spanish root
  tags.push(`<link rel="alternate" hreflang="x-default" href="${DOMAIN}${cleanRoute || '/'}" />`);
  tags.push(`<link rel="alternate" hreflang="es" href="${DOMAIN}/es${cleanRoute}" />`);
  tags.push(`<link rel="alternate" hreflang="en" href="${DOMAIN}/en${cleanRoute}" />`);
  tags.push(`<link rel="alternate" hreflang="de" href="${DOMAIN}/de${cleanRoute}" />`);
  tags.push(`<link rel="alternate" hreflang="fr" href="${DOMAIN}/fr${cleanRoute}" />`);
  tags.push(`<link rel="alternate" hreflang="zh-Hans" href="${DOMAIN}/zh${cleanRoute}" />`);

  return tags.join('\n    ');
}

async function runPrerender() {
  console.log('[prerender] Starting static HTML generation across all languages...');

  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Run client build first.');
  }

  const template = fs.readFileSync(templatePath, 'utf8');
  const ssrModulePath = path.resolve(rootDir, 'dist-ssr', 'prerender-entry.js');

  if (!fs.existsSync(ssrModulePath)) {
    throw new Error('dist-ssr/prerender-entry.js not found. Run vite build --ssr first.');
  }

  const { render } = await import(ssrModulePath);

  const allRenderTasks = [];

  // 1. Root default routes (Spanish canonical)
  for (const baseRoute of BASE_ROUTES) {
    allRenderTasks.push({
      url: baseRoute,
      baseRoute,
      lang: 'es',
      isRoot: true,
      outputPath: baseRoute === '/' ? 'index.html' : `${baseRoute.replace(/^\//, '')}/index.html`,
      outputHtmlPath: baseRoute === '/' ? null : `${baseRoute.replace(/^\//, '')}.html`,
    });
  }

  // 2. Language-prefixed routes for all 5 languages
  for (const lang of LANGUAGES) {
    for (const baseRoute of BASE_ROUTES) {
      const localizedUrl = baseRoute === '/' ? `/${lang}` : `/${lang}${baseRoute}`;
      const routeFolder = baseRoute === '/' ? lang : `${lang}${baseRoute}`;

      allRenderTasks.push({
        url: localizedUrl,
        baseRoute,
        lang,
        isRoot: false,
        outputPath: `${routeFolder}/index.html`,
        outputHtmlPath: `${routeFolder}.html`,
      });
    }
  }

  // 3. 404 Error page
  allRenderTasks.push({
    url: '/404',
    baseRoute: '/404',
    lang: 'es',
    is404: true,
    outputPath: '404.html',
    outputHtmlPath: '404/index.html',
  });

  console.log(`[prerender] Total pages to prerender: ${allRenderTasks.length}`);

  for (const task of allRenderTasks) {
    console.log(`[prerender] Rendering [${task.lang}] route: ${task.url}`);
    const appHtml = render(task.url);

    let html = template;
    const config = LANG_CONFIG[task.lang] || LANG_CONFIG.es;

    const title = config.titles[task.baseRoute] || config.titles['/'];
    const description = config.descriptions[task.baseRoute] || config.descriptions['/'];
    const canonicalUrl = `${DOMAIN}${task.url === '/' ? '/' : task.url}`;

    // 1. Inject rendered HTML inside root
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // 2. Replace <html lang="...">
    html = html.replace(/<html\s+lang=".*?"/i, `<html lang="${config.htmlLang}"`);

    // 3. Replace Title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

    // 4. Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${description}" />`
    );

    // 5. Replace Canonical URL
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // 6. Replace OpenGraph Title, Description, Locale, and URL
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
    html = html.replace(
      /<meta\s+property="og:locale"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:locale" content="${config.ogLocale}" />`
    );

    // 7. Replace Twitter Title and Description
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${description}" />`
    );

    // 8. Inject hreflang alternate tags (except 404)
    if (!task.is404) {
      const hreflangTags = generateHreflangTags(task.baseRoute);
      // Inject right before </head>
      html = html.replace('</head>', `  ${hreflangTags}\n  </head>`);
    } else {
      html = html.replace(
        /<meta\s+name="robots"\s+content=".*?"\s*\/?>/i,
        '<meta name="robots" content="noindex, nofollow" />'
      );
    }

    // 9. Write outputs
    const fullOutputPath = path.resolve(distDir, task.outputPath);
    fs.mkdirSync(path.dirname(fullOutputPath), { recursive: true });
    fs.writeFileSync(fullOutputPath, html, 'utf8');

    if (task.outputHtmlPath) {
      const secondaryPath = path.resolve(distDir, task.outputHtmlPath);
      fs.mkdirSync(path.dirname(secondaryPath), { recursive: true });
      fs.writeFileSync(secondaryPath, html, 'utf8');
    }
  }

  // Remove temporary dist-ssr directory
  fs.rmSync(path.resolve(rootDir, 'dist-ssr'), { recursive: true, force: true });

  console.log('[prerender] Static prerender successfully generated all multilingual routes!');
}

runPrerender().catch((err) => {
  console.error('[prerender] Error during prerendering:', err);
  process.exit(1);
});
