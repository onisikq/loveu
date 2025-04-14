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
    }
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
    }
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
    }
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