function crearContador() {
    let contador = 0;

    return function () {
        contador++;
        return contador;//retorna el contador para usarlo como valor
    };
}

const contar = crearContador(); // el entorno de 'contador' ya terminó
const contar2 = crearContador();
let valor = contar();//Acá ya se ejecuta contar(), asi que contador ya aumenta a 1
console.log(`Acá Valor vale: ${valor}`);

while (valor <= 5) {
    console.log(`Valor vale: ${valor}`);
    valor = contar();
}

console.log(contar2());
console.log(contar2());