//Declaracion de variables
let numero1;
let numero2;
var numero3;
const numero4 = 12; //Constante: no se puede cambiar su valor. Se debe inicializar al declararla
let string;
let bool;
let float;

//Inicializacion de variables
numero1 = 5;
numero2 = 10;
numero3 = 15;
string = "Hola mundo";
bool = true;
float = 3.14;

//Operaciones
let suma = numero1 + numero2 + numero3 + numero4;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero3;
let division = numero3 / numero1;

//Imprimir resultados
console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicacion es: " + multiplicacion);
console.log("La division es: " + division);
console.log("El string es: " + string);
console.log("El bool es: " + bool);
console.log("El float es: " + float);

//Imprimir tipo de dato
console.log("El tipo de dato de la variable numero1 es: " + typeof numero1);
console.log("El tipo de dato de la variable string es: " + typeof string);
console.log("El tipo de dato de la variable bool es: " + typeof bool);
console.log("El tipo de dato de la variable float es: " + typeof float);
