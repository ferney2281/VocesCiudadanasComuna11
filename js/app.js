document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderHero();
    renderSummaryMetrics();
    renderTabs();
    populatePlaceholders();
    populateFilters();
    renderProfileCharts();
    renderTerritoryCharts();
    renderParticipationCharts();
    renderOrganizationCharts();
});

// Helper reutilizable para generar segmentos SVG Donut dinámicos
function generateDonutSegments(items, strokeWidth = 4.5) {
    let accumulated = 0;
    return items
        .filter(item => item.percentage > 0)
        .map(item => {
            const dashArray = `${item.percentage}, ${100 - item.percentage}`;
            const dashOffset = 25 - accumulated;
            accumulated += item.percentage;

            return `<path class="donut-segment" 
                        stroke="${item.color || '#0056b3'}" 
                        stroke-width="${strokeWidth}" 
                        stroke-dasharray="${dashArray}" 
                        stroke-dashoffset="${dashOffset}" 
                        fill="none" 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>`;
        }).join('');
}

// Renderizar Menú de Navegación Principal
function renderNavbar() {
    const navContainer = document.getElementById("main-nav");
    if (!navContainer) return;

    navContainer.innerHTML = SITE_DATA.navigation.map(item => `
        <li class="nav-item">
            <a class="nav-link custom-nav-item d-flex flex-column align-items-center ${item.active ? 'active' : ''}" href="${item.url}">   
                <i class="${item.icon} mb-1 nav-icon"></i>
                <span class="nav-label">${item.label}</span>
            </a>
        </li>
    `).join('');
}

// Renderizar Textos del Hero
function renderHero() {
    const titleEl = document.getElementById("main-question-title");
    const subTitleEl = document.getElementById("main-question-subtitle");
    
    if (titleEl) titleEl.textContent = SITE_DATA.hero.title;
    if (subTitleEl) subTitleEl.textContent = SITE_DATA.hero.subtitle;
}

