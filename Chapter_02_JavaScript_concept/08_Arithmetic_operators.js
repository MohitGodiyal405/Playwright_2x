/**
 * ============================================================
 * JavaScript Arithmetic Operators
 * ============================================================
 * Arithmetic operators are used to perform mathematical
 * calculations on numbers. They form the foundation of
 * numerical computations in JavaScript.
 *
 * Main Arithmetic Operators:
 * 1. +   - Addition
 * 2. -   - Subtraction
 * 3. *   - Multiplication
 * 4. /   - Division
 * 5. %   - Modulus (Remainder)
 * 6. **  - Exponentiation (ES2016)
 * 7. ++  - Increment
 * 8. --  - Decrement
 * ============================================================
 */


// ------------------------------------------------------------
// 1. ADDITION (+)
// ------------------------------------------------------------
// Adds two numbers together.
// Can also be used for string concatenation.
// ------------------------------------------------------------

console.log("=== Addition (+) ===");

let sum1 = 10 + 5;
console.log(`10 + 5 = ${sum1}`); // 15

let sum2 = 20 + 30 + 50;
console.log(`20 + 30 + 50 = ${sum2}`); // 100

// Adding negative numbers
let sum3 = -10 + 5;
console.log(`-10 + 5 = ${sum3}`); // -5

// String concatenation (when one operand is a string)
let greeting = "Hello" + " " + "World";
console.log(`"Hello" + " " + "World" = "${greeting}"`); // "Hello World"

let mixed = "The answer is " + 42;
console.log(`"The answer is " + 42 = "${mixed}"`); // "The answer is 42"


// ------------------------------------------------------------
// 2. SUBTRACTION (-)
// ------------------------------------------------------------
// Subtracts the right operand from the left operand.
// ------------------------------------------------------------

console.log("\n=== Subtraction (-) ===");

let diff1 = 10 - 5;
console.log(`10 - 5 = ${diff1}`); // 5

let diff2 = 100 - 25 - 10;
console.log(`100 - 25 - 10 = ${diff2}`); // 65

// Subtracting negative numbers
let diff3 = 10 - (-5);
console.log(`10 - (-5) = ${diff3}`); // 15

let diff4 = -10 - (-5);
console.log(`-10 - (-5) = ${diff4}`); // -5

// Works with strings that can be converted to numbers
let strDiff = "100" - "50";
console.log(`"100" - "50" = ${strDiff}`); // 50 (coerced to numbers)


// ------------------------------------------------------------
// 3. MULTIPLICATION (*)
// ------------------------------------------------------------
// Multiplies two numbers together.
// ------------------------------------------------------------

console.log("\n=== Multiplication (*) ===");

let prod1 = 10 * 5;
console.log(`10 * 5 = ${prod1}`); // 50

let prod2 = 7 * 8 * 2;
console.log(`7 * 8 * 2 = ${prod2}`); // 112

// Multiplying with decimals
let prod3 = 0.5 * 10;
console.log(`0.5 * 10 = ${prod3}`); // 5

let prod4 = 3.14 * 2;
console.log(`3.14 * 2 = ${prod4}`); // 6.28

// Negative numbers
let prod5 = -5 * 4;
console.log(`-5 * 4 = ${prod5}`); // -20

let prod6 = -5 * -4;
console.log(`-5 * -4 = ${prod6}`); // 20


// ------------------------------------------------------------
// 4. DIVISION (/)
// ------------------------------------------------------------
// Divides the left operand by the right operand.
// ------------------------------------------------------------

console.log("\n=== Division (/) ===");

let quot1 = 20 / 4;
console.log(`20 / 4 = ${quot1}`); // 5

let quot2 = 10 / 3;
console.log(`10 / 3 = ${quot2}`); // 3.3333333333333335

// Division by zero (results in Infinity)
let quot3 = 10 / 0;
console.log(`10 / 0 = ${quot3}`); // Infinity

let quot4 = -10 / 0;
console.log(`-10 / 0 = ${quot4}`); // -Infinity

let quot5 = 0 / 0;
console.log(`0 / 0 = ${quot5}`); // NaN (Not a Number)

// Works with strings that can be converted to numbers
let strQuot = "100" / "10";
console.log(`"100" / "10" = ${strQuot}`); // 10


// ------------------------------------------------------------
// 5. MODULUS (%) - REMAINDER
// ------------------------------------------------------------
// Returns the remainder after dividing the left operand
// by the right operand.
// ------------------------------------------------------------

