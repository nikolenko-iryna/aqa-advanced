function objTodo (){     
return fetch ("https://jsonplaceholder.typicode.com/todos/1")
.then (response=> {
return response.json();    
})
}

function objUsers (){     
return fetch ("https://jsonplaceholder.typicode.com/users/1")
.then (response=> {
return response.json();
})
}
const resultArray = Promise.all ([objTodo (), objUsers ()])
resultArray .then (results =>{
console.log (results)
 })
.catch (error=> {
console.log (error)
})
const resultArray2 = Promise.race ([objTodo (), objUsers ()])
resultArray2 .then (result =>{
console.log (result)
 })
.catch (error=> {
console.log (error)
})
