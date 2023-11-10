// let container = document.getElementById('container');
// let tags = document.getElementsByTagName('div');

let smallBall = document.getElementById('container');
let tags = document.getElementsByTagName('div');
let reset = document.getElementById('reset');

let smallBox = document.getElementById('small-box');
let topPosition = 10;
let sidePosition = 10;
let dy = 10;
let dx = 5;

smallBox.style.position = 'relative';
setInterval(() => {
  if (topPosition > 450) {
    dy = -10;
    dx = -10;
  } else if (topPosition < 0 && sidePosition < 0) {
    dy = 10;
    dx = 10;
  }

  topPosition += dy * 2;
  sidePosition += dx * 10;

  smallBox.style.top = topPosition + 'px';
  smallBox.style.left = sidePosition + 'px';
}, 100);

// console.log(tags);

// smallBall.style.background = 'green';
