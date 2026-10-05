async function objTodo (){     
try {const response = await fetch ("https://jsonplaceholder.typicode.com/todos/1")  
const asyncTodo = await response.json()
return asyncTodo}
catch (error) {console.log(error);throw error}
}
async function objUsers (){     
try {const response = await fetch ("https://jsonplaceholder.typicode.com/users/1")
 const asyncUsers = await response.json()
 return asyncUsers}
 catch (error) {console.log(error);throw error}
}
async function retrieveData (){
try {
const allProm = await Promise.all ([objTodo (), objUsers ()])
console.log(allProm)
const raceProm = await Promise.race ([objTodo (), objUsers ()])
console.log(raceProm)
    }
catch (error) {console.log(error)}
    
}
retrieveData()



