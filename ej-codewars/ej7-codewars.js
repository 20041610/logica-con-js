/*Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated 
with that grade. 

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	    'F'*/

//Function to get the average of three scores
const getScores = () => {
    let count = Number(prompt("How many scores do you wanna input?:  "));
    while (isNaN(count) || count <= 0) {
        count = Number(prompt("Error. Must be a positive integer. Try again: "));
    }
    let number = 0;
    let totalScore = 0;
    let arrayOfScores = [];
    for (let x = 0; x < count; x++) {
        number = Number(prompt(`Input the #${x + 1} score: `));
        while (isNaN(number) || number <= 0 || number > 100) {
            number = Number(prompt("Error. Must be an integer between 1 and 100. Input again: "));
        }
        totalScore += number;
        arrayOfScores[x] = number;
    }

    return totalScore / count, arrayOfScores;
}
//Function that returns the grade based on the average
const getGrade = (average, arrayOfScores) => {
    return average >= 90 ? `The average is ${average.toFixed(2)}. Grade: A. Min score: ${Math.min(...arrayOfScores)}` :
        average >= 80 ? `The average is ${average.toFixed(2)}. Grade: B` :
            average >= 70 ? `The average is ${average.toFixed(2)}. Grade: C` :
                average >= 60 ? `The average is ${average.toFixed(2)}. Grade: D` :
                    average < 60 ? `The average is ${average.toFixed(2)}. Grade: A` :
                        'Invalid average';




}

//Program starts here
const average = getScores();
const arrayOfScores = getScores();
console.log(getGrade(average, arrayOfScores));

