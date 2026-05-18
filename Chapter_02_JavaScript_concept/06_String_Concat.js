/*
 * ============================================================================
 * String Concatenation in JavaScript
 * ============================================================================
 *
 * String concatenation is the process of combining two or more strings into
 * a single string. JavaScript provides several ways to concatenate strings.
 *
 * Methods covered:
 * 1. Using the + operator
 * 2. Using the += operator
 * 3. Using the concat() method
 * 4. Using template literals (backticks) - Recommended
 * 5. Using join() with arrays
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Using the + Operator
// ----------------------------------------------------------------------------
// The simplest and most common way to concatenate strings.

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log("Using + operator:", fullName); // Output: John Doe

// Concatenating strings with numbers (type coercion)
let age = 30;
let message = "I am " + age + " years old.";
console.log("String + Number:", message); // Output: I am 30 years old.

// Numbers are converted to strings when concatenated
let result = "5" + 10;
console.log("'5' + 10 =", result); // Output: 510 (string concatenation, not addition)

// ----------------------------------------------------------------------------
// 2. Using the += Operator (Concatenation Assignment)
// ----------------------------------------------------------------------------
// Useful when building strings incrementally.

let sentence = "Hello";
sentence += ", ";
sentence += "World!";
sentence += " Welcome to JavaScript.";
console.log("Using += operator:", sentence);
// Output: Hello, World! Welcome to JavaScript.

// ----------------------------------------------------------------------------
// 3. Using the concat() Method
// ----------------------------------------------------------------------------
// A string method that joins two or more strings without modifying existing ones.

let str1 = "Hello";
let str2 = "World";
let str3 = "JavaScript";

let combined = str1.concat(" ", str2, "! ", "Welcome to ", str3);
console.log("Using concat():", combined);
// Output: Hello World! Welcome to JavaScript

// Note: concat() can take multiple arguments
let path = "/users".concat("/documents", "/projects", "/myapp");
console.log("Path concatenation:", path); // Output: /users/documents/projects/myapp

// ----------------------------------------------------------------------------
// 4. Using Template Literals (Recommended)
// ----------------------------------------------------------------------------
// Enclosed in backticks (`). Allows embedded expressions using ${expression}.
// This is the most modern and readable approach.

let user = "Alice";
let greeting = `Hello, ${user}! Welcome back.`;
console.log("Template literal:", greeting); // Output: Hello, Alice! Welcome back.

// Multi-line strings (preserves line breaks)
let poem = `
Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!
`;
console.log("Multi-line string:");
console.log(poem);

// Expressions inside template literals
let a = 10;
let b = 20;
let sumMessage = `The sum of ${a} and ${b} is ${a + b}.`;
console.log("Expression in template literal:", sumMessage);
// Output: The sum of 10 and 20 is 30.

// Calling functions inside template literals
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let food = "pizza";
let foodMessage = `I love ${capitalize(food)}!`;
console.log("Function in template literal:", foodMessage); // Output: I love Pizza!

// ----------------------------------------------------------------------------
// 5. Using Array join() Method
// ----------------------------------------------------------------------------
// Useful when concatenating many strings, especially in loops.

let words = ["JavaScript", "is", "a", "versatile", "language"];
let sentenceFromArray = words.join(" ");
console.log("Using join():", sentenceFromArray);
// Output: JavaScript is a versatile language

// Custom separator
let tags = ["javascript", "web", "coding"];
let tagString = tags.join(", ");
console.log("Tags:", tagString); // Output: javascript, web, coding

// Building HTML list items
let items = ["Apple", "Banana", "Cherry"];
let htmlList = "<ul><li>" + items.join("</li><li>") + "</li></ul>";
console.log("HTML list:", htmlList);
// Output: <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>

// ----------------------------------------------------------------------------
// Performance Considerations
// ----------------------------------------------------------------------------
/*
 * - For simple concatenations, + or += is fine.
 * - For many concatenations (e.g., in loops), Array.join() or template
 *   literals are more efficient.
 * - Template literals are generally preferred for readability and features.
 * - concat() is rarely used in modern JavaScript but good to know.
 */

// Example: Building a large string efficiently with join()
let lines = [];
for (let i = 1; i <= 5; i++) {
    lines.push(`Line ${i}: This is line number ${i}.`);
}
let fullText = lines.join("\n");
console.log("Efficient concatenation with join():");
console.log(fullText);

// ----------------------------------------------------------------------------
// Common Pitfalls
// ----------------------------------------------------------------------------

// Pitfall 1: Type coercion confusion
let tricky = "5" + 3 + 2; // Evaluates left to right: "5" + 3 = "53", then "53" + 2 = "532"
console.log("'5' + 3 + 2 =", tricky); // Output: 532 (string)

let tricky2 = 3 + 2 + "5"; // Evaluates left to right: 3 + 2 = 5, then 5 + "5" = "55"
console.log("3 + 2 + '5' =", tricky2); // Output: 55 (string)

// Pitfall 2: undefined and null become strings
let undefinedStr = "Value: " + undefined;
console.log(undefinedStr); // Output: Value: undefined

let nullStr = "Value: " + null;
console.log(nullStr); // Output: Value: null

// ----------------------------------------------------------------------------
// Summary
// ----------------------------------------------------------------------------
/*
 * + / +=  : Simple, widely used, good for small concatenations
 * concat(): Explicit method, can chain multiple strings
 * ``      : Template literals - BEST for readability, expressions, multi-line
 * join()  : Best for concatenating many strings (especially from arrays)
 */
