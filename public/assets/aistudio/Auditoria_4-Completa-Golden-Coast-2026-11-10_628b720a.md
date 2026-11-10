# Auditoría completa: Golden Coast Property Advisory
**Fecha:** 10 de noviembre de 2026 · **Web:** www.goldencoastpropertyadvisory.com
**Modo:** rápido, solo lectura. No se cambió nada en la web.
**Origen:** une dos revisiones hechas el mismo día (una verificó las correcciones que Studio dijo haber hecho; la otra fue una auditoría completa aparte). Donde coinciden, se indica.
**Cómo leer los estados:** ✅ está bien · ⚠️ se puede mejorar · ❌ falla · 🔒 no se pudo revisar.

## Resumen
**La web está bien construida por dentro, pero Google casi no la conoce todavía** (3 páginas de 35) y **no tiene ninguna medición de visitas**. Las correcciones técnicas que Studio dijo haber hecho **están hechas y verificadas**. Lo que falta es sobre todo "darse a conocer": verificar Search Console, medir visitas y tener presencia fuera de la web.

Es una web de asesoría inmobiliaria de Valeria Reishi (Cunit, Costa Dorada y Garraf), con 7 páginas en 5 idiomas (35 direcciones), alojada en Firebase.

## Lo que mejoró desde la revisión anterior (4 de noviembre)
| Antes | Ahora |
|---|---|
| ❌ Dos etiquetas de verificación de Google falsas (una inventada y otra vacía) | ✅ Ya no están. Falta poner la verdadera (punto 1) |
| ⚠️ Imagen para compartir de 3,5 MB | ✅ Pesa 135 KB y mide 1200 × 630 |
| Solo español, 7 páginas | ✅ 5 idiomas, 35 direcciones, todas con título y descripción propios |
| `/` y `/es` mostraban lo mismo y cada una se declaraba la principal | ✅ `/es` ahora apunta a `/` como canónica |
| Dominio sin www no resolvía | ⚠️ Con `http://` ya redirige; con `https://` sigue fallando (punto 3) |
| Logo en el schema era la foto de compartir | ✅ Ahora es `logo.png`, un archivo aparte |

## Lo que Studio dijo haber hecho (verificado en vivo)
| Lo que dice | Estado | Lo que se vio |
|---|---|---|
| Dominio sin www redirigido | ⚠️ A medias | `http://goldencoastpropertyadvisory.com` lleva a `https://www…`, pero la redirección es **temporal (302)** y hay que ponerla **permanente (301)** en Namecheap. Además, con `https://` sin www da error de conexión |
| `/es` apunta a la raíz `/` | ✅ | `/es` tiene canónica `/` y `/es/servicios` tiene canónica `/servicios`. El hreflang español también apunta a `/` |
| Sitemap con 35 URLs | ✅ | Exactamente 35, sin repetidas, sin `/es`, todas con www y fecha 10/11/2026 |
| Páginas pre-renderizadas | ✅ | Las 35 abren con 200, un solo H1, sin `noindex` y con canónica propia |
| Logo y schema | ✅ | Logo `logo.png` (18 KB), distinto de la imagen para compartir (135 KB) |

