/*Escribe un programa que use console.log para imprimir todos los números
del 1 al 100, con dos excepciones. Para los números divisibles por 3, imprime
"Fizz" en lugar del número, y para los números divisibles por 5 (y no por 3),
imprime "Buzz" en su lugar.
Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz
" para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o
"Buzz" para los números que son divisibles solo por uno de esos). */

let numero = 1;
while (numero <= 100) {
    if (numero % 3 == 0 && numero % 5 != 0) {
        console.log("Fizz");
    } else if (numero % 5 == 0 && numero % 3 != 0) {
        console.log("Buzz");
    }
    else if (numero % 3 == 0 && numero % 5 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log(numero);
    }
    numero++;
}