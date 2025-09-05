# Session 3 — CSS Fundamentals: Selectors, Box Model, Cascade

This session demonstrates the core concepts of **CSS selectors, specificity, inheritance, and the box model**.  
It includes a simple webpage (`index.html` + `style.css`) along with DevTools screenshots to visualize how the box model works before and after applying margins, padding, and borders.

---

## Tasks

- Experiment with **specificities** and **inheritance**.
- Visualize the **box model** using DevTools.
- Create `style.css` demonstrating **selectors** and **box model** with comments.
- Capture **before/after screenshots** of the DevTools box model.

---

## Output

- `index.html` — demo HTML file :contentReference[oaicite:0]{index=0}
- `style.css` — CSS with selectors, box model styles, and comments :contentReference[oaicite:1]{index=1}
- `boxA-Before.png` — DevTools screenshot of the box model with all values = 0.
- `boxA-After.png` — DevTools screenshot of the box model with margin, padding, and border applied.

---

## Features Implemented

### 1. CSS Selectors

- **Class selector** → `.intro { color: green; }`
- **ID selector** → `#unique { color: blue; }`
- **Attribute selector** → `a[target="_blank"] { color: orange; }`

### 2. Box Model Demonstration

- **Before (all 0)**
  ```css
  .zero {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: content-box;
  }
  ```

Box A — Before

All properties set to 0.

Box A — After

With margin = 20px, padding = 20px, border = 5px.

### Resources

MDN — [CSS First Steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics?utm_source=chatgpt.com)

MDN — [The Box Model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model?utm_source=chatgpt.com)
