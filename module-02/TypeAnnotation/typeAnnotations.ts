
// ==> Variables [Type Annotations]
let nome: string = 'Pedro Martins';
console.log(nome);


// ==> Arrays [Type Annotations]
let animals: string[] = ['Elephant', 'Girafa', 'Dog', 'Cat', 'Bunny'];
console.log(animals);

// ==> Object [Type Annotations]

let car: {
    name: string,
    year: number,
    price: number,
}

car = {
    name: 'Audi R8',
    year: 2020,
    price: 200000
}

console.log(car);

// ==> Functions [Type Annotations]

function calculationProcess(num1: number, num2: number) {
    return num1 * num2;
}
console.log(calculationProcess(2, 4));