let data = [
  { top: 2, left: 5 },
  { top: 0, left: 10 },
  { top: 10, left: 0 },
  { top: 1, left: 1 },
  { top: 2, left: 10 },
  { top: 5, left: 5 },
  { top: 10, left: 2 },
];
const container = document.getElementById('container');
container.style.position = 'absolute';
let idCounter = 1;

data.forEach((position) => {
  const newDiv = document.createElement('div');
  newDiv.id = `element${idCounter}`;
  idCounter++;
  newDiv.style.position = 'relative';
  newDiv.style.top = position.top + 'px';
  newDiv.style.left = position.left + 'px';

  newDiv.style.background = 'black';
  newDiv.style.height = '10px';
  newDiv.style.width = '10px';
  //   newDiv.textContent = `Element ${idCounter - 1}`;
  container.appendChild(newDiv);
});
