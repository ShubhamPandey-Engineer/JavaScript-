//String functions

const str="34Shubham 34 Pandey  ,21"
//1- charAt -return the char at a particular position else  empty
console.log(str.charAt(222))

//2-codeAt-   return the unicode of a char
console.log(str.charCodeAt(1))

//3-concat()
 console.log(str.concat())

 //4-endsWith() - check whether a string ends with a specified character/string 
 console.log(str.endsWith("21"))

 //4-fromCharCode()- convert a unicode value into character
 console.log(String.fromCharCode(str.charCodeAt(2)))

 //5-includes -determines whether a string contains a particular character
 console.log(str.includes(","))

 //6-lastIndexOf(search,start)   -return the last index of a character from a string else -1
 console.log(str.lastIndexOf("34"))

 //7-localeCompare() -return 1 if str1 is sorted after str2 ,else -1 ,otherwise 0(equal string)
 console.log(str.localeCompare("a"))

 //8-match() -  searches a string for a match using a regualar expression
 console.log(str.match("S"))

 //9 -search()  -searches for a pattern in a string 
 console.log(str.search(/Shu/))

 //10-replace() - replace the matched RE pattern with a value
 console.log(str.replace(/Shubham/,"Fan"))

 //11- repeat() -returns  a new string with a specified number of copies of the string
 console.log(str.repeat(2))

 //12-slice() - return the extracted part of a string
 console.log(str.slice(str.search("Shubham"),str.indexOf("m")+1))

 //13-startWith() -determines whther a string begins    with characters of specified string
 console.log(str.startsWith("34S"))

 //14- substr()
 console.log(str.substr(-1,0))

