// Language Toggle Functionality
let currentLanguage = 'en';

const languageToggle = document.getElementById('languageToggle');
const languageText = document.getElementById('languageText');

// Translation function
function translatePage(language) {
    currentLanguage = language;
    
    // Update all elements with translation data attributes
    const elements = document.querySelectorAll('[data-en][data-rw]');
    
    elements.forEach(element => {
        const translation = element.getAttribute(`data-${language}`);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update language toggle button text
    languageText.textContent = language === 'en' ? 'Kinyarwanda' : 'English';
    
    // Update HTML lang attribute
    document.documentElement.lang = language === 'en' ? 'en' : 'rw';
}

// Language toggle event listener
languageToggle.addEventListener('click', () => {
    const newLanguage = currentLanguage === 'en' ? 'rw' : 'en';
    translatePage(newLanguage);
});

// Smooth scroll for buttons (optional enhancement)
const scrollButtons = document.querySelectorAll('.btn');
scrollButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Add your navigation logic here
        console.log('Button clicked:', e.target.textContent);
    });
});

// Add scroll animation for cards (optional enhancement)
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

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});