// Array com um numero fixo de elementos e podem ser varios tipos
// Podem ser passados em funcoes

// Example 1
let person: [string, string, number];
person = ['Pedro Martins', 'Backend Developer', 17]; // Correct Sintax
// person = [31, 'Pedro Martins', 'Backend Dev']; !Sintax Error!

console.log(person);

// Example 2
let person1: [name: string, role: string, age: number];
person1 = ['Pedro Martins', 'Backend Developer', 17];

console.log(person1[1]);

// Example 3
let fruitsList: [string, ...string[]] = ['Pineapple', 'Orange', 'Apple', 'Watermelon', 'Mango'];
console.log(...fruitsList);

// Example 4
let person2: [name: string, role: string, age: number];
person1 = ['Pedro Martins', 'Backend Developer', 17];
