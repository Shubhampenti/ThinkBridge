// Keyword Data: [keyword, description, example]
const keywords = {
  html: {
    Meta: [
      ["<!DOCTYPE>", "Defines document type.", "<!DOCTYPE html>"],
      [
        "<meta>",
        "Metadata like charset, viewport, SEO.",
        '<meta charset="UTF-8">',
      ],
      ["<title>", "Sets page title in browser tab.", "<title>My Page</title>"],
    ],
    Styling: [
      ["<style>", "Internal CSS styling.", "<style>body {color: red;}</style>"],
      [
        "<link>",
        "External CSS linking.",
        '<link rel="stylesheet" href="style.css">',
      ],
    ],
    Document: [
      ["<html>", "Root element of the page.", "<html lang='en'>...</html>"],
      [
        "<head>",
        "Contains metadata, title, and links.",
        "<head><title>Site</title></head>",
      ],
      ["<body>", "Visible content container.", "<body><h1>Hello</h1></body>"],
    ],
    Text: [
      [
        "<h1>-<h6>",
        "Headings from large to small.",
        "<h1>Main</h1><h3>Sub</h3>",
      ],
      ["<p>", "Paragraph of text.", "<p>This is a paragraph.</p>"],
      ["<span>", "Inline text container.", "<span>Highlight</span>"],
      ["<br>", "Line break.", "Hello<br>World"],
      ["<hr>", "Horizontal line.", "<hr>"],
    ],
    Links: [
      [
        "<a>",
        "Hyperlink to other resources.",
        '<a href="https://example.com">Click</a>',
      ],
      ["<nav>", "Navigation section.", "<nav><a href='#'>Home</a></nav>"],
    ],
    "Images & Media": [
      ["<img>", "Embeds an image.", '<img src="cat.jpg" alt="Cat">'],
      [
        "<figure>",
        "Groups media and captions.",
        "<figure><img src='pic.png'><figcaption>Caption</figcaption></figure>",
      ],
      [
        "<figcaption>",
        "Caption for figure.",
        "<figcaption>Beautiful Sunset</figcaption>",
      ],
      [
        "<video>",
        "Embeds video file.",
        '<video controls src="movie.mp4"></video>',
      ],
      [
        "<audio>",
        "Embeds audio file.",
        '<audio controls src="song.mp3"></audio>',
      ],
    ],
    Forms: [
      ["<form>", "Defines a form.", '<form action="/submit"></form>'],
      [
        "<input>",
        "User input field.",
        '<input type="text" placeholder="Name">',
      ],
      ["<label>", "Label for input.", '<label for="name">Name:</label>'],
      ["<button>", "Clickable button.", "<button>Submit</button>"],
      [
        "<select>",
        "Dropdown list.",
        "<select><option>A</option><option>B</option></select>",
      ],
    ],
    Tables: [
      ["<table>", "Defines a table.", "<table><tr><td>Cell</td></tr></table>"],
      ["<tr>", "Table row.", "<tr><td>Row 1</td></tr>"],
      ["<td>", "Table cell for data.", "<td>Data</td>"],
      ["<th>", "Table header cell.", "<th>Header</th>"],
      ["<caption>", "Table caption.", "<caption>My Table</caption>"],
    ],
  },

  css: {
    Selectors: [
      ["class", "Selects elements with class.", ".box { color: red; }"],
      ["id", "Selects element by ID.", "#title { font-size: 20px; }"],
      ["element", "Selects all elements of type.", "p { color: blue; }"],
      ["*", "Universal selector.", "* { margin: 0; }"],
    ],
    "Box Model": [
      ["margin", "Outer spacing.", "div { margin: 10px; }"],
      ["padding", "Inner spacing.", "div { padding: 5px; }"],
      ["border", "Element border.", "div { border: 1px solid black; }"],
      ["width", "Element width.", "div { width: 200px; }"],
      ["height", "Element height.", "div { height: 100px; }"],
    ],
    Typography: [
      ["font-size", "Size of text.", "p { font-size: 16px; }"],
      ["font-family", "Typeface of text.", "p { font-family: Arial; }"],
      ["font-weight", "Boldness of text.", "p { font-weight: bold; }"],
      ["line-height", "Space between lines.", "p { line-height: 1.5; }"],
      ["text-align", "Text alignment.", "h1 { text-align: center; }"],
    ],
    Colors: [
      ["color", "Text color.", "p { color: green; }"],
      ["background", "Background color/image.", "div { background: yellow; }"],
      ["opacity", "Transparency of element.", "img { opacity: 0.5; }"],
      [
        "gradient",
        "Color transition effect.",
        "div { background: linear-gradient(red, blue); }",
      ],
    ],
    Layout: [
      ["display", "Layout type (block, flex, grid).", "div { display: flex; }"],
      [
        "position",
        "Positioning type.",
        "div { position: absolute; top: 10px; }",
      ],
      ["float", "Aligns elements left or right.", "img { float: right; }"],
      ["flex", "Flexbox layout.", "div { display: flex; }"],
      [
        "grid",
        "Grid layout.",
        "div { display: grid; grid-template-columns: 1fr 1fr; }",
      ],
    ],
    Animation: [
      [
        "transition",
        "Smooth property changes.",
        "div { transition: all 0.3s; }",
      ],
      [
        "animation",
        "Keyframe animation.",
        "@keyframes move {from {left:0;} to {left:100px;}}",
      ],
      [
        "transform",
        "Rotate/scale elements.",
        "div { transform: rotate(45deg); }",
      ],
    ],
    Responsive: [
      [
        "@media",
        "Applies rules by screen size.",
        "@media (max-width:600px){p{font-size:12px;}}",
      ],
    ],
  },

  js: {
    Variables: [
      ["var", "Declares variables (function scope).", "var x = 5;"],
      ["let", "Block-scoped variable.", "let y = 10;"],
      ["const", "Constant variable.", "const pi = 3.14;"],
    ],
    "Control Flow": [
      ["if", "Conditional execution.", "if(x>5){console.log('Hi');}"],
      ["else", "Alternative branch.", "if(x>5){} else {console.log('No');}"],
      [
        "switch",
        "Multiple case matching.",
        "switch(a){case 1:break;default:break;}",
      ],
    ],
    Loops: [
      ["for", "Standard loop.", "for(let i=0;i<5;i++){console.log(i);}"],
      ["while", "Loop while condition true.", "while(x<5){x++;}"],
      ["do...while", "Executes once before checking.", "do{x++;}while(x<5);"],
      ["for...in", "Loops object keys.", "for(let k in obj){console.log(k);}"],
      [
        "for...of",
        "Loops iterable values.",
        "for(let v of arr){console.log(v);}",
      ],
    ],
    Functions: [
      ["function", "Defines a function.", "function greet(){return 'Hi';}"],
      ["return", "Exits function with value.", "return x+y;"],
      ["=>", "Arrow function syntax.", "const add=(a,b)=>a+b;"],
    ],
    DOM: [
      ["document", "Represents webpage DOM.", "document.title"],
      [
        "getElementById",
        "Selects element by ID.",
        "document.getElementById('id')",
      ],
      [
        "querySelector",
        "Selects first matching element.",
        "document.querySelector('.class')",
      ],
      [
        "innerHTML",
        "Reads/writes HTML content.",
        "el.innerHTML='<p>Hello</p>';",
      ],
      ["style", "Changes CSS styles.", "el.style.color='red';"],
    ],
    Events: [
      [
        "onclick",
        "Triggered on mouse click.",
        "<button onclick='alert(1)'>Click</button>",
      ],
      [
        "addEventListener",
        "Attaches event listener.",
        "el.addEventListener('click',()=>{});",
      ],
    ],
    "Objects & Arrays": [
      ["Object", "Key-value pairs.", "let obj={a:1,b:2};"],
      ["Array", "List of ordered items.", "let arr=[1,2,3];"],
      ["JSON", "Data format for APIs.", "let json=JSON.stringify({a:1});"],
    ],
    "ES6+": [
      ["class", "Defines a class.", "class Car {constructor(){}}"],
      ["import", "Imports modules.", "import x from './file.js'"],
      ["export", "Exports modules.", "export default function(){}"],
      [
        "async/await",
        "Handles async code.",
        "async function get(){await fetch(url);}",
      ],
    ],
  },
};

