function start(){
    let start=new Date().getSeconds();
    let end=new Date().getSeconds();
    return end-start

}


//Find the first pair of zero sum
function zeroSum(arr){
    let start=new Date().getSeconds();
for(let i=0;i<arr.length;i++)
{
    for(let j=1;j<arr.length;j++)
    {
        if(arr[i]+arr[j] == 0)
        {
            return [arr[i],arr[j]]
        }
    }
}
let end=new Date().getSeconds();
console.log(end-start)
}
console.log(zeroSum([1,-1,1,3,9,5]))


let set=new Set();
arr=[1,4,5,6]
set.add(...arr)
console.log(set)