/**
 * ============================================================
 * JavaScript Comparison Operators
 * ============================================================
 * Comparison operators are used to compare two values and
 * return a boolean result (true or false). They are essential
 * for decision making in conditional statements.
 *
 * Main Comparison Operators:
 * 1. ==   - Equality (loose)
 * 2. ===  - Strict Equality
 * 3. !=   - Inequality (loose)
 * 4. !==  - Strict Inequality
 * 5. >    - Greater than
 * 6. <    - Less than
 * 7. >=   - Greater than or equal to
 * 8. <=   - Less than or equal to
 * ============================================================
 */


// ------------------------------------------------------------
// 1. EQUALITY (==) - LOOSE EQUALITY
// ------------------------------------------------------------
// Compares two values for equality after performing type
// coercion if the types are different.
// ------------------------------------------------------------

console.log("=== Loose Equality (==) ===");

console.log(`5 == 5: ${5 == 5}`);           // true
console.log(`"5" == 5: ${"5" == 5}`);       // true (string "5" coerced to number 5)
console.log(`true == 1: ${true == 1}`);     // true (true coerced to 1)
console.log(`false == 0: ${false == 0}`);   // true (false coerced to 0)
console.log(`null == undefined: ${null == undefined}`); // true
console.log(`"" == 0: ${"" == 0}`);         // true (empty string coerced to 0)
console.log(`"" == false: ${"" == false}`); // true

// Arrays and objects
console.log(`[1,2] == "1,2": ${[1, 2] == "1,2"}`); // true (array coerced to string)
console.log(`[] == 0: ${[] == 0}`);           // true (empty array coerced to 0)
console.log(`[] == "": ${[] == ""}`);         // true
console.log(`{} == "[object Object]": ${{} == "[object Object]"}`); // true

// Important: Never use == for comparing with true/false
console.log(`"hello" == true: ${"hello" == true}`);   // false
console.log(`"hello" == false: ${"hello" == false}`); // false


// ------------------------------------------------------------
// 2. STRICT EQUALITY (===)
// ------------------------------------------------------------
// Compares two values for equality WITHOUT type coercion.
// Both value AND type must match for the result to be true.
// This is the RECOMMENDED way to compare values in JavaScript.
// ------------------------------------------------------------

console.log("\n=== Strict Equality (===) ===");

console.log(`5 === 5: ${5 === 5}`);           // true
console.log(`"5" === 5: ${"5" === 5}`);       // false (different types)
console.log(`true === 1: ${true === 1}`);     // false (different types)
console.log(`false === 0: ${false === 0}`);   // false (different types)
console.log(`null === undefined: ${null === undefined}`); // false (different types)
console.log(`"" === 0: ${"" === 0}`);         // false (different types)

// Same type comparisons
console.log(`"hello" === "hello": ${"hello" === "hello"}`); // true
console.log(`true === true: ${true === true}`);             // true
console.log(`null === null: ${null === null}`);             // true
console.log(`undefined === undefined: ${undefined === undefined}`); // true

// Object comparison (compares references, not content!)
let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;
console.log(`obj1 === obj2: ${obj1 === obj2}`); // false (different references)
console.log(`obj1 === obj3: ${obj1 === obj3}`); // true (same reference)

// Array comparison (also compares references)
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;
console.log(`arr1 === arr2: ${arr1 === arr2}`); // false (different references)
console.log(`arr1 === arr3: ${arr1 === arr3}`); // true (same reference)


// ------------------------------------------------------------
// 3. INEQUALITY (!=) - LOOSE INEQUALITY
// ------------------------------------------------------------
// Compares two values for inequality, performing type
// coercion if the types are different.
// ------------------------------------------------------------

console.log("\n=== Loose Inequality (!=) ===");

console.log(`5 != 3: ${5 != 3}`);           // true
console.log(`"5" != 5: ${"5" != 5}`);       // false (coerced to same value)
console.log(`true != 1: ${true != 1}`);     // false (coerced to same value)
console.log(`null != undefined: ${null != undefined}`); // false

// Same issues as ==
console.log(`"" != 0: ${"" != 0}`);         // false (coerced to same value)
console.log(`[] != "": ${[] != ""}`);       // false (coerced to same value)


