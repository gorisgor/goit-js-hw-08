// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


const categoriesEl = document.querySelectorAll(".item");
const numberOfCategories = categoriesEl.length;
console.log("Number of categories:", numberOfCategories);

const titles = categoriesEl.forEach((category)=>{
    const title= category.querySelector('h2');
    console.log("Category:", title.textContent);
    const elements = category.querySelectorAll('li');
    console.log("Elements:", elements.length);
});