console.log("\n=== Modulus (%) ===");

let rem1 = 10 % 3;
console.log(`10 % 3 = ${rem1}`); // 1 (10 = 3*3 + 1)

let rem2 = 17 % 5;
console.log(`17 % 5 = ${rem2}`); // 2 (17 = 5*3 + 2)

let rem3 = 20 % 4;
console.log(`20 % 4 = ${rem3}`); // 0 (evenly divisible)

let rem4 = 7 % 10;
console.log(`7 % 10 = ${rem4}`); // 7 (7 < 10)

// Practical Example: Check if a number is even or odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

checkEvenOdd(10); // even
checkEvenOdd(15); // odd

// Practical Example: Cycling through array indices
let colors = ["red", "green", "blue", "yellow"];
for (let i = 0; i < 10; i++) {
  let color = colors[i % colors.length];
  console.log(`Index ${i}: ${color}`);
}


// ------------------------------------------------------------
// 6. EXPONENTIATION (**)
// ------------------------------------------------------------
// Raises the left operand to the power of the right operand.
// Introduced in ES2016.
// ------------------------------------------------------------

console.log("\n=== Exponentiation (**) ===");

let exp1 = 2 ** 3;
console.log(`2 ** 3 = ${exp1}`); // 8 (2^3 = 2*2*2)

let exp2 = 5 ** 2;
console.log(`5 ** 2 = ${exp2}`); // 25 (5 squared)

let exp3 = 10 ** 0;
console.log(`10 ** 0 = ${exp3}`); // 1 (any number^0 = 1)

let exp4 = 2 ** -2;
console.log(`2 ** -2 = ${exp4}`); // 0.25 (1 / 2^2)

let exp5 = 27 ** (1 / 3);
console.log(`27 ** (1/3) = ${exp5}`); // 3 (cube root)

// Practical Example: Calculate area of a circle
let radius = 5;
let area = Math.PI * radius ** 2;
console.log(`Area of circle with radius ${radius}: ${area.toFixed(2)}`); // 78.54

// Equivalent to Math.pow()
console.log(`Math.pow(2, 3) = ${Math.pow(2, 3)}`); // 8
console.log(`2 ** 3 = ${2 ** 3}`); // 8


// ------------------------------------------------------------
// 7. INCREMENT (++)
// ------------------------------------------------------------
// Increases a variable's value by 1.
// Can be used as prefix (++x) or postfix (x++).
// Prefix: increments first, then returns the value.
// Postfix: returns the value first, then increments.
// ------------------------------------------------------------

console.log("\n=== Increment (++) ===");

// Postfix increment
let a = 5;
console.log(`a = ${a}`); // 5
let b = a++;
console.log(`After b = a++: a = ${a}, b = ${b}`); // a = 6, b = 5

// Prefix increment
let c = 5;
console.log(`c = ${c}`); // 5
let d = ++c;
console.log(`After d = ++c: c = ${c}, d = ${d}`); // c = 6, d = 6

// Common use case: loops
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// ------------------------------------------------------------
// 8. DECREMENT (--)
// ------------------------------------------------------------
// Decreases a variable's value by 1.
// Can be used as prefix (--x) or postfix (x--).
// Prefix: decrements first, then returns the value.
// Postfix: returns the value first, then decrements.
// ------------------------------------------------------------

console.log("\n=== Decrement (--) ===");

// Postfix decrement
let e = 5;
console.log(`e = ${e}`); // 5
let f = e--;
console.log(`After f = e--: e = ${e}, f = ${f}`); // e = 4, f = 5

// Prefix decrement
let g = 5;
console.log(`g = ${g}`); // 5
let h = --g;
console.log(`After h = --g: g = ${g}, h = ${h}`); // g = 4, h = 4

// Common use case: countdown
console.log("Countdown from 5 to 1:");
for (let i = 5; i > 0; i--) {
  console.log(i);
}


// ------------------------------------------------------------
// 9. UNARY PLUS (+) AND UNARY NEGATION (-)
// ------------------------------------------------------------
// Unary plus (+) converts an operand to a number.
// Unary negation (-) converts an operand to a number and
// negates it.
// ------------------------------------------------------------

console.log("\n=== Unary Plus (+) and Unary Negation (-) ===");

