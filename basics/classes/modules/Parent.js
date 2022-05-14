 export default  class Parent{
    
    constructor(name)
    {
        this.name=name;
    }

greetPerson(){
    console.log('Parent method')
    return `Hello ${this.name}`;
    }

}
  export  function outerFunc(){
         return 'this is named export'
}

//obj
const p1 =new Parent('shubham');
