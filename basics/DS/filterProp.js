
obj1={
    one:"prop",
    two:"two",
    owl:"fvfv"
}
var filterProperty=(obj)=>{
    ob={}
    for(let key in obj)
    {
    if(key.startsWith("o"))
    {
        ob.key=obj[key]
    }

    }
    return ob;
}
let objArr=Object.entries(obj1);

let makeObject=(arr)=>{
arr.map(ele=>{
    console.log(filterProperty({"o":"dc"}))
})
}

makeObject(objArr)

c=filterProperty(obj1)
//console.log(c)








