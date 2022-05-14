//check object contains same properties
obj1={
    prop1:"one",
    prop2:'two'
}


obj2={
    prop1:"one",
    prop2:'two'
}
let sameProperties=(...objArr)=>{
    //return Object.keys(obj1).every(key=>obj2[key])

return Object.entries(objArr[0]).toString()  === Object.entries(objArr[1]).toString()
}
console.log(sameProperties(obj1,obj2))


//csv
text=`dcdc,dcdc,ddc
dcdc,dcdc,dee
ecdc,dcdc,ddc

`
let csv=(text)=>{

return csv.split("\n").map(arr=>{
    arr.split(",")
})

}
console.log( text)

