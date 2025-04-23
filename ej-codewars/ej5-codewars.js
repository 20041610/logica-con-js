/*
Fake binary

Dada una cadena de números, convierte cada dígito menor que 5 en 0 y cada dígito mayor o igual a 5 en 1.
Retorna la nueva cadena.
La cadena no puede estar vacía.


*/

const fakeBin = string => {
    let result = '';
    if (string == '') {
        result = 'String Vacio';
    } else {
        for (let x = 0; x < string.length; x++) {
            (result += (Number(string[x]) >= 5 ? '1' : '0'));
        }

    }
    return result;
}
console.log(fakeBin("45542981"));