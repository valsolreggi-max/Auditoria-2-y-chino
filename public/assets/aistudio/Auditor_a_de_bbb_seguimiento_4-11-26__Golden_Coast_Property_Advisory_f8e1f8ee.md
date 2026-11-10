# **Auditoría de seguimiento: Golden Coast Property Advisory**

**Fecha:** 4 de noviembre de 2026 · **Web revisada:** www\.goldencoastpropertyadvisory.com  
 **Qué hice:** una revisión de solo lectura, sin cambiar nada, comparando con la auditoría anterior.

## **Resumen**

**Las mejoras funcionaron y fueron grandes.** Los problemas graves de la primera auditoría están resueltos. Quedan **un error importante** (la verificación de Google, con un código falso) y **tres detalles menores**.

## **Lo que mejoró desde la primera auditoría**

| Antes | Ahora |
| ----- | ----- |
| La página llegaba vacía y se llenaba con JavaScript | ✅ Cada página llega con su texto ya escrito (los buscadores y las IA lo leen directamente) |
| Todas las páginas tenían el mismo título y descripción | ✅ Cada una tiene título, descripción y URL canónica propios, y un solo H1 |
| `robots.txt` y `sitemap.xml` mostraban la home | ✅ Existen de verdad. El sitemap lista las 7 páginas con direcciones correctas |
| Una dirección inventada respondía "todo bien" | ✅ Ahora da error 404 con una página de "no encontrada" |
| Sin datos estructurados | ✅ Tiene los datos de Valeria para Google (RealEstateAgent), sin reseñas ni estrellas inventadas |
| Sin imagen para compartir | ✅ Hay imagen para WhatsApp y redes (ver el punto 2 de abajo) |
| Velocidad no medida con claridad | ✅ En el móvil: Rendimiento 99, Accesibilidad 96, Buenas prácticas 100, SEO 100 |

## **Resultados de hoy**

| Qué revisé | Estado | Detalle |
| ----- | ----- | ----- |
| Las 7 páginas (inicio, servicios, zonas, sobre mí, testimonios, FAQ, contacto) | ✅ | Todas abren (código 200\) con contenido propio |
| Título, descripción, canónica y H1 por página | ✅ | Cada página tiene los suyos |
| robots.txt | ✅ | Deja entrar a Google, Bing, ChatGPT (OAI-SearchBot), Claude y Perplexity, e indica el sitemap |
| sitemap.xml | ✅ | 7 páginas, con www y https |
| Página 404 | ✅ | Responde como error 404 y se ve bien: título, texto y enlaces útiles |
| Redirecciones | ✅ | http pasa a https, y una barra final (`/servicios/`) pasa a `/servicios` |
| Bloqueo a robots de buscadores e IA | ✅ | Ninguno es bloqueado |
| Velocidad en el móvil | ✅ | Carga principal en 1,5 s, sin bloqueos ni saltos de diseño |
| **Verificación de Search Console** | ❌ | **Ver punto 1** |
| Imagen para compartir (og-image.jpg) | ⚠️ | **Ver punto 2** |
| Dirección sin www | ⚠️ | **Ver punto 3** |
| Datos estructurados | ⚠️ | Presentes, pero con un detalle (ver punto 4\) |
| Search Console, Bing, Analytics, Rich Results Test | 🔒 | No revisados (ver el final) |

## **Qué hay que arreglar, en orden**

### **1\. ❌ Hay dos etiquetas de verificación de Google y ninguna es válida (la importante)**

En el código de la web hay **dos** líneas `google-site-verification`:

* Una dice `AbCdEfGhIjKlMnOpQrStUvWxYz...`. Es un **código de ejemplo inventado**, no uno real.  
* La otra dice `INSERTAR_CODIGO_GOOGLE_SEARCH_CONSOLE`. Es el espacio que nunca se completó.

Con eso Google **no puede verificar la web**, y sin verificar no se ven datos de Google ni se pueden enviar el sitemap ni solicitar indexación.

**Qué hacer:**

1. Entrar a Search Console con realtygoldencoast@gmail.com, añadir la propiedad `https://www.goldencoastpropertyadvisory.com/` (Prefijo de URL) y elegir el método "Etiqueta HTML".  
2. Copiar el código real que da Google (lo que está dentro de `content="..."`).  
3. En `index.html`, **borrar las dos líneas actuales** y dejar una sola con el código real.  
4. Publicar y pulsar "Verificar".

### **2\. ⚠️ La imagen para WhatsApp pesa demasiado**

`og-image.jpg` pesa **3,5 MB**. Para compartir en WhatsApp conviene que pese menos de 300 KB. Con 3,5 MB la vista previa puede no aparecer o tardar mucho. Debe seguir midiendo 1200 × 630 píxeles, y se puede comprimir sin que se note la diferencia.

Esa misma foto está puesta como "logo" en los datos de Google. Un logo debería ser un logo (idealmente cuadrado, que se vea bien pequeño), no una fotografía.

### **3\. ⚠️ La dirección sin www no abre**

`goldencoastpropertyadvisory.com` (sin www) no se encuentra. Quien escriba la dirección sin www o la copie así no entra. Se arregla en el sitio donde se compró el dominio (DNS) y en Firebase Hosting, con "Agregar dominio personalizado". Hay que verlo desde otra red o dispositivo para confirmarlo, porque este resultado salió de un solo equipo.

### **4\. ⚠️ Mejoras menores**

* **Datos estructurados:** pueden mejorar si se agregan los enlaces a las redes reales (Instagram, LinkedIn) como `sameAs`, y la dirección más completa si Valeria quiere mostrarla. Hoy solo figura Cunit, Tarragona. Solo con datos reales.  
* **Imágenes:** PageSpeed estima que se pueden ahorrar unos 890 KB comprimiéndolas. Mejora aún más la velocidad.  
* **Contraste de colores:** en algunos textos el color es poco legible sobre el fondo (accesibilidad, 96/100).  
* **Robots de entrenamiento de IA:** hoy no se bloquea a ninguno (GPTBot, ClaudeBot…). Es una decisión de Valeria si quiere que usen sus textos para entrenar modelos. Si no, hay que agregarlo a `robots.txt`.

## **Lo que no pude revisar**

* **Search Console:** pide iniciar sesión y la propiedad aún no está verificada. Cuando se resuelva el punto 1 se puede mirar la indexación, las búsquedas y el informe de IA.  
* **Bing Webmaster Tools, Google Analytics, Rich Results Test y la vista previa real en WhatsApp:** no revisados todavía.  
* No cambié nada en la web.

## **Próximos pasos**

1. Arreglar el punto 1, publicar y verificar en Search Console.  
2. Comprimir la imagen para compartir (punto 2).  
3. Cuando esté verificado, enviar el sitemap y solicitar indexación de las 7 páginas.  
4. Resolver la dirección sin www (punto 3).  
5. Una semana después, revisar qué indexó Google y de dónde viene la gente.

