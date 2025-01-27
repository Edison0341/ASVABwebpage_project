// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const carousel = {
        slides: document.querySelectorAll('.carousel-slide'),
        currentSlide: 0,
        autoPlayInterval: null,
        
        init() {
            // Create dots
            const dotsContainer = document.querySelector('.carousel-dots');
            this.slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('carousel-dot');
                dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
                dot.addEventListener('click', () => this.goToSlide(index));
                dotsContainer.appendChild(dot);
            });
            this.dots = dotsContainer.querySelectorAll('.carousel-dot');
            this.dots[0].classList.add('active');
            
            // Add event listeners for controls
            document.querySelector('.carousel-control.prev')
                .addEventListener('click', () => this.prevSlide());
            document.querySelector('.carousel-control.next')
                .addEventListener('click', () => this.nextSlide());
            
            // Start autoplay
            this.startAutoPlay();
            
            // Pause autoplay on hover
            document.querySelector('.carousel').addEventListener('mouseenter', () => this.stopAutoPlay());
            document.querySelector('.carousel').addEventListener('mouseleave', () => this.startAutoPlay());
        },
        
        goToSlide(index) {
            // Remove active classes
            this.slides[this.currentSlide].classList.remove('active');
            this.dots[this.currentSlide].classList.remove('active');
            
            // Update current slide
            this.currentSlide = index;
            
            // Add active classes
            this.slides[this.currentSlide].classList.add('active');
            this.dots[this.currentSlide].classList.add('active');
        },
        
        nextSlide() {
            const next = (this.currentSlide + 1) % this.slides.length;
            this.goToSlide(next);
        },
        
        prevSlide() {
            const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.goToSlide(prev);
        },
        
        startAutoPlay() {
            if (this.autoPlayInterval) return;
            this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
        },
        
        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }
    };
    
    // Initialize carousel
    carousel.init();
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const searchBtn = document.querySelector('.search-btn');
    
    // Add mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.navbar').insertBefore(mobileMenuBtn, searchBtn);
    
    // Mobile menu toggle functionality
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
}); 
