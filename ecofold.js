document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const overlay = document.getElementById('overlayBg');
    const openMenu = document.getElementById('openMenu');
    const navOverlay = document.getElementById('navOverlay');
    const closeNav = document.querySelector('.close-nav');

    // Logic Klik Box jadi Pop-up
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            // Pastikan tidak ada box lain yang aktif
            boxes.forEach(b => b.classList.remove('active'));
            
            box.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Kunci scroll body
        });
    });

    // Fungsi Tutup Semua (Overlay & Nav)
    const closeAll = () => {
        boxes.forEach(box => box.classList.remove('active'));
        overlay.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Aktifkan scroll lagi
    };

    // Event Listener Tutup
    overlay.onclick = closeAll;
    if(closeNav) {
        closeNav.onclick = closeAll;
    }

    // Nav Menu Open
    if(openMenu) {
        openMenu.onclick = () => {
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };
    }
});