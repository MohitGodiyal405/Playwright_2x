/*

var ->  the old way
var was the original keyword in JavaScript. 
It is **function-scoped**, can be **redeclared**, can be **reassigned**, 
and gets **hoisted** to the top of its scope with an initial value of `undefined`.
In modern automation code, we avoid `var` because it leaks out of `if` and `for` blocks, 
which causes confusing bugs in test loops.

*/

var v = 10;

var browser = "chrome";
var browser = "firefox"; // redeclaration allowed
browser = "edge"; // reassignment allowed

// var is function scoped

var a = 20;
console.log(a);

if (true) {
    var a = 30;
    console.log(a);
}

/* Function Scoped Meaning in JavaScript
When a variable is function-scoped, it means:
The variable exists everywhere inside the function where it was created.
var is function-scoped. */

function test() {
    var age = 25;

    if (true) {
        console.log(age); // ✅ accessible
    }

    console.log(age); // ✅ accessible
}
test();

/*Because var belongs to the whole function:
    function test() {
   ← var lives in entire area
}
It does NOT care about { } blocks. */

//ANOTHER EXAMPLE:

function demo() {

    if (true) {
        var message = "hello";
    }

    console.log(message); // ✅ works
}

demo();

//Even though message was inside if, it still works outside because var is function-scoped.



//But Outside Function
function demo() {
    var x = 10;
}
console.log(x); // ❌ Error

// Because the variable exists only inside that function.

//Function scoped = Variable can be used anywhere inside the function, but not outside the function.