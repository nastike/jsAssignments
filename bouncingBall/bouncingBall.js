const container = document.getElementById('container');
const bouncingBall = document.getElementById('small-box');
const secondBouncingBall = document.getElementById('secondBall');
let leftPosition = 400;
let topPosition = 10;
let ballTwoStartingPositionLeft = 10;
let ballTwoStartingPositionTop = 10;
let dy = 10;
let dx = 0;
bouncingBall.style.position = 'absolute';
secondBouncingBall.style.position = 'absolute';
let positionArray = [
  { top: 10, left: 10 },
  { top: 10, left: 400 },
];

setInterval(() => {
  if (positionArray[0].top > 450) {
    dy = -10;
    dx = 0;
  } else if (positionArray[0].top < 0) {
    dy = 10;
    dx = 0;
  }

  positionArray[1].left += dx;
  positionArray[1].top += dy;
  positionArray[0].left += dx;
  positionArray[0].top += dy;
  bouncingBall.style.left = positionArray[1].left + 'px';
  bouncingBall.style.top = positionArray[1].top + 'px';
  secondBouncingBall.style.left = positionArray[0].left + 'px';
  secondBouncingBall.style.top = positionArray[0].top + 'px';
}, 100);
