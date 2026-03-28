# Technical Documentation

## Overview

This project is an interactive portfolio website built using HTML, CSS, and JavaScript.

The goal is to present personal information and projects while improving user interaction through dynamic features.

---

## Technologies Used

- HTML for structure
- CSS for styling and layout
- JavaScript for interactivity
- localStorage for saving user preferences

---

## Project Structure
assignment-2/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md

---

## Main Features Implementation

### 1. Welcome Overlay

- A popup appears when the page loads
- The user enters their name
- The greeting updates dynamically using JavaScript
- An error message appears if the input is empty

Key concepts:
- DOM selection
- Event listeners
- Input validation

---

### 2. Mode Switching

- A button switches between:
  - All
  - Professional
  - Creative

- Each project has a class:
  - professional
  - creative

- JavaScript shows or hides projects based on the selected mode

- The page theme changes using body classes:
    body.classList.add(“mode-professional”)

---

### 3. Dynamic Filtering

- Projects are filtered based on user interaction
- If no projects match, a message is displayed

---

### 4. Scroll Animations

- Elements appear when the user scrolls
- Implemented using JavaScript and CSS classes

Example: element.classList.add(“active”)

---

### 5. Favorite Feature

- Users can mark projects as favorites
- The state is saved using localStorage
- The selection remains after refreshing the page

---

### 6. Form Validation

- The contact form validates:
  - name
  - email
  - message

- Error messages appear for invalid input
- A success message appears when submission is valid

---

## Error Handling

- Empty input fields show clear error messages
- Invalid email format is detected
- If no projects match a filter, a message is shown

---

## Conclusion

This project improves on Assignment 1 by adding interactivity, dynamic behavior, and better user experience. It demonstrates the use of JavaScript to create a more engaging and functional web application.