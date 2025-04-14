// Данные для 10 фото
const memories = [
    {
        photo: "photo/photo1.jpg",
        date: "27.12.2024",
        text: "Наше первое свидание - ты подарила мне этот удивительный вечер!"
    },
    {
        photo: "photo/photo2.jpg",
        date: "30.12.2024",
        text: "День когда наши судьбы связались"
    },
    {
        photo: "photo/photo3.jpg",
        date: "02.01.2025",
        text: "Твое день рождение-хороший был день)"
    },
    {
        photo: "photo/photo4.jpg",
        date: "02.01.2025",
        text: "Твое день рождение-хороший был день"
    },
    {
        photo: "photo/photo5.jpg",
        date: "2.01.2025",
        text: "Твое день рождение-хороший был день"
    },
    {
        photo: "photo/photo6.jpg",
        date: "20.02.2025",
        text: "За одинь день 2 фильма-офигеть"
    },
    {
        photo: "photo/photo7.jpg",
        date: "20.02.2025",
        text: "2 Кино?-Кино много не бывает"
    },
    {
        photo: "photo/photo8.jpg",
        date: "22.12.2024",
        text: "Мот-ДА это МООООООТ!(я знаю что даты не правильно стоят)"
    },
    {
        photo: "photo/photo9.jpg",
        date: "22.02.2025",
        text: "ОХ УЖ ЭТОТ МОТ"
    },
    {
        photo: "photo/photo10.jpg",
        date: "28.02.2025",
        text: "Не грусти Жаным-я скоро вернусь"
    },
    {
        photo: "photo/photo11.jpg",
        date: "30.03.2025",
        text: "Букет цветов"
    },
    {
        photo: "photo/photo12.jpg",
        date: "7.04.2025",
        text: "букет и макоронсы"
    },
];

// Данные для временной шкалы
const timelineEvents = [
    {
        date: "27.12.2024",
        title: "Первая встреча",
        description: "Наше первое свидание, которое изменило всё"
    },
    {
        date: "30.12.2024",
        title: "Начало отношений",
        description: "День, когда мы решили быть вместе"
    },
    {
        date: "02.01.2025",
        title: "Твой день рождения",
        description: "Прекрасный праздник с множеством сюрпризов"
    },
    {
        date: "22.02.2025",
        title: "Концерт Мота",
        description: "Незабываемое музыкальное впечатление"
    },
   
    {
        date: "28.02.2025",
        title: "Временное расставание",
        description: "Ненадолго разлучились, но это сделало нашу связь крепче"
    },
    {
        date: "30.03.2025",
        title: "Первый букет цветов",
        description: "Незабываемое  впечатление"
    },
    
];

// Данные для видео
const videos = [
    {
        thumbnail: "video/photov1.jpg", // Превью для видео
        source: "video/video1.mp4",
        title: "Наш Первый концерт",
        date: "22.02.2025",
        description: "Незабываемое Время"
    },
    {
        thumbnail: "video/photov1.jpg",
        source: "video/video2.MOV",
        title: "Наш Первый концерт",
        date: "22.02.2025",
        description: "Наш Первый концерт"
    },
    {
        thumbnail: "video/photov1.jpg",
        source: "video/video3.MOV",
        title: "Только ТЫ И Я",
        date: "22.02.2025",
        description: "Спонтанный момент счастья"
    },
    {
        thumbnail: "video/photov1.jpg",
        source: "video/video4.MOV",
        title: "Только ТЫ И Я",
        date: "22.02.2025",
        description: "Спонтанный момент счастья"
    },
    {
        thumbnail: "video/photov1.jpg",
        source: "video/video5.MOV",
        title: "Букет цветов",
        date: "22.02.2025",
        description: "Спонтанный момент счастья"
    },
];

let currentSlideIndex = 0;
let isDarkTheme = false;

// Инициализация галереи
function initGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = memories.map((memory, index) => `
        <div class="memory-card" onclick="openModal(${index})" style="animation-delay: ${index * 0.1}s">
            <img src="${memory.photo}" alt="Фото">
            <div class="memory-date">${memory.date}</div>
        </div>
    `).join('');
}

