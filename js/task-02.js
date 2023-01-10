const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArr = ingredients
.map((el) => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = el;
  ingredientsItem.classList.add('item');

  return `<li>${el}</li>`
})
.join(' ');


const allIngredients = document.createElement('ul');
allIngredients.id = "ingredients";
allIngredients.append(ingredientsArr);



console.log(allIngredients);