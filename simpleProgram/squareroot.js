function squareRoot(...arr){
arr=arr.filter((num)=>{
    if(num%2!=0)
    {
        return Math.sqrt(num)
    }
})
return arr
}

console.log(squareRoot(9.2,16))