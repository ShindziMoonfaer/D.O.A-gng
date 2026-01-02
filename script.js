

console.log('✅ Script.js загружен!');

// =================== ПРОСТАЯ КАПЧА ===================
let captchaPassed = false;
let correctAnswer = 0;

// Генерируем случайный пример
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operation = ['+', '-'][Math.floor(Math.random() * 2)];
    
    let answer;
    if (operation === '+') {
        answer = num1 + num2;
    } else {
        answer = num1 - num2;
    }
    
    const questionElement = document.getElementById('captchaQuestion');
    if (questionElement) {
        questionElement.textContent = `${num1} ${operation} ${num2} = ?`;
    }
    
    console.log(`📝 Новый пример: ${num1} ${operation} ${num2} = ${answer}`);
    return answer;
}

// При загрузке страницы показываем капчу
window.addEventListener('load', () => {
    console.log('🔐 Инициализация капчи...');
    
    const captchaModal = document.getElementById('captchaModal');
    const submitBtn = document.getElementById('submitCaptcha');
    const inputField = document.getElementById('captchaAnswer');
    const audioPlayer = document.getElementById('myAudio');

    if (!captchaModal || !submitBtn || !inputField) {
        console.error('❌ Элементы капчи не найдены!');
        return;
    }

    // Скрываем основной контент до капчи
    document.querySelector('main').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.compact-music').style.display = 'none';

    // Генерируем первый пример
    correctAnswer = generateCaptcha();
    console.log(`✅ Правильный ответ: ${correctAnswer}`);

    // Обработка отправки формы
    submitBtn.addEventListener('click', () => {
        const userAnswer = parseInt(inputField.value);
        console.log(`Ввод пользователя: ${userAnswer}, Правильный ответ: ${correctAnswer}`);
        
        if (isNaN(userAnswer)) {
            console.log('⚠️ Нужно ввести число!');
            inputField.style.borderColor = '#ff6b6b';
            setTimeout(() => {
                inputField.style.borderColor = '#9d4edd';
            }, 500);
            return;
        }
        
        if (userAnswer === correctAnswer) {
            captchaPassed = true;
            console.log('✅ Капча пройдена!');
            
            // Скрываем капчу
            captchaModal.style.display = 'none';
            
            // Показываем контент
            document.querySelector('main').style.display = 'block';
            document.querySelector('footer').style.display = 'block';
            document.querySelector('.compact-music').style.display = 'block';
            
            // Включаем музыку
            if (audioPlayer) {
                audioPlayer.play().catch(error => {
                    console.log('ℹ️ Музыку можно включить вручную (браузер блокирует)');
                });
            }
            console.log('🎵 Музыка включена!');
        } else {
            console.log(`❌ Неправильный ответ! Ожидалось ${correctAnswer}, получено ${userAnswer}`);
            
            // Неправильный ответ - генерируем новый пример
            inputField.value = '';
            inputField.style.borderColor = '#ff6b6b';
            correctAnswer = generateCaptcha();
            
            setTimeout(() => {
                inputField.style.borderColor = '#9d4edd';
            }, 500);
        }
    });

    // Отправка при Enter
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });

    inputField.focus();
    console.log('🔐 Капча готова!');
});


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
const audioPlayer = document.getElementById('myAudio');

