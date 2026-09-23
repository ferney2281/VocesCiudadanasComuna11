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
        { id: "voces_accion", label: "Voces en acción", icon: "fas fa-bullhorn", active: false, url: "voces_accion.html" },
    ],
    // NUEVO: Métricas del RESUMEN GENERAL para la Pregunta 2
    summaryMetrics: [
        {
            label: "Respuestas analizadas",
            value: 62,
            icon: "fas fa-users-cog",
            colorClass: "metric-purple"
        },
        {
            label: "Respuestas con contenido causal",
            value: 46,
            icon: "fas fa-check-circle",
            colorClass: "metric-green"
        },
        {
            label: "Respuestas no aprovechables para causas",
            value: 16,
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
            value: 27,
            icon: "fas fa-sitemap",
            colorClass: "metric-pink"
        },
        {
            label: "Palabras únicas",
            value: 587,
            icon: "fas fa-sitemap",
            colorClass: "metric-pink",
            helpText: "Número de términos distintos identificados después del proceso de limpieza y normalización del texto causal aprovechable."
        }
        ],

    
    // NUEVA ESTRUCTURA DE DATOS COMPLETA PARA EL ANÁLISIS TEMÁTICO
    thematicAnalysis: {

        //RESUMEN ANALÍTICO
            summaryAnalyticalBlock: {
            title: "Resumen analítico",
            subtitle: "Síntesis de los principales hallazgos del análisis causal y léxico de las 46 respuestas con contenido causal aprovechable.",
            interpretationTitle: "Interpretación general",
            interpretationText: "Las causas identificadas muestran que los problemas que afectan el bienestar y cuidado de las personas mayores no se explican por un único factor. Las respuestas señalan principalmente condiciones relacionadas con el entorno urbano y la gestión del espacio público, la institucionalidad y el control, y las redes familiares y sociales. También aparecen factores asociados con la transformación económica y territorial, las condiciones de cuidado y salud, la cultura ciudadana y las condiciones de seguridad. En conjunto, las respuestas permiten interpretar los problemas identificados en la Pregunta 1 como resultado de la interacción entre transformaciones familiares y demográficas, condiciones del territorio, capacidad institucional, condiciones económicas y prácticas sociales.",
            footnote: "Los porcentajes se calculan sobre las 46 respuestas con contenido causal aprovechable. Una misma respuesta puede estar asociada a más de un tema.",
            cards: [
                {
                type: "theme",
                badge: "Tema más frecuente",
                title: "Entorno urbano, movilidad, espacio público y convivencia",
                value: "22",
                unit: "respuestas",
                percentage: "47,8 %",
                subtext: "Frecuencia sobre 46 respuestas con contenido causal"
                },
                {
                type: "theme",
                badge: "Segundo tema más frecuente",
                title: "Institucionalidad, planificación, información y participación",
                value: "20",
                unit: "respuestas",
                percentage: "43,5 %",
                subtext: "Frecuencia sobre 46 respuestas con contenido causal"
                },
                {
                type: "theme",
                badge: "Tercer tema más frecuente",
                title: "Redes familiares, apoyo social y cambios demográficos",
                value: "18",
                unit: "respuestas",
                percentage: "39,1 %",
                subtext: "Frecuencia sobre 46 respuestas con contenido causal"
                },
                {
                type: "lexical",
                badge: "Palabra más frecuente",
                title: "soledad",
                value: "9",
                unit: "apariciones",
                percentage: "19,6 %",
                subtext: "Frecuencia sobre 46 respuestas analizadas"
                },
                {
                type: "relation",
                badge: "Relaciones más frecuentes",
                title: "apoyo ↔ viven",
                description: "Esta relación aparece principalmente en respuestas que explican la soledad a partir de la ausencia o reducción de redes familiares y sociales. También destacan relaciones entre acceso y soledad, y entre espacio público y condiciones territoriales.",
                icon: "fas fa-link",
                bgClass: "bg-warning-subtle text-warning"
                },
                {
                type: "corpus",
                badge: "Corpus analizado",
                value: "587",
                unit: "palabras únicas",
                description: "Términos distintos identificados después de la limpieza y normalización del texto causal aprovechable.",
                icon: "fas fa-file-alt",
                bgClass: "bg-primary-subtle text-primary"
                }
            ]
        },
        //distribución de temas identificados
        visualizations: {
            title: "Distribución de causas identificadas",
            subtitle: "El análisis causal permitió identificar siete dimensiones principales en las 46 respuestas con contenido causal aprovechable. Una misma respuesta puede contener más de una causa, por lo que los porcentajes no suman 100 %.",
            infoBox: "La frecuencia indica el número de respuestas en las que se identificó contenido correspondiente a cada dimensión causal.",
            footnote: "Una misma respuesta puede pertenecer a más de un tema.",
            interpretation: "Las causas aparecen concentradas principalmente en las condiciones del entorno urbano y la gestión del espacio público, seguidas por factores institucionales y de planificación y por la transformación de las redes familiares y sociales. También adquieren relevancia las transformaciones económicas y territoriales, las condiciones de salud y cuidado, las prácticas culturales y las condiciones de seguridad.",
            maxResponses: 25,
            items: [
                {
                icon: "fas fa-road",
                theme: "Entorno urbano, movilidad, espacio público y convivencia",
                count: 22,
                percentage: "47,8 %"
                },
                {
                icon: "fas fa-landmark",
                theme: "Institucionalidad, planificación, información y participación",
                count: 20,
                percentage: "43,5 %"
                },
                {
                icon: "fas fa-users",
                theme: "Redes familiares, apoyo social y cambios demográficos",
                count: 18,
                percentage: "39,1 %"
                },
                {
                icon: "fas fa-city",
                theme: "Economía, gentrificación y transformación territorial",
                count: 15,
                percentage: "32,6 %"
                },
                {
                icon: "fas fa-heartbeat",
                theme: "Salud, cuidado y capacidades de atención",
                count: 13,
                percentage: "28,3 %"
                },
                {
                icon: "fas fa-handshake",
                theme: "Cultura ciudadana, empatía y reconocimiento",
                count: 14,
                percentage: "30,4 %"
                },
                {
                icon: "fas fa-shield-alt",
                theme: "Seguridad y control",
                count: 10,
                percentage: "21,7 %"
                }
            ]
            },

        //ANÁLISIS LÉXICO: Palabras más frecuentes, nube de palabras
        lexicalBlock: {
            title: "Análisis léxico",
            description: "El análisis del vocabulario permite identificar los términos más utilizados al explicar las causas de los problemas que afectan a las personas mayores. La frecuencia permite observar los conceptos que aparecen con mayor recurrencia dentro del corpus causal.",

            footnote: "La frecuencia corresponde al número de apariciones de cada término en las 46 respuestas con contenido causal aprovechable. Se excluyeron palabras vacías, conectores y términos sin valor analítico.<br><br>La palabra “soledad” continúa teniendo una presencia muy importante, pero aquí su significado cambia: no se trata únicamente de identificar la soledad como problema, sino de encontrar explicaciones como falta de acompañamiento, reducción de redes familiares, hijos que viven fuera, falta de tiempo y cambios demográficos.",

            frequentWords: {
                maxMentions: 30,
                items: [
                    { word: "soledad", count: 9, percentage: "19,6 %" },
                    { word: "necesidades", count: 7, percentage: "15,2 %" },
                    { word: "barrio", count: 7, percentage: "15,2 %" },
                    { word: "población", count: 6, percentage: "13,0 %" },
                    { word: "solo", count: 6, percentage: "13,0 %" },
                    { word: "solos", count: 5, percentage: "10,9 %" },
                    { word: "Laureles", count: 5, percentage: "10,9 %" },
                    { word: "control", count: 5, percentage: "10,9 %" },
                    { word: "espacios", count: 5, percentage: "10,9 %" },
                    { word: "familias", count: 5, percentage: "10,9 %" },
                    { word: "movilidad", count: 5, percentage: "10,9 %" },
                    { word: "vida", count: 5, percentage: "10,9 %" },
                    { word: "sectores", count: 4, percentage: "8,7 %" },
                    { word: "ciudad", count: 4, percentage: "8,7 %" },
                    { word: "sector", count: 4, percentage: "8,7 %" },
                    { word: "apoyo", count: 4, percentage: "8,7 %" },
                    { word: "viven", count: 4, percentage: "8,7 %" },
                    { word: "alto", count: 4, percentage: "8,7 %" },
                    { word: "general", count: 4, percentage: "8,7 %" },
                    { word: "espacio", count: 4, percentage: "8,7 %" },
                    { word: "publico", count: 4, percentage: "8,7 %" },
                    { word: "muchos", count: 4, percentage: "8,7 %" },
                    { word: "aceras", count: 4, percentage: "8,7 %" },
                    { word: "Medellin", count: 3, percentage: "6,5 %" },
                    { word: "servicios", count: 3, percentage: "6,5 %" }
                ]
            },

            // Nube de palabras metida DENTRO de lexicalBlock
            wordCloud: [
                { text: "soledad", size: "2.6rem", color: "#6f42c1", weight: "bold" },
                { text: "necesidades", size: "2.0rem", color: "#ffa630", weight: "bold" },
                { text: "barrio", size: "1.8rem", color: "#3b5998", weight: "bold" },
                { text: "población", size: "1.6rem", color: "#c06c84", weight: "600" },
                { text: "solo", size: "1.5rem", color: "#72c272", weight: "600" },
                { text: "familias", size: "1.4rem", color: "#72c272", weight: "normal" },
                { text: "movilidad", size: "1.4rem", color: "#3b5998", weight: "normal" },
                { text: "control", size: "1.3rem", color: "#33bfa8", weight: "normal" },
                { text: "espacios", size: "1.3rem", color: "#3b5998", weight: "normal" },
                { text: "apoyo", size: "1.2rem", color: "#72c272", weight: "normal" },
                { text: "Laureles", size: "1.2rem", color: "#ffa630", weight: "normal" },
                { text: "vida", size: "1.2rem", color: "#8e67b9", weight: "normal" },
                { text: "aceras", size: "1.1rem", color: "#3b5998", weight: "normal" },
                { text: "servicios", size: "1.1rem", color: "#8e67b9", weight: "normal" }
            ]
        } ,

        //RED DE COOCURRENCIAS
        networkBlock: {
        title: "Red de coocurrencias",
        description: "La red de coocurrencias muestra qué palabras aparecen conjuntamente dentro de las mismas respuestas causales. Los nodos representan palabras y las aristas indican su coocurrencia. El tamaño del nodo refleja la frecuencia de la palabra y el grosor de la línea la fuerza de la relación.",
        badgeWords: 30,
        badgeCooccurrences: 222,
        footnote: "Se identificaron 222 pares de términos con al menos dos coocurrencias dentro de las 46 respuestas con contenido causal aprovechable. Se excluyeron conectores y palabras vacías.",
        guideTitle: "¿Cómo leer esta red?",
        guideText: "Los nodos más grandes son las palabras más frecuentes. Las líneas más gruesas indican relaciones más fuertes, es decir, términos que aparecen conjuntamente en un mayor número de respuestas. Los colores permiten agrupar las palabras según las dimensiones causales identificadas.",
        groups: [
            {
            color: "#3b5998",
            theme: "Entorno urbano, movilidad, espacio público y convivencia"
            },
            {
            color: "#33bfa8",
            theme: "Seguridad y control"
            },
            {
            color: "#72c272",
            theme: "Redes familiares, apoyo social y cambios demográficos"
            },
            {
            color: "#8e67b9",
            theme: "Salud, cuidado y capacidades de atención"
            },
            {
            color: "#fff1b3",
            theme: "Cultura ciudadana, empatía y reconocimiento"
            },
            {
            color: "#ffa630",
            theme: "Economía, gentrificación y transformación territorial"
            },
            {
            color: "#c06c84",
            theme: "Institucionalidad, planificación, información y participación"
            }
        ]
        },
        
        // MAPA TEMATICO
        map: [
                {
                    id: "map-1",
                    theme: "Entorno urbano, movilidad, espacio público y convivencia",
                    color: "#3b5998",
                    subthemes: [
                    "Ocupación del espacio público",
                    "Crecimiento de negocios y talleres",
                    "Transformación de las vías peatonales",
                    "Deterioro y mantenimiento de infraestructura",
                    "Falta de accesibilidad",
                    "Ruido y actividades comerciales",
                    "Expansión urbana y vehicular"
                    ]
                },
                {
                    id: "map-2",
                    theme: "Institucionalidad, planificación, información y participación",
                    color: "#c06c84",
                    subthemes: [
                    "Falta de planificación",
                    "Débil control institucional",
                    "Falta de diagnóstico de necesidades",
                    "Baja participación comunitaria",
                    "Falta de divulgación",
                    "Desconocimiento de derechos",
                    "Brecha digital e informativa"
                    ]
                },
                {
                    id: "map-3",
                    theme: "Redes familiares, apoyo social y cambios demográficos",
                    color: "#72c272",
                    subthemes: [
                    "Reducción del acompañamiento familiar",
                    "Hijos o familiares que viven lejos",
                    "Falta de tiempo de los familiares",
                    "Redes de apoyo insuficientes",
                    "Envejecimiento demográfico",
                    "Baja natalidad",
                    "Aislamiento social"
                    ]
                },
                {
                    id: "map-4",
                    theme: "Economía, gentrificación y transformación territorial",
                    color: "#ffa630",
                    subthemes: [
                    "Gentrificación",
                    "Especulación inmobiliaria",
                    "Aumento del costo de vida",
                    "Transformación del uso del suelo",
                    "Expansión turística",
                    "Presión económica sobre hogares",
                    "Estratificación y pobreza oculta"
                    ]
                },
                {
                    id: "map-5",
                    theme: "Salud, cuidado y capacidades de atención",
                    color: "#8e67b9",
                    subthemes: [
                    "Falta de capacitación de cuidadores",
                    "Desconocimiento sobre el cuidado",
                    "Sobrecarga familiar",
                    "Barreras de acceso a salud",
                    "Falta de prevención",
                    "Enfermedades crónicas y envejecimiento",
                    "Necesidades de atención especializada"
                    ]
                },
                {
                    id: "map-6",
                    theme: "Cultura ciudadana, empatía y reconocimiento",
                    color: "#fff1b3",
                    subthemes: [
                    "Falta de empatía",
                    "Falta de sensibilidad",
                    "Indiferencia social",
                    "Incumplimiento de normas",
                    "Falta de cultura ciudadana",
                    "Desconocimiento de las necesidades de las personas mayores"
                    ]
                },
                {
                    id: "map-7",
                    theme: "Seguridad y control",
                    color: "#33bfa8",
                    subthemes: [
                    "Falta de vigilancia",
                    "Insuficiente presencia institucional",
                    "Percepción de inseguridad",
                    "Vulnerabilidad de las personas mayores",
                    "Falta de control sobre actividades y espacio público"
                    ]
                }
        ],


        // CITAS REPRESENTATIVAS POR TEMA
        quotes: {
        title: "Citas representativas por causa identificada",
        subtitle: "Evidencias textuales seleccionadas de las respuestas que permiten identificar factores causales.",
        footnote: "Las citas corresponden a respuestas textuales seleccionadas por su capacidad para explicar factores asociados al origen o persistencia de los problemas identificados en la Pregunta 1.",
        items: [
            {
            id: 1,
            theme: "Redes familiares, apoyo social y cambios demográficos",
            icon: "fas fa-users",
            colorClass: "quote-green",
            frequency: "18 respuestas",
            badgeText: "Alta presencia",
            badgeIcon: "fas fa-users",
            quoteText: "\"En este momento en general ha aumentado la edad de vida;al tiempo que esta reduciendo la natalidad. Por tanto en la mayoria fe familias hay mas personas adultas mayores y menos personas qie puedan apoyarlas, acompañarlas, atenderlas.\"",
            responseId: "Respuesta #54"
            },
            {
            id: 2,
            theme: "Institucionalidad, planificación, información y participación",
            icon: "fas fa-landmark",
            colorClass: "quote-purple",
            frequency: "20 respuestas",
            badgeText: "Tema de alta presencia",
            badgeIcon: "fas fa-university",
            quoteText: "\"Algunas causas pueden ser que no haya un diagnóstico continúo de las necesidades y que se le pregunte a la población adulta mayor específicamente. La falta de participación de la misma comunidad en la planeación o en la investigación de los temas que los involucran.\"",
            responseId: "Respuesta #27"
            },
            {
            id: 3,
            theme: "Economía, gentrificación y transformación territorial",
            icon: "fas fa-city",
            colorClass: "quote-orange",
            frequency: "15 respuestas",
            badgeText: "Presencia media-alta",
            badgeIcon: "fas fa-city",
            quoteText: "\"Especulación inmobiliaria, ciudad \"turística\", pues el POT solo está pensado y ejecutado para los negocios de los extranjeros.\"",
            responseId: "Respuesta #29"
            },
            {
            id: 4,
            theme: "Salud, cuidado y capacidades de atención",
            icon: "fas fa-heartbeat",
            colorClass: "quote-purple",
            frequency: "13 respuestas",
            badgeText: "Presencia media",
            badgeIcon: "fas fa-heartbeat",
            quoteText: "\"El desconocimiento de las familias de las leyes sobre los cuidados del adulto mayor. Falta de capacitación de los familiares.\"",
            responseId: "Respuesta #26"
            },
            {
            id: 5,
            theme: "Cultura ciudadana, empatía y reconocimiento",
            icon: "fas fa-handshake",
            colorClass: "quote-yellow",
            frequency: "14 respuestas",
            badgeText: "Presencia media",
            badgeIcon: "fas fa-handshake",
            quoteText: "\"Principalmente, la cultura ciudadana. El ciudadano tiene conocimiento, pero no tiene el principio de cumplirlo, de ser él mismo quien lleva la batuta. Tiene que haber una autoridad; si no hay autoridad, no las cumplen, y aun ahora, habiendo autoridad, tampoco las cumplen.\"",
            responseId: "Respuesta #17"
            },
            {
            id: 6,
            theme: "Entorno urbano, movilidad, espacio público y convivencia",
            icon: "fas fa-road",
            colorClass: "quote-blue",
            frequency: "22 respuestas",
            badgeText: "Tema más frecuente",
            badgeIcon: "fas fa-road",
            quoteText: "\"El no poder usar aceras NO hay control de las autoridades, el crecimiento desmesurados de negocios y talleres. Las aceras causas raíces protuberantes y arreglos con mala calidad por parte de contratistas y no hay control de alcaldía.\"",
            responseId: "Respuesta #58"
            },
            {
            id: 7,
            theme: "Seguridad y control",
            icon: "fas fa-shield-alt",
            colorClass: "quote-teal",
            frequency: "10 respuestas",
            badgeText: "Presencia media",
            badgeIcon: "fas fa-shield-alt",
            quoteText: "\"La falta de más vigilancia en el sector. Hay sectores muy solos en Laureles y Conquistadores que requieren mayor seguridad, pues el adulto mayor le da mucho miedo salir a caminar.\"",
            responseId: "Respuesta #25"
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