// Renderizar las Tarjetas Métricas
function renderSummaryMetrics() {
    const container = document.getElementById("summary-metrics-container");
    if (!container || !SITE_DATA.summaryMetrics) return;

    container.innerHTML = SITE_DATA.summaryMetrics.map(metric => `
        <div class="col-xl-3 col-md-6 col-12">
            <div class="card border-0 shadow-sm rounded-4 p-3 h-100 bg-white d-flex flex-row align-items-center">
                <div class="badge-icon-bg p-3 rounded-circle me-3 text-primary d-flex align-items-center justify-content-center" style="width: 56px; height: 56px;">
                    <i class="${metric.icon} fs-4"></i>
                </div>
                <div>
                    <h3 class="fw-bold mb-0 text-dark">${metric.value}</h3>
                    <span class="text-muted small">${metric.label}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Renderizar Pestañas con la Interacción Dinámica de Bootstrap
function renderTabs() {
    const tabsContainer = document.getElementById("general-tabs");
    if (!tabsContainer || !SITE_DATA.generalTabs) return;

    tabsContainer.innerHTML = SITE_DATA.generalTabs.map(tab => `
        <li class="nav-item" role="presentation">
            <button class="nav-link w-100 fw-semibold d-flex align-items-center justify-content-center gap-2 py-2 px-3 ${tab.active ? 'active' : ''}" 
                    id="${tab.id}" 
                    data-bs-toggle="tab" 
                    data-bs-target="#${tab.target}" 
                    type="button" 
                    role="tab" 
                    aria-controls="${tab.target}" 
                    aria-selected="${tab.active}">
                <i class="${tab.icon}"></i>
                <span>${tab.label}</span>
            </button>
        </li>
    `).join('');

    const tabButtons = tabsContainer.querySelectorAll('button[data-bs-toggle="tab"]');
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const tabTrigger = new bootstrap.Tab(button);
            tabTrigger.show();
        });
    });
}

// Poblar los Mensajes Informativos Provisionales
function populatePlaceholders() {
    if (!SITE_DATA.placeholders) return;

    const { participacion, organizaciones } = SITE_DATA.placeholders;

    if (participacion) {
        const titlePartEl = document.getElementById("title-placeholder-participacion");
        const descPartEl = document.getElementById("desc-placeholder-participacion");
        if (titlePartEl) titlePartEl.textContent = participacion.title;
        if (descPartEl) descPartEl.textContent = participacion.desc;
    }
    if (organizaciones) {
        const titleOrgEl = document.getElementById("title-placeholder-organizaciones");
        const descOrgEl = document.getElementById("desc-placeholder-organizaciones");
        if (titleOrgEl) titleOrgEl.textContent = organizaciones.title;
        if (descOrgEl) descOrgEl.textContent = organizaciones.desc;
    }
}

// Poblar Dropdowns de Filtro
function populateFilters() {
    const selectAge = document.getElementById("filter-age");
    const selectGender = document.getElementById("filter-gender");
    const selectNeighborhood = document.getElementById("filter-neighborhood");

    if (selectAge && SITE_DATA.ageRanges) {
        selectAge.innerHTML += SITE_DATA.ageRanges.map(val => `<option value="${val}">${val}</option>`).join('');
    }
    if (selectGender && SITE_DATA.genders) {
        selectGender.innerHTML += SITE_DATA.genders.map(val => `<option value="${val}">${val}</option>`).join('');
    }
    if (selectNeighborhood && SITE_DATA.neighborhoods) {
        selectNeighborhood.innerHTML += SITE_DATA.neighborhoods.map(val => `<option value="${val}">${val}</option>`).join('');
    }
}

// Renderizar las Barras y Datos del Perfil de Participantes
function renderProfileCharts() {
    if (!SITE_DATA.profileData) return;

    const { ageDistribution, genderDistribution, occupationalStatus } = SITE_DATA.profileData;

    // 1. Distribución por Edad
    const ageContainer = document.getElementById("age-chart-container");
    if (ageContainer && ageDistribution) {
        ageContainer.innerHTML = ageDistribution.map(item => `
            <div>
                <div class="d-flex justify-content-between mb-1">
                    <span class="small fw-semibold text-secondary">${item.label}</span>
                    <span class="small fw-bold text-dark">${item.percentage}%</span>
                </div>
                <div class="progress rounded-pill" style="height: 10px;">
                    <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: ${item.percentage}%" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        `).join('');
    }

    // 2. Distribución por Sexo (Barras, Donut SVG y Leyenda)
    const genderBarsContainer = document.getElementById("gender-bars-container");
    const genderLegendContainer = document.getElementById("gender-legend-container");
    const donutTotalLabel = document.getElementById("donut-total-label");
    const genderDonutContainer = document.getElementById("gender-donut-chart");

    if (genderDistribution) {
        if (donutTotalLabel) {
            donutTotalLabel.textContent = genderDistribution.totalLabel || "100%";
        }

        if (genderBarsContainer && genderDistribution.items) {
            genderBarsContainer.innerHTML = genderDistribution.items.map(item => `
                <div>
                    <div class="d-flex justify-content-between mb-1">
                        <span class="small fw-semibold text-secondary">${item.label}</span>
                        <span class="small fw-bold text-dark">${item.percentage}%</span>
                    </div>
                    <div class="progress rounded-pill" style="height: 10px;">
                        <div class="progress-bar rounded-pill" role="progressbar" style="width: ${item.percentage}%; background-color: ${item.color};" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            `).join('');
        }

        // Donut SVG Dinámico para Sexo
        if (genderDonutContainer && genderDistribution.items) {
            const segmentsHtml = generateDonutSegments(genderDistribution.items, 3.8);
            genderDonutContainer.innerHTML = `
                <path class="donut-ring" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" stroke-width="3.8"/>
                ${segmentsHtml}
            `;
        }

        if (genderLegendContainer && genderDistribution.items) {
            genderLegendContainer.innerHTML = genderDistribution.items.map(item => `
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                        <span class="rounded-circle d-inline-block" style="width: 10px; height: 10px; background-color: ${item.color};"></span>
                        <span class="small text-muted">${item.label}</span>
                    </div>
                    <span class="small fw-bold text-dark">${item.percentage}%</span>
                </div>
            `).join('');
        }
    }

    // 3. Situación Ocupacional
    const occupationContainer = document.getElementById("occupation-chart-container");
    if (occupationContainer && occupationalStatus) {
        occupationContainer.innerHTML = occupationalStatus.map(item => `
            <div>
                <div class="d-flex justify-content-between mb-1">
                    <span class="small fw-semibold text-secondary">${item.label}</span>
                    <span class="small fw-bold text-dark">${item.percentage}%</span>
                </div>
                <div class="progress rounded-pill" style="height: 10px;">
                    <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: ${item.percentage}%" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        `).join('');
    }
}

