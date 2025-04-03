const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value); // For getting Value of height given in Textbox by User in Integer
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');
  result.textContent = ''; // Clears Previous Result

  if (height === '' || height < 0 || isNaN(height)) {
    alert(`Please Enter Valid Height !!`);
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    alert(`Please Enter Valid Weight !!`);
  } else {
    let bmi = (weight / (height / 100) ** 2).toFixed(2);
    result.appendChild(document.createTextNode(`Result = ${bmi}`));

    setTimeout(() => {
      if (bmi < 18.6) {
        alert(`You are Under-Weight !!`);
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        alert(`You are Normal !!`);
      } else {
        alert(`You are Over-Weight !!`);
      }
    }, 150); // setTimeOut delays alert
  }
});
