
const controlsDiv = document.getElementById('controls');
const input = controlsDiv.querySelector('input');
const createBtn = controlsDiv.querySelector('[data-create]');
const destroyBtn = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  destroyBoxes(); // Очистити колекцію перед створенням нових елементів
  const initialSize = 30;
  let boxHTML = '';

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const color = getRandomHexColor();
    boxHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin-bottom: 10px;"></div>`;
  }

  boxesDiv.insertAdjacentHTML('beforeend', boxHTML);
}

function destroyBoxes() {
  boxesDiv.innerHTML = ''; // Очистити вміст div#boxes
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);