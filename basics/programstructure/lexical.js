
function globalFunction(){
    let b=10;
    firstFunction();
  function  firstFunction(){
      let f=2;
        console.log('I am using my lexical environment',b);
        secondFunction();

        function secondFunction(){
            console.log("I am also using my lexical environment",b)
        }
    }
}

globalFunction();