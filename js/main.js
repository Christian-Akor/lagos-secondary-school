/* ========================================
   Excellence Secondary School - Main JavaScript
   ======================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features
    initSmoothScroll();
    initScrollSpy();
    initBackToTop();
    initCounterAnimation();
    initFormValidation();
    initGalleryLightbox();
    initMobileMenu();
    
});

/* ========================================
   Smooth Scroll Navigation
   ======================================== */
function initSmoothScroll() {
    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore empty or just # links
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Calculate offset for fixed header
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

/* ========================================
   Scroll Spy for Active Navigation
   ======================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function setActiveLink() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Run on scroll
    window.addEventListener('scroll', setActiveLink);
    
    // Run on load
    setActiveLink();
}

/* ========================================
   Back to Top Button
   ======================================== */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ========================================
   Counter Animation
   ======================================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Animation speed
    let hasAnimated = false;
    
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / speed;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    }
    
    function checkCounters() {
        if (hasAnimated) return;
        
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;
        
        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            hasAnimated = true;
            counters.forEach(counter => animateCounter(counter));
            // Remove scroll listener after animation
            window.removeEventListener('scroll', checkCounters);
        }
    }
    
    // Check on scroll
    window.addEventListener('scroll', checkCounters);
    
    // Check on load
    checkCounters();
}

/* ========================================
   Contact Form Validation
   ======================================== */
function initFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Remove previous validation states
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.classList.remove('is-invalid');
            input.classList.remove('is-valid');
        });
        
        let isValid = true;
        
        // Validate name
        const name = document.getElementById('name');
        if (name.value.trim() === '' || name.value.trim().length < 3) {
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.add('is-valid');
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.add('is-valid');
        }
        
        // Validate phone
        const phone = document.getElementById('phone');
        const phoneRegex = /^[0-9+\-\s()]{10,}$/;
        if (!phoneRegex.test(phone.value.trim())) {
            phone.classList.add('is-invalid');
            isValid = false;
        } else {
            phone.classList.add('is-valid');
        }
        
        // Validate subject
        const subject = document.getElementById('subject');
        if (subject.value.trim() === '' || subject.value.trim().length < 5) {
            subject.classList.add('is-invalid');
            isValid = false;
        } else {
            subject.classList.add('is-valid');
        }
        
        // Validate message
        const message = document.getElementById('message');
        if (message.value.trim() === '' || message.value.trim().length < 10) {
            message.classList.add('is-invalid');
            isValid = false;
        } else {
            message.classList.add('is-valid');
        }
        
        // If valid, show success message
        if (isValid) {
            showSuccessMessage();
            form.reset();
            
            // Remove validation classes after reset
            setTimeout(() => {
                inputs.forEach(input => {
                    input.classList.remove('is-valid');
                });
            }, 100);
        } else {
            // Scroll to first invalid field
            const firstInvalid = form.querySelector('.is-invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalid.focus();
            }
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldId = field.id;
    
    field.classList.remove('is-invalid');
    field.classList.remove('is-valid');
    
    switch(fieldId) {
        case 'name':
            if (value === '' || value.length < 3) {
                field.classList.add('is-invalid');
            } else {
                field.classList.add('is-valid');
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('is-invalid');
            } else {
                field.classList.add('is-valid');
            }
            break;
            
        case 'phone':
            const phoneRegex = /^[0-9+\-\s()]{10,}$/;
            if (!phoneRegex.test(value)) {
                field.classList.add('is-invalid');
            } else {
                field.classList.add('is-valid');
            }
            break;
            
        case 'subject':
            if (value === '' || value.length < 5) {
                field.classList.add('is-invalid');
            } else {
                field.classList.add('is-valid');
            }
            break;
            
        case 'message':
            if (value === '' || value.length < 10) {
                field.classList.add('is-invalid');
            } else {
                field.classList.add('is-valid');
            }
            break;
    }
}

