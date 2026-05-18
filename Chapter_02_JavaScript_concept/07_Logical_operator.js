/**
 * ============================================================
 * JavaScript Logical Operators
 * ============================================================
 * Logical operators are used to determine the logic between
 * variables or values. They are essential for decision making
 * and controlling the flow of a program.
 *
 * Main Logical Operators:
 * 1. &&  - Logical AND
 * 2. ||  - Logical OR
 * 3. !   - Logical NOT
 * 4. ??  - Nullish Coalescing Operator (ES2020)
 * ============================================================
 */


// ------------------------------------------------------------
// 1. LOGICAL AND (&&)
// ------------------------------------------------------------
// Returns true if BOTH operands are true.
// If the first operand is falsy, it returns the first operand.
// If the first operand is truthy, it returns the second operand.
// ------------------------------------------------------------

console.log("=== Logical AND (&&) ===");

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// Practical Example: Check if a user is eligible for a discount
let isMember = true;
let purchaseAmount = 150;
let isEligible = isMember && purchaseAmount > 100;
console.log(`Is eligible for discount: ${isEligible}`); // true

// Short-circuit evaluation
let username = "john_doe";
let displayName = username && username.toUpperCase();
console.log(`Display name: ${displayName}`); // JOHN_DOE

let emptyName = "";
let result = emptyName && emptyName.toUpperCase();
console.log(`Empty name result: ${result}`); // "" (empty string, short-circuits)


// ------------------------------------------------------------
// 2. LOGICAL OR (||)
// ------------------------------------------------------------
// Returns true if AT LEAST ONE operand is true.
// If the first operand is truthy, it returns the first operand.
// If the first operand is falsy, it returns the second operand.
// ------------------------------------------------------------

console.log("\n=== Logical OR (||) ===");

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// Practical Example: Set a default value
let userInput = "";
let defaultValue = "Guest";
let finalValue = userInput || defaultValue;
console.log(`Welcome, ${finalValue}`); // Welcome, Guest

let userInput2 = "Alice";
let finalValue2 = userInput2 || defaultValue;
console.log(`Welcome, ${finalValue2}`); // Welcome, Alice

// Multiple OR conditions
let hasPermission = false;
let isAdmin = true;
let canAccess = hasPermission || isAdmin;
console.log(`Can access admin panel: ${canAccess}`); // true


// ------------------------------------------------------------
// 3. LOGICAL NOT (!)
// ------------------------------------------------------------
// Reverses the boolean value of an operand.
// If the operand is true, it returns false.
// If the operand is false, it returns true.
// ------------------------------------------------------------

console.log("\n=== Logical NOT (!) ===");

console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true  (0 is falsy)
console.log(!"");    // true  (empty string is falsy)
console.log(!null);  // true  (null is falsy)
console.log(!undefined); // true (undefined is falsy)
console.log(!"hello");   // false (non-empty string is truthy)
console.log(!42);        // false (non-zero number is truthy)

// Double NOT (!!) - converts a value to its boolean equivalent
console.log(`!!"hello": ${!!"hello"}`); // true
console.log(`!!0: ${!!0}`);             // false
console.log(`!!"": ${!!""}`);           // false

// Practical Example: Toggle a feature
let isDarkMode = false;
isDarkMode = !isDarkMode;
console.log(`Dark mode enabled: ${isDarkMode}`); // true

// Check if a value is NOT present
let userEmail = null;
if (!userEmail) {
  console.log("Please provide an email address.");
}


// ------------------------------------------------------------
// 4. NULLISH COALESCING OPERATOR (??)
// ------------------------------------------------------------
// Returns the right-hand operand when the left-hand operand
// is null or undefined. Otherwise, returns the left-hand operand.
// Unlike ||, it does NOT treat 0, "", or false as nullish.
// ------------------------------------------------------------

console.log("\n=== Nullish Coalescing (??) ===");

let nullValue = null;
let fallback = "Default";
console.log(nullValue ?? fallback); // "Default"

let undefinedValue = undefined;
console.log(undefinedValue ?? fallback); // "Default"

// Difference between || and ??
let zeroValue = 0;
console.log(`With ||: ${zeroValue || 10}`);  // 10 (0 is falsy)
console.log(`With ??: ${zeroValue ?? 10}`);  // 0  (0 is NOT nullish)

let emptyText = "";
console.log(`With ||: ${emptyText || "Fallback"}`);  // "Fallback"
console.log(`With ??: ${emptyText ?? "Fallback"}`);  // "" (empty string is NOT nullish)

// Practical Example: Configuration settings
let configTimeout = 0; // User explicitly set timeout to 0
let defaultTimeout = 5000;
let timeout = configTimeout ?? defaultTimeout;
console.log(`Timeout set to: ${timeout}ms`); // 0ms (user's choice is respected)


