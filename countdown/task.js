// Функция для запуска таймера
function startCountdown() {
    // Получаем элемент, содержащий значение таймера
    const timerElement = document.getElementById('timer');
    // Считываем и преобразуем начальное значение таймера
    let timeRemaining = parseInt(timerElement.textContent);

    // Устанавливаем интервал, который будет уменьшать значение таймера каждую секунду
    const interval = setInterval(() => {
        // Уменьшаем оставшееся время
        timeRemaining -= 1;
        // Обновляем отображаемое значение на странице
        timerElement.textContent = timeRemaining;

        // Проверяем, истекло ли время
        if (timeRemaining <= 0) {
            // Останавливаем таймер
            clearInterval(interval);
            // Выводим уведомление
            alert('Вы победили в конкурсе!');
        }
    }, 1000);
}

// Запускаем функцию на загрузке страницы
window.onload = startCountdown;