// DATA PROJECT
const content = {
    dokumentasi: {
        bg: 'images/content/_MG_9567.jpg',
        label: 'PHOTOGRAPHY & EVENT',
        title: 'DOKUMENTASI',
        tagline: 'Abadikan moment indah menjadi bermakna',
        filters: ['All Items', 'Trekking', 'Paintball', 'Fun Games','Senam'],
        projects: [
            { 
                name: 'Trekking - PT. PHC Indonesia', tag: 'TREKKING', img: 'images/trekking/_DSC0322.jpg', 
                gallery: [
                    'images/trekking/_DSC0004.jpg', 'images/trekking/_DSC0014 (1).jpg',
                    'images/trekking/_DSC0020 (1).jpg', 'images/trekking/_DSC0011 (1).jpg', 
                    'images/trekking/_DSC0032 (1) (1).jpg', 'images/trekking/_DSC0044.jpg',
                    'images/trekking/_DSC0084.jpg', 'images/trekking/_DSC0128.jpg',
                    'images/trekking/_DSC0157.jpg'
                ]
            },
            { 
                name: 'Paintball - Polytron', tag: 'PAINTBALL', img: 'images/polytron/_DSC0289.JPG',
                gallery: [
                    'images/polytron/_DSC0084.jpg', 'images/polytron/_DSC0050.JPG',
                    'images/polytron/_DSC0289.JPG', 'images/polytron/_DSC0136.jpg', 
                    'images/polytron/_DSC0257.jpg', 'images/polytron/_DSC0128.jpg',
                    'images/polytron/_DSC0091.jpg', 'images/polytron/_DSC0088.jpg',
                    'images/polytron/_DSC0125.jpg', 'images/polytron/_DSC0278.jpg', 
                    'images/polytron/_DSC0285.JPG', 'images/polytron/_DSC0085.jpg' 
                ]
            },
            { 
                name: 'Paintball - Beverindo Sukses mandiri', tag: 'PAINTBALL', img: 'images/Beverindo sukses mandiri/_DSC0061.jpg',
                gallery: [
                    'images/Beverindo sukses mandiri/_DSC0003.jpg', 'images/Beverindo sukses mandiri/_DSC0043.jpg',
                    'images/Beverindo sukses mandiri/_DSC0106.JPG', 'images/Beverindo sukses mandiri/_DSC0028.jpg', 
                    'images/Beverindo sukses mandiri/_DSC0037.jpg', 'images/Beverindo sukses mandiri/_DSC0082.jpg',
                    'images/Beverindo sukses mandiri/_DSC0108.JPG', 'images/Beverindo sukses mandiri/_DSC0109.JPG',
                    'images/Beverindo sukses mandiri/_DSC0074.jpg'
                ]
            },
            { 
                name: 'Fun Games - Powerline', tag: 'Fun Games', img: 'images/content/_MG_9575.jpg',
                gallery: [
                    'images/content/_MG_9470.jpg', 'images/content/_MG_9575.jpg',
                    'images/content/_MG_9558.jpg', 'images/content/_MG_9567.jpg', 
                    'images/content/_MG_9528.jpg', 'images/content/_MG_9582.jpg',
                    'images/content/_MG_9661.jpg', 'images/content/IMG_9777.jpg',
                    'images/content/IMG_9838.jpg', 'images/content/IMG_9913.jpg', 
                    'images/content/IMG_9805.jpg' 
                ]
            },
            { 
                name: 'Reuni - APDN', tag: 'Fun Games', img: 'images/REUNI/_DSC3652 (1).jpg',
                gallery: [
                    'images/REUNI/_DSC3468.jpg', 'images/REUNI/_DSC3652 (1).jpg',
                    'images/REUNI/_DSC3627.jpg', 'images/REUNI/_DSC3678.jpg', 
                    'images/REUNI/_DSC3692.jpg', 'images/REUNI/_DSC3756.jpg',
                    'images/REUNI/_DSC3762.jpg', 'images/REUNI/_DSC3758.jpg',
                    'images/REUNI/_DSC3662.jpg', 'images/REUNI/_DSC3774.jpg', 
                    'images/REUNI/_DSC3760.jpg', 'images/REUNI/_DSC3663.jpg' 
                ]
            },
            { 
                name: 'Senam - BPBPK Jakarta', tag: 'Senam', img: 'images/SENAM/_DSC0040 (1).jpg', 
                gallery: [
                    'images/SENAM/_DSC0023.jpg', 'images/SENAM/_DSC0076.jpg',
                    'images/SENAM/_DSC0141 (1).jpg', 'images/SENAM/_DSC0053 (1).jpg', 
                    'images/SENAM/_DSC0094.jpg', 'images/SENAM/_DSC0027.jpg',
                    'images/SENAM/_DSC0031.jpg', 'images/SENAM/_DSC0032 (2).jpg',
                    'images/SENAM/_DSC0034.jpg'
                ]
            },
        ]
    },
    design: {
        bg: 'images/minuman/produk kemasan.png.jpg',
        label: 'VISUAL ART & BRANDING',
        title: 'DESIGN GRAFIS',
        tagline: 'Solusi visual kreatif untuk identitas brand Anda',
        filters: ['All Items', 'Spanduk', 'Social Media','LOGO','THUMBNAIL'],
        projects: [
            { name: 'Minuman Beat Boost', tag: 'LOGO', img: 'images/minuman/preview minuman.jpg', link: 'minuman.html' },
            { name: 'brand logo Eco FOld', tag: 'LOGO', img: 'images/ecofold/sign here.png', link: 'ecofold.html' },
            { name: 'Social media Post', tag: 'Social Media', img: 'images/design/sumpah pemuda.jpg', link: 'socmed.html' },
            { name: 'Banner - Shop', tag: 'SPANDUK', img: 'images/logo2.png', link: 'spanduk.html' },
            { name: 'THUMBNAIL - Hightlight', tag: 'THUMBNAIL', img: 'images/Thumbnail/Artboard 2.png', link: 'youtube.html' }
        ]
    }
};