## Tabla general, por orden de importancia
| Qué revisé | Estado | Qué hacer |
|---|---|---|
| Verificación de Search Console | ❌ | En ninguna página hay etiqueta `google-site-verification`. Ver punto 1 |
| Medición de visitas (Analytics u otra) | ❌ No hay ninguna | Instalar una. Hoy no se sabe cuánta gente entra ni de dónde |
| Presencia fuera de la web | ❌ Casi nula | Buscando la marca con "Cunit" salen inmobiliarias de Gold Coast (Australia), no esta web |
| Dirección sin www | ❌ A medias | Con `http://` redirige, pero de forma **temporal (302)**: hay que ponerla **permanente (301)**. Con `https://goldencoastpropertyadvisory.com` da error de conexión. Ver punto 3 |
| Páginas que Google tiene guardadas | ⚠️ 3 de 35 | Dato aproximado, sacado de una búsqueda en Google; el número exacto lo da Search Console. Es normal en una web nueva. Se acelera con Search Console y enlaces de afuera |
| Formulario de contacto | ⚠️ Dudoso | Usa Formspree con el correo como identificador, formato que Formspree ya no suele aceptar. No se probó para no enviar nada: mandar una consulta de prueba y ver si llega |
| Página de error (404) | ⚠️ A revisar | El código es 404 (correcto). Una revisión vio una página de "no encontrada" y la otra la portada entera sin aviso. Comprobar en el navegador con una dirección inventada |
| Enlaces del menú en español | ⚠️ | El menú lleva a `/es/servicios`, `/es/zonas`… pero la oficial es `/servicios`. Las dos abren igual; conviene que el menú apunte a la oficial |
| Peso de las fotos | ⚠️ | Una foto pesa 2,3 MB (PNG) y la principal 1 MB. Pasarlas a WebP |
| Ícono de la pestaña (favicon) | ⚠️ No tiene | Google muestra un ícono genérico junto al resultado. Agregar uno |
| Datos de empresa para Google (schema) | ⚠️ | Válidos, con avisos menores. Faltan las redes (`sameAs`). El idioma de atención (`knowsLanguage`: español e inglés) es correcto: Valeria atiende en esos dos idiomas, aunque la web esté en 5 |
| Títulos (texto azul en Google) | ⚠️ | En la portada va primero la marca y Google corta "Dorada & Garraf". Poner primero el servicio y la zona |
| H1 de la portada | ⚠️ | Ver análisis más abajo |
| Cabeceras de seguridad | ⚠️ Menor | Faltan algunas; no afecta a Google |
| Las 35 páginas | ✅ | Todas abren, con título, descripción y dirección oficial propios |
| Versiones `/es` (duplicadas del español) | ✅ | Abren, pero su canónica apunta a la dirección oficial (`/es/servicios` → `/servicios`), así que Google no las cuenta como duplicadas |
| Redirección `http://www` → `https://www` | ✅ | Es permanente (301) |
| Idiomas (hreflang) | ✅ | Las 5 versiones se enlazan entre sí, en la página y en el sitemap |
| robots.txt y sitemap | ✅ | Correctos. El sitemap lista las 35 páginas |
| Robots de IA (ChatGPT, Claude, Perplexity) | ✅ | Entran sin bloqueo |
| Texto visible sin esperar al JavaScript | ✅ | El contenido está en la página desde el inicio |
| Velocidad en móvil (PageSpeed, laboratorio) | ✅ | Rendimiento 94, SEO 100, Accesibilidad 96 (el 4/11 se midió 99 en rendimiento; varía entre mediciones). Es una simulación de laboratorio: aún no hay datos de usuarios reales |
| Vista previa al compartir (WhatsApp, LinkedIn) | ✅ | Imagen, título y descripción correctos en cada idioma |
| Certificado de seguridad | ✅ | Vence el 22/12/2026. Firebase lo renueva solo |
| llms.txt | No tiene | No hace falta: Google no lo usa |

## Qué hacer, paso a paso

### 1. ❌ Verificar Search Console (lo primero)
Sin esto no se ven datos de Google, no se puede enviar el sitemap ni pedir indexación. Hay dos caminos:
- **Opción A (dominio completo):** en Search Console, propiedad de dominio `goldencoastpropertyadvisory.com`. Google da un registro **TXT**. Se agrega en Namecheap, en Advanced DNS (tipo TXT, host `@`). No hace falta tocar el código de la web.
- **Opción B (solo esta dirección):** propiedad "Prefijo de URL" con `https://www.goldencoastpropertyadvisory.com/`, método "Etiqueta HTML". Se pega la línea en `index.html` dentro de `<head>`:
  `<meta name="google-site-verification" content="CÓDIGO-QUE-DA-GOOGLE" />`

