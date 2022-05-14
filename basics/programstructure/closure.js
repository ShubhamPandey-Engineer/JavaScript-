function myFunc(){
    var a=7;
   return function y(){
        console.log(a);
    }

}

let func=myFunc();
console.log(func)