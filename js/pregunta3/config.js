const SITE_DATA1 = {
    // Configuración del Menú de navegación superior con iconos asignados
    // Textos del Banner Principal
    hero: {
        title: "Pregunta 3",
        subtitle: " ¿Qué soluciones propone a los problemas que afectan el bienestar y cuidado de los adultos mayores en la comuna 11 (Laureles-Estadio)?"
    },
  
    navigation: [
        { id: "index", label: "General", icon: "fas fa-home", active: false, url:"../../index.html" },
        { id: "pregunta1", label: "Pregunta 1", icon: "fas fa-user-friends", active: false, url:"pregunta1.html" },
        { id: "pregunta2", label: "Pregunta 2", icon: "fas fa-heartbeat", active: false, url:"pregunta2.html" },
        { id: "pregunta3", label: "Pregunta 3", icon: "fas fa-users", active: true, url:"pregunta3.html" }
    ],
    // NUEVO: Métricas del RESUMEN GENERAL para la Pregunta 2
    summaryMetrics: [
        {
            label: "Respuestas analizadas",
            value: 29,
            icon: "fas fa-users-cog",
            colorClass: "metric-purple"
        },
        {
            label: "Respuestas válidas",
            value: 27,
            icon: "fas fa-check-circle",
            colorClass: "metric-green"
        },
        {
            label: "Respuestas vacías",
            value: 0,
            icon: "fas fa-adjust",
            colorClass: "metric-yellow"
        },
        {
            label: "Temas encontrados",
            value: 6,
            icon: "fas fa-folder-open",
            colorClass: "metric-blue"
        },
        {
            label: "Subtemas identificados",
            value: 27,
            icon: "fas fa-sitemap",
            colorClass: "metric-pink"
        },
        {
            label: "Palabras únicas",
            value: 169,
            icon: "fas fa-sitemap",
            colorClass: "metric-pink",
            helpText: "Número de términos distintos identificados después del proceso de limpieza y normalización del texto."
        }
    ],

    
    // NUEVA ESTRUCTURA DE DATOS COMPLETA PARA EL ANÁLISIS TEMÁTICO
    thematicAnalysis: {

        //RESUMEN ANALÍTICO
            summaryAnalyticalBlock: {
            title: "Resumen analítico",
            subtitle: "Síntesis de los principales hallazgos del análisis temático y léxico de las 27 respuestas válidas.",
            interpretationTitle: "Interpretación general",
            interpretationText: "Las propuestas de solución se concentran principalmente en fortalecer la gestión institucional, el control y el cumplimiento de las normas, junto con una mayor oferta de servicios y espacios de atención para las personas mayores. También adquieren especial relevancia la seguridad, la vigilancia, el mejoramiento del espacio público y la accesibilidad. De manera transversal aparecen propuestas orientadas a la educación, sensibilización, participación comunitaria y generación de redes de apoyo. En conjunto, las respuestas muestran que los participantes no identifican una única solución, sino la necesidad de una intervención articulada entre autoridades, comunidad, servicios sociales, infraestructura y acciones de inclusión.",
            footnote: "Los porcentajes se calculan sobre las 27 respuestas válidas. Una misma respuesta puede estar asociada a más de un tema.",
            cards: [
                {
                    type: "theme",
                    badge: "Tema más frecuente",
                    title: "Gestión institucional, autoridad y cumplimiento",
                    value: "10",
                    unit: "respuestas",
                    percentage: "37,0 %",
                    subtext: "Frecuencia sobre 27 respuestas válidas",
                    icon: "fas fa-landmark",
                    bgClass: "bg-primary-subtle text-primary"
                },
                {
                    type: "theme",
                    badge: "Segundo tema más frecuente",
                    title: "Servicios, cuidado y atención al adulto mayor",
                    value: "8",
                    unit: "respuestas",
                    percentage: "29,6 %",
                    subtext: "Frecuencia sobre 27 respuestas válidas",
                    icon: "fas fa-hands-helping",
                    bgClass: "bg-success-subtle text-success"
                },
                {
                    type: "theme",
                    badge: "Tercer tema más frecuente",
                    title: "Seguridad, vigilancia y convivencia",
                    value: "7",
                    unit: "respuestas",
                    percentage: "25,9 %",
                    subtext: "Frecuencia sobre 27 respuestas válidas",
                    icon: "fas fa-shield-alt",
                    bgClass: "bg-info-subtle text-info"
                },
                {
                    type: "lexical",
                    badge: "Palabra más frecuente",
                    title: "atención / policía",
                    value: "3",
                    unit: "respuestas",
                    percentage: "11,1 %",
                    subtext: "Ambos términos presentan la mayor presencia entre los conceptos sustantivos recurrentes. También destacan 'hogares', 'ayuda', 'seguridad', 'ruido' y 'concientización'. Frecuencia sobre 27 respuestas válidas.",
                    icon: "font-weight: bold; font-family: sans-serif;",
                    isTextIcon: true,
                    bgClass: "bg-purple-subtle text-purple"
                },
                {
                    type: "relation",
                    badge: "Relación más fuerte",
                    title: "policía ↔ vigilancia<br><br>hogares ↔ adultos mayores",
                    description: "Las coocurrencias muestran dos líneas de asociación particularmente claras: <strong>policía → vigilancia</strong>, relacionada con la demanda de mayor control y seguridad, y <strong>hogares → adultos mayores</strong>, vinculada con la necesidad de ampliar espacios y servicios de atención.",
                    icon: "fas fa-link",
                    bgClass: "bg-warning-subtle text-warning"
                },
                {
                    type: "corpus",
                    badge: "Corpus analizado",
                    value: "169",
                    unit: "palabras únicas",
                    description: "Términos distintos identificados después del proceso de limpieza y normalización del texto.",
                    icon: "fas fa-file-alt",
                    bgClass: "bg-primary-subtle text-primary"
                }
            ]
        },
        //distribución de temas identificados
        visualizations: {
            title: "Distribución de temas identificados",
            subtitle: "El análisis temático permitió identificar seis temas principales en las respuestas abiertas. Cada respuesta puede estar asociada a más de un tema, por lo que los porcentajes no suman 100 %.",
            infoBox: "La frecuencia indica el número de respuestas en las que aparece cada tema.",
            footnote: "Una misma respuesta puede pertenecer a más de un tema.",
            interpretation: "Las propuestas se concentran principalmente en acciones institucionales y de cumplimiento de las normas, seguidas por la ampliación de servicios y espacios para los adultos mayores. También sobresalen las demandas de mayor seguridad y vigilancia. En un segundo nivel aparecen las mejoras de accesibilidad y espacio público, así como las estrategias de educación, sensibilización y fortalecimiento comunitario. Esto evidencia una percepción de que el bienestar de las personas mayores requiere respuestas coordinadas entre gobierno, comunidad y servicios especializados.",
            maxResponses: 27,
            items: [
                {
                    icon: "fas fa-landmark",
                    theme: "Gestión institucional, autoridad y cumplimiento",
                    count: 10,
                    percentage: "37,0 %"
                },
                {
                    icon: "fas fa-hands-helping",
                    theme: "Servicios, cuidado y atención al adulto mayor",
                    count: 8,
                    percentage: "29,6 %"
                },
                {
                    icon: "fas fa-shield-alt",
                    theme: "Seguridad, vigilancia y convivencia",
                    count: 7,
                    percentage: "25,9 %"
                },
                {
                    icon: "fas fa-universal-access",
                    theme: "Movilidad, accesibilidad y espacio público",
                    count: 5,
                    percentage: "18,5 %"
                },
                {
                    icon: "fas fa-users",
                    theme: "Inclusión, educación y redes comunitarias",
                    count: 5,
                    percentage: "18,5 %"
                },
                {
                    icon: "fas fa-hand-holding-usd",
                    theme: "Apoyo económico y distribución de recursos",
                    count: 3,
                    percentage: "11,1 %"
                }
            ]
        },

        //ANÁLISIS LÉXICO: Palabras más frecuentes, nube de palabras
        lexicalBlock: {
            title: "Análisis léxico",
            description: "El análisis del vocabulario permite identificar los términos y conceptos con mayor presencia en las respuestas. Se realizó limpieza, normalización y exclusión de palabras funcionales o poco informativas para destacar el contenido sustantivo de las propuestas.",
            footnote: "La frecuencia corresponde al número de respuestas válidas en las que aparece cada término o concepto. Se excluyeron palabras vacías, conectores y términos de escaso valor interpretativo.",
            frequentWords: {
                maxMentions: 30,
                items: [
                    { word: "atención", count: 3, percentage: "11,1 %" },
                    { word: "policía", count: 3, percentage: "11,1 %" },
                    { word: "hogares", count: 2, percentage: "7,4 %" },
                    { word: "ayuda", count: 3, percentage: "11,1 %" },
                    { word: "seguridad", count: 3, percentage: "11,1 %" },
                    { word: "ruido", count: 2, percentage: "7,4 %" },
                    { word: "vigilancia", count: 2, percentage: "7,4 %" },
                    { word: "concientización", count: 2, percentage: "7,4 %" },
                    { word: "educación", count: 2, percentage: "7,4 %" },
                    { word: "mejorar", count: 2, percentage: "7,4 %" }
                ]
            }, // Se cerró frequentWords correctamente con una coma para continuar

            // Nube de palabras metida DENTRO de lexicalBlock
             wordCloud: [
                { text: "atención", size: "2.4rem", color: "#6f42c1", weight: "bold" },
                { text: "policía", size: "2.3rem", color: "#198754", weight: "bold" },
                { text: "seguridad", size: "2.0rem", color: "#198754", weight: "bold" },
                { text: "ayuda", size: "1.8rem", color: "#0d6efd", weight: "600" },
                { text: "hogares", size: "1.7rem", color: "#6f42c1", weight: "600" },
                { text: "vigilancia", size: "1.5rem", color: "#198754", weight: "normal" },
                { text: "ruido", size: "1.4rem", color: "#495057", weight: "normal" },
                { text: "educación", size: "1.3rem", color: "#6f42c1", weight: "normal" },
                { text: "concientización", size: "1.3rem", color: "#20c997", weight: "normal" },
                { text: "salud", size: "1.2rem", color: "#0d6efd", weight: "normal" },
                { text: "acompañamiento", size: "1.1rem", color: "#6f42c1", weight: "normal" },
                { text: "programas", size: "1.1rem", color: "#0d6efd", weight: "normal" },
                { text: "participación", size: "1.0rem", color: "#20c997", weight: "normal" },
                { text: "rampas", size: "1.0rem", color: "#495057", weight: "normal" }
            ]
        } ,

        //RED DE COOCURRENCIAS
        networkBlock: {
            title: "Red de coocurrencias",
            description: "La red de coocurrencias muestra qué conceptos aparecen conjuntamente dentro de las mismas respuestas. Los nodos representan términos relevantes y las aristas indican que dichos términos fueron mencionados en una misma respuesta.",
            badgeWords: 18,
            badgeCooccurrences: 17,
            footnote: "La red muestra las palabras y conceptos más relevantes del corpus y sus coocurrencias observadas. Se excluyeron conectores, palabras vacías y términos de muy baja relevancia.",
            guideTitle: "¿Cómo leer esta red?",
            guideText: "Los nodos más grandes representan conceptos con mayor presencia. Las líneas más gruesas indican relaciones más frecuentes. Los colores agrupan los conceptos según su temática.",
            groups: [
                { color: "#3b5998", theme: "Gestión institucional y cumplimiento" },
                { color: "#33bfa8", theme: "Seguridad, vigilancia y convivencia" },
                { color: "#72c272", theme: "Servicios y apoyo al adulto mayor" },
                { color: "#8e67b9", theme: "Inclusión y redes comunitarias" },
                { color: "#fff1b3", theme: "Movilidad y accesibilidad" },
                { color: "#ffa630", theme: "Apoyo económico y recursos" }
            ]
        },
        
        // MAPA TEMATICO
        map: [
            {
                id: "map-1",
                theme: "1. Gestión institucional, autoridad y cumplimiento",
                color: "#9b51e0",
                subthemes: [
                    "Comunicación con autoridades",
                    "Cumplimiento de la ley",
                    "Seguimiento institucional",
                    "Atención oportuna de problemas",
                    "Articulación entre entidades",
                    "Mayor compromiso de la administración"
                ]
            },
            {
                id: "map-2",
                theme: "2. Servicios, cuidado y atención al adulto mayor",
                color: "#2f80ed",
                subthemes: [
                    "Centros de atención cercanos",
                    "Hogares para adultos mayores",
                    "Atención en salud",
                    "Acompañamiento",
                    "Espacios de acogida",
                    "Difusión de beneficios y oferta"
                ]
            },
            {
                id: "map-3",
                theme: "3. Seguridad, vigilancia y convivencia",
                color: "#27ae60",
                subthemes: [
                    "Mayor vigilancia policial",
                    "Rondas de la policía",
                    "Cámaras de seguridad",
                    "Control del ruido",
                    "Normas de convivencia",
                    "Control del tránsito"
                ]
            },
            {
                id: "map-4",
                theme: "4. Movilidad, accesibilidad y espacio público",
                color: "#f2994a",
                subthemes: [
                    "Rampas sin escalas",
                    "Mejoras para peatones",
                    "Tiempo de semáforos",
                    "Control del espacio público",
                    "Accesibilidad para personas con dificultades",
                    "Reparación de infraestructura"
                ]
            },
            {
                id: "map-5",
                theme: "5. Inclusión, educación y redes comunitarias",
                color: "#56ccf2",
                subthemes: [
                    "Educación y sensibilización",
                    "Inclusión",
                    "Participación comunitaria",
                    "Solidaridad",
                    "Actividades intergeneracionales",
                    "Conferencias y concientización"
                ]
            },
            {
                id: "map-6",
                theme: "6. Apoyo económico y distribución de recursos",
                color: "#f2c94c",
                subthemes: [
                    "Ayudas económicas",
                    "Equidad en la asignación de recursos",
                    "Mejor distribución presupuestal"
                ]
            }
        ],


        // CITAS REPRESENTATIVAS POR TEMA
        quotes: {
            title: "Citas representativas por tema",
            subtitle: "Evidencias textuales seleccionadas de las respuestas de los participantes.",
            footnote: "Las citas corresponden a respuestas textuales seleccionadas por su representatividad dentro del tema identificado durante la codificación cualitativa.",
            items: [
                {
                    id: 1,
                    theme: "Gestión institucional, autoridad y cumplimiento",
                    icon: "fas fa-landmark",
                    colorClass: "quote-blue",
                    frequency: "10 respuestas (37,0 %)",
                    badgeText: "Tema más frecuente",
                    badgeIcon: "far fa-star",
                    quoteText: "\"Que las personas encargadas de divulgar estos problemas si lo hagan a las autoridades correspondientes y se cumpla la ley\"",
                    responseId: "Pregunta #3"
                },
                {
                    id: 2,
                    theme: "Servicios, cuidado y atención al adulto mayor",
                    icon: "fas fa-heart",
                    colorClass: "quote-purple",
                    frequency: "8 respuestas (29,6 %)",
                    badgeText: "Alta presencia",
                    badgeIcon: "fas fa-trending-up",
                    quoteText: "\"Aumentar los centros de atención cercanos, hogares de adultos con mayor difusión para aprovechar los beneficios que tienen\"",
                    responseId: "Pregunta #9"
                },
                {
                    id: 3,
                    theme: "Seguridad, vigilancia y convivencia",
                    icon: "fas fa-shield-alt",
                    colorClass: "quote-green",
                    frequency: "7 respuestas (25,9 %)",
                    badgeText: "Alta presencia",
                    badgeIcon: "fas fa-trending-up",
                    quoteText: "\"Normas y vigilancia de la policía y el tránsito\"",
                    responseId: "Pregunta #5"
                },
                {
                    id: 4,
                    theme: "Movilidad, accesibilidad y espacio público",
                    icon: "fas fa-walking",
                    colorClass: "quote-orange",
                    frequency: "5 respuestas (18,5 %)",
                    badgeText: "Presencia media",
                    badgeIcon: "fas fa-chart-bar",
                    quoteText: "\"- Puentes sin escalas (solo rampas). - Más cámaras. - Más policía. - Enseñanza.\"",
                    responseId: "Pregunta #22"
                },
                {
                    id: 5,
                    theme: "Inclusión, educación y redes comunitarias",
                    icon: "fas fa-users",
                    colorClass: "quote-cyan",
                    frequency: "5 respuestas (18,5 %)",
                    badgeText: "Presencia media",
                    badgeIcon: "fas fa-chart-bar",
                    quoteText: "\"Más acompañamiento y más lugares donde puedan concentrarse con gente de su misma edad y compartir diferentes actividades\"",
                    responseId: "Pregunta #19"
                },
                {
                    id: 6,
                    theme: "Apoyo económico y distribución de recursos",
                    icon: "fas fa-hand-holding-usd",
                    colorClass: "quote-yellow",
                    frequency: "3 respuestas (11,1 %)",
                    badgeText: "Presencia focalizada",
                    badgeIcon: "fas fa-chart-bar",
                    quoteText: "\"Que puedan contar con ayuda económica como otros estratos\"",
                    responseId: "Pregunta #4"
                }
            ]
        },
      
        // 3. Tabla de Temas
        table: [
            { icon: "fas fa-hands-helping", color: "#9b51e0", theme: "Servicios y apoyo al adulto mayor", count: 22, percentage: "29.7%", interpretation: "Principal preocupación: insuficiencia de programas y apoyos específicos." },
            { icon: "fas fa-walking", color: "#2f80ed", theme: "Movilidad e infraestructura urbana", count: 21, percentage: "28.4%", interpretation: "Entorno físico que dificulta la movilidad segura y autónoma." },
            { icon: "fas fa-shield-alt", color: "#27ae60", theme: "Seguridad e inseguridad", count: 20, percentage: "27.0%", interpretation: "Percepción constante de inseguridad que limita la participación social." },
            { icon: "fas fa-user-clock", color: "#f2994a", theme: "Soledad y aislamiento social", count: 11, percentage: "14.9%", interpretation: "Dimensión social del bienestar que impacta la calidad de vida." }
        ],

    }, // Cierre definitivo de thematicAnalysis,

    // NUEVO: Contenido para los tres tipos de análisis
    // Reemplaza únicamente la propiedad analysisTabs al final de tu objeto SITE_DATA:
    /* analysisTabs: [
        {
            id: "tematico",
            label: "Análisis Temático",
            icon: "fas fa-tags",
            active: true,
            content: `
                <div class="container-fluid py-4 bg-light rounded-3">
                    <div id="thematic-visualizations-section" class="mb-5"></div>
                    
                    <div id="thematic-table-section" class="mb-5"></div>
                    <div id="thematic-quotes-section" class="mb-5"></div>
                    
                    <!-- Sección de Análisis Léxico / Nube de palabras -->
                    <div id="thematic-wordcloud-section" class="mb-5"></div>

                    <!-- ¡AQUÍ ESTÁ LA CORRECCIÓN! Agregado el contenedor para la Red de Coocurrencias -->
                    <div id="thematic-network-section" class="mb-4"></div>
                    <div id="thematic-summary-section" class="mb-5"></div>
                    <div id="thematic-summary-analytical-section" class="mb-5"></div>
                    <div id="thematic-map-section" class="mb-5"></div>
                </div>
            `
        },
        {
            id: "cualitativo",
            label: "Análisis Cualitativo",
            icon: "fas fa-comments",
            active: false,
            content: `
                <div class="p-4">
                    <h4 class="fw-bold mb-3 text-primary">Voces y Testimonios Directos</h4>
                    <p class="text-muted">A continuación se presentan citas textuales y percepciones subjetivas recopiladas que ilustran el sentir de la comunidad:</p>
                    <blockquote class="blockquote border-start border-primary border-4 ps-3 my-4 italic">
                        <p class="fst-italic">"Necesitamos que los programas de salud no solo sean en los centros de salud, sino que vengan a los parques del barrio."</p>
                        <footer class="blockquote-footer mt-1">Persona mayor, Sector Laureles</footer>
                    </blockquote>
                </div>
            `
        },
        {
            id: "mineria",
            label: "Minería de Texto",
            icon: "fas fa-brain",
            active: false,
            content: `
                <div class="p-4">
                    <h4 class="fw-bold mb-3 text-primary">Nube de Palabras y Frecuencias</h4>
                    <p class="text-muted">Procesamiento de lenguaje natural (PLN) aplicado a las respuestas para identificar las palabras clave más repetidas.</p>
                    <div class="d-flex flex-wrap gap-2 mt-3">
                        <span class="badge bg-primary fs-5 p-2">Bienestar (84)</span>
                        <span class="badge bg-secondary fs-6 p-2">Salud (74)</span>
                        <span class="badge bg-info text-dark fs-6 p-2">Comunidad (50)</span>
                        <span class="badge bg-dark fs-6 p-2">Espacios (42)</span>
                        <span class="badge bg-warning text-dark fs-6 p-2">Cuidado (30)</span>
                    </div>
                </div>
            `
        }
    ] */
};