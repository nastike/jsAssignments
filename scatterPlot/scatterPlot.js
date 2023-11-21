let data = [];
function generateDataForArray(numberOfData, maxX, maxY) {
  for (let index = 0; index < numberOfData; index++) {
    x = Math.floor(Math.random() * maxX);
    left = Math.floor(Math.random() * maxY);
    data.push({ top: x, left: left });
  }
}
generateDataForArray(30, 400, 400);
// console.log(data)
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
  //   newDiv.textContent = `Element ${idCounter - 1}`;
  container.appendChild(newDiv);
});
