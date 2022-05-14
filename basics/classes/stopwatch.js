function stopWatch()
{
     this.startTime=0;

    this.start=function()
    { 
        if(this.startTime >0)
        {
            throw Error("method already running....")
        }
        setInterval(()=>{
           this.startTime++;
          // console.log(this.startTime)
        },1000)
    };

    this.stop=function()
    {
        if(this.startTime ==0)
        {
            throw Error("timer not  running....")
        }
      this.startTime=0;
    }

    this.duration=function()
    {
        return this.startTime;
    }





}


const watch=new stopWatch();
console.log(watch.start());

/*
setTimeout(()=>{


console.log(watch.duration())
console.log(watch.start())
},3000)
*/
console.log(Object.prototype)


