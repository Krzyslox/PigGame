'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');
const current0El = document.querySelector('#current--0');
const player1El = document.querySelector('.player--1');
const score1El = document.getElementById('score--1');
const current1El = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = scores[0];
score1El.textContent = scores[1];
dice.classList.add('hidden');

//Rolling dice functionality
const diceRoll = () => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(diceRoll);
  return diceRoll;
};

btnNew.addEventListener('click', () => {
  // Display dice
  dice.classList.remove('hidden');
});

btnRoll.addEventListener('click', () => {
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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //jeśli active player = 0, przełącz na 1, w innym wypadku przełącz na 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
