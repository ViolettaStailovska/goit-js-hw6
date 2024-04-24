// Отримуємо посилання на елементи DOM
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

// Ініціалізуємо змінну counterValue значенням 0
let counterValue = 0;

// Функція для зменшення значення лічильника на 1 та оновлення інтерфейсу
function decrement() {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
}

// Функція для збільшення значення лічильника на 1 та оновлення інтерфейсу
function increment() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
}

// Додаємо слухачів подій на кнопки
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);