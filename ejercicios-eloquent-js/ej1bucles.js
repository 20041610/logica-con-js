
/* Este código crea una piramide de letras en la que se muestra la primer letra de la palabra dada, en la primer impresión, y 
en las siguientes impresiones, se aumenta una letra mas, de manera que se va formando una pirámide hasta que ya no quedan letras.
 */
let palabra = "luciana";
primerLetra = palabra[0];//Tomo la primer letra de la palabra
for (let x = 0; x < palabra.length; x++) {
    console.log(primerLetra);//La imprimo
    primerLetra += palabra[x + 1];//Le agrego la letra siguiente
}