/*Escribe un programa que cree una cadena que represente un tablero de 8x8,
usando caracteres de salto de línea para separar las líneas. En cada posición
del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben
formar un tablero de ajedrez. */

let size = 8;
for (let i = 0; i < size; i++) {
    let linea = "";
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            linea += " ";
        } else {
            linea += "#";
        }
    }
    console.log(linea);
}
