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

// Инициализация галереи
function initGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = memories.map((memory, index) => `
        <div class="memory-card" onclick="openModal(${index})">
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
        <div class="video-card" onclick="openVideoModal(${index})">
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
}

// Функция для случайного видео
function showRandomVideo() {
    if (videos.length === 0) return;
    const randomIndex = Math.floor(Math.random() * videos.length);
    openVideoModal(randomIndex);
}

// Показ случайного воспоминания
function showRandomMemory() {
    if (memories.length === 0) return;
    
    const memory = memories[Math.floor(Math.random() * memories.length)];
    const modal = document.getElementById("modal");
    
    document.getElementById("modal-image").src = memory.photo;
    document.getElementById("modal-date").textContent = memory.date;
    document.getElementById("modal-text").textContent = memory.text;
    
    modal.style.display = "flex";
}

// Функция для игры с памятью
function startMemoryGame() {
    if (memories.length < 3) return alert("Добавьте больше воспоминаний для игры!");
    
    const memory = memories[Math.floor(Math.random() * memories.length)];
    const answer = prompt(`Угадай дату этого события:\n\n"${memory.text}"\n\n(В формате ДД.ММ.ГГГГ)`);
    
    if (answer === memory.date) {
      alert(`Верно! ❤️\n${memory.date} - ${memory.text}`);
    } else {
      alert(`Почти! Правильный ответ: ${memory.date}`);
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
    updateLoveTimer();
};