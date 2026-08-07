const SITE_DATA = {
    // Configuración del Menú de navegación superior con iconos asignados
    navigation: [
        { id: "index", label: "General", icon: "fas fa-home", active: false, url:"../../index.html" },
        { id: "pregunta1", label: "Pregunta 1", icon: "fas fa-user-friends", active: true, url:"./html/pregunta1.html" },
        { id: "pregunta2", label: "Pregunta 2", icon: "fas fa-heartbeat", active: false, url:"./html/pregunta1.html" },
        { id: "pregunta3", label: "Pregunta 3", icon: "fas fa-users", active: false, url:"./html/pregunta1.html" },
        { id: "pregunta4", label: "Pregunta 4", icon: "fas fa-chart-bar", active: false, url:"./html/pregunta1.html" }
    ],
    // NUEVO: Métricas del Resumen General para la Pregunta 1
    summaryMetrics: [
        {
            label: "Respuestas analizadas",
            value: 54,
            icon: "fas fa-users-cog",
            colorClass: "metric-purple"
        },
        {
            label: "Respuestas válidas",
            value: 53,
            icon: "fas fa-check-circle",
            colorClass: "metric-green"
        },
        {
            label: "Respuestas vacías",
            value: 1,
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
            value: 559,
            icon: "fas fa-sitemap",
            colorClass: "metric-pink",
            helpText: "Número de términos distintos identificados después del proceso de limpieza y normalización del texto."
        }
    ],

    // Textos del Banner Principal
    hero: {
        title: "Pregunta 1",
        subtitle: "Según su opinión, ¿cuáles son los principales problemas que afectan el bienestar y cuidado de los adultos mayores en la comuna 11 (Laureles-Estadio)?"
    },

    // Las 21 tarjetas
    cards: [
        { id: 1, title: "Pregunta 1", desc: "Estoy de acuerdo en participar con mis respuestas", url_analisis: "analisis_1.html" },
        { id: 2, title: "Pregunta 3", desc: "¿A través de cuál canal se enteró de éste proceso?", url_analisis: "analisis_3.html" },
        { id: 3, title: "Pregunta 4", desc: "¿Vive usted en la comuna 11 de Medellín (Laureles-Estadio)?", url_analisis: "analisis_4.html" },
        { id: 4, title: "Pregunta 5", desc: "¿En qué municipio vive usted?", url_analisis: "analisis_5.html" },
        { id: 5, title: "Pregunta 6", desc: "¿En qué barrio vive usted?", url_analisis: "analisis_6.html" },
        { id: 6, title: "Pregunta 7", desc: "¿Qué relación tiene usted con la comuna 11 (Laureles-Estadio)?", url_analisis: "analisis_7.html" },
        { id: 7, title: "Pregunta 8", desc: "¿Nos podría compartir sus redes sociales? (si las tiene)", url_analisis: "analisis_8.html" },
        { id: 8, title: "Pregunta 9", desc: "¿Cuál es su edad?", url_analisis: "analisis_9.html" },
        { id: 9, title: "Pregunta 10", desc: "¿Cuál es su sexo?", url_analisis: "analisis_10.html" },
        { id: 10, title: "Pregunta 11", desc: "¿Cuál es  su profesión u ocupación?", url_analisis: "analisis_11.html" },
        { id: 11, title: "Pregunta 12", desc: "¿Le gustaría participar en un grupo de discusión para ampliar sus aportes?", url_analisis: "analisis_12.html" },
        { id: 12, title: "Pregunta 13", desc: "¿Cuál es su nombre completo?", url_analisis: "analisis_13.html" },
        { id: 13, title: "Pregunta 14", desc: "Teléfono/Celular", url_analisis: "analisis_14.html" },
        { id: 14, title: "Pregunta 15", desc: "Correo electrónico", url_analisis: "analisis_15.html" },
        { id: 15, title: "Pregunta 16", desc: "¿Pertenece a alguna Institución u organización en la Comuna 11?", url_analisis: "analisis_16.html" },
        { id: 16, title: "Pregunta 17", desc: "Tipo de organización a la que pertenece", url_analisis: "analisis_17.html" },
        { id: 17, title: "Pregunta 18", desc: "Página web de la organización", url_analisis: "analisis_18.html" },
        { id: 18, title: "Pregunta 19", desc: "Redes sociales de la organización", url_analisis: "analisis_19.html" },
        { id: 19, title: "Pregunta 20", desc: "Dirección de la organización", url_analisis: "analisis_20.html" },
        { id: 20, title: "Pregunta 21", desc: "Observaciones ", url_analisis: "analisis_21.html" }
    ],
    // NUEVA ESTRUCTURA DE DATOS COMPLETA PARA EL ANÁLISIS TEMÁTICO
    thematicAnalysis: {
            summaryAnalyticalBlock: {
            title: "Resumen analítico",
            subtitle: "Síntesis de los principales hallazgos del análisis temático y léxico de las 53 respuestas válidas.",
            interpretationTitle: "Interpretación general",
            interpretationText: "Los resultados muestran que las preocupaciones de los participantes se concentran principalmente en la movilidad e infraestructura urbana y en los servicios y apoyo al adulto mayor, seguidas por temas relacionados con seguridad. El vocabulario más frecuente y las coocurrencias identificadas evidencian la relación entre las condiciones del entorno físico y el bienestar de las personas mayores.",
            footnote: "Los porcentajes se calculan sobre las 53 respuestas válidas. Una misma respuesta puede estar asociada a más de un tema.",
            cards: [
                {
                    type: "theme",
                    badge: "Tema más frecuente",
                    title: "Movilidad e infraestructura urbana",
                    value: "22",
                    unit: "respuestas",
                    percentage: "41,5 %",
                    subtext: "Frecuencia sobre 53 respuestas válidas",
                    icon: "fas fa-trophy",
                    bgClass: "bg-primary-subtle text-primary"
                },
                {
                    type: "theme",
                    badge: "Segundo tema más frecuente",
                    title: "Servicios y apoyo al adulto mayor",
                    value: "22",
                    unit: "respuestas",
                    percentage: "41,5 %",
                    subtext: "Frecuencia sobre 53 respuestas válidas",
                    icon: "fas fa-users",
                    bgClass: "bg-success-subtle text-success"
                },
                {
                    type: "theme",
                    badge: "Tercer tema más frecuente",
                    title: "Seguridad e inseguridad",
                    value: "20",
                    unit: "respuestas",
                    percentage: "37,7 %",
                    subtext: "Frecuencia sobre 53 respuestas válidas",
                    icon: "fas fa-shield-alt",
                    bgClass: "bg-info-subtle text-info"
                },
                {
                    type: "lexical",
                    badge: "Palabra más frecuente",
                    title: "aceras",
                    value: "27",
                    unit: "menciones",
                    percentage: "50,9 %",
                    subtext: "Frecuencia sobre 53 respuestas válidas",
                    icon: "font-weight: bold; font-family: sans-serif;",
                    isTextIcon: true,
                    bgClass: "bg-purple-subtle text-purple" // Puedes mapearlo a tus clases personalizadas
                },
                {
                    type: "relation",
                    badge: "Relación más fuerte",
                    title: "aceras ↔ calles",
                    description: "Es la coocurrencia más frecuente identificada en las respuestas, conectada principalmente con <strong>movilidad e infraestructura</strong>.",
                    icon: "fas fa-link",
                    bgClass: "bg-warning-subtle text-warning"
                },
                {
                    type: "corpus",
                    badge: "Corpus analizad",
                    value: "559",
                    unit: "palabras únicas",
                    description: "Términos distintos identificados después del proceso de limpieza y normalización del texto.",
                    icon: "fas fa-file-alt",
                    bgClass: "bg-primary-subtle text-primary"
                }
            ]
        },
        visualizations: {
            title: "Distribución de temas identificados",
            subtitle: "El análisis temático permitió identificar seis temas principales en las respuestas abiertas de los participantes. Cada respuesta puede estar asociada a más de un tema, por lo que los porcentajes no suman 100 %.",
            infoBox: "La frecuencia indica el número de respuestas en las que aparece cada tema.",
            footnote: "Una misma respuesta puede pertenecer a más de un tema.",
            interpretation: "Los temas relacionados con la movilidad e infraestructura urbana y los servicios y apoyo al adulto mayor fueron los más frecuentes en las respuestas, seguidos por la seguridad e inseguridad. En conjunto, estos hallazgos evidencian que los participantes perciben el bienestar de las personas mayores como un fenómeno influenciado tanto por las condiciones del entorno físico como por la disponibilidad de apoyo institucional y comunitario.",
            maxResponses: 25,
            items: [
                { icon: "fas fa-walking", theme: "Movilidad e infraestructura urbana", count: 22, percentage: "41,5 %" },
                { icon: "fas fa-hands-helping", theme: "Servicios y apoyo al adulto mayor", count: 22, percentage: "41,5 %" },
                { icon: "fas fa-lock", theme: "Seguridad e inseguridad", count: 20, percentage: "37,7 %" },
                { icon: "fas fa-user", theme: "Soledad y aislamiento social", count: 11, percentage: "20,8 %" },
                { icon: "fas fa-tree", theme: "Espacio público, tránsito y contaminación", count: 10, percentage: "18,9 %" },
                { icon: "fas fa-handshake", theme: "Cultura ciudadana y convivencia", count: 8, percentage: "15,1 %" }
            ]
        },
        
        // 2. Mapa Temático: Relación entre temas y subtemas
        map: [
            {
                id: "map-1",
                theme: "1. Servicios y apoyo al adulto mayor",
                color: "#9b51e0", // Púrpura
                subthemes: ["Centros diurnos", "Actividades recreativas", "Alimentación", "Servicios de salud", "Espacios de integración", "Acompañamiento institucional"]
            },
            {
                id: "map-2",
                theme: "2. Movilidad e infraestructura",
                color: "#2f80ed", // Azul
                subthemes: ["Aceras deterioradas", "Andenes en mal estado", "Carros mal parqueados", "Motos", "Barreras arquitectónicas", "Dificultades para caminar"]
            },
            {
                id: "map-3",
                theme: "3. Seguridad e inseguridad",
                color: "#27ae60", // Verde
                subthemes: ["Miedo a salir", "Robos", "Inseguridad general", "Falta de confianza para caminar"]
            },
            {
                id: "map-4",
                theme: "4. Soledad y aislamiento social",
                color: "#f2994a", // Naranja
                subthemes: ["Vivir solos", "Abandono", "Aislamiento", "Falta de compañía"]
            }
        ],

        // 3. Tabla de Temas
        table: [
            { icon: "fas fa-hands-helping", color: "#9b51e0", theme: "Servicios y apoyo al adulto mayor", count: 22, percentage: "29.7%", interpretation: "Principal preocupación: insuficiencia de programas y apoyos específicos." },
            { icon: "fas fa-walking", color: "#2f80ed", theme: "Movilidad e infraestructura urbana", count: 21, percentage: "28.4%", interpretation: "Entorno físico que dificulta la movilidad segura y autónoma." },
            { icon: "fas fa-shield-alt", color: "#27ae60", theme: "Seguridad e inseguridad", count: 20, percentage: "27.0%", interpretation: "Percepción constante de inseguridad que limita la participación social." },
            { icon: "fas fa-user-clock", color: "#f2994a", theme: "Soledad y aislamiento social", count: 11, percentage: "14.9%", interpretation: "Dimensión social del bienestar que impacta la calidad de vida." }
        ],

        // 4. Citas representativas
        quotes: {
            title: "Citas representativas por tema",
            subtitle: "Evidencias textuales seleccionadas de las respuestas de los participantes.",
            footnote: "Las citas corresponden a respuestas textuales seleccionadas por su representatividad dentro del tema identificado durante la codificación cualitativa.",
            items: [
                {
                    id: 1,
                    theme: "Movilidad e infraestructura urbana",
                    icon: "fas fa-walking",
                    colorClass: "quote-blue",
                    frequency: "22 respuestas (41,5 %)",
                    badgeText: "Tema más frecuente",
                    badgeIcon: "far fa-star",
                    quoteText: '"Vías de acceso, aceras en mal estado, huecos, escalones, excremento de mascotas, parqueo de motos en los andenes..."',
                    responseId: "Respuesta #14"
                },
                {
                    id: 2,
                    theme: "Seguridad e inseguridad",
                    icon: "fas fa-shield-alt",
                    colorClass: "quote-green",
                    frequency: "20 respuestas (37,7 %)",
                    badgeText: "Alta presencia",
                    badgeIcon: "fas fa-trending-up",
                    quoteText: '"La inseguridad... la gente siente miedo de ser robada y por ello no disfruta de los agradables lugares para compartir..."',
                    responseId: "Respuesta #19"
                },
                {
                    id: 3,
                    theme: "Servicios y apoyo al adulto mayor",
                    icon: "fas fa-heart",
                    colorClass: "quote-purple",
                    frequency: "22 respuestas (41,5 %)",
                    badgeText: "Alta presencia",
                    badgeIcon: "far fa-star",
                    quoteText: '"La falta de espacios para realizar actividades y una casa de reposo y compartir que albergue un gran número de adultos mayores."',
                    responseId: "Respuesta #11"
                },
                {
                    id: 4,
                    theme: "Soledad y aislamiento social",
                    icon: "fas fa-user",
                    colorClass: "quote-yellow",
                    frequency: "11 respuestas (20,8 %)",
                    badgeText: "Presencia media",
                    badgeIcon: "fas fa-chart-bar",
                    quoteText: '"La soledad, abandono y falta de respeto por ellos."',
                    responseId: "Respuesta #20"
                },
                {
                    id: 5,
                    theme: "Espacio público, tránsito y contaminación",
                    icon: "fas fa-trash-alt",
                    colorClass: "quote-orange",
                    frequency: "21 respuestas (39,6 %)",
                    badgeText: "Alta presencia",
                    badgeIcon: "fas fa-trending-up",
                    quoteText: '"Las basuras en las calles, en las aceras... El parqueadero en los lugares peatonales..."',
                    responseId: "Respuesta #45"
                },
                {
                    id: 6,
                    theme: "Cultura ciudadana y convivencia",
                    icon: "fas fa-users",
                    colorClass: "quote-cyan",
                    frequency: "18 respuestas (34,0 %)",
                    badgeText: "Presencia media",
                    badgeIcon: "fas fa-chart-bar",
                    quoteText: '"La falta de respeto con los ancianos, no hay solidaridad con ellos..."',
                    responseId: "Respuesta #30"
                }
            ]
        },

        // 5. Bloque Léxico Unificado correctamente
        lexicalBlock: {
            title: "Análisis léxico",
            description: "El análisis del vocabulario permite identificar los términos más utilizados por los participantes. La frecuencia de palabras muestra los conceptos con mayor presencia en sus respuestas, mientras que la nube de palabras ofrece una representación visual de los términos más relevantes del corpus.",
            footnote: "La frecuencia corresponds al número de veces que cada palabra aparece en el conjunto de respuestas válidas (53). Se excluyeron palabras vacías, conectores y términos con menos de 2 ocurrencias.",
            frequentWords: {
                maxMentions: 30,
                items: [
                    { word: "aceras", count: 27, percentage: "50,9 %" },
                    { word: "calles", count: 24, percentage: "45,3 %" },
                    { word: "adulto", count: 21, percentage: "39,6 %" },
                    { word: "mayores", count: 20, percentage: "37,7 %" },
                    { word: "seguridad", count: 19, percentage: "35,8 %" },
                    { word: "transporte", count: 17, percentage: "32,1 %" },
                    { word: "apoyo", count: 16, percentage: "30,2 %" },
                    { word: "espacios", count: 15, percentage: "28,3 %" },
                    { word: "públicos", count: 14, percentage: "26,4 %" },
                    { word: "soledad", count: 13, percentage: "24,5 %" }
                ]
            }, // Se cerró frequentWords correctamente con una coma para continuar

            // Nube de palabras metida DENTRO de lexicalBlock
            wordCloud: [
                { text: "adultos mayores", size: "2.6rem", color: "#6f42c1", weight: "bold" },
                { text: "seguridad", size: "2.0rem", color: "#198754", weight: "bold" },
                { text: "aceras", size: "1.7rem", color: "#0d6efd", weight: "600" },
                { text: "actividades", size: "1.2rem", color: "#8a3ffc", weight: "normal" },
                { text: "salud", size: "1.2rem", color: "#0d6efd", weight: "normal" },
                { text: "centros diurnos", size: "1.2rem", color: "#6f42c1", weight: "normal" },
                { text: "soledad", size: "1.2rem", color: "#6f42c1", weight: "normal" },
                { text: "alimentación", size: "1.1rem", color: "#20c997", weight: "normal" },
                { text: "motos", size: "1.0rem", color: "#495057", weight: "normal" },
                { text: "abandono", size: "1.0rem", color: "#6c757d", weight: "normal" },
                { text: "compañía", size: "1.0rem", color: "#495057", weight: "normal" },
                { text: "integración", size: "1.0rem", color: "#6f42c1", weight: "normal" },
                { text: "acompañamiento", size: "1.0rem", color: "#0d6efd", weight: "normal" },
                { text: "caminar", size: "1.0rem", color: "#212529", weight: "normal" }
            ]
        } ,// Cierre definitivo de lexicalBlock
        // Dentro de SITE_DATA.thematicAnalysis:
        networkBlock: {
            title: "Red de coocurrencias",
            description: "La red de coocurrencias muestra qué palabras aparecen conjuntamente dentro de las mismas respuestas. Los nodos representan palabras y las aristas (líneas) indican su coocurrencia. El tamaño del nodo refleja la frecuencia de la palabra y el grosor de la línea la fuerza de la relación.",
            badgeWords: 28,
            badgeCooccurrences: 86,
            footnote: "La red muestra las palabras más relevantes del corpus y sus coocurrencias más significativas. Se excluyeron conectores, palabras vacías y términos con muy baja frecuencia.",
            guideTitle: "¿Cómo leer esta red?",
            guideText: "Los nodos más grandes son las palabras más frecuentes. Las líneas más gruesas indican relaciones más fuertes (aparecen juntas con mayor frecuencia). Los colores agrupan palabras por temática.",
            groups: [
                { color: "#3b5998", theme: "Movilidad e infraestructura urbana" },
                { color: "#33bfa8", theme: "Seguridad e inseguridad" },
                { color: "#72c272", theme: "Servicios y apoyo al adulto mayor" },
                { color: "#8e67b9", theme: "Soledad y aislamiento social" },
                { color: "#fff1b3", theme: "Espacio público, tránsito y contaminación" },
                { color: "#ffa630", theme: "Cultura ciudadana y convivencia" }
            ]
        }

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