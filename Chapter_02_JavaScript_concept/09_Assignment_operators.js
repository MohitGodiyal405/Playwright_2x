/**
 * ============================================================
 * JavaScript Assignment Operators
 * ============================================================
 * Assignment operators are used to assign values to variables.
 * They can also perform arithmetic operations while assigning.
 *
 * Main Assignment Operators:
 * 1. =    - Simple Assignment
 * 2. +=   - Addition Assignment
 * 3. -=   - Subtraction Assignment
 * 4. *=   - Multiplication Assignment
 * 5. /=   - Division Assignment
 * 6. %=   - Modulus Assignment
 * 7. **=  - Exponentiation Assignment
 * 8. <<=  - Left Shift Assignment
 * 9. >>=  - Right Shift Assignment
 * 10. &=  - Bitwise AND Assignment
 * 11. |=  - Bitwise OR Assignment
 * 12. ^=  - Bitwise XOR Assignment
 * ============================================================
 */


// ------------------------------------------------------------
// 1. SIMPLE ASSIGNMENT (=)
// ------------------------------------------------------------
// Assigns the value on the right to the variable on the left.
// ------------------------------------------------------------

console.log("=== Simple Assignment (=) ===");

let x = 10;
console.log(`x = ${x}`); // 10

let name = "JavaScript";
console.log(`name = "${name}"`); // "JavaScript"

let isActive = true;
console.log(`isActive = ${isActive}`); // true

// Chained assignment (right to left)
let a, b, c;
a = b = c = 5;
console.log(`a = ${a}, b = ${b}, c = ${c}`); // 5, 5, 5

// Destructuring assignment
let [first, second] = [10, 20];
console.log(`first = ${first}, second = ${second}`); // 10, 20

let {x: coordX, y: coordY} = {x: 100, y: 200};
console.log(`coordX = ${coordX}, coordY = ${coordY}`); // 100, 200


// ------------------------------------------------------------
// 2. ADDITION ASSIGNMENT (+=)
// ------------------------------------------------------------
// Adds the right operand to the left operand and assigns
// the result to the left operand.
// Equivalent to: x = x + y
// ------------------------------------------------------------

console.log("\n=== Addition Assignment (+=) ===");

let num1 = 10;
num1 += 5;  // Same as: num1 = num1 + 5
console.log(`After num1 += 5: num1 = ${num1}`); // 15

let str = "Hello";
str += " World";  // Same as: str = str + " World"
console.log(`After str += " World": str = "${str}"`); // "Hello World"

// Practical Example: Accumulate scores
let totalScore = 0;
totalScore += 10; // Add 10 points
totalScore += 25; // Add 25 points
totalScore += 15; // Add 15 points
console.log(`Total score: ${totalScore}`); // 50


// ------------------------------------------------------------
// 3. SUBTRACTION ASSIGNMENT (-=)
// ------------------------------------------------------------
// Subtracts the right operand from the left operand and
// assigns the result to the left operand.
// Equivalent to: x = x - y
// ------------------------------------------------------------

console.log("\n=== Subtraction Assignment (-=) ===");

let num2 = 50;
num2 -= 15;  // Same as: num2 = num2 - 15
console.log(`After num2 -= 15: num2 = ${num2}`); // 35

let health = 100;
health -= 25; // Take damage
health -= 10; // Take more damage
console.log(`Remaining health: ${health}`); // 65

// Practical Example: Calculate remaining balance
let balance = 1000;
balance -= 250; // Withdrawal
balance -= 100; // Another withdrawal
console.log(`Remaining balance: $${balance}`); // $650


// ------------------------------------------------------------
// 4. MULTIPLICATION ASSIGNMENT (*=)
// ------------------------------------------------------------
// Multiplies the left operand by the right operand and
// assigns the result to the left operand.
// Equivalent to: x = x * y
// ------------------------------------------------------------

console.log("\n=== Multiplication Assignment (*=) ===");

let num3 = 8;
num3 *= 4;  // Same as: num3 = num3 * 4
console.log(`After num3 *= 4: num3 = ${num3}`); // 32

// Practical Example: Apply discount
let price = 100;
price *= 0.8; // 20% discount
console.log(`Price after 20% discount: $${price}`); // $80

