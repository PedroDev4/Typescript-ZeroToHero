

// ==> Examples: number 
let num1: number = 23.9;
let num2: number = 0x78cf;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Number - Ponto Flutuante: ', num1);
console.log('Number - Hexadecimal: ', num2);
console.log('Number - Otcal: ', num3);
console.log('Number - Binary: ', num4);

// ==> Examples: bigint

let big1: bigint = 8328372877317328328323n;
let big2: bigint = 0b1000000000000100000100000100n;
let big3: bigint = 0x200000000000000003n;
let big4: bigint = 0o4000000000000000003n;

console.log('BigInt...', big1);
console.log('BigInt - Hexadecimal: ', big2);
console.log('BigInt - Otcal: ', big3);
console.log('BigInt - Binary: ', big4);