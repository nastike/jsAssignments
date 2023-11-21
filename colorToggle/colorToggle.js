const colorToggleArea = document.getElementById('color-toggle');
const colorToggleButton = document.getElementById('btn');
const colors = ['teal', 'yellow', '#ff6600', 'maroon'];
let currentIndex = 0;
colorToggleButton.addEventListener('click', () => {
  colorToggleArea.style.background = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
});
