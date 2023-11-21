let data = [];
let reset = document.getElementById('reset');
function generateDataForArray(numberOfData, maxX, maxY) {
  for (let index = 0; index < numberOfData; index++) {
    x = Math.floor(Math.random() * maxX);
    left = Math.floor(Math.random() * maxY);
    data.push({ top: x, left: left });
  }
}

const container = document.getElementById('container');
const listOfAnts = document.getElementById('list-of-ants');
container.style.position = 'relative';
let idCounter = 1;
let counter = 0;

generateDataForArray(30, 400, 400);
function generateAnts() {
  data.forEach((position) => {
    const newDiv = document.createElement('div');
    newDiv.id = `element${idCounter}`;

    console.log(data);
    idCounter++;
    const img = document.createElement('img');
    img.src =
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/959cb949-4db8-4404-82b4-52a2d9024651/d73v1kf-a570dd8b-fab4-4c2b-82c1-96d4c9b3dc40.png';
    newDiv.style.position = 'relative';
    newDiv.style.top = position.x + 'px';
    newDiv.style.left = position.left + 'px';
    img.style.height = 10 + 'px';
    img.style.width = 10 + 'px';
    img.style.display = 'flex';

    newDiv.style.background = 'black';
    newDiv.style.height = '10px';
    newDiv.style.width = '10px';
    newDiv.appendChild(img);
    const list = document.createElement('ul');

    newDiv.addEventListener('click', () => {
      const listItem = document.createElement('li');
      list.appendChild(listItem);
      listOfAnts.appendChild(list);

      container.removeChild(newDiv);
      counter += 1;
      console.log(`You smashed ${counter} ant/s`);
    });

    container.appendChild(newDiv);
  });
}
generateAnts();
reset.addEventListener('click', () => {
  generateAnts();
  location.reload();
});
