/*Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. 
The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever 
you are on vacation.
The function should return true if you are employed and not on vacation (because these are the circumstances under which 
you need to set an alarm). It should return false otherwise. */
// function setAlarm(employed, vacation) {
//     if (employed && !vacation) {
//         return true;
//     } else if (!employed && vacation) {
//         return false;
//     } else if (!employed && !vacation) {
//         return false;
//     } else if (employed && vacation) {
//         return false;
//     }
// }
// let result = setAlarm(true, true);
// console.log(result); 
function setAlarm(employed, vacation) {//Hace una comparacion entre employed y vacation para determinar si se debe activar la alarma o no
    // employed = true; vacation = false; // true
    return employed && !vacation;
}
let result = setAlarm(false, true);
console.log(result); 