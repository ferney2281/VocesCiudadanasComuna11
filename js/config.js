const SITE_DATA = {
    // Configuración del Menú de navegación superior con iconos asignados
    navigation: [
        { id: "index", label: "General", icon: "fas fa-home", active: true, url:"index.html" },
        { id: "pregunta1", label: "Pregunta 1", icon: "fas fa-user-friends", active: false, url:"./html/pregunta1.html" },
        { id: "pregunta2", label: "Pregunta 2", icon: "fas fa-heartbeat", active: false, url:"./html/pregunta2.html" },
        { id: "pregunta3", label: "Pregunta 3", icon: "fas fa-users", active: false, url:"./html/pregunta3.html" },
        { id: "pregunta4", label: "Pregunta 4", icon: "fas fa-chart-bar", active: false, url:"./html/pregunta1.html" }
    ],

    // Textos del Banner Principal
    hero: {
        title: "Información General",
        subtitle: "Análisis de la información general."
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
    ]
};