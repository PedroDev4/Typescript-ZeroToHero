"use strict";
let usersArray = [
    {
        name: "Pedro Martins",
        age: 17,
        address: "Belo Horizonte - MG",
        occupation: "Back-end Node Developer"
    },
    {
        name: "User 1",
        age: 20,
        address: "Address1",
        occupation: "Front end Developer"
    },
    {
        name: "User 2",
        age: 19,
        address: "Address 2",
        occupation: "Back-end Ruby Developer"
    },
    {
        name: "User 3",
        age: 24,
        address: "São Paulo - SP",
        occupation: "Full-Stack Developer"
    },
];
function getArray(users) {
    const objArray = [];
    users.forEach((obj) => {
        objArray.push(obj);
    });
    return objArray;
}
const objArrayReturned = getArray(usersArray);
console.log(objArrayReturned);
// Tuples
const pessoaObject = [
    {
        name: 'Pedro Martins',
        role: 'Full Stack Software Enginner at Jamyou',
        age: 17,
        isBillionare: true
    },
    "I'm an amazing developer!",
    17,
    true,
];
console.log(...pessoaObject);
