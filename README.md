# Playwright 2x - Learning Workspace

Welcome to the **Playwright_2x** repository! This is a dedicated learning workspace designed to master [Playwright](https://playwright.dev/) — a powerful end-to-end testing framework for modern web applications. This repository is structured in a chapter-wise format to build concepts progressively, starting from JavaScript fundamentals to advanced Playwright automation topics.

> **Instructor:** The Testing Academy  
> **Focus:** Playwright 2.x with JavaScript  
> **Platform:** Windows / VS Code

---

## Table of Contents

- [Project Overview](#project-overview)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Chapter Breakdown](#chapter-breakdown)
- [VS Code Shortcuts](#vs-code-shortcuts)
- [How to Run Examples](#how-to-run-examples)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This repository serves as a companion to **The Testing Academy's Playwright 2.x course**. It contains hands-on code examples, exercises, and reference materials that align with the curriculum. Whether you are a beginner in test automation or transitioning from Selenium to Playwright, this workspace provides the foundational knowledge and practical examples needed to write robust, reliable, and maintainable browser automation tests.

**Key Goals:**
- Understand core JavaScript concepts required for Playwright.
- Learn Playwright's architecture, locators, and actions.
- Implement best practices for test design and reporting.
- Gain proficiency in debugging and troubleshooting test failures.

---

## Repository Structure

```
Playwright_2x/
├── Chapter_01_Basics/
│   ├── 01_Basics.js
│   └── README.md
├── Chapter_02_JavaScript_concept/
│   ├── 02_Keywords_Identifier_Literals.js
│   ├── 03_Var_BasicConcept.js
│   ├── 04_Functions_Basic_Concept.js
│   ├── 05_Operator.js
│   ├── 06_String_Concat.js
│   ├── 07_Logical_operator.js
│   ├── 08_Arithmetic_operators.js
│   ├── 09_Assignment_operators.js
│   ├── 10_Comparision_operator.js
│   ├── 12_Hoisting.js
│   └── README.md
├── Window_VSCode_Shortcut/
│   ├── VS_Code_Shortcut.md
│   └── README.md
└── README.md   <-- You are here
```

---

## Prerequisites

Before you begin, ensure you have the following installed on your Windows machine:

| Tool | Recommended Version | Purpose |
|------|---------------------|---------|
| [Node.js](https://nodejs.org/) | LTS (v18 or higher) | JavaScript runtime |
| [npm](https://www.npmjs.com/) | Bundled with Node.js | Package manager |
| [VS Code](https://code.visualstudio.com/) | Latest stable | Code editor |
| [Git](https://git-scm.com/) | Latest | Version control |

### Verify Installation

Open your terminal (PowerShell / CMD) and run:

```bash
node -v
npm -v
git --version
```

---

## Getting Started

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd Playwright_2x
   ```

2. **Open in VS Code:**
   ```bash
   code .
   ```

3. **Install Playwright (when you reach the Playwright setup chapter):**
   ```bash
   npm init playwright@latest
   ```

---

## Chapter Breakdown

### Chapter 01: Basics
**Location:** `Chapter_01_Basics/`

This chapter introduces the foundational setup and the very first JavaScript program. It sets the stage for understanding how code is written and executed in the context of this course.

| File | Description |
|------|-------------|
| `01_Basics.js` | A simple introductory script (`console.log`) to verify the environment is set up correctly. |

### Chapter 02: JavaScript Concepts
**Location:** `Chapter_02_JavaScript_concept/`

This is the **most critical chapter** for beginners. Playwright tests are written in JavaScript (or TypeScript), and a solid grasp of these concepts is non-negotiable. Each file is a self-contained lesson with detailed comments.

| File | Topic | Key Concepts |
|------|-------|--------------|
| `02_Keywords_Identifier_Literals.js` | Keywords, Identifiers & Literals | Reserved words, variable naming rules, values |
| `03_Var_BasicConcept.js` | Variable Declarations (`var`) | Function scope, redeclaration, hoisting, block leaking |
| `04_Functions_Basic_Concept.js` | Functions | Function definition vs. calling, reusable code blocks |
| `05_Operator.js` | Equality Operators (`==` vs `===`) | Loose vs. strict equality, type coercion, best practices |
| `06_String_Concat.js` | String Concatenation | Combining strings, template literals (if applicable) |
| `07_Logical_operator.js` | Logical Operators | `&&`, `\|\|`, `!`, short-circuit evaluation |
| `08_Arithmetic_operators.js` | Arithmetic Operators | `+`, `-`, `*`, `/`, `%`, `**`, increment/decrement |
| `09_Assignment_operators.js` | Assignment Operators | `=`, `+=`, `-=`, `*=`, `/=`, etc. |
| `10_Comparision_operator.js` | Comparison Operators | `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==` |
| `12_Hoisting.js` | Hoisting | Variable & function hoisting, Temporal Dead Zone (TDZ) |

> **Note:** The numbering intentionally skips some numbers (e.g., `11`), likely reserved for future topics like `let`/`const`, arrow functions, or asynchronous JavaScript (Promises, `async/await`).

### Window VSCode Shortcut
**Location:** `Window_VSCode_Shortcut/`

A quick-reference guide specifically curated for **Windows** users. Mastering these shortcuts significantly improves coding speed and debugging efficiency.

| File | Description |
|------|-------------|
| `VS_Code_Shortcut.md` | Comprehensive cheat sheet covering General, Editing, Navigation, Multi-cursor, Debugging, and Integrated Terminal shortcuts. |

---

## How to Run Examples

All `.js` files in this repository can be executed directly using Node.js.

### Run a Single File

Open the integrated terminal in VS Code (`Ctrl + \``) and navigate to the file's directory:

```bash
# Example: Run Chapter 2 - Hoisting
node Chapter_02_JavaScript_concept/12_Hoisting.js
```

### Run with Live Watch (Optional)

If you install a tool like `nodemon`, you can run files in watch mode:

```bash
npx nodemon Chapter_02_JavaScript_concept/05_Operator.js
```

---

## VS Code Recommendations

To get the most out of this workspace, consider installing these VS Code extensions:

| Extension | Publisher | Purpose |
|-----------|-----------|---------|
| **Playwright Test for VSCode** | Microsoft | Official Playwright extension for running and debugging tests |
| **ESLint** | Microsoft | Linting JavaScript code for quality and consistency |
| **Prettier - Code: formatter** | Prettier | Automatic code formatting |
| **JavaScript (ES6) code snippets** | charalampos karypidis | Useful JS snippets |

---

## Best Practices Emphasized in This Course

1. **Always use `===` (strict equality)** instead of `==` to avoid unexpected type coercion bugs.
2. **Understand scope:** Be aware of how `var` leaks out of blocks vs. how `let` and `const` respect block scope.
3. **Declare variables at the top** of their scope to minimize confusion related to hoisting.
4. **Use functions** to keep code modular, reusable, and easy to debug.
5. **Learn shortcuts:** Invest time in VS Code shortcuts; it pays off in productivity.

---

## Contributing

This is a personal learning repository. If you are a student:
- Feel free to add your own notes or exercises in a personal branch.
- Keep the original chapter structure intact for easy reference.

---

## License

This project is intended for educational purposes as part of The Testing Academy's curriculum.

---

**Happy Learning & Automating!**
