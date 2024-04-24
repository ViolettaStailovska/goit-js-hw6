const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Отримуємо посилання на список ul
const list = document.getElementById('ingredients');
// Створюємо фрагмент, щоб мінімізувати маніпуляції з DOM
const fragment = document.createDocumentFragment();

// Проходимо по кожному елементу масиву ingredients
ingredients.forEach((ingredient) => {
  // Створюємо новий елемент li
  const listItem = document.createElement('li');
  
  // Додаємо текстовий вміст (назва інгредієнта)
  listItem.textContent = ingredient;
  
  // Додаємо клас "item"
  listItem.classList.add('item');
  
  // Додаємо елемент li у фрагмент
  fragment.appendChild(listItem);
});

// Вставляємо фрагмент (з усіма елементами li) до списку ul
list.appendChild(fragment);

console.log(list);