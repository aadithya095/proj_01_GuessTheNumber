'use strict';
// create a random number
let random = () => {
  let number = Math.trunc(Math.random() * 20) + 1;
  return number;
};
let score = 20;
let highScore = 0;

//comparision of new and previous score 
const updateHighScore = function () {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};
// resets the game leaving the current high score
const reset = () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.guess').value = '';
  secret_number = random();
  score = 20;
};

// compares the current input and the generated random number
const check = function () {
  const inputValue = Number(document.querySelector('.guess').value);
  console.log(inputValue);
  if (score > 1) {
    // for higher input
    if (inputValue > secret_number) {
      document.querySelector('.message').textContent = 'too high !';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // for lower input
    else if (inputValue < secret_number) {
      document.querySelector('.message').textContent = 'too low !';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // for correct guess
    else if (inputValue === secret_number) {
      document.querySelector('.message').textContent =
        'Congratulations you guessed the Number';
      document.querySelector('.number').textContent = secret_number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      updateHighScore();
    }
  }
  //   when no chances left
  else {
    document.querySelector('.message').textContent = 'you lose! game over...';
  }
};
let secret_number = random(); //calling random function to generate secret number.

document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', reset);
