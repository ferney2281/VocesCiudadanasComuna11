const SITE_DATA1 = {
    // Configuración del Menú de navegación superior con iconos asignados
    // Textos del Banner Principal
    hero: {
        title: "Pregunta 2",
        subtitle: "¿Cuáles son las causas de los problemas que afectan el bienestar y cuidado de los adultos mayores en la comuna 11 (Laureles-Estadio)?"
    },
  
    navigation: [
        { id: "index", label: "General", icon: "fas fa-home", active: false, url:"../index.html" },
        { id: "pregunta1", label: "Pregunta 1", icon: "fas fa-user-friends", active: false, url:"pregunta1.html" },
        { id: "pregunta2", label: "Pregunta 2", icon: "fas fa-heartbeat", active: true, url:"pregunta2.html" },
        { id: "pregunta3", label: "Pregunta 3", icon: "fas fa-users", active: false, url:"pregunta3.html" },
    ],
    // NUEVO: Métricas del RESUMEN GENERAL para la Pregunta 2
    summaryMetrics: [
        {
            label: "Respuestas analizadas",
            value: 35,
            icon: "fas fa-users-cog",
            colorClass: "metric-purple"
        },
        {
            label: "Respuestas válidas",
            value: 35,
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
            value: 34,
            icon: "fas fa-sitemap",
            colorClass: "metric-pink"
        },
        {
            label: "Palabras únicas",
            value: 462,
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
            subtitle: "Síntesis de los principales hallazgos del análisis temático y léxico de las 35 respuestas válidas.",
            interpretationTitle: "Interpretación general",
            interpretationText: "Los resultados muestran que las causas de los problemas que afectan el bienestar y cuidado de los adultos mayores se concentran principalmente en la soledad, el aislamiento y la falta de redes de apoyo, seguidos por dificultades relacionadas con la salud, el cuidado y la preparación de los cuidadores. También adquieren relevancia las condiciones del espacio público, la movilidad, la seguridad y el control institucional. El vocabulario y las relaciones entre conceptos evidencian que el bienestar de las personas mayores no depende de un único factor, sino de la interacción entre redes familiares y sociales, condiciones económicas, acceso a servicios, entorno urbano y capacidad institucional de respuesta.",
            footnote: "Los porcentajes se calculan sobre las 35 respuestas válidas. Una misma respuesta puede estar asociada a más de un tema.",
            cards: [
                {
                    type: "theme",
                    badge: "Tema más frecuente",
                    title: "Soledad, aislamiento y redes de apoyo",
                    value: "17",
                    unit: "respuestas",
                    percentage: "48,6 %",
                    subtext: "Frecuencia sobre 35 respuestas válidas",
                    icon: "fas fa-trophy",
                    bgClass: "bg-primary-subtle text-primary"
                },
                {
                    type: "theme",
                    badge: "Segundo tema más frecuente",
                    title: "Salud, cuidado y formación de cuidadores",
                    value: "14",
                    unit: "respuestas",
                    percentage: "40,0 %",
                    subtext: "Frecuencia sobre 35 respuestas válidas",
                    icon: "fas fa-users",
                    bgClass: "bg-success-subtle text-success"
                },
                {
                    type: "theme",
                    badge: "Tercer tema más frecuente",
                    title: "Empate entre:<br><br> 'Espacio público, movilidad y condiciones del entorno' <br><br>'Seguridad, control institucional y convivencia'",
                    value: "10",
                    unit: "respuestas",
                    percentage: "28,6 %",
                    subtext: "Frecuencia sobre 35 respuestas válidas",
                    icon: "fas fa-shield-alt",
                    bgClass: "bg-info-subtle text-info"
                },
                {
                    type: "lexical",
                    badge: "Palabra más frecuente",
                    title: "falta",
                    value: "14",
                    unit: "menciones",
                    percentage: "40,0 %",
                    subtext: "Sin embargo, para la interpretación conceptual hay un término todavía más significativo: 'soledad' 10 respuestas — 28,6 %. <br> Frecuencia sobre 35 respuestas válidas",
                    icon: "font-weight: bold; font-family: sans-serif;",
                    isTextIcon: true,
                    bgClass: "bg-purple-subtle text-purple" // Puedes mapearlo a tus clases personalizadas
                },
                {
                    type: "relation",
                    badge: "Relación más fuerte",
                    title: "acceso ↔ soledad <br><br> espacio ↔ público",
                    description: "sto muestra dos líneas de asociación particularmente relevantes:<strong> Acceso → soledad</strong> y <strong>Espacio público → condiciones de vida/movilidad</strong>",
                    icon: "fas fa-link",
                    bgClass: "bg-warning-subtle text-warning"
                },
                {
                    type: "corpus",
                    badge: "Corpus analizad",
                    value: "462",
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

        //ANÁLISIS LÉXICO: Palabras más frecuentes, nube de palabras
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
        } ,

        //RED DE COOCURRENCIAS
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
        },
        
        // MAPA TEMATICO
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


        // CITAS REPRESENTATIVAS POR TEMA
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