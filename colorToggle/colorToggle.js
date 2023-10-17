const colorToggle = document.getElementById('color-toggle');
const buttonTagSelector = document.getElementById('btn');
let colors = ['red', 'blue', 'green', 'yellow'];
let currentColorIndex = 0;

buttonTagSelector.addEventListener('click', () => {
  colorToggle.style.background = colors[currentColorIndex];

  currentColorIndex = (currentColorIndex + 1) % colors.length;
});