// ------------------------------------------------------------
// 4. STRICT INEQUALITY (!==)
// ------------------------------------------------------------
// Compares two values for inequality WITHOUT type coercion.
// Returns true if value OR type is different.
// This is the RECOMMENDED way to check for inequality.
// ------------------------------------------------------------

console.log("\n=== Strict Inequality (!==) ===");

console.log(`5 !== 3: ${5 !== 3}`);           // true
console.log(`"5" !== 5: ${"5" !== 5}`);       // true (different types)
console.log(`true !== 1: ${true !== 1}`);     // true (different types)
console.log(`null !== undefined: ${null !== undefined}`); // true (different types)
console.log(`"" !== 0: ${"" !== 0}`);         // true (different types)
console.log(`[] !== "": ${[] !== ""}`);       // true (different types)

console.log(`5 !== 5: ${5 !== 5}`);           // false (same value and type)
console.log(`"hello" !== "world": ${"hello" !== "world"}`); // true


// ------------------------------------------------------------
// 5. GREATER THAN (>)
// ------------------------------------------------------------
// Returns true if the left operand is greater than the
// right operand.
// ------------------------------------------------------------

console.log("\n=== Greater Than (>) ===");

console.log(`10 > 5: ${10 > 5}`);     // true
console.log(`5 > 10: ${5 > 10}`);     // false
console.log(`5 > 5: ${5 > 5}`);       // false (not strictly greater)

// String comparison (lexicographic/alphabetical order)
console.log(`"b" > "a": ${"b" > "a"}`);       // true
console.log(`"apple" > "apricot": ${"apple" > "apricot"}`); // false (e < i at position 2)
console.log(`"Z" > "A": ${"Z" > "A"}`);       // true
console.log(`"z" > "Z": ${"z" > "Z"}`);       // true (lowercase > uppercase in ASCII)

// Type coercion with >
console.log(`"10" > 5: ${"10" > 5}`);         // true (string coerced to number)
console.log(`"10" > "5": ${"10" > "5"}`);     // false (string comparison: "1" < "5")


// ------------------------------------------------------------
// 6. LESS THAN (<)
// ------------------------------------------------------------
// Returns true if the left operand is less than the
// right operand.
// ------------------------------------------------------------

console.log("\n=== Less Than (<) ===");

console.log(`5 < 10: ${5 < 10}`);     // true
console.log(`10 < 5: ${10 < 5}`);     // false
console.log(`5 < 5: ${5 < 5}`);       // false (not strictly less)

// String comparison
console.log(`"a" < "b": ${"a" < "b"}`);       // true
console.log(`"apricot" < "apple": ${"apricot" < "apple"}`); // false

// Practical Example: Sorting strings
let fruits = ["banana", "apple", "cherry", "date"];
fruits.sort((a, b) => a < b ? -1 : 1);
console.log(`Sorted fruits: ${fruits}`); // ["apple", "banana", "cherry", "date"]


// ------------------------------------------------------------
// 7. GREATER THAN OR EQUAL TO (>=)
// ------------------------------------------------------------
// Returns true if the left operand is greater than or
// equal to the right operand.
// ------------------------------------------------------------

console.log("\n=== Greater Than or Equal To (>=) ===");

console.log(`10 >= 5: ${10 >= 5}`);   // true
console.log(`5 >= 5: ${5 >= 5}`);     // true (equal)
console.log(`3 >= 5: ${3 >= 5}`);     // false

// Practical Example: Age verification
function canVote(age) {
  return age >= 18;
}

console.log(`Can vote at 21: ${canVote(21)}`); // true
console.log(`Can vote at 18: ${canVote(18)}`); // true
console.log(`Can vote at 16: ${canVote(16)}`); // false

// Practical Example: Minimum purchase requirement
function qualifiesForFreeShipping(purchaseAmount) {
  return purchaseAmount >= 50;
}

console.log(`Free shipping for $75: ${qualifiesForFreeShipping(75)}`); // true
console.log(`Free shipping for $50: ${qualifiesForFreeShipping(50)}`); // true
console.log(`Free shipping for $25: ${qualifiesForFreeShipping(25)}`); // false


