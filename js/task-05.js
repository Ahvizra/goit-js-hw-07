const inRef = document.querySelector('#name-input');
const outRef = document.querySelector('#name-output');

inRef.addEventListener('input', onInput);

function onInput(event) {
  if (event.currentTarget.value === '') {
    return outRef.textContent = 'незнакомец';
  }
  outRef.textContent = event.currentTarget.value;
}