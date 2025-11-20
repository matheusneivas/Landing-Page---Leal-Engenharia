// ===== NAVIGATION =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
}

// Close menu when clicking nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// ===== ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav__link[href*=' + sectionId + ']');

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===== HEADER SHADOW ON SCROLL =====
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
}

window.addEventListener('scroll', scrollHeader);

// ===== SCROLL TO TOP =====
const scrollTop = document.getElementById('scroll-top');

function showScrollTop() {
    if (this.scrollY >= 400) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
}

window.addEventListener('scroll', showScrollTop);

if (scrollTop) {
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== STATS COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString('pt-BR');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString('pt-BR');
        }
    }, 16);
}

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, observerOptions);

document.querySelectorAll('.stats__number').forEach(stat => {
    statsObserver.observe(stat);
});

// ===== CALCULATOR =====
function calculateSavings() {
    const billValue = parseFloat(document.getElementById('bill-value').value);
    const resultsDiv = document.getElementById('calculator-results');

    if (!billValue || billValue <= 0) {
        alert('Por favor, insira um valor válido para a conta de luz.');
        return;
    }

    // Cálculo de economia (estimativa de 90% de redução)
    const savingsRate = 0.90;
    const monthlySavings = billValue * savingsRate;
    const yearlySavings = monthlySavings * 12;
    const totalSavings = yearlySavings * 25; // 25 anos de vida útil

    // Atualizar valores na tela
    document.getElementById('monthly-savings').textContent =
        'R$ ' + monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('yearly-savings').textContent =
        'R$ ' + yearlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('total-savings').textContent =
        'R$ ' + totalSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Mostrar resultados com animação
    resultsDiv.style.display = 'grid';
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Atualizar link do WhatsApp com os valores calculados
    const whatsappBtn = document.getElementById('quote-whatsapp-btn');
    const message = `Olá! Fiz uma simulação no site e gostaria de solicitar um orçamento.

📊 *Minha simulação:*
• Conta de luz mensal: R$ ${billValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
• Economia mensal estimada: R$ ${monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
• Economia anual estimada: R$ ${yearlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}

Gostaria de mais informações sobre a instalação de energia solar.`;

    whatsappBtn.href = `https://wa.me/5586994283498?text=${encodeURIComponent(message)}`;
}

// ===== FAQ ACCORDION =====
const faqQuestions = document.querySelectorAll('.faq__question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const answer = item.querySelector('.faq__answer');
        const isOpen = question.getAttribute('aria-expanded') === 'true';

        // Close all other items
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.setAttribute('aria-expanded', 'false');
                q.parentElement.querySelector('.faq__answer').style.maxHeight = null;
            }
        });

        // Toggle current item
        question.setAttribute('aria-expanded', !isOpen);
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = null;
        }
    });
});

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear previous errors
        document.querySelectorAll('.form__error').forEach(error => error.textContent = '');
        document.querySelectorAll('.error').forEach(input => input.classList.remove('error'));

        let isValid = true;

        // Validate name
        const name = document.getElementById('name');
        if (!name.value.trim()) {
            showError(name, 'Por favor, informe seu nome completo.');
            isValid = false;
        } else if (name.value.trim().split(' ').length < 2) {
            showError(name, 'Por favor, informe seu nome completo.');
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Por favor, informe seu e-mail.');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Por favor, informe um e-mail válido.');
            isValid = false;
        }

        // Validate phone
        const phone = document.getElementById('phone');
        const phoneRegex = /^[\d\s\(\)\-\+]+$/;
        if (!phone.value.trim()) {
            showError(phone, 'Por favor, informe seu telefone.');
            isValid = false;
        } else if (!phoneRegex.test(phone.value) || phone.value.replace(/\D/g, '').length < 10) {
            showError(phone, 'Por favor, informe um telefone válido.');
            isValid = false;
        }

        // Validate subject
        const subject = document.getElementById('subject');
        if (!subject.value) {
            showError(subject, 'Por favor, selecione um assunto.');
            isValid = false;
        }

        // Validate message
        const message = document.getElementById('message');
        if (!message.value.trim()) {
            showError(message, 'Por favor, escreva sua mensagem.');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'A mensagem deve ter pelo menos 10 caracteres.');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            const successDiv = document.getElementById('form-success');
            successDiv.style.display = 'flex';
            contactForm.reset();

            // Scroll to success message
            successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Hide success message after 5 seconds
            setTimeout(() => {
                successDiv.style.display = 'none';
            }, 5000);
        }
    });
}