// Renderizar Datos y Gráficos del Tab Territorio
function renderTerritoryCharts() {
    if (!SITE_DATA.territoryData) return;

    const { livesInNeighborhood, residenceMunicipality, residenceNeighborhoods, neighborhoodRelation } = SITE_DATA.territoryData;

    // 1. ¿Vive en el barrio?
    if (livesInNeighborhood) {
        const livesTotalEl = document.getElementById("lives-total-percentage");
        if (livesTotalEl && livesInNeighborhood.items && livesInNeighborhood.items.length > 0) {
            livesTotalEl.textContent = `${livesInNeighborhood.items[0].percentage}%`;
        }

        const baseLivesEl = document.getElementById("base-lives");
        if (baseLivesEl) baseLivesEl.textContent = `Base: ${livesInNeighborhood.base}`;

        const livesDonutContainer = document.getElementById("lives-donut-chart");
        if (livesDonutContainer && livesInNeighborhood.items) {
            const segmentsHtml = generateDonutSegments(livesInNeighborhood.items, 4.5);
            livesDonutContainer.innerHTML = `
                <path class="donut-ring" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" stroke-width="4.5"/>
                ${segmentsHtml}
            `;
        }

        const livesContainer = document.getElementById("lives-in-neighborhood-container");
        if (livesContainer && livesInNeighborhood.items) {
            livesContainer.innerHTML = livesInNeighborhood.items.map(item => `
                <div>
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <div class="d-flex align-items-center gap-2">
                            <span class="rounded-circle d-inline-block" style="width: 8px; height: 8px; background-color: ${item.color};"></span>
                            <span class="small text-secondary fw-semibold">${item.label}</span>
                        </div>
                        <span class="small fw-bold text-dark">${item.percentage}%</span>
                    </div>
                    <div class="progress rounded-pill" style="height: 8px;">
                        <div class="progress-bar rounded-pill" role="progressbar" style="width: ${item.percentage}%; background-color: ${item.color};" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            `).join('');
        }
    }

    // 2. Municipio de residencia
    if (residenceMunicipality) {
        const baseMunicipalityEl = document.getElementById("base-municipality");
        if (baseMunicipalityEl) baseMunicipalityEl.textContent = `Base: ${residenceMunicipality.base}`;

        const municipalityContainer = document.getElementById("municipality-chart-container");
        if (municipalityContainer && residenceMunicipality.items) {
            municipalityContainer.innerHTML = residenceMunicipality.items.map(item => `
                <div class="d-flex align-items-center gap-3">
                    <span class="small fw-semibold text-secondary" style="min-width: 90px;">${item.label}</span>
                    <div class="flex-grow-1 progress rounded-pill" style="height: 12px;">
                        <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: ${item.percentage}%" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="small fw-bold text-dark" style="min-width: 35px; text-align: right;">${item.percentage}%</span>
                </div>
            `).join('');
        }
    }

    // 3. Barrios de residencia
    if (residenceNeighborhoods) {
        const baseNeighborhoodsEl = document.getElementById("base-neighborhoods");
        if (baseNeighborhoodsEl) baseNeighborhoodsEl.textContent = `Base: ${residenceNeighborhoods.base}`;

        const neighborhoodsContainer = document.getElementById("neighborhoods-chart-container");
        if (neighborhoodsContainer && residenceNeighborhoods.items) {
            neighborhoodsContainer.innerHTML = residenceNeighborhoods.items.map(item => `
                <div class="d-flex align-items-center gap-3">
                    <span class="small fw-semibold text-secondary" style="min-width: 70px;">${item.label}</span>
                    <div class="flex-grow-1 progress rounded-pill" style="height: 10px;">
                        <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: ${item.percentage * 3.5}%" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="small fw-bold text-dark" style="min-width: 35px; text-align: right;">${item.percentage}%</span>
                </div>
            `).join('');
        }
    }

    // 4. ¿Qué relación tienen los participantes con el barrio?
    if (neighborhoodRelation) {
        const baseRelationEl = document.getElementById("base-relation");
        if (baseRelationEl) baseRelationEl.textContent = `Base: ${neighborhoodRelation.base}`;

        const relationContainer = document.getElementById("relation-chart-container");
        if (relationContainer && neighborhoodRelation.items) {
            relationContainer.innerHTML = neighborhoodRelation.items.map(item => `
                <div class="d-flex align-items-center gap-3">
                    <div class="d-flex align-items-center gap-2" style="width: 170px;">
                        <i class="${item.icon} text-primary text-center" style="width: 20px;"></i>
                        <span class="small fw-semibold text-secondary text-truncate">${item.label}</span>
                    </div>
                    <div class="flex-grow-1 progress rounded-pill" style="height: 14px;">
                        <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: ${item.percentage * 2}%" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="small fw-bold text-dark" style="width: 40px; text-align: right;">${item.percentage}%</span>
                </div>
            `).join('');
        }
    }
}

