console.log("Automatic type conversion(type coersion----");

//Nan
console.log('8 * \'str -->',8*  'str')

//str23
console.log(" \'str' +23--->",'str'+23)

//-4
console.log(" \'str' -1 --->",1- '5')


//NaN
console.log(" \'str' * 4",'23' * 23)

console.log(" true * true",true * false)

//NaNstr
console.log(" \'str' +NaN--->",NaN+'str')


//comparing values using ==
console.log(' true == NaN', undefined == null)

//avoid automatic type conversion by using ===
console.log(undefined === null)
console.log(0 === false)

 


//logical operators(convert their left value to boolean type)
//1 ||  will convert left value to true , else return right value.
console.log(NaN || 0)

//2 && will cov=nvert left value to false , else return right value.
console.log(3 && 0)