// Инициализация карусели
function initCarousel() {
    const track = document.getElementById('carousel-track');
    track.innerHTML = memories.map(memory => `
        <div class="carousel-slide">
            <img src="${memory.photo}" alt="Фото">
        </div>
    `).join('');

    updateModalInfo(currentSlideIndex);
}

// Обновление карусели
function updateCarousel() {
    const track = document.getElementById('carousel-track');
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    updateModalInfo(currentSlideIndex);
    createHearts(5); // Создаем сердечки при переключении слайда
}

// Обновление информации в модальном окне
function updateModalInfo(index) {
    document.getElementById('modal-date').textContent = memories[index].date;
    document.getElementById('modal-text').textContent = memories[index].text;
}

// Открытие модального окна
function openModal(index) {
    currentSlideIndex = index;
    const modal = document.getElementById('modal');
    initCarousel();
    updateCarousel();
    modal.style.display = "flex";
    createHearts(10); // Создаем сердечки при открытии фото
}

// Закрытие модального окна
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});

// Управление каруселью
document.querySelector('.next').addEventListener('click', () => {
    if (currentSlideIndex < memories.length - 1) {
        currentSlideIndex++;
        updateCarousel();
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateCarousel();
    }
});

// Закрытие при клике вне окна
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
});

// Инициализация видео-раздела
function initVideoSection() {
    const videoSection = document.getElementById('video-section');
    if (!videoSection) return;
    
    videoSection.innerHTML = videos.map((video, index) => `
        <div class="video-card" onclick="openVideoModal(${index})" style="animation-delay: ${index * 0.1}s">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="play-button">▶</div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p class="video-date">${video.date}</p>
            </div>
        </div>
    `).join('');
}

// Функции для управления модальным окном видео
function openVideoModal(index) {
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    
    // Обновляем содержимое
    videoPlayer.innerHTML = `
        <video controls autoplay width="100%">
            <source src="${videos[index].source}" type="video/mp4">
            Ваш браузер не поддерживает видео.
        </video>
        <div class="video-details">
            <h2>${videos[index].title}</h2>
            <p class="date">${videos[index].date}</p>
            <p>${videos[index].description}</p>
        </div>
    `;
    
    // Показываем модальное окно
    videoModal.style.display = "flex";
    createHearts(8); // Создаем сердечки при открытии видео
}

// Функция для случайного видео
function showRandomVideo() {
    if (videos.length === 0) return;
    const randomIndex = Math.floor(Math.random() * videos.length);
    openVideoModal(randomIndex);
    createHearts(10);
}

// Показ случайного воспоминания
function showRandomMemory() {
    if (memories.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * memories.length);
    openModal(randomIndex);
}

// Создание анимированных сердечек
function createHearts(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Размер сердечка
            const size = Math.random() * 30 + 15;
            heart.style.fontSize = `${size}px`;
            
            // Начальная позиция
            const startX = Math.random() * window.innerWidth;
            heart.style.left = `${startX}px`;
            heart.style.bottom = `-${size}px`;
            
            // Случайное перемещение и поворот
            const randomX = (Math.random() - 0.5) * 200;
            const randomAngle = (Math.random() - 0.5) * 60;
            heart.style.setProperty('--random-x', `${randomX}px`);
            heart.style.setProperty('--random-angle', `${randomAngle}deg`);
            
            // Цвет сердечка
            const colors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd8d8'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.color = color;
            
            heart.innerHTML = '❤';
            document.body.appendChild(heart);
            
            // Удаление сердечка после завершения анимации
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 300);
    }
}