// ------------------------------------------------------------
// 5. COMBINING LOGICAL OPERATORS
// ------------------------------------------------------------
// You can combine multiple logical operators to create
// complex conditions. Use parentheses for clarity.
// ------------------------------------------------------------

console.log("\n=== Combining Logical Operators ===");

let age = 25;
let hasID = true;
let isVIP = false;

// Complex condition: Allowed entry if (adult with ID) OR (VIP)
let canEnter = (age >= 18 && hasID) || isVIP;
console.log(`Can enter: ${canEnter}`); // true

// Another example
let score = 85;
let attendance = 90;
let extraCredit = true;

let passesClass = (score >= 70 && attendance >= 80) || extraCredit;
console.log(`Passes class: ${passesClass}`); // true


// ------------------------------------------------------------
// 6. TRUTHY AND FALSY VALUES
// ------------------------------------------------------------
// Understanding truthy and falsy values is crucial for
// effectively using logical operators.
//
// Falsy Values:
// - false
// - 0
// - "" (empty string)
// - null
// - undefined
// - NaN
//
// Everything else is truthy, including:
// - true
// - Any non-zero number
// - Any non-empty string
// - Objects and arrays (even empty ones)
// ------------------------------------------------------------

console.log("\n=== Truthy and Falsy Values ===");

let falsyValues = [false, 0, "", null, undefined, NaN];
let truthyValues = [true, 1, "hello", [], {}, -1];

falsyValues.forEach(val => {
  console.log(`${val} is ${val ? "truthy" : "falsy"}`);
});

truthyValues.forEach(val => {
  console.log(`${JSON.stringify(val)} is ${val ? "truthy" : "falsy"}`);
});


// ------------------------------------------------------------
// 7. PRACTICAL EXAMPLES
// ------------------------------------------------------------

console.log("\n=== Practical Examples ===");

// Example 1: User Authentication
function checkAccess(user) {
  let isLoggedIn = user && user.isLoggedIn;
  let isAdmin = user && user.role === "admin";
  let canEdit = isLoggedIn && isAdmin;

  console.log(`User ${user.name} can edit: ${canEdit}`);
}

checkAccess({ name: "Alice", isLoggedIn: true, role: "admin" }); // true
checkAccess({ name: "Bob", isLoggedIn: true, role: "user" });    // false
checkAccess({ name: "Charlie" });                                 // false


// Example 2: Form Validation
function validateForm(name, email, age) {
  let isNameValid = name && name.length > 0;
  let isEmailValid = email && email.includes("@");
  let isAgeValid = age && age >= 18;

  let isFormValid = isNameValid && isEmailValid && isAgeValid;

  console.log(`Form valid: ${isFormValid}`);
  return isFormValid;
}

validateForm("John", "john@example.com", 25); // true
validateForm("", "john@example.com", 25);     // false (name empty)
validateForm("John", "invalid-email", 25);    // false (email invalid)
validateForm("John", "john@example.com", 16); // false (age under 18)


// Example 3: Guard Clause using Logical AND
function greetUser(user) {
  // Traditional if statement
  // if (user && user.name) {
  //   console.log(`Hello, ${user.name}!`);
  // }

  // Using logical AND as a guard clause
  user && user.name && console.log(`Hello, ${user.name}!`);
}

greetUser({ name: "Alice" }); // Hello, Alice!
greetUser({});               // (nothing printed)
greetUser(null);             // (nothing printed)


// Example 4: Setting Configuration with Defaults
function createConfig(userConfig) {
  let config = {
    theme: userConfig.theme || "light",
    fontSize: userConfig.fontSize || 14,
    showNotifications: userConfig.showNotifications !== undefined ? userConfig.showNotifications : true,
    apiUrl: userConfig.apiUrl ?? "https://api.example.com"
  };

  console.log("Configuration:", config);
  return config;
}

createConfig({ theme: "dark", fontSize: 16 }); // theme: dark, fontSize: 16, showNotifications: true, apiUrl: default
createConfig({ showNotifications: false, apiUrl: null }); // theme: light, apiSize: 14, showNotifications: false, apiUrl: default


// ------------------------------------------------------------
// SUMMARY
// ------------------------------------------------------------
// - && (AND): Returns first falsy value or the last value
// - || (OR): Returns first truthy value or the last value
// - ! (NOT): Inverts the boolean value
// - ?? (Nullish Coalescing): Returns right operand only if left is null/undefined
// - Combine operators with parentheses for complex logic
// - Understand truthy/falsy values for effective use
// ------------------------------------------------------------

console.log("\n=== End of Logical Operators Examples ===");
