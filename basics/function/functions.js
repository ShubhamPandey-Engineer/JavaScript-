// function statement - support hoisting
f1();
function f1()
{
    console.log("I am am function statement")
}

//v()

// function expression - does not support hoisting
var v =function f2()
{
    console.log("I am am function expression")  
}


// named function expression
var named =function xyz()
{

}


//first class function ( abilit to use function as values ,returning , passing it)

var n =function (p)
{
    console.log(p)
    return function()
    {
        console.log('inner',p)
    }
}

n(function(){
    console.log('arg')
})

