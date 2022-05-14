 function binding()
{
    if(1 == 1)
    {
        let x1 =1;
        var x2=2;
        const x3 =3;
    }

    //console.log.log(x1)  //not visible
    console.log(x2)  // visible
 //console.log.log(x3)  //not visible

}
binding();


function sameName(n)
{
console.log('var',v)
console.log('same name binding',n)  // will refer to its own n not global n
}
let v =4;  //hoisting
var n=4;
sameName(3);