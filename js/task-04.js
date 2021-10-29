"use strict"
const counterValue = document.querySelector('#value');
const btnPlusRef = document.querySelector('[data-action="increment"]');
const btnMinusRef = document.querySelector('[data-action="decrement"]');

btnPlusRef.addEventListener('click', onClickIncrement);
btnMinusRef.addEventListener('click', onClickDecrement);

let total = 0;
function onClickIncrement() {
  total += 1;
  return counterValue.textContent = total;
};

function onClickDecrement() {
  total -= 1;
  return counterValue.textContent = total;
};