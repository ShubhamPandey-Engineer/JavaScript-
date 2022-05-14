let calculate = (operation, values) => {
  const result = operation(1, 3);
  return result;
};

let sum = (n1, n2) => {
  return n1 + n2;
};

console.log(calculate(sum));

//

const arrNum = [1, 2, 3, 4, 5];

const result = arrNum.map((num) => num * num);

console.log({ result });

//filter
const filtered = arrNum.filter((num) => num % 2 == 0);
console.log({ filtered });

//  reduce

const arr = [1, 2, 5, 7, 8, 9];
// get the total sum of array element

const arraySum = arr.reduce((acc, currentElement) => {
  acc += currentElement;
  return acc;
}, 0);

console.log({ arraySum });

const users = [
  { firstName: "akshay", lastName: "saini", age: 25 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 25 },
];

//count users's age
const re = users.reduce((acc, currentElement) => {
  //if age is present
  if (acc[currentElement.age]) {
    console.log(currentElement.age);
    acc[currentElement.age] = ++acc[currentElement.age];
  } else {
    acc[currentElement.age] = 1;
  }

  return acc;
}, {});

console.log({ re });

// find those users who have age less than 26 , return their first name
// using reduce

//count users's age
const resultArr = users.reduce((acc, currentElement) => {
  if (currentElement.age < 26) {
    acc.push(currentElement.firstName);
  }
  return acc;
}, []);

console.log({ resultArr });
