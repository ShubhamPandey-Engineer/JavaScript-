//Object.assign(target,source)-This method is used to copy enumerable and own properties from a source object to a target object
const obj1={
    one:1,two:2
}

const obj2={
    a:2,b:5,c:6
}

console.log(Object.assign(obj1,obj2))

//Object.getOwnPropertyNames() -return an array of string for object property
console.log(Object.getOwnPropertyNames(obj1))

//Object.is(v1,v2)
console.log(Object.is(obj1.a,obj1.a))

//object.entries(obj)



console.log(objArr)

