let data = [];
function generateDataForArray(numberOfData, maxX, maxY) {
  for (let index = 0; index < numberOfData; index++) {
    x = Math.floor(Math.random() * maxX);
    left = Math.floor(Math.random() * maxY);
    data.push({ top: x, left: left });
  }
}

const container = document.getElementById('container');
let idCounter = 1;
const bouncingBalls = [
  {
    element: document.getElementById('small-box'),
    top: 10,
    left: 10,
    dy: 10,
    dx: 0,
  },
  {
    element: document.getElementById('secondBall'),
    top: 450,
    left: 400,
    dy: -10,
    dx: 0,
  },
];

bouncingBalls.forEach((ball) => {
  ball.element.style.position = 'absolute';
});

setInterval(() => {
  bouncingBalls.forEach((ball) => {
    if (ball.top > 450) {
      ball.dy = -10;
      console.log('greater than 450 condition');
    } else if (ball.top < 0) {
      ball.dy = 10;
      console.log('less than 0 condition');
    }
    ball.top += ball.dy;
    ball.element.style.left = ball.left + 'px';
    ball.element.style.top = ball.top + 'px';
  });
}, 100);
