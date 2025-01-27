// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
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
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });
});

// Question card hover effects
const cards = document.querySelectorAll('.question-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add glow effect
        card.style.boxShadow = '0 0 20px rgba(139, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        // Remove glow effect
        card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});

// View Sample Questions button click handler
document.querySelectorAll('.view-samples').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.question-card');
        const subject = card.querySelector('h3').textContent;
        
        // Add button click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
        
        // Placeholder for sample questions functionality
        console.log(`Loading sample questions for ${subject}`);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search button functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    // Placeholder for search functionality
    console.log('Search button clicked');
}); 