// Render function
function renderSection(id, data) {
  const container = document.querySelector(`#${id} .content`);
  for (let group in data) {
    const heading = document.createElement("h3");
    heading.textContent = group;
    container.appendChild(heading);

    data[group].forEach(([keyword, desc, example]) => {
      const div = document.createElement("div");
      div.className = "keyword";

      div.innerHTML = `
      <strong><code>${escapeHTML(keyword)}</code></strong>
      <div class="description">${desc}</div>
      ${example ? `<button class="example-btn">Show Example</button>` : ""}
      ${
        example
          ? `<pre class="example"><code>${escapeHTML(example)}</code></pre>`
          : ""
      }
    `;

      // Toggle button
      const btn = div.querySelector(".example-btn");
      if (btn) {
        btn.addEventListener("click", () => {
          const ex = div.querySelector(".example");
          if (ex.style.display === "block") {
            ex.style.display = "none";
            btn.textContent = "Show Example";
          } else {
            ex.style.display = "block";
            btn.textContent = "Hide Example";
          }
        });
      }

      container.appendChild(div);
    }); // ✅ closes forEach
  } // ✅ closes for loop
} // ✅ closes renderSection function

// Render all
renderSection("html-section", keywords.html);
renderSection("css-section", keywords.css);
renderSection("js-section", keywords.js);

// Search filter
document.getElementById("search").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".keyword").forEach((k) => {
    k.style.display = k.textContent.toLowerCase().includes(term)
      ? "flex"
      : "none";
  });
});

// Theme switcher
document.getElementById("themeSelector").addEventListener("change", (e) => {
  document.body.className = e.target.value;
});

// Language filter
document.querySelectorAll(".filter-buttons button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    if (lang === "all") {
      document.querySelectorAll("section").forEach((sec) => {
        sec.style.display = "block";
      });
    } else {
      document.querySelectorAll("section").forEach((sec) => {
        sec.style.display = sec.id.includes(lang) ? "block" : "none";
      });
    }
  });
});
