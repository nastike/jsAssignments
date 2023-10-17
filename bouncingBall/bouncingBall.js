// let container = document.getElementById('container');
// let tags = document.getElementsByTagName('div');

let smallBall = document.getElementById('container');
let tags = document.getElementsByTagName('div');

let smallBox = document.getElementById('small-box');
let topPosition = 10;
let dy = 1;

smallBox.style.position = 'relative';
setInterval(() => {
  if (topPosition > 450) {
    dy = -1;
  } else if (topPosition < 0) {
    dy = 1;
  }

  topPosition += dy * 5;

  smallBox.style.top = topPosition + 'px';
  smallBox.style.left = topPosition + 'px';
}, 100);

// console.log(tags);

// smallBall.style.background = 'green';