// Инициализация временной шкалы
function initTimeline() {
    const container = document.createElement('div');
    container.classList.add('timeline');
    
    const timelineHTML = timelineEvents.map((event, index) => `
        <div class="timeline-item" style="animation-delay: ${index * 0.2}s">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <p class="timeline-date">${event.date}</p>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = timelineHTML;
    
    // Добавляем таймлайн после фотосекции
    const photosSection = document.getElementById('photos-section');
    photosSection.appendChild(container);
}

// Переключение темы
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.innerHTML = isDarkTheme ? '☀️' : '🌙';
    
    // Сохраняем предпочтение темы в localStorage
    localStorage.setItem('darkTheme', isDarkTheme);
}

// Функция для добавления кнопки переключения темы
function addThemeToggle() {
    const themeButton = document.createElement('button');
    themeButton.id = 'theme-toggle';
    themeButton.className = 'theme-toggle';
    themeButton.innerHTML = '🌙';
    themeButton.addEventListener('click', toggleTheme);
    document.body.appendChild(themeButton);
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        isDarkTheme = true;
        document.body.classList.add('dark-theme');
        themeButton.innerHTML = '☀️';
    }
}

// Функция для управления вкладками навигации
function initNavigation() {
    const photosTab = document.getElementById('photos-tab');
    const videosTab = document.getElementById('videos-tab');
    const photosSection = document.getElementById('photos-section');
    const videosSection = document.getElementById('videos-section');
    
    // Обработчики для кнопок навигации
    photosTab.addEventListener('click', () => {
        photosTab.classList.add('active');
        videosTab.classList.remove('active');
        photosSection.classList.add('active');
        videosSection.classList.remove('active');
    });
    
    videosTab.addEventListener('click', () => {
        videosTab.classList.add('active');
        photosTab.classList.remove('active');
        videosSection.classList.add('active');
        photosSection.classList.remove('active');
    });
    
    // Закрытие видео-модального окна
    document.querySelector('.video-close').addEventListener('click', () => {
        document.getElementById('video-modal').style.display = "none";
        // Останавливаем видео при закрытии
        const videoElement = document.querySelector('#video-player video');
        if (videoElement) videoElement.pause();
    });
    
    // Закрытие видео-модального окна при клике вне его
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('video-modal')) {
            document.getElementById('video-modal').style.display = "none";
            const videoElement = document.querySelector('#video-player video');
            if (videoElement) videoElement.pause();
        }
    });
    // Добавьте этот код в функцию initNavigation() в вашем script.js

// Обработчик для вкладки истории
const storyTab = document.getElementById('story-tab');
const storySection = document.getElementById('story-section');

if (storyTab && storySection) {
    storyTab.addEventListener('click', () => {
        // Скрываем активные секции
        document.querySelectorAll('.content-section.active').forEach(section => {
            section.classList.remove('active');
        });
        
        // Снимаем активность с кнопок
        document.querySelectorAll('.nav-button.active').forEach(button => {
            button.classList.remove('active');
        });
        
        // Активируем секцию истории и кнопку
        storyTab.classList.add('active');
        storySection.classList.add('active');
    });
}
}

// Запуск при загрузке
window.onload = function() {
    initGallery();
    initVideoSection();
    initNavigation();
    initTimeline();
    addThemeToggle();
    updateLoveTimer();
    
    // Создаем пару сердечек при загрузке страницы
    setTimeout(() => {
        createHearts(5);
    }, 1500);
    
    // Показываем сообщение при первом посещении
    const isFirstVisit = !localStorage.getItem('visited');
    if (isFirstVisit) {
        setTimeout(() => {
            alert('Дорогая моя, это наши особенные моменты вместе! ❤️');
            localStorage.setItem('visited', 'true');
        }, 2000);
    }
};

// Добавьте этот код в конец вашего файла script.js

// 1. ИНТЕРАКТИВНАЯ ИСТОРИЯ ЛЮБВИ С АНИМАЦИЕЙ ПРИ ПРОКРУТКЕ
function initScrollAnimation() {
    // Создаем новый раздел для истории любви
    const storySection = document.createElement('div');
    storySection.className = 'love-story-section';
    storySection.innerHTML = `
        <h2 class="section-title">Наша история любви</h2>
        <div class="interactive-story">
            <div class="story-item" data-aos="fade-right">
                <div class="story-date">27.12.2024</div>
                <div class="story-content">
                    <h3>Первая встреча</h3>
                    <p>Тот особенный день, когда мы впервые увидели друг друга. Я помню каждую деталь...</p>
                    <div class="story-hearts"><span>❤️</span><span>❤️</span><span>❤️</span></div>
                </div>
            </div>
            
            <div class="story-item" data-aos="fade-left">
                <div class="story-date">30.12.2024</div>
                <div class="story-content">
                    <h3>Начало отношений</h3>
                    <p>День, когда мы решили быть вместе. Помнишь, как мы гуляли до поздней ночи?</p>
                    <div class="story-hearts"><span>❤️</span><span>❤️</span><span>❤️</span></div>
                </div>
            </div>
            
            <div class="story-item" data-aos="fade-right">
                <div class="story-date">02.01.2025</div>
                <div class="story-content">
                    <h3>Твой день рождения</h3>
                    <p>Я так волновался, понравится ли тебе сюрприз. Твоя улыбка была лучшим подарком для меня.</p>
                    <div class="story-hearts"><span>❤️</span><span>❤️</span><span>❤️</span></div>
                </div>
            </div>
            
            <div class="story-item" data-aos="fade-left">
                <div class="story-date">22.02.2025</div>
                <div class="story-content">
                    <h3>Концерт Мота</h3>
                    <p>Музыка, которая стала частью нашей истории. Я до сих пор слышу эти песни и вспоминаю тебя.</p>
                    <div class="story-hearts"><span>❤️</span><span>❤️</span><span>❤️</span></div>
                </div>
            </div>
        </div>
    `;
    
    // Добавляем новый раздел на страницу после раздела с фотографиями
    const photosSection = document.getElementById('photos-section');
    if (photosSection) {
        photosSection.appendChild(storySection);
    }
    
    // Добавляем обработчик событий для анимации при скролле
    window.addEventListener('scroll', function() {
        const storyItems = document.querySelectorAll('.story-item');
        
        storyItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const itemBottom = item.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100 && itemBottom > 0) {
                if (item.getAttribute('data-aos') === 'fade-right') {
                    item.style.animation = 'fadeInRight 1s forwards';
                } else {
                    item.style.animation = 'fadeInLeft 1s forwards';
                }
                item.style.opacity = '1';
            }
        });
    });
}

// 2. ПЕРСОНАЛЬНЫЕ СООБЩЕНИЯ
function addPersonalMessagesFeature() {
    // Создаем кнопку для открытия меню сообщений
    const messageButton = document.createElement('button');
    messageButton.id = 'message-toggle';
    messageButton.className = 'message-toggle';
    messageButton.innerHTML = '💌';
    messageButton.title = 'Оставить сообщение';
    document.body.appendChild(messageButton);

    // Создаем модальное окно для сообщений
    const messageModal = document.createElement('div');
    messageModal.className = 'modal';
    messageModal.id = 'message-modal';
    messageModal.innerHTML = `
        <div class="modal-content centered-block message-modal-content">
            <span class="close message-close">&times;</span>
            <h2>Наши секретные сообщения ❤️</h2>
            
            <div class="messages-container">
                <div class="messages-list" id="messages-list">
                    <!-- Здесь будут отображаться сообщения -->
                    <div class="message-item">
                        <div class="message-date">15.04.2025</div>
                        <div class="message-text">Я так счастлив быть с тобой! Каждый день с тобой - подарок. ❤️</div>
                    </div>
                </div>
                
                <div class="new-message">
                    <textarea id="new-message-text" placeholder="Напиши что-нибудь особенное для своей половинки..."></textarea>
                    <button id="send-message">Отправить с любовью ❤️</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(messageModal);

    // Добавляем обработчики событий
    messageButton.addEventListener('click', () => {
        document.getElementById('message-modal').style.display = 'flex';
        loadMessages();
    });

    document.querySelector('.message-close').addEventListener('click', () => {
        document.getElementById('message-modal').style.display = 'none';
    });

    document.getElementById('send-message').addEventListener('click', () => {
        const messageText = document.getElementById('new-message-text').value.trim();
        if (messageText) {
            saveMessage(messageText);
            document.getElementById('new-message-text').value = '';
        }
    });

    // Функция для сохранения сообщений в localStorage
    function saveMessage(text) {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const dateStr = `${day}.${month}.${year}`;
        
        const newMessage = {
            date: dateStr,
            text: text
        };
        
        let messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
        messages.push(newMessage);
        localStorage.setItem('loveMessages', JSON.stringify(messages));
        
        loadMessages(); // Обновляем список сообщений
        createHearts(5); // Создаем несколько сердечек при отправке сообщения
    }

    // Функция для загрузки сообщений из localStorage
    function loadMessages() {
        const messagesList = document.getElementById('messages-list');
        const messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
        
        if (messages.length === 0) {
            // Если сообщений нет, показываем приветственное сообщение
            messagesList.innerHTML = `
                <div class="message-item">
                    <div class="message-date">15.04.2025</div>
                    <div class="message-text">Оставьте здесь свое первое сообщение для любимого человека! ❤️</div>
                </div>
            `;
            return;
        }
        
        // Показываем сообщения в обратном порядке (новые сверху)
        messagesList.innerHTML = messages.slice().reverse().map(msg => `
            <div class="message-item">
                <div class="message-date">${msg.date}</div>
                <div class="message-text">${msg.text}</div>
            </div>
        `).join('');
    }
}

// 3. УЛУЧШЕННАЯ АНИМАЦИЯ И ЭФФЕКТЫ
function enhanceAnimations() {
    // Добавляем кнопку для запуска конфетти
    const confettiButton = document.createElement('button');
    confettiButton.id = 'confetti-button';
    confettiButton.className = 'effect-button';
    confettiButton.innerHTML = '🎉';
    confettiButton.title = 'Праздничное настроение';
    document.body.appendChild(confettiButton);
    
    // Добавляем обработчик событий для кнопки конфетти
    confettiButton.addEventListener('click', () => {
        createConfetti(100); // Создаем 100 конфетти
        createHearts(15); // И немного сердечек
    });
    
    // Улучшаем анимацию карточек с фотографиями
    enhancePhotoCards();
    
    // Добавляем эффекты при наведении на кнопки
    enhanceButtons();
}

// Функция для создания конфетти
function createConfetti(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Случайный цвет
            const colors = ['#ff6b6b', '#ffcc5c', '#88d8b0', '#8ac4ff', '#ffabe1'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.backgroundColor = color;
            
            // Случайный размер
            const size = Math.random() * 10 + 5;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            
            // Случайная начальная позиция
            const startX = Math.random() * window.innerWidth;
            confetti.style.left = `${startX}px`;
            confetti.style.top = '-10px';
            
            // Случайное движение и вращение
            const randomX = (Math.random() - 0.5) * 300;
            const randomRotation = Math.random() * 360;
            confetti.style.setProperty('--random-x', `${randomX}px`);
            confetti.style.setProperty('--random-rotation', `${randomRotation}deg`);
            
            document.body.appendChild(confetti);
            
            // Удаление конфетти после завершения анимации
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 20);
    }
}

// Функция для улучшения анимации карточек с фотографиями
function enhancePhotoCards() {
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(card => {
        // Добавляем анимацию при наведении
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.1)';
            img.style.filter = 'brightness(1.1) contrast(1.1)';
            
            // Создаем мини-сердечки вокруг карточки
            for (let i = 0; i < 3; i++) {
                const miniHeart = document.createElement('div');
                miniHeart.className = 'mini-heart';
                miniHeart.innerHTML = '❤';
                miniHeart.style.left = `${Math.random() * 100}%`;
                miniHeart.style.top = `${Math.random() * 100}%`;
                this.appendChild(miniHeart);
                
                setTimeout(() => {
                    miniHeart.remove();
                }, 1000);
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1)';
            img.style.filter = '';
        });
    });
}

// Функция для улучшения анимации кнопок
function enhanceButtons() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Запуск новых функций при загрузке страницы
window.addEventListener('load', function() {
    // Добавляем эти строки в конец существующей функции window.onload
    setTimeout(() => {
        initScrollAnimation();
        addPersonalMessagesFeature();
        enhanceAnimations();
    }, 2000); // Небольшая задержка для подгрузки всех элементов
});

// Добавляем анимацию для раздела "Интерактивная история любви"
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
`);