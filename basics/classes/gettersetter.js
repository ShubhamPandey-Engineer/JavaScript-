function User(name){
this.name=name


Object.defineProperty(this,'getName',{
   
    writable:false
}

)

}

const obj=new User('shubham');

console.log(obj.getName)
