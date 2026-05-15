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