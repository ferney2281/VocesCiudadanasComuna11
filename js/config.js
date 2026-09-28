const SITE_DATA = {
    // Menú de navegación principal (Header)
    navigation: [
        { id: "index", label: "General", icon: "fas fa-home", active: true, url: "/index.html" },
        { id: "pregunta1", label: "Pregunta 1", icon: "fas fa-user-friends", active: false, url: "./html/pregunta1.html" },
        { id: "pregunta2", label: "Pregunta 2", icon: "fas fa-heartbeat", active: false, url: "./html/pregunta2.html" },
        { id: "pregunta3", label: "Pregunta 3", icon: "fas fa-users", active: false, url: "./html/pregunta3.html" },
        { id: "voces_accion", label: "Voces en acción", icon: "fas fa-bullhorn", active: false, url: "./html/voces_accion.html" },
    ],

    // Banner Principal
    hero: {
        title: "Información General",
        subtitle: "Resumen de la participación ciudadana en el proceso"
    },

    summaryMetrics: [
        {
        "value": "132",
        "label": "Participantes",
        "icon": "fas fa-users"
        },
        {
        "value": "65 años",
        "label": "Edad mediana",
        "icon": "fas fa-calendar-alt"
        },
        {
        "value": "15.9%",
        "label": "Vive en el barrio Laureles",
        "icon": "fas fa-map-marker-alt"
        },
        {
        "value": "89.4%",
        "label": "Relación con la Comuna 11",
        "icon": "fas fa-home"
        }
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
                    "percentage": 0.9
                },
                {
                    "label": "30-39",
                    "percentage": 0.9
                },
                {
                    "label": "40-49",
                    "percentage": 5.7
                },
                {
                    "label": "50-59",
                    "percentage": 13.2
                },
                {
                    "label": "60-69",
                    "percentage": 42.5
                },
                {
                    "label": "70+",
                    "percentage": 36.8
                }
            ],

            "genderDistribution": {
            "totalLabel": "100%",
            "items": [
                        {
                        "label": "Mujer",
                        "percentage": 72.7,
                        "color": "#0056b3"
                        },
                        {
                        "label": "Hombre",
                        "percentage": 18.2,
                        "color": "#54a0ff"
                        },
                        {
                        "label": "Otro",
                        "percentage": 0.8,
                        "color": "#b0bfd2"
                        },
                        {
                        "label": "Prefiero no contestar",
                        "percentage": 8.3,
                        "color": "#050505"
                        }
                    ]
                },

    "occupationalStatus": [
                    {
                        "label": "Jubilado / Pensionado",
                        "percentage": 34.8
                    },
                    {
                        "label": "Profesional",
                        "percentage": 22.0
                    },
                    {
                        "label": "Ama/o de casa",
                        "percentage": 9.1
                    },
                    {
                        "label": "Sin información",
                        "percentage": 9.1
                    },
                    {
                        "label": "Independiente",
                        "percentage": 6.1
                    },
                    {
                        "label": "Cuidador/a",
                        "percentage": 4.5
                    },
                    {
                        "label": "Empleado",
                        "percentage": 4.5
                    },
                    {
                        "label": "No aplica",
                        "percentage": 4.5
                    },
                    {
                        "label": "Comerciante",
                        "percentage": 2.3
                    },
                    {
                        "label": "Otro",
                        "percentage": 3.0
                    }
            ]
        },

    // DATOS DEL TAB TERRITORIO
   "territoryData": {
            "livesInNeighborhood": {
                "total": "81.1%",
                "label": "Sí vive en la comuna 11",
                "items": [
                    {
                    "label": "Sí",
                    "percentage": 81.1,
                    "color": "#0056b3"
                    },
                    {
                    "label": "No",
                    "percentage": 11.4,
                    "color": "#8bb4f8"
                    },
                    {
                    "label": "No estoy seguro",
                    "percentage": 0.0,
                    "color": "#a8aaad"
                    },
                    {
                    "label": "Sin información",
                    "percentage": 7.6,
                    "color": "#020202"
                    }
                ],
                "base": "132 participantes"
            },

            "residenceMunicipality": {
                "base": "132 participantes",
      "items": [
                    {
                    "label": "Medellín",
                    "percentage": 91.7
                    },
                    {
                    "label": "Sin información",
                    "percentage": 3.8
                    }
                ]
            },

            "residenceNeighborhoods": {
                "base": "132 participantes. De las respuestas registradas, algunas corresponden a barrios diferentes a los 15 barrios oficiales de la Comuna 11 – Laureles-Estadio, entre ellos Aranjuez, Los Ángeles, Loma de los Bernal, La Floresta, Belén, La América, El Poblado, Santa Teresita, Santa Mónica, Manrique y Belén Fátima, entre otros.",
                "items": [
                    {
                    "label": "Laureles",
                    "percentage": 15.9
                    },
                    {
                    "label": "Los Conquistadores",
                    "percentage": 9.8
                    },
                    {
                    "label": "San Joaquín",
                    "percentage": 6.8
                    },
                    {
                    "label": "Florida Nueva",
                    "percentage": 6.1
                    },
                    {
                    "label": "Los Colores",
                    "percentage": 4.5
                    },
                    {
                    "label": "Estadio",
                    "percentage": 3.8
                    },
                    {
                    "label": "El Velódromo",
                    "percentage": 3.8
                    },
                    {
                    "label": "Bolivariana",
                    "percentage": 2.3
                    },
                    {
                    "label": "Carlos E. Restrepo",
                    "percentage": 1.5
                    },
                    {
                    "label": "Lorena",
                    "percentage": 1.5
                    },
                    {
                    "label": "Suramericana",
                    "percentage": 1.5
                    },
                    {
                    "label": "La Castellana",
                    "percentage": 1.5
                    },
                    {
                    "label": "Naranjal",
                    "percentage": 0.8
                    },
                    {
                    "label": "Las Acacias",
                    "percentage": 0.8
                    },
                    {
                    "label": "La Cuarta Brigada",
                    "percentage": 0.0
                    }
                ]
            },

            "neighborhoodRelation": {
                "base": "132 participantes",
                "items": [
                    {
                    "label": "Vivo en la comuna",
                    "percentage": 75.8,
                    "icon": "fas fa-home"
                    },
                    {
                    "label": "Paso mucho tiempo",
                    "percentage": 12.9,
                    "icon": "far fa-clock"
                    },
                    {
                    "label": "Familiares / amigos",
                    "percentage": 10.6,
                    "icon": "fas fa-users"
                    },
                    {
                    "label": "Trabajo",
                    "percentage": 8.3,
                    "icon": "fas fa-briefcase"
                    },
                    {
                    "label": "Sin relación",
                    "percentage": 0.0,
                    "icon": "fas fa-ban"
                    },
                    {
                    "label": "Sin información",
                    "percentage": 10.6,
                    "icon": "fas fa-question-circle"
                    }
                ]
            }
    },

    // DATOS DEL TAB PARTICIPACIÓN
    participationData: {
        "howLearned": {
             "base": "122 participantes con respuesta",
                "items": [
                    {
                    "label": "WhatsApp",
                    "percentage": 55.7
                    },
                    {
                    "label": "Voz a voz",
                    "percentage": 24.6
                    },
                    {
                    "label": "Sin información",
                    "percentage": 8.2
                    },
                    {
                    "label": "Otro",
                    "percentage": 4.9
                    },
                    {
                    "label": "Facebook",
                    "percentage": 1.6
                    },
                    {
                    "label": "Carteleras de información",
                    "percentage": 1.6
                    },
                    {
                    "label": "Correo Electrónico",
                    "percentage": 1.6
                    },
                    {
                    "label": "Instagram",
                    "percentage": 0.8
                    },
                    {
                    "label": "Televisión",
                    "percentage": 0.8
                    },
                    {
                    "label": "Radio",
                    "percentage": 0.0
                    }
                ]
            },
        "wantToContinue": {
            "base": "132 participantes",
            "totalLabel": "65.2%",
            "label": "Sí",
            "items": [
                {
                "label": "Sí",
                "percentage": 65.2,
                "color": "#0056b3"
                },
                {
                "label": "No",
                "percentage": 31.8,
                "color": "#54a0ff"
                },
                {
                "label": "Sin información",
                "percentage": 3.0,
                "color": "#cbd5e1"
                }
            ]
            },
        "howLearnedByAgeGroup": [
                {
                "ageGroup": "18–29 años",
                "base": "1 participante",
                "items": [
                {
                    "label": "WhatsApp",
                    "percentage": 100.0
                }
                ]
            },
            {
                "ageGroup": "30–59 años",
                "base": "21 participantes",
                "items": [
                {
                    "label": "WhatsApp",
                    "percentage": 66.7
                },
                {
                    "label": "Facebook",
                    "percentage": 9.5
                },
                {
                    "label": "Instagram",
                    "percentage": 4.8
                },
                {
                    "label": "Carteleras de información",
                    "percentage": 4.8
                }
                ]
            },
            {
                "ageGroup": "60+ años",
                "base": "83 participantes",
                "items": [
                {
                    "label": "WhatsApp",
                    "percentage": 62.7
                },
                {
                    "label": "Voz a voz",
                    "percentage": 16.9
                },
                {
                    "label": "Otro",
                    "percentage": 7.2
                },
                {
                    "label": "Correo Electrónico",
                    "percentage": 2.4
                },
                {
                    "label": "Carteleras de información",
                    "percentage": 1.2
                },
                {
                    "label": "Televisión",
                    "percentage": 1.2
                }
                ]
            }
        ]
    },

    // DATOS DEL TAB ORGANIZACIÓN (NUEVO)
    organizationData: {
        "participacion": {
        "base": "89 participantes con respuesta",
        "items": [
            {
            "label": "Pertenece",
            "percentage": 31.5,
            "activeIcons": 4,
            "totalIcons": 10
            },
            {
            "label": "No pertenece",
            "percentage": 57.3,
            "activeIcons": 6,
            "totalIcons": 10
            },
            {
            "label": "No estoy seguro",
            "percentage": 9.0,
            "activeIcons": 6,
            "totalIcons": 10
            },
            {
            "label": "Sin información",
            "percentage": 2.2,
            "activeIcons": 6,
            "totalIcons": 10
            }
        ],
        "missingPercentage":30
        },
        "tipos": {
            "base": "30 participantes con tipo de organización reportado",
            "items": [
                {
                "label": "Social o comunitaria",
                "percentage": 36.7
                },
                {
                "label": "Club de vida",
                "percentage": 36.7
                },
                {
                "label": "Religiosa",
                "percentage": 6.7
                },
                {
                "label": "Recreativa o deportiva",
                "percentage": 6.7
                },
                {
                "label": "Otra",
                "percentage": 6.7
                },
                {
                "label": "Cultural",
                "percentage": 3.3
                },
                {
                "label": "Educativa",
                "percentage": 3.3
                }
            ]
        },
        organizacionesVinculadas: {
            base: "134 participantes",
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