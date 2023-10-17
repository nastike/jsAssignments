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
function generateDataForArray(numberOfData) {
  for (let index = 0; index < numberOfData; index++) {
    top = Math.floor(Math.random() * 200);
    left = Math.floor(Math.random() * 200);
    data.push({ top: top, left: left });
  }
}
generateDataForArray(10);
console.log(data);
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
