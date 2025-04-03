let randomNum = parseInt(Math.random() * 100 + 1);
console.log(`Random Number : ${randomNum}`);

const userInput = document.querySelector('#guessField');
const submitButton = document.querySelector('#submit');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParagraphs');

const maxGuesses = 5;
let prevGuess = [];
let chances = maxGuesses;

let playGame = true;

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (playGame) {
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  }
});

function validateGuess(guess) {
  if (guess >= 1 && guess <= 100) {
    if (prevGuess.includes(guess)) {
      alert('You already guessed this Number! Try a different one !');
      userInput.value = '';
      return;
    }

    prevGuess.push(guess);

    if (chances === 1) {
      checkGuess(guess);
    } else {
      checkGuess(guess);
    }
  } else {
    alert('Please Enter a Valid Number between 1 and 100 !!');
    userInput.value = '';
    return;
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayGuess(guess);
    displayMessage(`You guessed it Right !! Number is ${randomNum} !`);
    alert(`You guessed it Right !! Number is ${randomNum} !`);
    endGame();
  } else if (guess < randomNum) {
    displayGuess(guess);
    displayMessage('Number is Low !!');
    if (chances === 0) {
      alert(`GAME OVER !! Number was ${randomNum}`);
      displayMessage(`GAME OVER !! Number was ${randomNum} !`);
      endGame();
    }
  } else {
    displayGuess(guess);
    displayMessage('Number is High !!');
    if (chances === 0) {
      alert(`GAME OVER !! Number was ${randomNum} !`);
      displayMessage(`GAME OVER !! Number was ${randomNum} !`);
      endGame();
    }
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML = `${prevGuess.join(' ')}`;
  --chances;
  remaining.innerHTML = chances;
}

function displayMessage(message) {
  lowOrHi.innerHTML = message;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  playGame = false;

  const newGameButton = document.createElement('button');
  newGameButton.classList.add('button');
  newGameButton.id = 'newGame';
  newGameButton.innerText = 'Start New Game';
  newGameButton.style.backgroundColor = '#000000';
  newGameButton.style.width = '200px';
  newGameButton.style.height = '50px';
  newGameButton.style.fontSize = '20px';
  newGameButton.style.borderRadius = '10px';
  startOver.appendChild(newGameButton);

  newGameButton.addEventListener('click', restartGame);
}

function restartGame() {
  randomNum = parseInt(Math.random() * 100 + 1);
  console.log(`New Random Number: ${randomNum}`);

  prevGuess = [];
  chances = maxGuesses;
  playGame = true;

  userInput.removeAttribute('disabled');
  guessSlot.innerHTML = ' ';
  remaining.innerHTML = chances;
  lowOrHi.innerHTML = '';
  startOver.removeChild(document.getElementById('newGame'));
  userInput.value = '';
}
