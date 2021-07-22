const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridients = document.querySelector('#ingredients')
const elem = []

ingredients.map(ingridient => {
    const elemLi = document.createElement('li')
    elemLi.textContent = ingridient
    elem.push(elemLi)
})
ingridients.append(...elem)