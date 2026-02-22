// --- 1. INTERACTIVE BACKGROUND (KUNANG-KUNANG) ---
const canvas = document.getElementById('bg-animation');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = 'rgba(106, 193, 9, 0.4)'; 
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; 
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

// --- 2. NAVBAR LOGIC ---
const menuBtn = document.getElementById('menuBtn');
const mobileOverlay = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('closeBtn');

if(menuBtn) {
    menuBtn.onclick = () => {
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
}

const closeMenu = () => {
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
};

if(closeBtn) closeBtn.onclick = closeMenu;

// --- 3. MODAL LOGIC (FIXED BENTROK) ---
const detailOverlay = document.getElementById('detail-overlay');

function openDetail(card) {
    // Tutup modal lain yang mungkin terbuka
    document.querySelectorAll('.sub-card').forEach(c => c.classList.remove('expanded'));
    
    // Aktifkan mode expanded dan blur background
    card.classList.add('expanded');
    if (detailOverlay) detailOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Kunci scroll
}

function closeDetail() {
    document.querySelectorAll('.sub-card').forEach(c => c.classList.remove('expanded'));
    if (detailOverlay) detailOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Aktifkan scroll
}

if (detailOverlay) detailOverlay.onclick = closeDetail;

// --- 4. SCROLL REVEAL LOGIC ---
const reveals = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            el.classList.add('active');
        }
    });
};

// --- INITIALIZE ---
window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', () => {
    initParticles();
    animateParticles();
    scrollReveal();
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});