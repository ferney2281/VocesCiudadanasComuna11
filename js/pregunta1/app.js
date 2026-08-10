document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderHero();
    renderMetrics();
    renderFullThematicSuite();
    //renderAnalysisTabs();
    //renderCards();
});

// =========================================================================
// RENDERIZADORES GENERALES DE LA ESTRUCTURA Y HOME
// =========================================================================

// Renderizar el Menú Dinámico
function renderNavbar() {
    const navContainer = document.getElementById("main-nav");
    navContainer.innerHTML = SITE_DATA.navigation.map(item => `
        <li class="nav-item">
            <a class="nav-link custom-nav-item d-flex flex-column align-items-center ${item.active ? 'active' : ''}" href="${item.url}">   
                <i class="${item.icon} mb-2 nav-icon"></i>
                <span class="nav-label">${item.label}</span>
            </a>
        </li>
    `).join('');
}

// Renderizar Textos del Header
function renderHero() {
    document.getElementById("main-question-title").textContent = SITE_DATA.hero.title;
    document.getElementById("main-question-subtitle").textContent = SITE_DATA.hero.subtitle;
}

// Renderizar Métricas de Resumen General
function renderMetrics() {
    const metricsContainer = document.getElementById("metrics-container");
    if (!metricsContainer || !SITE_DATA.summaryMetrics) return;

    metricsContainer.innerHTML = SITE_DATA.summaryMetrics.map(metric => {
        const helpIconHTML = metric.helpText 
            ? `<i class="fas fa-question-circle text-muted ms-1" style="cursor: help; font-size: 0.8rem;" title="${metric.helpText}"></i>` 
            : "";

        return `
            <div class="col">
                <div class="metric-box h-100 d-flex align-items-center">
                    <div class="row w-100 g-0 align-items-center">
                        <div class="col-3 text-center">
                            <div class="metric-icon-wrapper ${metric.colorClass}">
                                <i class="${metric.icon}"></i>
                            </div>
                        </div>
                        <div class="col-9 ps-3">
                            <div class="metric-label text-muted mb-1 d-flex align-items-center">
                                ${metric.label} ${helpIconHTML}
                            </div>
                            <div class="metric-value">${metric.value}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Renderizar de forma masiva las 21 Tarjetas (Opcional/Desactivado)


// =========================================================================
// CONTROLADOR DE PESTAÑAS (TABS)
// =========================================================================

// Renderizar e inicializar las pestañas de análisis
function renderAnalysisTabs() {
    const tabsNavContainer = document.getElementById("analysis-tabs-nav");
    const tabsContentContainer = document.getElementById("analysis-tabs-content");

    if (!tabsNavContainer || !tabsContentContainer || !SITE_DATA.analysisTabs) return;

    // Generar la botonera (pestañas)
    tabsNavContainer.innerHTML = SITE_DATA.analysisTabs.map(tab => `
        <li class="nav-item" role="presentation">
            <button 
                class="nav-link ${tab.active ? 'active' : ''}" 
                id="tab-btn-${tab.id}" 
                data-bs-toggle="pill" 
                data-bs-target="#tab-panel-${tab.id}" 
                type="button" 
                role="tab" 
                aria-controls="tab-panel-${tab.id}" 
                aria-selected="${tab.active ? 'true' : 'false'}">
                <i class="${tab.icon} me-2"></i> ${tab.label}
            </button>
        </li>
    `).join('');

    // Generar los paneles de contenido
    tabsContentContainer.innerHTML = SITE_DATA.analysisTabs.map(tab => `
        <div 
            class="tab-pane fade ${tab.active ? 'show active' : ''}" 
            id="tab-panel-${tab.id}" 
            role="tabpanel" 
            aria-labelledby="tab-btn-${tab.id}">
            ${tab.content}
        </div>
    `).join('');

    // Pintar los datos si "tematico" es la pestaña activa inicial
    const activeTab = SITE_DATA.analysisTabs.find(tab => tab.active);
    if (activeTab && activeTab.id === "tematico") {
        setTimeout(() => {
            renderFullThematicSuite();
        }, 30);
    }

    // Escuchar cuando el usuario haga clic para cambiar a esta pestaña
    const thematicButton = document.getElementById("tab-btn-tematico");
    if (thematicButton) {
        thematicButton.addEventListener('shown.bs.tab', () => {
            renderFullThematicSuite();
        });
    }
}

// =========================================================================
// SUITE DE ANÁLISIS TEMÁTICO (BLOQUES Y SUBSECCIONES)
// =========================================================================

// Renderizador Maestro de todas las subsecciones del Análisis Temático
function renderFullThematicSuite() {
    const data = SITE_DATA.thematicAnalysis;
    if (!data) {
        console.error("No se encontraron los datos de 'thematicAnalysis' en config.js");
        return;
    }

    // CONTROLADORES DE RENDERIZADO ACTIVO
     renderMindMap(data.map);
    // renderThematicTable(data.table);
    renderThematicQuotes(data.quotes);
    renderThematicSummaryAnalyticalBlock(data.summaryAnalyticalBlock);
    renderThematicLexicalBlock(data.lexicalBlock);
    renderThematicNetworkBlock(data.networkBlock);
    renderThematicVisualizations(data.visualizations); 
    
}

// 1. Renderizar Bloque de Resumen Analítico
function renderThematicSummaryAnalyticalBlock(data) {
    const container = document.getElementById("thematic-summary-analytical-section");
    if (!container || !data) return;

    const cardsHTML = data.cards.map(card => {
        let cardBody = '';

        if (card.type === 'theme' || card.type === 'lexical') {
            cardBody = `
                <h4 class="fw-bold text-dark mb-3 ${card.type === 'lexical' ? 'text-lowercase' : ''}" style="font-size: 1.35rem; min-height: 54px; display: flex; align-items: center;">${card.title}</h4>
                <hr class="my-2 opacity-25">
                <div class="d-flex align-items-baseline justify-content-between mt-2">
                    <div>
                        <span class="fs-3 fw-bold text-primary" style="color: #0d6efd;">${card.value}</span>
                        <span class="text-muted small ms-1">${card.unit}</span>
                    </div>
                    <span class="badge rounded-pill px-3 py-1.5 fw-bold" style="background-color: #f1f3f9; color: #0d6efd; font-size: 0.85rem;">${card.percentage}</span>
                </div>
                <p class="text-muted extra-small mt-2 mb-0" style="font-size: 0.75rem;">${card.subtext}</p>
            `;
        } else if (card.type === 'relation') {
            cardBody = `
                <h4 class="fw-bold text-dark" style="font-size: 1.35rem; min-height: 1px; display: flex; align-items: center; letter-spacing: -0.5px;">${card.title}</h4>
                <span class="text-dark fw-bold small">${card.unit}</span>
                <hr class="my-2 opacity-25">
                <p class="text-secondary small mb-0 mt-2" style="line-height: 1.4; text-align: justify;">${card.description}</p>
            `;
        } else if (card.type === 'corpus') {
            cardBody = `
                <div class="mb-2" style="min-height: 54px;">
                    <span class="fs-2 fw-bold d-block text-dark lh-1">${card.value}</span>
                    <span class="text-dark fw-bold small">${card.unit}</span>
                </div>
                <hr class="my-2 opacity-25">
                <p class="text-secondary small mb-0 mt-2" style="line-height: 1.4; text-align: justify;">${card.description}</p>
            `;
        }

        const iconContent = card.isTextIcon 
            ? `<span style="font-size: 1.1rem; font-weight: bold; font-family: sans-serif;">Aa</span>`
            : `<i class="${card.icon} fs-5"></i>`;

        return `
            <div class="col-xl-4 col-md-6 col-12">
                <div class="card h-100 border-0 shadow-sm p-4 bg-white" style="border-radius: 12px;">
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <div class="d-flex align-items-center justify-content-center rounded-circle" style="width: 42px; height: 42px; flex-shrink: 0; background-color: #f1f3f9; color: #495057;">
                            ${iconContent}
                        </div>
                        <span class="text-muted fw-bold extra-small" style="font-size: 0.8rem;">${card.badge}</span>
                    </div>
                    ${cardBody}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="analysis-block-card bg-white p-4 p-md-5 mt-4" style="border-radius: 16px;">
            <div class="mb-4">
                <div class="d-flex align-items-center gap-2 mb-2 text-primary fw-bold">
                    <span class="badge bg-primary text-white p-2 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; border-radius: 50%; font-size: 0.9rem;">
                        <i class="fas fa-chart-pie"></i>
                    </span>
                    <h2 class="mb-0 fw-bold text-dark" style="font-size: 1.6rem;">${data.title}</h2>
                </div>
                <p class="text-secondary small mb-0" style="line-height: 1.6;">${data.subtitle}</p>
            </div>
            <div class="row g-4 bg-light p-3 rounded-3 mb-4">
                ${cardsHTML}
            </div>
            <div class="p-4 border-0 rounded-3 mb-4 shadow-sm" style="background-color: #faf9fe; border-left: 5px solid #6f42c1 !important;">
                <h5 class="fw-bold d-flex align-items-center gap-2" style="color: #6f42c1; font-size: 1.1rem;">
                    <i class="fas fa-lightbulb"></i> ${data.interpretationTitle}
                </h5>
                <p class="text-secondary mb-0 small mt-2" style="line-height: 1.6; text-align: justify;">${data.interpretationText}</p>
            </div>
            <div class="d-flex align-items-start gap-2 text-muted pt-2 border-top border-light" style="font-size: 0.78rem;">
                <i class="fas fa-info-circle mt-0.5"></i>
                <span><strong>Nota:</strong> ${data.footnote}</span>
            </div>
        </div>
    `;
}

// 2. Renderizar Mapa Temático (Opcional/Desactivado)
function renderMindMap(mapData) {
    const container = document.getElementById("thematic-map-section");
    if (!container) return;

    container.innerHTML = `
        <div class="analysis-block-card">
            <div class="d-flex align-items-center mb-4">
                <span class="analysis-block-number me-3">2</span>
                <div>
                    <h3 class="analysis-block-title mb-0">Mapa temático</h3>
                    <small class="text-muted">Relación entre temas y subtemas principales</small>
                </div>
            </div>
            <div class="mindmap-container">
                <div class="mindmap-core">Bienestar del Adulto Mayor</div>
                <div class="mindmap-branches">
                    ${mapData.map(node => `
                        <div class="mindmap-branch-node">
                            <div class="mindmap-theme-box" style="background-color: ${node.color}">
                                ${node.theme}
                            </div>
                            <ul class="mindmap-subthemes-list">
                                ${node.subthemes.map(sub => `
                                    <li class="mindmap-subtheme-tag">${sub}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// 3. Renderizar Tabla de Temas (Opcional/Desactivado)
function renderThematicTable(tableData) {
    const container = document.getElementById("thematic-table-section");
    if (!container) return;

    container.innerHTML = `
        <div class="analysis-block-card">
            <div class="d-flex align-items-center mb-4">
                <span class="analysis-block-number me-3">3</span>
                <div>
                    <h3 class="analysis-block-title mb-0">Tabla de temas</h3>
                    <small class="text-muted">Frecuencia y descripción de cada tema analizado</small>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover custom-theme-table align-middle">
                    <thead>
                        <tr>
                            <th>Tema</th>
                            <th class="text-center">Respuestas donde aparece</th>
                            <th class="text-center">% del total</th>
                            <th>Interpretación</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableData.map(row => `
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="table-theme-icon-wrapper me-3" style="background-color: ${row.color}">
                                            <i class="${row.icon}"></i>
                                        </div>
                                        <span class="fw-semibold text-dark">${row.theme}</span>
                                    </div>
                                </td>
                                <td class="text-center fw-bold text-secondary">${row.count}</td>
                                <td class="text-center"><span class="badge bg-light text-dark border fw-bold">${row.percentage}</span></td>
                                <td class="text-muted small">${row.interpretation}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}


// 4. Renderizar Citas Representativas por Tema (Rediseñado según mockup)
function renderThematicQuotes(quotesData) {
    const container = document.getElementById("thematic-quotes-section");
    if (!container || !quotesData) return;

    // Mapeo dinámico de estilos CSS específicos para cada tarjeta temática según su color clave
    const stylesMap = {
        'quote-blue':   { bgIcon: '#f0f5ff', textIcon: '#0d6efd', badgeBg: '#e6f0ff', badgeText: '#0d6efd', bubbleBg: '#f4f8ff', bubbleBorder: '#e1eeff' },
        'quote-green':  { bgIcon: '#e8f5e9', textIcon: '#198754', badgeBg: '#e2f4e3', badgeText: '#198754', bubbleBg: '#f3faf4', bubbleBorder: '#e2f3e4' },
        'quote-purple': { bgIcon: '#f3e5f5', textIcon: '#6f42c1', badgeBg: '#f1e8fc', badgeText: '#6f42c1', bubbleBg: '#f9f5fd', bubbleBorder: '#f1e6fb' },
        'quote-yellow': { bgIcon: '#fffde7', textIcon: '#ffc107', badgeBg: '#fff9db', badgeText: '#b78103', bubbleBg: '#fffdf4', bubbleBorder: '#fff9db' },
        'quote-orange': { bgIcon: '#fff3e0', textIcon: '#fd7e14', badgeBg: '#ffe8cc', badgeText: '#fd7e14', bubbleBg: '#fff9f2', bubbleBorder: '#ffe8cc' },
        'quote-cyan':   { bgIcon: '#e0f7fa', textIcon: '#0dcaf0', badgeBg: '#cff4fc', badgeText: '#0aa2c0', bubbleBg: '#f0fbfc', bubbleBorder: '#cff4fc' }
    };

    const cardsHTML = quotesData.items.map(item => {
        const style = stylesMap[item.colorClass] || stylesMap['quote-blue'];

        return `
            <div class="col-xl-4 col-md-6 col-12">
                <div class="card h-100 border-0 p-4 bg-white shadow-sm" style="border-radius: 16px;">
                    
                    <!-- Fila Superior: Icono circular y Título del Tema -->
                    <div class="d-flex align-items-start gap-3 mb-2">
                        <div class="d-flex align-items-center justify-content-center rounded-circle" 
                             style="width: 48px; height: 48px; flex-shrink: 0; background-color: ${style.bgIcon}; color: ${style.textIcon};">
                            <i class="${item.icon} fs-5"></i>
                        </div>
                        <div>
                            <div class="d-flex align-items-center gap-2 mb-1">
                                <span class="badge rounded-circle d-flex align-items-center justify-content-center text-white" 
                                      style="background-color: #0d6efd; width: 22px; height: 22px; font-size: 0.8rem; font-weight: bold;">
                                    ${item.id}
                                </span>
                                <h5 class="fw-bold text-dark mb-0 small" style="font-size: 1rem; line-height: 1.3;">${item.theme}</h5>
                            </div>
                            <p class="text-muted mb-2" style="font-size: 0.85rem;">
                                Frecuencia: <span class="fw-semibold text-secondary" style="color: #495057;">${item.frequency}</span>
                            </p>
                        </div>
                    </div>

                    <!-- Badge de Estado de Presencia -->
                    <div class="mb-3" style="padding-left: 64px;">
                        <span class="badge rounded-pill px-3 py-1.5 fw-bold d-inline-flex align-items-center gap-1.5" 
                              style="background-color: ${style.badgeBg}; color: ${style.badgeText}; font-size: 0.78rem;">
                            <i class="${item.badgeIcon}"></i> ${item.badgeText}
                        </span>
                    </div>

                    <!-- Cuadro de la Cita Textual -->
                    <div class="p-3 rounded-3 mt-auto border" 
                         style="background-color: ${style.bubbleBg}; border-color: ${style.bubbleBorder} !important; position: relative;">
                        <div class="d-flex gap-2">
                            <span class="fs-3 fw-bold opacity-20 lh-1" style="color: ${style.textIcon}; font-family: serif; font-size: 2.2rem !important; line-height: 0.6 !important;">“</span>
                            <p class="mb-0 text-dark fst-italic lh-sm small" style="text-align: justify; font-size: 0.85rem; color: #333 !important;">
                                ${item.quoteText}
                            </p>
                        </div>
                        <div class="d-flex justify-content-end mt-2">
                            <span class="badge px-2 py-1 text-primary fw-semibold" 
                                  style="background-color: ${style.badgeBg}; color: ${style.badgeText} !important; font-size: 0.75rem; border-radius: 4px;">
                                ${item.responseId}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="analysis-block-card bg-transparent p-0 mt-5">
            <!-- Encabezado Principal -->
            <div class="mb-4">
                <div class="d-flex align-items-center gap-2 mb-2 text-primary fw-bold">
                    <span class="badge bg-primary text-white p-2 d-flex align-items-center justify-content-center" style="width: 34px; height: 34px; border-radius: 50%; font-size: 0.9rem;">
                        <i class="fas fa-comments"></i>
                    </span>
                    <h2 class="mb-0 fw-bold text-dark" style="font-size: 1.6rem;">${quotesData.title}</h2>
                </div>
                <p class="text-secondary small mb-0" style="line-height: 1.6;">${quotesData.subtitle}</p>
            </div>

            <!-- Grilla de 6 Bloques -->
            <div class="row g-4 mb-4">
                ${cardsHTML}
            </div>

            <!-- Pie de Nota Informativo Inferior -->
            <div class="p-3 bg-white rounded border d-flex align-items-center gap-3 shadow-sm" style="border-radius: 12px;">
                <div class="d-flex align-items-center justify-content-center rounded-circle bg-light border text-primary" style="width: 32px; height: 32px; flex-shrink: 0;">
                    <i class="fas fa-info fs-6"></i>
                </div>
                <p class="text-secondary small mb-0" style="line-height: 1.5; font-size: 0.82rem;">${quotesData.footnote}</p>
            </div>
        </div>
    `;
}

// 5. Renderizar Visualizaciones Gráficas
function renderThematicVisualizations(visualData) {
    const container = document.getElementById("thematic-visualizations-section");
    if (!container || !visualData) return;

    container.innerHTML = `
        <div class="analysis-block-card bg-white p-4 p-md-5">
            <div class="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
                <div style="max-width: 700px;">
                    <div class="d-flex align-items-center gap-2 mb-2 text-primary fw-bold" style="font-size: 0.9rem;">
                        <i class="fas fa-chart-bar"></i> 
                    </div>
                    <h2 class="fw-bold text-dark mb-3" style="font-size: 1.6rem;">${visualData.title}</h2>
                    <p class="text-muted small mb-0" style="line-height: 1.6;">${visualData.subtitle}</p>
                </div>
                <div class="chart-info-box d-flex gap-2">
                    <i class="fas fa-info-circle text-primary mt-1"></i>
                    <div>
                        <strong class="d-block mb-1" style="font-size: 0.85rem;">Información</strong>
                        <span class="text-secondary" style="font-size: 0.8rem;">${visualData.infoBox}</span>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <div class="row chart-header-row g-0 align-items-center d-none d-md-flex">
                    <div class="col-md-3">Tema</div>
                    <div class="col-md-7 text-center">Frecuencia<br><span class="text-muted fw-normal">(n respuestas)</span></div>
                    <div class="col-md-2 text-end text-primary">Porcentaje<br><span class="text-muted fw-normal" style="font-size:0.75rem;">(sobre 69 respuestas válidas)</span></div>
                </div>

                <div class="chart-rows-container d-flex flex-column gap-3">
                    ${visualData.items.map(item => {
                        const widthPercentage = (item.count / visualData.maxResponses) * 100;
                        return `
                            <div class="row g-0 align-items-center bar-chart-row">
                                <div class="col-md-3 d-flex align-items-center gap-3 mb-2 mb-md-0">
                                    <div class="table-theme-icon-wrapper bg-light text-primary border" style="width:36px; height:36px; border-radius:50%;">
                                        <i class="${item.icon}"></i>
                                    </div>
                                    <span class="fw-semibold text-dark small">${item.theme}</span>
                                </div>
                                <div class="col-md-7 d-flex align-items-center gap-2">
                                    <div class="chart-bar-container m-0 flex-grow-1" style="height: 32px;">
                                        <div class="chart-bar-fill chart-bar-blue" style="width: ${widthPercentage}%;"></div>
                                    </div>
                                    <span class="fw-bold text-dark fs-5 ps-2" style="min-width: 25px;">${item.count}</span>
                                </div>
                                <div class="col-md-2 text-start text-md-end fw-bold text-primary fs-5 mt-1 mt-md-0">
                                    ${item.percentage}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="row g-0 pt-2 border-top mt-2 d-none d-md-flex">
                    <div class="col-md-3"></div>
                    <div class="col-md-7">
                        <div class="d-flex justify-content-between text-muted small px-1" style="font-size: 0.75rem;">
                            <span>0</span><span>5</span><span>10</span><span>15</span><span>20</span><span>25</span><span>30</span><span>35</span>
                        </div>
                        <div class="text-center text-muted small mt-1 fw-semibold" style="font-size: 0.75rem;">Número de respuestas</div>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div>

            <div class="text-muted small mt-4 d-flex align-items-center gap-2" style="font-size: 0.8rem;">
                <i class="fas fa-info-circle"></i> <span><strong>Nota:</strong> ${visualData.footnote}</span>
            </div>

            <div class="interpretation-box mt-5 d-flex gap-3 align-items-start">
                <div class="interpretation-icon flex-shrink-0">
                    <i class="fas fa-lightbulb"></i>
                </div>
                <div>
                    <h5 class="fw-bold text-primary mb-1" style="font-size: 0.95rem;">Interpretación</h5>
                    <p class="text-secondary small mb-0" style="line-height: 1.6; text-align: justify;">${visualData.interpretation}</p>
                </div>
            </div>
        </div>
    `;
}

// 6. Renderizar Nube de Palabras Tradicional (Opcional/Desactivado)
function renderWordCloud(cloudData) {
    const container = document.getElementById("thematic-wordcloud-section");
    if (!container) return;

    container.innerHTML = `
        <div class="analysis-block-card">
            <div class="d-flex align-items-center mb-4">
                <span class="analysis-block-number me-3"><i class="fas fa-cloud"></i></span>
                <div>
                    <h3 class="analysis-block-title mb-0">Nube de palabras</h3>
                    <small class="text-muted">Conceptos y términos con mayor repetición semántica</small>
                </div>
            </div>
            <div class="wordcloud-box">
                ${cloudData.map(word => `
                    <span class="wordcloud-item" style="font-size: ${word.size}; color: ${word.color}; font-weight: ${word.weight};">
                        ${word.text}
                    </span>
                `).join('')}
            </div>
        </div>
    `;
}

// 7. Renderizar Bloque de Análisis Léxico Avanzado
function renderThematicLexicalBlock(lexicalData) {
    const container = document.getElementById("thematic-wordcloud-section");
    if (!container || !lexicalData) return;

    container.innerHTML = `
        <div class="analysis-block-card bg-white p-4 p-md-5 mt-5">
            <div class="mb-4">
                <div class="d-flex align-items-center gap-2 mb-2 text-primary fw-bold">
                    <span class="badge bg-primary text-white p-2 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; border-radius: 50%; font-size: 0.85rem;">Aa</span>
                    <h2 class="mb-0 fw-bold text-dark" style="font-size: 1.6rem;">${lexicalData.title || 'Análisis léxico'}</h2>
                </div>
                <p class="text-secondary small mb-0" style="line-height: 1.6; text-align: justify;">${lexicalData.description || ''}</p>
            </div>

            <div class="row g-4 mt-2">
                <div class="col-lg-6 col-12">
                    <div class="p-3 border rounded-3 h-100 bg-light-subtle">
                        <h5 class="fw-bold mb-4 text-dark d-flex align-items-center gap-2" style="font-size: 1.1rem;">
                            <i class="fas fa-chart-bar text-primary"></i> Palabras más frecuentes
                        </h5>
                        
                        <div class="row g-0 fw-bold text-muted small pb-2 mb-3 border-bottom" style="font-size: 0.8rem;">
                            <div class="col-4">Palabra</div>
                            <div class="col-5 text-center">Frecuencia</div>
                            <div class="col-3 text-end text-primary">% sobre 69<br>respuestas válidas</div>
                        </div>

                        <div class="d-flex flex-column gap-3">
                            ${lexicalData.frequentWords && lexicalData.frequentWords.items ? lexicalData.frequentWords.items.map(item => {
                                const maxVal = lexicalData.frequentWords.maxMentions || 35;
                                const widthPercent = (item.count / maxVal) * 100;
                                return `
                                    <div class="row g-0 align-items-center">
                                        <div class="col-4 text-dark fw-semibold small text-truncate pe-2">${item.word}</div>
                                        <div class="col-5 d-flex align-items-center gap-2">
                                            <div class="flex-grow-1 bg-light border rounded" style="height: 18px; overflow: hidden;">
                                                <div class="bg-primary h-100" style="width: ${widthPercent}%;"></div>
                                            </div>
                                            <span class="fw-bold text-dark small" style="min-width: 20px;">${item.count}</span>
                                        </div>
                                        <div class="col-3 text-end fw-bold text-primary small">${item.percentage}</div>
                                    </div>
                                `;
                            }).join('') : ''}
                        </div>

                        <div class="row g-0 pt-2 mt-2 border-top">
                            <div class="col-4"></div>
                            <div class="col-5">
                                <div class="d-flex justify-content-between text-muted" style="font-size: 0.7rem;">
                                    <span>0</span><span>10</span><span>20</span><span>30</span>
                                </div>
                                <div class="text-center text-muted mt-1" style="font-size: 0.7rem;">Número de menciones</div>
                            </div>
                            <div class="col-3"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-12">
                    <div class="p-3 border rounded-3 h-100 bg-light-subtle d-flex flex-column">
                        <h5 class="fw-bold mb-4 text-dark d-flex align-items-center gap-2" style="font-size: 1.1rem;">
                            <i class="fas fa-cloud text-primary"></i> Nube de palabras
                        </h5>
                        <div class="flex-grow-1 d-flex flex-wrap align-items-center justify-content-center gap-2 p-3 bg-white rounded-3 border" style="min-height: 380px;">
                            ${lexicalData.wordCloud ? lexicalData.wordCloud.map(word => `
                                <span style="font-size: ${word.size}; color: ${word.color}; font-weight: ${word.weight}; display: inline-block; padding: 1px 4px; transition: transform 0.2s ease, filter 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.filter='brightness(0.8)';" onmouseout="this.style.transform='scale(1)'; this.style.filter='none';">
                                    ${word.text}
                                </span>
                            `).join('') : ''}
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-4 p-3 bg-light rounded border d-flex align-items-start gap-3">
                <i class="fas fa-info-circle text-primary fs-5 mt-1"></i>
                <p class="text-secondary small mb-0" style="line-height: 1.5;"><strong>Nota:</strong> ${lexicalData.footnote || ''}</p>
            </div>
        </div>
    `;
}

// 8. CORREGIDO: Renderizar el Bloque de Red de Coocurrencias Completo sin cortes
function renderThematicNetworkBlock(networkData) {
    const container = document.getElementById("thematic-network-section");
    if (!container || !networkData) return;

    container.innerHTML = `
        <div class="analysis-block-card bg-white p-4 p-md-5 mt-5">
    <div class="row g-4">
        <!-- Columna Izquierda: Grafo y cabecera -->
        <div class="col-xl-9 col-12">
            <div class="mb-4">
                <div class="d-flex align-items-center gap-2 mb-2 text-primary fw-bold">
                    <span class="badge bg-primary text-white p-2 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; border-radius: 50%; font-size: 0.9rem;">
                        <i class="fas fa-project-diagram"></i>
                    </span>
                    <h2 class="mb-0 fw-bold text-dark" style="font-size: 1.6rem;">${networkData.title || 'Red de coocurrencias'}</h2>
                </div>
                <p class="text-secondary small mb-0" style="line-height: 1.6; text-align: justify;">${networkData.description || ''}</p>
            </div>

            <div class="d-inline-flex align-items-center gap-3 bg-light border p-2 px-3 rounded-3 mb-3 shadow-sm border-light-subtle">
                <div class="text-primary"><i class="fas fa-chart-bar fs-4"></i></div>
                <div class="lh-sm">
                    <span class="fw-bold d-block text-dark small">${networkData.badgeWords || 28} palabras en la red</span>
                    <span class="text-muted extra-small" style="font-size: 0.75rem;">${networkData.badgeCooccurrences || 86} coocurrencias</span>
                </div>
            </div>

            <!-- Contenedor ajustado sin restricciones fijas cortantes -->
            <div class="border rounded-3 bg-white p-2 p-md-4 position-relative overflow-hidden d-flex justify-content-center align-items-center shadow-sm" style="width: 100%; min-height: 450px;">
                <!-- SVG con viewBox corregido (1020x960) y preserveAspectRatio -->
                <svg viewBox="0 0 1020 960" preserveAspectRatio="xMidYMid meet" class="w-100 h-auto" style="max-height: 650px;" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="network-shadow" x="-30%" y="-30%" width="160%" height="160%">
                            <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.15"/>
                        </filter>
                    </defs>

                    <!-- ================= ARISTAS (CONEXIONES Y PESOS) ================= -->
                    <!-- Clúster Azul (Infraestructura / Movilidad) -->
                    <line x1="260" y1="330" x2="310" y2="70" stroke="#a3c7f7" stroke-width="7" /> <!-- aceras - motos (7) -->
                    <line x1="260" y1="330" x2="480" y2="210" stroke="#a3c7f7" stroke-width="7" /> <!-- aceras - carros (7) -->
                    <line x1="260" y1="330" x2="100" y2="440" stroke="#1f65b7" stroke-width="8" /> <!-- aceras - calle (8) -->
                    <line x1="260" y1="330" x2="130" y2="190" stroke="#a3c7f7" stroke-width="4" /> <!-- aceras - espacio (4) -->
                    <line x1="260" y1="330" x2="280" y2="570" stroke="#a3c7f7" stroke-width="3" /> <!-- aceras - movilidad (3) -->
                    <line x1="260" y1="330" x2="430" y2="610" stroke="#a3c7f7" stroke-width="2" /> <!-- aceras - caminar (2) -->
                    
                    <line x1="310" y1="70" x2="130" y2="190" stroke="#bad5f5" stroke-width="2" /> <!-- motos - espacio (2) -->
                    <line x1="310" y1="70" x2="480" y2="210" stroke="#bad5f5" stroke-width="5" /> <!-- motos - carros (5) -->
                    <line x1="130" y1="190" x2="100" y2="440" stroke="#bad5f5" stroke-width="3" /> <!-- espacio - calle (3) -->
                    <line x1="100" y1="440" x2="280" y2="570" stroke="#bad5f5" stroke-width="2" /> <!-- calle - movilidad (2) -->
                    <line x1="280" y1="570" x2="430" y2="610" stroke="#bad5f5" stroke-width="3" /> <!-- movilidad - caminar (3) -->

                    <!-- Conexiones Inter-cluster (Azul a Verde) -->
                    <line x1="100" y1="440" x2="70" y2="740" stroke="#5bb38a" stroke-width="6" /> <!-- calle - habitantes (6) -->
                    <line x1="480" y1="210" x2="570" y2="480" stroke="#71c598" stroke-width="2" /> <!-- carros - inseguridad (2) -->
                    <line x1="260" y1="330" x2="570" y2="480" stroke="#71c598" stroke-width="3" /> <!-- aceras - inseguridad (3) -->

                    <!-- Clúster Verde (Seguridad / Entorno) -->
                    <line x1="70" y1="740" x2="290" y2="910" stroke="#a1e0c0" stroke-width="2" /> <!-- habitantes - personas (2) -->
                    <line x1="290" y1="910" x2="490" y2="860" stroke="#a1e0c0" stroke-width="3" /> <!-- personas - basuras (3) -->
                    <line x1="490" y1="860" x2="570" y2="480" stroke="#a1e0c0" stroke-width="2" /> <!-- basuras - inseguridad (2) -->
                    <line x1="490" y1="860" x2="650" y2="820" stroke="#a1e0c0" stroke-width="4" /> <!-- basuras - ruido (4) -->
                    <line x1="570" y1="480" x2="650" y2="820" stroke="#a1e0c0" stroke-width="3" /> <!-- inseguridad - ruido (3) -->

                    <!-- Conexiones Inter-cluster (Verde a Morado) -->
                    <line x1="570" y1="480" x2="780" y2="190" stroke="#9b83cf" stroke-width="6" /> <!-- inseguridad - soledad (6) -->
                    <line x1="570" y1="480" x2="800" y2="520" stroke="#bda2df" stroke-width="3" /> <!-- inseguridad - falta (3) -->
                    <line x1="650" y1="820" x2="830" y2="880" stroke="#bda2df" stroke-width="2" /> <!-- ruido - mayores (2) -->

                    <!-- Clúster Morado (Cuidado / Salud / Red) -->
                    <line x1="780" y1="190" x2="940" y2="370" stroke="#d5c2f0" stroke-width="2" /> <!-- soledad - salud (2) -->
                    <line x1="780" y1="190" x2="800" y2="520" stroke="#d5c2f0" stroke-width="3" /> <!-- soledad - falta (3) -->
                    <line x1="940" y1="370" x2="800" y2="520" stroke="#9b83cf" stroke-width="5" /> <!-- salud - falta (5) -->
                    <line x1="940" y1="370" x2="950" y2="730" stroke="#d5c2f0" stroke-width="3" /> <!-- salud - actividades (3) -->
                    <line x1="800" y1="520" x2="830" y2="880" stroke="#9b83cf" stroke-width="5" /> <!-- falta - mayores (5) -->
                    <line x1="950" y1="730" x2="830" y2="880" stroke="#d5c2f0" stroke-width="2" /> <!-- actividades - mayores (2) -->

                    <!-- ================= ETIQUETAS DE PESO (NÚMEROS) ================= -->
                    <!-- Números Azul -->
                    <text x="275" y="200" fill="#1f65b7" font-size="16" font-weight="bold">7</text>
                    <text x="375" y="255" fill="#1f65b7" font-size="16" font-weight="bold">7</text>
                    <text x="170" y="370" fill="#1f65b7" font-size="18" font-weight="bold">8</text>
                    <text x="195" y="250" fill="#1f65b7" font-size="15" font-weight="bold">4</text>
                    <text x="260" y="450" fill="#1f65b7" font-size="15" font-weight="bold">3</text>
                    <text x="350" y="480" fill="#1f65b7" font-size="15" font-weight="bold">2</text>
                    <text x="210" y="120" fill="#1f65b7" font-size="15" font-weight="bold">2</text>
                    <text x="400" y="130" fill="#1f65b7" font-size="15" font-weight="bold">5</text>
                    <text x="100" y="310" fill="#1f65b7" font-size="15" font-weight="bold">3</text>
                    <text x="180" y="520" fill="#1f65b7" font-size="15" font-weight="bold">2</text>
                    <text x="360" y="605" fill="#1f65b7" font-size="15" font-weight="bold">3</text>

                    <!-- Números Verdes e Intersecciones -->
                    <text x="70" y="590" fill="#1f65b7" font-size="18" font-weight="bold">6</text>
                    <text x="530" y="340" fill="#444" font-size="15" font-weight="bold">2</text>
                    <text x="420" y="400" fill="#444" font-size="15" font-weight="bold">3</text>
                    <text x="170" y="840" fill="#444" font-size="15" font-weight="bold">2</text>
                    <text x="380" y="900" fill="#444" font-size="15" font-weight="bold">3</text>
                    <text x="620" y="660" fill="#444" font-size="15" font-weight="bold">3</text>
                    <text x="575" y="860" fill="#444" font-size="15" font-weight="bold">4</text>

                    <!-- Números Morados e Intersecciones -->
                    <text x="670" y="320" fill="#8e67b9" font-size="18" font-weight="bold">6</text>
                    <text x="700" y="500" fill="#444" font-size="15" font-weight="bold">3</text>
                    <text x="870" y="270" fill="#8e67b9" font-size="15" font-weight="bold">2</text>
                    <text x="800" y="360" fill="#8e67b9" font-size="15" font-weight="bold">3</text>
                    <text x="880" y="440" fill="#8e67b9" font-size="15" font-weight="bold">5</text>
                    <text x="830" y="700" fill="#8e67b9" font-size="18" font-weight="bold">5</text>
                    <text x="960" y="560" fill="#8e67b9" font-size="15" font-weight="bold">3</text>
                    <text x="900" y="820" fill="#8e67b9" font-size="15" font-weight="bold">2</text>
                    <text x="740" y="870" fill="#444" font-size="15" font-weight="bold">2</text>

                    <!-- ================= NODOS (CIRCULOS Y TEXTO) ================= -->
                    <!-- Clúster Azul -->
                    <g filter="url(#network-shadow)">
                        <circle cx="260" cy="330" r="46" fill="#1f65b7" />
                        <text x="260" y="335" text-anchor="middle" fill="white" font-size="15" font-weight="bold">aceras</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="100" cy="440" r="38" fill="#2970c3" />
                        <text x="100" y="445" text-anchor="middle" fill="white" font-size="15" font-weight="bold">calle</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="310" cy="70" r="36" fill="#2970c3" />
                        <text x="310" y="75" text-anchor="middle" fill="white" font-size="14" font-weight="bold">motos</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="480" cy="210" r="35" fill="#2970c3" />
                        <text x="480" y="215" text-anchor="middle" fill="white" font-size="14" font-weight="bold">carros</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="130" cy="190" r="32" fill="#2970c3" />
                        <text x="130" y="194" text-anchor="middle" fill="white" font-size="13" font-weight="bold">espacio</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="280" cy="570" r="32" fill="#2970c3" />
                        <text x="280" y="574" text-anchor="middle" fill="white" font-size="12.5" font-weight="bold">movilidad</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="430" cy="610" r="30" fill="#2970c3" />
                        <text x="430" y="614" text-anchor="middle" fill="white" font-size="12" font-weight="bold">caminar</text>
                    </g>

                    <!-- Clúster Verde -->
                    <g filter="url(#network-shadow)">
                        <circle cx="570" cy="480" r="42" fill="#28965a" />
                        <text x="570" y="484" text-anchor="middle" fill="white" font-size="13" font-weight="bold">inseguridad</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="70" cy="740" r="38" fill="#28965a" />
                        <text x="70" y="744" text-anchor="middle" fill="white" font-size="12.5" font-weight="bold">habitantes</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="290" cy="910" r="32" fill="#28965a" />
                        <text x="290" y="914" text-anchor="middle" fill="white" font-size="12.5" font-weight="bold">personas</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="490" cy="860" r="32" fill="#28965a" />
                        <text x="490" y="864" text-anchor="middle" fill="white" font-size="13" font-weight="bold">basuras</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="650" cy="820" r="30" fill="#28965a" />
                        <text x="650" y="824" text-anchor="middle" fill="white" font-size="13" font-weight="bold">ruido</text>
                    </g>

                    <!-- Clúster Morado -->
                    <g filter="url(#network-shadow)">
                        <circle cx="800" cy="520" r="42" fill="#8e67b9" />
                        <text x="800" y="525" text-anchor="middle" fill="white" font-size="15" font-weight="bold">falta</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="780" cy="190" r="40" fill="#8e67b9" />
                        <text x="780" y="195" text-anchor="middle" fill="white" font-size="14" font-weight="bold">soledad</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="830" cy="880" r="38" fill="#8e67b9" />
                        <text x="830" y="885" text-anchor="middle" fill="white" font-size="13.5" font-weight="bold">mayores</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="940" cy="370" r="34" fill="#8e67b9" />
                        <text x="940" y="375" text-anchor="middle" fill="white" font-size="13.5" font-weight="bold">salud</text>
                    </g>

                    <g filter="url(#network-shadow)">
                        <circle cx="950" cy="730" r="34" fill="#8e67b9" />
                        <text x="950" y="734" text-anchor="middle" fill="white" font-size="11.5" font-weight="bold">actividades</text>
                    </g>
                </svg>
            </div>
        </div>

                <!-- Columna Derecha: Guía de Lectura y Grupos -->
                <div class="col-xl-3 col-12 d-flex flex-column gap-3">
                    <div class="p-3 rounded-3 bg-light border border-light-subtle shadow-sm">
                        <h6 class="fw-bold text-dark d-flex align-items-center gap-2 mb-2" style="font-size: 0.95rem;">
                            <i class="fas fa-info-circle text-primary"></i> ${networkData.guideTitle || '¿Cómo leer esta red?'}
                        </h6>
                        <p class="text-secondary small mb-0 lh-sm" style="text-align: justify; font-size: 0.8rem;">${networkData.guideText || ''}</p>
                    </div>

                    <div class="p-3 border rounded-3 bg-white flex-grow-1 shadow-sm">
                        <h6 class="fw-bold text-dark mb-3" style="font-size: 0.95rem;">Grupos temáticos</h6>
                        <div class="d-flex flex-column gap-2">
                            ${networkData.groups ? networkData.groups.map(g => `
                                <div class="d-flex align-items-center gap-2">
                                    <span style="width: 16px; height: 16px; background-color: ${g.color}; border-radius: 50%; display: inline-block; flex-shrink: 0;"></span>
                                    <span class="text-muted text-truncate" style="font-size: 0.8rem;">${g.theme}</span>
                                </div>
                            `).join('') : ''}
                        </div>

                        <hr class="my-4 text-muted" style="opacity: 0.15;">

                        <h6 class="fw-bold text-dark mb-3" style="font-size: 0.95rem;">Leyenda</h6>
                        <div class="d-flex flex-column gap-3">
                            <div class="d-flex align-items-center gap-3">
                                <span class="bg-secondary rounded-circle" style="width: 22px; height: 22px; display: inline-block; opacity: 0.7;"></span>
                                <span class="text-muted" style="font-size: 0.8rem; line-height: 1.2;">Tamaño del nodo: frecuencia de la palabra</span>
                            </div>
                            <div class="d-flex align-items-center gap-3">
                                <span class="bg-secondary" style="width: 25px; height: 4px; display: inline-block; border-radius: 2px; opacity: 0.5;"></span>
                                <span class="text-muted" style="font-size: 0.8rem; line-height: 1.2;">Grosor de la línea: fuerza de coocurrencia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-4 p-3 bg-light rounded border d-flex align-items-start gap-3">
                <i class="fas fa-info-circle text-primary fs-5 mt-1"></i>
                <p class="text-secondary small mb-0" style="line-height: 1.5;"><strong>Nota:</strong> ${networkData.footnote || ''}</p>
            </div>
        </div>
    `;
}