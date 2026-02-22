// A. RESET SCROLL KE ATAS SAAT REFRESH
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onhashchange = function () {
        window.scrollTo(0, 0);
    }
}

// B. ANIMASI TRANSISI KLIK LIHAT PROFIL
const btnProfile = document.getElementById('btn-profile');
const overlay = document.getElementById('transition-overlay');

if(btnProfile) {
    btnProfile.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href'); // Mengambil '#about'
        
        overlay.classList.add('show');
        
        setTimeout(() => {
            const targetSection = document.querySelector(targetId);
            if(targetSection) {
                targetSection.scrollIntoView({ behavior: 'auto' });
            }
            
            setTimeout(() => {
                overlay.classList.remove('show');
            }, 400);
        }, 600);
    });
}

// C. NAVBAR MOBILE LOGIC
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const mobileLinks = document.querySelectorAll('.mobile-links a');

if(menuToggle) menuToggle.onclick = () => mobileMenu.classList.add('active');
if(closeBtn) closeBtn.onclick = () => mobileMenu.classList.remove('active');

mobileLinks.forEach(link => {
    link.onclick = () => mobileMenu.classList.remove('active');
});

// D. SKILL POPUP LOGIC
const skillTrigger = document.getElementById('skillTrigger');
const skillPopups = document.getElementById('skillPopups');
const skillItems = document.querySelectorAll('.skill-item');

if(skillTrigger) {
    skillTrigger.onclick = (e) => {
        e.stopPropagation();
        skillPopups.classList.toggle('active');
    };
}

skillItems.forEach(item => {
    item.onclick = (e) => {
        e.stopPropagation();
        item.classList.toggle('show-val');
        skillItems.forEach(other => {
            if(other !== item) other.classList.remove('show-val');
        });
    };
});

document.onclick = () => {
    if(skillPopups) {
        skillPopups.classList.remove('active');
        skillItems.forEach(item => item.classList.remove('show-val'));
    }
};

// E. SCROLL REVEAL OBSERVER
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// F. SERTIFIKAT SLIDESHOW
function startSlideshow() {
    const slides = document.querySelectorAll('.slideshow .slide');
    let currentSlide = 0;
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
}
startSlideshow();