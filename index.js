// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array\
 */
function getLength(numbers) {
  return numbers.length;
  // TODO
}


function getSum(numbers) {
  return
  // TODO
}


function getMean(numbers) { //Sum div by # of numbers
  return getSum(numbers) / getLength(numbers);

}


function getMin(numbers) { //math function and dots ?
  return Math.min(...numbers);
  
}

function getMax(numbers) {
  return Math.max(...numbers);
 
}


function getRange(numbers) { //diff between max & min
  return getMax(numbers) - getMin (numbers);
}



//USING FILTERS
function getEvens(numbers) {
     return numbers.filter(x => x % 2 === 0 );// TODO
}


function getOdds(numbers) {
    return number.filter(x => x % 2 !== 0)// TODO
}
