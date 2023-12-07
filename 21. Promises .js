// PROMISE

//  VAR  variable  = NEW  PROMISE ( ( resolve , reject ) => { if -- resolve()  else -- reject() }

// variable.then ( () => {block_ when resolve invoked}) .catch ( () => { block_ when reject invoked })



var promise_1 = new Promise ((resolve,reject) => {

    var random_no = Math.floor(Math.random() * 2)            // function to return either 0 or 1

    if(random_no == 0){
        resolve();
    }

    else{
        reject();
    }

})

promise_1.then( () => console.log("Success")) .catch ( () => console.log("Failure"))

// success when random_no == 0
// Failure when random_no == 1


// mainly used when u are importing and reading files ---> to know about progress of a operation and for error handling



// having relatively large number of promises gives rise to callback hell 
// promise  is a ES 6  concept  replaced by async await in ES 7.