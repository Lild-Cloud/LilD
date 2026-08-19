// ========================================
// NAVEGAÇÃO E MANIPULAÇÃO DE PÁGINAS
// ========================================

/**
 * Navega para uma página específica
 * @param {string} pageName - Nome da página a ser exibida
 */
function navigateTo(pageName) {
    // Oculta todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Mostra a página selecionada
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Atualiza botões de navegação
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-page') === pageName) {
            btn.classList.add('active');
        }
    });

    // Fecha menu mobile se estiver aberto
    closeMenu();

    // Scroll para o topo
    window.scrollTo(0, 0);
}

// ========================================
// MENU MOBILE
// ========================================

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

function closeMenu() {
    if (nav) {
        nav.classList.remove('active');
    }
}

// Fecha o menu quando clicar em um botão de navegação
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const pageName = e.currentTarget.getAttribute('data-page');
        navigateTo(pageName);
    });
});

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Coleta dados do formulário
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };

        // Valida formulário
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showAlert('Por favor, preencha todos os campos obrigatórios!', 'warning');
            return;
        }

        // Simula envio (em produção, enviaria para um servidor)
        console.log('Formulário enviado:', formData);
        
        // Mostra mensagem de sucesso
        showAlert('Mensagem enviada com sucesso! Obrigado pelo contato.', 'success');

        // Limpa formulário
        contactForm.reset();
    });
}

// ========================================
// NEWSLETTER
// ========================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = newsletterForm.querySelector('input[type="email"]').value;

        if (!email) {
            showAlert('Por favor, insira um email válido!', 'warning');
            return;
        }

        console.log('Email inscrito:', email);
        showAlert('Você foi inscrito na newsletter com sucesso!', 'success');
        newsletterForm.reset();
    });
}

// ========================================
// SISTEMA DE ALERTAS
// ========================================

/**
 * Exibe uma mensagem de alerta
 * @param {string} message - Mensagem a ser exibida
 * @param {string} type - Tipo de alerta: 'success', 'warning', 'error'
 */
function showAlert(message, type = 'info') {
    // Remove alertas anteriores
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());

    // Cria elemento de alerta
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <span>${message}</span>
            <button class="alert-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Insere alerta no topo da página
    document.body.insertBefore(alert, document.body.firstChild);

    // Remove alerta automaticamente após 5 segundos
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
}

// Estilos dos alertas (adicionados dinamicamente)
const alertStyles = `
<style>
    .alert {
        position: fixed;
        top: 80px;
        right: 20px;
        left: 20px;
        max-width: 400px;
        margin: 0 auto 0 auto;
        right: 20px;
        left: auto;
        padding: 1rem;
        border-radius: 5px;
        z-index: 2000;
        animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .alert-success {
        background-color: #D4EDDA;
        color: #155724;
        border: 1px solid #C3E6CB;
    }

    .alert-warning {
        background-color: #FFF3CD;
        color: #856404;
        border: 1px solid #FFEAA7;
    }

    .alert-error {
        background-color: #F8D7DA;
        color: #721C24;
        border: 1px solid #F5C6CB;
    }

    .alert-info {
        background-color: #D1ECF1;
        color: #0C5460;
        border: 1px solid #BEE5EB;
    }

    .alert-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    .alert-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
    }

    @media (max-width: 768px) {
        .alert {
            left: 20px;
            right: 20px;
            max-width: none;
        }
    }
</style>
`;

document.head.insertAdjacentHTML('beforeend', alertStyles);

// ========================================
// SCROLL SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ANIMAÇÕES DE SCROLL
// ========================================

/**
 * Observa elementos e aplica animações quando entram na viewport
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observa cards e artigos
document.querySelectorAll('.featured-card, .topic-card, .resource-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// TEMAS (Dark/Light)
// ========================================

/**
 * Alterna entre tema claro e escuro
 */
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Salva preferência no localStorage
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Carrega tema salvo
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// ========================================
// UTILITÁRIOS
// ========================================

/**
 * Formata data
 * @param {Date} date - Data a ser formatada
 * @returns {string} Data formatada
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
}

/**
 * Copia texto para clipboard
 * @param {string} text - Texto a ser copiado
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showAlert('Copiado para a área de transferência!', 'success');
    }).catch(() => {
        showAlert('Erro ao copiar!', 'error');
    });
}

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('LilD - Segurança no Trabalho carregado com sucesso!');
    
    // Define página inicial como ativa
    navigateTo('home');

    // Inicializa eventos de clique em cards destacados
    document.querySelectorAll('.featured-card').forEach(card => {
        card.addEventListener('click', function() {
            const pageName = this.getAttribute('onclick')?.match(/navigateTo\('([^']+)'\)/)?.[1];
            if (pageName) {
                navigateTo(pageName);
            }
        });
    });
});

// ========================================
// SERVICE WORKER (Para funcionalidade offline)
// ========================================

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => {
        console.log('Service Worker não foi registrado:', err);
    });
}

// ========================================
// GOOGLE ANALYTICS (Opcional)
// ========================================

// Descomente e substitua pelo seu ID de rastreamento
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
*/

// ========================================
// RASTREAMENTO DE EVENTOS PERSONALIZADOS
// ========================================

/**
 * Registra evento personalizado
 * @param {string} eventName - Nome do evento
 * @param {object} eventData - Dados do evento
 */
function trackEvent(eventName, eventData = {}) {
    console.log(`Evento: ${eventName}`, eventData);
    
    // Se houver Google Analytics configurado, descomentar:
    // gtag('event', eventName, eventData);
}

// Rastreia navegação entre páginas
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.getAttribute('data-page');
        trackEvent('page_view', { page: page });
    });
});

// ========================================
// FEEDBACK DO USUÁRIO
// ========================================

/**
 * Abre feedback modal
 */
function openFeedback() {
    showAlert('Obrigado pelo interesse em nos ajudar a melhorar! Envie uma mensagem através da seção Contato.', 'info');
}
