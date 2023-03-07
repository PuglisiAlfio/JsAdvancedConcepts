const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = (value) => console.log(value);

let primaSomma = sum(2, 4);
let secondaSomma = sum(5, 2);
let moltiplicazione = multiply(primaSomma, secondaSomma);
let sottrazione = subtract(moltiplicazione, 2);
let divisione = divide(sottrazione, 5);

// console.log(primaSomma);
// console.log(secondaSomma);
// console.log(moltiplicazione);
// console.log(sottrazione);

log(divisione);