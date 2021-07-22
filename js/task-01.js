const firstRef = document.getElementById('categories');
const item = Array.from(firstRef.querySelectorAll('.item'));
console.log(`В списке ${item.length} категории.`)

const getCategories = (cat) => {
  cat.forEach(element => 
    console.log(`
    Категория: ${element.firstElementChild.textContent}
    Количество элементов: ${element.lastElementChild.children.length}`))
}
getCategories(item)
