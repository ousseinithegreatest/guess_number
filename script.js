'use strict';

const MIN = 1;
const MAX = 20;

let score = 20;
let highscore = 0;

const check = document.querySelector('.check');
const number = document.querySelector('.number');
const highscoreCount = document.querySelector('.highscore');
const scoreCount = document.querySelector('.score');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const level = document.querySelector('.level');
level.textContent = `(Entre ${MIN} et ${MAX})`;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const colorBackground = (color) => {
  body.style.backgroundColor = color;
}

const numberWidth = (width) => {
  number.style.width = width;
}

let randomNumber = (min, max) => Math.trunc(Math.random() * max) + min;
let secretNumber = randomNumber(MIN, MAX);

check.addEventListener('click', () => {
  const guessToNumber = Number(guess.value);

  if (!guessToNumber) {
    displayMessage('⭕ Pas de nombre !');

  } else if (guessToNumber === secretNumber) {

    displayMessage('🎉 Bravo, vous avez gagné !');
    number.textContent = secretNumber;

    colorBackground('#60b347');
    numberWidth('30rem');

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
      displayMessage('😔 Vous avez perdu !');
      scoreCount.textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  score = 20;
  secretNumber = randomNumber(MIN, MAX);
  displayMessage('Commencer à déviner !');
  scoreCount.textContent = score;
  number.textContent = '?';
  guess.value = '';
  colorBackground('#222');
  numberWidth('15rem');
});