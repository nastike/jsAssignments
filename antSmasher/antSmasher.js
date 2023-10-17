// let data = [
//   { top: 2, left: 5 },
//   { top: 0, left: 100 },
//   { top: 400, left: 0 },
//   { top: 1, left: 133 },
//   { top: 2, left: 100 },
//   { top: 5, left: 5 },
//   { top: 100, left: 2 },
// ];
let data = [];
function generateDataForArray(numberOfData, maxX, maxY) {
  for (let index = 0; index < numberOfData; index++) {
    x = Math.floor(Math.random() * maxX);
    left = Math.floor(Math.random() * maxY);
    data.push({ top: x, left: left });
  }
}
generateDataForArray(30, 400, 400);
console.log(data);
const container = document.getElementById('container');
container.style.position = 'absolute';
let idCounter = 1;

data.forEach((position) => {
  const newDiv = document.createElement('div');
  newDiv.id = `element${idCounter}`;
  idCounter++;
  newDiv.style.position = 'relative';
  newDiv.style.top = position.x + 'px';
  newDiv.style.left = position.left + 'px';

  newDiv.style.background = 'black';
  newDiv.style.height = '10px';
  newDiv.style.width = '10px';
  newDiv.addEventListener('click', () => {
    container.removeChild(newDiv);
    // console.log(container);
  });

  container.appendChild(newDiv);
});
