# Session 2 – HTML Forms + Accessibility Essentials

##  Overview

This assignment focuses on building an accessible signup form using only **HTML** (with minimal CSS for readability).  
The goal is to practice creating forms with **semantic markup**, **validation attributes**, and **basic ARIA support** to ensure accessibility and keyboard navigability.

##  Files

- `index.html` → Accessible signup form with proper labels, fieldsets, required attributes, ARIA, and validation.
- `lighthouse-accessibility-report.html` → Lighthouse accessibility audit export.

##  Features Implemented

- **Semantic HTML5** form structure using:
  - `<fieldset>` and `<legend>` for grouping related fields.
  - `<label>` linked with `for` attributes for every input.
- **Validation attributes**:
  - `required`, `minlength`, `pattern`, `type`.
- **Accessibility enhancements**:
  - `aria-describedby` to provide extra help text for phone number input.
  - Proper use of radio buttons grouped by `name`.
- **Keyboard navigability**:  
  All form elements are reachable and operable via keyboard (Tab, Enter, Space).

##  How to Run

1. Open `index.html` in your browser.
2. Try filling the form with different inputs to see built-in validation.
3. Use keyboard only (Tab/Shift+Tab) to check accessibility.
4. Screen readers will announce extra descriptions (e.g., phone number format).

##  Accessibility Testing

- Lighthouse audit was run in Chrome DevTools.
- Report saved as `lighthouse-accessibility-report.html`.
- Accessibility score: **100/100** (if done correctly).

##  Resources

- [MDN – Web forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)
- [MDN – Accessibility basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [MDN – ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

---

###  Deliverables Completed:

- Accessible `index.html`
- Lighthouse accessibility report
