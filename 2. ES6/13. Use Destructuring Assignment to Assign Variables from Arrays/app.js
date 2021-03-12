const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
//destructuring in array

const [x, y,,, z, m] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z, m); // 1, 2, 5 = cada "." significa uma casa 



const [,,,,,d,,l,,] = [1,2,3,4,5,6,7,8]
// Only change code below this line
console.log(d,l)