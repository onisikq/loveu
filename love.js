function acceptLove() {
    document.body.innerHTML = '<div class="container">' +
                              '<h1>УРАААААААААААААААААААААААААААААААА 💖</h1>' +
                              '<img src="https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif" alt="Улыбающийся котик">' +
                              '</div>';

    // Добавляем видео с фоном
    let video = document.createElement('video');
    video.src = 'videos/happy-video.mp4';  // Путь к видео
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    document.body.appendChild(video); // Вставляем видео в body
}

function declineLove() {
    document.body.innerHTML = '<div class="container">' +
                              '<h1>КАК ТАК!!!!!!!!!!!!,МЕНЯ НЕЛЮБЯТ😢</h1>' +
                              '<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm5lYTZzejVheWEybGtqMTJ6ZTdkdDU5MXUya2d5N2QxcXhmaml2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CM1rHbKDMH2BW/giphy.gif" alt="Грустный котик">' +
                              '</div>';

    // Добавляем видео с фоном
    let video = document.createElement('video');
    video.src = 'videos/sad-video.mp4';  // Путь к видео
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    document.body.appendChild(video); // Вставляем видео в body
}
