
// Synchronous execution 

// next code block is executed only after the Completion of previous block 

function Sync_execution() {
    console.log("Task 1");

    console.log("Task 2");

    console.log("Task 3");
}

Sync_execution()
/*
output:
Task 1
Task 2
Task 3
*/


// Asynchronous execution 

// if a delay occurs for a particular block then next block is executed without completion of the dalaying (previous) block


function Async_execution () {
    console.log("Task 1");


    setTimeout(function(){
        console.log("Task 2");
    } ,1000)                                     // Task 2 delays for -- 1000 milliseconds
    

    console.log("Task 3");
}

Async_execution()

/*
output:
Task 1    
Task 3              -- task 3 executed before task 2
Task 2
*/