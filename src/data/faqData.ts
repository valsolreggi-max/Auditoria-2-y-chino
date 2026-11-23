import { Language } from '../i18n';

export interface FAQItem {
  id: number;
  question: string;
  answerIntroduction: string;
  calloutTop?: string;
  callout1?: {
    title: string;
    text: string;
    borderCol: string;
  };
  callout2?: {
    title: string;
    text: string;
    borderCol: string;
  };
  bulletPoints?: {
    bold: string;
    text: string;
  }[];
  concludingText?: string;
}

export interface FAQBlock {
  blockNumber: string;
  blockTitle: string;
  buttonLabel: string;
  items: FAQItem[];
}

export interface FAQPageContent {
  headerEyebrow: string;
  headerTitle: string;
  headerSubtitle: string;
  expandAll: string;
  collapseAll: string;
  answerLabel: string;
  bottomEyebrow: string;
  bottomTitle: string;
  bottomSubtitle: string;
  bottomBtn: string;
  blocks: FAQBlock[];
}

export const FAQ_I18N: Record<Language, FAQPageContent> = {
  es: {
    headerEyebrow: 'PREGUNTAS FRECUENTES · GOLDEN COAST',
    headerTitle: 'Respuestas claras y rigor jurídico para cada duda.',
    headerSubtitle: 'La información transparente es la base de la tranquilidad. Aquí resolvemos las preguntas más habituales sobre la gestión, compraventa y alquiler de propiedades.',
    expandAll: 'Abrir todas',
    collapseAll: 'Cerrar todas',
    answerLabel: 'Respuesta:',
    bottomEyebrow: 'ASESORAMIENTO RIGUROSO',
    bottomTitle: '¿Tienes una consulta específica sobre tu propiedad?',
    bottomSubtitle: 'Cada caso patrimonial es único. Analizo tu situación de forma confidencial y sin compromiso para ofrecerte la máxima seguridad técnica y legal.',
    bottomBtn: 'Hacer una consulta con Valeria',
    blocks: [
      {
        blockNumber: 'BLOQUE 1',
        blockTitle: 'Bloque 1: Alquileres (Vacacional, Temporal y Larga Duración) y Normativa',
        buttonLabel: '1. Alquileres y Normativa',
        items: [
          {
            id: 1,
            question: '1. ¿Si mi piso está en zona tensionada, estoy obligado a bajar el alquiler al precio del Índice de Referencia? ¿O puedo subirlo si el Índice marca más de lo que cobraba?',
            answerIntroduction: 'Depende de tu perfil de propietario y del historial del inmueble (Ley 12/2023 por el Derecho a la Vivienda y Ley de Arrendamientos Urbanos):',
            callout1: {
              title: 'Si el Índice marca un precio INFERIOR al contrato anterior (Ejemplo: Alquilabas a 850 € y el Índice marca 780 €):',
              text: 'Si eres un pequeño propietario (menos de 5 o 10 inmuebles según la delimitación de la zona) y la vivienda ha estado alquilada en los últimos 5 años, NO estás obligado a bajar la renta inicial a 780 €. La ley te autoriza a tomar como techo la renta fijada en el contrato anterior (850 €). La obligación de bajar imperativamente al tope del Índice aplica únicamente a grandes tenedores o a viviendas sin contratos previos en los últimos 5 años.',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Si el Índice marca un precio SUPERIOR al contrato anterior (Ejemplo: Alquilabas a 780 € y el Índice marca 850 €):',
              text: 'En este supuesto, la renta del contrato anterior (780 €) actúa como un techo infranqueable. No puedes incrementar la renta a 850 € escudándote en el Índice. La única excepción para aumentar hasta un 10 % adicional exige acreditar obras importantes de rehabilitación, mejoras de eficiencia energética acreditadas (mínimo 30 %), accesibilidad o la firma de un contrato de larga duración (10+ años).',
              borderCol: '#8FA777',
            },
          },
          {
            id: 2,
            question: '2. ¿Puedo cobrar al inquilino los gastos de IBI, comunidad y tasa de basuras en un contrato nuevo?',
            answerIntroduction: '',
            calloutTop: 'Únicamente si esos mismos gastos ya se encontraban pactados y repercutidos de forma explícita en el contrato anterior.',
            concludingText: 'Si en el contrato previo no se cobraban, pretender introducirlos en un nuevo contrato sujeto a zona tensionada para compensar la limitación del precio se califica legalmente como un aumento fraudulento de la renta y resulta una cláusula nula de pleno derecho (Art. 6 y 20.1 LAU). Si un gasto ya figuraba previamente (por ejemplo, la tasa de basuras), se puede seguir repercutiendo actualizando únicamente su importe según el incremento real devengado del tributo.',
          },
          {
            id: 3,
            question: '3. ¿Se están concediendo licencias turísticas actualmente? ¿Y es real que la licencia "se transmite" al comprar un piso?',
            answerIntroduction: 'Es fundamental distinguir el marco legal real frente a los ganchos publicitarios engañosos:',
            bulletPoints: [
              {
                bold: 'Concesión de nuevas licencias:',
                text: 'En más de 260 municipios catalanes declarados tensionados (incluyendo Sitges, Vilanova, Calafell, Cubelles, etc.), el Decreto Ley 3/2023 congeló la entrega de títulos, exigiendo una licencia urbanística previa sujeta a planes municipales muy restrictivos.',
              },
              {
                bold: 'Comprar un piso con "licencia turística":',
                text: 'La licencia turística no es un título patrimonial que se venda o transfiera automáticamente. Administrativamente solo se realiza un trámite de cambio de titularidad de la actividad, el cual carece de validez si el municipio no permite el uso turístico.',
              },
              {
                bold: 'Caducidad obligatoria en 2028:',
                text: 'Las antiguas licencias que antes se consideraban "vitalicias" han pasado a estar sujetas al régimen transitorio del Decreto Ley 3/2023: caducan obligatoriamente a los 5 años (noviembre de 2028). Para continuar la actividad a partir de esa fecha, el Ayuntamiento deberá otorgar una nueva licencia urbanística bajo su planeamiento.',
              },
            ],
            concludingText: 'Antes de formalizar la compra de una propiedad turística en el Garraf o Costa Daurada, en Golden Coast realizamos una auditoría urbanística previa para comprobar si la actividad se mantendrá legalmente.',
          },
          {
            id: 4,
            question: '4. ¿Puedo contratar únicamente servicios puntuales para mi alquiler vacacional o de temporada sin delegar la gestión integral?',
            answerIntroduction: 'Sí. En Golden Coast adaptamos la propuesta a lo que realmente necesitas. En alquiler vacacional (hasta 31 noches) y en alquiler de temporada (desde 32 noches o 1 mes hasta 12 meses) en municipios como Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell y Calafell, puedes contratar la gestión integral 360° o solicitar servicios a la carta: recepción y entrega de llaves (check-in/check-out), elaboración de contratos de temporada conforme a ley, inventarios con control de suministros, servicio de limpieza y lavandería o atención de incidencias 24/7.',
          },
          {
            id: 5,
            question: '5. Si vivo fuera (Madrid, Alemania, Reino Unido...), ¿cómo gestiona Golden Coast mi propiedad sin que yo tenga que desplazarme?',
            answerIntroduction: 'Ofrecemos un servicio de gestión integral "llave en mano" diseñado para propietarios con residencia remota o internacional:',
            bulletPoints: [
              {
                bold: 'Gestión a distancia:',
                text: 'Realizamos la valoración, preparación del inmueble, reportajes y selección de candidatos con total transparencia y comunicación constante.',
              },
              {
                bold: 'Firma Digital Avanzada:',
                text: 'Coordinamos las reuniones por videoconferencia, la entrega de llaves y la firma del contrato mediante herramientas de firma digital avanzada con plena validez y seguridad jurídica (Reglamento EIDAS), sin necesidad de desplazamientos ni trámites presenciales.',
              },
              {
                bold: 'Administración Total:',
                text: 'Tramitamos el depósito de fianzas en el INCASÒL, cobros, liquidaciones y mantenimiento, ofreciendo un seguimiento periódico para tu total tranquilidad.',
              },
            ],
          },
        ],
      },
      {
        blockNumber: 'BLOQUE 2',
        blockTitle: 'Bloque 2: Venta de Propiedades, Valoración y Home Staging',
        buttonLabel: '2. Venta, Valoración y Staging',
        items: [
          {
            id: 6,
            question: '6. ¿Cómo calculáis el valor real de mercado de mi vivienda para venderla al mejor precio?',
            answerIntroduction: 'A diferencia de las valoraciones automáticas de portales inmobiliarios basadas en precios de oferta inflados, en Golden Coast combinamos nuestra capacitación como Peritos Judiciales Inmobiliarios y API con un análisis comparativo de transacciones reales cerradas en el Registro de la Propiedad. Evaluamos el estado técnico, la situación legal, la eficiencia energética y la demanda solvente activa para fijar un precio competitivo que maximice el rendimiento financiero sin estancar la propiedad.',
          },
          {
            id: 7,
            question: '7. ¿Por qué es indispensable preparar la vivienda (Home Staging) antes de hacer las fotos y publicarla?',
            answerIntroduction: 'La primera impresión determina el valor percibido. Publicar una propiedad con desorden, sobrecargada o con fotografía no profesional genera ofertas a la baja y prolonga el tiempo en el mercado. Un trabajo planificado de despersonalización, orden y preparación estética (Home Staging) combinado con fotografía profesional resalta el potencial del espacio, atrae a compradores cualificados y permite cerrar la venta al mejor precio posible.',
          },
          {
            id: 8,
            question: '8. ¿En cuánto tiempo se vende una propiedad si la gestión se hace correctamente desde el primer día?',
            answerIntroduction: 'Una propiedad con una valoración técnica rigurosa, una puesta a punto impecable y una estrategia de comercialización dirigida no debe tardar más de 3 meses en venderse. Superar este plazo suele ser síntoma de un error en la fijación de precio inicial o en la presentación y filtrado del cliente comprador.',
          },
        ],
      },
      {
        blockNumber: 'BLOQUE 3',
        blockTitle: 'Bloque 3: Servicio al Comprador, Reubicación (Relocation) y Seguridad Jurídica',
        buttonLabel: '3. Comprador, Relocation y Legal',
        items: [
          {
            id: 9,
            question: '9. Si quiero COMPRAR una vivienda en el Garraf o Costa Daurada, ¿cómo me ayuda Golden Coast?',
            answerIntroduction: 'Actuamos como tu Personal Shopper Inmobiliario para proteger tus intereses frente a las agencias vendedoras. Analizamos tus necesidades y presupuesto, realizamos la búsqueda personalizada, filtramos las opciones que realmente encajan, auditamos la documentación legal de la finca (cargas, nota simple, situación urbanística) y negociamos el mejor precio y condiciones en tu nombre hasta la firma en notaría.',
          },
          {
            id: 10,
            question: '10. Vengo a vivir o invertir desde el extranjero o de otra comunidad, ¿en qué consiste el Servicio de Reubicación (Relocation)?',
            answerIntroduction: 'Mudarse implica mucho más que encontrar una casa. Nuestro servicio de Relocation acompaña a clientes e inversores internacionales (Reino Unido, Alemania, Francia...) y nacionales durante todo el proceso de llegada a España:',
            bulletPoints: [
              {
                bold: 'Asesoramiento de zona:',
                text: 'Elección de la zona según tu perfil personal, familiar y estilo de vida.',
              },
              {
                bold: 'Búsqueda de vivienda:',
                text: 'Adquisición, alquiler de temporada o larga duración según tus necesidades.',
              },
              {
                bold: 'Coordinación legal y administrativa:',
                text: 'Trámites de NIE, apertura de cuentas bancarias y asesoría fiscal asociada.',
              },
              {
                bold: 'Acompañamiento posterior:',
                text: 'Búsqueda de colegios, suministros y contratación de servicios de confianza.',
              },
            ],
          },
          {
            id: 11,
            question: '11. ¿Qué documentos y requisitos legales son estrictamente obligatorios para alquilar o vender un inmueble en Cataluña?',
            answerIntroduction: 'La normativa catalana exige un expediente documental riguroso:',
            callout1: {
              title: 'Para Venta o Alquiler:',
              text: 'Es obligatorio disponer de la Cédula de Habitabilidad vigente (cuyo número de registro debe constar en contratos según Ley 18/2007) y el Certificado de Eficiencia Energética (CEE).',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Para Alquiler:',
              text: 'Es imperativo el justificante del depósito de la fianza en el INCASÒL (Decreto Ley 14/2010), el certificado oficial del Índice de Referencia de Precios en zonas tensionadas y el desglose contractual de gastos.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 12,
            question: '12. ¿En qué consiste el servicio de doble check jurídico y pericial de Golden Coast frente a una inmobiliaria tradicional?',
            answerIntroduction: 'La mayoría de agencias intermediarias emplean contratos estándar y descuidan la comprobación técnica. En Golden Coast operamos con el rigor de un despacho pericial inmobiliario: auditamos el historial de contratos anteriores, comprobamos notas simples, cargas, estatutos de comunidad, concordancia catastral y la normativa vigente (LAU y contención de rentas). Redactamos contratos a medida para garantizar que la operación sea inatacable jurídicamente.',
          },
        ],
      },
    ],
  },
  en: {
    headerEyebrow: 'FREQUENTLY ASKED QUESTIONS · GOLDEN COAST',
    headerTitle: 'Clear answers and legal rigour for every question.',
    headerSubtitle: 'Transparent information is the foundation of peace of mind. Here we answer the most common questions about managing, buying, selling and renting property.',
    expandAll: 'Open all',
    collapseAll: 'Close all',
    answerLabel: 'Answer:',
    bottomEyebrow: 'RIGOROUS ADVICE',
    bottomTitle: 'Do you have a specific question about your property?',
    bottomSubtitle: 'Every property situation is unique. I review your case confidentially and with no obligation, to give you the highest level of technical and legal certainty.',
    bottomBtn: 'Ask Valeria a question',
    blocks: [
      {
        blockNumber: 'PART 1',
        blockTitle: 'Part 1: Rentals (Holiday, Seasonal and Long-Term) and Regulations',
        buttonLabel: '1. Rentals & Regulations',
        items: [
          {
            id: 1,
            question: '1. If my flat is in a stressed housing market area (zona tensionada), do I have to lower the rent to the Reference Index price? Or can I raise it if the Index is higher than what I was charging?',
            answerIntroduction: 'It depends on your profile as a landlord and on the property’s rental history (Law 12/2023 on the Right to Housing and the Spanish Urban Leases Act, LAU):',
            callout1: {
              title: 'If the Index is LOWER than the previous contract (example: you rented at €850 and the Index says €780):',
              text: 'If you are a small landlord (fewer than 5 or 10 properties, depending on how the area is defined) and the property has been let in the last 5 years, you are NOT required to lower the initial rent to €780. The law allows you to take the rent set in the previous contract (€850) as the ceiling. The obligation to lower the rent to the Index cap applies only to large landlords or to properties with no previous contracts in the last 5 years.',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'If the Index is HIGHER than the previous contract (example: you rented at €780 and the Index says €850):',
              text: 'In this case, the rent in the previous contract (€780) is a ceiling you cannot exceed. You cannot raise the rent to €850 on the basis of the Index. The only exception, allowing up to an additional 10%, requires proof of major renovation work, certified energy-efficiency improvements (at least 30%), accessibility works, or the signing of a long-term contract (10+ years).',
              borderCol: '#8FA777',
            },
          },
          {
            id: 2,
            question: '2. Can I charge the tenant for IBI (property tax), community fees and the waste collection charge in a new contract?',
            answerIntroduction: '',
            calloutTop: 'Only if those same costs were already explicitly agreed and passed on to the tenant in the previous contract.',
            concludingText: 'If they were not charged in the previous contract, adding them to a new contract in a stressed market area to make up for the rent cap is legally treated as a fraudulent rent increase, and the clause is null and void (Articles 6 and 20.1 LAU). If a cost was already included before (for example, the waste collection charge), it can still be passed on, updating only its amount in line with the actual increase in that tax.',
          },
          {
            id: 3,
            question: '3. Are tourist licences currently being granted? And is it true that the licence "transfers" when you buy a flat?',
            answerIntroduction: 'It is essential to separate the real legal framework from misleading sales pitches:',
            bulletPoints: [
              {
                bold: 'Granting of new licences:',
                text: 'In more than 260 Catalan municipalities declared stressed (including Sitges, Vilanova, Calafell, Cubelles, etc.), Decree-Law 3/2023 froze the issuing of registrations, requiring prior planning permission subject to very restrictive municipal plans.',
              },
              {
                bold: 'Buying a flat "with a tourist licence":',
                text: 'A tourist licence is not a property right that can be sold or transferred automatically. Administratively, only a change in the holder of the activity is processed, and it has no validity if the municipality does not allow tourist use.',
              },
              {
                bold: 'Mandatory expiry in 2028:',
                text: 'Old licences that used to be considered "for life" are now subject to the transitional regime of Decree-Law 3/2023: they expire automatically after 5 years (November 2028). To continue the activity after that date, the town hall must grant a new planning licence under its urban plan.',
              },
            ],
            concludingText: 'Before completing the purchase of a holiday-rental property in the Garraf or on the Costa Daurada, Golden Coast carries out a prior planning audit to check whether the activity can legally continue.',
          },
          {
            id: 4,
            question: '4. Can I hire just specific services for my holiday or seasonal rental, without handing over full management?',
            answerIntroduction: 'Yes. At Golden Coast we tailor the proposal to what you really need. For holiday rentals (up to 31 nights) and seasonal rentals (from 32 nights or 1 month up to 12 months) in towns such as Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell and Calafell, you can choose full 360° management or à la carte services: key handover (check-in/check-out), legally compliant seasonal rental contracts, inventories with utility meter readings, cleaning and laundry, or 24/7 incident handling.',
          },
          {
            id: 5,
            question: '5. If I live elsewhere (Madrid, Germany, the UK...), how does Golden Coast manage my property without me having to travel?',
            answerIntroduction: 'We offer a full "turnkey" management service designed for owners who live elsewhere or abroad:',
            bulletPoints: [
              {
                bold: 'Remote management:',
                text: 'We handle the valuation, preparation of the property, photography and tenant selection with complete transparency and constant communication.',
              },
              {
                bold: 'Advanced electronic signature:',
                text: 'We arrange video-call meetings, the key handover and the signing of the contract using advanced electronic signature tools with full legal validity and security (EU eIDAS Regulation), with no need to travel or attend in person.',
              },
              {
                bold: 'Full administration:',
                text: 'We lodge the deposit with INCASÒL (the Catalan land and housing agency), and handle rent collection, settlements and maintenance, with regular updates for your complete peace of mind.',
              },
            ],
          },
        ],
      },
      {
        blockNumber: 'PART 2',
        blockTitle: 'Part 2: Selling Property, Valuation and Home Staging',
        buttonLabel: '2. Sales, Valuation & Staging',
        items: [
          {
            id: 6,
            question: '6. How do you calculate the real market value of my home so I can sell it at the best price?',
            answerIntroduction: 'Unlike the automatic valuations on property portals, which are based on inflated asking prices, Golden Coast combines our qualifications as court-appointed property experts and licensed estate agents (API) with a comparative analysis of real completed transactions recorded at the Land Registry. We assess the technical condition, legal status, energy efficiency and active solvent demand to set a competitive price that maximises your return without leaving the property stuck on the market.',
          },
          {
            id: 7,
            question: '7. Why is it essential to prepare the property (Home Staging) before taking the photos and listing it?',
            answerIntroduction: 'First impressions determine perceived value. Listing a property that is cluttered, overcrowded or poorly photographed brings in low offers and keeps it on the market longer. A planned process of depersonalising, tidying and styling (Home Staging), combined with professional photography, highlights the potential of the space, attracts qualified buyers and makes it possible to sell at the best possible price.',
          },
          {
            id: 8,
            question: '8. How long does it take to sell a property if it is managed correctly from day one?',
            answerIntroduction: 'A property with a rigorous technical valuation, impeccable preparation and a targeted marketing strategy should not take more than 3 months to sell. Going beyond that period usually points to a mistake in the initial asking price or in the presentation and screening of buyers.',
          },
        ],
      },
      {
        blockNumber: 'PART 3',
        blockTitle: 'Part 3: Buyer Services, Relocation and Legal Certainty',
        buttonLabel: '3. Buyers, Relocation & Legal',
        items: [
          {
            id: 9,
            question: '9. If I want to BUY a home in the Garraf or on the Costa Daurada, how does Golden Coast help me?',
            answerIntroduction: 'We act as your property buyer’s agent (Personal Shopper) to protect your interests in front of the selling agencies. We analyse your needs and budget, carry out a personalised search, filter the options that really fit, audit the property’s legal documentation (charges, land registry extract or nota simple, planning status) and negotiate the best price and terms on your behalf through to signing at the notary.',
          },
          {
            id: 10,
            question: '10. I am moving or investing from abroad or from another region of Spain. What does the Relocation service include?',
            answerIntroduction: 'Moving involves much more than finding a house. Our Relocation service supports international clients and investors (UK, Germany, France...) and Spanish clients throughout the whole process of arriving in Spain:',
            bulletPoints: [
              {
                bold: 'Area advice:',
                text: 'Choosing the area that suits your personal and family profile and your lifestyle.',
              },
              {
                bold: 'Home search:',
                text: 'Purchase, seasonal or long-term rental, depending on your needs.',
              },
              {
                bold: 'Legal and administrative coordination:',
                text: 'NIE (foreigner identity number) applications, opening bank accounts and related tax advice.',
              },
              {
                bold: 'Ongoing support:',
                text: 'Finding schools, setting up utilities and hiring trusted service providers.',
              },
            ],
          },
          {
            id: 11,
            question: '11. Which documents and legal requirements are strictly mandatory to rent out or sell a property in Catalonia?',
            answerIntroduction: 'Catalan regulations require a thorough set of documents:',
            callout1: {
              title: 'For sale or rental:',
              text: 'You must have a valid habitability certificate (cédula de habitabilidad), whose registration number must appear in contracts under Law 18/2007, and an Energy Performance Certificate (CEE).',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'For rental:',
              text: 'Proof that the deposit has been lodged with INCASÒL (Decree-Law 14/2010) is mandatory, as is the official Rental Price Reference Index certificate in stressed market areas and an itemised breakdown of costs in the contract.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 12,
            question: '12. What is Golden Coast’s double legal and expert check, compared with a traditional estate agency?',
            answerIntroduction: 'Most agencies use standard contracts and neglect technical checks. Golden Coast works with the rigour of a property expert’s practice: we audit the history of previous contracts and check land registry extracts, charges, community statutes, consistency with the Cadastre and the regulations in force (LAU and rent control). We draft bespoke contracts so that the transaction is legally unchallengeable.',
          },
        ],
      },
    ],
  },
  de: {
    headerEyebrow: 'HÄUFIG GESTELLTE FRAGEN · GOLDEN COAST',
    headerTitle: 'Klare Antworten und juristische Sorgfalt für jede Frage.',
    headerSubtitle: 'Transparente Informationen sind die Grundlage für ein gutes Gefühl. Hier beantworten wir die häufigsten Fragen zu Verwaltung, Kauf, Verkauf und Vermietung von Immobilien.',
    expandAll: 'Alle öffnen',
    collapseAll: 'Alle schließen',
    answerLabel: 'Antwort:',
    bottomEyebrow: 'FUNDIERTE BERATUNG',
    bottomTitle: 'Haben Sie eine konkrete Frage zu Ihrer Immobilie?',
    bottomSubtitle: 'Jede Vermögenssituation ist einzigartig. Ich prüfe Ihren Fall vertraulich und unverbindlich, um Ihnen größtmögliche technische und rechtliche Sicherheit zu geben.',
    bottomBtn: 'Valeria eine Frage stellen',
    blocks: [
      {
        blockNumber: 'TEIL 1',
        blockTitle: 'Teil 1: Vermietung (Ferien-, Zeit- und Langzeitvermietung) und Vorschriften',
        buttonLabel: '1. Vermietung & Vorschriften',
        items: [
          {
            id: 1,
            question: '1. Wenn meine Wohnung in einem Gebiet mit angespanntem Wohnungsmarkt (zona tensionada) liegt: Muss ich die Miete auf den Wert des Referenzindex (Índice de Referencia) senken? Oder darf ich sie erhöhen, wenn der Index über meiner bisherigen Miete liegt?',
            answerIntroduction: 'Das hängt von Ihrem Profil als Vermieter und von der Vermietungsgeschichte der Immobilie ab (Gesetz 12/2023 über das Recht auf Wohnraum und spanisches Mietrechtsgesetz LAU):',
            callout1: {
              title: 'Wenn der Index NIEDRIGER ist als der vorherige Vertrag (Beispiel: Sie haben für 850 € vermietet, der Index liegt bei 780 €):',
              text: 'Wenn Sie ein Kleinvermieter sind (weniger als 5 oder 10 Immobilien, je nach Abgrenzung des Gebiets) und die Wohnung in den letzten 5 Jahren vermietet war, müssen Sie die Anfangsmiete NICHT auf 780 € senken. Das Gesetz erlaubt Ihnen, die im vorherigen Vertrag vereinbarte Miete (850 €) als Obergrenze zu nehmen. Die Pflicht, die Miete auf die Obergrenze des Index zu senken, gilt nur für Großvermieter oder für Wohnungen ohne Mietvertrag in den letzten 5 Jahren.',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Wenn der Index HÖHER ist als der vorherige Vertrag (Beispiel: Sie haben für 780 € vermietet, der Index liegt bei 850 €):',
              text: 'In diesem Fall ist die Miete des vorherigen Vertrags (780 €) eine Obergrenze, die Sie nicht überschreiten dürfen. Sie können die Miete nicht unter Berufung auf den Index auf 850 € erhöhen. Die einzige Ausnahme, die eine Erhöhung um bis zu 10 % zusätzlich erlaubt, setzt den Nachweis umfangreicher Sanierungsarbeiten, nachgewiesener Verbesserungen der Energieeffizienz (mindestens 30 %), barrierefreier Umbauten oder den Abschluss eines langfristigen Vertrags (10 Jahre und mehr) voraus.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 2,
            question: '2. Darf ich dem Mieter in einem neuen Vertrag die Grundsteuer (IBI), das Hausgeld und die Müllgebühr berechnen?',
            answerIntroduction: '',
            calloutTop: 'Nur wenn genau diese Kosten bereits im vorherigen Vertrag ausdrücklich vereinbart und auf den Mieter umgelegt wurden.',
            concludingText: 'Wurden sie im vorherigen Vertrag nicht berechnet, gilt es rechtlich als unzulässige Mieterhöhung, sie in einen neuen Vertrag in einem angespannten Gebiet aufzunehmen, um die Mietpreisgrenze auszugleichen; eine solche Klausel ist von Rechts wegen nichtig (Art. 6 und 20.1 LAU). War eine Position bereits zuvor enthalten (zum Beispiel die Müllgebühr), kann sie weiterhin umgelegt werden, wobei nur ihr Betrag entsprechend der tatsächlichen Erhöhung der Abgabe angepasst wird.',
          },
          {
            id: 3,
            question: '3. Werden derzeit Lizenzen für Ferienwohnungen vergeben? Und stimmt es, dass die Lizenz beim Kauf einer Wohnung „mit übertragen“ wird?',
            answerIntroduction: 'Es ist entscheidend, den tatsächlichen rechtlichen Rahmen von irreführenden Werbeversprechen zu unterscheiden:',
            bulletPoints: [
              {
                bold: 'Vergabe neuer Lizenzen:',
                text: 'In mehr als 260 katalanischen Gemeinden, die als angespannt eingestuft sind (darunter Sitges, Vilanova, Calafell, Cubelles usw.), hat das Gesetzesdekret 3/2023 die Vergabe von Registrierungen eingefroren und verlangt eine vorherige städtebauliche Genehmigung, die an sehr restriktive kommunale Pläne gebunden ist.',
              },
              {
                bold: 'Eine Wohnung „mit Ferienlizenz“ kaufen:',
                text: 'Die Ferienlizenz ist kein Vermögensrecht, das verkauft oder automatisch übertragen werden kann. Verwaltungsrechtlich wird lediglich ein Wechsel des Inhabers der Tätigkeit vorgenommen, der keine Gültigkeit hat, wenn die Gemeinde die touristische Nutzung nicht erlaubt.',
              },
              {
                bold: 'Verpflichtendes Ablaufdatum 2028:',
                text: 'Alte Lizenzen, die früher als „unbefristet“ galten, unterliegen jetzt der Übergangsregelung des Gesetzesdekrets 3/2023: Sie laufen nach 5 Jahren (November 2028) zwingend ab. Um die Tätigkeit danach fortzusetzen, muss die Gemeinde nach ihrer Stadtplanung eine neue städtebauliche Genehmigung erteilen.',
              },
            ],
            concludingText: 'Bevor Sie eine touristisch genutzte Immobilie im Garraf oder an der Costa Daurada kaufen, führt Golden Coast eine vorherige städtebauliche Prüfung durch, um festzustellen, ob die Tätigkeit rechtlich fortgeführt werden kann.',
          },
          {
            id: 4,
            question: '4. Kann ich für meine Ferien- oder Zeitvermietung nur einzelne Leistungen buchen, ohne die gesamte Verwaltung abzugeben?',
            answerIntroduction: 'Ja. Bei Golden Coast passen wir das Angebot an das an, was Sie wirklich brauchen. Bei der Ferienvermietung (bis zu 31 Nächte) und der Zeitvermietung (ab 32 Nächten bzw. 1 Monat bis zu 12 Monaten) in Orten wie Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell und Calafell können Sie die 360°-Rundumverwaltung wählen oder Leistungen à la carte buchen: Schlüsselübergabe (Check-in/Check-out), rechtskonforme Zeitmietverträge, Inventarlisten mit Zählerständen, Reinigung und Wäscheservice oder 24/7-Störungsdienst.',
          },
          {
            id: 5,
            question: '5. Wenn ich woanders lebe (Madrid, Deutschland, Großbritannien …), wie verwaltet Golden Coast meine Immobilie, ohne dass ich anreisen muss?',
            answerIntroduction: 'Wir bieten eine schlüsselfertige Rundumverwaltung für Eigentümer, die woanders oder im Ausland leben:',
            bulletPoints: [
              {
                bold: 'Verwaltung aus der Ferne:',
                text: 'Wir übernehmen Bewertung, Vorbereitung der Immobilie, Fotos und Mieterauswahl mit voller Transparenz und ständiger Kommunikation.',
              },
              {
                bold: 'Fortgeschrittene elektronische Signatur:',
                text: 'Wir organisieren Videokonferenzen, die Schlüsselübergabe und die Vertragsunterzeichnung mit fortgeschrittener elektronischer Signatur mit voller Rechtsgültigkeit und Sicherheit (EU-Verordnung eIDAS), ohne Anreise und ohne persönliche Termine.',
              },
              {
                bold: 'Komplette Verwaltung:',
                text: 'Wir hinterlegen die Kaution beim INCASÒL (katalanische Boden- und Wohnungsbehörde), kümmern uns um Mieteinzug, Abrechnungen und Instandhaltung und berichten Ihnen regelmäßig, damit Sie ganz beruhigt sein können.',
              },
            ],
          },
        ],
      },
      {
        blockNumber: 'TEIL 2',
        blockTitle: 'Teil 2: Immobilienverkauf, Bewertung und Home Staging',
        buttonLabel: '2. Verkauf, Bewertung & Staging',
        items: [
          {
            id: 6,
            question: '6. Wie ermitteln Sie den tatsächlichen Marktwert meiner Wohnung, damit ich sie zum besten Preis verkaufe?',
            answerIntroduction: 'Anders als die automatischen Bewertungen von Immobilienportalen, die auf überhöhten Angebotspreisen beruhen, verbindet Golden Coast unsere Qualifikation als gerichtliche Immobiliensachverständige und zugelassene Makler (API) mit einer Vergleichsanalyse tatsächlich abgeschlossener, im Grundbuch eingetragener Verkäufe. Wir bewerten den technischen Zustand, die rechtliche Situation, die Energieeffizienz und die aktive zahlungsfähige Nachfrage, um einen wettbewerbsfähigen Preis festzulegen, der den Ertrag maximiert, ohne dass die Immobilie lange auf dem Markt bleibt.',
          },
          {
            id: 7,
            question: '7. Warum ist es unerlässlich, die Immobilie vor den Fotos und der Veröffentlichung vorzubereiten (Home Staging)?',
            answerIntroduction: 'Der erste Eindruck bestimmt den wahrgenommenen Wert. Eine unordentliche, überladene oder schlecht fotografierte Immobilie zieht niedrige Angebote an und bleibt länger auf dem Markt. Eine geplante Entpersonalisierung, Ordnung und ästhetische Vorbereitung (Home Staging) in Verbindung mit professionellen Fotos hebt das Potenzial der Räume hervor, zieht qualifizierte Käufer an und ermöglicht den Verkauf zum bestmöglichen Preis.',
          },
          {
            id: 8,
            question: '8. Wie schnell lässt sich eine Immobilie verkaufen, wenn sie vom ersten Tag an richtig betreut wird?',
            answerIntroduction: 'Eine Immobilie mit einer sorgfältigen technischen Bewertung, einer tadellosen Vorbereitung und einer gezielten Vermarktungsstrategie sollte nicht länger als 3 Monate für den Verkauf brauchen. Dauert es länger, deutet das meist auf einen Fehler beim ursprünglichen Angebotspreis oder bei der Präsentation und der Auswahl der Käufer hin.',
          },
        ],
      },
      {
        blockNumber: 'TEIL 3',
        blockTitle: 'Teil 3: Service für Käufer, Relocation und Rechtssicherheit',
        buttonLabel: '3. Käufer, Relocation & Recht',
        items: [
          {
            id: 9,
            question: '9. Wenn ich im Garraf oder an der Costa Daurada eine Wohnung KAUFEN möchte, wie hilft mir Golden Coast?',
            answerIntroduction: 'Wir handeln als Ihr persönlicher Immobilienberater auf Käuferseite (Personal Shopper) und schützen Ihre Interessen gegenüber den Verkaufsmaklern. Wir analysieren Ihre Bedürfnisse und Ihr Budget, suchen gezielt, filtern die wirklich passenden Optionen, prüfen die rechtlichen Unterlagen der Immobilie (Belastungen, Grundbuchauszug bzw. nota simple, städtebauliche Situation) und verhandeln in Ihrem Namen den besten Preis und die besten Bedingungen bis zur Unterzeichnung beim Notar.',
          },
          {
            id: 10,
            question: '10. Ich ziehe aus dem Ausland oder aus einer anderen spanischen Region hierher oder möchte investieren. Was umfasst der Relocation-Service?',
            answerIntroduction: 'Ein Umzug bedeutet viel mehr, als ein Haus zu finden. Unser Relocation-Service begleitet internationale Kunden und Investoren (Großbritannien, Deutschland, Frankreich …) sowie spanische Kunden während des gesamten Ankommens in Spanien:',
            bulletPoints: [
              {
                bold: 'Beratung zur Lage:',
                text: 'Auswahl der Gegend passend zu Ihrem persönlichen und familiären Profil und Ihrem Lebensstil.',
              },
              {
                bold: 'Wohnungssuche:',
                text: 'Kauf, Zeit- oder Langzeitmiete, je nach Ihren Bedürfnissen.',
              },
              {
                bold: 'Rechtliche und behördliche Koordination:',
                text: 'Beantragung der NIE (Ausländer-Identifikationsnummer), Eröffnung von Bankkonten und zugehörige Steuerberatung.',
              },
              {
                bold: 'Begleitung danach:',
                text: 'Suche nach Schulen, Anmeldung von Strom, Wasser und Gas sowie Vermittlung vertrauenswürdiger Dienstleister.',
              },
            ],
          },
          {
            id: 11,
            question: '11. Welche Unterlagen und rechtlichen Voraussetzungen sind zwingend, um eine Immobilie in Katalonien zu vermieten oder zu verkaufen?',
            answerIntroduction: 'Die katalanischen Vorschriften verlangen vollständige Unterlagen:',
            callout1: {
              title: 'Für Verkauf oder Vermietung:',
              text: 'Erforderlich sind eine gültige Bewohnbarkeitsbescheinigung (cédula de habitabilidad), deren Registernummer nach dem Gesetz 18/2007 im Vertrag stehen muss, und ein Energieausweis (CEE).',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Für die Vermietung:',
              text: 'Zwingend sind der Nachweis über die Hinterlegung der Kaution beim INCASÒL (Gesetzesdekret 14/2010), die offizielle Bescheinigung des Mietpreis-Referenzindex in angespannten Gebieten und die Aufschlüsselung der Kosten im Vertrag.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 12,
            question: '12. Was ist der doppelte rechtliche und gutachterliche Check von Golden Coast im Vergleich zu einem klassischen Maklerbüro?',
            answerIntroduction: 'Die meisten Makler verwenden Standardverträge und vernachlässigen die technische Prüfung. Golden Coast arbeitet mit der Sorgfalt eines Immobiliengutachterbüros: Wir prüfen die Historie früherer Verträge, Grundbuchauszüge, Belastungen, die Satzung der Eigentümergemeinschaft, die Übereinstimmung mit dem Kataster sowie die geltenden Vorschriften (LAU und Mietpreisbegrenzung). Wir erstellen maßgeschneiderte Verträge, damit das Geschäft rechtlich unangreifbar ist.',
          },
        ],
      },
    ],
  },
  fr: {
    headerEyebrow: 'QUESTIONS FRÉQUENTES · GOLDEN COAST',
    headerTitle: 'Des réponses claires et une rigueur juridique pour chaque question.',
    headerSubtitle: 'Une information transparente est la base de la sérénité. Nous répondons ici aux questions les plus fréquentes sur la gestion, l’achat, la vente et la location de biens immobiliers.',
    expandAll: 'Tout ouvrir',
    collapseAll: 'Tout fermer',
    answerLabel: 'Réponse :',
    bottomEyebrow: 'CONSEIL RIGOUREUX',
    bottomTitle: 'Vous avez une question précise sur votre bien ?',
    bottomSubtitle: 'Chaque situation patrimoniale est unique. J’analyse votre cas de façon confidentielle et sans engagement, pour vous offrir le plus haut niveau de sécurité technique et juridique.',
    bottomBtn: 'Poser une question à Valeria',
    blocks: [
      {
        blockNumber: 'PARTIE 1',
        blockTitle: 'Partie 1 : Locations (saisonnière, temporaire et longue durée) et réglementation',
        buttonLabel: '1. Locations et réglementation',
        items: [
          {
            id: 1,
            question: '1. Si mon appartement se trouve en zone tendue (zona tensionada), suis-je obligé de baisser le loyer au prix de l’Indice de référence (Índice de Referencia) ? Ou puis-je l’augmenter si l’Indice est supérieur à ce que je demandais ?',
            answerIntroduction: 'Cela dépend de votre profil de propriétaire et de l’historique locatif du bien (loi 12/2023 sur le droit au logement et loi espagnole sur les baux urbains, LAU) :',
            callout1: {
              title: 'Si l’Indice est INFÉRIEUR au contrat précédent (exemple : vous louiez 850 € et l’Indice indique 780 €) :',
              text: 'Si vous êtes un petit propriétaire (moins de 5 ou 10 biens selon la délimitation de la zone) et que le logement a été loué au cours des 5 dernières années, vous n’êtes PAS obligé de baisser le loyer initial à 780 €. La loi vous autorise à prendre comme plafond le loyer fixé dans le contrat précédent (850 €). L’obligation de baisser impérativement au plafond de l’Indice ne s’applique qu’aux grands propriétaires ou aux logements sans contrat de location au cours des 5 dernières années.',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Si l’Indice est SUPÉRIEUR au contrat précédent (exemple : vous louiez 780 € et l’Indice indique 850 €) :',
              text: 'Dans ce cas, le loyer du contrat précédent (780 €) est un plafond infranchissable. Vous ne pouvez pas porter le loyer à 850 € en invoquant l’Indice. La seule exception, permettant une hausse supplémentaire de 10 % au maximum, exige de justifier d’importants travaux de rénovation, d’améliorations de la performance énergétique attestées (au moins 30 %), de travaux d’accessibilité ou de la signature d’un bail de longue durée (10 ans ou plus).',
              borderCol: '#8FA777',
            },
          },
          {
            id: 2,
            question: '2. Puis-je refacturer au locataire la taxe foncière (IBI), les charges de copropriété et la taxe d’ordures ménagères dans un nouveau contrat ?',
            answerIntroduction: '',
            calloutTop: 'Uniquement si ces mêmes frais étaient déjà expressément prévus et refacturés au locataire dans le contrat précédent.',
            concludingText: 'S’ils n’étaient pas facturés dans le contrat précédent, vouloir les introduire dans un nouveau contrat soumis à la zone tendue pour compenser le plafonnement du loyer est juridiquement qualifié d’augmentation frauduleuse du loyer, et la clause est nulle de plein droit (art. 6 et 20.1 LAU). Si une charge figurait déjà auparavant (par exemple la taxe d’ordures ménagères), elle peut continuer à être refacturée, en actualisant seulement son montant selon la hausse réelle de la taxe.',
          },
          {
            id: 3,
            question: '3. Des licences touristiques sont-elles accordées actuellement ? Et est-il vrai que la licence « se transmet » lors de l’achat d’un appartement ?',
            answerIntroduction: 'Il est essentiel de distinguer le cadre juridique réel des arguments commerciaux trompeurs :',
            bulletPoints: [
              {
                bold: 'Octroi de nouvelles licences :',
                text: 'Dans plus de 260 communes catalanes déclarées tendues (dont Sitges, Vilanova, Calafell, Cubelles, etc.), le décret-loi 3/2023 a gelé la délivrance des enregistrements et exige une licence d’urbanisme préalable soumise à des plans municipaux très restrictifs.',
              },
              {
                bold: 'Acheter un appartement « avec licence touristique » :',
                text: 'La licence touristique n’est pas un droit patrimonial qui se vend ou se transmet automatiquement. Sur le plan administratif, seul un changement de titulaire de l’activité est effectué, et il n’a aucune validité si la commune n’autorise pas l’usage touristique.',
              },
              {
                bold: 'Expiration obligatoire en 2028 :',
                text: 'Les anciennes licences autrefois considérées comme « à vie » relèvent désormais du régime transitoire du décret-loi 3/2023 : elles expirent obligatoirement au bout de 5 ans (novembre 2028). Pour poursuivre l’activité après cette date, la mairie devra accorder une nouvelle licence d’urbanisme selon son plan d’urbanisme.',
              },
            ],
            concludingText: 'Avant de finaliser l’achat d’un bien à usage touristique dans le Garraf ou sur la Costa Daurada, Golden Coast réalise un audit urbanistique préalable pour vérifier si l’activité pourra légalement se poursuivre.',
          },
          {
            id: 4,
            question: '4. Puis-je recourir uniquement à des services ponctuels pour ma location saisonnière ou temporaire, sans déléguer la gestion complète ?',
            answerIntroduction: 'Oui. Chez Golden Coast, nous adaptons la proposition à vos besoins réels. Pour la location saisonnière (jusqu’à 31 nuits) et la location temporaire (à partir de 32 nuits ou 1 mois, jusqu’à 12 mois) dans des communes comme Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell et Calafell, vous pouvez choisir la gestion complète à 360° ou des services à la carte : remise des clés (check-in/check-out), contrats de location temporaire conformes à la loi, états des lieux avec relevé des compteurs, ménage et blanchisserie, ou gestion des incidents 24 h/24 et 7 j/7.',
          },
          {
            id: 5,
            question: '5. Si je vis ailleurs (Madrid, Allemagne, Royaume-Uni…), comment Golden Coast gère-t-il mon bien sans que j’aie à me déplacer ?',
            answerIntroduction: 'Nous proposons une gestion complète « clés en main » pensée pour les propriétaires qui résident ailleurs ou à l’étranger :',
            bulletPoints: [
              {
                bold: 'Gestion à distance :',
                text: 'Nous réalisons l’estimation, la préparation du bien, les photos et la sélection des candidats en toute transparence et avec une communication constante.',
              },
              {
                bold: 'Signature électronique avancée :',
                text: 'Nous organisons les rendez-vous en visioconférence, la remise des clés et la signature du contrat au moyen d’outils de signature électronique avancée ayant pleine valeur et sécurité juridiques (règlement européen eIDAS), sans déplacement ni démarche en personne.',
              },
              {
                bold: 'Administration complète :',
                text: 'Nous déposons la caution auprès de l’INCASÒL (organisme catalan du foncier et du logement), gérons l’encaissement des loyers, les décomptes et l’entretien, avec un suivi régulier pour votre totale tranquillité.',
              },
            ],
          },
        ],
      },
      {
        blockNumber: 'PARTIE 2',
        blockTitle: 'Partie 2 : Vente de biens, estimation et home staging',
        buttonLabel: '2. Vente, estimation et staging',
        items: [
          {
            id: 6,
            question: '6. Comment calculez-vous la valeur réelle de mon logement pour le vendre au meilleur prix ?',
            answerIntroduction: 'Contrairement aux estimations automatiques des portails immobiliers, fondées sur des prix affichés gonflés, Golden Coast associe nos qualifications d’experts judiciaires immobiliers et d’agents immobiliers agréés (API) à une analyse comparative des ventes réellement conclues et inscrites au registre de la propriété. Nous évaluons l’état technique, la situation juridique, la performance énergétique et la demande solvable active afin de fixer un prix compétitif qui maximise votre rendement sans que le bien reste bloqué sur le marché.',
          },
          {
            id: 7,
            question: '7. Pourquoi est-il indispensable de préparer le logement (home staging) avant de faire les photos et de le publier ?',
            answerIntroduction: 'La première impression détermine la valeur perçue. Publier un bien en désordre, surchargé ou mal photographié attire des offres à la baisse et allonge le délai de vente. Un travail planifié de dépersonnalisation, de rangement et de mise en valeur (home staging), associé à des photos professionnelles, fait ressortir le potentiel des espaces, attire des acheteurs qualifiés et permet de vendre au meilleur prix possible.',
          },
          {
            id: 8,
            question: '8. En combien de temps un bien se vend-il si la gestion est bien faite dès le premier jour ?',
            answerIntroduction: 'Un bien bénéficiant d’une estimation technique rigoureuse, d’une préparation impeccable et d’une stratégie de commercialisation ciblée ne devrait pas mettre plus de 3 mois à se vendre. Au-delà, c’est généralement le signe d’une erreur dans le prix de départ ou dans la présentation et la sélection des acheteurs.',
          },
        ],
      },
      {
        blockNumber: 'PARTIE 3',
        blockTitle: 'Partie 3 : Service aux acheteurs, relocation et sécurité juridique',
        buttonLabel: '3. Acheteurs, relocation et juridique',
        items: [
          {
            id: 9,
            question: '9. Si je veux ACHETER un logement dans le Garraf ou sur la Costa Daurada, comment Golden Coast m’aide-t-il ?',
            answerIntroduction: 'Nous agissons comme votre chasseur immobilier (Personal Shopper) pour défendre vos intérêts face aux agences des vendeurs. Nous analysons vos besoins et votre budget, menons une recherche personnalisée, sélectionnons les options qui vous correspondent vraiment, vérifions les documents juridiques du bien (charges, extrait du registre foncier ou nota simple, situation urbanistique) et négocions en votre nom le meilleur prix et les meilleures conditions jusqu’à la signature chez le notaire.',
          },
          {
            id: 10,
            question: '10. Je viens vivre ou investir depuis l’étranger ou une autre région d’Espagne : en quoi consiste le service de relocation ?',
            answerIntroduction: 'Déménager implique bien plus que trouver une maison. Notre service de relocation accompagne les clients et investisseurs internationaux (Royaume-Uni, Allemagne, France…) et espagnols tout au long de leur arrivée en Espagne :',
            bulletPoints: [
              {
                bold: 'Conseil sur la zone :',
                text: 'Choix du secteur selon votre profil personnel et familial et votre style de vie.',
              },
              {
                bold: 'Recherche de logement :',
                text: 'Achat, location temporaire ou de longue durée selon vos besoins.',
              },
              {
                bold: 'Coordination juridique et administrative :',
                text: 'Démarches de NIE (numéro d’identification des étrangers), ouverture de comptes bancaires et conseil fiscal associé.',
              },
              {
                bold: 'Accompagnement ensuite :',
                text: 'Recherche d’écoles, ouverture des compteurs et mise en relation avec des prestataires de confiance.',
              },
            ],
          },
          {
            id: 11,
            question: '11. Quels documents et obligations légales sont strictement obligatoires pour louer ou vendre un bien en Catalogne ?',
            answerIntroduction: 'La réglementation catalane exige un dossier documentaire rigoureux :',
            callout1: {
              title: 'Pour la vente ou la location :',
              text: 'Il est obligatoire de disposer d’un certificat d’habitabilité (cédula de habitabilidad) en cours de validité, dont le numéro d’enregistrement doit figurer dans les contrats selon la loi 18/2007, et d’un certificat de performance énergétique (CEE).',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Pour la location :',
              text: 'Sont impératifs le justificatif du dépôt de la caution auprès de l’INCASÒL (décret-loi 14/2010), le certificat officiel de l’Indice de référence des loyers en zone tendue et le détail des charges dans le contrat.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 12,
            question: '12. En quoi consiste le double contrôle juridique et d’expertise de Golden Coast par rapport à une agence immobilière traditionnelle ?',
            answerIntroduction: 'La plupart des agences utilisent des contrats types et négligent la vérification technique. Golden Coast travaille avec la rigueur d’un cabinet d’expertise immobilière : nous vérifions l’historique des contrats précédents, les extraits du registre foncier, les charges, le règlement de copropriété, la concordance avec le cadastre et la réglementation en vigueur (LAU et encadrement des loyers). Nous rédigeons des contrats sur mesure pour que l’opération soit juridiquement inattaquable.',
          },
        ],
      },
    ],
  },
  zh: {
    headerEyebrow: '常见问题 · GOLDEN COAST',
    headerTitle: '每个疑问，都有清晰的答案和严谨的法律依据。',
    headerSubtitle: '透明的信息是安心的基础。我们在这里解答关于房产管理、买卖和出租最常见的问题。',
    expandAll: '全部展开',
    collapseAll: '全部收起',
    answerLabel: '解答：',
    bottomEyebrow: '严谨的专业咨询',
    bottomTitle: '关于您的房产，有具体问题想咨询吗？',
    bottomSubtitle: '每一个资产情况都是独特的。我会以保密、无任何义务的方式分析您的情况，为您提供最高程度的技术与法律保障。',
    bottomBtn: '向 Valeria 咨询',
    blocks: [
      {
        blockNumber: '第一部分',
        blockTitle: '第一部分：出租（度假、短期与长期）及相关法规',
        buttonLabel: '1. 出租与法规',
        items: [
          {
            id: 1,
            question: '1. 如果我的房子位于“住房市场紧张区”（zona tensionada），我是否必须把租金降到参考指数（Índice de Referencia）的价格？如果指数高于我原来的租金，我可以涨租吗？',
            answerIntroduction: '这取决于您作为业主的类型以及房产的出租历史（《住房权法》第 12/2023 号法律及《城市租赁法》LAU）：',
            callout1: {
              title: '如果参考指数低于上一份合同的租金（例如：您原来租 850 欧元，指数为 780 欧元）：',
              text: '如果您是小业主（根据所在区域的划定，拥有少于 5 套或 10 套房产），并且该房产在过去 5 年内曾经出租，您并不需要把起始租金降到 780 欧元。法律允许您以上一份合同约定的租金（850 欧元）作为上限。必须强制降到指数上限的义务，只适用于大业主，或过去 5 年内没有任何租赁合同的房产。',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: '如果参考指数高于上一份合同的租金（例如：您原来租 780 欧元，指数为 850 欧元）：',
              text: '在这种情况下，上一份合同的租金（780 欧元）是不可突破的上限。您不能以指数为理由把租金提高到 850 欧元。唯一允许最多额外上调 10% 的例外，需要证明进行了重要的翻修工程、经证明的能效提升（至少 30%）、无障碍改造，或签订了长期合同（10 年以上）。',
              borderCol: '#8FA777',
            },
          },
          {
            id: 2,
            question: '2. 在新合同中，我可以向租客收取房产税（IBI）、物业费和垃圾处理费吗？',
            answerIntroduction: '',
            calloutTop: '只有在上一份合同中已经明确约定并由租客承担这些费用的情况下才可以。',
            concludingText: '如果上一份合同中没有收取这些费用，在受住房市场紧张区限制的新合同中加入这些费用来弥补租金上限，在法律上属于变相违规涨租，相关条款依法完全无效（《城市租赁法》LAU 第 6 条和第 20.1 条）。如果某项费用之前已经约定（例如垃圾处理费），可以继续由租客承担，但只能按该税费实际产生的涨幅更新金额。',
          },
          {
            id: 3,
            question: '3. 目前还在发放旅游出租许可证吗？买房时许可证会“随房转让”，这是真的吗？',
            answerIntroduction: '必须把真实的法律框架和具有误导性的广告噱头区分开来：',
            bulletPoints: [
              {
                bold: '新许可证的发放：',
                text: '在加泰罗尼亚 260 多个被认定为住房紧张的市镇（包括锡切斯、维拉诺瓦、卡拉费尔、库贝列斯等），第 3/2023 号法令冻结了许可证的发放，要求事先取得城市规划许可，而且受非常严格的市政规划约束。',
              },
              {
                bold: '购买带“旅游许可证”的房子：',
                text: '旅游许可证并不是一种可以出售或自动转让的财产权利。在行政上，只是办理经营活动的持有人变更手续；如果所在市镇不允许旅游用途，这一手续就没有效力。',
              },
              {
                bold: '2028 年强制到期：',
                text: '过去被视为“终身有效”的旧许可证，现在适用第 3/2023 号法令的过渡制度：自生效起 5 年后（2028 年 11 月）强制到期。如果之后要继续经营，市政府必须根据其城市规划重新发放城市规划许可。',
              },
            ],
            concludingText: '在加拉夫（Garraf）或黄金海岸（Costa Daurada）正式购买旅游出租房产之前，Golden Coast 会先进行城市规划审查，确认该经营活动在法律上能否继续。',
          },
          {
            id: 4,
            question: '4. 对于度假出租或短期出租，我可以只购买单项服务，而不委托全面管理吗？',
            answerIntroduction: '可以。Golden Coast 会根据您真正的需要量身定制方案。在锡切斯、维拉诺瓦（Vilanova i la Geltrú）、库贝列斯、库尼特、塞古尔德卡拉费尔（Segur de Calafell）和卡拉费尔等市镇，无论是度假出租（最长 31 晚），还是短期出租（32 晚或 1 个月起，最长 12 个月），您都可以选择 360° 全面管理，或按需选择单项服务：钥匙交接（入住/退房）、依法起草短期租赁合同、含水电气读数的物品清单、清洁与洗衣服务，或 24/7 故障处理。',
          },
          {
            id: 5,
            question: '5. 如果我住在其他地方（马德里、德国、英国……），Golden Coast 如何在我无需亲自前来的情况下管理我的房产？',
            answerIntroduction: '我们为身在外地或海外的业主提供“交钥匙式”的全面管理服务：',
            bulletPoints: [
              {
                bold: '远程管理：',
                text: '我们负责房产估价、出租前的准备、拍摄以及租客筛选，全程透明，并与您保持持续沟通。',
              },
              {
                bold: '高级电子签名：',
                text: '我们通过视频会议安排沟通，负责钥匙交接，并使用具有完全法律效力和安全保障的高级电子签名工具签署合同（符合欧盟 eIDAS 条例），您无需出行，也无需到场办理。',
              },
              {
                bold: '全面管理：',
                text: '我们办理押金在加泰罗尼亚土地局（INCASÒL）的存放手续，负责收租、结算和维护，并定期向您汇报，让您完全安心。',
              },
            ],
          },
        ],
      },
      {
        blockNumber: '第二部分',
        blockTitle: '第二部分：房产出售、估价与家居软装（Home Staging）',
        buttonLabel: '2. 出售、估价与软装',
        items: [
          {
            id: 6,
            question: '6. 你们如何计算我房子的真实市场价值，以便卖出最好的价格？',
            answerIntroduction: '房产门户网站的自动估价往往基于被抬高的挂牌价，而 Golden Coast 则结合我们作为司法房产鉴定师和注册房地产经纪人（API）的专业资质，对比不动产登记处（Registro de la Propiedad）中真实成交的交易。我们评估房屋的技术状况、法律状况、能源效率以及具有实际购买力的需求，从而定出有竞争力的价格，在不让房子滞销的前提下实现最大收益。',
          },
          {
            id: 7,
            question: '7. 为什么在拍照和挂牌之前，必须先做家居软装（Home Staging）？',
            answerIntroduction: '第一印象决定了买家感知的价值。房子杂乱、东西过多或照片不专业，会带来压价的报价，并延长挂牌时间。有计划地进行去个人化、整理和美化（Home Staging），再配合专业摄影，能突出空间的潜力，吸引合格的买家，以尽可能好的价格完成出售。',
          },
          {
            id: 8,
            question: '8. 如果从第一天起就正确管理，一套房子多久能卖出去？',
            answerIntroduction: '一套经过严谨技术估价、准备得无可挑剔、并有针对性营销策略的房子，出售时间不应超过 3 个月。超过这个期限，通常说明最初定价有误，或者在房屋展示和买家筛选上出了问题。',
          },
        ],
      },
      {
        blockNumber: '第三部分',
        blockTitle: '第三部分：买家服务、移居安置（Relocation）与法律保障',
        buttonLabel: '3. 买家、移居与法律',
        items: [
          {
            id: 9,
            question: '9. 如果我想在加拉夫或黄金海岸买房，Golden Coast 能怎样帮我？',
            answerIntroduction: '我们作为您的专属房产买手（Personal Shopper），在面对卖方中介时维护您的利益。我们分析您的需求和预算，进行个性化搜寻，筛选出真正合适的房源，审查房产的法律文件（负担、房产登记摘要 nota simple、城市规划状况），并代表您谈判最好的价格和条件，直到在公证处签约。',
          },
          {
            id: 10,
            question: '10. 我从国外或西班牙其他自治区来这里生活或投资，移居安置服务（Relocation）包括什么？',
            answerIntroduction: '搬家远不只是找到一套房子。我们的移居安置服务在您来到西班牙的整个过程中，陪伴国际客户和投资者（英国、德国、法国……）以及西班牙国内客户：',
            bulletPoints: [
              {
                bold: '区域建议：',
                text: '根据您的个人情况、家庭情况和生活方式选择合适的区域。',
              },
              {
                bold: '寻找住房：',
                text: '根据您的需要购买，或进行短期、长期租赁。',
              },
              {
                bold: '法律与行政协调：',
                text: '办理外国人身份号码（NIE）、开设银行账户以及相关的税务咨询。',
              },
              {
                bold: '后续陪伴：',
                text: '寻找学校、开通水电气，以及联系可靠的服务提供者。',
              },
            ],
          },
          {
            id: 11,
            question: '11. 在加泰罗尼亚出租或出售房产，哪些文件和法律要求是必须具备的？',
            answerIntroduction: '加泰罗尼亚的法规要求一套严格完整的文件：',
            callout1: {
              title: '出售或出租：',
              text: '必须持有有效的居住许可证明（cédula de habitabilidad，根据第 18/2007 号法律，其登记编号必须写入合同）和能源效率证书（CEE）。',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: '出租：',
              text: '必须提供押金已存放于加泰罗尼亚土地局（INCASÒL）的凭证（第 14/2010 号法令）、住房市场紧张区的官方租金参考指数证明，以及合同中费用的明细。',
              borderCol: '#8FA777',
            },
          },
          {
            id: 12,
            question: '12. 与传统房产中介相比，Golden Coast 的“法律与鉴定双重核查”服务是什么？',
            answerIntroduction: '大多数中介使用标准合同，忽视技术核查。Golden Coast 以房产鉴定事务所的严谨态度工作：我们审查以往合同的历史，核对房产登记摘要、负担、业主共同体章程、与土地登记局（Catastro）记录是否一致，以及现行法规（《城市租赁法》LAU 和租金管控）。我们量身起草合同，确保交易在法律上无懈可击。',
          },
        ],
      },
    ],
  },
};
