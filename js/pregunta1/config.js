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
            value: 73,
            icon: "fas fa-users-cog",
            colorClass: "metric-purple"
        },
        {
            label: "Respuestas válidas",
            value: 69,
            icon: "fas fa-check-circle",
            colorClass: "metric-green"
        },
        {
            label: "Respuestas No analizables",
            value: 3,
            icon: "fas fa-users-cog",
            colorClass: "metric-purple"
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
            value: 34,
            icon: "fas fa-sitemap",
            colorClass: "metric-pink"
        },
        {
            label: "Palabras únicas",
            value: 711,
            icon: "fas fa-sitemap",
            colorClass: "metric-pink",
            helpText: "Número de términos distintos identificados después del proceso de limpieza y normalización del texto."
        },
        
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
            subtitle: "Síntesis de los principales hallazgos del análisis temático y léxico de las 69 respuestas válidas.",
            interpretationTitle: "Interpretación general",
            interpretationText: "Los resultados muestran que las principales preocupaciones de los participantes se concentran en la movilidad, la infraestructura y el espacio público, junto con la seguridad e inseguridad. También adquieren una presencia importante la soledad, el aislamiento y las redes de apoyo. El vocabulario utilizado evidencia una preocupación recurrente por las aceras, las calles, la movilidad y la seguridad, mientras que las coocurrencias muestran cómo las dificultades físicas del entorno se relacionan con los riesgos que enfrentan los adultos mayores al desplazarse. En paralelo, las referencias a la soledad, el cuidado y la falta de actividades muestran que el bienestar no se limita a las condiciones urbanas, sino que también involucra dimensiones sociales, familiares y de atención.",
            footnote: "Los porcentajes se calculan sobre las 69 respuestas válidas. Una misma respuesta puede estar asociada a más de un tema.",
            cards: [
                {
                    type: "theme",
                    badge: "Tema más frecuente",
                    title: "Movilidad, infraestructura y espacio público",
                    value: "33",
                    unit: "respuestas",
                    percentage: "47,8 %",
                    subtext: "Frecuencia sobre 69 respuestas válidas",
                    icon: "fas fa-trophy",
                    bgClass: "bg-primary-subtle text-primary"
                },
                {
                    type: "theme",
                    badge: "Segundo tema más frecuente",
                    title: "Seguridad e inseguridad",
                    value: "33",
                    unit: "respuestas",
                    percentage: "47,8 %",
                    subtext: "Frecuencia sobre 69 respuestas válidas",
                    icon: "fas fa-users",
                    bgClass: "bg-success-subtle text-success"
                },
                {
                    type: "theme",
                    badge: "Tercer tema más frecuente",
                    title: "Soledad, aislamiento y redes de apoyo",
                    value: "28",
                    unit: "respuestas",
                    percentage: "40,6 %",
                    subtext: "Frecuencia sobre 69 respuestas válidas",
                    icon: "fas fa-shield-alt",
                    bgClass: "bg-info-subtle text-info"
                },
                {
                    type: "lexical",
                    badge: "Palabra más frecuente",
                    title: "aceras",
                    value: "24",
                    unit: "menciones",
                    percentage: "34,8 %",
                    subtext: "Frecuencia sobre 69 respuestas válidas",
                    icon: "font-weight: bold; font-family: sans-serif;",
                    isTextIcon: true,
                    bgClass: "bg-purple-subtle text-purple" // Puedes mapearlo a tus clases personalizadas
                },
                {
                    type: "relation",
                    badge: "Relación más fuerte",
                    unit: "8 coocurrencias",
                    title: "aceras ↔ calles",
                    description: "Es la coocurrencia más frecuente identificada en las respuestas, conectada principalmente con <strong>movilidad e infraestructura</strong>.",
                    icon: "fas fa-link",
                    bgClass: "bg-warning-subtle text-warning"
                },
                {
                    type: "corpus",
                    badge: "Corpus analizad",
                    value: "711",
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
            interpretation: "Los problemas relacionados con la movilidad, la infraestructura y el espacio público, junto con la seguridad e inseguridad, presentan la mayor frecuencia en las respuestas. En segundo nivel aparecen la soledad y el aislamiento, seguidos por las condiciones ambientales y de convivencia, así como por aspectos relacionados con la salud, el cuidado, la economía y el acceso a servicios. En conjunto, los resultados muestran que los participantes perciben el bienestar de los adultos mayores como un fenómeno multidimensional en el que interactúan las condiciones físicas del entorno, la seguridad, las relaciones sociales y familiares, y las posibilidades de acceso a servicios y actividades.",
            maxResponses: 35,
            items: [
                { icon: "fas fa-walking", theme: "Movilidad, infraestructura y espacio público", count: 33, percentage: "47,8 %" },
                { icon: "fas fa-hands-helping", theme: "Seguridad e inseguridad", count: 33, percentage: "47,8 %" },
                { icon: "fas fa-lock", theme: "Soledad, aislamiento y redes de apoyo", count: 28, percentage: "40,6 %" },
                { icon: "fas fa-user", theme: "Salud, cuidado y bienestar", count: 22, percentage: "31,9 %" },
                { icon: "fas fa-tree", theme: "Ambiente, ruido, residuos y convivencia", count: 24, percentage: "34,8 %" },
                { icon: "fas fa-handshake", theme: "Economía, servicios, participación e inclusión", count: 23, percentage: "33,3 %" }
            ]
        },

        // 3. Análisis léxico
        lexicalBlock: {
            title: "Análisis léxico",
            description: "El análisis del vocabulario permite identificar los términos más utilizados por los participantes. La frecuencia de palabras muestra los conceptos con mayor presencia en sus respuestas, mientras que la nube de palabras ofrece una representación visual de los términos más relevantes del corpus.",
            footnote: "La frecuencia corresponds al número de veces que cada palabra aparece en el conjunto de respuestas válidas (69). Se excluyeron palabras vacías, conectores y términos con menos de 2 ocurrencias.",
            frequentWords: {
                maxMentions: 35,
                items: [
                    { word: "aceras", count: 24, percentage: "34,8 %" },
                    { word: "falta", count: 18, percentage: "26,1 %" },
                    { word: "calle", count: 16, percentage: "23,2 %" },
                    { word: "personas", count: 16, percentage: "23,2 %" },
                    { word: "mayores", count: 14, percentage: "20,3 %" },
                    { word: "mayor", count: 13, percentage: "18,8 %" },
                    { word: "adulto", count: 12, percentage: "17,4 %" },
                    { word: "inseguridad", count: 12, percentage: "17,4 %" },
                    { word: "seguridad", count: 11, percentage: "15,9 %" },
                    { word: "soledad", count: 11, percentage: "15,9 %" },
                    { word: "movilidad", count: 11, percentage: "15,9 %" },
                    { word: "adultos", count: 11, percentage: "15,9 %" },
                    { word: "motos", count: 10, percentage: "14,5 %" },
                    { word: "salud", count: 9, percentage: "13,0 %" },
                    { word: "carros", count: 9, percentage: "13,0 %" },
                    { word: "espacio", count: 9, percentage: "13,0 %" },
                    { word: "basuras", count: 8, percentage: "11,6 %" },
                    { word: "ruido", count: 7, percentage: "10,1 %" },
                    { word: "andenes", count: 7, percentage: "10,1 %" },
                    { word: "actividades", count: 7, percentage: "10,1 %" },
                    { word: "caminar", count: 7, percentage: "10,1 %" },
                    
                ]
            }, 

            // Nube de palabras metida DENTRO de lexicalBlock
            wordCloud: [
                { text: "aceras", size: "2.6rem", color: "#6f42c1", weight: "bold" },
                { text: "calle", size: "2.0rem", color: "#198754", weight: "bold" },
                { text: "inseguridad", size: "1.7rem", color: "#0d6efd", weight: "600" },
                { text: "seguridad", size: "1.2rem", color: "#8a3ffc", weight: "normal" },
                { text: "soledad", size: "1.2rem", color: "#0d6efd", weight: "normal" },
                { text: "movilidad", size: "1.2rem", color: "#6f42c1", weight: "normal" },
                { text: "motos", size: "1.2rem", color: "#6f42c1", weight: "normal" },
                { text: "salud", size: "1.1rem", color: "#20c997", weight: "normal" },
                { text: "carros", size: "1.0rem", color: "#495057", weight: "normal" },
                { text: "espacio", size: "1.0rem", color: "#ff8b26", weight: "normal" },
                { text: "basuras", size: "1.0rem", color: "#495057", weight: "normal" },
                { text: "ruido", size: "1.0rem", color: "#6f42c1", weight: "normal" },
                { text: "andenes", size: "1.0rem", color: "#0d6efd", weight: "normal" },
                { text: "actividades", size: "1.0rem", color: "#0080ff", weight: "normal" },
                { text: "caminar", size: "1.0rem", color: "#212529", weight: "normal" }
            ]
        } ,// Cierre definitivo de lexicalBlock

         // Dentro de SITE_DATA.thematicAnalysis:
        networkBlock: {
            title: "Red de coocurrencias",
            description: "La red de coocurrencias muestra qué palabras aparecen conjuntamente dentro de las mismas respuestas. Los nodos representan palabras y las aristas (líneas) indican su coocurrencia. El tamaño del nodo refleja la frecuencia de la palabra y el grosor de la línea la fuerza de la relación.",
            badgeWords: 15,
            badgeCooccurrences: 52,
            footnote: "La red muestra las palabras más relevantes del corpus y sus coocurrencias más significativas. Se excluyeron conectores, palabras vacías y términos con muy baja frecuencia.",
            guideTitle: "¿Cómo leer esta red?",
            guideText: "Los nodos más grandes son las palabras más frecuentes. Las líneas más gruesas indican relaciones más fuertes (aparecen juntas con mayor frecuencia). Los colores agrupan palabras por temática.",
            groups: [
                { color: "#2970c3", theme: "Movilidad y entorno" },
                { color: "#28965a", theme: "SSeguridad y convivencia" },
                { color: "#8e67b9", theme: "Bienestar y cuidado" },
            ]
        },
        
        // 2. Mapa Temático: Relación entre temas y subtemas
        map: [
                {
                    id: "map-1",
                    theme: "1. Movilidad, infraestructura y espacio público",
                    color: "#9b51e0", // Púrpura
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
                    color: "#2f80ed", // Azul
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
                    color: "#27ae60", // Verde
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
                    color: "#f2994a", // Naranja
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
                    color: "#eb5757", // Rojo
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
                    color: "#56ccf2", // Celeste
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
            frequency: "33 respuestas (47,8 %)",
            badgeText: "Tema más frecuente",
            badgeIcon: "far fa-star",
            quoteText: '"La principal dificultad que encuentra un adulto mayor en la comuna 11 es la falta de espacio (en las aceras) pues generalmente son ocupadas por construcciones en desarrollo. Esta dificultad hace que el adulto mayor tenga que usar para su desplazamiento las calles que tienen mucha circulación y son peligrosas."',
            responseId: "Respuesta #72"
        },
        {
            id: 2,
            theme: "Seguridad e inseguridad",
            icon: "fas fa-shield-alt",
            colorClass: "quote-green",
            frequency: "33 respuestas (47,8 %)",
            badgeText: "Tema más frecuente",
            badgeIcon: "far fa-star",
            quoteText: '"La seguridad en el sector, el no poder caminar tranquilamente pues el adulto mayor es presa fácil de los atracadores."',
            responseId: "Respuesta #67"
        },
        {
            id: 3,
            theme: "Soledad, aislamiento y redes de apoyo",
            icon: "fas fa-user",
            colorClass: "quote-yellow",
            frequency: "28 respuestas (40,6 %)",
            badgeText: "Alta presencia",
            badgeIcon: "fas fa-trending-up",
            quoteText: '"La soledad en sus apartamentos"',
            responseId: "Respuesta #50"
        },
        {
            id: 4,
            theme: "Salud, cuidado y bienestar",
            icon: "fas fa-heart",
            colorClass: "quote-purple",
            frequency: "22 respuestas (31,9 %)",
            badgeText: "Alta presencia",
            badgeIcon: "fas fa-trending-up",
            quoteText: '"La salud física, mental y eventualmente el factor económico para acceder a servicios cercanos"',
            responseId: "Respuesta #70"
        },
        {
            id: 5,
            theme: "Ambiente, ruido, residuos y convivencia",
            icon: "fas fa-volume-up",
            colorClass: "quote-orange",
            frequency: "24 respuestas (34,8 %)",
            badgeText: "Alta presencia",
            badgeIcon: "fas fa-trending-up",
            quoteText: '"Que el espacio público y la tranquilidad del sueño se perdió por las tiendas q se convierten en cantinas de venta de alcohol y con mesas en la acera no permitiendo el tránsito normal de las personas. ( la Milagrosa ) y panaderías como café y trigo q venden trago y colocan música a altas horas de la noche y con volumen alto"',
            responseId: "Respuesta #64"
        },
        {
            id: 6,
            theme: "Economía, servicios, participación e inclusión",
            icon: "fas fa-hand-holding-usd",
            colorClass: "quote-cyan",
            frequency: "23 respuestas (33,3 %)",
            badgeText: "Alta presencia",
            badgeIcon: "fas fa-trending-up",
            quoteText: '"Primero. La falta de que los tengan en cuenta. Segundo que dentro de la comuna no hay quien se preocupe por estar promocionando que hay para ellos y esto es un barrio de viejos."',
            responseId: "Respuesta #36"
        }
    ]
},

        
       
    }, 
};