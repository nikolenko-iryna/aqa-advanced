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
const todoPromise = objTodo();
const userPromise = objUsers();

 todoPromise.then (todo=> {
    console.log (todo)
 })

 .catch (error=> {
    console.log (error)
 })
 
 userPromise.then (user=> {
    console.log (user)
 })

 .catch (error=> {
    console.log (error)
 })
 const arrayPromise = [todoPromise , userPromise] 
 const resultArray = Promise.all (arrayPromise)
 resultArray .then (results =>{
    console.log (results)
 })
 .catch (error=> {
    console.log (error)
})
 const resultArray2 = Promise.race (arrayPromise)
 resultArray2 .then (result =>{
    console.log (result)
 })
 .catch (error=> {
    console.log (error)
})