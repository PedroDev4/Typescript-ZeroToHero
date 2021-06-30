"use strict";
// Fruits Collections
let fruits;
fruits = ['pinneaple', 'orange', 'Apple', 'watermelon', 'mango'];
console.log(fruits[2]);
console.log(fruits.length);
let foods = ['Pizza', 'Hamburguer', 'Sushi'];
foods.push('Strogonoff');
console.log(foods);
let listaNumbers = [0, 1, 2, 3, 4, 5];
// Spread Operator
listaNumbers = [...listaNumbers, 6, 7, 8, 9, 10];
console.log(listaNumbers);
let languages = ['Javascript', 'Python', 'Ruby'];
function languagesFunction(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        const element = linguagens[i];
        console.log(element);
    }
}
console.log(languagesFunction(languages));
