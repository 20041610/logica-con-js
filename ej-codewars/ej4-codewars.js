// Grasshopper - Personalized Message


/*Crear una funcion que devuelva un saludo personalizado. Esta función toma dos param:
name: para un primer nombre
owner: para un segundo nombre
Si ambos son iguales la funcion debe devolver "Hello Boss", de otra forma, debe devolver 
"Hello Guest". */

const greet = (name, owner) => name === owner ? "Hello Boss" : "Hello Guest";/*Funcion flecha. Recibe dos parámetros, los compara
y si son iguales devuelve un mensaje, de lo contrario, devuelve otro. */

console.log(greet("Pepe", "Daniel")); // "Hello Boss"
console.log(greet("Daniel", "Juan")); // "Hello Guest"