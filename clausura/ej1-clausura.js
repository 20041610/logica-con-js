const clousure = (value) => { return () => value; };

let clousure1 = clousure(58);
let clousure2 = clousure(790);
console.log(`Clousure 1: ${clousure1() + 2} || Clousure 2: ${clousure2() + 10}`);
console.log(`Clousure 1: ${clousure1()}`);

const sum = (a, b) => a + b;
let sum1 = sum(7, 8);
let sum2 = sum(33, 43);
console.log(sum1);
console.log(sum2);

const minus = (number) => {
    number++;
    console.log(number);
};
let n1 = minus(112);
let n2 = minus(129);

