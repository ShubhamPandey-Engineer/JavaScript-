function findMax(...arr)
{
    let max=arr[2];
    for (const item of arr) {
        if(item>max)
        {
            max=item;
        }
        
    }

    console.log(max)

}
console.log(findMax(9,8,99,5))