function toggleSubMenu(lessonId) {
    const submenu = document.getElementById(lessonId);
    const isDisplayed = submenu.style.display === 'block';
    submenu.style.display = isDisplayed ? 'none' : 'block';
}

function loadLesson(lessonFile) {
    const lessonContent = document.getElementById('lessonContent');
    fetch(lessonFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Сеть ответила с проблемой: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            lessonContent.innerHTML = data; // помещаем загруженное содержимое
        })
        .catch(error => {
            lessonContent.innerHTML = '<p>Ошибка загрузки урока.</p>';
            console.error('Ошибка:', error);
        });
}
