/* Write a range function that takes two arguments, start 
and end, and returns an array containing all the numbers from start up to (and including) end */

let returnArr=(...input)=>{
    arr=[]
    for(let n=input[0];n<=input[input.length-1];n++)
    {
        arr.push(n)
    }
    return arr;
}
//console.log(returnArr(2,10))



//reverse array

let reverArray=(arr)=>{
    ar=[]
    for(let i=0;i<arr.length;i++)
    {
        ar[i]=arr[arr.length-i-1];
    }
    return ar;
}


console.log(reverArray([2,4,5,6,7,8]))