//console.log('let hoisting',letHos)
console.log('var hoisting',varHos)


// function hoisting
myFunc();
const  b=3;
{
    const b=4;
}

console.log(b)
let letHos=4;
var varHos=1;



// function hoisting
function  myFunc()
{
    console.log("called before declaration")
}



console.warn("Variable environment")
// variable environment
var x=1;
f1();
f2();
console.log('global',x) 
function f1()
{
    var x=10;
    console.log('f1',x)
}

function f2()
{
    var x=100;
    console.log('f2',x)
}


