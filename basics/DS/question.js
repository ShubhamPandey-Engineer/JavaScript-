//sum of two no is  100 or one num is 100
let sumHundred=(...nums)=>{
return ((nums[0]  ==100 || nums[1] == 100) || (nums[0]+nums[1] ==100)) ? true :false;
}
console.log(sumHundred(100,90))

//find no. of even digit in an array
let  evenCount=(arr)=>{
return arr.filter(num=>num%2 === 0).length;
}

console.log(evenCount([0,5,4,22]))


//find total even no.

let findEven=(num)=>{
    count=0;
for(let i=1;i<=num;i++)
{
if(i%2==0){
    count++;
}
}
return count;
}
console.log(findEven(5))


//find larget even no. 

let largestEven=(arr)=>{

return Math.max(...arr.filter(num=>num%2 ==0))

}

console.log(largestEven([2,5,6,7,8,88]))


//replace first digit in a string with $
let replaceDigit=(str)=>{

return str.replace(/[0-9]/,'$')
}

console.log(replaceDigit("IamShubham24"))