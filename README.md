# 🧮 Mini Calculator

A clean, fully functional **calculator** built with vanilla JavaScript. Supports chained operations, decimal input, and division-by-zero protection — all without a single library or framework.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🚀 Live Demo

> 🔗 [Try it →](https://adrihamzallari.github.io/Calculator) *(deploy to GitHub Pages and update this link)*

---

## ✨ Features

- ➕➖✖️➗ **All four operations** — addition, subtraction, multiplication, division
- 🔗 **Chained operations** — press an operator without hitting `=` to keep calculating (e.g. `3 + 5 * 2`)
- 🔢 **Decimal support** — enter float numbers with `.`, duplicate dot presses are blocked
- 🚫 **Division by zero protection** — shows `Error` instead of crashing
- 🔄 **Smart display reset** — display clears automatically when you start a new number after an operator
- 🧹 **Clear button** — resets everything back to `0` in one click
- 📱 **Responsive** — works on mobile and desktop

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5 | Button layout using `data-value` attributes |
| CSS3 | Calculator styling and layout |
| JavaScript (ES6) | All logic — input handling, chaining, calculation |

No libraries. No frameworks. Zero dependencies.

---

## 📂 Project Structure

```
Calculator/
├── index.html    # Button grid with data-value attributes, links styles + script
├── styles.css    # Calculator appearance and layout
└── script.js     # All calculator logic
```

---

## 🧠 How It Works

```
User clicks a button
  → data-value attribute is read
  → buttonHandel(value) is called

buttonHandel() routes by input type:
  → Number / '.'  → appends to display (blocks duplicate dots, handles leading zero)
  → Operator      → saves current display to previousValue, sets operator, flags resetDisplay
  → '='           → calls calculate(previousValue, display, operator), shows result
  → 'clear'       → resets display, previousValue, operator, resetDisplay

Chained operations:
  → If operator pressed again before '=',
    calculate() runs immediately with the stored values,
    result becomes the new previousValue

calculate(num1, num2, operator):
  → parses both values with parseFloat()
  → switch statement handles +, -, *, /
  → division by zero returns 'Error'
```

Key pieces in `script.js`:

| Variable / Function | Role |
|---------------------|------|
| `previousValue` | Stores the first operand for chained calculations |
| `operator` | Stores the pending operator (`+`, `-`, `*`, `/`) |
| `resetDisplay` | Flag that tells the next digit input to clear the screen first |
| `buttonHandel(value)` | Main router — handles all button types |
| `calculate(num1, num2, op)` | Pure function — takes two numbers and an operator, returns result |

---

## 🏃 Getting Started

No installation needed.

```bash
# Clone the repo
git clone https://github.com/AdriHamzallari/Calculator.git

# Open in your browser
cd Calculator
open index.html
```

Or [download the ZIP](https://github.com/AdriHamzallari/Calculator/archive/refs/heads/main.zip) and open `index.html` directly.

---

## 💡 What I Learned

- Using **`data-value` attributes** to handle all buttons with a single event listener
- Managing **calculator state** across multiple variables (`previousValue`, `operator`, `resetDisplay`)
- Implementing **chained operations** without requiring `=` between each step
- Preventing **duplicate decimal points** with `includes('.')` check
- Writing a **pure `calculate()` function** separated from display logic
- Handling **edge cases** like division by zero and leading zeros

---

## 🗺️ Possible Improvements

- [ ] Add **keyboard support** — type numbers and operators directly
- [ ] Show the **full expression** (e.g. `12 + 5 =`) above the result
- [ ] Add a **backspace button** to delete the last digit
- [ ] Handle very long results with **toFixed()** or scientific notation
- [ ] Add **percentage (%)** operator

---

## 👤 Author

**Adri Hamzallari**
- GitHub: [@AdriHamzallari](https://github.com/AdriHamzallari)
- LinkedIn: [your-linkedin-url](https://linkedin.com)
- Location: Tirana, Albania 🇦🇱

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> *Part of my frontend development portfolio — built with pure HTML, CSS, and JavaScript.*
