'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const check = document.querySelector('.check');
const number = document.querySelector('.number');
const highscoreCount = document.querySelector('.highscore');
const scoreCount = document.querySelector('.score');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

check.addEventListener('click', () => {
  const guessToNumber = Number(guess.value);

  if (!guessToNumber) {
    displayMessage('⛔️ Pas de nombre !');

  } else if (guessToNumber === secretNumber) {

    displayMessage('🎉 Bravo, vous avez gagné !');
    number.textContent = secretNumber;

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreCount.textContent = highscore;
    }

  } else if (guessToNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(guessToNumber > secretNumber ? '📈 Trop grand !' : '📉 Trop pétit !');
      score--;
      scoreCount.textContent = score;
    } else {
      displayMessage('💥 Vous avez perdu!');
      scoreCount.textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Commencer à déviner !!!');
  scoreCount.textContent = score;
  number.textContent = '?';
  guess.value = '';

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});