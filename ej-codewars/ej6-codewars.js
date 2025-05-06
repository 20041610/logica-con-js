/* Sum arrays
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be 
negative or non-integer. 
If the array does not contain any numbers then you should return 0.
*/

const sum = arrayOfNumbers => {
    let total = 0;
    if (arrayOfNumbers.length === 0) {
        return "empty array";
    } else {
        for (let x = 0; x < arrayOfNumbers.length; x++) {
            total += arrayOfNumbers[x];
        }
    }
    return total;

}

console.log(sum([6, 7, 9]));