// Declarando tipos
type windowStates = string | number;
// Declarando um tipo com 'Generics'. Definindo que este tipo seja um array de objeto com o atributo 'name';
type objectWithNameArray = Array<{ name: string }>;

const computer: objectWithNameArray = [
    {
        name: "Gamer Computer",
    }
];

console.log(computer);