if (audioPlayer) {
    console.log('🎵 Аудиоплеер готов!');
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

// Проверка доступности видео, обработка ошибок и автоповтор проверки
(function() {
    const videoEl = document.querySelector('.video-loop video');
    const videoWrapper = document.querySelector('.video-loop');
    if (!videoEl) {
        console.log('ℹ️ Видео элемент не найден на странице.');
        return;
    }

    videoEl.addEventListener('error', (e) => {
        console.error('❌ Ошибка загрузки видео:', e);
        if (videoWrapper) videoWrapper.style.display = 'none';
    });

    // Функция проверки наличия файла
    function checkVideoOnce() {
        return fetch('kenzo.mp4', { method: 'HEAD' }).then(res => {
            if (!res.ok) {
                console.warn('⚠️ Видео kenzo.mp4 не найдено на сервере. HTTP', res.status);
                if (videoWrapper) videoWrapper.style.display = 'none';
                return false;
            }
            console.log('✅ Видео найдено на сервере. Показываю блок видео.');
            if (videoWrapper) videoWrapper.style.display = 'block';
            // Перезагрузим источник видео
            try { videoEl.load(); } catch (e) {}
            return true;
        }).catch(err => {
            console.warn('⚠️ Ошибка при проверке видео (fetch):', err);
            return false;
        });
    }

    // Сначала проверяем один раз
    checkVideoOnce().then(found => {
        if (!found) {
            // Повторяем проверку несколько раз с интервалом
            let attempts = 0;
            const maxAttempts = 6; // ~1 минута (6 * 10s)
            const interval = setInterval(() => {
                attempts++;
                console.log(`🔁 Проверка наличия видео (попытка ${attempts}/${maxAttempts})`);
                checkVideoOnce().then(ok => {
                    if (ok || attempts >= maxAttempts) {
                        clearInterval(interval);
                        if (!ok) console.warn('⚠️ Видео так и не появилось после повторных проверок.');
                    }
                });
            }, 10000);
        }
    });
})();

// Автоплей: попытки воспроизведения и восстановление при окончании
(function() {
    const bg = document.getElementById('bgVideo');
    if (!bg) return;

    function tryPlay() {
        bg.play().then(() => {
            console.log('▶️ Фоновое видео играет');
        }).catch(err => {
            console.warn('⚠️ Автовоспроизведение заблокировано:', err);
        });
    }

    // Если браузер блокирует autoplay со звуком, видео у нас muted, так что должно работать
    tryPlay();

    // Гарантируем непрерывный цикл на случае, если loop не срабатывает
    bg.addEventListener('ended', () => {
        bg.currentTime = 0;
        tryPlay();
    });

    // При первом взаимодействии пользователя — повторная попытка воспроизведения
    document.addEventListener('click', function once() {
        tryPlay();
        document.removeEventListener('click', once);
    });
})();

// =================== МОДАЛЬНЫЕ ОКНА ===================
// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('👀 Инициализация модальных окон...');

    // Получаем все карточки фактов с кнопками
    const factCards = document.querySelectorAll('.fact-card[data-modal]');
    
    if (factCards.length > 0) {
        console.log(`✅ Найдено ${factCards.length} карточек фактов`);
        
        // Добавляем обработчики кликов на кнопки "Подробнее"
        factCards.forEach(card => {
            const btn = card.querySelector('.more-info-btn');
            if (btn) {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation(); // Предотвращаем всплытие
                    const modalId = card.getAttribute('data-modal');
                    const modal = document.getElementById(modalId);
                    
                    if (modal) {
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
                        console.log(`💬 Открыто модальное окно: ${modalId}`);
                    }
                });
            }
        });
    } else {
        console.warn('⚠️ Карточки фактов не найдены');
    }

    // Получаем все модальные окна
    const modals = document.querySelectorAll('.detail-modal');
    
    if (modals.length > 0) {
        console.log(`✅ Найдено ${modals.length} модальных окон`);
        
        // Добавляем обработчики закрытия
        modals.forEach(modal => {
            // Кнопка закрытия (X)
            const closeBtn = modal.querySelector('.close-modal');
            if (closeBtn) {
                closeBtn.addEventListener('click', function() {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Возвращаем прокрутку
                    
                    // Останавливаем все аудио в модальном окне
                    const audios = modal.querySelectorAll('audio');
                    audios.forEach(audio => {
                        audio.pause();
                        audio.currentTime = 0;
                    });
                    
                    console.log('❌ Модальное окно закрыто');
                });
            }
            
            // Закрытие при клике вне модального окна
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    
                    // Останавливаем аудио
                    const audios = modal.querySelectorAll('audio');
                    audios.forEach(audio => {
                        audio.pause();
                        audio.currentTime = 0;
                    });
                    
                    console.log('❌ Модальное окно закрыто (клик вне окна)');
                }
            });
        });
    } else {
        console.warn('⚠️ Модальные окна не найдены');
    }

    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    
                    // Останавливаем аудио
                    const audios = modal.querySelectorAll('audio');
                    audios.forEach(audio => {
                        audio.pause();
                        audio.currentTime = 0;
                    });
                    
                    console.log('❌ Модальное окно закрыто (Escape)');
                }
            });
        }
    });

    console.log('✅ Модальные окна готовы!');
});
