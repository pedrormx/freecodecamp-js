const doubler = (item) => item * 2 
// the same function, without the parameter parentheses
const doubler = item => item * 2;
doubler(2)


//It is possible to pass more than one argument into an arrow function.

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // returns 8