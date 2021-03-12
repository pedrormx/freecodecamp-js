const add = x => z => y => x + z + y 
console.log(add(10)(20)(30)) // return 60

const checkBiggerNumber = x => y => x > y ? 'x is greater than y' : 'y is greater than x'