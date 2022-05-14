
//object
let obj={
    name:'ShubhM',
    id:1,
    age:[1,23]
}

//array of object

let arrObj=[
    {name:'qwert'},
    {name:'sddd'}
]


// for in statement( use this for iterating over object property)

for(let prop in obj)
{
   // console.log(obj[prop])   // use obj[prop]
}

// for of ( use this for iterating over array ,string values)

for(let val of arrObj)
{
    console.log(val.name)   // use val.prop
}

