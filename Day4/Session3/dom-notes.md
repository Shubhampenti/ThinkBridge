# 📒 DOM & Events Notes

## 1. What is the DOM?

DOM (Document Object Model) represents the structure of a webpage as a tree of objects.

JavaScript can interact with the DOM to change content, styles, and structure dynamically.

## 2. Selecting Elements

We can select elements using different DOM methods:

getElementById("id") → selects a single element by its ID.

getElementsByClassName("class") → selects a collection of elements by class name.

querySelector("selector") → selects the first element matching a CSS selector.

querySelectorAll("selector") → selects all elements matching a CSS selector (returns a NodeList).

## 3. Listening to Events

Events let JavaScript respond to user actions:

click → when user clicks a button or element.

mouseover → when the mouse hovers over an element.

keyup → when a key is released in an input field.

submit → when a form is submitted.

We use element.addEventListener("event", callback) to listen for events.

## 4. Examples from Project
 ###  🔹 Click Event (Change Text)
   const textBtn = document.getElementById("textBtn");
   const textMsg = document.getElementById("textMsg");

textBtn.addEventListener("click", () => {
textMsg.textContent = "You clicked the button !!!!!!!!";
});

### 🔹 Mouseover Event (Change Color)
const colorBox = document.getElementsByClassName("colorBox")[0];

colorBox.addEventListener("mouseover", () => {
colorBox.style.backgroundColor = "lightgreen";
});

### 🔹 Keyup Event (Show Typed Input)
const inputField = document.querySelector("#nameInput");

inputField.addEventListener("keyup", () => {
document.querySelector("#inputMsg").textContent =
"You typed: " + inputField.value;
});

### 🔹 Toggle Class (Update Style)
const styleBtn = document.querySelector("#styleBtn");
const styleText = document.querySelector("#styleText");

styleBtn.addEventListener("click", () => {
styleText.classList.toggle("highlightText");
});

### 🔹 Form Submit Event (Show Alert)
const form = document.getElementById("subscribeForm");

form.addEventListener("submit", function (event) {
event.preventDefault(); // stop page refresh
          const name = document.getElementById("username").value;
alert("Thank you, " + name + "! Your form has been submitted ✅");
});

## 5. Updating Text, Styles & Classes

Change text: element.textContent = "New text";

Change style: element.style.backgroundColor = "blue";

Toggle class: element.classList.toggle("highlightText");

## 6. CSS Styling

Buttons and input fields styled with padding, rounded corners, and hover effects.

.colorBox changes background color on hover.

.highlightText applies bold white text on a purple background.

## 📚 Resources

Introduction to the DOM – https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

DOM Events – https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
