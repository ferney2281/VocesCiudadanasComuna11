const SITE_DATA = {
    // Menú de navegación principal (Header)
    navigation: [
        { id: "index", label: "General", icon: "fas fa-home", active: true, url: "/index.html" },
        { id: "pregunta1", label: "Pregunta 1", icon: "fas fa-user-friends", active: false, url: "./html/pregunta1.html" },
        { id: "pregunta2", label: "Pregunta 2", icon: "fas fa-heartbeat", active: false, url: "./html/pregunta2.html" },
        { id: "pregunta3", label: "Pregunta 3", icon: "fas fa-users", active: false, url: "./html/pregunta3.html" }
    ],

    // Banner Principal
    hero: {
        title: "Información General",
        subtitle: "Resumen de la participación ciudadana en el proceso"
    },

    "summaryMetrics": [
                        {"value":"114","label":"Participantes","icon":"fas fa-users"},
                        {"value":"65 años","label":"Edad mediana","icon":"fas fa-calendar-alt"},
                        {"value":"28%","label":"Vive en Laureles","icon":"fas fa-map-marker-alt"},
                        {"value":"97%","label":"Relación con la Comuna 11","icon":"fas fa-home"}
                    ],

    // Pestañas (Tabs) con su objetivo (target)
    generalTabs: [
        { id: "tab-perfil", label: "Perfil de participantes", icon: "fas fa-user-friends", target: "pane-perfil", active: true },
        { id: "tab-territorio", label: "Territorio", icon: "fas fa-map-marker-alt", target: "pane-territorio", active: false },
        { id: "tab-participacion", label: "Participación", icon: "fas fa-comment-dots", target: "pane-participacion", active: false },
        { id: "tab-organizaciones", label: "Organizaciones", icon: "fas fa-th-large", target: "pane-organizaciones", active: false }
    ],

    // Datos del Tab "Perfil de participantes"
    "profileData": {
    "ageDistribution": [
      {
        "label": "18-29",
        "percentage": 1
      },
      {
        "label": "30-59",
        "percentage": 20
      },
      {
        "label": "60+",
        "percentage": 79
      }
    ],

    "genderDistribution": {
      "totalLabel": "100%",
      "items": [
        {
          "label": "Mujer",
          "percentage": 81,
          "color": "#0056b3"
        },
        {
          "label": "Hombre",
          "percentage": 19,
          "color": "#54a0ff"
        },
        {
          "label": "Otro",
          "percentage": 1,
          "color": "#b0bfd2"
        },
        {
          "label": "Prefiero no contestar",
          "percentage": 0,
          "color": "#fafbfc"
        }
      ]
    },

    "occupationalStatus": [
      {
        "label": "Jubilado / Pensionado",
        "percentage": 36
      },
      {
        "label": "Profesional",
        "percentage": 28
      },
      {
        "label": "Ama/o de casa",
        "percentage": 11
      },
      {
        "label": "Independiente",
        "percentage": 10
      },
      {
        "label": "Otro",
        "percentage": 10
      },
      {
        "label": "Empleado",
        "percentage": 1
      },
      {
        "label": "Comerciante",
        "percentage": 1
      },
      {
        "label": "Sin información",
        "percentage": 4
      }
    ]
  },

    // DATOS DEL TAB TERRITORIO
   "territoryData": {
            "livesInNeighborhood": {
                "total": "85%",
                "label": "Sí vive en la Comuna 11",
                "items": [
                {"label":"Sí","percentage":85,"color":"#0056b3"},
                {"label":"No","percentage":13,"color":"#156efe"},
                {"label":"No estoy seguro","percentage":0,"color":"#8bb4f8"},
                {"label":"Sin información","percentage":2,"color":"#cbd2dd"}
                ],
                "base": "113 respuestas válidas"
            },

            "residenceMunicipality": {
                "base": "113 respuestas válidas",
                "items": [
                {"label":"Medellín","percentage":97},
                {"label":"Otro / no identificable","percentage":1},
                {"label":"Sin información","percentage":2}
                ]
            },

            "residenceNeighborhoods": {
                "base": "114 participantes; respuesta múltiple",
                "items": [
                {"label":"Laureles","percentage":28},
                {"label":"Conquistadores","percentage":11},
                {"label":"Florida Nueva","percentage":9},
                {"label":"San Joaquín","percentage":8},
                {"label":"Los Colores","percentage":5},
                {"label":"Belén","percentage":5},
                {"label":"Bolivariana","percentage":4},
                {"label":"Lorena","percentage":4},
                {"label":"Velódromo","percentage":4},
                {"label":"Castellana","percentage":3},
                {"label":"Las Acacias","percentage":3},
                {"label":"Loma de los Bernal","percentage":3},
                {"label":"Carlos E. Restrepo","percentage":2},
                {"label":"Aranjuez","percentage":2},
                {"label":"Los Ángeles","percentage":1},
                {"label":"La Floresta","percentage":1},
                {"label":"El Poblado","percentage":1},
                {"label":"América","percentage":1},
                {"label":"Naranjal","percentage":1},
                {"label":"Suramericana","percentage":1},
                {"label":"Santa Teresita","percentage":1},
                {"label":"Santa Mónica","percentage":1},
                {"label":"Manrique","percentage":1},
                {"label":"Comuna 11, sin barrio especificado","percentage":1},
                {"label":"Otro / no identificable","percentage":4},
                {"label":"Sin información","percentage":3}
                ]
            },

            "neighborhoodRelation": {
                "base": "114 participantes",
                "items": [
                {"label":"Vivo en la comuna","percentage":83,"icon":"fas fa-home"},
                {"label":"Paso mucho tiempo","percentage":14,"icon":"far fa-clock"},
                {"label":"Familiares / amigos","percentage":12,"icon":"fas fa-users"},
                {"label":"Trabajo","percentage":9,"icon":"fas fa-briefcase"},
                {"label":"Sin información","percentage":2,"icon":"fas fa-question-circle"}
                ]
            }
},

    // DATOS DEL TAB PARTICIPACIÓN
    participationData: {
        "howLearned": {
            "base": "103 respuestas con canal registrado",
            "items": [
                {"label":"WhatsApp","percentage":64},
                {"label":"Voz a voz","percentage":21},
                {"label":"Otros medios","percentage":6},
                {"label":"Facebook","percentage":2},
                {"label":"Correo Electrónico","percentage":2},
                {"label":"Carteleras Información","percentage":2},
                {"label":"Instagram","percentage":1},
                {"label":"Televisión","percentage":1},
                {"label":"Sin información","percentage":1}
            ]
            },
        "wantToContinue": {
            "base": "113 respuestas",
            "totalLabel": "71%",
            "label": "Sí",
            "items": [
                {"label":"Sí","percentage":71,"color":"#0056b3"},
                {"label":"No","percentage":26,"color":"#54a0ff"},
                {"label":"Sin información","percentage":3,"color":"#cbd5e1"}
            ]
            },
        "howLearnedByAgeGroup": [
        {
            "ageGroup": "18–29 años",
            "base": "1 participante",
            "items": [
            {"label":"WhatsApp","participants":1,"percentage":100}
            ]
        },
        {
            "ageGroup": "30–59 años",
            "base": "20 participantes",
            "items": [
            {"label":"WhatsApp","participants":13,"percentage":65},
            {"label":"Facebook","participants":2,"percentage":10},
            {"label":"Instagram","participants":1,"percentage":5},
            {"label":"Carteleras de información","participants":1,"percentage":5},
            {"label":"Sin información / vacío","participants":3,"percentage":15}
            ]
        },
        {
            "ageGroup": "60+ años",
            "base": "78 participantes",
            "items": [
            {"label":"WhatsApp","participants":52,"percentage":67},
            {"label":"Voz a voz","participants":9,"percentage":12},
            {"label":"Otros medios","participants":6,"percentage":8},
            {"label":"Correo Electrónico","participants":2,"percentage":3},
            {"label":"Carteleras de información","participants":1,"percentage":1},
            {"label":"Televisión","participants":1,"percentage":1},
            {"label":"Sin información / vacío","participants":7,"percentage":9}
            ]
        }
        ]
    },

    // DATOS DEL TAB ORGANIZACIÓN (NUEVO)
    organizationData: {
        "participacion": {
        "base":"114 participantes",
        "items":[
            {"label":"Pertenece","percentage":24},
            {"label":"No pertenece","percentage":43},
            {"label":"No estoy seguro","percentage":4},
            {"label":"Sin información","percentage":2}
        ],
        "missingPercentage":27
        },
        "tipos": {
        "base":"27 participantes que reportaron pertenencia",
        "items":[
            {"label":"Club de vida","percentage":41},
            {"label":"Social o comunitaria","percentage":37},
            {"label":"Religiosa","percentage":7},
            {"label":"Recreativa o deportiva","percentage":7},
            {"label":"Cultural","percentage":4},
            {"label":"Educativa","percentage":4},
            {"label":"Otra","percentage":0}
        ]
        },
        organizacionesVinculadas: {
            base: "114 participantes",
            items: [
                {
                    "name": "Cenfol / Cenfol Laureles",
                    "type": "Religiosa",
                    "address": "Circular 3 N.73 - 22",
                    "channels": [
                    {
                        "label": "www.cenfol.org",
                        "icon": "fas fa-globe"
                    },
                    {
                        "label": "Cenfol y Cenfol Laureles",
                        "icon": "fab fa-facebook-f"
                    }
                    ]
                },
                {
                    "name": "Club de Vida Verbo Divino",
                    "type": "Club de vida",
                    "address": null,
                    "channels": [
                    {
                        "label": "Club de Vida Verbo Divino",
                        "icon": "fas fa-globe"
                    }
                    ]
                },
                {
                    "name": "Club de Vida La Consolata",
                    "type": "Club de vida",
                    "address": "Enseguida de la iglesia Consolata / CRA 79 A # 42-42",
                    "channels": [
                    {
                        "label": "Club de Vida La Consolata",
                        "icon": "fas fa-globe"
                    },
                    {
                        "label": "WhatsApp",
                        "icon": "fab fa-facebook-f"
                    }
                    ]
                },
                {
                    "name": "Inder",
                    "type": "Recreativa o deportiva",
                    "address": "X",
                    "channels": [
                    {
                        "label": "Inder",
                        "icon": "fas fa-globe"
                    }
                    ]
                },
                {
                    "name": "Junta de Acción Comunal Florida Nueva",
                    "type": "Club de vida",
                    "address": "No contamos con sede",
                    "channels": [
                    {
                        "label": "Grupo de WhatsApp",
                        "icon": "fab fa-facebook-f"
                    }
                    ]
                },
                {
                    "name": "JAC Bolivariana",
                    "type": "Social o comunitaria",
                    "address": "Calle 42 # 71 - 37",
                    "channels": [
                    {
                        "label": "JAC Bolivariana",
                        "icon": "fab fa-facebook-f"
                    }
                    ]
                },
                {
                    "name": "Pinacoteca Da Vinci",
                    "type": "Cultural",
                    "address": "Calle 34c80A10",
                    "channels": [
                    {
                        "label": "www.pinacotecadvinci.com",
                        "icon": "fas fa-globe"
                    },
                    {
                        "label": "Instagram, TikTok, Facebook",
                        "icon": "fab fa-facebook-f"
                    }
                    ]
                },
                {
                    "name": "Club de Vida San Joaquín",
                    "type": "Club de vida",
                    "address": "No informado",
                    "channels": [
                    {
                        "label": "WhatsApp y Facebook",
                        "icon": "fab fa-facebook-f"
                    }
                    ]
                },
                {
                    "name": "Parroquia San Pedro y San Pablo / Escuela Bíblica Católica Yesua",
                    "type": "Religiosa",
                    "address": "No informado",
                    "channels": []
                },
                {
                    "name": "CDS Laureles",
                    "type": "Social o comunitaria",
                    "address": "CDS Laureles",
                    "channels": [
                    {
                        "label": "WhatsApp",
                        "icon": "fab fa-facebook-f"
                    }
                    ]
                },
                {
                    "name": "Coomeva",
                    "type": "Recreativa o deportiva",
                    "address": "Coomeva",
                    "channels": [
                    {
                        "label": "Coomeva",
                        "icon": "fas fa-globe"
                    }
                    ]
                },
                {
                    "name": "Universidad de los jueves",
                    "type": "Educativa",
                    "address": "Universidad Pontificia Bolivariana",
                    "channels": []
                },
                {
                    "name": "Club de Vida",
                    "type": "Club de vida",
                    "address": "Barrio Conquistadores",
                    "channels": [
                    {
                        "label": "Fbarrer2412@yahoo.com",
                        "icon": "fas fa-globe"
                    }
                    ]
                },
                {
                    "name": "No informado",
                    "type": "Social o comunitaria",
                    "address": null,
                    "channels": []
                }
                        ]
                    }
            },

    // Mensajes para pestañas pendientes
    placeholders: {
        participacion: {
            title: "Métricas de Participación",
            desc: "Estamos procesando la información sobre los canales de comunicación, niveles de interacción y dinámicas de consulta ciudadana."
        },
        organizaciones: {
            title: "Directorio de Organizaciones",
            desc: "Sección en desarrollo para consultar las instituciones, colectivos y grupos comunitarios representados en este proceso."
        }
    },

    // Filtros
    ageRanges: ["Todos", "18-29", "30-39", "40-49", "50-59", "60-69", "70+"],
    genders: ["Todos", "Mujer", "Hombre", "Otro"],
    neighborhoods: ["Todos", "Laureles", "Estadio", "San Javier", "Otro"]
};