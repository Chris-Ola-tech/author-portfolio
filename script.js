 const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const header = document.getElementById('header');
        const navLinks = document.querySelectorAll('.nav-menu a');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });








        document.addEventListener('DOMContentLoaded', () => {
            const heroSection = document.querySelector('.hero-section');
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            observer.observe(heroSection);
        });







       document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target;
                        const header = section.querySelector('.section-header');
                        const imageWrapper = section.querySelector('.about-image-wrapper');
                        const textContent = section.querySelector('.about-text-content');

                        if (header) header.classList.add('visible');
                        if (imageWrapper) imageWrapper.classList.add('visible');
                        if (textContent) textContent.classList.add('visible');
                    }
                });
            }, observerOptions);

            const aboutSection = document.getElementById('aboutSection');
            if (aboutSection) {
                observer.observe(aboutSection);
            }
        });















        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe section header
           const sectionHeader = document.querySelector('.literary-showcase-header');
            if (sectionHeader) observer.observe(sectionHeader);

            // Observe featured book
            const featuredBook = document.querySelector('.featured-book');
            if (featuredBook) observer.observe(featuredBook);

            // Observe all book cards with staggered animation
            const bookCards = document.querySelectorAll('.book-card');
            bookCards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(card);
            });
        });


























         document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe header
            const header = document.querySelector('.testimonials-header');
            if (header) observer.observe(header);

            // Observe all testimonial cards with staggered delay
            const cards = document.querySelectorAll('.testimonial-card');
            cards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1 + 0.2}s`;
                observer.observe(card);
            });

            // Observe CTA
            const cta = document.querySelector('.testimonials-cta');
            if (cta) observer.observe(cta);
        });






         document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');

            // Intersection Observer for animations
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            const header = document.querySelector('.contact-header');
            const formWrapper = document.querySelector('.contact-form-wrapper');
            const footer = document.querySelector('.contact-footer');

            if (header) observer.observe(header);
            if (formWrapper) observer.observe(formWrapper);
            if (footer) observer.observe(footer);

            // Form submission handler
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const subject = document.getElementById('subject').value.trim();
                const message = document.getElementById('message').value.trim();

                // Validate email
                if (!validateEmail(email)) {
                    showMessage('Please enter a valid email address.', 'error');
                    return;
                }

                // Validate all fields
                if (!name || !email || !subject || !message) {
                    showMessage('Please fill in all fields.', 'error');
                    return;
                }

                // Create mailto link with form data
                const mailtoSubject = `Message from ${name}: ${subject}`;
                const mailtoBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                const mailtoLink = `mailto:christopherolawale31@gmail.com?subject=${encodeURIComponent(mailtoSubject)}&body=${mailtoBody}`;

                // Open mailto link
                window.location.href = mailtoLink;

                // Clear form after short delay
                setTimeout(() => {
                    form.reset();
                }, 500);
            });

            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }

            function showMessage(text, type) {
                formMessage.textContent = text;
                formMessage.className = `form-message ${type} show`;
                
                setTimeout(() => {
                    formMessage.classList.remove('show');
                }, 5000);
            }

            // Visual validation on blur
            const inputs = form.querySelectorAll('.form-input, .form-textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    if (input.value && input.type === 'email' && !validateEmail(input.value)) {
                        input.style.borderColor = '#ef4444';
                    } else if (input.value) {
                        input.style.borderColor = '#6C63FF';
                    }
                });

                input.addEventListener('input', () => {
                    if (input.style.borderColor === 'rgb(239, 68, 68)') {
                        input.style.borderColor = '#E0E0E0';
                    }
                });
            });
        });




        document.addEventListener('DOMContentLoaded', () => {
            const backToTopBtn = document.getElementById('backToTop');

            // Show/hide back to top button based on scroll position
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });

            // Smooth scroll to top when button is clicked
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Smooth scroll for footer navigation links
            const footerLinks = document.querySelectorAll('.footer-link[href^="#"]');
            footerLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });









         document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                
                question.addEventListener('click', function() {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other FAQ items for cleaner UX (optional - remove if you want multiple open)
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                        }
                    });
                    
                    // Toggle current item
                    if (isActive) {
                        item.classList.remove('active');
                        question.setAttribute('aria-expanded', 'false');
                    } else {
                        item.classList.add('active');
                        question.setAttribute('aria-expanded', 'true');
                    }
                });

                // Keyboard accessibility
                question.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        question.click();
                    }
                });
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href !== '#' && href.length > 1) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });

            // Optional: Auto-open first FAQ on load for better UX
            // Uncomment the following lines if you want the first question open by default
            /*
            const firstItem = faqItems[0];
            if (firstItem) {
                firstItem.classList.add('active');
                firstItem.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
            }
            */
        });

        // Intersection Observer for scroll animations (optional enhancement)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe FAQ CTA section
        const faqCta = document.querySelector('.faq-cta');
        if (faqCta) {
            faqCta.style.opacity = '0';
            faqCta.style.transform = 'translateY(30px)';
            faqCta.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(faqCta);
        }