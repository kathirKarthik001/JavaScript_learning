// ARROW FUNCTIONS

// SYNTAX

//        variable_type  variable = (parameter -list)  => {
//               block of function,
//               return    ****madatory***
//        }

// if {}  not used then return is not needed
// if only one parameter the () no needed
// if one line function then {} not needed





var x = () => console.log("Hello world !") 

console.log(x);      // OUTPUT :      () => console.log("Hello world !")

x();                // OUTPUT :        Hello world !              -----> Function got executed


const add =(x,y) => {
    var res = x+y;
    return res;
}

console.log(add(2,3))    // OUTPUT:  5             

// if nothing is returned from the function then the result will be undefined


var sq = a => a*a;
 
console.log(sq(3))       // OUTPUT:  9


// working with objects (dictionaries)

var dist = name => ({ "Name":name})

console.log(dist("kathir"))       // OUTPUT :  { Name: 'kathir' }


// FILTERING 

var list = [1,2,3,4,5,6,7,8,9,10]

console.log(list.filter(y => y > 5 ))  // OUTPUT :   [ 6, 7, 8, 9, 10 ]


// MAPPING 

var lit = [1,2,3,4,5,6,7,8,9,10]

console.log(lit.map(y => y+10))    //   OUTPUT:  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]



