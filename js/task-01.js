/*
Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в 
консоль текст заголовка элемента (тега <h2>) и количество элементов в 
категории (всех вложенных в него <li>).
Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

// const categories = document.querySelector("ul#categories");
// console.log("ul - categories", categories);
// console.log("ul - length - categories", categories.length);

// console.log("");

// const categoriesItems = categories.querySelectorAll("li.item");
// console.log("li - categoriesItems", categoriesItems);
// console.log("li - length - categoriesItems", categoriesItems.length);

// // console.log(`Number of categories: ${categoriesItems.length}`);

// categoriesItems.forEach((item) => {
//   const categoryName = item.querySelector("h2").textContent;
//   // console.log("categoryName", categoryName);
//   // console.log("categoryName", categoryName.length);

//   const categoryElements = item.querySelectorAll("li").length;

//   // console.log(`Category: ${categoryName}`);
//   // console.log(`Elements: ${categoryElements}`);
// });

const numbers = [-4, 0, 50, 6];

console.log(numbers);
console.log(...numbers);

function multiply(...args) {
  console.log(args); // массив всех аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