function showSuccessMessage() {
    // Create success alert
    const alert = document.createElement('div');
    alert.className = 'alert alert-success alert-dismissible fade show';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <strong>Success!</strong> Your message has been sent successfully. We'll get back to you soon.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Insert alert before form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(alert, form);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

/* ========================================
   Gallery Lightbox Functionality
   ======================================== */
function initGalleryLightbox() {
    const modal = document.getElementById('galleryModal');
    if (!modal) return;
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeBtn = document.querySelector('.gallery-close');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    
    let currentIndex = 0;
    
    // Open modal when gallery item is clicked
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            openModal();
        });
    });
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Previous image
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showPreviousImage();
        });
    }
    
    // Next image
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showNextImage();
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') showPreviousImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
    
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        updateModalContent();
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateModalContent();
    }
    
    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateModalContent();
    }
    
    function updateModalContent() {
        // In a real implementation, this would load actual images
        // For now, we're showing the placeholder
        const currentItem = galleryItems[currentIndex];
        const placeholder = currentItem.querySelector('.gallery-placeholder').cloneNode(true);
        const modalContent = modal.querySelector('.gallery-modal-content');
        modalContent.innerHTML = '';
        modalContent.appendChild(placeholder);
    }
}

/* ========================================
   Mobile Menu Handling
   ======================================== */
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (!navbarToggler || !navbarCollapse) return;
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInside = navbarCollapse.contains(e.target) || navbarToggler.contains(e.target);
        
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
}

/* ========================================
   Header Shadow on Scroll
   ======================================== */
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

/* ========================================
   Prevent Form Submission on Enter (except textarea)
   ======================================== */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        const form = e.target.closest('form');
        if (form && e.target.type !== 'submit') {
            e.preventDefault();
        }
    }
});

/* ========================================
   Add Loading State to Buttons
   ======================================== */
document.querySelectorAll('button[type="submit"]').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.disabled = true;
        this.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
        
        // Re-enable after form validation
        setTimeout(() => {
            this.disabled = false;
            this.innerHTML = originalText;
        }, 2000);
    });
});

/* ========================================
   Lazy Loading for Images (when added)
   ======================================== */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ========================================
   Animate Elements on Scroll
   ======================================== */
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize animation on scroll
animateOnScroll();

/* ========================================
   Console Welcome Message
   ======================================== */
console.log('%cExcellence Secondary School', 'color: #008751; font-size: 24px; font-weight: bold;');
console.log('%cEducation for Excellence, Character for Life', 'color: #FFD700; font-size: 16px; font-style: italic;');
console.log('%cWebsite developed with ❤️ for quality education', 'color: #666; font-size: 12px;');

/* ========================================
   Performance Monitoring (Optional)
   ======================================== */
if (typeof PerformanceObserver !== 'undefined') {
    // Monitor page load performance
    window.addEventListener('load', function() {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            console.log('Page Load Time:', (perfData.loadEventEnd - perfData.fetchStart) + 'ms');
        }
    });
}

/* ========================================
   Utility Functions
   ======================================== */

// Debounce function for performance optimization
function debounce(func, wait) {
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Use throttled scroll event for better performance
const throttledScroll = throttle(function() {
    // Additional scroll handling can be added here
}, 100);

window.addEventListener('scroll', throttledScroll);

/* ========================================
   Accessibility Enhancements
   ======================================== */

// Skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'sr-only sr-only-focusable';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 10000;
`;
skipLink.addEventListener('focus', function() {
    this.style.top = '0';
});
skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Add ARIA labels dynamically where needed
document.querySelectorAll('a[href^="#"]').forEach(link => {
    if (!link.getAttribute('aria-label') && link.textContent.trim()) {
        link.setAttribute('aria-label', link.textContent.trim());
    }
});

/* ========================================
   Error Handling
   ======================================== */
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // In production, you might want to send errors to a logging service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Handle promise rejections
});

/* ========================================
   Service Worker Registration (Optional - for PWA)
   ======================================== */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateField,
        debounce,
        throttle
    };
}
