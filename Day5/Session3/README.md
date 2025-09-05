# 📘 Session 3 – Functions, Scope & Objects

This session explains **core JavaScript concepts**: functions, scope, and objects.

---

##  Topics Covered
- Function types and their uses
- Higher-order functions
- Scope differences: `var` vs `let`
- Object literals and property handling

---

##  Key Concepts

### 🔹 Functions
- **Why we use them** → To group reusable code that performs a specific task.  
- **Types of functions**:  
  - **Declaration** → Defined with `function`, hoisted, can be used before definition.  
  - **Expression** → Assigned to a variable, not hoisted.  
  - **Arrow functions** → Shorter syntax, preserve `this` context.  

###  Higher-order Functions
- Functions that **take other functions as arguments** or **return functions**.  
- Useful for operations like `map`, `filter`, `reduce` in arrays.  

###  Scope
- **var** → Function-scoped, accessible outside blocks, can cause unexpected behavior.  
- **let/const** → Block-scoped, safer, accessible only inside the block.  

###  Objects
- **Object literal** → Easiest way to create an object using `{}`.  
- Can store **properties** (key-value pairs), **methods** (functions inside objects), and **nested structures** (arrays/objects).  
- Supports property addition, modification, and deletion.  

---

##  Deliverables
- `src/js/functions.js` → Examples of function types, scope, higher-order functions.  
- `src/js/objects.js` → Examples of object literals, property handling.  

---

##  Resources
- [MDN – Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)  
- [MDN – Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)  

---
