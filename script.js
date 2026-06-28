// script.js - Signature Electric Co. Website

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
        });

        // Close menu on link click (mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 760) {
                    navLinks.classList.remove('open');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Keyboard accessibility for mobile toggle
        mobileToggle.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                mobileToggle.click();
            }
        });
    }

    // Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.10)';
            } else {
                navbar.style.boxShadow = '';
            }
        });
    }

    // Smooth scroll for anchor links (with sticky-nav offset)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length <= 1) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // Products / Gallery filter tabs
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            galleryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('is-hidden');
                } else {
                    item.classList.add('is-hidden');
                }
            });
        });
    });

    // Contact form validation and submission (static front-end demo)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('cf-name');
            const phone = document.getElementById('cf-phone');
            const email = document.getElementById('cf-email');
            const message = document.getElementById('cf-message');
            let valid = true;

            [name, phone, email, message].forEach(field => {
                field.style.borderColor = '';
            });

            if (!name.value.trim()) {
                name.style.borderColor = '#d7444c';
                valid = false;
            }
            if (!/^[0-9+\-\s()]{7,15}$/.test(phone.value.trim())) {
                phone.style.borderColor = '#d7444c';
                valid = false;
            }
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
                email.style.borderColor = '#d7444c';
                valid = false;
            }
            if (!message.value.trim()) {
                message.style.borderColor = '#d7444c';
                valid = false;
            }

            if (!valid) {
                if (formStatus) {
                    formStatus.textContent = 'Please check the highlighted fields and try again.';
                }
                return;
            }

            // NOTE: This is a static site. There is no backend to send this data yet.
            // Wire this up to a form service (e.g. Hostinger forms, Formspree) or your
            // own server-side endpoint before relying on it to capture real leads.
            if (formStatus) {
                formStatus.textContent = 'Thanks! We\u2019ve noted your message \u2014 our team will call you back shortly.';
            }
            contactForm.reset();
        });
    }
});
