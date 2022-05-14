console.log("variabl.js loaded");

//global scope - window object .  which can access anywhere in the program.
// function scope - can be access inside a function scope'
//Block scope - can be access withhin a block of code {}.

//1 > var - var  declarations  are global / function scope , does not respect the block scope

var globalV = "I am at global scoped";
function f1() {
  // fucntionV is declared here ( hoisting)

  var globalV2 = "f";

  if (true) {
    var globalV2 = "q"; // re-decalred at same scope
    var functionV = "I am at function scoped"; // function scoped
  }
  console.log(globalV2);
}

console.log(globalV);

f1();

//2>  let & const
/* these are block-scoped
const variables can be updated but let variable can .
 */

function f2() {
  /*hoisting
    let v1;*/ // not initialized i.e it's in temporal dead-Zone

  let v1 = "I am at local scope";

  if (true) {
    let v1 = "I am at block scope";
  }

  console.log(v1);
}
