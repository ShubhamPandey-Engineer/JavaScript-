let str="My first String";
//toUpperCase()
console.log(str.toUpperCase())

//slice
console.log(str.slice(0,4))

//padding
console.log(str.padStart(2,'2'))

//rest parameter
let findMax=(...nums)=>{
console.log(Math.max(...nums))
}
findMax(2,5,6,7);