let currentMode = 'dokumentasi';
let isShowingAll = false;
let currentProjectsList = []; 

function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function renderContent(mode) {
    const data = content[mode];
    isShowingAll = false;
    document.getElementById('search-input').value = "";
    currentProjectsList = shuffleArray(data.projects);

    const heroCard = document.getElementById('hero-card');
    const title = document.getElementById('main-title');
    heroCard.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${data.bg}')`;
    document.getElementById('cat-label').innerText = data.label;
    title.innerText = data.title;
    document.querySelector('.hero-tagline').innerText = data.tagline;

    const filterGroup = document.getElementById('filter-group');
    filterGroup.innerHTML = data.filters.map((f, i) => 
        `<button class="btn-filter ${i === 0 ? 'active' : ''}">${f}</button>`
    ).join('');

    renderGrid(currentProjectsList);
    setupFilterClick();
}

function renderGrid(projects) {
    const grid = document.getElementById('project-grid');
    const viewAllBtn = document.getElementById('view-all-btn');
    const displayItems = isShowingAll ? projects : projects.slice(0, 4);
    
    grid.innerHTML = displayItems.map(p => `
        <div class="project-card" onclick="openDetail('${p.name}', '${p.img}', '${p.tag}')">
            <img src="${p.img}" alt="${p.name}">
            <div style="position:absolute; bottom:0; left:0; width:100%; padding:20px; background:linear-gradient(transparent, rgba(0,0,0,0.8)); color:white;">
                <small style="background:#9df1f1; color:#3a8eb0; padding:4px 10px; border-radius:8px; font-size:10px; font-weight:800;">${p.tag}</small>
                <h3 style="margin-top:8px; font-weight:800; font-size:1.1rem;">${p.name}</h3>
            </div>
        </div>
    `).join('');

    viewAllBtn.style.display = projects.length <= 4 ? 'none' : 'block';
    viewAllBtn.innerText = isShowingAll ? `Hide All ${content[currentMode].title.toLowerCase()}` : `View All ${content[currentMode].title.toLowerCase()}`;
}

// --- LOGIKA OPEN DETAIL (PISAH LINK) ---
function openDetail(nama, gambar, tag) {
    const foundInDoku = content.dokumentasi.projects.find(p => p.name === nama);
    const foundInDesign = content.design.projects.find(p => p.name === nama);

    // CEK DESIGN DULU
    if (foundInDesign && foundInDesign.link) {
        window.location.href = foundInDesign.link;
    } 
    // BARU CEK DOKUMENTASI
    else if (foundInDoku) {
        localStorage.setItem('selectedGallery', JSON.stringify(foundInDoku.gallery || []));
        const url = `detail-project.html?name=${encodeURIComponent(nama)}&img=${encodeURIComponent(gambar)}&tag=${encodeURIComponent(tag)}`;
        window.location.href = url;
    }
}

function setupFilterClick() {
    const buttons = document.querySelectorAll('.btn-filter');
    buttons.forEach(btn => {
        btn.onclick = () => {
            document.getElementById('search-input').value = "";
            isShowingAll = false;
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGrid(getFilteredProjects());
        };
    });
}

function getFilteredProjects() {
    const activeFilterBtn = document.querySelector('.btn-filter.active');
    const activeFilter = activeFilterBtn ? activeFilterBtn.innerText : 'All Items';
    return activeFilter === 'All Items' ? currentProjectsList : currentProjectsList.filter(p => p.tag.toLowerCase() === activeFilter.toLowerCase());
}

function toggleCategory() {
    const heroWrapper = document.getElementById('hero-main-wrapper');
    heroWrapper.style.opacity = '0';
    setTimeout(() => {
        currentMode = (currentMode === 'dokumentasi') ? 'design' : 'dokumentasi';
        renderContent(currentMode);
        heroWrapper.style.opacity = '1';
    }, 400);
}

document.getElementById('view-all-btn').onclick = function() {
    isShowingAll = !isShowingAll;
    renderGrid(getFilteredProjects());
};

const menuBtn = document.getElementById('menuBtn');
const mobileOverlay = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('closeBtn');

if(menuBtn) menuBtn.onclick = () => { mobileOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; };
if(closeBtn) closeBtn.onclick = () => { mobileOverlay.classList.remove('active'); document.body.style.overflow = 'auto'; };

window.onload = () => renderContent('dokumentasi');