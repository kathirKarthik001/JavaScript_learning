
// Fetch method to handle with api's

// API -- Application Programming Interface 

//     Fetch method ===> native method in js for HTTP api implementations 
//     Fetch method ===> returns u with a response (as a promise )



url = "http://worldtimeapi.org/api/timezone/Europe/Paris"









//   GET - METHOD  ---> Default method


// METHOD 1

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))



// METHOD 2

async function Implement_api(){
    const response =  await  fetch(url)           // fetch returns a promise so "await" is added to resolve that.

    const data = await response.json()            // fetched resoponse is converted into jSON  format

    console.log(data)                             // data is displayed
}

Implement_api()




console.log("===================================================================================");




//   POST METHOD ----> used to submit data to be processed to a specified resource


const url_2 = "https://jsonplaceholder.typicode.com/users"

var request_2 = new Request(url_2 , {
    method :'POST',
    
    headers :{
        'Content-Type':'application/json',
    },
    
    body :JSON.stringify({                    // this part will be the output
    'name': 'kathir',
    'dept': 'cse',
    'roll':'22cs064'
    })
}) 


async function getting_data(){
    
    try{
        var response_2 = await fetch(request_2)
        var data_2 = await response_2.json()

        console.log(data_2)
        
    }
    catch(error){            // invoked when fetch operation fails
        console.log("Fetch - error :" + error.message)
    }

    

}

getting_data();





console.log("===================================================================================");



//PUT  METHOD  ---->  The PUT method is used to update a resource or create a new resource if it doesn't exist.
                        
Url = "https://jsonplaceholder.typicode.com/users/1"      // extra " /1"  is added for put method

const req = new Request( Url ,{
    headers:{
        'Content-Type':'application/json'
    },
    method:'PUT',
    body :JSON.stringify({                    // this object will be the output
        'name': 'kathir',
        'dept': 'cse',
        'roll':'22cs064'
        })

} )


fetch(req)
.then(resp => resp.json())  
.then(d => console.log(d))   







console.log("===================================================================================");




// DELETE METHOD  ---> asking to delete a resourse


// expected outputs :
// 200 : ok
// 204: No Content - Indicates successful deletion.
// 404: Not Found - Indicates the resource could not be found.
// 500: Internal Server Error - Indicates an error on the server-side.


fetch( "https://jsonplaceholder.typicode.com/users/2" , {    // extra " /1"  is added for put method
  method: 'DELETE',
  headers:{
    'Content-Type':'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error.message) );






  