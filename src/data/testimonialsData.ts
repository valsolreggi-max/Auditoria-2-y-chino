import { Language } from '../i18n';

export interface TestimonialsPageContent {
  headerEyebrow: string;
  headerTitle: string;
  headerSubtitle: string;
  introP1: string;
  introP2: string;
  realReviewsEyebrow: string;
  verifiedLabel: string;
  googleReview: string;
  directTestimonial: string;
  bottomEyebrow: string;
  bottomTitle: string;
  bottomDesc: string;
  bottomBtn: string;
  stories: {
    id: string;
    number: string;
    tag: string;
    names: string;
    roleLocation: string;
    paragraphs: string[];
    quote?: string;
    reviews?: {
      author: string;
      source: string;
      text: string;
    }[];
    originalTextLabel?: string;
    originalText?: string[];
  }[];
}

export const TESTIMONIALS_I18N: Record<Language, TestimonialsPageContent> = {
  es: {
    headerEyebrow: 'TESTIMONIOS',
    headerTitle: 'Historias de confianza',
    headerSubtitle: 'Historias que hablan por sí solas.',
    introP1: 'La confianza se construye con cada decisión y permanece mucho después de una operación.',
    introP2: 'Para mí, una relación profesional no termina cuando se firma. Estas historias hablan de clientes que, con el tiempo, siguieron confiando en mí para nuevas decisiones, nuevos proyectos y para cuidar aquello que habían confiado a mis manos.',
    realReviewsEyebrow: 'RESEÑAS REALES DE ESTA EXPERIENCIA',
    verifiedLabel: 'Verificada',
    googleReview: 'Reseña en Google',
    directTestimonial: 'Testimonio recibido directamente',
    bottomEyebrow: 'ACOMPAÑAMIENTO PERSONALIZADO',
    bottomTitle: 'La tranquilidad de estar en buenas manos',
    bottomDesc: 'Cada decisión inmobiliaria merece cercanía, rigor técnico y un compromiso sincero antes, durante y mucho después de la firma.',
    bottomBtn: 'Conversar con Valeria',
    stories: [
      {
        id: 'tony-raquel-iffy',
        number: '01',
        tag: 'INVERSIÓN & GESTIÓN CONTINUADA',
        names: 'Tony, Raquel e Iffy',
        roleLocation: 'Inversores · Reino Unido',
        paragraphs: [
          'Cuando conocí a Tony y Raquel buscaban invertir en la Costa Dorada. Durante una visita entendí que la vivienda que estaban viendo no era la mejor opción para ellos.',
          'Escuché cuáles eran sus objetivos y les propuse una alternativa completamente distinta. En lugar de comprar una gran casa para reformar, terminaron adquiriendo una vivienda mucho más adecuada para su proyecto de inversión.',
          'Era una decisión menos evidente, pero también la más acertada para ellos.',
          'Los años pasaron y volvieron a confiar en mí para gestionar el alquiler de esa misma propiedad.',
          'Más tarde, Tony me presentó a su hermana, Iffy, para acompañarla en la búsqueda de su primera inversión inmobiliaria en España.',
          'Para mí, esa recomendación tiene un valor especial. No porque llegara un nuevo cliente, sino porque confirmó algo en lo que siempre he creído: cuando el asesoramiento se basa en la honestidad y en poner los intereses del cliente por delante, la confianza permanece y acaba recomendándote por sí sola.',
        ],
        reviews: [
          {
            author: 'Anags A (Tony)',
            source: 'Reseña en Google',
            text: '«Con Valeria, la experiencia ha sido inmejorable. Nos ayudó con todo: desde la selección del propietario y la búsqueda de inquilinos hasta todos los aspectos legales. Gracias, Valeria. Estamos muy contentos y la recomendamos al 100 %. »',
          },
          {
            author: 'Iffy Anagor',
            source: 'Reseña en Google',
            text: '«Valeria es una profesional excepcional que trabaja con verdadera dedicación por sus clientes. Cuenta con una amplia red de contactos que pone al servicio de cada proyecto para encontrar la propiedad más adecuada. Es una persona en la que se puede confiar y está profundamente comprometida con ofrecer un servicio excelente. La recomiendo tanto para encontrar una propiedad como para acompañar todo el proceso y la burocracia asociada. Es una gran aliada.»',
          },
        ],
      },
      {
        id: 'marco-paco',
        number: '02',
        tag: 'VENTA & ACOMPAÑAMIENTO CONTINUADO',
        names: 'Marco (Paco)',
        roleLocation: 'Propietario · Cubelles',
        paragraphs: [
          'Cuando Paco decidió vender su vivienda, trabajamos juntos para prepararla y presentarla de la mejor manera posible.',
          'Definimos una estrategia, cuidamos cada detalle de la presentación y acompañé todo el proceso hasta la venta.',
          'Pero lo más importante no fue la operación.',
          'Seis años después seguimos trabajando juntos. Ha vuelto a confiar en mí para nuevos proyectos, consulta conmigo decisiones relacionadas con sus propiedades y, lo que más valoro, sigue recomendándome a familiares y amigos.',
          'Para mí, esa continuidad significa mucho más que una venta. Es la tranquilidad de saber que la confianza se mantiene incluso cuando la operación ya forma parte del pasado.',
        ],
        reviews: [
          {
            author: 'Marco Ramirez',
            source: 'Reseña en Google',
            text: '«Valeria es una profesional como pocas,se encarga de todo,tanto de buscarte lo que necesites como alquilarlo o comprarlo o reformarlo incluso, asesora muy bien a la gente, profesional.Muy Recomendable y Profesional de Máster.»',
          },
        ],
      },
      {
        id: 'amalia',
        number: '03',
        tag: 'GESTIÓN INTEGRAL & TRANQUILIDAD A DISTANCIA',
        names: 'Amalia',
        roleLocation: 'Propietaria · Madrid',
        paragraphs: [
          'Gestionar una vivienda desde otra ciudad requiere algo más que encontrar un buen inquilino.',
          'Requiere la tranquilidad de saber que alguien cuida tu propiedad como si fuera propia.',
          'Amalia vive en Madrid y confía en mí para gestionar el alquiler de su vivienda en Vilanova i la Geltrú.',
          'Me encargo de la selección del inquilino, la documentación, los aspectos legales y el seguimiento de todo el proceso para que no tenga que preocuparse por nada.',
          'Nuestra relación continúa porque entiende que mi trabajo no termina con la firma del contrato.',
          'Sigue cada vez que surge una duda, una gestión o una decisión importante sobre su vivienda.',
          'La verdadera tranquilidad no consiste en delegar una propiedad. Consiste en saber que siempre habrá alguien al otro lado cuando lo necesites.',
        ],
        reviews: [
          {
            author: 'Amalia Julián',
            source: 'Reseña en Google',
            text: '«Estoy encantada con el encargo de alquiler que hice para un apartamento en Vilanova i la Geltrú. Valeria, muy comprometida con el cliente, concienzuda con la gestión del alquiler y atenta en todo momento a los aspectos legales e incluso materiales que evitan problemas futuros tanto para el arrendador como para el inquilino. ¡Cinco estrellas para Golden Coast!»',
          },
        ],
      },
      {
        id: 'diana',
        number: '04',
        tag: 'COMPRA & CUIDADO PERMANENTE',
        names: 'Diana',
        roleLocation: 'Propietaria · Alemania',
        paragraphs: [
          'Hay personas en las que confías desde el primer momento. Para nosotros, Valeria es exactamente una de esas personas.',
          'No se limitó a ayudarnos a comprar una casa; nos ayudó a encontrar un lugar en el que pudiéramos sentirnos como en casa desde el primer día. Con su cercanía, su honestidad y su extraordinaria capacidad para entender a las personas, nos acompañó durante todo el proceso de compra y estuvo siempre presente, orientada a encontrar soluciones y siendo absolutamente fiable.',
          'Precisamente porque comprábamos la casa en España, su apoyo fue de un valor incalculable para nosotros. Encontró soluciones junto a nosotros, organizó un intérprete, nos acompañó con mucho tacto en las negociaciones con los vendedores, negoció de manera justa tanto el precio de la propiedad como el de los muebles que queríamos adquirir y posteriormente nos puso en contacto con profesionales y colaboradores locales de confianza. Nunca tuvimos la sensación de estar solos.',
          'Lo que hace especialmente valiosa a Valeria es que su acompañamiento no termina con la entrega de las llaves. Incluso hoy sigue cuidando nuestra casa con la misma atención, responsabilidad y dedicación. Como no estamos permanentemente allí, para nosotros es una tranquilidad enorme saber que nuestro hogar está en las mejores manos.',
        ],
        quote: '“La confianza no se puede comprar; hay que ganársela. Valeria consigue precisamente eso. Con verdadera dedicación, profesionalidad y una calidez humana que pocas veces se encuentra.”',
        originalTextLabel: 'TESTIMONIO ORIGINAL EN ALEMÁN',
        originalText: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten.',
          'Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.',
        ],
      },
    ],
  },
  en: {
    headerEyebrow: 'TESTIMONIALS',
    headerTitle: 'Stories of Trust',
    headerSubtitle: 'Stories that speak for themselves.',
    introP1: 'Trust is built through every thoughtful decision and endures long after a transaction concludes.',
    introP2: 'For me, a professional relationship never ends when deeds are signed. These journeys reflect clients who, over the years, continue to place their most valued decisions and properties in my care.',
    realReviewsEyebrow: 'GENUINE REVIEWS FROM THIS JOURNEY',
    verifiedLabel: 'Verified',
    googleReview: 'Google Review',
    directTestimonial: 'Direct client letter',
    bottomEyebrow: 'BESPOKE STEWARDSHIP',
    bottomTitle: 'The peace of mind of being in trusted hands',
    bottomDesc: 'Every property decision deserves genuine empathy, forensic legal rigor, and sincere commitment before, during, and long after closing.',
    bottomBtn: 'Speak with Valeria',
    stories: [
      {
        id: 'tony-raquel-iffy',
        number: '01',
        tag: 'INVESTMENT & ONGOING MANAGEMENT',
        names: 'Tony, Raquel & Iffy',
        roleLocation: 'Investors · United Kingdom',
        paragraphs: [
          'When I first met Tony and Raquel, they were seeking an investment along the Costa Dorada. During a viewing, I realized the house they were considering was not the right vehicle for their plans.',
          'I listened closely to their financial goals and proposed a completely different strategy. Instead of buying a large home in need of renovation, they acquired a property far more aligned with their rental investment blueprint.',
          'It was a less obvious route, yet undeniably the wisest decision for them.',
          'Years passed, and they entrusted me once more to oversee the ongoing rental management of that very asset.',
          'Later, Tony introduced me to his sister, Iffy, so I could guide her through acquiring her first property investment in Spain.',
          'To me, this continuity holds special meaning. Not simply for welcoming a new client, but because it validates what I have always championed: when advice is anchored in honesty and placing the client first, trust remains and speaks for itself.',
        ],
        reviews: [
          {
            author: 'Anags A (Tony)',
            source: 'Google Review',
            text: '«With Valeria, the experience was second to none. She guided us through every facet: from vendor negotiations and tenant sourcing to full legal compliance. Thank you, Valeria. We are delighted and recommend her 100%.»',
          },
          {
            author: 'Iffy Anagor',
            source: 'Google Review',
            text: '«Valeria is an exceptional professional who works with genuine dedication for her clients. She commands a wide network of trusted contacts that she brings to each project to uncover the ideal home. She is someone you can wholeheartedly rely upon. A true ally.»',
          },
        ],
      },
      {
        id: 'marco-paco',
        number: '02',
        tag: 'SALE & ENDURING PARTNERSHIP',
        names: 'Marco (Paco)',
        roleLocation: 'Owner · Cubelles',
        paragraphs: [
          'When Paco decided to sell his home, we collaborated closely to stage and present it in its finest light.',
          'We framed a precise marketing roadmap, attended to every staging nuance, and I stewarded the entire trajectory through closing.',
          'Yet the true milestone was not the sale itself.',
          'Six years later, we remain in continuous collaboration. He has turned to me for subsequent ventures, consults me on portfolio decisions, and continuously recommends me to friends and family.',
          'To me, that enduring connection transcends any single transaction. It is the peace of knowing trust endures long after deeds are recorded.',
        ],
        reviews: [
          {
            author: 'Marco Ramirez',
            source: 'Google Review',
            text: '«Valeria is a rare professional who takes care of everything from start to finish: buying, leasing, renovation coordination, and sharp legal advice. Highly recommended and a master of her craft.»',
          },
        ],
      },
      {
        id: 'amalia',
        number: '03',
        tag: 'COMPREHENSIVE REMOTE STEWARDSHIP',
        names: 'Amalia',
        roleLocation: 'Owner · Madrid',
        paragraphs: [
          'Overseeing a coastal home from another city requires far more than finding a qualified tenant.',
          'It requires complete confidence that someone cares for your asset as if it were their own.',
          'Amalia resides in Madrid and relies on me to manage her residential rental in Vilanova i la Geltrú.',
          'I oversee candidate vetting, legal leases, inventory checks, and ongoing monitoring so she enjoys absolute peace of mind.',
          'Our relationship thrives because she knows my dedication does not end with the ink on a lease.',
          'Whenever questions, maintenance needs, or legislative changes arise, I am right there.',
          'True peace of mind is knowing an expert is always on the other end of the line when needed.',
        ],
        reviews: [
          {
            author: 'Amalia Julián',
            source: 'Google Review',
            text: '«I am thrilled with the rental mandate for my apartment in Vilanova. Valeria is deeply devoted, meticulous with tenant selection, and alert to legal and technical details that prevent headaches for both parties. Five stars for Golden Coast!»',
          },
        ],
      },
      {
        id: 'diana',
        number: '04',
        tag: 'PURCHASE & ONGOING GUARDIANSHIP',
        names: 'Diana',
        roleLocation: 'Owner · Germany',
        paragraphs: [
          'There are people you trust implicitly from the very first moment. For our family, Valeria is precisely that person.',
          'She did not simply broker a house; she helped us discover a sanctuary where we felt at home from day one. With her warmth, clarity, and extraordinary empathy, she stood by us across the entire acquisition.',
          'Particularly when buying from abroad, her guidance proved invaluable. She organized interpreters, mediated negotiations with vendor diplomacy, fairly agreed the property and furniture valuations, and introduced us to reputable local craftsmen. We never felt alone.',
          'What distinguishes Valeria is that her stewardship did not terminate at the notary. Today she continues to look after our Mediterranean residence with the same vigilance and heartfelt devotion.',
        ],
        quote: '“Trust cannot be purchased; it must be earned. Valeria achieves exactly that. With genuine dedication, consummate professionalism, and a human warmth rarely encountered.”',
        originalTextLabel: 'ORIGINAL GERMAN TESTIMONIAL',
        originalText: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten.',
          'Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.',
        ],
      },
    ],
  },
  de: {
    headerEyebrow: 'ERFAHRUNGSBERICHTE',
    headerTitle: 'Geschichten des Vertrauens',
    headerSubtitle: 'Geschichten, die für sich selbst sprechen.',
    introP1: 'Vertrauen wächst mit jeder wohlüberlegten Entscheidung und bleibt weit über eine notarielle Beurkundung hinaus bestehen.',
    introP2: 'Für mich endet eine Geschäftsbeziehung nicht mit der Unterschrift. Diese Berichte erzählen von Kunden, die mich über viele Jahre hinweg bei neuen Vorhaben und der treuhänderischen Betreuung ihrer Immobilien begleiten.',
    realReviewsEyebrow: 'ECHTE REZENSIONEN DIESER ERFAHRUNG',
    verifiedLabel: 'Verifiziert',
    googleReview: 'Google Rezension',
    directTestimonial: 'Direkte Kundenstimme',
    bottomEyebrow: 'INDIVIDUELLE BEGLEITUNG',
    bottomTitle: 'Die Gelassenheit, in besten Händen zu sein',
    bottomDesc: 'Jede Immobilienentscheidung verdient menschliche Nähe, juristische Präzision und aufrichtiges Engagement.',
    bottomBtn: 'Gespräch mit Valeria vereinbaren',
    stories: [
      {
        id: 'tony-raquel-iffy',
        number: '01',
        tag: 'INVESTITION & FORTLAUFENDE BETREUUNG',
        names: 'Tony, Raquel & Iffy',
        roleLocation: 'Investoren · Großbritannien',
        paragraphs: [
          'Als ich Tony und Raquel kennenlernte, suchten sie eine Investition an der Costa Dorada. Bei einer Besichtigung erkannte ich, dass das ins Auge gefasste Objekt nicht optimal für ihre Ziele war.',
          'Ich hörte aufmerksam zu und schlug eine grundlegend andere Strategie vor. Anstelle eines sanierungsbedürftigen Hauses erwarben sie eine Immobilie, die perfekt zu ihrem Anlagehorizont passte.',
          'Es war die weniger naheliegende, aber weitaus klügere Entscheidung.',
          'Die Jahre vergingen, und sie vertrauten mir erneut die Vermietung und Betreuung dieses Objekts an.',
          'Später stellte mir Tony seine Schwester Iffy vor, um sie bei ihrem ersten Immobilienkauf in Spanien zu begleiten.',
          'Diese Empfehlung hat für mich einen besonderen Wert. Nicht, weil eine neue Kundin dazukam, sondern weil sie bestätigt hat, woran ich immer geglaubt habe: Wenn Beratung auf Ehrlichkeit beruht und die Interessen der Kunden an erster Stelle stehen, bleibt das Vertrauen bestehen und spricht am Ende für sich selbst.',
        ],
        reviews: [
          {
            author: 'Anags A (Tony)',
            source: 'Google Rezension',
            text: '«Mit Valeria war die Erfahrung unübertrefflich. Sie hat uns bei allem geholfen: von der Auswahl des Eigentümers und der Mietersuche bis zu allen rechtlichen Fragen. Danke, Valeria. Wir sind sehr zufrieden und empfehlen sie zu 100 %.»',
          },
          {
            author: 'Iffy Anagor',
            source: 'Google Rezension',
            text: '«Valeria ist eine außergewöhnliche Fachfrau, die mit echter Hingabe für ihre Kunden arbeitet. Sie verfügt über ein großes Netzwerk, das sie in jedes Projekt einbringt, um die passende Immobilie zu finden. Man kann ihr vertrauen, und sie setzt sich mit ganzer Kraft für einen hervorragenden Service ein. Ich empfehle sie sowohl für die Suche nach einer Immobilie als auch für die Begleitung des gesamten Ablaufs und der damit verbundenen Bürokratie. Sie ist eine großartige Verbündete.»',
          },
        ],
      },
      {
        id: 'marco-paco',
        number: '02',
        tag: 'VERKAUF & DAUERHAFTE PARTNERSCHAFT',
        names: 'Marco (Paco)',
        roleLocation: 'Eigentümer · Cubelles',
        paragraphs: [
          'Als Paco beschloss, seine Immobilie zu verkaufen, erarbeiteten wir eine präzise Präsentation und Verkaufsstrategie.',
          'Wir planten jedes Detail sorgfältig, und ich begleitete den gesamten Weg bis zum Notartermin.',
          'Doch das Wertvollste war nicht die Transaktion an sich.',
          'Sechs Jahre später arbeiten wir noch immer vertrauensvoll zusammen. Er konsultiert mich bei neuen Projekten und empfiehlt mich fortwährend an Familie und Freunde weiter.',
          'Für mich bedeutet diese Kontinuität viel mehr als ein Verkauf. Sie gibt die Gewissheit, dass das Vertrauen bleibt, auch wenn das Geschäft längst Vergangenheit ist.',
        ],
        reviews: [
          {
            author: 'Marco Ramirez',
            source: 'Google Rezension',
            text: '«Valeria ist eine Fachfrau wie wenige: Sie kümmert sich um alles, sie sucht für dich, was du brauchst, ob zur Miete, zum Kauf oder sogar zur Renovierung, und berät die Menschen sehr gut. Sehr professionell. Sehr empfehlenswert, Profi auf Meisterniveau.»',
          },
        ],
      },
      {
        id: 'amalia',
        number: '03',
        tag: 'GANZHEITLICHE VERWALTUNG AUS DER DISTANZ',
        names: 'Amalia',
        roleLocation: 'Eigentümerin · Madrid',
        paragraphs: [
          'Eine Immobilie aus einer anderen Stadt zu vermieten erfordert mehr als das Finden solventer Mieter.',
          'Es verlangt die Gewissheit, dass sich jemand mit derselben Sorgfalt um das Eigentum kümmert wie um das eigene.',
          'Amalia lebt in Madrid und vertraut mir die Vermietung ihrer Wohnung in Vilanova i la Geltrú an.',
          'Ich übernehme die Mieterauswahl, die Unterlagen, die rechtlichen Fragen und die Begleitung des gesamten Ablaufs, damit sie sich um nichts kümmern muss.',
          'Unsere Zusammenarbeit geht weiter, weil sie weiß, dass meine Arbeit nicht mit der Unterzeichnung des Mietvertrags endet.',
          'Sie besteht fort, wann immer eine Frage, eine Formalität oder eine wichtige Entscheidung zu ihrer Wohnung ansteht.',
          'Wahre Gelassenheit heißt nicht, eine Immobilie einfach abzugeben. Sie heißt zu wissen, dass immer jemand für einen da ist, wenn man ihn braucht.',
        ],
        reviews: [
          {
            author: 'Amalia Julián',
            source: 'Google Rezension',
            text: '«Ich bin begeistert von dem Vermietungsauftrag für eine Wohnung in Vilanova i la Geltrú. Valeria ist sehr engagiert für ihre Kunden, gewissenhaft bei der Verwaltung der Vermietung und achtet jederzeit auf die rechtlichen und sogar praktischen Aspekte, die künftigen Problemen für Vermieter und Mieter vorbeugen. Fünf Sterne für Golden Coast!»',
          },
        ],
      },
      {
        id: 'diana',
        number: '04',
        tag: 'KAUF & DAUERHAFTE BETREUUNG',
        names: 'Diana',
        roleLocation: 'Eigentümerin · Deutschland',
        paragraphs: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten. Mit ihrer Herzlichkeit, ihrer Ehrlichkeit und ihrem außergewöhnlichen Gespür für Menschen hat sie uns durch den gesamten Kaufprozess begleitet, war immer da, lösungsorientiert und absolut zuverlässig.',
          'Gerade weil wir das Haus in Spanien gekauft haben, war ihre Unterstützung für uns von unschätzbarem Wert. Sie hat gemeinsam mit uns Lösungen gefunden, einen Dolmetscher organisiert, uns mit viel Feingefühl bei den Verhandlungen mit den Verkäufern begleitet, sowohl den Preis der Immobilie als auch den der Möbel, die wir übernehmen wollten, fair verhandelt und uns anschließend mit vertrauenswürdigen Fachleuten und Partnern vor Ort in Kontakt gebracht. Wir hatten nie das Gefühl, allein zu sein.',
          'Was Valeria besonders wertvoll macht: Ihre Begleitung endet nicht mit der Schlüsselübergabe. Bis heute kümmert sie sich mit derselben Aufmerksamkeit, Verantwortung und Hingabe um unser Haus. Da wir nicht ständig vor Ort sind, ist es für uns eine enorme Beruhigung zu wissen, dass unser Zuhause in den besten Händen ist.',
        ],
        quote: '„Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.“',
        originalTextLabel: 'ORIGINAL-TESTIMONIAL AUF DEUTSCH',
        originalText: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten. Mit ihrer Herzlichkeit, ihrer Ehrlichkeit und ihrem außergewöhnlichen Gespür für Menschen hat sie uns durch den gesamten Kaufprozess begleitet.',
          'Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.',
        ],
      },
    ],
  },
  fr: {
    headerEyebrow: 'TÉMOIGNAGES',
    headerTitle: 'Histoires de confiance',
    headerSubtitle: 'Des récits qui parlent d’eux-mêmes.',
    introP1: 'La confiance se forge à chaque décision et perdure bien au-delà de la signature.',
    introP2: 'Pour moi, une relation professionnelle ne s’achève pas chez le notaire. Ces histoires illustrent le parcours de clients qui continuent de me confier leurs projets et la gérance de leur patrimoine au fil des années.',
    realReviewsEyebrow: 'AVIS AUTHENTIQUES DE CETTE EXPÉRIENCE',
    verifiedLabel: 'Vérifié',
    googleReview: 'Avis Google',
    directTestimonial: 'Témoignage direct',
    bottomEyebrow: 'ACCOMPAGNEMENT SUR MESURE',
    bottomTitle: 'La sérénité d’être entre de bonnes mains',
    bottomDesc: 'Chaque décision immobilière requiert écoute, rigueur juridique et un dévouement sincère avant, pendant et bien après la remise des clés.',
    bottomBtn: 'Échanger avec Valeria',
    stories: [
      {
        id: 'tony-raquel-iffy',
        number: '01',
        tag: 'INVESTISSEMENT & GÉRANCE CONTINUE',
        names: 'Tony, Raquel & Iffy',
        roleLocation: 'Investisseurs · Royaume-Uni',
        paragraphs: [
          'Lorsque j’ai rencontré Tony et Raquel, ils cherchaient à investir sur la Costa Dorada. Lors d’une visite, j’ai compris que le bien convoité ne correspondait pas à leur intérêt.',
          'J’ai écouté leurs objectifs et leur ai proposé une orientation différente. Plutôt qu’une maison imposante à rénover, ils ont acquis un bien parfaitement adapté à leur projet locatif.',
          'C’était un choix moins conventionnel, mais assurément le plus judicieux.',
          'Les années ont passé et ils m’ont de nouveau confié la gestion locative de cette même propriété.',
          'Plus tard, Tony m’a présenté sa sœur, Iffy, pour l’accompagner dans son premier investissement en Espagne.',
          'Pour moi, cette recommandation a une valeur particulière. Non parce qu’une nouvelle cliente arrivait, mais parce qu’elle a confirmé ce en quoi j’ai toujours cru : quand le conseil repose sur l’honnêteté et place les intérêts du client avant tout, la confiance perdure et finit par vous recommander d’elle-même.',
        ],
        reviews: [
          {
            author: 'Anags A (Tony)',
            source: 'Avis Google',
            text: '«Avec Valeria, l’expérience a été parfaite. Elle nous a aidés en tout : de la sélection du propriétaire et la recherche de locataires à tous les aspects juridiques. Merci, Valeria. Nous sommes très contents et la recommandons à 100 %.»',
          },
          {
            author: 'Iffy Anagor',
            source: 'Avis Google',
            text: '«Valeria est une professionnelle exceptionnelle qui travaille avec un véritable dévouement pour ses clients. Elle dispose d’un large réseau qu’elle met au service de chaque projet pour trouver le bien le plus adapté. C’est une personne de confiance, profondément engagée à offrir un excellent service. Je la recommande aussi bien pour trouver un bien que pour accompagner tout le processus et les démarches administratives qui vont avec. C’est une alliée précieuse.»',
          },
        ],
      },
      {
        id: 'marco-paco',
        number: '02',
        tag: 'VENTE & FIDÉLITÉ DANS LE TEMPS',
        names: 'Marco (Paco)',
        roleLocation: 'Propriétaire · Cubelles',
        paragraphs: [
          'Lorsque Paco a souhaité vendre son bien, nous avons défini une mise en valeur soignée et une stratégie commerciale claire.',
          'Chaque détail fut pris en compte et j’ai coordonné l’ensemble du processus jusqu’à la conclusion de la vente.',
          'Mais l’essentiel dépasse cette transaction.',
          'Six ans plus tard, nous collaborons toujours. Il continue de solliciter mon avis pour ses choix patrimoniaux et me recommande chaleureusement à son entourage.',
          'Pour moi, cette continuité compte bien plus qu’une vente. C’est la sérénité de savoir que la confiance demeure, même quand l’opération appartient déjà au passé.',
        ],
        reviews: [
          {
            author: 'Marco Ramirez',
            source: 'Avis Google',
            text: '«Valeria est une professionnelle comme il y en a peu : elle s’occupe de tout, elle vous trouve ce dont vous avez besoin, que ce soit pour louer, acheter ou même rénover, et elle conseille très bien les gens. Très professionnelle. Vivement recommandée, une professionnelle de haut niveau.»',
          },
        ],
      },
      {
        id: 'amalia',
        number: '03',
        tag: 'GÉRANCE GLOBALE & TRANQUILLITÉ À DISTANCE',
        names: 'Amalia',
        roleLocation: 'Propriétaire · Madrid',
        paragraphs: [
          'Gérer un logement depuis une autre ville exige bien plus que trouver un locataire.',
          'Cela demande la certitude absolue que votre bien est préservé comme s’il s’agissait du nôtre.',
          'Amalia réside à Madrid et me confie la gestion de son appartement à Vilanova i la Geltrú.',
          'Je m’occupe de la sélection du locataire, des documents, des aspects juridiques et du suivi de tout le processus, pour qu’elle n’ait à se soucier de rien.',
          'Notre relation se poursuit parce qu’elle sait que mon travail ne s’arrête pas à la signature du bail.',
          'Elle continue chaque fois qu’une question, une démarche ou une décision importante concernant son logement se présente.',
          'La vraie sérénité ne consiste pas à confier un bien. Elle consiste à savoir qu’il y aura toujours quelqu’un de l’autre côté quand vous en aurez besoin.',
        ],
        reviews: [
          {
            author: 'Amalia Julián',
            source: 'Avis Google',
            text: '«Je suis ravie du mandat de location que j’ai confié pour un appartement à Vilanova i la Geltrú. Valeria est très engagée envers ses clients, consciencieuse dans la gestion de la location et attentive à tout moment aux aspects juridiques, et même matériels, qui évitent de futurs problèmes au bailleur comme au locataire. Cinq étoiles pour Golden Coast !»',
          },
        ],
      },
      {
        id: 'diana',
        number: '04',
        tag: 'ACHAT & GARDIENNAGE PERMANENT',
        names: 'Diana',
        roleLocation: 'Propriétaire · Allemagne',
        paragraphs: [
          'Il y a des personnes à qui l’on fait confiance dès le premier instant. Pour nous, Valeria est exactement l’une de ces personnes.',
          'Elle ne s’est pas contentée de nous aider à acheter une maison : elle nous a aidés à trouver un lieu où nous pouvions nous sentir chez nous dès le premier jour. Avec sa proximité, son honnêteté et son extraordinaire capacité à comprendre les gens, elle nous a accompagnés tout au long de l’achat, toujours présente, tournée vers les solutions et absolument fiable.',
          'Justement parce que nous achetions la maison en Espagne, son soutien a été d’une valeur inestimable pour nous. Elle a trouvé des solutions avec nous, organisé un interprète, nous a accompagnés avec beaucoup de tact dans les négociations avec les vendeurs, a négocié de façon juste aussi bien le prix du bien que celui des meubles que nous voulions reprendre, puis nous a mis en relation avec des professionnels et partenaires locaux de confiance. Nous n’avons jamais eu le sentiment d’être seuls.',
          'Ce qui rend Valeria particulièrement précieuse, c’est que son accompagnement ne s’arrête pas à la remise des clés. Aujourd’hui encore, elle continue de veiller sur notre maison avec la même attention, la même responsabilité et le même dévouement. Comme nous ne sommes pas sur place en permanence, c’est un immense soulagement de savoir que notre maison est entre les meilleures mains.',
        ],
        quote: '« La confiance ne s’achète pas, elle se mérite. Valeria réussit précisément cela. Avec un dévouement sincère, un grand professionnalisme et une chaleur humaine remarquable. »',
        originalTextLabel: 'TÉMOIGNAGE ORIGINAL EN ALLEMAND',
        originalText: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten.',
          'Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.',
        ],
      },
    ],
  },
  zh: {
    headerEyebrow: '客户评价',
    headerTitle: '值得信赖的故事',
    headerSubtitle: '让故事自己说话。',
    introP1: '信任在每一个决定中建立，并在交易完成后长久延续。',
    introP2: '对我来说，专业关系并不会在签约时结束。下面这些故事里的客户，随着时间推移，仍然继续信任我，把新的决定、新的项目，以及他们交到我手中的房产托付给我。',
    realReviewsEyebrow: '这段经历的真实评价',
    verifiedLabel: '已验证',
    googleReview: 'Google 评价',
    directTestimonial: '客户直接发来的评价',
    bottomEyebrow: '个性化陪伴',
    bottomTitle: '托付给可靠的人，才能真正安心',
    bottomDesc: '每一个房产决定，都值得在签约之前、签约之时以及签约之后很久，得到贴心的陪伴、严谨的专业态度和真诚的投入。',
    bottomBtn: '与 Valeria 聊一聊',
    stories: [
      {
        id: 'tony-raquel-iffy',
        number: '01',
        tag: '投资与持续管理',
        names: 'Tony、Raquel 和 Iffy',
        roleLocation: '投资者 · 英国',
        paragraphs: [
          '我认识 Tony 和 Raquel 时，他们正想在黄金海岸（Costa Dorada）投资。在一次看房中，我意识到他们正在看的房子并不是最适合他们的选择。',
          '我听取了他们的目标，并提出了一个完全不同的方案。他们最终没有买下一栋需要翻修的大房子，而是购入了一套更适合其投资计划的住宅。',
          '这个决定没那么显而易见，但对他们来说却是最正确的。',
          '几年过去了，他们再次信任我，委托我管理这套房产的出租。',
          '后来，Tony 又把他的妹妹 Iffy 介绍给我，请我陪她寻找她在西班牙的第一笔房产投资。',
          '对我来说，这份推荐有着特别的意义。不是因为多了一位新客户，而是因为它印证了我一直相信的一件事：当建议建立在诚实之上、把客户的利益放在首位时，信任会延续下去，并最终自己为你说话。',
        ],
        reviews: [
          {
            author: 'Anags A (Tony)',
            source: 'Google 评价',
            text: '「和 Valeria 合作的体验无可挑剔。她在各方面都帮了我们：从房东的甄选、寻找租客，到所有法律事务。谢谢你，Valeria。我们非常满意，百分之百推荐她。」',
          },
          {
            author: 'Iffy Anagor',
            source: 'Google 评价',
            text: '「Valeria 是一位出色的专业人士，真正用心为客户工作。她拥有广泛的人脉，并把这些资源用于每一个项目，帮客户找到最合适的房产。她是一个值得信赖的人，全心致力于提供优质的服务。无论是找房，还是陪伴整个流程和相关手续，我都推荐她。她是一位很好的伙伴。」',
          },
        ],
      },
      {
        id: 'marco-paco',
        number: '02',
        tag: '出售与持续陪伴',
        names: 'Marco（Paco）',
        roleLocation: '业主 · 库贝列斯（Cubelles）',
        paragraphs: [
          'Paco 决定出售他的房子时，我们一起努力，把房子准备好，并以最好的方式呈现出来。',
          '我们制定了策略，用心打理展示的每一个细节，我也全程陪伴，直到房子售出。',
          '但最重要的并不是这笔交易。',
          '六年后的今天，我们仍然在合作。他再次信任我，把新的项目交给我，在房产相关的决定上会征求我的意见；而我最珍惜的是，他一直把我推荐给家人和朋友。',
          '对我来说，这份延续远比一次出售更有意义。它让人安心：即使交易早已成为过去，信任依然存在。',
        ],
        reviews: [
          {
            author: 'Marco Ramirez',
            source: 'Google 评价',
            text: '「Valeria 是一位少有的专业人士，什么都能帮你搞定：帮你找到需要的房子，无论是租、买，甚至装修。她给人的建议非常到位，很专业。非常推荐，大师级的专业水准。」',
          },
        ],
      },
      {
        id: 'amalia',
        number: '03',
        tag: '全面托管与远程安心',
        names: 'Amalia',
        roleLocation: '业主 · 马德里',
        paragraphs: [
          '在另一座城市管理一套房子，需要的不只是找到一位好租客。',
          '更需要安心：知道有人会像对待自己的房子一样照看你的房产。',
          'Amalia 住在马德里，她委托我管理她在维拉诺瓦（Vilanova i la Geltrú）的房子出租事宜。',
          '我负责租客的筛选、文件、法律事务以及整个过程的跟进，让她什么都不用操心。',
          '我们的合作一直延续，因为她明白，我的工作并不会在租约签订后结束。',
          '每当她对房子有疑问、需要办理手续或做重要决定时，我们依然保持联系。',
          '真正的安心，不在于把房产交给别人，而在于知道无论何时需要，另一端总有人在。',
        ],
        reviews: [
          {
            author: 'Amalia Julián',
            source: 'Google 评价',
            text: '「我对委托出租维拉诺瓦（Vilanova i la Geltrú）一套公寓的经历非常满意。Valeria 对客户非常负责，管理出租时认真细致，并始终关注法律乃至房屋本身的各个方面，避免日后给房东和租客带来麻烦。给 Golden Coast 五颗星！」',
          },
        ],
      },
      {
        id: 'diana',
        number: '04',
        tag: '购房与长期照看',
        names: 'Diana',
        roleLocation: '业主 · 德国',
        paragraphs: [
          '有些人，你从第一刻起就会信任。对我们来说，Valeria 正是这样的人。',
          '她不只是帮我们买了一套房子，而是帮我们找到了一个从第一天起就能有家的感觉的地方。凭借她的亲切、诚实，以及非凡的理解他人的能力，她陪伴我们走完了整个购房过程，始终在场，专注于解决问题，绝对值得信赖。',
          '正因为我们是在西班牙买房，她的支持对我们来说无比珍贵。她和我们一起寻找解决办法，安排了翻译，在与卖家的谈判中非常得体地陪伴我们，公平地谈妥了房价以及我们想购买的家具的价格，之后还为我们联系了可靠的本地专业人士和合作伙伴。我们从来没有孤立无援的感觉。',
          'Valeria 特别珍贵的地方在于，她的陪伴不会在交钥匙时结束。直到今天，她依然以同样的用心、责任感和投入照看着我们的房子。因为我们并不长期住在那里，知道我们的家在最可靠的人手中，让我们非常安心。',
        ],
        quote: '“信任无法用钱买到，必须靠自己赢得。Valeria 恰恰做到了这一点。她真诚投入、专业，并有一种难得一见的温暖。”',
        originalTextLabel: '德语原文评价',
        originalText: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten.',
          'Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.',
        ],
      },
    ],
  },
};
