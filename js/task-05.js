// Отримуємо посилання на елементи DOM
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Додаємо слухача події input на поле введення тексту
nameInput.addEventListener('input', () => {
  // Отримуємо поточне значення введеного тексту
  const inputText = nameInput.value;
  
  // Перевіряємо, чи введено текст
  if (inputText !== '') {
    // Якщо введено, встановлюємо вміст span на введений текст
    nameOutput.textContent = inputText;
  } else {
    // Якщо поле порожнє, встановлюємо вміст span на "Anonymous"
    nameOutput.textContent = 'Anonymous';
  }
});