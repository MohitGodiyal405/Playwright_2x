// ==========================================
// JavaScript Hoisting - Concept & Examples
// ==========================================

// Hoisting is JavaScript's default behavior of moving 
// declarations to the top of their containing scope 
// during the compile phase, before code execution.

// ------------------------------------------
// Example 1: Variable Hoisting with 'var'
// ------------------------------------------
// Variables declared with 'var' are hoisted to the top 
// of their function or global scope, but only the 
// declaration, not the initialization.

console.log(myVar); // Output: undefined (not ReferenceError)
var myVar = 100;
console.log(myVar); // Output: 100

// Internally, the above code behaves like this:
// var myVar;
// console.log(myVar); // undefined
// myVar = 100;
// console.log(myVar); // 100


// ------------------------------------------
// Example 2: Variable Hoisting with 'let' and 'const'
// ------------------------------------------
// 'let' and 'const' are also hoisted, but they remain 
// in a "Temporal Dead Zone" (TDZ) from the start of 
// the block until the declaration is encountered.
// Accessing them before declaration throws a ReferenceError.

// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 200;

// console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 300;


// ------------------------------------------
// Example 3: Function Declaration Hoisting
// ------------------------------------------
// Function declarations are hoisted completely, 
// meaning both the declaration and the body are moved to the top.

sayHello(); // Output: Hello! (works fine even before declaration)

function sayHello() {
    console.log("Hello!");
}


// ------------------------------------------
// Example 4: Function Expression Hoisting
// ------------------------------------------
// Function expressions are NOT hoisted.
// If you declare a function using a variable, 
// only the variable declaration is hoisted, not the function assignment.

// sayGoodbye(); // TypeError: sayGoodbye is not a function

var sayGoodbye = function () {
    console.log("Goodbye!");
};

sayGoodbye(); // Output: Goodbye!

// The above behaves like:
// var sayGoodbye;
// sayGoodbye(); // TypeError
// sayGoodbye = function() { ... };


// ------------------------------------------
// Example 5: Order of Precedence (Variable vs Function)
// ------------------------------------------
// If a variable and a function have the same name, 
// the function declaration takes precedence during hoisting.

var myName = "Alice";

function myName() {
    return "Bob";
}

console.log(typeof myName); // Output: string
// Note: The variable assignment overwrites the function declaration.
// During hoisting, the function declaration is processed first, 
// but then the variable assignment happens during execution.


// ------------------------------------------
// Example 6: 'var' inside a Function Scope
// ------------------------------------------
// Hoisting happens within the function's own scope.

function showAge() {
    console.log(age); // Output: undefined
    var age = 25;
    console.log(age); // Output: 25
}

showAge();
// console.log(age); // ReferenceError: age is not defined (function scoped)


// ------------------------------------------
// Key Takeaways:
// ------------------------------------------
// 1. 'var' declarations are hoisted and initialized with 'undefined'.
// 2. 'let' and 'const' declarations are hoisted but NOT initialized (TDZ).
// 3. Function declarations are hoisted with their definition.
// 4. Function expressions are NOT hoisted as functions.
// 5. Always declare variables and functions at the top of their scope 
//    to avoid confusion and bugs.
