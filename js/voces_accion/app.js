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
    navContainer.innerHTML = SITE_DATA1.navigation.map(item => `
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
    document.getElementById("main-question-title").textContent = SITE_DATA1.hero.title;
    document.getElementById("main-question-subtitle").textContent = SITE_DATA1.hero.subtitle;
}

// Renderizar Métricas de Resumen General
function renderMetrics() {
    const metricsContainer = document.getElementById("metrics-container");
    if (!metricsContainer || !SITE_DATA1.summaryMetrics) return;

    metricsContainer.innerHTML = SITE_DATA1.summaryMetrics.map(metric => {
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
function renderCards() {
    const cardsContainer = document.getElementById("cards-container");
    if (!cardsContainer) return;
    
    cardsContainer.innerHTML = SITE_DATA1.cards.map(card => `
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
            <div class="question-card p-4 d-flex flex-column h-100 justify-content-between">
                <div>
                    <div class="d-flex align-items-center mb-3">
                        <div class="card-number me-3">${card.id}</div>
                        <h5 class="card-title mb-0 fw-bold text-secondary">${card.title}</h5>
                    </div>
                    <p class="card-text text-muted small">${card.desc}</p>
                </div>
                <div class="d-flex justify-content-end align-items-center mt-3">
                    <a href="${card.url_analisis}" class="card-arrow-btn" title="Ver análisis">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// =========================================================================
// CONTROLADOR DE PESTAÑAS (TABS)
// =========================================================================

// Renderizar e inicializar las pestañas de análisis
function renderAnalysisTabs() {
    const tabsNavContainer = document.getElementById("analysis-tabs-nav");
    const tabsContentContainer = document.getElementById("analysis-tabs-content");

    if (!tabsNavContainer || !tabsContentContainer || !SITE_DATA1.analysisTabs) return;

    // Generar la botonera (pestañas)
    tabsNavContainer.innerHTML = SITE_DATA1.analysisTabs.map(tab => `
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
    tabsContentContainer.innerHTML = SITE_DATA1.analysisTabs.map(tab => `
        <div 
            class="tab-pane fade ${tab.active ? 'show active' : ''}" 
            id="tab-panel-${tab.id}" 
            role="tabpanel" 
            aria-labelledby="tab-btn-${tab.id}">
            ${tab.content}
        </div>
    `).join('');

    // Pintar los datos si "tematico" es la pestaña activa inicial
    const activeTab = SITE_DATA1.analysisTabs.find(tab => tab.active);
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
    const data = SITE_DATA1.thematicAnalysis;
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
                <h4 class="fw-bold text-dark mb-3" style="font-size: 1.35rem; min-height: 54px; display: flex; align-items: center; letter-spacing: -0.5px;">${card.title}</h4>
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
                    <div class="col-md-2 text-end text-primary">Porcentaje<br><span class="text-muted fw-normal" style="font-size:0.75rem;">(sobre 53 respuestas válidas)</span></div>
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
                            <span>0</span><span>5</span><span>10</span><span>15</span><span>20</span><span>25</span>
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
                            <div class="col-3 text-end text-primary">% sobre 53<br>respuestas válidas</div>
                        </div>

                        <div class="d-flex flex-column gap-3">
                            ${lexicalData.frequentWords && lexicalData.frequentWords.items ? lexicalData.frequentWords.items.map(item => {
                                const maxVal = lexicalData.frequentWords.maxMentions || 30;
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

                    <div class="border rounded-3 bg-white p-2 position-relative overflow-hidden d-flex justify-content-center align-items-center shadow-sm" style="min-height: 550px;">
                        <svg viewBox="0 0 900 680" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
                            <style>
                                .node-text {
                                    font-weight: 600;
                                    text-anchor: middle;
                                    dominant-baseline: central;
                                }
                                .text-white { fill: #ffffff; }
                                .text-dark-blue { fill: #1c3b6e; }
                                .text-dark-green { fill: #1b4b27; }
                                .text-dark-purple { fill: #3b1b63; }
                                .text-dark-yellow { fill: #5c4300; }
                                .text-dark-teal { fill: #0d4b4d; }
                                .text-dark-orange { fill: #5e2800; }
                            </style>

                            <!-- ==================== LÍNEAS / CONEXIONES ==================== -->
                            <g id="connections" stroke-linecap="round">
                                <!-- Conexiones Principales (Desde el nodo central 'atención') -->
                                <line x1="450" y1="300" x2="330" y2="170" stroke="#2b6cb0" stroke-width="6" /> <!-- a Policía -->
                                <line x1="450" y1="300" x2="600" y2="170" stroke="#48bb78" stroke-width="6" /> <!-- a Hogares -->
                                <line x1="450" y1="300" x2="670" y2="360" stroke="#8b5cf6" stroke-width="6" /> <!-- a Educación -->
                                <line x1="450" y1="300" x2="610" y2="510" stroke="#ecc94b" stroke-width="2.5" /> <!-- a Convivencia -->
                                <line x1="450" y1="300" x2="400" y2="515" stroke="#319795" stroke-width="3" /> <!-- a Ayuda -->
                                <line x1="450" y1="300" x2="230" y2="380" stroke="#ed8936" stroke-width="6" /> <!-- a Movilidad -->

                                <!-- Conexiones de 'Policía' -->
                                <line x1="330" y1="170" x2="365" y2="50" stroke="#63b3ed" stroke-width="2" /> <!-- seguridad -->
                                <line x1="330" y1="170" x2="235" y2="75" stroke="#63b3ed" stroke-width="2" /> <!-- vigilancia -->
                                <line x1="330" y1="170" x2="140" y2="145" stroke="#63b3ed" stroke-width="2" /> <!-- control -->
                                <line x1="330" y1="170" x2="135" y2="235" stroke="#63b3ed" stroke-width="2" /> <!-- autoridades -->
                                <line x1="330" y1="170" x2="225" y2="265" stroke="#63b3ed" stroke-width="2" /> <!-- ley -->

                                <!-- Conexiones de 'Hogares' -->
                                <line x1="600" y1="170" x2="570" y2="65" stroke="#81e6d9" stroke-width="2" /> <!-- salud -->
                                <line x1="600" y1="170" x2="705" y2="75" stroke="#68d391" stroke-width="2" /> <!-- acompañamiento -->
                                <line x1="600" y1="170" x2="775" y2="150" stroke="#68d391" stroke-width="2" /> <!-- adultos mayores -->
                                <line x1="600" y1="170" x2="745" y2="235" stroke="#68d391" stroke-width="2" /> <!-- servicios -->

                                <!-- Conexiones de 'Educación' -->
                                <line x1="670" y1="360" x2="815" y2="295" stroke="#c084fc" stroke-width="2" /> <!-- concientización -->
                                <line x1="670" y1="360" x2="840" y2="365" stroke="#c084fc" stroke-width="2" /> <!-- participación -->
                                <line x1="670" y1="360" x2="800" y2="465" stroke="#c084fc" stroke-width="2" /> <!-- comunidad -->
                                <line x1="670" y1="360" x2="660" y2="465" stroke="#c084fc" stroke-width="2" /> <!-- inclusión -->

                                <!-- Conexiones de 'Ruido' (vía Convivencia) -->
                                <line x1="610" y1="510" x2="670" y2="570" stroke="#ecc94b" stroke-width="3" /> <!-- a Ruido -->
                                <line x1="670" y1="570" x2="750" y2="525" stroke="#f6ad55" stroke-width="2" /> <!-- normas -->
                                <line x1="670" y1="570" x2="775" y2="630" stroke="#f6ad55" stroke-width="2" /> <!-- control -->

                                <!-- Conexiones de 'Ayuda' -->
                                <line x1="400" y1="515" x2="305" y2="575" stroke="#4fd1c5" stroke-width="2" /> <!-- recursos -->
                                <line x1="400" y1="515" x2="395" y2="630" stroke="#4fd1c5" stroke-width="2" /> <!-- económico -->
                                <line x1="400" y1="515" x2="510" y2="565" stroke="#4fd1c5" stroke-width="2" /> <!-- apoyo -->

                                <!-- Conexiones de 'Movilidad' -->
                                <line x1="230" y1="380" x2="105" y2="310" stroke="#fbd38d" stroke-width="2" /> <!-- rampas -->
                                <line x1="230" y1="380" x2="50" y2="395" stroke="#fbd38d" stroke-width="2" /> <!-- espacio público -->
                                <line x1="230" y1="380" x2="90" y2="480" stroke="#fbd38d" stroke-width="2" /> <!-- accesibilidad -->
                                <line x1="230" y1="380" x2="235" y2="515" stroke="#fbd38d" stroke-width="2" /> <!-- infraestructura -->
                            </g>

                            <!-- ==================== NODOS PERIFÉRICOS (SECUNDARIOS) ==================== -->
                            <g id="secondary-nodes">
                                <!-- Rama Policía (Azul claro) -->
                                <g transform="translate(365, 50)">
                                    <circle r="32" fill="#bee3f8" />
                                    <text class="node-text text-dark-blue" font-size="12">seguridad</text>
                                </g>
                                <g transform="translate(235, 75)">
                                    <circle r="30" fill="#bee3f8" />
                                    <text class="node-text text-dark-blue" font-size="12">vigilancia</text>
                                </g>
                                <g transform="translate(140, 145)">
                                    <circle r="28" fill="#c3ddfd" />
                                    <text class="node-text text-dark-blue" font-size="12">control</text>
                                </g>
                                <g transform="translate(135, 235)">
                                    <circle r="32" fill="#c3ddfd" />
                                    <text class="node-text text-dark-blue" font-size="12">autoridades</text>
                                </g>
                                <g transform="translate(225, 265)">
                                    <circle r="25" fill="#c3ddfd" />
                                    <text class="node-text text-dark-blue" font-size="12">ley</text>
                                </g>

                                <!-- Rama Hogares (Verde claro) -->
                                <g transform="translate(570, 65)">
                                    <circle r="26" fill="#c6f6d5" />
                                    <text class="node-text text-dark-green" font-size="12">salud</text>
                                </g>
                                <g transform="translate(705, 75)">
                                    <circle r="38" fill="#d4f7dc" />
                                    <text class="node-text text-dark-green" font-size="12">acompañamiento</text>
                                </g>
                                <g transform="translate(775, 150)">
                                    <circle r="34" fill="#d4f7dc" />
                                    <text class="node-text text-dark-green" font-size="11">adultos</text>
                                    <text class="node-text text-dark-green" font-size="11" dy="13">mayores</text>
                                </g>
                                <g transform="translate(745, 235)">
                                    <circle r="30" fill="#d4f7dc" />
                                    <text class="node-text text-dark-green" font-size="12">servicios</text>
                                </g>

                                <!-- Rama Educación (Morado claro) -->
                                <g transform="translate(815, 295)">
                                    <circle r="34" fill="#e9d8fd" />
                                    <text class="node-text text-dark-purple" font-size="11">concientización</text>
                                </g>
                                <g transform="translate(840, 365)">
                                    <circle r="32" fill="#e9d8fd" />
                                    <text class="node-text text-dark-purple" font-size="11">participación</text>
                                </g>
                                <g transform="translate(800, 465)">
                                    <circle r="30" fill="#e9d8fd" />
                                    <text class="node-text text-dark-purple" font-size="12">comunidad</text>
                                </g>
                                <g transform="translate(660, 465)">
                                    <circle r="28" fill="#e9d8fd" />
                                    <text class="node-text text-dark-purple" font-size="12">inclusión</text>
                                </g>

                                <!-- Rama Convivencia y Ruido (Amarillo / Naranja claro) -->
                                <g transform="translate(610, 510)">
                                    <circle r="35" fill="#fefcbf" />
                                    <text class="node-text text-dark-yellow" font-size="12">convivencia</text>
                                </g>
                                <g transform="translate(750, 525)">
                                    <circle r="28" fill="#fefcbf" />
                                    <text class="node-text text-dark-yellow" font-size="12">normas</text>
                                </g>
                                <g transform="translate(775, 630)">
                                    <circle r="28" fill="#fefcbf" />
                                    <text class="node-text text-dark-yellow" font-size="12">control</text>
                                </g>

                                <!-- Rama Ayuda (Turquesa claro) -->
                                <g transform="translate(305, 575)">
                                    <circle r="30" fill="#b2f5ea" />
                                    <text class="node-text text-dark-teal" font-size="12">recursos</text>
                                </g>
                                <g transform="translate(395, 630)">
                                    <circle r="30" fill="#b2f5ea" />
                                    <text class="node-text text-dark-teal" font-size="12">económico</text>
                                </g>
                                <g transform="translate(510, 565)">
                                    <circle r="28" fill="#e6fffa" />
                                    <text class="node-text text-dark-teal" font-size="12">apoyo</text>
                                </g>

                                <!-- Rama Movilidad (Naranja suave) -->
                                <g transform="translate(105, 310)">
                                    <circle r="26" fill="#feebc8" />
                                    <text class="node-text text-dark-orange" font-size="12">rampas</text>
                                </g>
                                <g transform="translate(50, 395)">
                                    <circle r="34" fill="#feebc8" />
                                    <text class="node-text text-dark-orange" font-size="12">espacio</text>
                                    <text class="node-text text-dark-orange" font-size="12" dy="13">público</text>
                                </g>
                                <g transform="translate(90, 480)">
                                    <circle r="34" fill="#feebc8" />
                                    <text class="node-text text-dark-orange" font-size="12">accesibilidad</text>
                                </g>
                                <g transform="translate(235, 515)">
                                    <circle r="35" fill="#feebc8" />
                                    <text class="node-text text-dark-orange" font-size="11">infraestructura</text>
                                </g>
                            </g>

                            <!-- ==================== NODOS PRINCIPALES (PRIMARIOS) ==================== -->
                            <g id="primary-nodes">
                                <!-- Nodo Central: atención -->
                                <g transform="translate(450, 300)">
                                    <circle r="60" fill="#2b6cb0" />
                                    <text class="node-text text-white" font-size="22">atención</text>
                                </g>

                                <!-- Nodo: policía -->
                                <g transform="translate(330, 170)">
                                    <circle r="52" fill="#2b6cb0" />
                                    <text class="node-text text-white" font-size="20">policía</text>
                                </g>

                                <!-- Nodo: hogares -->
                                <g transform="translate(600, 170)">
                                    <circle r="52" fill="#48bb78" />
                                    <text class="node-text text-white" font-size="20">hogares</text>
                                </g>

                                <!-- Nodo: educación -->
                                <g transform="translate(670, 360)">
                                    <circle r="50" fill="#8b5cf6" />
                                    <text class="node-text text-white" font-size="19">educación</text>
                                </g>

                                <!-- Nodo: ruido -->
                                <g transform="translate(670, 570)">
                                    <circle r="42" fill="#ecc94b" />
                                    <text class="node-text text-white" font-size="18">ruido</text>
                                </g>

                                <!-- Nodo: ayuda -->
                                <g transform="translate(400, 515)">
                                    <circle r="44" fill="#319795" />
                                    <text class="node-text text-white" font-size="19">ayuda</text>
                                </g>

                                <!-- Nodo: movilidad -->
                                <g transform="translate(230, 380)">
                                    <circle r="55" fill="#ed8936" />
                                    <text class="node-text text-white" font-size="20">movilidad</text>
                                </g>
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