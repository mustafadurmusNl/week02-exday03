//day03
//level01
//1
// Declare variables and assign values
const firstName = 'John';
const lastName = 'Doe';
const country = 'United States';
const city = 'New York';
const age = 30;
const isMarried = true;
const year = 1990;

// Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false, because typeof '10' is 'string' and typeof 10 is 'number'

// Check if parseInt('9.8') is equal to 10
console.log(11111)
console.log(parseInt('9.8') === 10); // false, because parseInt('9.8') returns 9, and 9 is not equal to 10

// Boolean value is either true or false.

// Three JavaScript statements which provide truthy value:
console.log(Boolean(1)); // true
console.log(Boolean('Hello')); // true
console.log(Boolean([])); // true, an empty array is considered truthy

// Three JavaScript statements which provide falsy value:
console.log(Boolean(0)); // false
console.log(Boolean('')); // false, an empty string is considered falsy
console.log(Boolean(null)); // false
//5
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

// Find the length of 'python' and 'jargon' and make a falsy comparison statement
const pythonLength = 'python'.length;
const jargonLength = 'jargon'.length;

console.log(pythonLength < jargonLength); // fALSE
//6
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true

//7
// Create a new Date object to represent the current date and time
const now = new Date();

// What is the year today?
const yearNew = now.getFullYear();
console.log('Year today:', yearNew);  //'Year today: 2024

// What is the month today as a number? (Months are zero-indexed)
const month = now.getMonth() + 1; // Adding 1 to get the month as a number starting from 1
console.log('Month today:', month);

// What is the date today?
const date = now.getDate();
console.log('Date today:', date);

// What is the day today as a number? (Days are zero-indexed, starting from Sunday)
const day = now.getDay();
console.log('Day today:', day);

// What is the hours now?
const hours = now.getHours();
console.log('Hours now:', hours);

// What is the minutes now?
const minutes = now.getMinutes();
console.log('Minutes now:', minutes);

// Find out the number of seconds elapsed from January 1, 1970 to now
const secondsSince1970 = now.getTime() / 1000; // Converting milliseconds to seconds
console.log('Seconds elapsed since January 1, 1970:', secondsSince1970);

//level02
//ex01
// Prompt the user to enter the base of the triangle
const baseInput = prompt("Enter base:");

// Convert the input to a number
const base = parseFloat(baseInput);

// Prompt the user to enter the height of the triangle
const heightInput = prompt("Enter height:");

// Convert the input to a number
const height = parseFloat(heightInput);

// Calculate the area of the triangle
const area = 0.5 * base * height;

// Display the result
console.log(`the area is : ${area}`);
//ex02
// Prompt the user to enter side a of the triangle
const sideA = parseFloat(prompt("Enter side a:"));

// Prompt the user to enter side b of the triangle
const sideB = parseFloat(prompt("Enter side b:"));

// Prompt the user to enter side c of the triangle
const sideC = parseFloat(prompt("Enter side c:"));

// Calculate the perimeter of the triangle
const perimeter = sideA + sideB + sideC;

// Display the result
console.log("The perimeter of the triangle is:", perimeter);

//12
// Declare and initialize variables
let myAge = 250;
let yourAge = 25;

// Calculate the age difference
let ageDifference = myAge - yourAge;

// Display the age difference
console.log("I am " + ageDifference + " years older than you.");

//ex13
// Prompt the user to enter their birth year
const birthYear = parseInt(prompt("Enter birth year:"));

// Get the current year
const currentYear = new Date().getFullYear();

// Calculate the user's age
const ageN = currentYear - birthYear;

// Check if the user is 18 or older
if (ageN >= 18) {
    console.log("You are " + ageN + ". You are old enough to drive.");
} else {
    // Calculate the number of years the user needs to wait
    const yearsToWait = 18 - ageN;
    console.log("You are " + ageN + ". You will be allowed to drive after " + yearsToWait + " years.");
}
//ALTERNTIVELY
const ageM=parseInt(prompt("enter your age"));
log(typeof ageM);//number
if(ageM>=18){
    log("you are old enough to drive")
}else{
    const remainingYear=18-ageM;
    log(`you are left with ${remainingYear} years tp drive`)
}
