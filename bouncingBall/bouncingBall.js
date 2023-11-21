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

setInterval(() => {
  if (topPosition > 450) {
    dy = -10;
    dx = 0;
  } else if (topPosition < 0) {
    dy = 10;
    dx = 0;
  }
  ballTwoStartingPositionLeft += dx;
  ballTwoStartingPositionTop += dy;
  topPosition += dy;
  leftPosition += dx;
  bouncingBall.style.left = leftPosition + 'px';
  bouncingBall.style.top = topPosition + 'px';
  secondBouncingBall.style.left = ballTwoStartingPositionLeft + 'px';
  secondBouncingBall.style.top = ballTwoStartingPositionTop + 'px';
}, 100);
