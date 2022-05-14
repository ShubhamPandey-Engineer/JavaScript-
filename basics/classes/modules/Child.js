import Parent , {outerFunc} from "./Parent.js"
class Child extends Parent{

    //custom constructor
    constructor(name,email)
    {
        super(name);
        //have to call parent constructor using super

        this.email=email;

    }

    childMethod()
    {
        super.greetPerson();
        return `Hello , ${this.email}`;
    }
}

const childObj=new Child('Shubham','shubham@gma');
console.log(childObj.childMethod())
console.log(outerFunc())


// prototype property
console.log(Child.prototype);