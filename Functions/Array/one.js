//a -object.copyWithin(target,start,end) -Copies arrays elements to last position in array
const arr=["fan","fan","pandey","dc","dc"]
console.log(arr.copyWithin(2,0))

//b -object.entries()
const newArr=arr.entries()
for (x of newArr) {
    
        console.log(x)
  
}

//c- object.every()
console.log(arr.every(isValid))

function isValid(ele){
    return ele.length <10
}


//d -object.fill - fill the array  with new values(existing array)
const fillArray=arr.fill("new",2)
console.log("after fill()",fillArray)


//e -object.filter() -creates a new elements filled with passed cases
const lengthTwo=arr.filter((ele,index,arr)=>{
    console.log(ele.length)
    return ele.length ==3
})
console.log(lengthTwo)


//f -object.find()   -return the first element in the array that passes the test case(and don't check the remaining part ) else return undefined
const isFan=arr.find((ele,index)=>{
    return ele
})
console.log(isFan)


//e -object.findIndex()  -return the index of first element of the array that passes the test


//f -Array.from()   -creates array from the string
const st="Shubham Pandey"
const namesArr=Array.from(st)
console.log(namesArr)


//g -object.includes()   -returns true if array has that element else false
console.log(arr.includes("fan"))


//h  -object.indexOf()  -return the index of first occurence of the element else -1
console.log(arr.indexOf("faln"))


//i   Array.isArray()  -check whether parameter is array or not(return true/false)
console.log(Array.isArray((st)))


//j object.join()   -convert an string to array using a split char..
console.log(st.split(" "))


//k  object.map()    -createa a new array with passesd element cases
const lengthThree=arr.map((ele)=>{
if(ele.length = 3){
    return ele
}
})
console.log(lengthThree)


//l  object.reduce()     return a new array that is in single value (left -right)
numbers=[0,2]
l=numbers.reduce((t,n)=>{
    return  t-n
})
console.log(l)


//m  object.slice()    -create an new array with selected element
const sliceArr=arr.slice(0,2)
console.log(sliceArr)