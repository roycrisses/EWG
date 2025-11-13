// Easy Way Groups - Interactive Features

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Testimonials Carousel
let currentSlide = 0;
let autoPlayInterval;
let dotsArray = [];

const slides = document.querySelectorAll('.testimonial-slide');

function updateDots() {
    // Update all dots to reflect current slide
    dotsArray.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function showSlide(n) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Calculate the correct slide index
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    // Add active class to current slide
    slides[currentSlide].classList.add('active');
    
    // Update dots
    updateDots();
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
    resetAutoPlay();
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
    resetAutoPlay();
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetAutoPlay();
}

// Reset auto-play timer when user interacts
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Start auto-play
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

// Carousel button listeners
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (prevBtn) prevBtn.addEventListener('click', prevSlide);
if (nextBtn) nextBtn.addEventListener('click', nextSlide);

// Create carousel dots
const carouselDotsContainer = document.getElementById('carouselDots');
if (carouselDotsContainer && slides.length > 0) {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        carouselDotsContainer.appendChild(dot);
        dotsArray.push(dot); // Store reference to dot
    });
}

// Initialize carousel
if (slides.length > 0) {
    showSlide(0);
    startAutoPlay();
}

// Advanced Parallax effect on scroll
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax-layer');
    parallaxElements.forEach(element => {
        let scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
    
    // Parallax for different speed elements
    const slowElements = document.querySelectorAll('.parallax-slow');
    slowElements.forEach(element => {
        let scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
    
    const mediumElements = document.querySelectorAll('.parallax-medium');
    mediumElements.forEach(element => {
        let scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
    
    const fastElements = document.querySelectorAll('.parallax-fast');
    fastElements.forEach(element => {
        let scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.7}px)`;
    });
});

// Counter animation for stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Trigger counter animation when stats section is visible
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats-section');
if (statsSection) observer.observe(statsSection);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if (navMenu) navMenu.style.display = 'none';
        }
    });
});

// Scroll Reveal Animation
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Trigger when element is in viewport (85% threshold)
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            // Don't add active class twice
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        }
    });
};

// Zigzag Ladder Effect for Services Section - One by One on Scroll
const triggerServiceZigzag = () => {
    const serviceItems = document.querySelectorAll('.services-diagonal-grid .service-item');
    
    if (serviceItems.length === 0) return;
    
    // For each service item, check if it's in viewport
    serviceItems.forEach((item, index) => {
        // Skip if already animated
        if (item.classList.contains('animated')) return;
        
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Trigger when item is 60% visible in viewport (more aggressive)
        if (itemTop < windowHeight * 0.6 && itemBottom > 0) {
            // Add animated class to trigger animation
            item.classList.add('animated');
        }
    });
};

// Call zigzag trigger on scroll with throttling
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
        triggerServiceZigzag();
        scrollTimeout = null;
    }, 50);
}, { passive: true });

// Initial check on page load
window.addEventListener('load', triggerServiceZigzag);
document.addEventListener('DOMContentLoaded', triggerServiceZigzag);

// Add animation classes on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
    
    // Trigger scroll reveals
    revealElements();
};

// Initialize animations
document.querySelectorAll('[data-aos]').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Throttle scroll events for better performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            animateOnScroll();
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Form validation (if forms are added)
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = '#e5e7eb';
        }
    });
    
    return isValid;
};

// Scroll to top button
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

createScrollToTopButton();

// Responsive menu handling
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu) {
        navMenu.style.display = 'flex';
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Easy Way Groups website loaded successfully');
    
    // Show initial slide
    if (slides.length > 0) {
        showSlide(0);
    }
    
    // Add any additional initialization here
});
