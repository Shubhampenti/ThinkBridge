function multiply(a, b) {
  return a * b; 
}

function add(a, b) {
  return a + b; 
}

let x = 5;
let y = "3"; 
let resultMultiply = multiply(x, y);
let resultAdd = add(x, y);

console.log("x:", x);
console.log("y:", y);
console.log("Result of multiply:", resultMultiply);
console.log("Result of add:", resultAdd);


let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("Sum of array:", sum);
