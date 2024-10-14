document.addEventListener('DOMContentLoaded', function() {
    // Находим элемент печеньки и счётчик
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');

    // Отслеживаем количество кликов
    let clickCount = 0;
    // Переменная для хранения текущего размера
    let isLarge = false;

    // Функция, которая срабатывает при клике на печеньку
    function handleClick() {
        // Увеличиваем счётчик кликов
        clickCount++;
        counter.textContent = clickCount;

        // Меняем размер печеньки при каждом клике
        if (isLarge) {
            cookie.style.width = '200px';
            cookie.style.height = 'auto';
        } else {
            cookie.style.width = '180px';
            cookie.style.height = 'auto';
        }

        // Переключаем состояние
        isLarge = !isLarge;
    }

    // Устанавливаем обработчик клика на печеньку
    cookie.addEventListener('click', handleClick);
});