// ------------------------------------------------------------
// 8. LESS THAN OR EQUAL TO (<=)
// ------------------------------------------------------------
// Returns true if the left operand is less than or
// equal to the right operand.
// ------------------------------------------------------------

console.log("\n=== Less Than or Equal To (<=) ===");

console.log(`5 <= 10: ${5 <= 10}`);   // true
console.log(`5 <= 5: ${5 <= 5}`);     // true (equal)
console.log(`10 <= 5: ${10 <= 5}`);   // false

// Practical Example: Grade evaluation
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(`Grade for 95: ${getGrade(95)}`); // A
console.log(`Grade for 85: ${getGrade(85)}`); // B
console.log(`Grade for 75: ${getGrade(75)}`); // C
console.log(`Grade for 65: ${getGrade(65)}`); // D
console.log(`Grade for 55: ${getGrade(55)}`); // F

// Practical Example: Range checking
function isInRange(value, min, max) {
  return value >= min && value <= max;
}

console.log(`Is 25 in range [10, 50]: ${isInRange(25, 10, 50)}`); // true
console.log(`Is 5 in range [10, 50]: ${isInRange(5, 10, 50)}`);   // false
console.log(`Is 50 in range [10, 50]: ${isInRange(50, 10, 50)}`); // true


// ------------------------------------------------------------
// 9. THE DIFFERENCE BETWEEN == AND ===
// ------------------------------------------------------------
// This is one of the most important concepts in JavaScript!
// ------------------------------------------------------------

console.log("\n=== == vs === : The Critical Difference ===");

let num = 0;
let str = "0";
let bool = false;

console.log(`\nValues: num=${num}, str="${str}", bool=${bool}`);
console.log(`num == str: ${num == str}`);     // true (0 == "0")
console.log(`num === str: ${num === str}`);   // false (different types)
console.log(`num == bool: ${num == bool}`);   // true (0 == false)
console.log(`num === bool: ${num === bool}`); // false (different types)
console.log(`str == bool: ${str == bool}`);   // true ("0" == false)
console.log(`str === bool: ${str === bool}`); // false (different types)

// The Golden Rule: Always use === and !==
// Benefits:
// 1. More predictable behavior
// 2. Better performance (no type coercion)
// 3. Catches bugs earlier
// 4. Clear intent in code


// ------------------------------------------------------------
// 10. SPECIAL COMPARISON CASES
// ------------------------------------------------------------

console.log("\n=== Special Comparison Cases ===");

// NaN comparisons
console.log(`NaN === NaN: ${NaN === NaN}`);   // false! (NaN is never equal to anything, including itself)
console.log(`NaN == NaN: ${NaN == NaN}`);     // false
console.log(`isNaN(NaN): ${isNaN(NaN)}`);     // true (use this to check for NaN)
console.log(`Number.isNaN(NaN): ${Number.isNaN(NaN)}`); // true (preferred method)

// Infinity comparisons
console.log(`Infinity > 1000000: ${Infinity > 1000000}`);     // true
console.log(`-Infinity < -1000000: ${-Infinity < -1000000}`); // true
console.log(`Infinity === Infinity: ${Infinity === Infinity}`); // true

// null and undefined
console.log(`null == undefined: ${null == undefined}`);   // true
console.log(`null === undefined: ${null === undefined}`); // false
console.log(`null > 0: ${null > 0}`);   // false
console.log(`null == 0: ${null == 0}`); // false
console.log(`null >= 0: ${null >= 0}`); // true (null coerced to 0)

// The reason: null >= 0 is true but null > 0 is false
// This is because >= is implemented as !(null < 0)
// null < 0 is false, so !(false) is true


// ------------------------------------------------------------
// 11. OBJECT COMPARISON
// ------------------------------------------------------------

console.log("\n=== Object Comparison ===");

// Object equality compares references, not content
let person1 = { name: "John", age: 30 };
let person2 = { name: "John", age: 30 };
let person3 = person1;

console.log(`person1 === person2: ${person1 === person2}`); // false (different objects in memory)
console.log(`person1 === person3: ${person1 === person3}`); // true (same reference)

// To compare object content, you need to compare properties
function areObjectsEqual(objA, objB) {
  return JSON.stringify(objA) === JSON.stringify(objB);
}

