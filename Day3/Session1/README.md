## Emmet in VS Code

### What is Emmet?

Emmet is a productivity tool built into VS Code that lets you write HTML and CSS faster using shortcuts called _abbreviations_.  
Instead of typing full tags and properties, you type a short expression, hit **Tab**, and Emmet expands it into full code.

### Why use Emmet?

- **Saves time**: Write 10–20 lines of HTML in one abbreviation.
- **Reduces typos**: Less manual typing → fewer mistakes.
- **Improves workflow**: Lets you focus on structure, not boilerplate.
- **Built-in**: No extra extension needed in VS Code.

### How to use Emmet in VS Code

1. Open an **HTML** or **CSS** file.
2. Type an abbreviation (e.g., `ul>li*3>a{Link $}`).
3. Press **Tab** → it expands into full code.

**My Emmet Practice Gist**: [View here](https://gist.github.com/Shubhampenti/6b94ecd658c60a084715e1c3514135e5)

---

## Custom HTML Snippet in VS Code

### What is a Snippet?

A snippet in VS Code is a shortcut that expands into a larger block of code automatically.  
It saves time and avoids repetitive typing.

### Step 1: Add Snippet in `html.json`

Open VS Code → **Command Palette** (`Ctrl + Shift + P`) → Select **Preferences: Configure User Snippets** → choose **html.json**.

Add the following:

```json
{
  "Responsive Navbar Demo": {
    "prefix": "navdemo",
    "body": [
      "<!DOCTYPE html>",
      "<html lang=\"en\">",
      "<head>",
      "  <meta charset=\"UTF-8\">",
      "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "  <title>$1</title>",
      "</head>",
      "<body>",
      "  <h2>Responsive Navbar Snippet Output</h2>",
      "",
      "  <nav>",
      "    <ul>",
      "      <li><a href=\"#home\">Home</a></li>",
      "      <li><a href=\"#about\">About</a></li>",
      "      <li><a href=\"#services\">Services</a></li>",
      "      <li><a href=\"#contact\">Contact</a></li>",
      "    </ul>",
      "  </nav>",
      "",
      "  <header>",
      "    <h1>$2</h1>",
      "    <p>$3</p>",
      "  </header>",
      "",
      "  <main>",
      "    <section id=\"home\">",
      "      <h2>Home</h2>",
      "      <p>Welcome to the home section!</p>",
      "    </section>",
      "",
      "    <section id=\"about\">",
      "      <h2>About</h2>",
      "      <p>This section tells you about us.</p>",
      "    </section>",
      "",
      "    <section id=\"services\">",
      "      <h2>Services</h2>",
      "      <p>Here we describe the services offered.</p>",
      "    </section>",
      "",
      "    <section id=\"contact\">",
      "      <h2>Contact</h2>",
      "      <p>Get in touch with us through this section.</p>",
      "    </section>",
      "  </main>",
      "</body>",
      "</html>"
    ]
  }
}

###   Step 2: Use the Snippet
Open a new .html file.

Type navdemo (your prefix).

Press Tab → expands into full boilerplate:

✅ Benefits

Saves time writing boilerplate.

Ensures consistency across projects.

Easy to customize (add CSS/JS links).

###  Debugging in VS Code (JavaScript Example)
✨ What is Debugging?
Debugging is the process of finding and fixing errors (bugs) in your code.
In VS Code, the Debugger lets you:

Pause code execution,

Inspect variables,

Step through code line by line.

Example: debug-example.js
js
Copy code
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

## How to Debug
Create .vscode/launch.json with Node config:

json
Copy code
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Run Current JS File",
      "program": "${file}"
    }
  ]
}
Open debug-example.js.

Set breakpoints (click left of line numbers).

Press F5 → Debugger starts.

✅ This helps catch bugs early and understand code flow.

📖 Resources
https://docs.emmet.io/cheat-sheet/
https://code.visualstudio.com/docs/editing/userdefinedsnippets
https://code.visualstudio.com/docs/debugtest/debugging

```