// Unary plus
let strNum = "42";
console.log(`typeof "${strNum}": ${typeof strNum}`); // string
let converted = +strNum;
console.log(`+"${strNum}" = ${converted}`); // 42
console.log(`typeof +"${strNum}": ${typeof converted}`); // number

let boolVal = true;
console.log(`+true = ${+boolVal}`); // 1
console.log(`+false = ${+false}`); // 0

// Unary negation
let num = 10;
console.log(`-${num} = ${-num}`); // -10

let negStr = "25";
console.log(`-"${negStr}" = ${-negStr}`); // -25


// ------------------------------------------------------------
// 10. OPERATOR PRECEDENCE
// ------------------------------------------------------------
// Determines the order in which operators are evaluated.
// 1. Parentheses () - highest precedence
// 2. Exponentiation **
// 3. Unary +, -, ++, --
// 4. Multiplication *, Division /, Modulus %
// 5. Addition +, Subtraction -
// 6. Assignment =, +=, -=, etc.
// ------------------------------------------------------------

console.log("\n=== Operator Precedence ===");

let result1 = 10 + 2 * 5;
console.log(`10 + 2 * 5 = ${result1}`); // 20 (multiplication before addition)

let result2 = (10 + 2) * 5;
console.log(`(10 + 2) * 5 = ${result2}`); // 60 (parentheses first)

let result3 = 2 ** 3 * 2;
console.log(`2 ** 3 * 2 = ${result3}`); // 16 (exponentiation before multiplication)

let result4 = 10 / 2 + 3 * 4;
console.log(`10 / 2 + 3 * 4 = ${result4}`); // 17 (division and multiplication before addition)

let result5 = 100 / (2 * 5);
console.log(`100 / (2 * 5) = ${result5}`); // 10


// ------------------------------------------------------------
// 11. FLOATING POINT PRECISION
// ------------------------------------------------------------
// JavaScript uses IEEE 754 floating-point arithmetic.
// Some decimal numbers cannot be represented exactly.
// ------------------------------------------------------------

console.log("\n=== Floating Point Precision ===");

console.log(`0.1 + 0.2 = ${0.1 + 0.2}`); // 0.30000000000000004
console.log(`0.1 + 0.2 === 0.3: ${0.1 + 0.2 === 0.3}`); // false

// Solution: Round to a fixed number of decimal places
let precise = (0.1 + 0.2).toFixed(2);
console.log(`(0.1 + 0.2).toFixed(2) = ${precise}`); // "0.30"

// Or use a small epsilon for comparison
let epsilon = 0.0001;
console.log(`Math.abs(0.1 + 0.2 - 0.3) < epsilon: ${Math.abs(0.1 + 0.2 - 0.3) < epsilon}`); // true


// ------------------------------------------------------------
// 12. PRACTICAL EXAMPLES
// ------------------------------------------------------------

console.log("\n=== Practical Examples ===");

// Example 1: Calculate total price with tax
function calculateTotal(price, quantity, taxRate) {
  let subtotal = price * quantity;
  let tax = subtotal * taxRate;
  let total = subtotal + tax;
  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2)
  };
}

let cart = calculateTotal(29.99, 3, 0.08);
console.log(`Subtotal: $${cart.subtotal}, Tax: $${cart.tax}, Total: $${cart.total}`);


// Example 2: Calculate average score
function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

let testScores = [85, 92, 78, 95, 88];
console.log(`Average score: ${calculateAverage(testScores).toFixed(2)}`); // 87.60


// Example 3: Convert temperature
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log(`25°C = ${celsiusToFahrenheit(25)}°F`); // 77°F
console.log(`98.6°F = ${fahrenheitToCelsius(98.6).toFixed(2)}°C`); // 37.00°C


// Example 4: Generate random number in a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Random number between 1 and 100: ${getRandomNumber(1, 100)}`);


// ------------------------------------------------------------
// SUMMARY
// ------------------------------------------------------------
// - +  : Addition and string concatenation
// - -  : Subtraction
// - *  : Multiplication
// - /  : Division (watch for division by zero!)
// - %  : Modulus (remainder)
// - ** : Exponentiation
// - ++ : Increment (prefix and postfix)
// - -- : Decrement (prefix and postfix)
// - +x : Unary plus (convert to number)
// - -x : Unary negation (negate number)
// - Parentheses () override precedence
// ------------------------------------------------------------

console.log("\n=== End of Arithmetic Operators Examples ===");