const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach((button) => {
  console.log(button) // Displays Buttons
  button.addEventListener('click', (event) => {
    console.log(event) // Displays Event
    console.log(event.target) // Displays Target Element, where Event is triggered
    switch(event.target.id){
      case "grey":
        body.style.backgroundColor = event.target.id
      break;
      case "white":
        body.style.backgroundColor = event.target.id
      break;
      case "blue":
        body.style.backgroundColor = event.target.id
      break;
      case "yellow":
        body.style.backgroundColor = event.target.id
      break;
    }
  })
})