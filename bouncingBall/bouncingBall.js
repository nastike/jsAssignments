const container = document.getElementById('container');
const bouncingBall = document.getElementById('small-box');
let topPosition = 10;
let leftPosition = 10;
let dy = 10;
let dx = 10;
bouncingBall.style.position = 'relative';
setInterval(() => {
  if (topPosition > 450) {
    dy = -10;
    dx = -10;
  } else if (topPosition < 0) {
    dy = 10;
    dx = 10;
  }
  topPosition += dy;
  leftPosition += dx;
  bouncingBall.style.left = leftPosition + 'px';
  bouncingBall.style.top = topPosition + 'px';
}, 100);
