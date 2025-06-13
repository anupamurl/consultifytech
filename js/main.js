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
    
    // Initialize insights modal
    initInsightsModal();
    
    // Ensure genaianimation loads properly
    if (document.getElementById('genaianimation')) {
        loadGenAIAnimation();
    }
});

// Load GenAI Animation separately to ensure it works
function loadGenAIAnimation() {
    // Create a professional animation that shows GenAI, ML, and Web Development
    const genaiContainer = document.getElementById('genaianimation');
    if (!genaiContainer) return;
    
    // Clear any existing content
    genaiContainer.innerHTML = '';
    
    // Create the main container with professional styling
    const mainContainer = document.createElement('div');
    mainContainer.className = 'tech-showcase';
    genaiContainer.appendChild(mainContainer);
    
    // Create the animated background
    const bgElement = document.createElement('div');
    bgElement.className = 'tech-bg';
    mainContainer.appendChild(bgElement);
    
    // Create three sections for the different technologies with premium animations
    const sections = [
        {
            id: 'genai-section',
            title: 'Generative AI',
            icon: 'brain',
            animPath: 'https://assets6.lottiefiles.com/packages/lf20_zrqthn6o.json',
            description: 'Next-gen AI models'
        },
        {
            id: 'ml-section',
            title: 'Machine Learning',
            icon: 'microchip',
            animPath: 'https://assets2.lottiefiles.com/packages/lf20_ksthc2gu.json',
            description: 'Data-driven intelligence'
        },
        {
            id: 'web-section',
            title: 'Web Development',
            icon: 'code',
            animPath: 'https://assets9.lottiefiles.com/packages/lf20_cwqf5i6h.json',
            description: 'Enterprise applications'
        }
    ];
    
    // Create the container for the sections
    const sectionsContainer = document.createElement('div');
    sectionsContainer.className = 'tech-sections';
    mainContainer.appendChild(sectionsContainer);
    
    // Add each section with enhanced animations
    sections.forEach((section, index) => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'tech-section';
        sectionEl.id = section.id;
        
        // Add animation delay for staggered effect
        sectionEl.style.animationDelay = `${index * 0.2}s`;
        
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'tech-icon-wrapper';
        
        const iconEl = document.createElement('div');
        iconEl.className = 'tech-icon';
        iconEl.innerHTML = `<i class="fas fa-${section.icon}"></i>`;
        
        const glowEl = document.createElement('div');
        glowEl.className = 'tech-icon-glow';
        
        iconWrapper.appendChild(iconEl);
        iconWrapper.appendChild(glowEl);
        
        const contentEl = document.createElement('div');
        contentEl.className = 'tech-content';
        
        const titleEl = document.createElement('div');
        titleEl.className = 'tech-title';
        titleEl.textContent = section.title;
        
        const descEl = document.createElement('div');
        descEl.className = 'tech-description';
        descEl.textContent = section.description;
        
        contentEl.appendChild(titleEl);
        contentEl.appendChild(descEl);
        
        const animEl = document.createElement('div');
        animEl.className = 'tech-anim';
        
        sectionEl.appendChild(iconWrapper);
        sectionEl.appendChild(contentEl);
        sectionEl.appendChild(animEl);
        sectionsContainer.appendChild(sectionEl);
        
        // Load animation with enhanced settings and error handling
        try {
            const anim = lottie.loadAnimation({
                container: animEl,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: section.animPath,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            });
            
            // Add fallback in case animation fails to load
            anim.addEventListener('data_failed', () => {
                console.warn(`Animation failed to load for ${section.title}`);
                // Add fallback content
                animEl.innerHTML = `
                    <div class="fallback-animation">
                        <i class="fas fa-${section.icon}" style="font-size: 40px; color: #4f46e5;"></i>
                    </div>
                `;
            });
        } catch (err) {
            console.error(`Error loading animation for ${section.title}:`, err);
            // Add fallback content
            animEl.innerHTML = `
                <div class="fallback-animation">
                    <i class="fas fa-${section.icon}" style="font-size: 40px; color: #4f46e5;"></i>
                </div>
            `;
        }
        
        // Add hover effect
        sectionEl.addEventListener('mouseenter', () => {
            sectionEl.classList.add('active');
        });
        
        sectionEl.addEventListener('mouseleave', () => {
            sectionEl.classList.remove('active');
        });
    });
    
    // Create connecting lines animation
    const connectingLines = document.createElement('div');
    connectingLines.className = 'connecting-lines';
    mainContainer.appendChild(connectingLines);
}

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
    
    // This section is now handled by the loadGenAIAnimation function
    
    // Logo animation - premium tech company logo focused on generative AI and software development
    const logoAnimation = lottie.loadAnimation({
        container: document.getElementById('logo-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets3.lottiefiles.com/packages/lf20_iorpbol0.json' // Premium AI/Software development logo
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

// Initialize insights modal
function initInsightsModal() {
    // Get all read more buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const insightsModal = document.querySelector('.insights-modal');
    
    // If modal doesn't exist, create it
    if (!insightsModal) {
        createInsightsModal();
    }
    
    // Add click event to all read more buttons
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get insight data from data attributes
            const title = this.getAttribute('data-title') || 'Case Study';
            const image = this.getAttribute('data-image') || '';
            const content = this.getAttribute('data-content') || 'No content available.';
            
            // Update modal content
            const modal = document.querySelector('.insights-modal');
            modal.querySelector('.insights-modal-header h2').textContent = title;
            
            const modalImage = modal.querySelector('.insights-modal-image img');
            const fallbackImage = modal.querySelector('.insights-modal-image .image-fallback');
            
            if (image && image.trim() !== '') {
                modalImage.src = image;
                modalImage.style.display = 'block';
                fallbackImage.style.display = 'none';
                
                // Handle image loading error
                modalImage.onerror = function() {
                    this.style.display = 'none';
                    fallbackImage.style.display = 'flex';
                };
            } else {
                modalImage.style.display = 'none';
                fallbackImage.style.display = 'flex';
            }
            
            modal.querySelector('.insights-modal-body').innerHTML = `<p>${content}</p>`;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close modal when clicking on close button or outside
    document.addEventListener('click', function(e) {
        const modal = document.querySelector('.insights-modal');
        if (!modal) return;
        
        const modalContent = modal.querySelector('.insights-modal-content');
        const closeButton = modal.querySelector('.insights-modal-close');
        
        if (e.target === modal || e.target === closeButton) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.insights-modal');
            if (modal && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        }
    });
}

// Create insights modal HTML structure
function createInsightsModal() {
    const modal = document.createElement('div');
    modal.className = 'insights-modal';
    
    modal.innerHTML = `
        <div class="insights-modal-content">
            <div class="insights-modal-header">
                <h2>Case Study Title</h2>
                <button class="insights-modal-close">&times;</button>
            </div>
            <div class="insights-modal-image">
                <img src="" alt="Case Study Image">
                <div class="image-fallback" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(110, 203, 245, 0.2), rgba(170, 128, 245, 0.3));">
                    <i class="fas fa-lightbulb" style="font-size: 3rem; color: #6ECBF5;"></i>
                </div>
            </div>
            <div class="insights-modal-body">
                <p>Case study content goes here.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}