let arrObj=[
    {name:'ww'},
    {name:'qwert'},
    {name:'sddd'},
    {name:'ff'}
]

function funcBreak()
{
    for(let item of arrObj)
    {
        if(item.name == 'qwert')
        {   console.log(item.name)
            var i=item.name
            break;
        }
      console.log(' i am inside loop',i)  // undefined
    }
    console.log(' i am outside loop',i)  // 'qwert'

}


//funcBreak()



function  funcContinue()
{
    for(let item of arrObj)
    {
        if(item.name == 'qwert')
        {   console.log(item.name)
            var i=item.name
            continue;
        }
      console.log(' i am inside loop',i)  // undefined
    }
    console.log(' i am outside loop',i)  // 'qwert'
}


funcContinue();