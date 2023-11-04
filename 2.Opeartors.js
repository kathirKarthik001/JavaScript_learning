// Typeof Operator:

// typeof ----> (Returns the data type of a value)

var p = "Kathir Karthik"
console.log(typeof(p))      // string




// Arithmetic Operators:

// + (Addition)
// - (Subtraction)
// * (Multiplication)
// / (Division)
// % (Modulus)
// ++ (Increment)
// -- (Decrement)


var x = 10;
var y = 5;
var sum = x + y; // Addition
var difference = x - y; // Subtraction
var product = x * y; // Multiplication
var quotient = x / y; // Division
var remainder = x % y; // Modulus
x++; // Increment x by 1
y--; // Decrement y by 1








// Comparison Operators:

// == (Equality)
// === (Strict Equality)
// != (Inequality)
// !== (Strict Inequality)
// > (Greater Than)
// < (Less Than)
// >= (Greater Than or Equal To)
// <= (Less Than or Equal To)

var x = 10
var y = '10'
console.log(x == y) // true (values are equal)
console.log(x === y) // false (values and types are not the same)
console.log(x != y) // false (values are equal)
console.log(x !==y ) // true (values and types are not the same)
console.log(x > y) // false
console.log(x < y) // false
console.log(x >= y) // true
console.log(x <= y) // true








// Assignment Operators:

// = (Assignment)
// += (Add and Assign)
// -= (Subtract and Assign)
// *= (Multiply and Assign)
// /= (Divide and Assign)
// %= (Modulus and Assign)

var a = 10;
a += 5; // Equivalent to a = a + 5









// Logical Operators:

// && (Logical AND)
// || (Logical OR)
// ! (Logical NOT)

var isTrue = true;
var isFalse = false;
var result = isTrue && isFalse; // false
var anotherResult = isTrue || isFalse; // true
var notResult = !isTrue; // false








// Bitwise Operators:

// & (Bitwise AND)
// | (Bitwise OR)
// ^ (Bitwise XOR)
// ~ (Bitwise NOT)
// << (Left Shift)
// >> (Right Shift)
// >>> (Unsigned Right Shift)

var num1 = 5; // 101 in binary
var num2 = 3; // 011 in binary
var bitwiseAnd = num1 & num2; // 001 (1 in decimal)
var bitwiseOr = num1 | num2; // 111 (7 in decimal)

var unsignedRightShift = num1 >>> num2;           // num1 vlaue - Shifting num2 positions to the right
console.log(unsignedRightShift)









// Conditional (Ternary) Operator:

// condition ? valueIfTrue : valueIfFalse

var age = 18;
var canVote = age >= 18 ? "Yes" : "No";
console.log(canVote)











// String Concatenation Operator:

// + (Concatenates strings)

var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;

console.log(fullName)  // "John Doe"
