document.addEventListener('DOMContentLoaded', () => {
    // =======================
    // Navbar Scroll Effect
    // =======================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // =======================
    // Carousel Functionality
    // =======================
    const carousel = {
        slides: document.querySelectorAll('.carousel-slide'),
        dotsContainer: document.querySelector('.carousel-dots'),
        prevButton: document.querySelector('.carousel-control.prev'),
        nextButton: document.querySelector('.carousel-control.next'),
        currentSlide: 0,
        autoPlayInterval: null,

        init() {
            if (!this.slides.length || !this.dotsContainer) return;

            // Create navigation dots dynamically
            this.slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('carousel-dot');
                dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
                dot.addEventListener('click', () => this.goToSlide(index));
                this.dotsContainer.appendChild(dot);
            });

            this.dots = this.dotsContainer.querySelectorAll('.carousel-dot');
            this.updateActiveSlide();

            // Add event listeners for controls
            if (this.prevButton) this.prevButton.addEventListener('click', () => this.prevSlide());
            if (this.nextButton) this.nextButton.addEventListener('click', () => this.nextSlide());

            // Auto-play functionality
            this.startAutoPlay();

            // Pause auto-play on hover
            const carouselElement = document.querySelector('.carousel');
            if (carouselElement) {
                carouselElement.addEventListener('mouseenter', () => this.stopAutoPlay());
                carouselElement.addEventListener('mouseleave', () => this.startAutoPlay());
            }
        },

        goToSlide(index) {
            if (!this.slides.length) return;

            this.slides[this.currentSlide].classList.remove('active');
            this.dots[this.currentSlide].classList.remove('active');

            this.currentSlide = index;

            this.updateActiveSlide();
        },

        updateActiveSlide() {
            this.slides[this.currentSlide].classList.add('active');
            this.dots[this.currentSlide].classList.add('active');
        },

        nextSlide() {
            this.goToSlide((this.currentSlide + 1) % this.slides.length);
        },

        prevSlide() {
            this.goToSlide((this.currentSlide - 1 + this.slides.length) % this.slides.length);
        },

        startAutoPlay() {
            if (this.autoPlayInterval) return;
            this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
        },

        stopAutoPlay() {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    };

    carousel.init();

    // =======================
    // "Read More" Buttons Navigation
    // =======================
    document.querySelectorAll(".card button").forEach((button, index) => {
        button.addEventListener("click", () => {
            const links = [
                "sample-questions.html",
                "career-exploration.html",
                "fact-sheet.html"
            ];
            if (links[index]) {
                window.location.href = links[index];
            }
        });
    });

    // =======================
    // Mobile Menu Toggle
    // =======================
    const navLinks = document.querySelector('.nav-links');
    const searchBtn = document.querySelector('.search-btn');
    const navbarElement = document.querySelector('.navbar');

    if (navLinks && navbarElement) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        if (searchBtn) {
            navbarElement.insertBefore(mobileMenuBtn, searchBtn);
        } else {
            navbarElement.appendChild(mobileMenuBtn);
        }

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });

        window.addEventListener('resize', () => {
            navLinks.style.display = window.innerWidth > 768 ? 'flex' : 'none';
        });
    }
});