// Practical Example: Compound interest
let investment = 1000;
investment *= 1.05; // 5% interest
investment *= 1.05; // Another 5% interest
console.log(`Investment after 2 years: $${investment.toFixed(2)}`); // $1102.50


// ------------------------------------------------------------
// 5. DIVISION ASSIGNMENT (/=)
// ------------------------------------------------------------
// Divides the left operand by the right operand and assigns
// the result to the left operand.
// Equivalent to: x = x / y
// ------------------------------------------------------------

console.log("\n=== Division Assignment (/=) ===");

let num4 = 100;
num4 /= 4;  // Same as: num4 = num4 / 4
console.log(`After num4 /= 4: num4 = ${num4}`); // 25

// Practical Example: Split bill
let billTotal = 240;
let people = 4;
billTotal /= people;
console.log(`Each person pays: $${billTotal}`); // $60

// Practical Example: Convert currency
let yen = 10000;
yen /= 150; // Convert to USD (example rate)
console.log(`10000 JPY = $${yen.toFixed(2)} USD`); // $66.67


// ------------------------------------------------------------
// 6. MODULUS ASSIGNMENT (%=)
// ------------------------------------------------------------
// Computes the modulus (remainder) of the left operand
// divided by the right operand and assigns the result.
// Equivalent to: x = x % y
// ------------------------------------------------------------

console.log("\n=== Modulus Assignment (%=) ===");

let num5 = 17;
num5 %= 5;  // Same as: num5 = num5 % 5
console.log(`After num5 %= 5: num5 = ${num5}`); // 2

// Practical Example: Wrap around index
let currentIndex = 0;
let arrayLength = 4;

currentIndex++;
currentIndex %= arrayLength;
console.log(`After increment: index = ${currentIndex}`); // 1

currentIndex++;
currentIndex %= arrayLength;
console.log(`After increment: index = ${currentIndex}`); // 2

currentIndex++;
currentIndex %= arrayLength;
console.log(`After increment: index = ${currentIndex}`); // 3

currentIndex++;
currentIndex %= arrayLength;
console.log(`After increment: index = ${currentIndex}`); // 0 (wraps around!)


// ------------------------------------------------------------
// 7. EXPONENTIATION ASSIGNMENT (**=)
// ------------------------------------------------------------
// Raises the left operand to the power of the right operand
// and assigns the result to the left operand.
// Equivalent to: x = x ** y
// ------------------------------------------------------------

console.log("\n=== Exponentiation Assignment (**=) ===");

let num6 = 3;
num6 **= 3;  // Same as: num6 = num6 ** 3
console.log(`After num6 **= 3: num6 = ${num6}`); // 27

// Practical Example: Square a number
let side = 5;
side **= 2; // Area of square
console.log(`Area of square: ${side}`); // 25

// Practical Example: Compound growth
let population = 1000;
population **= 1.02; // 2% growth (simplified)
console.log(`Population: ${population.toFixed(2)}`); // 1000.00 (actually 1000^1.02)

// Correct compound growth example
let correctPop = 1000;
correctPop *= 1.02; // Correct way for compound growth
console.log(`Corrected population: ${correctPop.toFixed(2)}`); // 1020.00


// ------------------------------------------------------------
// 8. LEFT SHIFT ASSIGNMENT (<<=)
// ------------------------------------------------------------
// Shifts the bits of the left operand to the left by the
// number of positions specified by the right operand.
// Equivalent to: x = x << y
// ------------------------------------------------------------

console.log("\n=== Left Shift Assignment (<<=) ===");

let num7 = 5;  // Binary: 101
num7 <<= 2;    // Same as: num7 = num7 << 2
               // Shifts left by 2: 10100 (which is 20 in decimal)
console.log(`After num7 <<= 2: num7 = ${num7}`); // 20

// Practical use: Multiply by powers of 2
let val = 8;
val <<= 1;  // Multiply by 2 (8 * 2 = 16)
console.log(`8 <<= 1: ${val}`); // 16

val = 8;
val <<= 2;  // Multiply by 4 (8 * 4 = 32)
console.log(`8 <<= 2: ${val}`); // 32

