function howMany(...args) { //we using ...operator spread to receive various values
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.


const sum = (x, y, z) => {
    const args = [x, y, z]; //using be, x y and z in args
    return args.reduce((a, b) => a + b, 0);
    //will receive the first up to the last value, and add it up
}
console.log(sum(2,3,4))

const usingReducerInArray = (...numbers) => numbers.reduce((a, b) => a + b, 0) // 0 = initialValor
console.log(usingReducerInArray(1,2,3,4,5,6,7))
