document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize service animations
    initServiceAnimations();
});

// Initialize animations with Anime.js
function initAnimations() {
    // Hero section animations
    anime({
        targets: '.animate-text',
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 300
    });
    
    anime({
        targets: '.animate-text-delay',
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 600
    });
    
    anime({
        targets: '.animate-text-delay-2',
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 900
    });
    
    // Hero background animation
    anime({
        targets: '.hero-bg',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500
    });
}

// Initialize scroll effects with ScrollReveal
function initScrollEffects() {
    // Configure ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        delay: 200,
        easing: 'ease',
        reset: false
    });
    
    // Apply to elements
    sr.reveal('.section-header', {});
    sr.reveal('.service-category', { interval: 200 });
    sr.reveal('.industry-card', { interval: 150 });
    sr.reveal('.feature-card', { interval: 150 });
    sr.reveal('.case-study-card', { interval: 200 });
    sr.reveal('.testimonial-card', { interval: 200 });
    sr.reveal('.blog-card', { interval: 200 });
    sr.reveal('.contact-info-item', { interval: 150 });
    sr.reveal('.contact-form', { delay: 300 });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            header.style.height = '70px';
        } else {
            header.style.boxShadow = 'none';
            header.style.height = '80px';
        }
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Clone the main menu
    const mainMenu = document.querySelector('.main-menu').cloneNode(true);
    mobileMenu.appendChild(mainMenu);
    document.body.appendChild(mobileMenu);
    
    // Toggle menu
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Animate toggle button
        if (this.classList.contains('active')) {
            this.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
            this.querySelector('span:nth-child(2)').style.opacity = '0';
            this.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            this.querySelector('span:nth-child(1)').style.transform = 'none';
            this.querySelector('span:nth-child(2)').style.opacity = '1';
            this.querySelector('span:nth-child(3)').style.transform = 'none';
        }
    });
    
    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            menuToggle.querySelector('span:nth-child(1)').style.transform = 'none';
            menuToggle.querySelector('span:nth-child(2)').style.opacity = '1';
            menuToggle.querySelector('span:nth-child(3)').style.transform = 'none';
        });
    });
}

// Initialize back to top button
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize service animations with Lottie
function initServiceAnimations() {
    // Hero animation
    const heroAnimation = lottie.loadAnimation({
        container: document.getElementById('hero-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets5.lottiefiles.com/packages/lf20_xyadoh9h.json' // AI/Tech animation
    });
    
    // Service animations
    const serviceAnimations = [
        { id: 'ai-consulting-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_bXmGmI.json' },
        { id: 'ai-development-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_ctaacqnz.json' },
        { id: 'chatbot-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_ksrpwzxs.json' },
        { id: 'ai-app-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_hntzYU.json' },
        { id: 'mlops-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_qqtavvc8.json' },
        { id: 'ml-dev-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_ukjcyybm.json' },
        { id: 'cv-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_zyu0ctqy.json' },
        { id: 'gen-ai-consulting-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_ikvz7qhc.json' },
        { id: 'gen-ai-dev-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_dgjm0ukm.json' },
        { id: 'stable-diffusion-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_iplnpqrs.json' },
        { id: 'custom-gpt-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_jtbfg1k1.json' },
        { id: 'web-app-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_jvkzfzss.json' },
        { id: 'mobile-app-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_xlkxtmul.json' },
        { id: 'api-dev-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json' },
        { id: 'full-stack-animation', path: 'https://assets5.lottiefiles.com/packages/lf20_3vbOcw.json' }
    ];
    
    // Load animations for visible elements
    serviceAnimations.forEach(animation => {
        const element = document.getElementById(animation.id);
        if (element) {
            lottie.loadAnimation({
                container: element,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: animation.path
            });
        }
    });
    
    // Initialize GSAP animations for service items
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('.service-item').forEach(item => {
        gsap.from(item, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: item,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Animate industry cards with GSAP
    gsap.utils.toArray('.industry-card').forEach((card, index) => {
        gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            }
        });
    });
}