val = 8;
val <<= 3;  // Multiply by 8 (8 * 8 = 64)
console.log(`8 <<= 3: ${val}`); // 64


// ------------------------------------------------------------
// 9. RIGHT SHIFT ASSIGNMENT (>>=)
// ------------------------------------------------------------
// Shifts the bits of the left operand to the right by the
// number of positions specified by the right operand.
// Preserves the sign bit (sign-propagating right shift).
// Equivalent to: x = x >> y
// ------------------------------------------------------------

console.log("\n=== Right Shift Assignment (>>=) ===");

let num8 = 20;  // Binary: 10100
num8 >>= 2;     // Same as: num8 = num8 >> 2
                // Shifts right by 2: 101 (which is 5 in decimal)
console.log(`After num8 >>= 2: num8 = ${num8}`); // 5

// Practical use: Divide by powers of 2
let val2 = 64;
val2 >>= 1;  // Divide by 2 (64 / 2 = 32)
console.log(`64 >>= 1: ${val2}`); // 32

val2 = 64;
val2 >>= 2;  // Divide by 4 (64 / 4 = 16)
console.log(`64 >>= 2: ${val2}`); // 16

val2 = 64;
val2 >>= 3;  // Divide by 8 (64 / 8 = 8)
console.log(`64 >>= 3: ${val2}`); // 8

// Negative numbers (sign is preserved)
let negNum = -16;
negNum >>= 2;
console.log(`-16 >>= 2: ${negNum}`); // -4


// ------------------------------------------------------------
// 10. UNSIGNED RIGHT SHIFT ASSIGNMENT (>>>=)
// ------------------------------------------------------------
// Shifts the bits to the right, filling with zeros from the
// left. The sign bit becomes 0, so the result is always
// non-negative.
// Equivalent to: x = x >>> y
// ------------------------------------------------------------

console.log("\n=== Unsigned Right Shift Assignment (>>>=) ===");

let num9 = -16;
num9 >>>= 2;
console.log(`-16 >>>= 2: ${num9}`); // 1073741820 (very large positive number!)

let num10 = 16;
num10 >>>= 2;
console.log(`16 >>>= 2: ${num10}`); // 4


// ------------------------------------------------------------
// 11. BITWISE AND ASSIGNMENT (&=)
// ------------------------------------------------------------
// Performs bitwise AND and assigns the result.
// Equivalent to: x = x & y
// ------------------------------------------------------------

console.log("\n=== Bitwise AND Assignment (&=) ===");

let num11 = 12;  // Binary: 1100
num11 &= 10;     // Binary: 1010
                 // AND:     1000 (which is 8)
console.log(`12 &= 10: ${num11}`); // 8

// Practical use: Check if a flag is set
let flags = 0b1010; // Binary: 1010 (flags 2 and 4 are set)
let flag2 = 0b0010; // Binary: 0010 (flag 2)
flags &= flag2;
console.log(`Flags after &=: ${flags} (flag 2 is ${flags ? "set" : "not set"})`); // 2


// ------------------------------------------------------------
// 12. BITWISE OR ASSIGNMENT (|=)
// ------------------------------------------------------------
// Performs bitwise OR and assigns the result.
// Equivalent to: x = x | y
// ------------------------------------------------------------

console.log("\n=== Bitwise OR Assignment (|=) ===");

let num12 = 12;  // Binary: 1100
num12 |= 10;     // Binary: 1010
                 // OR:      1110 (which is 14)
console.log(`12 |= 10: ${num12}`); // 14

// Practical use: Set a flag
let permissions = 0b0000; // No permissions
permissions |= 0b0001;    // Add read permission
permissions |= 0b0010;    // Add write permission
console.log(`Permissions: ${permissions.toString(2)} (binary)`); // 11


// ------------------------------------------------------------
// 13. BITWISE XOR ASSIGNMENT (^=)
// ------------------------------------------------------------
// Performs bitwise XOR and assigns the result.
// XOR returns 1 if the bits are different, 0 if same.
// Equivalent to: x = x ^ y
// ------------------------------------------------------------

console.log("\n=== Bitwise XOR Assignment (^=) ===");

