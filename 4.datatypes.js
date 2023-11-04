var age = 30;
var price = 9.99;
console.log(typeof(age))      //number





const bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof(bigNumber))     //bigint    --> very large number ending with the value "n" at last




var name = "Alice";
var message = 'Hello, world!';
console.log(typeof(name))     // string

var isTrue = true;
var isFalse = false;
console.log(typeof(isTrue))   // Boolean



var x;
console.log(x);               // Output: undefined        --> since no value given it is a undefined datatype
 


var y = null;
console.log(typeof(y))        // Output: object        --> since objects will have null value



const uniqueSymbol = Symbol("description");
console.log(uniqueSymbol)        
console.log(typeof(uniqueSymbol))        // Output: object        --> since objects will have null value