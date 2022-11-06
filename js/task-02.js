/*
Напиши скрипт, який для кожного елемента
масиву ingredients:

Створить окремий елемент <li>. Обов'язково
використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий
вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію
у список ul#ingredients.
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients");
// const li = ingredients.length;
console.log('with for method:')
for (let i = 0; i < ingredients.length; i++) {
  const liIngredients = document.createElement('li');
  liIngredients.textContent = ingredients[i];
  liIngredients.class = 'item';
  ul.append(liIngredients);
  console.log(ul);
}
console.log('')
console.log('with forEach method:')
ingredients.forEach( function (ingredient, index) {
  const liIngredients = document.createElement('li');
  liIngredients.textContent = ingredients[index];
  liIngredients.class = 'item';
  ul.append(liIngredients);
  console.log(ul);
})