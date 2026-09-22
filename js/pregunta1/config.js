const SITE_DATA = {
    // Configuración del Menú de navegación superior con iconos asignados
    navigation: [
        { id: "index", label: "General", icon: "fas fa-home", active: false, url:"../index.html" },
        { id: "pregunta1", label: "Pregunta 1", icon: "fas fa-user-friends", active: true, url:"pregunta1.html" },
        { id: "pregunta2", label: "Pregunta 2", icon: "fas fa-heartbeat", active: false, url:"pregunta2.html" },
        { id: "pregunta3", label: "Pregunta 3", icon: "fas fa-users", active: false, url:"pregunta3.html" },
    ],
    // NUEVO: Métricas del Resumen General para la Pregunta 1
    summaryMetrics: [
        {
            label: "Respuestas analizadas",
            value: 123,
            icon: "fas fa-users-cog",
            colorClass: "metric-purple"
        },
        {
            label: "Respuestas válidas",
            value: 121,
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
            value: 7,
            icon: "fas fa-folder-open",
            colorClass: "metric-blue"
        },
        {
            label: "Subtemas identificados",
            value: 47,
            icon: "fas fa-sitemap",
            colorClass: "metric-pink"
        },
        {
            label: "Palabras únicas",
            value: 1091,
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

    // NUEVA ESTRUCTURA DE DATOS COMPLETA PARA EL ANÁLISIS TEMÁTICO
    thematicAnalysis: {
            summaryAnalyticalBlock: {
                    title: "Resumen analítico",
                    subtitle: "Síntesis de los principales hallazgos del análisis temático y léxico de las 121 respuestas válidas.",

                    interpretationTitle: "Interpretación general",

                    interpretationText: "Los resultados muestran que las preocupaciones de los participantes se concentran principalmente en las condiciones de movilidad, infraestructura y espacio público, seguidas por la seguridad e inseguridad y por las condiciones económicas, los servicios y la inclusión. También presentan una presencia importante la soledad y el aislamiento, así como los aspectos relacionados con la salud, el cuidado y el bienestar. El vocabulario más frecuente está fuertemente asociado con aceras, calle, inseguridad, seguridad, espacio y movilidad, mientras que las coocurrencias muestran una relación estrecha entre las condiciones físicas del entorno y los riesgos que enfrentan las personas mayores al desplazarse. De manera adicional, emerge una dimensión específica relacionada con el edadismo, el reconocimiento de las capacidades y la participación de las personas mayores.",

                    footnote: "Los porcentajes se calculan sobre las 121 respuestas válidas. Una misma respuesta puede estar asociada a más de un tema.",

                    cards: [
                        {
                        type: "theme",
                        badge: "Tema más frecuente",
                        title: "Movilidad, infraestructura y espacio público",
                        value: "51",
                        unit: "respuestas",
                        percentage: "42,1 %",
                        subtext: "Frecuencia sobre 121 respuestas válidas",
                        icon: "fas fa-walking",
                        bgClass: "bg-primary-subtle text-primary"
                        },
                        {
                        type: "theme",
                        badge: "Segundo tema más frecuente",
                        title: "Seguridad e inseguridad",
                        value: "45",
                        unit: "respuestas",
                        percentage: "37,2 %",
                        subtext: "Frecuencia sobre 121 respuestas válidas",
                        icon: "fas fa-shield-alt",
                        bgClass: "bg-success-subtle text-success"
                        },
                        {
                        type: "theme",
                        badge: "Tercer tema más frecuente",
                        title: "Economía, servicios, participación e inclusión",
                        value: "44",
                        unit: "respuestas",
                        percentage: "36,4 %",
                        subtext: "Frecuencia sobre 121 respuestas válidas",
                        icon: "fas fa-hands-helping",
                        bgClass: "bg-info-subtle text-info"
                        },
                        {
                        type: "lexical",
                        badge: "Palabra más frecuente",
                        title: "aceras",
                        value: "29",
                        unit: "menciones",
                        percentage: "24,0 %",
                        subtext: "Frecuencia sobre 121 respuestas válidas",
                        icon: "font-weight: bold; font-family: sans-serif;",
                        isTextIcon: true,
                        bgClass: "bg-purple-subtle text-purple"
                        },
                        {
                        type: "relation",
                        badge: "Relación más fuerte",
                        title: "aceras ↔ calle",
                        description: "Esta es una de las relaciones de coocurrencia más frecuentes. Evidencia la asociación entre las condiciones de las aceras y la necesidad de desplazarse por la calle, vinculando infraestructura, movilidad y riesgo para los peatones.",
                        icon: "fas fa-link",
                        bgClass: "bg-warning-subtle text-warning"
                        },
                        {
                        type: "corpus",
                        badge: "Corpus analizado",
                        value: "1091",
                        unit: "palabras únicas",
                        description: "Términos distintos identificados después del proceso de limpieza y normalización del texto.",
                        icon: "fas fa-file-alt",
                        bgClass: "bg-primary-subtle text-primary"
                        }
                    ]
                    },
        visualizations: {
                title: "Distribución de temas identificados",
                subtitle: "El análisis temático permitió identificar siete temas principales en las 121 respuestas válidas. Cada respuesta puede estar asociada a más de un tema, por lo que los porcentajes no suman 100 %.",
                infoBox: "La frecuencia indica el número de respuestas en las que aparece cada tema.",
                footnote: "Una misma respuesta puede pertenecer a más de un tema.",

                interpretation: "Las respuestas se concentran principalmente en las condiciones de movilidad, infraestructura y espacio público, seguidas por la seguridad e inseguridad y por las condiciones económicas, los servicios y la inclusión. La soledad, el aislamiento y las redes de apoyo, junto con la salud, el cuidado y el bienestar, también presentan una presencia importante. En conjunto, los resultados muestran que el bienestar de las personas mayores es percibido como un fenómeno relacionado simultáneamente con el entorno urbano, la seguridad, las redes de apoyo, el acceso a servicios y las condiciones socioeconómicas.",

                maxResponses: 51,

                items: [
                    {
                    icon: "fas fa-walking",
                    theme: "Movilidad, infraestructura y espacio público",
                    count: 51,
                    percentage: "42,1 %"
                    },
                    {
                    icon: "fas fa-shield-alt",
                    theme: "Seguridad e inseguridad",
                    count: 45,
                    percentage: "37,2 %"
                    },
                    {
                    icon: "fas fa-hands-helping",
                    theme: "Economía, servicios, participación e inclusión",
                    count: 44,
                    percentage: "36,4 %"
                    },
                    {
                    icon: "fas fa-user",
                    theme: "Soledad, aislamiento y redes de apoyo",
                    count: 41,
                    percentage: "33,9 %"
                    },
                    {
                    icon: "fas fa-heart",
                    theme: "Salud, cuidado y bienestar",
                    count: 38,
                    percentage: "31,4 %"
                    },
                    {
                    icon: "fas fa-volume-up",
                    theme: "Ambiente, ruido, residuos y convivencia",
                    count: 30,
                    percentage: "24,8 %"
                    },
                    {
                    icon: "fas fa-user-check",
                    theme: "Edadismo, reconocimiento y participación de las personas mayores",
                    count: 5,
                    percentage: "4,1 %"
                    }
                ]
                },

        // 3. Análisis léxico
        lexicalBlock: {
                title: "Análisis léxico",

                description: "El análisis del vocabulario permite identificar los términos más utilizados por los participantes. La frecuencia de palabras muestra los conceptos con mayor presencia en sus respuestas, mientras que la nube de palabras ofrece una representación visual de los términos más relevantes del corpus.",

                footnote: "La frecuencia corresponde al número de apariciones de cada término en las 121 respuestas válidas. Se excluyeron palabras vacías, conectores y términos sin valor analítico.",

                frequentWords: {
                    maxMentions: 29,

                    items: [
                    { word: "aceras", count: 29, percentage: "24,0 %" },
                    { word: "soledad", count: 24, percentage: "19,8 %" },
                    { word: "calle", count: 19, percentage: "15,7 %" },
                    { word: "inseguridad", count: 18, percentage: "14,9 %" },
                    { word: "seguridad", count: 15, percentage: "12,4 %" },
                    { word: "espacio", count: 14, percentage: "11,6 %" },
                    { word: "vida", count: 14, percentage: "11,6 %" },
                    { word: "estado", count: 13, percentage: "10,7 %" },
                    { word: "movilidad", count: 13, percentage: "10,7 %" },
                    { word: "andenes", count: 12, percentage: "9,9 %" }
                    ]
                },

                wordCloud: [
                    { text: "aceras", size: "2.6rem", color: "#6f42c1", weight: "bold" },
                    { text: "soledad", size: "2.3rem", color: "#198754", weight: "bold" },
                    { text: "calle", size: "2.0rem", color: "#0d6efd", weight: "bold" },
                    { text: "inseguridad", size: "1.9rem", color: "#8a3ffc",weight: "bold" },
                    { text: "seguridad", size: "1.7rem", color: "#0d6efd", weight: "bold" },
                    { text: "espacio", size: "1.6rem", color: "#20c997", weight: "bold" },
                    { text: "movilidad", size: "1.5rem", color: "#495057", weight: "normal" },
                    { text: "andenes", size: "1.4rem", color: "#ff8b26", weight: "normal" },
                    { text: "carros", size: "1.4rem", color: "#212529", weight: "normal" },
                    { text: "cuidado", size: "1.4rem", color: "#6f42c1", weight: "normal" },
                    { text: "ruido", size: "1.4rem", color: "#198754", weight: "normal" },
                    { text: "motos", size: "1.3rem", color: "#0d6efd", weight: "normal" },
                    { text: "salud", size: "1.3rem", color: "#8a3ffc", weight: "normal" },
                    { text: "caminar", size: "1.2rem", color: "#20c997", weight: "normal" },
                    { text: "actividades", size: "1.2rem", color: "#ff8b26", weight: "normal" }
                ]
                } ,// Cierre definitivo de lexicalBlock

         // Dentro de SITE_DATA.thematicAnalysis:
        networkBlock: {
                title: "Red de coocurrencias",

                description: "La red de coocurrencias muestra qué palabras aparecen conjuntamente dentro de las mismas respuestas. Los nodos representan palabras y las aristas indican su coocurrencia. El tamaño del nodo refleja la frecuencia de la palabra y el grosor de la línea la fuerza de la relación.",

                badgeWords: 30,
                badgeCooccurrences: 628,

                footnote: "Se identificaron 628 pares de términos con al menos dos coocurrencias dentro de las respuestas válidas. Se excluyeron conectores y palabras vacías.",

                guideTitle: "¿Cómo leer esta red?",

                guideText: "Los nodos más grandes son las palabras más frecuentes. Las líneas más gruesas indican relaciones más fuertes, es decir, términos que aparecen conjuntamente en un mayor número de respuestas. Los colores permiten agrupar las palabras según las temáticas identificadas.",

                groups: [
                    {
                    color: "#3b5998",
                    theme: "Movilidad, infraestructura y espacio público"
                    },
                    {
                    color: "#33bfa8",
                    theme: "Seguridad e inseguridad"
                    },
                    {
                    color: "#72c272",
                    theme: "Soledad, aislamiento y redes de apoyo"
                    },
                    {
                    color: "#8e67b9",
                    theme: "Salud, cuidado y bienestar"
                    },
                    {
                    color: "#fff1b3",
                    theme: "Ambiente, ruido, residuos y convivencia"
                    },
                    {
                    color: "#ffa630",
                    theme: "Economía, servicios, participación e inclusión"
                    },
                    {
                    color: "#c06c84",
                    theme: "Edadismo, reconocimiento y participación de las personas mayores"
                    }
                ]
                },
        
        // 2. Mapa Temático: Relación entre temas y subtemas
        map: [
                {
                    id: "map-1",
                    theme: "1. Movilidad, infraestructura y espacio público",
                    color: "#2f80ed",
                    subthemes: [
                    "Estado de aceras y andenes",
                    "Obstáculos y barreras arquitectónicas",
                    "Vehículos y motos en aceras",
                    "Señalización vial",
                    "Semáforos peatonales",
                    "Rampas y accesibilidad",
                    "Movilidad de personas con discapacidad",
                    "Congestión vial",
                    "Riesgo de caídas",
                    "Uso indebido del espacio público"
                    ]
                },
                {
                    id: "map-2",
                    theme: "2. Seguridad e inseguridad",
                    color: "#27ae60",
                    subthemes: [
                    "Hurtos y atracos",
                    "Temor a salir",
                    "Habitantes de calle",
                    "Vigilancia policial",
                    "Consumo y venta de drogas",
                    "Riesgo para peatones"
                    ]
                },
                {
                    id: "map-3",
                    theme: "3. Soledad, aislamiento y redes de apoyo",
                    color: "#f2994a",
                    subthemes: [
                    "Soledad",
                    "Aislamiento social",
                    "Abandono familiar",
                    "Falta de solidaridad",
                    "Falta de actividades",
                    "Baja asociatividad"
                    ]
                },
                {
                    id: "map-4",
                    theme: "4. Salud, cuidado y bienestar",
                    color: "#9b51e0",
                    subthemes: [
                    "Atención médica",
                    "Salud física",
                    "Salud mental",
                    "Cuidadores",
                    "Capacitación de cuidadores",
                    "Alimentación",
                    "Sobrecarga familiar"
                    ]
                },
                {
                    id: "map-5",
                    theme: "5. Ambiente, ruido, residuos y convivencia",
                    color: "#e67e22",
                    subthemes: [
                    "Contaminación auditiva",
                    "Ruido de establecimientos y eventos",
                    "Basuras",
                    "Animales y excrementos",
                    "Contaminación ambiental",
                    "Deterioro de parques"
                    ]
                },
                {
                    id: "map-6",
                    theme: "6. Economía, servicios, participación e inclusión",
                    color: "#16a085",
                    subthemes: [
                    "Costo de vida",
                    "Vivienda y alquileres",
                    "Pobreza",
                    "Acceso a programas",
                    "Información y divulgación",
                    "Participación comunitaria",
                    "Brecha digital",
                    "Gentrificación",
                    "Liderazgos y manipulación comunitaria"
                    ]
                },
                {
                    id: "map-7",
                    theme: "7. Edadismo, reconocimiento y participación de las personas mayores",
                    color: "#c06c84",
                    subthemes: [
                    "Edadismo y discriminación por edad",
                    "Reconocimiento de capacidades y productividad",
                    "Reconocimiento e identidad de las personas mayores"
                    ]
                }
                ],

     

        // 4. Citas representativas
        quotes: {
            title: "Citas representativas por tema",
            subtitle: "Evidencias textuales seleccionadas de las respuestas de los participantes.",

            footnote: "Las citas corresponden a respuestas textuales seleccionadas por su representatividad dentro del tema identificado durante la codificación cualitativa.",

            items: [
                {
                id: 1,
                theme: "Movilidad, infraestructura y espacio público",
                icon: "fas fa-walking",
                colorClass: "quote-blue",
                frequency: "51 respuestas (42,1 %)",
                badgeText: "Tema más frecuente",
                badgeIcon: "far fa-star",
                quoteText: "\"La principal dificultad que encuentra un adulto mayor en la comuna 11 es la falta de espacio (en las aceras) pues generalmente son ocupadas por construcciones en desarrollo. Esta dificultad hace que el adulto mayor tenga que usar para su desplazamiento las calles que tienen mucha circulación y son peligrosas.\"",
                responseId: "Respuesta #43"
                },

                {
                id: 2,
                theme: "Seguridad e inseguridad",
                icon: "fas fa-shield-alt",
                colorClass: "quote-green",
                frequency: "45 respuestas (37,2 %)",
                badgeText: "Alta presencia",
                badgeIcon: "fas fa-trending-up",
                quoteText: "\"La seguridad en el sector, el no poder caminar tranquilamente pues el adulto mayor es presa fácil de los atracadores.\"",
                responseId: "Respuesta #60"
                },

                {
                id: 3,
                theme: "Economía, servicios, participación e inclusión",
                icon: "fas fa-hands-helping",
                colorClass: "quote-cyan",
                frequency: "44 respuestas (36,4 %)",
                badgeText: "Alta presencia",
                badgeIcon: "fas fa-trending-up",
                quoteText: "\"Primero. La falta de que los tengan en cuenta. Segundo que dentro de la comuna no hay quien se preocupe por estar promocionando que hay para ellos y esto es un barrio de viejos.\"",
                responseId: "Respuesta #78"
                },

                {
                id: 4,
                theme: "Soledad, aislamiento y redes de apoyo",
                icon: "fas fa-user",
                colorClass: "quote-yellow",
                frequency: "41 respuestas (33,9 %)",
                badgeText: "Alta presencia",
                badgeIcon: "fas fa-trending-up",
                quoteText: "\"La soledad. Hay muchos adultos mayores que están habitando en este momento la comunidad y están solos, enfermos y aislados.\"",
                responseId: "Respuesta #50"
                },

                {
                id: 5,
                theme: "Salud, cuidado y bienestar",
                icon: "fas fa-heart",
                colorClass: "quote-purple",
                frequency: "38 respuestas (31,4 %)",
                badgeText: "Alta presencia",
                badgeIcon: "fas fa-trending-up",
                quoteText: "\"La salud física, mental y eventualmente el factor económico para acceder a servicios cercanos\"",
                responseId: "Respuesta #84"
                },

                {
                id: 6,
                theme: "Ambiente, ruido, residuos y convivencia",
                icon: "fas fa-volume-up",
                colorClass: "quote-orange",
                frequency: "30 respuestas (24,8 %)",
                badgeText: "Alta presencia",
                badgeIcon: "fas fa-trending-up",
                quoteText: "\"Que el espacio público y la tranquilidad del sueño se perdió por las tiendas q se convierten en cantinas de venta de alcohol y con mesas en la acera no permitiendo el tránsito normal de las personas. ( la Milagrosa ) y panaderías como café y trigo q venden trago y colocan música a altas horas de la noche y con volumen alto\"",
                responseId: "Respuesta #120"
                },

                {
                id: 7,
                theme: "Edadismo, reconocimiento y participación de las personas mayores",
                icon: "fas fa-user-check",
                colorClass: "quote-pink",
                frequency: "5 respuestas (4,1 %)",
                badgeText: "Presencia puntual",
                badgeIcon: "fas fa-chart-bar",
                quoteText: "\"Siento que el edadismo atraviesa mi día a día: me preguntan insistentemente mi edad, como si esta determinara mi capacidad de pensar o actuar. Incluso antes de cumplir la edad de jubilación, ya me preguntaban cuándo me iba a jubilar, como si a partir de cierta edad se asumiera que perdemos la capacidad laboral.\"",
                responseId: "Respuesta #31"
                }
            ]
            },

        
       
    }, 
};