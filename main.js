document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation via Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(15, 23, 42, 0.95)';
            navLinks.style.padding = '1rem 2rem';
        });
    }

    // Instagram mock feed populator
    const instaGrid = document.querySelector('.insta-grid');
    if (instaGrid) {
        // Generating placeholder divs for Instagram posts
        for (let i = 0; i < 6; i++) {
            const post = document.createElement('a');
            post.href = '#';
            post.className = 'insta-post';
            post.innerHTML = `
                <div class="insta-img-placeholder"></div>
                <div class="insta-overlay">
                    <span>❤️ ${Math.floor(Math.random() * 500) + 100}</span>
                </div>
            `;
            // Add a subtle random delay for animation
            post.style.animationDelay = `${i * 0.1}s`;
            instaGrid.appendChild(post);
        }
    }
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 3000; // 3 seconds

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }
});
