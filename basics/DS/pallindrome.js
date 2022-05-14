let isPallindrom=(str)=>{
console.log(str.split("").reverse().join(""))
newStr="";
for(let i=0;i<str.length;i++)
{
newStr+=str[str.length-i-1];

}
return newStr === str ? true :false;
}
console.log(isPallindrom('oye'))