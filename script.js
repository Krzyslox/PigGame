'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
let score0El = document.querySelector('#score--0');
const current0El = document.querySelector('#current--0');
const player1El = document.querySelector('.player--1');
let score1El = document.getElementById('score--1');
const current1El = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

//Rolling dice functionality
const diceRoll = () => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(diceRoll);
  return diceRoll;
};

const switchPlayer = () => {
  //jeśli active player = 0, przełącz na 1, w innym wypadku przełącz na 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  //changes player background
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnNew.addEventListener('click', () => {
  // Display dice
  dice.classList.remove('hidden');
});

btnRoll.addEventListener('click', () => {
  if (playing) {
    dice.classList.remove('hidden');
    //Generate random dice roll
    let roll = diceRoll();
    //Display dice
    dice.src = `dice-${roll}.png`;
    //Checked for rolled 1
    if (roll !== 1) {
      //Add dice roll to current score
      currentScore += roll;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      //jeśli active player = 0, przełącz na 1, w innym wypadku przełącz na 0
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. Add current score to active player score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    currentScore = 0;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;

    //Check if total score is 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
