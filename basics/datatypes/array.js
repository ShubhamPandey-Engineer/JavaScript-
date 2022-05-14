//create array
let arr1=['qwerty','qwsdf','to','sp'];
let arr2=['qwerty','rfrf','t'];

//methods

//1- concat
let contactArr=arr1.concat(arr2);
console.log(contactArr);

//2- enteries()
let enteries=arr1.entries();
for(let item of enteries)
{
    console.log(item)  // [index,value]
}

//3 -keys()
let keys=arr1.keys();
for(let key of keys)
{
    console.log(key)  // index
}

//4- values()
let values=arr1.values();
for(let val of values)
{
    console.log(val)  // values
}


//5 -every() -check each element for a condition
let lenFour=arr1.every((curr,index,arr)=>{
    console.log(curr)
    return curr.length ==4
})
console.log('check each element of arr1 for length four',lenFour)


//6 some ()

let lenTwo=arr1.some((curr,index,arr)=>{
    console.log(curr)
    return curr.length == 2;
})
console.log('check any element of arr1 for length two',lenTwo) // check any element of array satisfy the condition

//7- from()
let myMap=new Map();
myMap.set('name','sp');
myMap.set('class',4)
let mapArray=Array.from(myMap)  //  [ [k,v],[k,v]]
console.log(mapArray)
for(let items of mapArray)
{
    console.log(items)  // [key,val]
}



//8   - includes()
console.log(arr1.includes('s'))

//9 -slice() -- return a new array
console.log(arr1.slice(1,3))

//10 -splice  - same arr
//console.log(arr1.splice(1,2))


//11 - filter()
let twoLength =arr1.filter((curr, index,arr)=>{
    return curr.length == 2;
})
console.log('elements with two length',twoLength);

//12- map()  creates a new array with the results of calling a function for every array element.
let newArr=arr1.map(lengthTwo);

function lengthTwo(element)
{
    return element.slice(0,2)
}
console.log('making element of length two',newArr)

//13 -Array.prototype
Array.prototype.name='array'

Array.prototype.upperCaseElement=function()
{
    for(let i=0;i<this.length;i++)
    {
        this[i]=this[i].toUpperCase();

    }
    return this
}

console.log(arr1.upperCaseElement())
