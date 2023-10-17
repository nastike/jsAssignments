let smallBall = document.getElementById('container');
let tags = document.getElementsByTagName('div');

// console.log(tags);

smallBall.style.background = 'green';
let btn = document.getElementById('test-button');

btn.onclick = () => {
  alert('You clicked the button');
};