function showError(input, message) {
    input.classList.add('error');
    const errorSpan = document.getElementById(input.id + '-error');
    if (errorSpan) {
        errorSpan.textContent = message;
    }
}

// ===== MODAL FUNCTIONS =====
const modal = document.getElementById('quote-modal');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===== QUOTE FORM VALIDATION =====
const quoteForm = document.getElementById('quote-form');

if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear previous errors
        document.querySelectorAll('.form__error').forEach(error => error.textContent = '');
        document.querySelectorAll('.error').forEach(input => input.classList.remove('error'));

        let isValid = true;

        // Validate name
        const name = document.getElementById('quote-name');
        if (!name.value.trim()) {
            showError(name, 'Por favor, informe seu nome completo.');
            isValid = false;
        } else if (name.value.trim().split(' ').length < 2) {
            showError(name, 'Por favor, informe seu nome completo.');
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('quote-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Por favor, informe seu e-mail.');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Por favor, informe um e-mail válido.');
            isValid = false;
        }

        // Validate phone
        const phone = document.getElementById('quote-phone');
        const phoneRegex = /^[\d\s\(\)\-\+]+$/;
        if (!phone.value.trim()) {
            showError(phone, 'Por favor, informe seu telefone.');
            isValid = false;
        } else if (!phoneRegex.test(phone.value) || phone.value.replace(/\D/g, '').length < 10) {
            showError(phone, 'Por favor, informe um telefone válido.');
            isValid = false;
        }

        // Validate type
        const type = document.getElementById('quote-type');
        if (!type.value) {
            showError(type, 'Por favor, selecione o tipo de instalação.');
            isValid = false;
        }

        // Validate bill
        const bill = document.getElementById('quote-bill');
        if (!bill.value || parseFloat(bill.value) <= 0) {
            showError(bill, 'Por favor, informe um valor válido.');
            isValid = false;
        }

        // Validate city
        const city = document.getElementById('quote-city');
        if (!city.value.trim()) {
            showError(city, 'Por favor, informe sua cidade/estado.');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            const successDiv = document.getElementById('quote-success');
            successDiv.style.display = 'flex';
            quoteForm.reset();

            // Hide success message and close modal after 3 seconds
            setTimeout(() => {
                successDiv.style.display = 'none';
                closeModal();
            }, 3000);
        }
    });
}

// ===== PHONE MASK =====
function phoneMask(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
}

const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        e.target.value = phoneMask(e.target.value);
    });
});

// ===== SCROLL ANIMATIONS =====
const fadeElements = document.querySelectorAll('.service__card, .benefit__card, .project__card, .testimonial__card, .faq__item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.classList.add('fade-in');
    fadeObserver.observe(element);
});

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // For images with loading="lazy" attribute, the browser handles it
                // This is just for additional control if needed

                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => imageObserver.observe(img));
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Don't prevent default for modal triggers or empty anchors
        if (href === '#' || this.hasAttribute('onclick')) {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== PERFORMANCE: Debounce scroll events =====
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    scrollActive();
    scrollHeader();
    showScrollTop();
}, 10));

// ===== CONSOLE MESSAGE =====
console.log('%c🌞 Leal Engenharia - Energia Solar', 'font-size: 20px; font-weight: bold; color: #0066cc;');
console.log('%cTransformando luz solar em economia!', 'font-size: 14px; color: #22c55e;');

// ===== ACCESSIBILITY: Focus visible for keyboard navigation =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add CSS for keyboard navigation focus
const style = document.createElement('style');
style.textContent = `
    body:not(.keyboard-navigation) *:focus {
        outline: none;
    }

    .keyboard-navigation *:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Erro capturado:', e.error);
    // Em produção, você poderia enviar este erro para um serviço de monitoramento
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page Leal Engenharia carregada com sucesso!');

    // Set initial active link
    scrollActive();

    // Check if there's a hash in the URL
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});
