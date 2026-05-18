// =====================================================
// 05_Operator.js
// == (Loose Equality) vs === (Strict Equality)
// =====================================================

console.log("== vs === in JavaScript\n");

// -----------------------------------------------------
// 1. BASIC DIFFERENCE
// -----------------------------------------------------
// ==  -> compares values after performing TYPE COERCION (conversion)
// === -> compares values AND types without any type coercion
// -----------------------------------------------------

let num = 5;
let strNum = "5";

console.log("1. BASIC DIFFERENCE");
console.log("   let num = 5;");
console.log("   let strNum = '5';\n");

console.log("   num == strNum   ->", num == strNum, "  // true: '5' is coerced to 5");
console.log("   num === strNum  ->", num === strNum, " // false: number !== string\n");

// -----------------------------------------------------
// 2. NUMBER vs STRING
// -----------------------------------------------------
console.log("2. NUMBER vs STRING COMPARISONS");
console.log("   10 == '10'   ->", 10 == "10", "  // true: string converted to number");
console.log("   10 === '10'  ->", 10 === "10", " // false: different types\n");

console.log("   0 == '0'     ->", 0 == "0", "  // true");
console.log("   0 === '0'    ->", 0 === "0", " // false\n");

// -----------------------------------------------------
// 3. BOOLEAN COMPARISONS
// -----------------------------------------------------
console.log("3. BOOLEAN COMPARISONS");
console.log("   true == 1    ->", true == 1, "  // true: true coerces to 1");
console.log("   true === 1   ->", true === 1, " // false\n");

console.log("   false == 0   ->", false == 0, "  // true: false coerces to 0");
console.log("   false === 0  ->", false === 0, " // false\n");

console.log("   true == '1'  ->", true == "1", "  // true");
console.log("   false == ''  ->", false == "", "  // true: empty string coerces to 0/false\n");

// -----------------------------------------------------
// 4. NULL and UNDEFINED
// -----------------------------------------------------
console.log("4. NULL and UNDEFINED");
console.log("   null == undefined   ->", null == undefined, "  // true: special case in JS");
console.log("   null === undefined  ->", null === undefined, " // false: different types\n");

console.log("   null == 0   ->", null == 0, "  // false: null only equals undefined with ==");
console.log("   undefined == 0 ->", undefined == 0, " // false\n");

// -----------------------------------------------------
// 5. EMPTY STRING and ZERO
// -----------------------------------------------------
console.log("5. EMPTY STRING and ZERO");
console.log("   '' == 0      ->", "" == 0, "  // true: '' coerces to 0");
console.log("   '' === 0     ->", "" === 0, " // false\n");

console.log("   '' == false  ->", "" == false, "  // true");
console.log("   '' === false ->", "" === false, " // false\n");

// -----------------------------------------------------
// 6. OBJECT / ARRAY COMPARISONS (Reference Types)
// -----------------------------------------------------
console.log("6. OBJECT / ARRAY COMPARISONS");

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log("   let arr1 = [1, 2, 3];");
console.log("   let arr2 = [1, 2, 3];");
console.log("   let arr3 = arr1;\n");

console.log("   arr1 == arr2   ->", arr1 == arr2, "  // false: different references");
console.log("   arr1 === arr2  ->", arr1 === arr2, " // false: different references\n");

console.log("   arr1 == arr3   ->", arr1 == arr3, "  // true: same reference");
console.log("   arr1 === arr3  ->", arr1 === arr3, " // true: same reference\n");

let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log("   {a:1} == {a:1}   ->", obj1 == obj2, "  // false: different objects");
console.log("   {a:1} === {a:1}  ->", obj1 === obj2, " // false\n");

// -----------------------------------------------------
// 7. TRICKY / EDGE CASES
// -----------------------------------------------------
console.log("7. TRICKY / EDGE CASES");
console.log("   '0' == false   ->", "0" == false, "  // true: both coerce to 0");
console.log("   '0' === false  ->", "0" === false, " // false\n");

console.log("   [] == false    ->", [] == false, "  // true: [] coerces to 0");
console.log("   [] === false   ->", [] === false, " // false\n");

console.log("   [1] == '1'     ->", [1] == "1", "  // true: [1] coerces to '1' then to 1");
console.log("   [1] === '1'    ->", [1] === "1", " // false\n");

console.log("   NaN == NaN     ->", NaN == NaN, " // false: NaN is never equal to anything");
console.log("   NaN === NaN    ->", NaN === NaN, " // false\n");

console.log("   null == false  ->", null == false, " // false");
console.log("   undefined == false ->", undefined == false, " // false\n");

// -----------------------------------------------------
// 8. OBJECT to PRIMITIVE COMPARISON
// -----------------------------------------------------
console.log("8. OBJECT to PRIMITIVE COMPARISON");
let obj = {
  valueOf: function () {
    return 42;
  },
};

console.log("   let obj = { valueOf: () => 42 };");
console.log("   obj == 42   ->", obj == 42, "  // true: calls valueOf()");
console.log("   obj === 42  ->", obj === 42, " // false\n");

// -----------------------------------------------------
// 9. BEST PRACTICE
// -----------------------------------------------------
console.log("9. BEST PRACTICE");
console.log("   ✅ ALWAYS use === (strict equality) by default.");
console.log("   ✅ It avoids unexpected type coercion bugs.");
console.log("   ✅ Use == only if you explicitly need type coercion.");
console.log("   ✅ Linters like ESLint flag == usage with 'eqeqeq' rule.\n");

// -----------------------------------------------------
// 10. SUMMARY TABLE
// -----------------------------------------------------
console.log("10. SUMMARY TABLE\n");
console.log("   Expression           == Result    === Result");
console.log("   --------------------------------------------");
console.log("   5 == '5'             true        false");
console.log("   true == 1            true        false");
console.log("   null == undefined    true        false");
console.log("   '' == 0              true        false");
console.log("   [] == false          true        false");
console.log("   [1] == '1'           true        false");
console.log("   NaN == NaN           false       false");
console.log("   {a:1} == {a:1}       false       false");
console.log("   sameRef == sameRef   true        true\n");

console.log("========== END OF OPERATOR CONCEPTS ==========");
