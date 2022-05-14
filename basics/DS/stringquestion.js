//return a string by concatining first and last three characters of string, else return same string.

let newString=(str)=>{

    
    return  (str.length <3)? str : str.slice(0,3)+str.slice(-3);

   

}
console.log(newString("an3"))


//extract first half of a string of even length.
let firstHalf=(str)=>{
    return str.slice(0,str.length/2);
}

console.log(firstHalf("shubham"))


//concatenate two stirng except first char.
let concatenteString=(...strs)=>{
    newStr=""
strs.forEach((ele)=>{
      newStr+=ele.slice(1);
})
return newStr;
}
console.log(concatenteString("shu","bham"))

//find nearest to 100;

let findNear=(...arr)=>{
    diffArr=[]
    obj={}
arr.forEach((ele)=>{
{obj[ele]=100-ele}
})

diffArr=Object.entries(obj).sort((a,b)=>{
    return a[1]-b[1]
})
console.log(diffArr)

return diffArr[0][0]

}

console.log(findNear(23,88,55))


//check a string contains 2-4 occurence of a character
let hasChar=(str,char)=>{
arr= str.split("").filter(ele=>ele===char).length
return arr
}
console.log(hasChar("Shuham",''))


// arrange in alphabetical order
let arrange=(str)=>{
return str.split("").sort().join("")
}
console.log(arrange("ffffqaaahbd"))



//count vowels:
let countVowels=(str)=>{
vowelsArr=['a','e','o','i','u'];


//contains duplicate vowels
return str.split("").filter((char)=>{
    return vowelsArr.indexOf(char) !=-1

}).length

//unique vowels 

return str.split("").filter((char)=>{
    return vowelsArr.indexOf(char) !=-1

}).length

}
console.log(countVowels("eeshuuubaio"))



//add new to string else return the string
let makeString=(str)=>{
check='New!';
return (str.includes(check)) ? str : `New!${str}`;
}

console.log(makeString("New!neccd"))