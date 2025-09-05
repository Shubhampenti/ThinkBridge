// 1) Function declaration
function welcome() {
  return "Hello!";
}

// Calling the function
console.log(welcome()); // Output: Hello!

// 2) Function expression
const square = function (n) {
  return n * n;
};
console.log("square(4) =", square(4)); // 16

// 3) Arrow functions
const add = (a, b) => a + b;
const isEven = (n) => n % 2 === 0;
console.log("add(3,4) =", add(3, 4)); // 7
console.log("isEven(4) =", isEven(4)); // true

// 4) Higher-order function
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log("doubled =", doubled); // [2,4,6,8]

// 5) Closure
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 6) Scope: var vs let
function scopeDemo() {
  // Using var
  for (var i = 0; i < 3; i++) {
    console.log("var i:", i); // 0, 1, 2
  }
  console.log("After loop with var:", i); // i is still accessible

  // Using let
  for (let j = 0; j < 3; j++) {
    console.log("let j:", j); // 0, 1, 2
  }
  // console.log(j); //  Error: j is not defined (block-scoped)
}

scopeDemo();