let num13 = 12;  // Binary: 1100
num13 ^= 10;     // Binary: 1010
                 // XOR:     0110 (which is 6)
console.log(`12 ^= 10: ${num13}`); // 6

// Practical use: Toggle a flag
let features = 0b1010; // Features enabled: 2 and 4
features ^= 0b0010;    // Toggle feature 2
console.log(`Features after ^=: ${features.toString(2)} (binary)`); // 1000

features ^= 0b0010;    // Toggle feature 2 again
console.log(`Features after ^= again: ${features.toString(2)} (binary)`); // 1010


// ------------------------------------------------------------
// 14. LOGICAL AND ASSIGNMENT (&&=) - ES2021
// ------------------------------------------------------------
// Assigns if the left operand is truthy.
// Equivalent to: x && (x = y)
// ------------------------------------------------------------

console.log("\n=== Logical AND Assignment (&&=) ===");

let userName = "Alice";
userName &&= userName.toUpperCase();
console.log(`userName &&= toUpperCase: "${userName}"`); // "ALICE"

let emptyName = "";
emptyName &&= "Default";
console.log(`emptyName &&= "Default": "${emptyName}"`); // "" (stays empty because emptyName is falsy)


// ------------------------------------------------------------
// 15. LOGICAL OR ASSIGNMENT (||=) - ES2021
// ------------------------------------------------------------
// Assigns if the left operand is falsy.
// Equivalent to: x || (x = y)
// ------------------------------------------------------------

console.log("\n=== Logical OR Assignment (||=) ===");

let displayName = "";
displayName ||= "Guest";
console.log(`displayName ||= "Guest": "${displayName}"`); // "Guest"

let existingName = "Alice";
existingName ||= "Guest";
console.log(`existingName ||= "Guest": "${existingName}"`); // "Alice"

// Practical use: Default configuration
let config = {
  timeout: 0,
  retries: null,
  url: ""
};

config.timeout ||= 5000;   // Stays 0 because 0 is falsy? Actually || treats 0 as falsy!
config.retries ||= 3;      // Becomes 3
// Note: For 0, use ??= instead!
console.log(`timeout: ${config.timeout}, retries: ${config.retries}`);


// ------------------------------------------------------------
// 16. NULLISH COALESCING ASSIGNMENT (??=) - ES2021
// ------------------------------------------------------------
// Assigns if the left operand is null or undefined.
// Equivalent to: x ?? (x = y)
// ------------------------------------------------------------

console.log("\n=== Nullish Coalescing Assignment (??=) ===");

let setting1 = null;
setting1 ??= "default";
console.log(`setting1 ??= "default": "${setting1}"`); // "default"

let setting2 = 0;
setting2 ??= 100;
console.log(`setting2 ??= 100: ${setting2}`); // 0 (preserved because 0 is not nullish!)

let setting3 = "";
setting3 ??= "default";
console.log(`setting3 ??= "default": "${setting3}"`); // "" (preserved)

// Practical use: Default configuration (correct way)
let appConfig = {
  port: null,
  maxConnections: 0,
  title: ""
};

appConfig.port ??= 3000;
appConfig.maxConnections ??= 100; // Stays 0!
appConfig.title ??= "My App";     // Stays ""!
console.log(`port: ${appConfig.port}, maxConnections: ${appConfig.maxConnections}, title: "${appConfig.title}"`);


// ------------------------------------------------------------
// SUMMARY
// ------------------------------------------------------------
// - =    : Simple assignment
// - +=   : Add and assign
// - -=   : Subtract and assign
// - *=   : Multiply and assign
// - /=   : Divide and assign
// - %=   : Modulus and assign
// - **=  : Exponentiate and assign
// - <<=  : Left shift and assign
// - >>=  : Right shift and assign
// - >>>= : Unsigned right shift and assign
// - &=   : Bitwise AND and assign
// - |=   : Bitwise OR and assign
// - ^=   : Bitwise XOR and assign
// - &&=  : Logical AND and assign (ES2021)
// - ||=  : Logical OR and assign (ES2021)
// - ??=  : Nullish coalescing and assign (ES2021)
// ------------------------------------------------------------

console.log("\n=== End of Assignment Operators Examples ===");
