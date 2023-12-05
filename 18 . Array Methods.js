// length 
const numbers9 = [1, 2, 3];
const count = numbers9.length;         
console.log(count)    // output : 3








//    Map

const numbers0 = [1, 2, 3];
const doubled = numbers0.map(num => num * 2);         
console.log(doubled)    // output : [2, 4, 6]







// Filter 

const numbers1 = [1, 2, 3, 4, 5];
const evens = numbers1.filter(num => num % 2 === 0);  
console.log(evens);      // output: [2, 4]






//reduce:

/*
 Applies a function against an accumulator and each element in the array to reduce it to a single value.

 accumulator  ===> means output of the previous iteration , while starting it uses the initial value given ,0 ---> given below

*/

const numbrs = [1, 2, 3, 4];
const sum = numbrs.reduce((acc, num) => acc + num, 0);
console.log(sum )     // sum: 10








//forEach:

// Executes a provided function once for each array element.

const colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));        // Output: red, green, blue









//find:

// Returns the first element in the array that satisfies the provided testing function

const nmbers4 = [1, 2, 3, 4, 5];
const firstEven = nmbers4.find(num => num % 2 === 0);
console.log(firstEven)          // firstEven: 2








// some and every:

// some tests whether at least one element passes the test. 
// every tests whether all elements pass the test.

const number = [1, 2, 3, 4, 5];
const hasEven = number.some(num => num % 2 === 0);
// hasEven: true

const allEven = number.every(num => num % 2 === 0);
// allEven: false












// Slice 

const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 3);
// sliced: [2, 3]                            --> same as slicing in python







// Sort 

const fruits = ['banana', 'apple', 'orange'];                       // ascending order ---> default
const sortedFruits = fruits.sort();
// sortedFruits: ['apple', 'banana', 'orange']           ---> similar to other programming languages

const rev_sortedFruits = fruits.sort().reverse()
//  rev_sortedfruits : [ 'orange', 'banana', 'apple' ]       -->  + .reverse() function to sort in descending order
//










//indexOf and lastIndexOf:

/*

indexOf    ===>    returns the index of the first occurrence of a specified value. 
lastIndexOf   ===>   returns the last occurrence.

*/

const numbers3 = [1, 2, 3, 4, 2];
const firstIndex = numbers3.indexOf(2);
// firstIndex: 1

const lastIndex = numbers3.lastIndexOf(2);
// lastIndex: 4









// includes 

const numbers5 = [1, 2, 3, 4, 5];
const includesThree = numbers5.includes(3);
// includesThree: true                  ---> checks and says whether it is present in the array or not








//Converting toString

//printing the array as comma seperated values

var util = ['Kathir','is','a','programmer','since',2010]
console.log(util.toString());







// join 

//Joining characters or something in between the elements
var util = ['Kathir','is','a','programmer','since',2010]
console.log( util.join(' '));






            
//deleting the objects or array 

// the array length won't change, but the deleted element will be set to undefined.

var data = {
                "Name"    :    "Kathir",
                "Class"   :    "CSE-B",
                "Subject" :  "web technology"
            }

console.log(data.Name);                // kathir
console.log(delete data.Class);       // class removed
console.log( data);             
            
var x = [1,2,3,4]    
console.log(delete x[0]);    // true
console.log(x);             // output :  [ <1 empty item>, 2, 3, 4 ]




//splice ---      HIGHLY RECOMENDED TO DELETE A ELEMENT

// array . splice ( index , no_of_elements_to_remove ,  elements to add if previous element is 0)

console.log("splice \n")

var emparr = [1,2,3,4]

console.log(emparr.splice(1,2));   //deleting    [2 , 3]
console.log(emparr);              // remaining    [1 , 4]
 
emparr.splice(0,0,5)                 //inserting    5 at index 0
console.log(emparr);                // output:  [ 5, 1, 4 ]








//Concat 

// adding or combining arrays together

Array_1 = [1,2]
Array_2 = [3,4]
console.log(Array_1.concat(Array_2));    // output : [ 1, 2, 3, 4 ]








//Flatening Array

let dog = [[1,2,3],[4,5,6],[7,8,9] , 99]
console.log(dog.flat());               // output :  [1,2,3,4,5,6,7,8,9,99]








//push method    --     (Adding elements to the  -  end of  -   the array)

var array_3 = ["rocky","bruce lee"]

array_3.push("tate","Jachie chan")

console.log(array_3);          // output: [ 'rocky', 'bruce lee', 'tate', 'Jachie chan' ]








//unshift Method      --   (Adding elements to the    - front of -   the array)

var birds = [2,3,4,5,6,6,7,90]
birds.unshift(11,33,55,66)
console.log(birds);






//pop method        (Removing elements    - at end)
var birds2 =  [3,5,6,7,8,9,23]
birds2.pop()
console.log(birds2);      // output : [ 3, 5, 6, 7, 8, 9 ]    -- 23 removed







//shift method         (Removing elements   - at front)

birds2.shift();
console.log(birds2);            // output: [ 5, 6, 7, 8, 9 ]      -- 3 removed
 










