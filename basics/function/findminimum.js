let returnMinimum=(num1,num2)=>{
    return Math.min(num1,num2);
}

console.log(returnMinimum(3,6))


//count uppercase B
let countB=(str)=>{
    
    count=0;
    for(let i=0;i<str.length;i++)
    {
    if(str[i] =='B')
    {
        count++;

    }

}
console.log(count)
}
countB('dfBBdcd B')