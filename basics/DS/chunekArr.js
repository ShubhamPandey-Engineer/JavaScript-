//Q2: Given a string, reverse each word in the sentence
let reverseSentence=(str)=>{
    st=""
str.split(" ").forEach((ele)=>{
st+=ele.split("").reverse().join("")+" "
})
return st.trim();
}

console.log(reverseSentence("Hello ,    my name is shubham"))