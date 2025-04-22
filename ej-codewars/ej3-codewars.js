/*Escribir una funcion llamada canDrive que reciba dos parametros:
age para representar una edad
hasLicense para determinar si tiene licencia de conducir
Se debe devolver true si la persona tiene 18 años o mas y si tiene licencia de conducir. */

let canDrive = (age, hasLicense) => {
    return age >= 18 && hasLicense; //Devuelve true si la edad es mayor o igual a 18 y tiene licencia de conducir
}
console.log(canDrive(18, true)); // true
console.log(canDrive(17, true)); // false
console.log(canDrive(18, false)); // false
console.log(canDrive(17, false)); // false