console.log(`areObjectsEqual(person1, person2): ${areObjectsEqual(person1, person2)}`); // true

// Note: JSON.stringify comparison has limitations with:
// - Property order
// - Functions
// - undefined values
// - Circular references

// Deep equality check (simplified)
function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return false;

  if (typeof a === 'object') {
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
}

console.log(`deepEqual(person1, person2): ${deepEqual(person1, person2)}`); // true


// ------------------------------------------------------------
// 12. PRACTICAL EXAMPLES
// ------------------------------------------------------------

console.log("\n=== Practical Examples ===");

// Example 1: User authentication
function authenticateUser(username, password, storedUsername, storedPassword) {
  // Always use === for comparisons
  if (username === storedUsername && password === storedPassword) {
    return "Login successful!";
  } else if (username !== storedUsername) {
    return "Username not found.";
  } else {
    return "Incorrect password.";
  }
}

console.log(authenticateUser("admin", "1234", "admin", "1234")); // Login successful!
console.log(authenticateUser("admin", "wrong", "admin", "1234")); // Incorrect password.
console.log(authenticateUser("user", "1234", "admin", "1234"));  // Username not found.


// Example 2: Number guessing game
function checkGuess(guess, target) {
  if (guess === target) {
    return "Correct! You win!";
  } else if (guess < target) {
    return "Too low! Try again.";
  } else {
    return "Too high! Try again.";
  }
}

let targetNumber = 50;
console.log(checkGuess(30, targetNumber)); // Too low!
console.log(checkGuess(70, targetNumber)); // Too high!
console.log(checkGuess(50, targetNumber)); // Correct!


// Example 3: Sorting and filtering
let products = [
  { name: "Laptop", price: 999.99 },
  { name: "Mouse", price: 29.99 },
  { name: "Keyboard", price: 79.99 },
  { name: "Monitor", price: 349.99 }
];

// Filter products under $100
let affordable = products.filter(p => p.price < 100);
console.log("Products under $100:", affordable.map(p => p.name)); // ["Mouse", "Keyboard"]

// Find most expensive product
let mostExpensive = products.reduce((max, p) => p.price > max.price ? p : max);
console.log(`Most expensive: ${mostExpensive.name} ($${mostExpensive.price})`); // Laptop


// Example 4: Date comparison
let date1 = new Date("2024-01-15");
let date2 = new Date("2024-06-20");
let today = new Date();

console.log(`date1 < date2: ${date1 < date2}`); // true
console.log(`date1 === date2: ${date1 === date2}`); // false (different objects)
console.log(`date1.getTime() === date2.getTime(): ${date1.getTime() === date2.getTime()}`); // false

// Check if a date is in the future
function isFutureDate(date) {
  return date.getTime() > Date.now();
}

console.log(`Is 2025-01-01 in future: ${isFutureDate(new Date("2025-01-01"))}`); // true/false depending on current date


// ------------------------------------------------------------
// BEST PRACTICES
// ------------------------------------------------------------
// 1. Always use === and !== instead of == and !=
// 2. Be careful with NaN comparisons (use Number.isNaN())
// 3. Remember that object comparison compares references
// 4. Use Object.is() for special cases (NaN, +0, -0)
// 5. Be aware of type coercion when using <, >, <=, >=
// ------------------------------------------------------------

console.log("\n=== Object.is() for Special Cases ===");
console.log(`Object.is(NaN, NaN): ${Object.is(NaN, NaN)}`);     // true (unlike ===)
console.log(`Object.is(+0, -0): ${Object.is(+0, -0)}`);         // false (unlike ===)
console.log(`+0 === -0: ${+0 === -0}`);                         // true


// ------------------------------------------------------------
// SUMMARY
// ------------------------------------------------------------
// - ==  : Loose equality (with type coercion) - AVOID
// - === : Strict equality (no type coercion) - PREFERRED
// - !=  : Loose inequality (with type coercion) - AVOID
// - !== : Strict inequality (no type coercion) - PREFERRED
// - >   : Greater than
// - <   : Less than
// - >=  : Greater than or equal to
// - <=  : Less than or equal to
// - Object.is() : Special comparison for NaN and signed zeros
// ------------------------------------------------------------

console.log("\n=== End of Comparison Operators Examples ===");
