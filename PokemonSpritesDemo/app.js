const src =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const container = document.querySelector('#container');

const pokemon = document.createElement('div');
for (let i = 1; i < 151; i++) {
  pokemon.id = `container${i}`;
  //   console.log(pokemon);
  const label = document.createElement('span');
  label.innerText = `#${i}`;
  //   console.log(label);
  const newImage = document.createElement('img');
  console.log(newImage);
  newImage.src = `${src}${i}.png`;
  pokemon.appendChild(newImage);
  pokemon.appendChild(label);

  container.appendChild(newImage);
}
