// Получаем ссылки на элементы DOM
const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const countElement = document.querySelector(".count");

// Устанавливаем начальное значение
let count = 0;

// Функция для обновления отображаемого значения и счетчика
function updateCount() {
    countElement.textContent = count;
}

// Обработчик нажатия кнопки "минус"
minusButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateCount();
    }
});

// Обработчик нажатия кнопки "плюс"
plusButton.addEventListener("click", () => {
    count++;
    updateCount();
});

// Инициализация счетчика
updateCount();




