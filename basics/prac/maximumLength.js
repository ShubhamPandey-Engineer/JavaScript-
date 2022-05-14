//Find Longest Word in a String
function longestWord(str)
{
    l =str.split(' ')
  let  map=new Map();

  l.forEach((word)=>{
      map.set(word,word.length)

  })

  
  


  
  


    /*
let l=str.split(' ').map((word)=>{
return word.length

})*/

console.log(Math.max(...l))
}

console.log(longestWord('Hello  my name is shubham'))