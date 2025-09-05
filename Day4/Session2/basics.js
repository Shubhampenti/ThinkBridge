/* 
==================================
🌟 JavaScript Basics
==================================
*/

// -------------------------------
// Step 1: Variables
// -------------------------------

// 'var' is function-scoped
var x = 5;

// 'let' is block-scoped
let y = 10;

// 'const' is a constant (cannot be reassigned)
const Name = "Shubham";

console.log("Variables ->", { x, y, Name });

// Swapping values without a temp variable (using array destructuring)
[x, y] = [y, x];
console.log("After swap ->", { x, y });

// Template string 
const string = `Hello, ${Name}. x is ${x} and y is ${y}.`;
console.log(string);


// -------------------------------
// Step 2: Strings
// -------------------------------

let text1 = "JavaScript";

// String length
console.log("Length of text1:", text1.length);

let city1 = "Pune ";
let city2 = "Mumbai";

// Concatenation
console.log("Concatenated:", city1.concat(city2));

let str = "Hello World";

// Change case
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

let word = "JavaScript";

// Slice (substring)
console.log("Slice(0,4):", word.slice(0, 4));
console.log("Slice from index 4:", word.slice(4));

let text2 = "Hello World";

// Find index of substring/character
console.log("Index of 'o':", text2.indexOf("o"));
console.log("Index of 'World':", text2.indexOf("World"));

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log('reverseString("hello") ->', reverseString("hello"));

// Count vowels in a string
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log('countVowels("Hello World") ->', countVowels("Hello World"));



// -------------------------------
// Step 3: Arrays
// -------------------------------

const numbers = [3, 1, 4, 1, 5];
console.log("Initial numbers ->", numbers);

// Add element at the end
numbers.push(9);
console.log("After push ->", numbers);

// Remove element from the end
const popped = numbers.pop();
console.log("Popped ->", popped, "Numbers now ->", numbers);

// Find first and last occurrence
const firstIndex = numbers.indexOf(2);
console.log(`First occurrence of 2 in ${numbers}: index ${firstIndex}`);

const lastIndex = numbers.lastIndexOf(2);
console.log(`Last occurrence of 2 in ${numbers}: index ${lastIndex}`);

// Check if array includes a value
let arr = [1, 2, 3];
console.log("Does array include 2?", arr.includes(2));

// Filter even numbers
let even = arr.filter((n) => n % 2 === 0);
console.log("Even numbers are:", even);

// Map → square each number
const squares = arr.map((n) => n * n);
console.log("Squares ->", squares);



// -------------------------------
// Step 4: Loops
// -------------------------------

let nums = [1, 2, 3, 4, 5];

// Using for...of
for (const n of nums) {
  console.log(`${n} doubled is ${n * 2}`);
}

// While loop
let count = 1;
while (count <= 5) {
  console.log("Count is:", count);
  count++;
}

// Do...while loop
let num = 0;
do {
  console.log("This runs at least once. num =", num);
  num++;
} while (num < 3);

// forEach loop
nums.forEach(function (n) {
  console.log("Number is:", n);
});



// -------------------------------
// Step 5: Conditionals
// -------------------------------

// Check even or odd
function checkEvenOdd(n) {
  if (n % 2 === 0) {
    return `${n} is Even`;
  } else {
    return `${n} is Odd`;
  }
}
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(10));

// Ternary operator
let age = 20;
let canVote = age >= 18 ? "Yes, you can vote" : "No, too young";
console.log("Voting eligibility:", canVote);

// Switch example → weekend or weekday
function dayType(day) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    default:
      return "Weekday";
  }
}
console.log("dayType('Monday') ->", dayType("Monday"));
console.log("dayType('Sunday') ->", dayType("Sunday"));

// Grading system
function grade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
console.log("grade(85) ->", grade(85));

// Switch example → weekday name
function weekdayName(n) {
  switch (n) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
}
console.log("weekdayName(3) ->", weekdayName(3));
