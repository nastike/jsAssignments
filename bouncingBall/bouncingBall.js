let smallBall = document.getElementById('container');
let tags = document.getElementsByTagName('div');

let smallBox = document.getElementById('small-box');
let counter = 0;
let topPosition = 10;

smallBox.style.position = 'relative';
setInterval(() => {
  if (topPosition < 450) {
    smallBox.style.top = topPosition + 'px';
    smallBox.style.left = topPosition + 'px';
    topPosition += 5;
    counter += 5;
  }
}, 100);

// console.log(tags);

// smallBall.style.background = 'green';
