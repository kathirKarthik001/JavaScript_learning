// CALL BACKS

//  A function is passed as a  parameter to another function.

//   i.e,  when Task_1 ()  function is called as   Task_1( Task_2() )
//   then it is termed as call back 

//   here Task_1( ) is executed first and inside Task_1()  the next function is called using callback().





function  Task_1 ( callbacks){

    console.log("Task 1 : start ")

    setTimeout(()=>{  
        console.log("Task 1 : end")        // delay started in a asynchronous manner
    },2000)

    callbacks();                 // calls the parameter function  Task_2 ()
}

function Task_2(){
    console.log("Task 2 : start")

    setTimeout( () =>{
        console.log("Task 2 : end")

    } , 2000)
}

Task_1 (
     ()=>{
    Task_2();
}

)

/*

Task 1 : start 
Task 2 : start
Task 1 : end
Task 2 : end

*/

// When u use a large number of callbacks  then it becomes very difficult to handle which we say as CALL BACK HELL.

// so it was replaced in the ES5.