//object destructuring

const student ={
    id:'1234556',
    standard:'12th'
}

//using destructing , generate array of object
function generateObj(){
    const arr=[]
Object.entries(student).forEach(([key,value]) =>{
 arr.push({key,value})
})
return arr
}

console.log(student.gg ?? 'not defined')

console.log(generateObj())

const{id : studentId}=student;
console.log(studentId)

//array destructing

const arr=[1,2,3,4,5,6,7,8,9,10];

const[one,two,...others] =arr

console.log(one,two, others)






const arr1=['html','css','js']
const arr2=['php','nodejs']

const merged=[...arr1, ...arr2];   //spread
console.log(merged)
