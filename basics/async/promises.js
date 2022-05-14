

async function  asyncFunc(){

  
let fetchPromise=await  fetch('https://jsonplaceholder.typicode.com/todos') //await stop the assignment until promise is resolved
if(fetchPromise.status !=200)
{
    //console.log('cool')
    throw new Error("Data not fetched")
}
return await  fetchPromise.json();

}

console.log('1')

asyncFunc()
.then(data=>console.log(data))
.catch(err=>console.log(err.message))
console.log('2')
console.log('3')
console.log('4')

fetch('https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=Harry%20Potter')
.then(res=>res.json())
.then(data=>console.log(data))





