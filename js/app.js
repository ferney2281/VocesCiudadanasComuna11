document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderHero();
    renderCards();
});



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

// Renderizar de forma masiva las 21 Tarjetas
function renderCards() {
    const cardsContainer = document.getElementById("cards-container");
    
    cardsContainer.innerHTML = SITE_DATA.cards.map(card => `
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