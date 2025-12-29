
        themeToggle.style.background = '#4a6cf7';
    
   
    themeToggle.addEventListener('click', () => {
        // Простая анимация
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
       
        console.log('🎨 Кнопка темы нажата'); 
    });
 {
    console.log('ℹ️ Кнопка темы не найдена, но это нормально');
}

// =================== МУЗЫКАЛЬНАЯ ПАНЕЛЬ ===================
const musicBtn = getElement('musicBtn');
const musicPanel = getElement('musicPanel');
const closeMusic = getElement('closeMusic');
const audioPlayer = getElement('myAudio');

if (musicBtn && musicPanel) {
    musicBtn.addEventListener('click', () => {
        musicPanel.classList.toggle('active');
        console.log('🎵 Музыкальная панель переключена');
    });
}

if (closeMusic && musicPanel) {
    closeMusic.addEventListener('click', () => {
        musicPanel.classList.remove('active');
    });
}

// Работа с треками (если они есть)
const tracks = document.querySelectorAll('.track');
if (tracks.length > 0) {
    console.log(`🎵 Найдено ${tracks.length} треков`);
   
    tracks.forEach(track => {
        track.addEventListener('click', function() {
            // Простая анимация при клике
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
           
            console.log('▶️ Трек нажат:', this.textContent);
        });
    });
}

// =================== ПЛАВНАЯ ПРОКРУТКА ===================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
       
        e.preventDefault();
        const targetElement = document.querySelector(href);
       
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            console.log(`📍 Прокрутка к ${href}`);
        }
    });
});

// =================== АНИМАЦИИ ПРИ НАВЕДЕНИИ ===================
// Кнопки контактов
const contactButtons = document.querySelectorAll('.contact-links a');
if (contactButtons.length > 0) {
    contactButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px)';
        });
       
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
}

// Карточки навыков
const skillCards = document.querySelectorAll('.skill-card');
if (skillCards.length > 0) {
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
       
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// =================== ПАРАЛЛАКС ЭФФЕКТ ===================
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});

// =================== ЗАГРУЗКА ЗАВЕРШЕНА ===================
window.addEventListener('load', () => {
    console.log('✅ Сайт полностью загружен!');
    console.log('🎨 Тёмная тема включена');
    console.log('🎵 Музыкальная панель готова');
    console.log('🚀 Все системы работают!');
});

// =================== СООБЩЕНИЕ В КОНСОЛЬ ===================
console.log(`
███████╗██╗███╗   ██╗███████╗███████╗
██╔════╝██║████╗  ██║██╔════╝██╔════╝
███████╗██║██╔██╗ ██║█████╗  ███████╗
╚════██║██║██║╚██╗██║██╔══╝  ╚════██║
███████║██║██║ ╚████║███████╗███████║
╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝
Первый сайт!
`);
