const SITE_DATA1 = {
    // Configuración del Menú de navegación superior con iconos asignados
    // Textos del Banner Principal
    hero: {
        title: "Pregunta 3",
        subtitle: " ¿Qué soluciones propone a los problemas que afectan el bienestar y cuidado de los adultos mayores en la comuna 11 (Laureles-Estadio)?"
    },
  
    navigation: [
        { id: "index", label: "General", icon: "fas fa-home", active: false, url:"../index.html" },
        { id: "pregunta1", label: "Pregunta 1", icon: "fas fa-user-friends", active: false, url:"pregunta1.html" },
        { id: "pregunta2", label: "Pregunta 2", icon: "fas fa-heartbeat", active: false, url:"pregunta2.html" },
        { id: "pregunta3", label: "Pregunta 3", icon: "fas fa-users", active: true, url:"pregunta3.html" },
        { id: "voces_accion", label: "Voces en acción", icon: "fas fa-bullhorn", active: false, url: "voces_accion.html" },
    ],
    // NUEVO: Métricas del RESUMEN GENERAL para la Pregunta 2
    summaryMetrics: [
        {
            label: "Respuestas analizadas",
            value: 34,
            icon: "fas fa-users-cog",
            colorClass: "metric-purple"
        },
        {
            label: "Respuestas válidas",
            value: 32,
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
            value: 8,
            icon: "fas fa-folder-open",
            colorClass: "metric-blue"
        },
        {
            label: "Subtemas identificados",
            value: 42,
            icon: "fas fa-sitemap",
            colorClass: "metric-pink"
        },
        {
            label: "Palabras únicas",
            value: 204,
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
            subtitle: "Síntesis de los principales hallazgos del análisis temático y léxico de las 32 respuestas válidas.",
            interpretationTitle: "Interpretación general",
            interpretationText: "Las soluciones propuestas se concentran principalmente en el fortalecimiento de la institucionalidad, el control y las políticas públicas, seguidas por acciones de participación comunitaria, acompañamiento y recuperación del espacio público. También adquieren relevancia la educación, la sensibilización, la divulgación de información y el fortalecimiento de los servicios de salud y cuidado. En conjunto, las respuestas muestran que las soluciones planteadas requieren una combinación de acciones institucionales, comunitarias, educativas, ambientales y de atención directa a las personas mayores.",
            footnote: "Los porcentajes se calculan sobre las 32 respuestas válidas. Una misma respuesta puede estar asociada a más de un tema.",
            cards: [
                {
                    type: "theme",
                    badge: "Tema más frecuente",
                    title: "Institucionalidad, control y políticas públicas",
                    value: "13",
                    unit: "respuestas",
                    percentage: "40,6 %",
                    subtext: "Frecuencia sobre 32 respuestas válidas",
                    icon: "fas fa-landmark",
                    bgClass: "bg-primary-subtle text-primary"
                },
                {
                    type: "theme",
                    badge: "Segundo tema más frecuente",
                    title: "Participación comunitaria, acompañamiento y redes sociales",
                    value: "10",
                    unit: "respuestas",
                    percentage: "31,3 %",
                    subtext: "Frecuencia sobre 32 respuestas válidas",
                    icon: "fas fa-hands-helping",
                    bgClass: "bg-success-subtle text-success"
                },
                {
                    type: "theme",
                    badge: "Tercer tema más frecuente",
                    title: "Espacio público, movilidad y ambiente",
                    value: "10",
                    unit: "respuestas",
                    percentage: "31,3 %",
                    subtext: "Frecuencia sobre 32 respuestas válidas",
                    icon: "fas fa-road",
                    bgClass: "bg-info-subtle text-info"
                },
                {
                    type: "lexical",
                    badge: "Palabra más frecuente",
                    title: "mayor",
                    value: "6",
                    unit: "menciones",
                    percentage: "18,8 %",
                    subtext: "Frecuencia sobre 32 respuestas válidas",
                    icon: "font-weight: bold; font-family: sans-serif;",
                    isTextIcon: true,
                    bgClass: "bg-purple-subtle text-purple"
                },
                {
                    type: "relation",
                    badge: "Relación más fuerte",
                    title: "adulto ↔ mayor",
                    description: "Es la coocurrencia más frecuente identificada en el corpus de soluciones, con 6 apariciones conjuntas después de la normalización léxica.",
                    icon: "fas fa-link",
                    bgClass: "bg-warning-subtle text-warning"
                },
                {
                    type: "corpus",
                    badge: "Corpus analizado",
                    value: "204",
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
            subtitle: "El análisis temático permitió identificar ocho temas principales en las respuestas sobre soluciones. Cada respuesta puede estar asociada a más de un tema, por lo que los porcentajes no suman 100 %.",
            infoBox: "La frecuencia indica el número de respuestas en las que aparece cada tema.",
            footnote: "Una misma respuesta puede pertenecer a más de un tema.",
            interpretation: "Las soluciones propuestas se orientan principalmente hacia el fortalecimiento de la institucionalidad y el control, seguido por la participación comunitaria y las acciones sobre el espacio público. También se observa una presencia importante de propuestas educativas, de divulgación y de fortalecimiento de los servicios de salud y cuidado.",
            maxResponses: 13,
            items: [
                {
                    icon: "fas fa-landmark",
                    theme: "Institucionalidad, control y políticas públicas",
                    count: 13,
                    percentage: "40,6 %"
                },
                {
                    icon: "fas fa-hands-helping",
                    theme: "Participación comunitaria, acompañamiento y redes sociales",
                    count: 10,
                    percentage: "31,3 %"
                },
                {
                    icon: "fas fa-road",
                    theme: "Espacio público, movilidad y ambiente",
                    count: 10,
                    percentage: "31,3 %"
                },
                {
                    icon: "fas fa-graduation-cap",
                    theme: "Educación, sensibilización e información",
                    count: 9,
                    percentage: "28,1 %"
                },
                {
                    icon: "fas fa-heart",
                    theme: "Salud, cuidado y servicios de apoyo",
                    count: 8,
                    percentage: "25,0 %"
                },
                {
                    icon: "fas fa-home",
                    theme: "Vivienda, centros y ciudad amigable con las personas mayores",
                    count: 5,
                    percentage: "15,6 %"
                },
                {
                    icon: "fas fa-shield-alt",
                    theme: "Seguridad y protección",
                    count: 4,
                    percentage: "12,5 %"
                },
                {
                    icon: "fas fa-coins",
                    theme: "Economía, recursos y equidad",
                    count: 3,
                    percentage: "9,4 %"
                }
            ]
        },

        //ANÁLISIS LÉXICO: Palabras más frecuentes, nube de palabras
        lexicalBlock: {
            title: "Análisis léxico",
            description: "El análisis del vocabulario permite identificar los términos más utilizados al proponer soluciones para los problemas que afectan el bienestar y cuidado de las personas mayores. La frecuencia permite observar los conceptos que aparecen con mayor recurrencia dentro del corpus de soluciones.",
            footnote: "La frecuencia corresponde al número de apariciones de cada término en las 32 respuestas válidas. Se excluyeron palabras vacías, conectores y términos sin valor analítico.",

            frequentWords: {
                maxMentions: 30,
                items: [
                    { word: "mayor", count: 6, percentage: "18,8 %" },
                    { word: "soledad", count: 5, percentage: "15,6 %" },
                    { word: "adulto", count: 4, percentage: "12,5 %" },
                    { word: "programas", count: 4, percentage: "12,5 %" },
                    { word: "atención", count: 4, percentage: "12,5 %" },
                    { word: "personas", count: 4, percentage: "12,5 %" },
                    { word: "autoridades", count: 4, percentage: "12,5 %" },
                    { word: "adultos", count: 4, percentage: "12,5 %" },
                    { word: "policía", count: 3, percentage: "9,4 %" },
                    { word: "mejorar", count: 3, percentage: "9,4 %" },
                    { word: "control", count: 2, percentage: "6,3 %" },
                    { word: "espacio", count: 2, percentage: "6,3 %" },
                    { word: "público", count: 2, percentage: "6,3 %" },
                    { word: "ruido", count: 2, percentage: "6,3 %" },
                    { word: "divulgación", count: 2, percentage: "6,3 %" },
                    { word: "cámaras", count: 2, percentage: "6,3 %" },
                    { word: "vigilancia", count: 2, percentage: "6,3 %" },
                    { word: "concientizar", count: 2, percentage: "6,3 %" },
                    { word: "lugares", count: 2, percentage: "6,3 %" },
                    { word: "hogares", count: 2, percentage: "6,3 %" }
                ]
            },

            wordCloud: [
                { text: "adulto mayor", size: "2.6rem", color: "#6f42c1", weight: "bold" },
                { text: "soledad", size: "2.1rem", color: "#72c272", weight: "bold" },
                { text: "programas", size: "1.7rem", color: "#c06c84", weight: "600" },
                { text: "atención", size: "1.6rem", color: "#8e67b9", weight: "600" },
                { text: "autoridades", size: "1.5rem", color: "#c06c84", weight: "normal" },
                { text: "personas", size: "1.4rem", color: "#72c272", weight: "normal" },
                { text: "policía", size: "1.3rem", color: "#33bfa8", weight: "normal" },
                { text: "control", size: "1.2rem", color: "#3b5998", weight: "normal" },
                { text: "espacio público", size: "1.2rem", color: "#3b5998", weight: "normal" },
                { text: "ruido", size: "1.1rem", color: "#3b5998", weight: "normal" },
                { text: "divulgación", size: "1.1rem", color: "#ffa630", weight: "normal" },
                { text: "cámaras", size: "1.0rem", color: "#33bfa8", weight: "normal" },
                { text: "vigilancia", size: "1.0rem", color: "#33bfa8", weight: "normal" },
                { text: "hogares", size: "1.0rem", color: "#8e67b9", weight: "normal" }
            ]
        } ,

        //RED DE COOCURRENCIAS
        networkBlock: {
            title: "Red de coocurrencias",
            description: "La red de coocurrencias muestra qué palabras aparecen conjuntamente dentro de las mismas respuestas sobre las soluciones propuestas. Los nodos representan palabras y las aristas (líneas) indican su coocurrencia. El tamaño del nodo refleja la frecuencia de la palabra y el grosor de la línea la fuerza de la relación.",
            badgeWords: 30,
            badgeCooccurrences: 7,
            footnote: "Se identificaron 7 pares de términos con al menos dos coocurrencias dentro de las 32 respuestas válidas. Se excluyeron conectores, palabras vacías y términos sin valor analítico. La pregunta 3 tiene muchas menos respuestas y el vocabulario es más disperso, por lo que la red es naturalmente mucho más pequeña",
            guideTitle: "¿Cómo leer esta red?",
            guideText: "Los nodos más grandes son las palabras más frecuentes. Las líneas más gruesas indican relaciones más fuertes, es decir, términos que aparecen conjuntamente en un mayor número de respuestas. Los colores agrupan las palabras según las temáticas identificadas.",
            groups: [
                {
                    color: "#3b5998",
                    theme: "Espacio público, movilidad y ambiente"
                },
                {
                    color: "#33bfa8",
                    theme: "Seguridad y protección"
                },
                {
                    color: "#72c272",
                    theme: "Participación comunitaria, acompañamiento y redes sociales"
                },
                {
                    color: "#8e67b9",
                    theme: "Salud, cuidado y servicios de apoyo"
                },
                {
                    color: "#fff1b3",
                    theme: "Educación, sensibilización e información"
                },
                {
                    color: "#ffa630",
                    theme: "Economía, recursos y equidad"
                },
                {
                    color: "#c06c84",
                    theme: "Institucionalidad, control y políticas públicas"
                },
                {
                    color: "#d6a4e4",
                    theme: "Vivienda, centros y ciudad amigable con las personas mayores"
                }
            ]
        },
        
        // MAPA TEMATICO
        map: [
            {
                id: "map-1",
                theme: "1. Institucionalidad, control y políticas públicas",
                color: "#c06c84",
                subthemes: [
                    "Coordinación entre entidades",
                    "Atención institucional oportuna",
                    "Control y seguimiento del espacio público",
                    "Comunicación con las autoridades",
                    "Compromiso municipal",
                    "Políticas públicas de protección",
                    "Distribución de recursos",
                    "Vigilancia policial",
                    "Cumplimiento de normas y leyes"
                ]
            },
            {
                id: "map-2",
                theme: "2. Participación comunitaria, acompañamiento y redes sociales",
                color: "#72c272",
                subthemes: [
                    "Alianzas comunitarias",
                    "Solidaridad",
                    "Acción comunal",
                    "Participación en programas del barrio",
                    "Acompañamiento",
                    "Identificación de personas que viven solas",
                    "Espacios de encuentro",
                    "Actividades compartidas",
                    "Acuerdos entre actores del territorio"
                ]
            },
            {
                id: "map-3",
                theme: "3. Espacio público, movilidad y ambiente",
                color: "#3b5998",
                subthemes: [
                    "Control del espacio público",
                    "Recuperación de zonas peatonales",
                    "Rampas y accesibilidad",
                    "Frecuencia semafórica",
                    "Control del ruido",
                    "Regulación de horarios",
                    "Vigilancia del tránsito",
                    "Mantenimiento de vías peatonales",
                    "Vegetación adecuada"
                ]
            },
            {
                id: "map-4",
                theme: "4. Educación, sensibilización e información",
                color: "#fff1b3",
                subthemes: [
                    "Educación para el cuidado",
                    "Sensibilización sobre las personas mayores",
                    "Conferencias",
                    "Divulgación de la oferta",
                    "Enseñanza",
                    "Concientización sobre el ruido",
                    "Concientización de jóvenes",
                    "Información sobre programas"
                ]
            },
            {
                id: "map-5",
                theme: "5. Salud, cuidado y servicios de apoyo",
                color: "#8e67b9",
                subthemes: [
                    "Atención en salud",
                    "Atención presencial",
                    "Atención oportuna",
                    "Identificación de necesidades",
                    "Sitios de acogida",
                    "Hogares para personas mayores",
                    "Centros de atención cercanos"
                ]
            },
            {
                id: "map-6",
                theme: "6. Vivienda, centros y ciudad amigable con las personas mayores",
                color: "#9b51e0",
                subthemes: [
                    "Sitios de acogida",
                    "Hogares para adultos mayores",
                    "Centros de atención cercanos",
                    "Ciudad amigable con las personas mayores",
                    "Acceso para personas con dificultades"
                ]
            },
            {
                id: "map-7",
                theme: "7. Seguridad y protección",
                color: "#33bfa8",
                subthemes: [
                    "Cámaras de vigilancia",
                    "Mayor presencia policial",
                    "Rondas policiales",
                    "Normas de seguridad y tránsito"
                ]
            },
            {
                id: "map-8",
                theme: "8. Economía, recursos y equidad",
                color: "#ffa630",
                subthemes: [
                    "Distribución de recursos",
                    "Ayudas económicas",
                    "Equidad entre estratos"
                ]
            }
        ],


        // CITAS REPRESENTATIVAS POR TEMA
        quotes: {
            title: "Citas representativas por tema",
            subtitle: "Evidencias textuales seleccionadas de las respuestas de los participantes.",
            footnote: "Las citas corresponden a respuestas textuales seleccionadas por su representatividad dentro de los temas identificados durante la codificación cualitativa.",
            items: [
                {
                    id: 1,
                    theme: "Institucionalidad, control y políticas públicas",
                    icon: "fas fa-landmark",
                    colorClass: "quote-purple",
                    frequency: "13 respuestas (40,6 %)",
                    badgeText: "Tema más frecuente",
                    badgeIcon: "far fa-star",
                    quoteText: "\"Tienen que existir autoridades y deben existir políticas públicas que apunten a defender y proteger al adulto mayor, como ocurre en Europa.\"",
                    responseId: "Respuesta #12"
                },
                {
                    id: 2,
                    theme: "Participación comunitaria, acompañamiento y redes sociales",
                    icon: "fas fa-hands-helping",
                    colorClass: "quote-green",
                    frequency: "10 respuestas (31,3 %)",
                    badgeText: "Alta presencia",
                    badgeIcon: "fas fa-trending-up",
                    quoteText: "\"Más acompañamiento y más lugares donde puedan concentrarse con gente de su misma edad y compartir diferentes actividades\"",
                    responseId: "Respuesta #20"
                },
                {
                    id: 3,
                    theme: "Espacio público, movilidad y ambiente",
                    icon: "fas fa-road",
                    colorClass: "quote-blue",
                    frequency: "10 respuestas (31,3 %)",
                    badgeText: "Alta presencia",
                    badgeIcon: "fas fa-trending-up",
                    quoteText: "\"Mejorar el tiempo de respuesta y de la frecuencia en la luz verde para los peatones.\"",
                    responseId: "Respuesta #25"
                },
                {
                    id: 4,
                    theme: "Educación, sensibilización e información",
                    icon: "fas fa-graduation-cap",
                    colorClass: "quote-yellow",
                    frequency: "9 respuestas (28,1 %)",
                    badgeText: "Alta presencia",
                    badgeIcon: "fas fa-trending-up",
                    quoteText: "\"Educación y sensibilización para el cuidado del adulto mayor\\nProgramas de inclusión en la participación de programas del barrio\"",
                    responseId: "Respuesta #1"
                },
                {
                    id: 5,
                    theme: "Salud, cuidado y servicios de apoyo",
                    icon: "fas fa-heart",
                    colorClass: "quote-purple",
                    frequency: "8 respuestas (25,0 %)",
                    badgeText: "Presencia media",
                    badgeIcon: "fas fa-chart-bar",
                    quoteText: "\"Alianzas comunitarias y solidaridad.\\n\\nMejorar atención en salud\\n\\nQue haya oportunidad de buscar y ver qué necesidades hay de las personas que viven solos para prestarles atención\"",
                    responseId: "Respuesta #5"
                },
                {
                    id: 6,
                    theme: "Vivienda, centros y ciudad amigable con las personas mayores",
                    icon: "fas fa-home",
                    colorClass: "quote-orange",
                    frequency: "5 respuestas (15,6 %)",
                    badgeText: "Presencia media",
                    badgeIcon: "fas fa-chart-bar",
                    quoteText: "\"Quisiera que se ocupen de eso de la ciudad senior para el adulto mayor con acceso a personas con dificultades.\"",
                    responseId: "Respuesta #31"
                },
                {
                    id: 7,
                    theme: "Seguridad y protección",
                    icon: "fas fa-shield-alt",
                    colorClass: "quote-cyan",
                    frequency: "4 respuestas (12,5 %)",
                    badgeText: "Presencia media",
                    badgeIcon: "fas fa-chart-bar",
                    quoteText: "\"Mayor vigilancia, rondas más seguidas de la policía,\"",
                    responseId: "Respuesta #17"
                },
                {
                    id: 8,
                    theme: "Economía, recursos y equidad",
                    icon: "fas fa-coins",
                    colorClass: "quote-orange",
                    frequency: "3 respuestas (9,4 %)",
                    badgeText: "Presencia focalizada",
                    badgeIcon: "fas fa-chart-bar",
                    quoteText: "\"Que puedan contar con ayuda económica como otros estratos\"",
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

};