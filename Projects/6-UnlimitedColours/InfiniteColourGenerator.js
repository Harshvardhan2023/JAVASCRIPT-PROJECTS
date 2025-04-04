const randomColour = () => {
  const hexValues = '0123456789ABCDEF';
  let colour = '#';
  for (let i = 1; i <= 6; i++) {
    colour = colour.concat(hexValues.charAt(Math.floor(Math.random() * 16)));
  }
  return colour;
};

let colourChanger;

document.querySelector('#start').addEventListener('click', (event) => {
  if (!colourChanger) {
    colourChanger = setInterval(() => {
      document.body.style.backgroundColor = randomColour();
      console.log(randomColour());
    }, 1000);
  }
});

document.querySelector('#stop').addEventListener('click', (event) => {
  clearInterval(colourChanger);
  colourChanger = null;
  console.log('Stopped !!');
});
