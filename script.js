'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const current0El = document.querySelector('#current--0');
const score1El = document.getElementById('score--1');
const current1El = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

//Rolling dice functionality
const diceRoll = () => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(diceRoll);
  return diceRoll;
};

score0El.textContent = '0';
score1El.textContent = '0';
dice.classList.add('hidden');

btnNew.addEventListener('click', () => {
  // Display dice
  dice.classList.remove('hidden');
});

btnRoll.addEventListener('click', () => {
  //Generate random dice roll
  let roll = diceRoll();
  //Display dice
  dice.src = `dice-${roll}.png`;
  //Checked for rolled 1
  if (roll !== 1) {
    currentScore += roll;
    current0El.textContent = currentScore;
  } else {
  }
});
