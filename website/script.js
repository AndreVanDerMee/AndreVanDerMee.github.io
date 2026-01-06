// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Horizontal scroll for projects with mouse drag
const projectsContainer = document.querySelector('.projects-scroll-container');
if (projectsContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let hasMoved = false;

    projectsContainer.addEventListener('mousedown', (e) => {
        // Don't start drag if clicking on a link or button
        if (e.target.closest('a') || e.target.closest('button')) return;
        
        isDown = true;
        hasMoved = false;
        projectsContainer.style.cursor = 'grabbing';
        startX = e.pageX - projectsContainer.offsetLeft;
        scrollLeft = projectsContainer.scrollLeft;
    });

    projectsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        projectsContainer.style.cursor = 'grab';
    });

    projectsContainer.addEventListener('mouseup', () => {
        isDown = false;
        projectsContainer.style.cursor = 'grab';
    });

    projectsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        hasMoved = true;
        const x = e.pageX - projectsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        projectsContainer.scrollLeft = scrollLeft - walk;
    });
    
    // Prevent click on links if dragged
    projectsContainer.addEventListener('click', (e) => {
        if (hasMoved && e.target.closest('a')) {
            e.preventDefault();
        }
    }, true);
}

// Horizontal scroll for team with mouse drag
const teamContainer = document.querySelector('.team-grid');
if (teamContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let hasMoved = false;

    teamContainer.addEventListener('mousedown', (e) => {
        // Don't start drag if clicking on a link or button
        if (e.target.closest('a') || e.target.closest('button')) return;
        
        isDown = true;
        hasMoved = false;
        teamContainer.style.cursor = 'grabbing';
        startX = e.pageX - teamContainer.offsetLeft;
        scrollLeft = teamContainer.scrollLeft;
    });

    teamContainer.addEventListener('mouseleave', () => {
        isDown = false;
        teamContainer.style.cursor = 'grab';
    });

    teamContainer.addEventListener('mouseup', () => {
        isDown = false;
        teamContainer.style.cursor = 'grab';
    });

    teamContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        hasMoved = true;
        const x = e.pageX - teamContainer.offsetLeft;
        const walk = (x - startX) * 2;
        teamContainer.scrollLeft = scrollLeft - walk;
    });
    
    // Prevent click on links if dragged
    teamContainer.addEventListener('click', (e) => {
        if (hasMoved && e.target.closest('a')) {
            e.preventDefault();
        }
    }, true);
}

// Arrow navigation for scrollable sections
document.querySelectorAll('.scroll-arrow').forEach(arrow => {
    arrow.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const isLeft = this.classList.contains('scroll-arrow-left');
        
        let container;
        if (target === 'projects') {
            container = document.querySelector('.projects-scroll-container');
        } else if (target === 'team') {
            container = document.querySelector('.team-grid');
        }
        
        if (container) {
            const scrollAmount = 420; // Card width + gap
            const direction = isLeft ? -1 : 1;
            container.scrollBy({
                left: scrollAmount * direction,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const company = contactForm.querySelectorAll('input[type="text"]')[1].value;
    const message = contactForm.querySelector('textarea').value;
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
    }
    
    floatingCards.forEach((card, index) => {
        const speed = 0.2 + (index * 0.1);
        card.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Add hover effect to stats
document.querySelectorAll('.stat').forEach(stat => {
    stat.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    stat.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Animated counter for stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format the number
        const suffix = element.textContent.includes('%') ? '%' : '+';
        const value = suffix === '%' ? Math.floor(current) : Math.floor(current);
        element.textContent = value + suffix;
    }, 16);
}

// Observe stats for animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const h3 = entry.target.querySelector('h3');
            const text = h3.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            
            h3.textContent = '0' + (text.includes('%') ? '%' : '+');
            animateCounter(h3, number);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Add typing effect to hero title (optional enhancement)
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.animation = 'fadeInUp 1s ease-out';
    }
});

// Section scroll animations
const sectionObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, sectionObserverOptions);

// Observe all sections except hero
document.querySelectorAll('section:not(.hero)').forEach(section => {
    sectionObserver.observe(section);
});

console.log('LAIXR website loaded successfully!');
