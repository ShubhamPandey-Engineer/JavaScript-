let arr = [1, 3, 4, 4, 5, 6, 5];
let s1 = new Set(arr);
console.log(s1);

//transform the array into distinct array element(using set and spread)
const uniqueElement = [...new Set(arr)];
console.log({ uniqueElement });
console.log(...arr);
