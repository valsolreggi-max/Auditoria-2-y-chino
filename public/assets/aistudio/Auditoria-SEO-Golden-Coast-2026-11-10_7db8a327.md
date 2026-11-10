# Auditoría de seguimiento: Golden Coast Property Advisory
**Fecha:** 10 de noviembre de 2026 · **Web:** www.goldencoastpropertyadvisory.com
**Modo:** rápido, solo lectura. No se cambió nada en la web.

## Resumen
Valeria ya corrigió **los dos problemas más importantes de la semana pasada**: las etiquetas de verificación falsas desaparecieron y la imagen para compartir bajó de 3,5 MB a 135 KB. Además, la web ahora está en **5 idiomas** (español, inglés, alemán, francés y chino) y quedó bien montada. Los pendientes son pocos.

## Lo que mejoró desde el 4 de noviembre
| Antes | Ahora |
|---|---|
| ❌ Dos etiquetas de verificación de Google, una inventada y otra vacía | ✅ Ya no están (pero falta poner la verdadera, ver punto 1) |
| ⚠️ Imagen para compartir de 3,5 MB | ✅ Pesa 135 KB y mide 1200 × 630 |
| Solo español, 7 páginas | ✅ 42 páginas: 7 secciones × 5 idiomas, todas abren con código 200 |

## Resultados de hoy
| Qué revisé | Estado | Qué hacer |
|---|---|---|
| Páginas en los 5 idiomas | ✅ | Cada idioma tiene su título, descripción, H1 y su propio idioma declarado (es, en, de, fr, zh-Hans) |
| Etiquetas de idioma (hreflang) | ✅ | Están en las páginas y en el sitemap, con `x-default`. Así Google muestra a cada persona su idioma |
| Canónicas | ✅ | Cada página apunta a su propia dirección con www |
| Sitemap | ✅ | 42 direcciones, actualizado el 9/11/2026 |
| robots.txt | ✅ | Deja entrar a Google, Bing, ChatGPT (OAI-SearchBot), Claude y Perplexity, e indica el sitemap |
| Página 404 | ✅ | Una dirección inventada da error 404 real |
| Imagen para compartir | ✅ | 135 KB |
| **Verificación de Search Console** | ❌ | Ver punto 1 |
| **Dirección sin www** | ❌ | Ver punto 2 |
| **`/` y `/es` son lo mismo** | ⚠️ | Ver punto 3 |
| Search Console, Bing, Analytics, Rich Results Test | 🔒 | Ver "Lo que no pude revisar" |

## Qué hacer, por orden de importancia

### 1. ❌ Falta la verificación en Search Console
Se quitaron las etiquetas falsas, pero **no se puso la verdadera**. En el código de ninguna página hay una línea `google-site-verification`. Sin verificar no se ven datos de Google y no se puede enviar el sitemap.

**Cómo hacerlo:**
1. Entrar a Search Console con la cuenta de Valeria y añadir `https://www.goldencoastpropertyadvisory.com/` (Prefijo de URL).
2. Elegir "Etiqueta HTML" y copiar el código real que da Google.
3. Pegarlo en `index.html` dentro de `<head>`, publicar y pulsar "Verificar".

**Ejemplo:** la línea debe verse así, con el código que da Google en lugar de los puntos:
`<meta name="google-site-verification" content="..." />`

### 2. ❌ La dirección sin www no abre
`goldencoastpropertyadvisory.com` sigue sin resolver (comprobado hoy). Si alguien escribe la dirección sin www, no llega. Se arregla en el sitio donde se compró el dominio (DNS) y en Firebase Hosting con "Agregar dominio personalizado".

### 3. ⚠️ La home está duplicada: `/` y `/es`
Las dos direcciones muestran exactamente el mismo contenido en español y cada una se declara como "la principal". Google puede dudar de cuál indexar. Lo mismo pasa con las demás secciones (`/servicios` y `/es/servicios`, etc.).

**Qué hacer:** elegir una sola. Lo más simple es que `/es` y `/servicios` tengan la misma canónica, o que una redirija a la otra. Es un cambio pequeño.

### 4. ⚠️ Mejoras menores
- **Traducciones:** revisar que las 4 versiones nuevas las lea alguien que sepa el idioma. En el chino, por ejemplo, un error de términos legales puede restar confianza. Solo se verificó que los títulos y los H1 estén traducidos.
- **Datos para Google (schema):** agregar los enlaces a las redes reales (`sameAs`) y, si Valeria quiere, la dirección completa. Solo con datos reales.
- **Logo:** en los datos de Google sigue figurando la foto de compartir como logo. Conviene un logo cuadrado y pequeño.
- **Robots de entrenamiento de IA** (GPTBot, ClaudeBot): hoy no se bloquean. Es decisión de Valeria si quiere que usen sus textos para entrenar modelos.

## Lo que no pude revisar
- **Search Console** (indexación, búsquedas, informe de IA): pide iniciar sesión, y la propiedad aún no está verificada. Se revisará cuando se resuelva el punto 1.
- **Bing Webmaster Tools, Google Analytics, Rich Results Test y la vista previa real en WhatsApp:** no revisados.
- **Velocidad:** hoy no se volvió a medir. La del 4/11 era muy buena (99/96/100/100 en móvil) y habría que confirmar que las 5 versiones de idioma no la empeoraron.

## Próximos pasos
1. Poner la etiqueta real de verificación (punto 1).
2. Enviar el sitemap de 42 páginas en Search Console.
3. Resolver la dirección sin www (punto 2).
4. Decidir qué hacer con `/` y `/es` (punto 3).
5. Una semana después, mirar qué idiomas indexó Google y desde qué países llegan visitas.