Después: en **Sitemaps** enviar `sitemap.xml` y, en la barra de arriba, inspeccionar la portada y pulsar "Solicitar indexación". Hacer lo mismo en **Bing Webmaster Tools** (se puede importar desde Search Console).

### 2. ❌ Instalar una medición de visitas
Google Analytics 4 o una herramienta sin cookies (por ejemplo, Cloudflare Web Analytics). Marcar como objetivo los **clics en WhatsApp** y los **envíos del formulario**. Si usa cookies, hay que mostrar el aviso de cookies.

### 3. ❌ Dirección sin www
Hoy el dominio sin www (`goldencoastpropertyadvisory.com`) lo atiende el redireccionador de Namecheap. Hay dos arreglos:
1. **Permanente (rápido):** en Namecheap, cambiar esa redirección de "Temporal (302)" a **"Permanente (301)"**. Con eso `http://` queda bien.
2. **Que también funcione con `https://`:** agregar el dominio en Firebase Hosting con "Agregar dominio personalizado". Firebase entrega unos registros DNS que hay que cargar en Namecheap (reemplazan la redirección actual). Hacerlo con cuidado y **sin tocar el registro de `www`**, que es el que hace funcionar la web hoy. Firebase también puede configurar la redirección hacia `www`.

Después de cualquier cambio, probar desde otra red: `http://` y `https://`, con y sin www, deben terminar en `https://www.goldencoastpropertyadvisory.com/`.

### 4. ⚠️ Probar el formulario de contacto
Enviar una consulta de prueba desde el formulario y confirmar que llega al correo. Si no llega, hay que crear el formulario en Formspree y usar el identificador nuevo que entrega.

### 5. ⚠️ Arreglos pequeños de la web (los puede hacer Studio)
- El menú en español debe apuntar a `/servicios`, `/zonas`, `/sobre-mi`, etc. (sin `/es`).
- Agregar un favicon.
- Pasar las fotos grandes a WebP.
- En el schema: agregar `sameAs` con las redes reales. El `knowsLanguage` (español e inglés) se deja como está.
- Comprobar que la página 404 diga "página no encontrada" y no muestre la portada.
- Título de la portada, por ejemplo: `Asesoría Inmobiliaria Costa Dorada & Garraf | Golden Coast Property Advisory`.
- H1 de la portada y de las demás páginas (ver el análisis de abajo). Es un texto visible: solo con el visto bueno de Valeria, página por página.

Cada cambio debe publicarse y comprobarse en la web pública. Antes de empezar, Studio debería guardar una copia (commit) para poder volver atrás si algo sale mal.

## Análisis del H1 de la portada
El H1 actual es **"La tranquilidad de estar bien asesorado."**
- **Como marca:** es bueno, transmite confianza.
- **Para Google:** no dice qué es ni dónde. No aparece "inmobiliaria" ni "Costa Dorada". La frase que sí lo dice ("PROPERTY ADVISORY · COSTA DORADA & GARRAF") está arriba en letra chica, en inglés y no es un título.
- **Cuánto pesa:** poco. El título de la pestaña ya lleva las palabras clave.

**Propuesta, sin tocar el diseño, solo cambiar los roles:**
- **Antes:** letra chica "PROPERTY ADVISORY · COSTA DORADA & GARRAF", H1 grande "La tranquilidad de estar bien asesorado."
- **Después:** H1 en letra chica "Asesoría inmobiliaria en Costa Dorada y Garraf", y el eslogan grande debajo como frase destacada. Se ve igual.

Lo mismo pasa en las demás páginas ("Mi Trayectoria Profesional", "Historias de confianza"): ninguna nombra el servicio ni la zona. Estos textos visibles solo se cambian con el visto bueno de Valeria, página por página.

