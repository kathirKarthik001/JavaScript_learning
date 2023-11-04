

/*

 syntax:

functions are usually hoisted in js so they canbe called even above the definition as well

function <name> (parametes-list)
{
    function block

    return
}


*/


function add(x , y){
    var a = x
    var b = y
    return a+b
}
console.log(add(10,10))          //20



function addarray (x){
    console.log("Hello")
    return x[0]+x[1]
}
var y = [2,3 ,0]
console.log(addarray(y))            // hello 5