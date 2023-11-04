// var is function-scoped and hoisted.
// let is block-scoped and not hoisted.
// const is block-scoped and cannot be reassigned but allows modification of object and array properties.


var a = 10
var b = 20
console.log(a+b)

{
    var x = 100                  // var - global scope can be accessed inside as well as outside
    let y = 200

    console.log(y)
}

console.log(x)

// console.log(y)     - gives variable not found error

// won't print bcoz let - private accessed only within the block

const weekdays = 7
console.log("Weekdays = ",weekdays)

{
    const v = 80

    // v = 60       const cant be changed

    console.log(v)
}

// console.log(v)               gives error as const is block scoped

// won't print bcoz let - private accessed only within the block



// console.log()     function (print function)

console.group("Group 1");      // grouping
console.log("Log 1");                                      
console.log("Log 2");
console.groupEnd();
                           
console.group("Group 2");             
console.log("Log 3");
console.groupEnd();


// Output
// Group 1
//      Log 1
//      Log 2
// Group 2
//      Log 3



const person = { name: "Bob", age: 25 };
const fruits = ["apple", "banana", "cherry"];
console.log(person);
console.log(fruits);


const name = "Alice";
const age = 30;
console.log(`Name: ${name}, Age: ${age}`);

console.log("Value 1:", name, "\nValue 2:",age);