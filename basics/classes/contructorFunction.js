function Person(first, last, age, gender, interests) {
    this.name = {
       first : first,
       last : last
    };
    this.age = age;

    // readonly property
    let token='mytokenvalue';

    //getter for readonly property
    Object.defineProperty(this,'token',{
        get:function()
        {
            return token
        },
        set:function(value){
            token =value
        }
    })

    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };


    this.greeting = function() {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  }

  const  obj1=new Person('sp','p',23,'male',['d','f'])
  //console.log(obj1.constructor)

  //call  method() - call the function with a given this value
  let o =Person.call({},'dc')
  console.log(obj1.token)
