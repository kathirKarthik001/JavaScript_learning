//  if else


var year = 3000

if (year % 4 === 0) {
    if (year % 100 !== 0) {
        console.log(year + " is a leap year.");
    } else {
        if (year % 400 === 0) {
            console.log(year + " is a leap year.");
        } else {
            console.log(year + " is not a leap year.");
        }
    }
} else {
    console.log(year + " is not a leap year.");
}






// for loop

var n = 10
for (var i= 1; i<=n ; i++){
    console.log(i)
}

var fruits = ["apple", "banana","grapes","strawberry"]
for (var fruit in fruits){
    console.log(fruits[fruit])
}

for(var i=0;i<fruits.length; i++){
    console.log( fruits[i] )
}

for (var i = 1  ; i<=10;  i++){
    console.log(i," x 2  =",i*2)
}





// while loop 
count = 0;
while(count<5){
    console.log("count:"+count)
    count++
}






// do while
var wish = false
do{
    console.log("=====Menu=====")
    console.log("\toption")
    console.log("\toption")
    console.log("\toption")
    console.log("\toption")
}
while(wish)