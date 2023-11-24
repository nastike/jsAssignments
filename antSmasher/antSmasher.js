const WORLD_SIZE = 500;
const ANT_SIZE = 20;
const ANT_SPEED = 1;
const $container = document.getElementById('container');

function generateRandomValueBetween(lower, upper) {
  return Math.random() * (upper - lower) + lower;
}
function generateRandomDirection() {
  return Math.floor(Math.random() * 3) - 1;
}

function initAnts(numberOfAnts = 10) {
  const data = [];
  for (let i = 0; i < numberOfAnts; i++) {
    const x = generateRandomValueBetween(0, WORLD_SIZE);
    const y = generateRandomValueBetween(0, WORLD_SIZE);
    const dx = generateRandomDirection();
    const dy = generateRandomDirection();

    const element = document.createElement('div');
    element.classList.add('ant');
    element.style.height = `${ANT_SIZE}px`;
    element.style.width = `${ANT_SIZE}px`;

    element.onclick = () => {
      $container.removeChild(element);
      data.splice(data.indexOf(ant), 1);
    };
    $container.appendChild(element);

    const ant = { x, y, dx, dy, element };
    data.push(ant);
  }
  return data;
  // console.log(data);
}

function detectAntColision(ant1, ant2) {
  if (ant1 === ant2) {
    return false;
  }
}

function plotAnts(ants) {
  ants.forEach((ant) => {
    ant.element.style.left = `${ant.x}px`;
    ant.element.style.top = `${ant.y}px`;
  });
}
function updateAnts(ants) {
  ants.forEach((ant) => {
    ant.x += ant.dx * ANT_SPEED;
    ant.y += ant.dy * ANT_SPEED;

    if (ant.x < 0) {
      ant.x = 0;
      ant.dx = -ant.dx;
    }
    if (ant.x > WORLD_SIZE - ANT_SIZE) {
      ant.x = WORLD_SIZE - ANT_SIZE;
      ant.dx = -ant.dx;
    }

    if (ant.y < 0) {
      ant.y = 0;
      ant.dy = -ant.dy;
    }
    if (ant.y > WORLD_SIZE - ANT_SIZE) {
      ant.y = WORLD_SIZE - ANT_SIZE;
      ant.dy = -ant.dy;
    }
  });
}

const ants = initAnts();
plotAnts(ants);

setInterval(() => {
  // console.log(ants);
  updateAnts(ants);
  plotAnts(ants);
}, 60);
