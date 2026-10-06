class TodoServer {
async getTodo (){
try {
const response = await fetch ("https://jsonplaceholder.typicode.com/todos/1")  
const asyncTodo = await response.json()
return asyncTodo
} 
catch (error) {console.log(error); throw error}
}
}
class UserServer {
async getUser (){
try {
const response = await fetch ("https://jsonplaceholder.typicode.com/users/1")
const asyncUsers = await response.json()
return asyncUsers
}
catch (error) {console.log(error);throw error}
}
}
const todoServer = new TodoServer();
const userServer = new UserServer();

async function retrieveData (){
try {
const allProm = await Promise.all ([todoServer.getTodo (), userServer.getUser ()])
console.log(allProm)

const raceProm = await Promise.race ([todoServer.getTodo (), userServer.getUser ()])
console.log(raceProm)

}
catch (error) {console.log(error)}
    
}

retrieveData();
