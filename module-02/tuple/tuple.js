"use strict";
// Array com um numero fixo de elementos e podem ser varios tipos
// Podem ser passados em funcoes
// Example 1
let person;
person = ['Pedro Martins', 'Backend Developer', 17]; // Correct Sintax
// person = [31, 'Pedro Martins', 'Backend Dev']; !Sintax Error!
console.log(person);
// Example 2
let person1;
person1 = ['Pedro Martins', 'Backend Developer', 17];
console.log(person1[1]);
// Example 3 - Spread Operator usado para "dizer" que além do primeiro item, todos os outros itens serão do tipo string
let fruitsList = ['Pineapple', 'Orange', 'Apple', 'Watermelon', 'Mango'];
console.log(...fruitsList); // Output dos elementos 
// Example 4
let person2;
person2 = ['Pedro Martins', 40, 'Feira dos produtores'];
// Example 5 - Lista Heterogenea de Tupla:
// Utilizando os elementos de outra tuple na tupla abaixo
let objects = [5, true, ...fruitsList];
console.log(objects);
// Example 6 - Tuples in functions
function listPeople(names, ages) {
    return [...names, ...ages]; // Retornando em tupla os dados do primeiro parametro(array de string) + os dados do segundo parametro(array de number)
}
let result = listPeople(['Pedro', 'Software Engineer'], [17, 1]);
console.log(result);
function createPerson(...nome) {
    return [...nome];
}
console.log(createPerson('Software Engineer', true));
console.log(createPerson('Pedro', 'Martins'));