// Renderizar Datos y Gráficos del Tab Participación
function renderParticipationCharts() {
    if (!SITE_DATA.participationData) return;

    const { howLearned, wantToContinue, howLearnedByAgeGroup, howLearnedYoung, howLearnedSeniors } = SITE_DATA.participationData;

    // 1. ¿Cómo se enteró del proceso?
    if (howLearned) {
        const baseHowEl = document.getElementById("base-how-learned");
        if (baseHowEl) baseHowEl.textContent = `Base: ${howLearned.base}`;

        const container = document.getElementById("how-learned-container");
        if (container && howLearned.items) {
            container.innerHTML = howLearned.items.map(item => `
                <div class="d-flex align-items-center gap-3">
                    <span class="small fw-semibold text-secondary" style="width: 170px;">${item.label}</span>
                    <div class="flex-grow-1 progress rounded-pill" style="height: 12px;">
                        <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: ${item.percentage * 2.5}%" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="small fw-bold text-dark" style="width: 40px; text-align: right;">${item.percentage}%</span>
                </div>
            `).join('');
        }
    }

    // 2. ¿Quieren seguir participando?
    if (wantToContinue) {
        const baseContinueEl = document.getElementById("base-continue");
        if (baseContinueEl) baseContinueEl.textContent = `Base: ${wantToContinue.base}`;

        const continueTotalEl = document.getElementById("continue-total-percentage");
        const continueLabelEl = document.getElementById("continue-total-label");
        
        if (continueTotalEl && wantToContinue.items && wantToContinue.items.length > 0) {
            continueTotalEl.textContent = `${wantToContinue.items[0].percentage}%`;
        }
        if (continueLabelEl) {
            continueLabelEl.textContent = wantToContinue.label || "Sí";
        }

        const continueDonutContainer = document.getElementById("continue-donut-chart");
        if (continueDonutContainer && wantToContinue.items) {
            const segmentsHtml = generateDonutSegments(wantToContinue.items, 4.5);
            continueDonutContainer.innerHTML = `
                <path class="donut-ring" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" stroke-width="4.5"/>
                ${segmentsHtml}
            `;
        }

        const legendContainer = document.getElementById("continue-legend-container");
        if (legendContainer && wantToContinue.items) {
            legendContainer.innerHTML = wantToContinue.items.map(item => `
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                        <span class="rounded-circle d-inline-block" style="width: 10px; height: 10px; background-color: ${item.color};"></span>
                        <span class="small text-secondary fw-semibold">${item.label}</span>
                    </div>
                    <span class="small fw-bold text-dark">${item.percentage}%</span>
                </div>
            `).join('');
        }
    }

    // 3. Convocatoria por Grupos de Edad
    const ageGroupContainer = document.getElementById("learned-by-age-group-container");
    if (ageGroupContainer && howLearnedByAgeGroup) {
        const colSize = howLearnedByAgeGroup.length === 1 ? 'col-12' : (howLearnedByAgeGroup.length === 3 ? 'col-lg-4 col-12' : 'col-lg-6 col-12');

        ageGroupContainer.innerHTML = howLearnedByAgeGroup.map(group => `
            <div class="${colSize}">
                <div class="bg-light-subtle p-3 rounded-4 mb-3 d-inline-block">
                    <span class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold">${group.ageGroup}</span>
                </div>
                <div class="d-flex flex-column gap-3">
                    ${group.items.map(item => `
                        <div class="d-flex align-items-center gap-3">
                            <span class="small fw-semibold text-secondary" style="width: 140px;">${item.label}</span>
                            <div class="flex-grow-1 progress rounded-pill" style="height: 10px;">
                                <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: ${item.percentage * 1.8}%" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span class="small fw-bold text-dark" style="width: 35px; text-align: right;">${item.percentage}%</span>
                        </div>
                    `).join('')}
                </div>
                <div class="bg-light-subtle rounded-3 py-2 px-3 mt-3 d-flex align-items-center gap-2 small text-muted">
                    <i class="fas fa-info-circle text-primary"></i>
                    <span>Base: ${group.base}</span>
                </div>
            </div>
        `).join('');
    }

    // Fallback para estructura previa
    if (howLearnedYoung) {
        const baseYoungEl = document.getElementById("base-learned-young");
        if (baseYoungEl) baseYoungEl.textContent = `Base: ${howLearnedYoung.base}`;

        const youngContainer = document.getElementById("learned-young-container");
        if (youngContainer && howLearnedYoung.items) {
            youngContainer.innerHTML = howLearnedYoung.items.map(item => `
                <div class="d-flex align-items-center gap-3">
                    <span class="small fw-semibold text-secondary" style="width: 140px;">${item.label}</span>
                    <div class="flex-grow-1 progress rounded-pill" style="height: 10px;">
                        <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: ${item.percentage * 1.8}%" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="small fw-bold text-dark" style="width: 35px; text-align: right;">${item.percentage}%</span>
                </div>
            `).join('');
        }
    }

    if (howLearnedSeniors) {
        const baseSeniorsEl = document.getElementById("base-learned-seniors");
        if (baseSeniorsEl) baseSeniorsEl.textContent = `Base: ${howLearnedSeniors.base}`;

        const seniorsContainer = document.getElementById("learned-seniors-container");
        if (seniorsContainer && howLearnedSeniors.items) {
            seniorsContainer.innerHTML = seniorsContainer.innerHTML = howLearnedSeniors.items.map(item => `
                <div class="d-flex align-items-center gap-3">
                    <span class="small fw-semibold text-secondary" style="width: 140px;">${item.label}</span>
                    <div class="flex-grow-1 progress rounded-pill" style="height: 10px;">
                        <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: ${item.percentage * 1.8}%" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="small fw-bold text-dark" style="width: 35px; text-align: right;">${item.percentage}%</span>
                </div>
            `).join('');
        }
    }
}

