/* El ejercicio se trata de formar una piramide centrada. La piramide debe contener espacios a la izquierda
de manera que se valla centrando. */

let piramidesx2 = (filas) => {
    for (let i = 0; i < filas; i++) {//For para colocar espacios y # en cada fila
        let linea = '';
        for (let j = 0; j < filas - i - 1; j++) {//For para imprimir espacios a la izquierda
            linea += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {//For para imprimir los # luego de los espacios
            linea += '#';
        }
        for (let z = 0; z < filas - i - 1; z++) {//For para imprimir espacios dobles para formar otra piramide
            linea += '  ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {//For para la otra piramide
            linea += '#';
        }

        console.log(linea);
    }

}

piramidesx2(6);