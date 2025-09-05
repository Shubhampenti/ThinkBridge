# Session 4 – Debugging: DevTools & VS Code

This session demonstrates **JavaScript debugging** using **Chrome DevTools** and **VS Code** with a simple arithmetic example.

---

## Example Code

`event-demo.js`

```javascript
function calculateSum(arr) {
  let sum = 0;

  // ❌ Bug: Should be < arr.length, not <=
  for (let i = 0; i <= arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

// Run function
let numbers = [1, 2, 3, 4, 5];
let result = calculateSum(numbers);

console.log("The sum is: " + result); // Expected: 15, but gives NaN
index.html

html
Copy code
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Debugging Demo</title>
    <script src="event-demo.js"></script>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>


###  Debugging with Chrome DevTools
Open index.html in Chrome.

Press F12 → go to Sources tab → open event-demo.js.

Set a breakpoint on the line:


### Debugging with VS Code
Open project folder in VS Code.

Create a debug configuration (Run and Debug → select Node.js).

Set a breakpoint on sum = sum + arr[i];.

Press F5 to start debugging.


✅ Deliverables
Recorded video showing:

Debug session in Chrome DevTools (breakpoints, watch, call stack).

Debug session in VS Code (stepping through, watching variables).

Demonstration of the bug (NaN) and the fix (15).

📚 Resources
https://developer.chrome.com/docs/devtools/?utm_source=chatgpt.com

https://code.visualstudio.com/docs/debugtest/debugging

```