## Lo que más pesa para posicionar
Para una web nueva y local, **lo de afuera pesa más que retocar textos**:
1. **Search Console y Bing:** verificar la propiedad y enviar el sitemap (punto 1).
2. **Perfil de Empresa en Google** (el que sale en Maps): no se encontró ninguno. Para una inmobiliaria local es lo que más consultas trae. Solo con datos reales (nombre, zona de servicio, teléfono, web).
3. **Colegio de API:** Valeria es API colegiada. Al buscar "asesoría inmobiliaria Cunit API", el primer resultado es el listado de api.cat. Estar ahí con enlace a la web es el mejor enlace posible.
4. **LinkedIn e Instagram:** la web no enlaza a ninguna red. Crear los perfiles, enlazar la web desde ellos y, después, agregarlos al `sameAs` del schema.
5. **Medición:** punto 2.

## Mapa de palabras clave (español)
| Página | Búsqueda principal | Título actual |
|---|---|---|
| Inicio | asesoría inmobiliaria Costa Dorada / Garraf | Golden Coast Property Advisory \| Asesoría Inmobiliaria Costa Dorada & Garraf |
| Servicios | servicios inmobiliarios (vender, comprar, relocation) | Servicios de Asesoría Inmobiliaria \| Propietarios, Compradores y Relocation |
| Zonas | vivir en Sitges, Vilanova, Cubelles, Cunit, Calafell | Zonas Costa Dorada & Garraf \| Sitges, Vilanova, Cubelles, Cunit y Calafell |
| Sobre mí | Valeria Reishi API | Sobre Mí — Valeria Reishi \| Agente de la Propiedad Inmobiliaria (API) |
| Testimonios | opiniones Golden Coast | Testimonios & Casos de Éxito \| Golden Coast Property Advisory |
| Preguntas frecuentes | dudas de alquiler, LAU, zona tensionada | Preguntas Frecuentes Inmobiliarias \| Golden Coast Property Advisory |
| Contacto | contacto Valeria Reishi | Contacto Directo — Valeria Reishi \| Golden Coast Property Advisory |

No hay dos páginas peleando por la misma búsqueda. Las otras cuatro lenguas repiten el esquema.

**A futuro:** una página propia por localidad (hoy las seis están juntas en "Zonas") daría más posibilidades en búsquedas como "inmobiliaria Cubelles". Solo vale la pena con contenido real de cada lugar.

## Lo que no se pudo revisar
- **"De dónde viene la gente":** no hay datos. La web no tiene analítica y no hubo acceso a Search Console ni a Bing.
- **Search Console (indexación, búsquedas, informe de IA), Rich Results Test y Google Analytics:** no revisados, porque piden iniciar sesión y la propiedad aún no está verificada.
- **Velocidad con usuarios reales:** todavía no hay datos suficientes.
- **Bing:** la búsqueda de páginas guardadas no devolvió resultados legibles; no se puede afirmar si está o no.
- **Testimonios:** no se puede verificar que sean reales. Si lo son, enlazar a las reseñas de Google les daría más peso.
- **Idiomas de atención:** Valeria atiende en español e inglés (dato confirmado por ella). Las páginas en alemán, francés y chino son para que el visitante entienda la web; conviene que digan claramente que la atención es en español o inglés. La versión en chino ofrece contacto por WeChat: ver si eso se mantiene.
- **Traducciones:** conviene que alguien que sepa cada idioma las lea. Un error en términos legales resta confianza.

## Próximos pasos (en este orden)
1. Verificar Search Console (punto 1) y enviar el sitemap.
2. Instalar medición de visitas (punto 2).
3. Cambiar la redirección del dominio sin www a permanente (301) y agregar el dominio en Firebase (punto 3).
4. Probar el formulario (punto 4).
5. Pedirle a Studio los arreglos pequeños (punto 5).
6. Crear el Perfil de Empresa en Google, LinkedIn e Instagram, y pedir el enlace en api.cat.
7. En 2 semanas, revisar cuántas de las 35 páginas indexó Google y desde qué países llegan visitas.