// Renderizar Datos y Gráficos del Tab Organización
function renderOrganizationCharts() {
    if (!SITE_DATA.organizationData) return;

    const { participacion, tipos, organizacionesVinculadas } = SITE_DATA.organizationData;

    // 1. Participación Organizacional (Pictograma)
    if (participacion) {
        const baseEl = document.getElementById("base-organization-part");
        if (baseEl) baseEl.textContent = `Base: ${participacion.base}`;

        const container = document.getElementById("organization-part-container");
        if (container && participacion.items) {
            container.innerHTML = participacion.items.map((item, index) => {
                const iconsHtml = Array.from({ length: item.totalIcons }, (_, i) => `
                    <i class="fas fa-user ${i < item.activeIcons ? 'text-primary' : 'text-black-50 opacity-25'}"></i>
                `).join('');

                const isLast = index === participacion.items.length - 1;

                return `
                    <div class="col-6 text-center ${!isLast ? 'border-end' : ''}">
                        <h3 class="fw-bold text-dark fs-2 mb-0">${item.percentage}%</h3>
                        <span class="text-secondary small d-block mb-3">${item.label}</span>
                        <div class="d-flex justify-content-center gap-1 fs-5">
                            ${iconsHtml}
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // 2. Tipo de Organización (Barras Horizontales)
    if (tipos) {
        const baseTiposEl = document.getElementById("base-organization-types");
        if (baseTiposEl) baseTiposEl.textContent = `Base: ${tipos.base}`;

        const typesContainer = document.getElementById("organization-types-container");
        if (typesContainer && tipos.items) {
            typesContainer.innerHTML = tipos.items.map(item => `
                <div class="d-flex align-items-center gap-3">
                    <span class="small fw-semibold text-secondary" style="min-width: 170px;">${item.label}</span>
                    <div class="flex-grow-1 progress rounded-pill" style="height: 10px;">
                        <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: ${item.percentage * 2.8}%" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="small fw-bold text-dark" style="min-width: 35px; text-align: right;">${item.percentage}%</span>
                </div>
            `).join('');
        }
    }

    // 3. Organizaciones Vinculadas (Tarjetas)
    if (organizacionesVinculadas) {
        const linkedContainer = document.getElementById("linked-organizations-container");
        if (linkedContainer && organizacionesVinculadas.items) {
            linkedContainer.innerHTML = organizacionesVinculadas.items.map(org => `
                <div class="col-lg-6 col-12">
                    <div class="card border border-light-subtle rounded-4 p-3 shadow-sm bg-white h-100 d-flex flex-column justify-content-between">
                        <div>
                            <!-- Cabecera Organización -->
                            <div class="d-flex align-items-center gap-3 mb-3">
                                <div class="badge-icon-bg p-3 rounded-circle text-primary d-flex align-items-center justify-content-center bg-primary-subtle" style="width: 52px; height: 52px;">
                                    <i class="fas fa-building fs-4"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold text-dark mb-0">${org.name}</h6>
                                    <span class="text-muted small">${org.type}</span>
                                    <div class="text-danger small mt-1">
                                        <i class="fas fa-map-marker-alt me-1"></i>${org.address}
                                    </div>
                                </div>
                            </div>

                            <hr class="my-2 border-light-subtle">

                            <!-- Canales de contacto -->
                            <div class="mt-2">
                                <span class="text-uppercase fw-bold text-muted d-block mb-2" style="font-size: 0.75rem;">Canales de Contacto</span>
                                <div class="d-flex flex-wrap gap-3 align-items-center">
                                    ${org.channels.map(channel => `
                                        <div class="d-flex align-items-center gap-2 text-primary small">
                                            <i class="${channel.icon} fs-5"></i>
                                            <span class="text-dark">${channel.label}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <!-- Footer Base -->
                        <div class="bg-light-subtle rounded-3 py-1 px-3 mt-3 d-flex align-items-center gap-2 text-muted" style="font-size: 0.8rem;">
                            <i class="fas fa-info-circle text-primary"></i>
                            <span>Base: ${organizacionesVinculadas.base}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}