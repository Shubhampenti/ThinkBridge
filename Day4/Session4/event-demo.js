function calculateSum(arr) {
  let sum = 0;

  //  Bug: Should be < arr.length, not <=
  for (let i = 0; i <= arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

// Run function
let numbers = [1, 2, 3, 4, 5];
let result = calculateSum(numbers);

console.log("The sum is: " + result); // Expected: 15, but gives NaN
