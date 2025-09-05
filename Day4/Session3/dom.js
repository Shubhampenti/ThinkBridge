// 1️ Select by ID → Click event
const textBtn = document.getElementById("textBtn");
const textMsg = document.getElementById("textMsg");
textBtn.addEventListener("click", () => {
  textMsg.textContent = "You clicked the button !!!!!!!!";
});

// 2️ Select by Class → Mouseover event
const colorBox = document.getElementsByClassName("colorBox")[0];
colorBox.addEventListener("mouseover", () => {
  colorBox.style.backgroundColor = "lightgreen";
});

// 3️ Select by querySelector → Keyup event
const inputField = document.querySelector("#nameInput");
inputField.addEventListener("keyup", () => {
  document.querySelector("#inputMsg").textContent =
    "You typed: " + inputField.value;
});

// 4️ Select by querySelector → Updating class
const styleBtn = document.querySelector("#styleBtn");
const styleText = document.querySelector("#styleText");
styleBtn.addEventListener("click", () => {
  styleText.classList.toggle("highlightText");
});

//5 submit event
const form = document.getElementById("subscribeForm");

// onsubmit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh
  const name = document.getElementById("username").value;
  alert("Thank you, " + name + "! Your form has been submitted ✅");
});
